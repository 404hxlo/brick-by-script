# Brick by Script

Build interiors, write scripts, and work on clothing, jewelry and vehicles in one Windows workspace. Keep editable projects locally and optionally save private cloud snapshots with GitHub.

## Install on Windows x64

[Download Brick by Script 0.19.2 for Windows](https://github.com/404hxlo/brick-by-script/releases/download/v0.19.2/Brick-by-Script-0.19.2-Setup.exe) — direct installer download.

Already using 0.18.0 or later? Open **Workspace settings → App updates**, enable **Include preview releases**, then check, download and choose **Install and restart**. Earlier versions need one manual installation to gain the updater. Save your work and keep a backup before upgrading.

[Release notes, checksums and optional installer + examples ZIP](https://github.com/404hxlo/brick-by-script/releases/tag/v0.19.2). Extract the ZIP before opening its installer. GitHub's automatically generated source archives are not the app installer.

## New in 0.19.2

- **Pick up where you left off.** Local project sessions retain your tabs, active file, cursor and selection, editor scroll and last project workspace across restarts. This is navigation state on this computer, separate from saving the project or uploading a cloud snapshot.
- **Navigate Explorer from the keyboard.** Use arrow keys, Home/End and type-ahead to find files and folders. Enter opens a file; Shift+F10 opens its actions. Protected manifest actions are disabled before an invalid operation.
- **Select project ranges.** Shift-click or Shift+arrow selects a range; Ctrl-click toggles individual projects. Ctrl+A selects the visible library list while it has focus, while text fields keep normal text selection. Filtering clears hidden selections, and sorting keeps the selection anchor tied to the same project.
- **Work directly in the 3D view.** Right-click visible MLO geometry, vehicle parts and imported jewelry meshes for their existing actions. Right-drag still controls the camera. Blank space offers applicable frame/show-all controls.
- **Find and manage more comfortably.** Search continues beyond the first 100 results with Previous/Next. Clear filters or selections, refresh the library or retry a failed load, and review the selected project names before moving a batch to Trash. Dialogs have accessible titles.

Closed-tab history and Undo remain session-only. Vehicle part visibility changes the preview; hiding imported jewelry parts also affects their supported export. Ordinary clicks on library project names still open projects, and a single-project context action targets the clicked project.

[Resume and navigate](https://404hxlo.github.io/brick-by-script/docs/script-studio/#resume-and-navigate) · [Select project ranges](https://404hxlo.github.io/brick-by-script/docs/projects-and-backups/#select-project-ranges) · [What's new](https://404hxlo.github.io/brick-by-script/docs/whats-new/)

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

The final 0.19.2 automated suite passed 435 tests, with 11 optional external/native cases skipped. Thirty workflow groups passed against the packaged app, including full process restart with tabs, cursor/selection, horizontal and vertical scroll, workspace and deliberately closed tabs restored. Isolated 0.19.1 to 0.19.2 installation, upgrade, reinstall and uninstall checks preserved generated projects and settings. These tests used disposable profiles, not the owner’s library.

This is an **unsigned Windows alpha**. Production signing, clean-device/laptop checks and the owner-run FiveM walkthrough remain pending. Native exports require the relevant tools and actual in-game validation. This update adds editing conveniences; it does not expand native GTA format support. The complete examples ZIP includes an original two-room house and its test guide.

An earlier real GitHub login and hosted script-project upload/restore passed between two independent profiles on one Windows computer. That does not establish clean-laptop, large-asset or every authenticated edge-case acceptance. Consult the [current release notes](https://github.com/404hxlo/brick-by-script/releases/tag/v0.19.2) for this version's details.

## Website and guides

[Visit Brick by Script](https://404hxlo.github.io/brick-by-script/) · [Read the documentation](https://404hxlo.github.io/brick-by-script/docs/)

Studio screenshots retain their historical capture labels. Imported GTA models pictured on the website are not bundled; use your own permitted files. The desktop source stays private; this repository contains the public website and downloads.
