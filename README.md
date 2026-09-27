# Infinite Self v3.1

A local-first journal and intentional-living web app. This is the full flat-file GitHub update, not a deployed URL. No build system or API keys are required.

**Start with GITHUB_UPDATE_GUIDE.html** to update the existing site without changing its storage location. **QUICK_START.html** explains daily use and the new Settings and SoundCloud controls. **VERIFICATION.md** states the local-test limitations.

## Main files
- `index.html`: app shell
- `app-v31.js`: application logic; includes SoundCloud Widget integration, settings and input-following refinements
- `style-v31.css`: responsive UI, theme and text-size rules
- `manifest-v31.webmanifest`: current install metadata; existing identity preserved
- `service-worker.js`: scoped cache and safe update lifecycle
- `release-v31.json` and `ASSET_CHECK.html`: file integrity/deployment diagnostics
- `*-v3.jpg`, photo/icon PNGs and two MP3s: unchanged supplied assets

Host all files together over HTTPS, for example in the existing GitHub Pages publishing folder. A bare local HTML download is not a self-contained app and is not a substitute for deploying its assets.

## Personal data
The records key is still `spectacularSpiritJournalV1`. Personal photo/audio uploads remain in `infinite-self-media-v3` IndexedDB. Preferences are now in `state.preferences`; backwards normalisation creates defaults without replacing existing records. Personal data is not bundled into these deployment files.

## Audio
The SoundCloud recording is streamed only when the user requests playback. Its iframe stays loaded across app tabs. Native audio provides 0.5×–2× rates; YouTube uses its available rates; the SoundCloud embed remains at normal speed. Native playback and device controls are subject to browser support, not guaranteed continuous background execution. Audio speed does not alter the practice timer.

## Updating
Keep all files in the same publishing folder, wait for deployment, then Save and refresh. Do not clear site data. Back up first. Public app files and private user backup files must stay separate.
