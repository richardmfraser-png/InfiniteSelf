# Infinite Self v3.4.0

A local-first personal practice web app. This flat-file package upgrades the existing v3.3 app; it does not include user records or personal uploads.

## Release highlights

- Gallery swipe/keyboard/buttons/counter; app-level photo names, captions and tags; search.
- Photo reflections saved to Journal with source links and optional photo of the day.
- Monday–Sunday weekly review, saved prompts/snapshots and next-week focus.
- Morning/evening/custom routine builder with configurable steps, reorder, enable/skip, pause/resume and history.
- Full-backup status, record/media change reminders, explicit saved-file confirmation and recoverable photo/activity removal.

Routine steps route to the existing records/screens. Routine completion never writes a duplicate meditation activity or overwrites an existing journal field merely to record completion.

## Start

Read [START_HERE.html](START_HERE.html), [GITHUB_UPDATE_GUIDE.html](GITHUB_UPDATE_GUIDE.html), [QUICK_START.html](QUICK_START.html) and [V3_4_FEATURE_GUIDE.html](V3_4_FEATURE_GUIDE.html).

Upload every extracted file to the same GitHub Pages publishing folder. Do not upload private backups. No build system or dependency installation is required. A local web server can preview the app; an HTTPS host supports installation/offline caching. `index.html` alone is not standalone.

## Files and identifiers

- `index.html`: app shell.
- `app-v34.js`: retained app core and existing features.
- `features-v34.js`: v3.4 upgrade/migrations and new workflows.
- `style-v34.css`: responsive styling and saved appearance controls.
- `manifest-v34.webmanifest`: same installed-app identity and photographic icons.
- `service-worker.js`: release-scoped cache; user-controlled upgrade activation.
- `ASSET_CHECK.html` + `release-v34.json`: deployed-byte checks.
- Root-level JPEGs/PNGs/MP3s/WAV: unchanged seed media and icons.

Records key: `spectacularSpiritJournalV1`. Media database: `infinite-self-media-v3`, version 1, object store `media`. New JSON fields are additive. Retain a private full backup before any upgrade.

## Privacy and playback

Journal and records stay in this browser’s localStorage; personal uploaded media stay in IndexedDB. They are not encrypted or uploaded to GitHub. External providers are contacted when their players/links are used. Device/browser speech recognition may process speech through its provider. Full backups are private unencrypted files.

Native audio and SoundCloud keep the in-app media dock while navigating. YouTube pauses if hidden/tucked. All device-background audio remains dependent on browser/provider behaviour; this is not a native app or a guaranteed background-media service.

## Verification

See [VERIFICATION.md](VERIFICATION.md). Browser DOM/layout/image/native-audio tests were run; localStorage/IndexedDB were test adapters because hosted-origin navigation is blocked in the test environment. The production code still uses the native storage APIs. No live GitHub deployment, physical phone or live YouTube/SoundCloud playback is claimed.
