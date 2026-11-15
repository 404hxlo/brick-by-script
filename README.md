# Brick by Script

Build interiors, write scripts, and work on clothing, jewelry and vehicles in one Windows workspace. Keep editable projects locally and optionally save private cloud snapshots with GitHub.

## Install on Windows x64

[Download Brick by Script 0.19.3 for Windows](https://github.com/404hxlo/brick-by-script/releases/download/v0.19.3/Brick-by-Script-0.19.3-Setup.exe) — direct installer download.

Already using 0.18.0 or later? Open **Workspace settings → App updates**, enable **Include preview releases**, then check, download and choose **Install and restart**. Earlier versions need one manual installation to gain the updater. Save your work and keep a backup before upgrading.

[Release notes, checksums and optional installer + examples ZIP](https://github.com/404hxlo/brick-by-script/releases/tag/v0.19.3). Extract the ZIP before opening its installer. GitHub's automatically generated source archives are not the app installer.

## New in 0.19.3

- **Keep newer edits.** Delayed MLO imports and fitting saves preserve newer work and remain tied to the intended project. Undo restores the actual state before an import.
- **Recover an intact checkpoint.** Damage to the latest project record no longer blocks recovery from valid history. Restore a separate copy without replacing the original. A readable library and valid checkpoint are still required.
- **Use results from the right scene.** MLO builds, design proposals, mesh previews and walkthrough reports check the scene or project they belong to. Changed inputs require a fresh result instead of silently applying an outdated one.
- **Replace exports deliberately.** Competing exports to the same existing file now refuse a stale replacement and ask you to export again.
- **Keep collision data editable.** Primitive collision generation follows the scene format, and generated architectural collision stays associated with its authoring data.
- **Move through everyday controls.** Dialogs focus their intended input, project-library search is ready after loading, keyboard-selected commands remain visible, and project shortcuts respect an open dialog.

Tabs, cursor positions and project workspaces still resume locally. Explorer keyboard navigation, project range selection and 3D context menus remain available. Closed-tab history and Undo remain session-only.

[What’s new](https://404hxlo.github.io/brick-by-script/docs/whats-new/#reliability-audit) · [Recover a damaged project](https://404hxlo.github.io/brick-by-script/docs/recovery-and-undo/#recover-a-damaged-project) · [Background results in MLO Studio](https://404hxlo.github.io/brick-by-script/docs/mlo-studio/#background-results)

## Included project tools

- Script, MLO, Clothing, Jewelry and Vehicle studios with beginner guidance and advanced tool workflows.
- Blue blueprint settings for workspace panels, editor preferences, recovery, tools, accounts and updates.
- Optional GitHub accounts and private project snapshots. Explicitly save a chosen project, then get a separate local copy using the same account elsewhere. Conflicts protect newer cloud versions. This is not automatic sync or simultaneous editing.
- Project folders, tags, favorites, independent duplication and recoverable Trash; named and pinned checkpoints; Save / Discard / Cancel with autosave off.
- Clothing artwork Copy/Paste and creator Undo retained when switching studios during a session.
- 19 clothing categories, plus watches, bracelets, rings, grills and earrings. Categories beyond starter tops begin with matching permitted GTA assets or compatible imported geometry; advanced rigging and modeling use Blender.

No account is needed for local editing. The cloud preview allows 512 MiB of reserved snapshot storage per account, including older versions and unfinished transfers. Read the [cloud guide](https://404hxlo.github.io/brick-by-script/docs/cloud-projects/) before moving linked sources between computers.

## Try the app

- **Move a doorway.** Choose **Getting started → Open example house → Edit the example house** and inspect the change in 3D.
- **Write a command.** Choose **Getting started → Make a chat command**, change the greeting, then type `/hello` in the simulated chat.
- **Move a project.** Use **Account & cloud** for optional online snapshots, or local project backups and transfer bundles without a cloud account.

## Validation and alpha limits

The final 0.19.3 automated suite passed **457 tests**, with **11 optional external/native cases skipped and zero failures**. The packaged app passed **112 workflow groups**, including the isolated Windows install/upgrade/reinstall group. These are test scenarios, not a count of features. Isolated **0.19.2 → 0.19.3** installation preserved the tested project types, settings and linked-source references. Tests used disposable profiles, not the owner’s library. Fixes received a separate review pass.

The original two-room example produced a checked native resource ZIP through the local tool pipeline, including YMAP, YTYP, YDR, YBN and YMF files. It was **not deployed or tested inside FiveM**. Some delayed-result checks used controlled responses to verify timing and attribution; they do not establish a fresh live model-provider or game round trip.

This is an **unsigned Windows alpha**. Production signing, clean-device/laptop acceptance and actual FiveM gameplay testing remain pending. Native exports require the relevant tools and in-game validation. The complete examples ZIP includes the original two-room house and its test guide.

An earlier real GitHub login and hosted script-project upload/restore passed between two independent profiles on one Windows computer. This audit tested local cloud-service logic but did not repeat hosted sign-in or cross-device transfer. Clean-laptop, large-asset and every authenticated edge-case acceptance remain unverified. Consult the [current release notes](https://github.com/404hxlo/brick-by-script/releases/tag/v0.19.3) for the exact download and verification boundaries.

## Website and guides

[Visit Brick by Script](https://404hxlo.github.io/brick-by-script/) · [Read the documentation](https://404hxlo.github.io/brick-by-script/docs/)

Studio screenshots retain their historical capture labels. Imported GTA models pictured on the website are not bundled; use your own permitted files. The desktop source stays private; this repository contains the public website and downloads.
