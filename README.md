# Brick by Script

Build interiors, write scripts, and work on clothing, jewelry and vehicles in one Windows workspace. Keep editable projects locally and optionally save private cloud snapshots with GitHub.

## Install on Windows x64

[Download Brick by Script 0.20.1 for Windows](https://github.com/404hxlo/brick-by-script/releases/download/v0.20.1/Brick-by-Script-0.20.1-Setup.exe) — direct installer download.

Already using 0.18.0 or later? Open **Workspace settings → App updates**, enable **Include preview releases**, then check, download and choose **Install and restart**. Earlier versions need one manual installation to gain the updater. Save your work and keep a backup before upgrading.

[Release notes, checksums and optional installer + examples ZIP](https://github.com/404hxlo/brick-by-script/releases/tag/v0.20.1). Extract the ZIP before opening its installer. GitHub's automatically generated source archives are not the app installer.

## New in 0.20.1 — Start with your GTA character

- **Set up a real fitting character.** Clothing Studio starts with **Set up GTA character** for male or female freemode bodies, replacing its old bundled fitting person. For the default top, choose **Tops, T-shirts & hoodies**, select a fitting body and follow setup. You do not need to find a wearable GLB first.
- **Prepare once on this PC.** Setup reads your own GTA V Legacy installation through Blender with Sollumz and CodeWalker. Studio keeps the prepared body in this app profile. Select setup in a new top design to reuse it; saved setup projects can restore their character automatically.
- **Keep your garments and artwork.** Setup does not silently replace existing original garments or custom GLB bindings. Jackets, dresses and other categories keep their matching item-browser workflows. Existing GLB and GTA component imports remain available.
- **Create without a character when you need to.** Original shirt and hoodie patterns remain available in a garment-only workspace. Use a real GTA body for game-specific fit checks.

Game models are **not included in the download**. First-time preparation requires your own compatible GTA V Legacy installation, Blender with Sollumz and CodeWalker. The local character cache is not included in project backups or cloud snapshots; another PC needs its own setup. A custom imported GLB still needs its original file for relinking.

[Set up your character](https://404hxlo.github.io/brick-by-script/docs/clothing-studio/#set-up-gta-character) · [Prepare the tools](https://404hxlo.github.io/brick-by-script/docs/blender-and-sollumz/) · [What’s new](https://404hxlo.github.io/brick-by-script/docs/whats-new/#gta-character-setup)

## Included project tools

- Script, MLO, Clothing, Jewelry and Vehicle studios with beginner guidance and advanced tool workflows.
- Midnight Showroom navigation, actual saved project previews, and workspace settings for panels, editor preferences, recovery, tools, accounts and updates.
- Optional GitHub accounts and private project snapshots. Explicitly save a chosen project, then get a separate local copy using the same account elsewhere. Conflicts protect newer cloud versions. This is not automatic sync or simultaneous editing.
- Project folders, tags, favorites, independent duplication and recoverable Trash; named and pinned checkpoints; Save / Discard / Cancel with autosave off.
- Clothing artwork Copy/Paste and creator Undo retained when switching studios during a session.
- 19 clothing categories, plus watches, bracelets, rings, grills and earrings. Categories beyond starter tops begin with matching permitted GTA assets or compatible imported geometry; advanced rigging and modeling use Blender.

No account is needed for local editing. The cloud preview allows 512 MiB of reserved snapshot storage per account, including older versions and unfinished transfers. Read the [cloud guide](https://404hxlo.github.io/brick-by-script/docs/cloud-projects/) before moving linked sources between computers.

## Try the app

- **Design a top.** Open **Studios → Clothing Studio**, create a design, select **Tops, T-shirts & hoodies** and use **Set up GTA character**. Follow the [clothing guide](https://404hxlo.github.io/brick-by-script/docs/clothing-studio/) to choose a paint surface and add artwork.
- **Move a doorway.** Choose **Home → Open example house → Edit the example house** and inspect the change in 3D. Scroll below Recent projects to find the example on Home.
- **Write a command.** Choose **Home → Make a chat command**, change the greeting, then type `/hello` in the simulated chat.
- **Find a project.** Choose **Projects** or press **Ctrl+O**, then search or filter the gallery.
- **Move a project.** Use **Workspace settings → Account & cloud** for optional online snapshots, or local project backups and **Tools → Project transfer** without a cloud account.

## Validation and alpha limits

The final 0.20.1 automated suite completed **507 tests: 494 passed and 13 environment-dependent tests were skipped**. Installer checks and the final packaged character-interface checks also passed. These checks do not establish clean-device or FiveM gameplay acceptance.

This is an **unsigned Windows alpha**. Production signing, clean-device/laptop acceptance and actual FiveM gameplay testing remain pending. Character setup and artwork previews do not replace native conversion, rigging or in-game validation. Native exports require the relevant installed tools and a supported source; arbitrary imported clothing can still need manual Blender/Sollumz work. The examples ZIP includes the original two-room house and its test guide.

An earlier real GitHub login and hosted script-project upload/restore passed between two independent profiles on one Windows computer. This update does not establish new hosted sign-in or cross-device transfer results. Consult the [current release notes](https://github.com/404hxlo/brick-by-script/releases/tag/v0.20.1) for the exact download and verification boundaries.

## Website and guides

[Visit Brick by Script](https://404hxlo.github.io/brick-by-script/) · [Read the documentation](https://404hxlo.github.io/brick-by-script/docs/)

Studio screenshots retain their historical capture labels. Imported GTA models pictured on the website are not bundled; use your own permitted files. The desktop source stays private; this repository contains the public website and downloads.
