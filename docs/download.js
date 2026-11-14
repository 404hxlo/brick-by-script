(function () {
  'use strict';

  const repository = 'https://github.com/404hxlo/brick-by-script';
  const releasesUrl = 'https://api.github.com/repos/404hxlo/brick-by-script/releases?per_page=100';
  const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;

  function parseVersion(value) {
    if (typeof value !== 'string' || value.length > 100) return null;
    const match = versionPattern.exec(value);
    if (!match) return null;
    const numbers = match.slice(1, 4).map(Number);
    if (numbers.some(number => !Number.isSafeInteger(number))) return null;
    const prerelease = match[4] ? match[4].split('.') : [];
    if (prerelease.some(part => /^\d+$/.test(part) && part.length > 1 && part.startsWith('0'))) return null;
    return { value, numbers, prerelease };
  }

  function compareVersions(left, right) {
    for (let index = 0; index < 3; index++) {
      if (left.numbers[index] !== right.numbers[index]) return left.numbers[index] > right.numbers[index] ? 1 : -1;
    }
    if (!left.prerelease.length || !right.prerelease.length) {
      return left.prerelease.length ? -1 : right.prerelease.length ? 1 : 0;
    }
    for (let index = 0; index < Math.max(left.prerelease.length, right.prerelease.length); index++) {
      const a = left.prerelease[index];
      const b = right.prerelease[index];
      if (a === undefined || b === undefined) return a === undefined ? -1 : 1;
      if (a === b) continue;
      const aNumeric = /^\d+$/.test(a);
      const bNumeric = /^\d+$/.test(b);
      if (aNumeric && bNumeric) return a.length === b.length ? (a > b ? 1 : -1) : (a.length > b.length ? 1 : -1);
      if (aNumeric !== bNumeric) return aNumeric ? -1 : 1;
      return a > b ? 1 : -1;
    }
    return 0;
  }

  function downloadUrlFor(version) {
    return repository + '/releases/download/v' + version + '/Brick-by-Script-' + version + '-Setup.exe';
  }

  function versionFromDownloadUrl(url) {
    if (typeof url !== 'string') return null;
    const prefix = repository + '/releases/download/v';
    if (!url.startsWith(prefix)) return null;
    const version = parseVersion(url.slice(prefix.length).split('/')[0]);
    return version && url === downloadUrlFor(version.value) ? version : null;
  }

  function releaseChannel(release, version) {
    if (!release.prerelease) return 'Stable';
    const label = (version.prerelease.join('.') + ' ' + (typeof release.name === 'string' ? release.name : '')).toLowerCase();
    if (/\balpha\b/.test(label)) return 'Alpha';
    if (/\bbeta\b/.test(label)) return 'Beta';
    return 'Preview';
  }

  function selectLatestRelease(releases, fallbackVersion) {
    const minimum = parseVersion(fallbackVersion);
    if (!minimum || !Array.isArray(releases) || releases.length > 100) return null;
    let selected = null;
    for (const release of releases) {
      if (!release || release.draft !== false || typeof release.prerelease !== 'boolean' ||
          typeof release.tag_name !== 'string' || !release.tag_name.startsWith('v') ||
          typeof release.published_at !== 'string' || !Number.isFinite(Date.parse(release.published_at))) continue;
      const version = parseVersion(release.tag_name.slice(1));
      if (!version || compareVersions(version, minimum) < 0 ||
          (version.prerelease.length && !release.prerelease) || !Array.isArray(release.assets)) continue;
      const filename = 'Brick-by-Script-' + version.value + '-Setup.exe';
      const matching = release.assets.filter(asset => asset && asset.name === filename);
      if (matching.length !== 1) continue;
      const asset = matching[0];
      const downloadUrl = downloadUrlFor(version.value);
      if (asset.state !== 'uploaded' || !Number.isSafeInteger(asset.size) || asset.size < 1024 * 1024 ||
          asset.size > 2 * 1024 * 1024 * 1024 || typeof asset.digest !== 'string' ||
          !/^sha256:[a-f0-9]{64}$/.test(asset.digest) || asset.browser_download_url !== downloadUrl) continue;
      if (selected && compareVersions(version, selected.parsedVersion) <= 0) continue;
      selected = {
        version: version.value,
        parsedVersion: version,
        channel: releaseChannel(release, version),
        bytes: asset.size,
        sha256: asset.digest.slice(7),
        downloadUrl,
        releaseUrl: repository + '/releases/tag/' + release.tag_name
      };
    }
    return selected;
  }

  async function refreshDownloads(document, fetchImplementation, options) {
    const anchors = Array.from(document.querySelectorAll('[data-download]'));
    if (!anchors.length || typeof fetchImplementation !== 'function') return { status: 'unchanged', reason: 'unavailable' };
    const fallbackUrl = anchors[0].getAttribute('href');
    const fallback = versionFromDownloadUrl(fallbackUrl);
    if (!fallback || anchors.some(anchor => anchor.getAttribute('href') !== fallbackUrl)) {
      return { status: 'unchanged', reason: 'invalid-fallback' };
    }
    const controller = new AbortController();
    const timeoutMs = options && Number.isFinite(options.timeoutMs) && options.timeoutMs > 0 ? options.timeoutMs : 5000;
    let timer;
    try {
      // The deadline covers both the request and response body. A failed check
      // never changes the already-working HTML links or intercepts a click.
      const request = (async function () {
        const response = await fetchImplementation(releasesUrl, {
          credentials: 'omit', cache: 'no-store', mode: 'cors',
          headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal
        });
        if (!response.ok) throw new Error('Release list unavailable');
        return response.json();
      }());
      const deadline = new Promise(function (_, reject) {
        timer = setTimeout(function () { controller.abort(); reject(new Error('Release check timed out')); }, timeoutMs);
      });
      const releases = await Promise.race([request, deadline]);
      const selected = selectLatestRelease(releases, fallback.value);
      if (!selected) return { status: 'unchanged', reason: 'no-valid-release' };
      anchors.forEach(anchor => anchor.setAttribute('href', selected.downloadUrl));
      document.querySelectorAll('[data-release-notes]').forEach(anchor => anchor.setAttribute('href', selected.releaseUrl));
      document.querySelectorAll('[data-release-version]').forEach(element => { element.textContent = 'v' + selected.version; });
      document.querySelectorAll('[data-release-platform]').forEach(element => {
        element.textContent = 'Windows x64 · ' + selected.channel + ' ' + selected.version + ' · ' + (selected.bytes / 1000000).toFixed(1) + ' MB';
      });
      document.querySelectorAll('[data-release-channel]').forEach(element => { element.textContent = 'PUBLIC ' + selected.channel.toUpperCase(); });
      return { status: 'updated', version: selected.version };
    } catch (_) {
      return { status: 'unchanged', reason: 'request-failed' };
    } finally {
      clearTimeout(timer);
    }
  }

  const api = { parseVersion, compareVersions, versionFromDownloadUrl, selectLatestRelease, refreshDownloads };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else if (typeof document !== 'undefined' && typeof fetch === 'function') {
    const start = function () { void refreshDownloads(document, fetch); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
  }
}());
