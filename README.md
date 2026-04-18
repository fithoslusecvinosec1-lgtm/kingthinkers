# KingThinkers

KingThinkers is a browser-based HTML/CSS/JavaScript learning app with game-style progression for students and classroom tools for teachers/admins. The current codebase includes a complete student flow, a teacher roster/progress flow, a shared mission registry, and a phased lesson runtime used across the active lesson set.

## What Is In This Repo

- Student experience:
  student login, character creation, dashboard/world map, lesson launch, lesson completion, and progress tracking
- Teacher/admin experience:
  teacher login, roster management, bulk add, remove student, manual mission mark/unmark, progress summaries, and printable student cards
- Lesson/content system:
  shared world and mission registry plus lesson packs loaded into a single lesson player/runtime
- Browser-first app shell:
  plain HTML/CSS/JS with no build step

## Entry Points

- Student login: `kingthinkers-login.html`
- Teacher login: `kingthinkers-teacher-login.html`
- Student dashboard: `kingthinkers-dashboard.html`
- Lesson runtime: `lesson-player.html`
- Teacher roster: `kingthinkers-teacher-roster.html`

`manifest.json` points the PWA start URL at `./kingthinkers-login.html`.

## Student Flow

1. Students enter a code on `kingthinkers-login.html`.
2. First-time students are routed to `kingthinkers-character-creator.html` to set name/avatar/profile details.
3. Returning students land on `kingthinkers-dashboard.html`.
4. The dashboard renders the world map from the shared registry in `kt-content.js`.
5. Launching a mission opens `lesson-player.html?id=<lessonId>` for lesson-pack content, while preserving mission context in storage.
6. Completing a lesson updates progress and returns students to the dashboard with completion state intact.

The dashboard currently exposes the active Home, Quest, and Sage surfaces.

## Teacher/Admin Flow

1. Teachers sign in or register through `kingthinkers-teacher-login.html`.
2. `kingthinkers-teacher-roster.html` loads the class roster and progress.
3. Teachers can add one student, bulk add students, remove students, print student cards, refresh/sync roster data, and manually mark or unmark missions.
4. Progress summaries, standards pills, skill percentages, and manual progress controls are driven from the same canonical content registry used by the student dashboard.

Teacher progress logic recognizes completion records keyed by either mission id or lesson id, while manual teacher marking still writes the canonical mission id through the existing persistence layer.

## Current Content Footprint

The shared registry in `kt-content.js` currently defines:

- 8 worlds
- 33 total missions / lessons
- 17 reading missions
- 16 math missions

Worlds in order:

1. Egypt
2. Nubia
3. Kush
4. Mali
5. Songhai
6. Timbuktu
7. Axum
8. Diaspora

`kt-content.js` is the canonical source for world/mission metadata used by both the student dashboard and teacher/admin reporting.

## Lesson Architecture

Lesson content lives in the lesson pack files:

- `lessons-egypt.js`
- `lessons-kush.js`
- `lessons-mali.js`
- `lessons-songhai.js`
- `lessons-timbuktu.js`
- `lessons-axum.js`
- `lessons-diaspora.js`

Lessons are loaded by `lesson-player.html` and rendered by `lesson-engine.js`.

Current lesson schemas:

- Phased reading lessons:
  `phase1_strategy`, `phase2_vocab`, `phase3_guided`, `phase4_test`
- Phased math lessons:
  `phase1_concept`, `phase2_worked`, `phase3_practice`, `phase4_test`

Active lesson packs now use the phased schema. `lesson-engine.js` keeps the phased reading path, phased math path, and a minimal intro/complete fallback for any unexpected lesson shape, but the old legacy reading lesson-content path is no longer part of the active system.

## Persistence And Data Behavior

Persistence is handled in `kt-db.js`.

What is confirmed in code today:

- Student active code and several UI/session values are stored in `localStorage`
- Teacher session state is stored in `sessionStorage`
- Student records and mission progress attempt to use the configured remote API first, with `localStorage` fallback when requests fail
- Teacher roster and class-management actions call the same remote API layer
- Teacher mission marking uses the existing `db_teacherMarkMission(...)` contract
- Progress completion helpers support records keyed by either mission id or lesson id

The remote API target currently configured in code is a Supabase Edge Function endpoint. The app is not local-only, but it is also built to continue functioning in a degraded local-storage mode when the network/API path is unavailable.

## Repo Orientation

- `kingthinkers-login.html`
  student entry point
- `kingthinkers-character-creator.html`
  student profile/avatar setup
- `kingthinkers-dashboard.html`
  main student dashboard, world map, mission launch, and in-app pages
- `lesson-player.html`
  lesson runtime shell
- `lesson-engine.js`
  lesson rendering/completion engine
- `kt-content.js`
  shared canonical world and mission registry
- `lessons-*.js`
  lesson content packs by world
- `kt-db.js`
  persistence, sync, roster, and teacher/admin data helpers
- `kingthinkers-teacher-login.html`
  teacher/auth entry point
- `kingthinkers-teacher-roster.html`
  teacher/admin roster, reporting, and progress management
- `manifest.json`
  PWA metadata and start URL

## Current Project State

This repo is a working product prototype, not just a static mockup. The main student loop and teacher/admin roster flow are implemented and wired to shared content metadata.

## Contributor Notes

If you are new to the project, start here:

1. Read `kt-content.js` to understand the mission/world registry used across student and teacher flows.
2. Read `kingthinkers-dashboard.html` for the student-side app shell and mission launch logic.
3. Read `lesson-player.html` and `lesson-engine.js` for the lesson runtime.
4. Read `kt-db.js` for persistence, sync, and local fallback behavior.
5. Read `kingthinkers-teacher-roster.html` for teacher/admin reporting and manual progress flows.

This repo does not use a framework or build pipeline, so most changes are direct edits to runtime HTML and JavaScript files.

## Smoke Tests

The repo includes a small Playwright smoke suite for the highest-value browser flows:

- student sign-in to dashboard
- dashboard lesson launch
- teacher sign-in to roster

Run the suite with:

- `npm run test:smoke`
- `npm run test:smoke:headed`
- `npm run test:smoke:debug`

How it works:

- Playwright starts a tiny local static server from `tests/support/static-server.cjs`
- the tests mock only the remote `kt-api` boundary, so the real HTML/JS pages, routing, storage, and lesson runtime still execute in the browser
- the smoke suite is intentionally lightweight and focuses on app boot, core navigation, and fatal breakage detection rather than exhaustive UI coverage
- tests live under `tests/` and are runnable with the scripts in `package.json`
