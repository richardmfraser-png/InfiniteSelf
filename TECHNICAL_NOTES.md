# Infinite Self v3.4 — Technical notes

## Architecture

Vanilla browser app, root-flat assets, no npm/build step. Load `app-v34.js` before `features-v34.js`; the extension installs compatible handlers then calls init. Do not deploy either script from a different release.

## Data/migration

Local JSON key remains `spectacularSpiritJournalV1`. IndexedDB remains `infinite-self-media-v3`, version 1 / `media` store. The legacy normaliser and restore formats remain. v3.4 adds `photoDetails`, `trashedPhotoIds`, `weeklyReviews`, `weeklyFocus`, `routines`, `routineRuns`, `activeRoutineRunId`, `recentlyRemoved`, and `safety`. Journal dates may include `photoOfDayId`; sources use stable `photo|<id>` links.

Per-user photo names/captions/tags live in JSON metadata keyed by image ID. Uploaded blobs remain in IndexedDB. Browser object URLs are transient and rebuilt from the blobs; they are not persistent identity. Full export serializes media bytes with the existing data format. Records-only export includes references but cannot recreate missing media.

A removed photo is filtered from the active collection but retained in media storage until explicitly deleted permanently. Restoring it reinstates the same ID. An old page preference is restored only if that page has not since been assigned another photograph. Photo-source titles/writing remain after media deletion. Recovery is local, not a server recycle bin.

## Routines

Templates and runs are separate. A run snapshots enabled steps and is keyed by an immutable run ID/date. One run may be active/paused at a time. Done/skip status is separate from native app records. Each linked meditation record uses its existing session ID plus routineRunId/routineStepId annotations; marking the step done does not add a new session/log. A saved session of at least five seconds is required; actual duration is reported against the planned duration. Skips never become completions.

Runs start on actual current date, independent of Daily View simulation. Resumed runs retain their date for journal/priorities; live recorded media uses the actual recording date. Routines are sequences, not scheduled notifications. Native player automatic completion relies on browser execution; the UI reconciles its timer when resumed.

## Weekly evidence

Monday–Sunday, current week through actual date. Filled My 3 priorities form the denominator. Activity amount per date/leaf is compared with its current target; days, not double minutes, count toward weekly frequency. Branches are equal-weight averages. Session minutes derive from meditation records once. Current commitment settings and current goal totals are labelled explicitly. Only milestones with an actual stored completion timestamp are attributed to a week. Review snapshots are retained; the visible evidence recalculates after corrections.

## Backup safety

Revision counts are hashes of changed saved record state excluding the safety bookkeeping itself; they are not a count of tasks. A full backup download initiated and a user-confirmed saved copy are distinct. Records-only exports do not reset the full baseline. Reminders appear in-app when new data lack a recent full backup or change thresholds are met; no worker uploads private data or sends push notifications. Storage estimates are origin-wide browser estimates, and persistence requests can be refused.

## Cache and deployment

The worker cache name includes the site scope and v3.4.0. Only known same-origin release files are cached. Old release caches in this app’s scope are removed on activation, not arbitrary origin caches. The installed manifest id is preserved. Update activation waits for SKIP_WAITING from the app’s save-and-refresh control (or normal closing of old clients). No third-party iframe resources are intercepted. Byte-range responses are supported for cached native audio. Missing assets are not replaced with HTML. Asset checker fetches use no-store and bypass this worker’s caches.

## Accessibility/interaction

Gallery supports swipe plus buttons/keyboard, a position announcement, and no automatic slideshow. Vertical and multi-pointer gestures do not intentionally advance. Photo/control regions are separate; captions are escaped text. Standard browser zoom, focus outlines and existing font scaling remain. Physical assistive-technology/phone validation is still required; no formal WCAG certification is claimed.

## Media-provider boundary

Native audio is a persistent HTMLAudioElement. SoundCloud/YouTube use their supplied embed APIs; no copyrighted stream is extracted and no provider permission is bypassed. YouTube must remain visible to play; hidden/tucked states pause it. SoundCloud speed remains 1× where its widget has no playback-rate API. Native audio uses available playbackRate control. Dictation may use provider services and pauses audio to avoid transcribing the speaker.

## Primary documentation

- [W3C carousel interaction](https://www.w3.org/WAI/tutorials/carousels/functionality/)
- [MDN Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [MDN touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)
- [MDN storage persistence](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist)
- [MDN storage estimates](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate)
- [MDN storage quotas and eviction](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [YouTube developer policies](https://developers.google.com/youtube/terms/developer-policies)
- [SoundCloud widget API](https://developers.soundcloud.com/docs/api/html5-widget)
- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

These references are implementation context; user-specific changes described here are verified against the packaged code and test record, not inferred from those documents.
