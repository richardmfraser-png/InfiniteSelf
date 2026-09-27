# Infinite Self — v3.0 implementation update

Infinite Self is the renamed, refined continuation of Spectacular Spirit Journal v2.1. It remains a plain HTML/CSS/JavaScript application for GitHub Pages, with no build step, account, database server, analytics tracker or secret API key.

## Start here
Upload **all files from this ZIP, extracted**, to the SAME GitHub Pages publishing folder that currently contains your live `index.html`. Keep the repository, domain, branch and publishing folder unchanged. Uploading the ZIP itself does not deploy its contents.

Read `GITHUB_UPDATE_GUIDE.html` first. Use `ASSET_CHECK.html` after deployment. `QUICK_START.html` is the operating guide and is also linked from Help.

## This release
- Infinite Self branding, with a photographic home-screen icon.
- Optional setup, existing goals, commitments, milestones, Wisdom, Help and progress retained.
- Text-free header photography; the Journal opens with the balanced-stones image instead of the old poorly framed ocean image.
- Today: visible Mind/Body hierarchy, parent weekly gauges, branch-level daily bars and amounts, entry correction.
- Journal: typed entry, optional browser dictation, date-aware autosave, full searchable entries.
- Wisdom: same-page Carry to Journal composer with date, entry type, typed/dictated response and append-only saving.
- Gallery: 14 photographs already supplied by Richard, favourites, full uncropped viewing, page-photo selection, local user uploads.
- One persistent session player: audio and timer do not restart on in-app navigation.
- Save YouTube video links; import your own permitted audio files.
- Full backup and restore including personal photos/audio, plus a smaller records-only backup.
- Scoped offline cache, versioned asset names, HTML/image/audio checks and a photographic icon.

## Deliberate limits
YouTube remains a visible video player. It pauses when the app is hidden or a modal covers it. Its recording is not downloaded or converted to local audio. Background playback uses the included original generated audio files or users' own permitted audio, subject to the browser/operating system. Lock-screen playback and precise timed stopping under suspension cannot be guaranteed.

Dictation depends on browser support and permission. The speech service may process audio remotely; keyboard dictation is the fallback. Dictation pauses audio to avoid transcribing the speaker; users tap Play to resume.

## Data compatibility
The deployed records key remains `spectacularSpiritJournalV1`. There is no automatic data reset. A best-effort pre-upgrade records copy is kept under `spectacularSpiritJournalV1-before-v3`. Personal media are in IndexedDB, database `infinite-self-media-v3`, store `media`.

Browser storage is not encrypted or permanent. Different browsers, devices and installed-app contexts may have separate stores. Back up before updating or removing any shortcut. Never publish backups to GitHub.

## Files
- `index.html`, `app-v3.js`, `style-v3.css`: application.
- `*-v3.jpg`: correctly oriented, resized photo assets; exported without original EXIF metadata.
- `infinite-self-*-v3.png`: icon files, plus the `apple-touch-icon.png` compatibility alias.
- `manifest-v3.webmanifest`, `manifest.webmanifest`, `manifest-v21.webmanifest`: current and compatibility install metadata.
- `ocean-v3.mp3`, `soft-bell-v3.mp3`: original algorithmically generated soundscapes, not third-party music or therapeutic sound claims.
- `service-worker.js`: offline shell/assets, scoped cache, range handling for cached audio.
- `release-v3.json`, `ASSET_CHECK.html`: deployment checks.
- Guides, change log, technical notes and verification record.

There is no need to upload your personal photos, journal or audio collection to the repository. In-app uploads stay in the browser.
