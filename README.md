# Brick by Script

Build interiors, write scripts, and work on clothing, jewelry and vehicles in one Windows workspace. Keep editable projects locally and optionally save private cloud snapshots with GitHub.

## Install on Windows x64

[Download Brick by Script 0.20.0 for Windows](https://github.com/404hxlo/brick-by-script/releases/download/v0.20.0/Brick-by-Script-0.20.0-Setup.exe) — direct installer download.

Already using 0.18.0 or later? Open **Workspace settings → App updates**, enable **Include preview releases**, then check, download and choose **Install and restart**. Earlier versions need one manual installation to gain the updater. Save your work and keep a backup before upgrading.

[Release notes, checksums and optional installer + examples ZIP](https://github.com/404hxlo/brick-by-script/releases/tag/v0.20.0). Extract the ZIP before opening its installer. GitHub's automatically generated source archives are not the app installer.

## New in 0.20.0 — Midnight Showroom

- **One shared navigation bar.** Home, Projects, Studios, Tools and Learn keep the existing workspaces within reach. Start a script resource, MLO interior, clothing design, jewelry design or vehicle project from one New project menu.
- **See your saved work.** Home resumes the current project and shows recent projects. The library uses actual saved viewport previews with a clear fallback when a preview is unavailable. The bounded preview cache stays on this computer; it is not an asset upload or a backup.
- **Keep projects organized.** A clearer gallery retains search, studio/folder filters, favorites, tags, selection, context menus, recoverable Trash and recovery. Renaming or organizing an unchanged project keeps its preview.
- **Make the workspace yours.** Settings has a category sidebar, live workspace preview and reachable Done button. Panel choices and editor preferences still persist across restarts.
- **Work in a consistent blue theme.** Navy studio panels and a calmer vehicle stage bring the brand across the app without changing imported geometry or paint.
- **Keep editing intentional.** Navigation dropdowns block model-editing shortcuts while their controls have focus. Saved previews exclude menus, dialogs and notifications.

Existing projects remain in the same local library. Beginner exercises, the editable example house, backups and learning links remain available on Home below the recent-project gallery. Earlier editing, recovery, settings and update features are retained.

[What’s new](https://404hxlo.github.io/brick-by-script/docs/whats-new/#midnight-showroom) · [Find your way around](https://404hxlo.github.io/brick-by-script/docs/introduction/#find-your-way) · [Saved project previews](https://404hxlo.github.io/brick-by-script/docs/projects-and-backups/#saved-previews)

## Included project tools

- Script, MLO, Clothing, Jewelry and Vehicle studios with beginner guidance and advanced tool workflows.
- Workspace settings for panels, editor preferences, recovery, tools, accounts and updates.
- Optional GitHub accounts and private project snapshots. Explicitly save a chosen project, then get a separate local copy using the same account elsewhere. Conflicts protect newer cloud versions. This is not automatic sync or simultaneous editing.
- Project folders, tags, favorites, independent duplication and recoverable Trash; named and pinned checkpoints; Save / Discard / Cancel with autosave off.
- Clothing artwork Copy/Paste and creator Undo retained when switching studios during a session.
- 19 clothing categories, plus watches, bracelets, rings, grills and earrings. Categories beyond starter tops begin with matching permitted GTA assets or compatible imported geometry; advanced rigging and modeling use Blender.

No account is needed for local editing. The cloud preview allows 512 MiB of reserved snapshot storage per account, including older versions and unfinished transfers. Read the [cloud guide](https://404hxlo.github.io/brick-by-script/docs/cloud-projects/) before moving linked sources between computers.

## Try the app

- **Move a doorway.** Choose **Home → Open example house → Edit the example house** and inspect the change in 3D. Scroll below Recent projects to find the example on Home.
- **Write a command.** Choose **Home → Make a chat command**, change the greeting, then type `/hello` in the simulated chat.
- **Find a project.** Choose **Projects** or press **Ctrl+O**, then search or filter the gallery.
- **Move a project.** Use **Workspace settings → Account & cloud** for optional online snapshots, or local project backups and **Tools → Project transfer** without a cloud account.

## Validation and alpha limits

Development and packaged 0.20.0 walkthroughs passed with isolated copies of a real vehicle, a downloaded chain and the editable sample house. Checks covered all five creation choices, navigation, context menus, real saved previews, settings persistence, project reopening and source-file integrity. Both reported no renderer or console errors. Settings, onboarding and project selection/recovery checks passed, including smaller windows.

The broader unit run passed **469 tests**, with **13 environment-dependent skips**. An additional focused preview/cache/framing suite passed **20 checks**. These are separate test runs, not counts of product features or a claim that every possible workflow was retested.

This is an **unsigned Windows alpha**. Production signing, clean-device/laptop acceptance and actual FiveM gameplay testing remain pending. Native exports require the relevant tools and in-game validation. The examples ZIP includes the original two-room house and its test guide. This redesign does not establish new native-export or in-game acceptance results.

An earlier real GitHub login and hosted script-project upload/restore passed between two independent profiles on one Windows computer. This UI update did not repeat hosted sign-in or cross-device transfer. Consult the [current release notes](https://github.com/404hxlo/brick-by-script/releases/tag/v0.20.0) for the exact download and verification boundaries.

## Website and guides

[Visit Brick by Script](https://404hxlo.github.io/brick-by-script/) · [Read the documentation](https://404hxlo.github.io/brick-by-script/docs/)

Studio screenshots retain their historical capture labels. Imported GTA models pictured on the website are not bundled; use your own permitted files. The desktop source stays private; this repository contains the public website and downloads.
