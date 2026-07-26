# CLAUDE.md

Guidance for Claude Code / AI agents working in this repository.

## Project

Personal portfolio website for Ziad Bougrine (`ziadbougrine`), a single-page Angular app with Home, Resume, and Projects sections. Deployed to Firebase Hosting at project `ziadbougrine-38983`. Repo: `https://github.com/DerZiad/Portfolio` (default branch `main`).

## Tech Stack

- **Angular 16.1** (module-based, not standalone components) with `RouterModule.forRoot`.
- **TypeScript 5.1**, `strict: true` plus strict Angular template checking (`strictTemplates`, `strictInjectionParameters`, `strictInputAccessModifiers`).
- **Bootstrap 5.3** for layout/styling, plus Ionicons and Font Awesome for icons.
- **RxJS 7.8**, `@angular/animations` for route transitions, `HttpClient` for asset fetches.
- `pikaday` is wired into `angular.json` styles/scripts but not actively used in components.
- Build output goes to `public/` (not the Angular default `dist/`) — this matches Firebase's `hosting.public` setting.

## Commands

```bash
npm install          # install dependencies
npm start            # ng serve → dev server on http://localhost:4200
npm run build        # production build → outputs to public/
npm run watch        # development build in watch mode
npm test             # ng test (Karma + Jasmine)
```

Note: the README states tests are not required. Spec files (`*.spec.ts`) exist as Angular CLI boilerplate but there is no meaningful test coverage.

## Architecture

- Bootstrap: `src/main.ts` → `AppModule` (`src/app/app.module.ts`), which declares all components (`AppComponent`, `HomeComponent`, `ProjectsComponent`, `ResumeComponent`).
- **Routing lives in `src/app/Routes.ts`**, imported into `AppModule` via `RouterModule.forRoot(routes)`. Each route carries a `data.animation` key consumed by the route animation trigger.
  - `''` → `HomeComponent`
  - `resume` → `ResumeComponent`
  - `projects` → `ProjectsComponent`
- `src/app/app-routing.module.ts` exists but is a **dead file** — it declares an empty `routes` array and is not imported by `AppModule`. Do not add routes here; use `Routes.ts`.
- `AppComponent` owns the fixed navbar (custom hamburger toggle, outside-click-to-close via `Renderer2`), scroll-to-top on navigation, the `routeAnimations` fade transition between pages, and the **branded full-screen app loader** (shown on first load until `LoadingService` reports ready, with a 4s fallback).
- **`VideoBackgroundComponent`** (`src/app/shared/video-background/`) is the single shared background-video implementation used by all three pages: picks a random `/assets/videos/background*.mp4`, fades in on `canplay`, cycles on `ended`, and notifies `LoadingService`. Do not reintroduce per-page video logic.
- **`LoadingService`** (`src/app/loading.service.ts`) is a latching ready-flag (`ready$`); the loader only ever shows once per app load.
- Background videos are compressed to **720p/muted/~0.5–4 MB each** (re-encoded from 4K originals). If adding a video, keep it ≤ ~4 MB, muted, H.264, `faststart`.

## Component notes

- **HomeComponent**: typewriter animation cycling through `phrases` (`Software Engineer`, etc.) via chained `setTimeout` calls. All timers are tracked in `this.timers` and cleared in `ngOnDestroy` — preserve this cleanup when adding timers.
- **ProjectsComponent**: project list is a hardcoded `data` array of `{ name, type, link, exist_on_github }`. The `filter()` method always excludes entries with `exist_on_github: false`, and `projectTypes` (filter chips) are derived only from GitHub-visible projects. Add new projects by appending to this array.
- **ResumeComponent**: education/semester data is a large hardcoded `educations` array; CV PDF download fetches `/assets/pdf/CV_Ziad_Bougrine_EN.pdf` as a blob via `HttpClient`.

## Design language

- All pages use a **black / yellow / white theme**: base `#08080c`, glass panels (`rgba(255,255,255,0.04–0.07)` + soft borders), yellow accent (`#facc15`, soft `#fde047`, deep `#eab308`), Inter typography (loaded in `index.html`; `styles.css` sets the global font stack with `!important`).
- Filled yellow elements (buttons, active tabs) always use near-black text (`#09090b`) for contrast — never white on yellow.
- Chips in `resume.component.css` are neutral white-glass with yellow used sparingly for titles/badges — keep this restraint rather than reintroducing multicolor palettes.

## Conventions

- Follow `.editorconfig`: 2-space indent, UTF-8, single quotes in `.ts`, final newline, trimmed trailing whitespace.
- Module-based Angular — new components must be declared in `AppModule`, not created as standalone.
- Accessibility is expected (aria labels, semantic markup are already present in templates); maintain it.
- `*.mp4` and `*.MOV` are tracked with **Git LFS** (see `.gitattributes`) — CI checks out with `lfs: true`.

## CI / Deployment

- `.github/workflows/build.yml`: on pushes to non-`main` branches and PRs, runs `npm ci` + `npm run build`.
- `.github/workflows/pipeline_to_deploy.yml`: on push/merge to `main`, builds and deploys to Firebase Hosting (`channelId: live`, project `ziadbougrine-38983`).
- Production build budgets: initial bundle warn 500kb / error 1mb; per-component styles warn 25kb / error 40kb.
