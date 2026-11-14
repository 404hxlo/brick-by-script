'use strict';

const studios = {
  mlo: { number: '01 / MLO STUDIO', title: 'Give your ideas a place.', description: 'Draw a floor plan, furnish the rooms and see your space in 3D. Start with an editable example house, then make it yours.', features: ['Rooms, walls, doors and floor plans', 'Materials and furniture placement', 'Collision and portal inspection tools'], caption: 'Original example geometry · MLO Studio · 0.16.6', alt: 'MLO Studio with an editable furnished original example house', guide: 'house', link: 'Plan your first project' },
  script: { number: '02 / SCRIPT STUDIO', title: 'Make your server do something new.', description: 'Write Lua, work with visual nodes and design NUI interfaces. Start from a guided project or go straight to the code.', features: ['Lua editing and local syntax checks', 'Visual logic and NUI tools', 'QBCore and standalone starters'], caption: 'Bundled qb-welcome example · Script Studio · 0.16.6', alt: 'Script Studio editing the Lua welcome command from an included starter project', guide: 'script', link: 'Plan your first script' },
  clothing: { number: '03 / CLOTHING STUDIO', title: 'Put your own look on it.', description: 'Bring your own supported GTA clothing into the workspace. Add lettering and artwork, inspect its UV layout and check the look on an imported game character.', features: ['Text and image artwork layers', 'Texture layout and fitting tools', 'Editable source and texture exports'], caption: 'Imported GTA character and garment · Clothing Studio · 0.16.6', alt: 'Clothing Studio showing an imported GTA character and actual game garment with custom BRICK artwork', guide: 'shirt', link: 'Plan your first custom tee' },
  jewelry: { number: '04 / JEWELRY STUDIO', title: 'Make the details yours.', description: 'Bring in a chain you have permission to use and inspect it in the jewelry workspace. Explore a name or logo pendant, or continue refining your own imported design.', features: ['Supported GLB chain and pendant imports', 'Name and logo pendant workflows', 'Chain, metal and stone settings'], caption: 'Imported Realcubanmesh by ZEBandit3D · Jewelry Studio · 0.16.6', alt: 'Jewelry Studio displaying the imported Realcubanmesh Cuban chain by ZEBandit3D', guide: 'jewelry', link: 'Plan your signature piece' },
  vehicle: { number: '05 / VEHICLE STUDIO', title: 'Start with a real model. Make it yours.', description: 'Bring a supported GTA vehicle into the workshop. Explore its parts, adjust the appearance and prepare the appropriate native workflow.', features: ['Supported GLB and GTA fragment imports', 'Parts, materials and placement tools', 'Handling and build diagnostics'], caption: 'Imported GTA V Blista · Vehicle Studio · 0.16.6', alt: 'Vehicle Studio displaying an imported GTA V Blista and its native parts hierarchy', guide: 'vehicle', link: 'Plan your first vehicle edit' }
};

const chains = {
  real: { image: 'jewelry.png', caption: 'Imported Realcubanmesh by ZEBandit3D · Jewelry Studio · 0.16.6', alt: 'Realcubanmesh Cuban chain imported into Jewelry Studio' },
  modular: { image: 'jewelry-modular.png', caption: 'Imported Modular Cuban Choker Chain by leon_doing_3D · Jewelry Studio · 0.16.6', alt: 'Modular Cuban Choker Chain by leon_doing_3D imported into Jewelry Studio' },
  cuban: { image: 'jewelry-cuban.png', caption: 'Imported Cuban Chain by Carlos.Maciel · Jewelry Studio · 0.16.6', alt: 'Cuban Chain by Carlos.Maciel imported into Jewelry Studio' }
};
function chooseChain(button) {
  const chain = chains[button.dataset.chain];
  if (!chain) return;
  document.querySelectorAll('[data-chain]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const img = document.getElementById('studio-image'); img.src = 'assets/screenshots/' + chain.image; img.alt = chain.alt;
  document.getElementById('studio-caption').textContent = chain.caption;
  const zoom = document.getElementById('studio-zoom'); zoom.dataset.zoom = img.getAttribute('src'); zoom.dataset.caption = chain.caption;
}

const guides = {
  house: { title: 'A house with your name on it.', label: 'FIRST PROJECT / MLO', intro: 'Begin with the furnished example instead of an empty canvas. This tour is available in the public 0.8.6 preview.', steps: ['Open <strong>Getting started → Open example house → Edit the example house</strong>.', 'Choose the floor plan and select the front door. Move it along the wall, then look at the same doorway in the 3D view.', 'Save the house to your library. Close and reopen it to check that your edit is still there.'], note: 'That is your first editable project. Before using a map in FiveM, follow the native build workflow and the in-game test checklist.' },
  script: { title: 'One small script. One new skill.', label: 'FIRST PROJECT / SCRIPT', intro: 'Start with a bundled Lua example so you can explore how a resource fits together.', steps: ['Create a Script Studio project using a starter that matches your framework: <strong>standalone or QBCore</strong>.', 'Find a welcome or chat message in the starter. Change the text between its quotes, keeping the surrounding Lua syntax intact.', 'Save your edit, run the available syntax checks and inspect <strong>fxmanifest.lua</strong> to see which files belong to the resource.'], note: 'A successful syntax check is not a server test. Use a dedicated development server with the required framework and dependencies before sharing the result.' },
  shirt: { title: 'Turn a blank tee into your tee.', label: 'FIRST PROJECT / CLOTHING', intro: 'This workflow is in the development build shown here; it is not included in the public 0.8.6 download.', steps: ['Open Clothing Studio and start with the original <strong>T-shirt</strong> learning template. Choose the fabric color.', 'Use <strong>Add text</strong> or <strong>Add PNG</strong> for artwork you own. Adjust its position and size, then rotate the preview to check the result.', 'Save the design and export the PNG texture when you want to continue working with it.'], note: 'For real GTA clothing, import your own supported game garment and use its UV layout. A learning tee or a PNG on its own is not a rigged, game-ready clothing asset.' },
  jewelry: { title: 'Start with a signature piece.', label: 'FIRST PROJECT / JEWELRY', intro: 'This workflow is in the development build shown here; it is not included in the public 0.8.6 download.', steps: ['Open Jewelry Studio and try a short name or logo pendant with an original chain.', 'Choose a metal finish and adjust the pendant proportions. Inspect it from the front and side before refining the details.', 'Save the editable project. If you import a GLB, first check its license, scale and orientation.'], note: 'A decorative mesh still needs the appropriate rigging, materials and native conversion to become a wearable GTA accessory. Keep your original source and test the finished result in game.' },
  vehicle: { title: 'Get to know your model.', label: 'FIRST PROJECT / VEHICLE', intro: 'This workflow is in the development build shown here; it is not included in the public 0.8.6 download.', steps: ['Open the original sample coupe to learn the workshop, or import a supported vehicle model you have permission to use.', 'Select a part in the hierarchy. Use visibility controls to inspect the parts underneath, then try a small appearance change.', 'Save the project and review the model source and build diagnostics before choosing an export workflow.'], note: 'The included sample coupe is learning geometry, not a rigged GTA vehicle. Native vehicles need the correct bones, fragment data, materials and dependencies.' },
  privacy: { title: 'A simple website.', label: 'WEBSITE PRIVACY', intro: 'This website does not include analytics, advertising, tracking pixels, sign-up forms or its own cookies. It does not ask for access to your local projects. Documentation search runs in your browser, and your chosen documentation color theme is stored locally in this browser.', steps: null, note: 'The site is hosted on GitHub Pages, so GitHub receives normal web requests when you visit. Download, issue and repository links open GitHub, which has its own privacy policy. Website privacy is separate from any desktop app integrations you choose to enable.' }
};

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panel = document.getElementById('studio-panel');
function chooseStudio(tab) {
  const key = tab.dataset.studio;
  const item = studios[key];
  if (!item) return;
  tabs.forEach(t => { const selected = t === tab; t.setAttribute('aria-selected', String(selected)); t.tabIndex = selected ? 0 : -1; });
  panel.setAttribute('aria-labelledby', tab.id);
  document.getElementById('studio-number').textContent = item.number;
  document.getElementById('studio-title').textContent = item.title;
  document.getElementById('studio-description').textContent = item.description;
  document.getElementById('studio-caption').textContent = item.caption;
  const img = document.getElementById('studio-image');
  img.src = `assets/screenshots/${key}.png`; img.alt = item.alt;
  const zoom = document.getElementById('studio-zoom');
  zoom.dataset.zoom = img.getAttribute('src'); zoom.dataset.caption = item.caption;
  const features = document.getElementById('studio-features');
  features.replaceChildren(...item.features.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  const guide = document.getElementById('studio-guide');
  guide.dataset.guide = item.guide;
  guide.replaceChildren(document.createTextNode(item.link + ' '));
  const arrow = document.createElement('span'); arrow.setAttribute('aria-hidden', 'true'); arrow.textContent = '↗'; guide.append(arrow);
  document.getElementById('chain-picker').hidden = key !== 'jewelry';
  document.getElementById('studio-credit').hidden = !['jewelry', 'clothing', 'vehicle'].includes(key);
  if (key === 'jewelry') chooseChain(document.querySelector('[data-chain="real"]'));
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => chooseStudio(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); chooseStudio(tabs[next]); tabs[next].focus(); tabs[next].scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
  });
});

const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width:601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

document.addEventListener('click', event => {
  const chainButton = event.target.closest('[data-chain]');
  if (chainButton) chooseChain(chainButton);
  const guideButton = event.target.closest('[data-guide]');
  const zoomButton = event.target.closest('[data-zoom]');
  if (guideButton) {
    const guide = guides[guideButton.dataset.guide];
    if (!guide) return;
    document.getElementById('guide-label').textContent = guide.label;
    document.getElementById('guide-title').textContent = guide.title;
    const content = document.getElementById('guide-content');
    content.replaceChildren();
    const intro = document.createElement('p'); intro.textContent = guide.intro; content.append(intro);
    if (guide.steps) {
      const list = document.createElement('ol');
      guide.steps.forEach(step => { const li = document.createElement('li'); li.innerHTML = step; list.append(li); });
      content.append(list);
    }
    const note = document.createElement('p'); note.className = 'guide-note'; note.textContent = guide.note; content.append(note);
    document.getElementById('guide-dialog').showModal();
  }
  if (zoomButton) {
    const caption = zoomButton.dataset.caption;
    const img = document.getElementById('full-image'); img.src = zoomButton.dataset.zoom; img.alt = caption;
    document.getElementById('image-caption').textContent = caption;
    document.getElementById('image-dialog').showModal();
  }
  const close = event.target.closest('.close-dialog');
  if (close) close.closest('dialog').close();
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
});
