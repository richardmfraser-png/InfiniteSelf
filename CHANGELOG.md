# Infinite Self v3.1 — Changes

## Requested refinements
- Added the supplied SoundCloud Daimoku track beside the original YouTube chant, without copying the recording into the package.
- Added saved SoundCloud track URLs to the user's existing audio-link library.
- Kept the SoundCloud widget outside tab rendering; wired play, pause, loop and timer events through its official Widget API.
- Added per-recording native-audio speeds from 0.5×–2× and the rates supported by the current YouTube video. SoundCloud controls explicitly remain unavailable at 1×.
- Made Guiding Intention directly editable in Settings and from the Today card, with typing/dictation autosave.
- Moved the general backup/restore area to Settings and added readable journal .txt and browser-print/PDF exports.
- Added five colour presets, custom page/card backgrounds, automatically adjusted text contrast and 90%–150% font scaling, all saved locally and included in JSON backups.
- Added universal active-caret following, bounded growing text areas and mobile viewport-aware scrolling for typing and dictation, including dynamic forms and the Wisdom composer.

## Compatibility
Existing record IDs, journal data, goals, commitments, personal gallery/audio database and install identity are retained. All 14 photographs, photographic home-screen icon, onboarding, Help, Gallery and progress screens remain. Updated code/style/manifest filenames and a v3.1 service-worker cache are included.

## Boundaries
No cloud synchronisation, account system, encrypted backup or protected audio download is added. SoundCloud speed is not adjustable by this embed. Physical-phone background playback, microphone behaviour and live third-party streaming still require device checks. See VERIFICATION.md for the test conditions.
