# Infinite Self v3 — implementation references and boundaries

## Official references consulted for this release
- YouTube Developer Policies, section III.I.9: no background player hidden from the page/tab/screen the user is viewing. https://developers.google.com/youtube/terms/developer-policies
- YouTube policy guide: no hidden/background play or downloading/separating video audio. https://developers.google.com/youtube/terms/developer-policies-guide
- YouTube IFrame API: embedding, controls, callbacks and visibility-compatible playback. https://developers.google.com/youtube/iframe_api_reference
- MDN Media Session API: lock-screen/device controls, browser support limits. https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API
- MDN Audio Session API: optional/experimental playback-session declaration. https://developer.mozilla.org/en-US/docs/Web/API/Audio_Session_API
- MDN SpeechRecognition: limited availability, possible server-based speech processing. https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
- MDN IndexedDB: local structured data and blobs. https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
- GitHub Pages deployment documentation. https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Session engine
A single HTMLAudioElement persists outside tab panels. YouTube is instantiated only following user action and remains in a visible dock. Hiding the document or opening a modal pauses YouTube. No media is extracted from YouTube. The bundled Ocean Breath and Soft Bell are original algorithmic soundscapes exported as MP3 files for native media playback.

Elapsed time is accumulated from wall-clock timestamps between explicit start and pause, rather than assuming every interval callback ran on schedule. The UI reconciles after visibility changes. This avoids a slow timer when browser callbacks are throttled, but cannot ensure a stop callback runs while the browser is suspended. A session timer is not a measure of actual audio delivery. Interrupted reloads resume in a paused state only.

## Local storage and privacy
Records keep the historical `spectacularSpiritJournalV1` key. IndexedDB stores personal media blobs. No media is posted to GitHub by the app. Uploaded photos are decoded and re-encoded, reducing file size and dropping original file metadata. Backups are unencrypted and must remain private.

Embedded YouTube contacts Google/YouTube when the user starts the source. External links contact their providers. Browser speech recognition may process audio remotely. Permission messaging is shown before in-app dictation; no claim of entirely offline speech recognition is made.

## Photo and audio limits
JPEG, PNG and WebP images: maximum original 20 MB, output long edge 1600 px, 80 personal photos. Personal audio: up to 40 MB per file; MP3, M4A, WAV, OGG and WebM are accepted but actual codecs vary by browser. Full media backup is limited to 180 MB of source blobs to avoid an oversized browser JSON operation. Records-only export remains available.

## Offline caching
The service worker caches only this app's known same-origin files. Navigation is network-first with a cached application fallback for the application entry only. Static assets are versioned. Unknown/missing image requests are not replaced by HTML. Cached audio supports one byte-range response at a time. Third-party YouTube requests are not cached. User media remain in IndexedDB and are not controlled by the asset cache.

## Installation identity
The manifest supplies the new name and photo-only icon. Its ID retains the prior v2.1 start URL identity (`./index.html?v=21`) while navigation uses `./index.html`. Operating systems may keep prior installed icon/name metadata. Back up before re-adding an installed shortcut, as browser/installed-app storage contexts can differ.

## Copyright / source status
The seed photographs were supplied by Richard Fraser for this project. Short Wisdom prose is retained from the prior app as original reflection/summary text, not long copied readings. Existing direct-video and search links remain external and are labelled accordingly. Audio-generation frequencies are design choices, not claims of therapeutic benefit.
