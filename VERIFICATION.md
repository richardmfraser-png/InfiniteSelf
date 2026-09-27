# Verification — Infinite Self v3.1

## Completed checks
**56 automated checks passed; 0 failed** in the final offline Chromium run. The exact checks and their results are in `TEST_RESULTS.json`.

The harness rendered the actual release HTML/CSS/JavaScript with supplied photos/audio inlined. It exercised Guiding Intention save/edit, preferences and contrast, 320px and 390px mobile layouts, 150% text, all retained screens, native MP3 playback and rate setting, timer continuity, long-text end following, middle edits, a smaller viewport, the Wisdom composer, saved URLs, and JSON/CSV/text export and restore logic. It reported no uncaught application JavaScript exceptions.

SoundCloud widget callbacks, YouTube rate callbacks and speech-recognition results were **simulated** using their API shapes. LocalStorage and IndexedDB operations were **simulated in memory** because this offline browser harness has no normal website origin. FileReader/base64/Blob serialisation and restore transformations were exercised. Native audio used the real HTML audio element with the included MP3 data; this was not an audible listening or physical-device test.

## Not verified here
No live GitHub Pages deployment, actual SoundCloud stream, real YouTube stream, real microphone recognition, native browser storage persistence, installed-PWA upgrade, physical phone keyboard or lock-screen playback was tested. The supplied SoundCloud page and official API documentation were read separately; that is not proof of successful streaming from your deployed site.

## Release checks
JavaScript syntax, local asset paths, manifest references and service-worker pre-cache file existence are checked during packaging. `ASSET_CHECK.html` checks byte counts and hashes at the deployed site. It deliberately does not test external streaming or read private records.

## Device acceptance test after deployment
1. Confirm v3.1, original journal entries and Gallery images; do not clear storage.
2. Edit the Guiding Intention and appearance. Refresh and confirm they persist.
3. Play SoundCloud, move among Journal/Wisdom/Today and return. Check the same recording continues. Test screen lock separately; an interruption is a platform limitation, not a guaranteed feature.
4. Try 0.5×, 1×, 1.5× and 2× on an included/permitted native file. Confirm pitch/rate behaviour on your device. Check available YouTube rates; confirm SoundCloud says 1× only.
5. Type and dictate long entries, including earlier-text edits and an open Wisdom composer. Confirm the keyboard does not obscure the active line.
6. Make a full private backup and confirm the file saves. Test restore in a separate expendable browser profile before relying on it for moving your only copy of records.
