# Brick by Script

Build interiors, write scripts, and work on clothing, jewelry and vehicles in an offline Windows workspace. Keep an editable copy of each project on your computer.

## Install on Windows x64

[Download Brick by Script 0.18.0 for Windows](https://github.com/404hxlo/brick-by-script/releases/download/v0.18.0/Brick-by-Script-0.18.0-Setup.exe) — direct installer download, 162.5 MB.

Run the downloaded installer, then launch Brick by Script. For an update, close the app before running the new installer. Back up important projects before upgrading.

[Release notes, checksums and optional installer + examples ZIP](https://github.com/404hxlo/brick-by-script/releases/tag/v0.18.0). The ZIP includes editable examples, sample resources and walkthroughs. Extract it before opening its installer. GitHub’s automatically generated source archives are not the app installer.

## New in 0.18.0

- **Update inside the app.** Open **Workspace settings → App updates**, check releases and read the notes.
- Download while you work, cancel or retry, and choose **Install and restart** when ready.
- The app verifies the published download hash and size, saves before closing, and reopens after successful installation.
- Optional startup checks and preview releases stay under your control; neither automatically installs an update.
- Install this version once if you have 0.17.1 or older. Future updates use the in-app flow in the registered Windows installation.

[In-app update guide](https://404hxlo.github.io/brick-by-script/docs/app-updates/)

## Included project tools

- Organize projects with folder labels, tags and favorites. Rename, duplicate, or move them to recoverable Trash.
- Keep named and pinned checkpoints. With autosave off, choose Save, Discard or Cancel when changing projects or closing.
- Rename/move, duplicate and remove script files and folders. Removal creates a recovery checkpoint first.
- Keep clothing/jewelry Undo when changing studios, reuse artwork with Copy/Paste, and recall fitting settings by jewelry type.
- Explore the 0.17.0 expansion: 19 clothing categories and watches, bracelets, rings, grills and earrings. Non-template clothing starts from a matching permitted GTA or imported mesh; advanced rigging and modeling use Blender.

[What’s new and what remains](https://404hxlo.github.io/brick-by-script/docs/whats-new/) · [Recovery and Undo](https://404hxlo.github.io/brick-by-script/docs/recovery-and-undo/)

## Try the app

- **Move a doorway.** Choose **Getting started → Open example house → Edit the example house**. Select the living room, move its front door, and inspect the change in 3D.
- **Write a command.** Choose **Getting started → Make a chat command**, change the greeting, then type `/hello` in the simulated chat.
- **Move your work to a laptop.** Choose **Getting started → Your projects → Save project backup…**, transfer the `.brickbyscript` file, then choose **Open project backup…** on the other computer.

## Native map builds

Both demos run offline. Rebuilding an edited interior for GTA V Legacy requires Blender, Sollumz, and its compatible native export provider. For a development server, the complete ZIP includes `two-room-house.zip` and `WALKTHROUGH.md` with the sample location and in-game checks.

Version 0.18.0 is an unsigned Windows alpha. The production build, 375 automated tests (11 optional cases skipped), desktop workflows, update UI/save guards, real isolated NSIS installation/restart, and isolated 0.17.1-to-0.18.0 app upgrade/reinstall checks passed. Clean-device/laptop installation and the in-game walkthrough remain pending. Native build tests and an editor preview do not establish in-game acceptance.

## Explore the website

[Visit Brick by Script](https://404hxlo.github.io/brick-by-script/) for studio previews, beginner project guides and download information.

The studio screenshots were captured in alpha 0.16.6; their capture labels are retained. Imported GTA models pictured on the website are not bundled. The desktop application source is not included in this repository.

## Documentation

[Read the Brick by Script docs](https://404hxlo.github.io/brick-by-script/docs/) for installation, beginner projects, all five studios, backups, exports and testing. Search the guides with Ctrl+K.
