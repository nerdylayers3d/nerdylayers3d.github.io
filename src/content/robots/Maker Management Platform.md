---
type: software-project
robot_name: Maker Management Platform
short_name: MMP
concept: Self-hosted 3D-printing project library & repository manager
category: software
status: discontinued
tags: [software]
cover: mmp-cover.png
discontinued_date: 2025-11-21
discontinued_after: V2 React rewrite (~45% feature parity)
created: 2023-11-29
last_active: 2025-11-21
repo: https://github.com/Maker-Management-Platform
discord: https://discord.gg/SqxKE3Ve4Z
license: BSD 2-Clause (agent), MIT (fauxgl), others unlicensed
language: Go, TypeScript, JavaScript
topics: 3d-printing, klipper, project-repository, stl, makerworld, thingiverse
---

Self-hosted 3D-printing **project library + repository manager**. Lets you keep a local catalogue of STL projects (your own, plus imports from MakerWorld and Thingiverse), with auto-generated 3D thumbnails and Klipper integration in mind.

Built across ~2 years (Nov 2023 → Nov 2025), then archived. The pieces still work as standalone references; the codebase is no longer maintained.

---

## Component repositories

All under [github.com/Maker-Management-Platform](https://github.com/Maker-Management-Platform) — every repo is currently archived.

| Repo | Language | Role |
|---|---|---|
| [`agent`](https://github.com/Maker-Management-Platform/agent) | Go | **Backend service.** REST API + STL library scanner + 3D-model thumbnail renderer. Configured via `config.toml`. Imports projects from MakerWorld + Thingiverse. (34 stars, 8 forks, BSD-2-Clause) |
| [`mmp-ui`](https://github.com/Maker-Management-Platform/mmp-ui) | TypeScript / React / Vite | **Web UI.** SPA that talks to `agent` for library browsing, project management, import flows. (25 stars) |
| [`mmp-companion`](https://github.com/Maker-Management-Platform/mmp-companion) | JavaScript | **Chrome extension.** Sits in the browser toolbar. When the user is on a MakerWorld or Thingiverse project page, captures the session cookies + URL and forwards them to a configured local MMP instance, which then downloads the project assets. (13 stars) |
| [`mmp-electron`](https://github.com/Maker-Management-Platform/mmp-electron) | Wails (Go + JS) | **Desktop wrapper.** Bundles `agent` + `mmp-ui` into a single distributable desktop app. |
| [`fauxgl`](https://github.com/Maker-Management-Platform/fauxgl) | Go | **Software-only 3D renderer.** Used by `agent` to generate model preview images without needing a GPU. MIT-licensed; usable standalone. |
| [`docs`](https://github.com/Maker-Management-Platform/docs) | — | Was intended as the central docs site. Currently empty. (351 stars — a lot of accidental SEO interest in the generic "docs" repo name.) |

---

## How the system fits together

```
┌──────────────────┐         ┌──────────────────┐
│  Chrome on user  │         │  Local MMP host  │
│  -------------   │         │  -------------   │
│  mmp-companion   │◄──HTTP─►│  agent (Go)      │
│  (extension)     │  POST   │  port :8000      │
│                  │  cookie │                  │
│  Browsing        │  + URL  │  ┌────────────┐  │
│  makerworld.com  │ ──────► │  │  fauxgl    │  │   ┌────────────┐
│  thingiverse.com │         │  │  renders   │──┼──►│  preview   │
└──────────────────┘         │  │  STL → PNG │  │   │  PNGs      │
                             │  └────────────┘  │   └────────────┘
                             │                  │
                             │  scans library/  │   ┌────────────┐
                             │ ◄──────────────► │   │  STL files │
                             │  on disk         │   │  (local)   │
                             └────────┬─────────┘   └────────────┘
                                      │
                              REST + WebSocket
                                      │
                             ┌────────▼─────────┐
                             │  mmp-ui (React)  │
                             │  in browser, or  │
                             │  inside Electron │
                             └──────────────────┘
```

User flow for importing:
1. User browses MakerWorld or Thingiverse looking for a model.
2. Hits the **mmp-companion** browser extension button.
3. Extension grabs the current tab's URL (and cookies for MakerWorld since it's auth-walled) and POSTs to the local `agent`.
4. `agent` impersonates the user (MakerWorld) or uses the configured API key (Thingiverse) to download the project files.
5. `agent` scans the new files, uses **fauxgl** to render preview thumbnails server-side.
6. New project shows up in the **mmp-ui** web view.

---

## Agent config (Go backend, `config.toml`)

```toml
port = 8000
server_hostname = "localhost"
library_path = "/library"               # root path of the STL library
max_render_workers = 5                  # parallel STL→PNG renders, cap at cpu cores
file_blacklist = [".potato", ".example"]
model_render_color = "#167DF0"          # 3D preview model colour
model_background_color = "#FFFFFF"
thingiverse_token = "..."               # API key for Thingiverse imports
```

The agent ships with a `buildAndRun.sh` for quick local startup. It serves the bundled `mmp-ui` from `frontend/`, exposes a REST API for project metadata, and uses fauxgl for the preview-render pipeline.

---

## Repo layout (agent)

```
agent/
├── main.go
├── config.toml
├── go.mod / go.sum
├── core/             # domain logic
├── helpers/          # utility code
├── cache/            # cached renders / metadata
├── data/             # persisted state
├── frontend/         # mmp-ui build artifacts
├── temp/             # work area for active imports
└── testdata/
```

---

## v2 / what was underway when archived

The v2 rewrite went through **three distinct phases**, each on its own branch on `agent`. The final state is captured on the Claude-authored integration branch from November 2025 — that's the last word on what v2 actually was when the project wound down.

### Phase 1 — `v2` (htmx + templ), Jul–Oct 2024

The original v2 attempt. README pitched it as:

> MMP v2 — features a new filesystem abstraction with the mindset that **everything is an asset**, and the structure is just a tree of assets that you can drill through. The frontend is now embedded in the same docker, **dropping React in favour of htmx and templ**. This aims to simplify development and as a bonus easier integration with NAS OS's. There are also plans to distribute MMP as an installable application **using Wails**.

Active July → October 2024 (39 commits ahead of `main`, 91 files). Built out the pluggable filesystem (`local`, `gitfs` — with `s3`, `azureblob`, `googlestorage` stubbed), the "everything is an asset" model, multi-format bundle extraction (the "zips inside zips inside zips" handling), Wails dev mode, and a chi-based router refactor. The new code lives in a **sibling `v2/` Go package** alongside the v1 codebase rather than replacing it in place.

Then it went quiet for ~4 months.

### Phase 2 — `v2-react`, Feb 2025

Pivot away from htmx, back to React. Branched from the htmx `v2` branch and added 2 commits ("sync react v2" + "sync asset create form") on **Feb 17–21, 2025**. This was a substantial re-do of the entire `frontend/` tree:

- New React+TypeScript+Vite SPA: `App.tsx`, NavBar, Sidebar, Dashboard, Asset/AssetCard/AssetDetails/AssetEditForm/AssetNewForm, Header, settings provider, routes
- **Tailwind deleted, replaced with CSS Modules** (`*.module.css` per component)
- **Wails runtime bindings** included (`frontend/wailsjs/runtime/`) — so the desktop-app distribution path was still alive
- 3D viewer migrated from `.js` to `.ts`
- Three `cmd/` binaries: `command` (CLI/server), `desktop` (Wails app), `desktopgen` (binding generation)
- Backend additions: new `v2/library/api/` package (file, index, patch endpoints), response helpers in `v2/api/`

The README never got updated — it still claimed v2 was htmx. The codebase actually moved back to React.

Then the branch went quiet again for **8 months**.

### Phase 3 — `claude/v2-react-integration-strategy-…`, Nov 2025 (THE END)

In **November 2025**, an AI-driven push to finally land v2 ran on its own branch authored by `Claude`. Eight commits over two weeks:

| Date | Commit |
|---|---|
| 2025-11-06 | "Add comprehensive V2-React integration strategy" |
| 2025-11-06 | "Merge v2-react branch — Phase 1, Step 2: Branch Merge Strategy" |
| 2025-11-06 | "Add merge verification test suites" |
| 2025-11-18 | "Implement Phase 2: Backend Migration" |
| 2025-11-18 | "Implement Phase 4: Feature Parity" |
| 2025-11-18 | "Implement Phase 5: Testing & Validation" |
| 2025-11-21 | "Implement v2 Downloader Feature with MakerWorld Support" |
| **2025-11-21** | **"Add comprehensive V1 to V2 feature parity analysis"** ← **last commit on the entire repo** |

That final commit is the most honest assessment of where MMP v2 stood. From the commit body:

> Summary:
> - Overall feature parity: **~45%**
> - Missing: **~30 API endpoints**
> - Core gaps: Asset CRUD, Printer API, System API, Tags API
>
> Categories Analyzed:
> 1. Projects API (9 endpoints missing)
> 2. Assets API (2 endpoints missing)
> 3. Tags API (1 endpoint missing)
> 4. System API (5 endpoints missing)
> 5. Temp Files API (2 endpoints missing)
> 6. Asset Types API (1 endpoint missing)
> 7. Printer Integration API (11 endpoints missing)
> 8. Slicer Integration API (3 endpoints missing)
> 9. Events API (different implementation: **SSE → WebSocket**)
>
> Priority Ranking:
> - P0 (Critical): Asset CRUD, Printer Management API
> - P1 (High): Tags API, System API, Project/Root Asset ops
> - P2 (Medium): Slicer integration, Camera streaming
> - P3 (Low): Temp files, Project move
>
> Implementation Plan:
> - Phase 1: Essential CRUD (1–2 weeks)
> - Phase 2: Printer API (1 week)
> - Phase 3: System Management (1 week)
> - Phase 4: Advanced Features (1 week)
>
> **Estimated effort: 4–5 weeks, ~3,000–4,000 lines of code**

That assessment was filed, no further commits landed, and the repo was archived.

### What v2 was changing (architecturally, as of Nov 2025)

| Area | v1 (main) | v2 (final state) |
|---|---|---|
| **Frontend** | Separate `mmp-ui` React/Vite SPA repo, served by `agent` | React+TypeScript+Vite SPA **inside the agent repo** under `frontend/`, with CSS Modules + Wails runtime bindings. No separate `mmp-ui` repo. |
| **Library storage** | Single local folder | **Pluggable filesystem layer** — `local`, `gitfs`, with `s3`/`azureblob`/`googlestorage` stubbed |
| **Distribution** | Manual self-host | Three binaries from one tree: `cmd/command` (server), `cmd/desktop` (Wails), `cmd/desktopgen` (codegen) |
| **Asset model** | Projects contain files | **"Everything is an asset"** — assets form a tree you can drill through, including nested archives |
| **Bundled archives** | Limited | First-class multi-format extractor (`.zip`, `.3mf`, nested) |
| **Code organization** | Single Go module at repo root | New code lives in **sibling `v2/`** package: `v2/api`, `v2/library`, `v2/web`, `v2/database`, `v2/config`, `v2/utils` — coexists with the legacy code |
| **Events** | SSE | WebSocket (different implementation — explicit non-backwards-compat) |

### Why v2 never landed (interpretation)

Three honest reads, in order of likely importance:

1. **The rewrite was bigger than the platform.** v2 set out to change frontend, backend organization, packaging, storage, AND the core data model simultaneously. By Nov 2025, ~45% feature parity with v1 was achieved over ~17 months of intermittent work, with ~3000–4000 LOC still to write. That's enormous solo effort against a moving v1 target.
2. **The Claude phase showed the gap was honest, not artifact.** The final integration push used AI to accelerate, made real progress (downloader, backend migration, parity work), AND filed an unsentimental gap-analysis estimating another 4–5 weeks. That estimate was probably accurate — and probably the trigger for archiving rather than committing another 4–5 weeks.
3. **External landscape moved.** Over 2024–2025 MakerWorld grew its own library tooling, Klipper UIs (Mainsail/Fluidd) covered the printer-control axis. The v1 use case was less unique by the end.

If anyone picks this up, **`claude/v2-react-integration-strategy-011CUrmEi6fRyQWZT5FyP2nW`** is the canonical starting point — it has the full v2-react work merged plus the AI-driven phase 2/4/5 implementations plus the explicit gap-analysis roadmap of what's still missing.

---

## Status / why it's archived

All 7 repos in the org are marked archived. No public retrospective. The project ran for two years with steady community interest (combined ~70 stars across the main repos, 8 forks on `agent`, 31 open issues at archive time, active Discord) but was wound down at the end of 2025.

Possible reasons to consider if returning to the design space:
- MakerWorld and Thingiverse added their own better library/sync tooling
- Klipper-side projects like Mainsail/Fluidd cover the printer-control axis
- Maintaining a multi-repo TypeScript + Go + Chrome-extension + Electron stack solo is expensive

The codebase still works as-is for anyone who wants to self-host it from the archived sources.

---

## Links

- Org: https://github.com/Maker-Management-Platform
- Discord: https://discord.gg/SqxKE3Ve4Z
- `agent` backend: https://github.com/Maker-Management-Platform/agent
- `mmp-ui` frontend: https://github.com/Maker-Management-Platform/mmp-ui
- `mmp-companion` extension: https://github.com/Maker-Management-Platform/mmp-companion
- `fauxgl` renderer (the most independently reusable piece): https://github.com/Maker-Management-Platform/fauxgl
