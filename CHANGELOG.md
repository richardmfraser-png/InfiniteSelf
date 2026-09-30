# Infinite Self v3.4.0 — Changelog

## Added

1. Swipe, Previous/Next, keyboard arrows and position counter in the photo viewer, scoped to the selected gallery filter/search.
2. Editable app photo titles, captions and comma-separated tags; renamed download suggestions and title/caption/tag search.
3. Photo-to-Journal composer using date/type selection, typing/dictation, source thumbnails and return links; optional photo of the day.
4. Weekly review under Progress: dated evidence, three reflection prompts, next-week focus, saved history and text export.
5. Routine builder: editable starter templates and custom routines; enabled steps, reorder/remove/add, audio/duration/category/journal/day choices; guide, skip, pause/resume/end and snapshot history.
6. Settings backup safety status, explicit file-save confirmation, record/media revision counters and in-app reminders.
7. Recoverable removal for uploaded photographs and activity logs, with Undo and Recently removed.

## Preserved

Existing data key/media database, optional onboarding, historical Daily View/My 3, quotes, Wisdom queue/history/favourites, source-linked Journal, typing/dictation follow, media library/gong, settings themes/font sizes, uploaded media and fourteen seed photographs. The photo-only home-screen icon and install identity are unchanged.

## Behaviour clarified or corrected

- A finished routine distinguishes practised and skipped steps. Opening a step is not completion.
- Routines use the existing recording paths; Done & next does not double-credit activity.
- Routines start on the actual date; simulated Daily View dates do not create simulated practice records.
- Weekly evidence excludes blank priorities/future completions. Current commitment settings are explicitly labelled; undated historical goal completions are not given invented dates.
- Invalid calendar dates such as 30 February are rejected.
- Hidden/tucked YouTube pauses; SoundCloud and native audio retain in-app tuck behaviour. Previous v3.3 hidden-YouTube behaviour is not preserved.
- Photo metadata rolls back on a failed save. Media removal is recoverable until explicit permanent deletion.
- The service worker and asset-check manifest are release-scoped. Diagnostics bypass the cache and do not read private records.

## Not added

No cloud account/sync, native mobile background guarantee, full custom-album system, automatic AI review, or scheduled push reminders. Personal originals in Photos/Files are not renamed.
