# Infinite Self v3.0 — release changes

## Requested refinements implemented
1. Renamed Spectacular Spirit Journal to **Infinite Self** throughout the interface, setup, guides, install metadata and exports; retained the existing data key.
2. Introduced one persistent audio/player dock and a wall-clock-based session timer. In-app tab navigation does not remount the player or reset elapsed time. YouTube remains visible and pauses when hidden. Native/local audio exposes supported device media controls.
3. Added saved YouTube video links and local audio-file import, with per-device storage and removal.
4. Replaced the Journal header image with the balanced-stones photo, corrected image orientation, and removed title/badge overlays from page photography.
5. Added optional browser dictation beside Journal fields and inside the Wisdom composer, with keyboard-dictation fallback and explicit privacy/permission messaging.
6. Reworked Today: distinct Mind/Body categories, clearer parent/branch typography, weekly ring gauges, daily bars, amounts and recent-entry correction.
7. Replaced automatic Carry to Journal navigation with a same-page editor: select type/date, type or dictate, append to Journal, keep drafts.
8. Added a Gallery seeded with **14 already supplied photographs**, favourites, uncropped viewing, per-page image selection and local user uploads. Additional photographs can be added without another code release.

## Supporting safeguards
- Kept optional onboarding, Help, Wisdom categories, Goals/Milestones, mental/physical foundation and branch analytics.
- Stable commitment IDs and a best-effort pre-v3 copy preserve existing records during migration.
- Stopped creating empty journal entries merely by opening the app; saved-writing counts now exclude empty entries.
- Added date-aware journal autosave, full-entry history reading, and entry correction.
- Added full private backup/restore including local media, plus records-only backup.
- Added URL validation for saved web/video links and spreadsheet-formula escaping on text CSV fields.
- Versioned root-level assets, a fresh photographic icon, a scoped offline worker and asset diagnostics.
- Corrected imported photo orientation and the previous photo-label mismatch between candlelight and forest light.
- Wisdom video-search links are explicitly labelled as searches rather than hand-picked individual videos.

## Not represented as finished capabilities
- Guaranteed iOS/Android background or lock-screen audio, exact stopping while a browser is suspended, or hidden YouTube playback.
- Universal microphone recognition or guaranteed offline dictation.
- Cloud sync, encrypted accounts, server authentication, push reminders, shared gallery or a native App Store release.
- Downloading or recreating the referenced YouTube chant as an offline recording.
- Receipt of a new batch of photographs beyond those already uploaded in this chat.

Read VERIFICATION.md for the actual tests and device-specific checks still required.
