## 1. Gallery: browse, name and remember

Tap a tile to open the uncropped image. Swipe **over the photograph** left/right, use the buttons, or use the keyboard arrows. The counter shows your position within the filter/search used when you opened the viewer. Browsing Favourites does not switch to the entire library. At either end, navigation stops rather than wrapping unexpectedly. Vertical scrolling and two-finger gestures are not intentionally treated as gallery swipes.

**Edit details** allows a title, caption and comma-separated tags. The title is stored against a stable photo ID, so favourites and chosen page backgrounds keep pointing to the same image. Renaming is per-device app metadata—it does not change the original file in Photos or Files. Save a copy proposes your title as the new JPEG download filename; the browser handles the final save.

Gallery search covers names, captions and tags. Built-in category filters, Favourites and My uploads remain available. This version does not add a separate shared-gallery service or full custom-album system.

### Local uploads

Upload JPEG, PNG or WebP images, up to 20 MB per original, within the existing limit of 80 personal photographs. Infinite Self resizes and stores a JPEG copy up to 1600 pixels on the long side. Keep originals. No uploaded photograph is automatically committed to GitHub or sent to a public gallery.

## 2. Photo-to-Journal

Choose **Reflect on this image**. Select the intended journal date and entry type, then write or dictate. The caption becomes a starting prompt; without one, the app offers a neutral reflection question.

**Save to Journal** appends rather than replaces the selected field. It retains a source card with the photo title, thumbnail where available, and **View photo**. It can also attach the photograph as that date’s photo of the day. Photos can be attached without a reflection through the viewer’s **Photo of the day** control.

A Journal date supports one photo of the day and can retain multiple photo-reflection source links. Changing or detaching the daily photograph does not delete the image or your writing. If a local image is missing, the source title and writing remain; restore a full backup containing the image to view it again.

## 3. Weekly review and reset

Open **Progress → Weekly review**. Choose any day to select its Monday–Sunday week. Previous/Next moves by a week; future weeks are not retrospectively marked complete.

| Evidence | How to read it |
|---|---|
| My 3 | Filled priorities only form the denominator; blank placeholders do not count. Future priorities remain planned. |
| Journal days | Days containing writing or a photo of the day. |
| Meditation | Minutes from saved sessions, not activity-log rows added a second time. |
| Readings | Saved read marks in the date range. |
| Commitments | Days meeting each amount target, grouped under the parent. Different units are not added together. Current target settings are applied to old activity. |
| Milestones | Only milestones with a recorded completion date are attributed to the week. Older undated completions are not assigned invented dates. |
| Routines | Finished runs, practised steps and skipped steps are shown separately. |

Current-week figures are explicitly partial. Goal totals are labelled as current totals, not recreated historical snapshots. Correcting a dated activity updates the displayed evidence.

Write or dictate responses to the three review prompts. Drafts save locally. **Save weekly review** records the reviewed time and a summary snapshot. **Use as next week’s focus** sends the focus to the following week’s Today view, with confirmation before replacing an existing focus. These are deliberate actions; simply visiting the review does not claim you completed it.

Saved reviews are available below the form. Export creates a readable text file. Review dates can be revisited and edited.

## 4. Routine builder

Two editable templates are seeded for accounts without routines:

**Morning practice:** guiding intention → meditation → Wisdom → morning journal → My 3.

**Evening reset:** evening reflection → plan the following day’s My 3 → a short meditation.

### Make a routine yours

In Routines, choose Edit or Build a routine. Set its name, morning/evening/anytime label and reminder. A routine supports up to twelve steps. Choose among:

- Guiding intention: opens its existing Settings editor.
- Meditation: choose an available sound and a duration from 1–180 minutes.
- Wisdom reading: choose a category.
- Journal: choose Morning, Freeform or Evening.
- My 3: use the routine’s date or the following date.
- My own practice: name a personal action and give it optional instructions.

Move steps with the up/down controls, uncheck to leave one out, or remove it. Save the template. Changes apply to the next run, not to earlier history or an already-started run.

### Use the guide

Tap **Begin this practice** from Today or Routines. The guide opens the appropriate existing page; it is not a new form that duplicates records. **Open step** returns you there after browsing elsewhere. **Done & next** records the step’s completion; **Skip** records that you chose not to do it. Opening a screen alone never claims completion.

A Journal step uses the usual date/field. A Wisdom step uses the reading shown for that run; after all pieces in a category are read, it can open an existing piece for review without manufacturing a second read mark. A priority step requires at least one filled priority, not three invented tasks. A custom step is self-confirmed, not sensor-verified.

A meditation step needs a saved session of at least five seconds. The timer still uses the normal recorder and selected commitment-credit option. Ending early saves the actual minutes and displays them against planned minutes; the app does not pretend the full duration was completed. Pressing Done & next does not log a second session.

### Pause, resume and dates

Only one routine run can be active or paused. **Pause** retains your place and pauses a linked running meditation. **Resume** is available after reloading. **End run**, in its history entry, retains what you did without claiming completion of the whole sequence.

A run begins on the real current date, regardless of the date simulated in Daily View. If you resume on another day, its Journal and My 3 steps retain the original run date (or next-date offset); a live meditation uses its actual saved date. Routines are not alarms, push notifications or automatic background schedulers.

A finished routine may contain skipped steps. History distinguishes these from practised steps. Changing or removing a template keeps the original run snapshot.

## 5. Backup safety and Undo

Settings has three deliberately distinct pieces of information: **last full-backup download initiated**, **saved changes since that full backup**, and **last backup you confirmed saving**. A browser download is not proof that you stored the file safely.

The in-app reminder appears when there is new material and a full backup is absent/older, or enough saved record/media changes have accumulated. It can be snoozed until the following day. It is not a push notification and does not back up automatically.

**Full backup** includes Journal, photo titles/captions/tags, uploaded image/audio blobs, goals, routines and run history, weekly reviews/focus, settings, and Recently removed. **Records-only backup** omits uploaded media and does not reset the full-backup reminder. The legacy full-backup format and restore controls are retained.

Removed photo/activity entries can be restored from Undo or **Settings → Backup & export → Recently removed**. Photo blobs are kept while removed; this uses space and is included in full backups. **Delete permanently** removes that recovery option locally. Existing private backup files may still contain the removed item.

Browser storage estimates cover the site origin and can include other stored content; they are not an exact size of Journal alone. A storage-retention request is browser-controlled and is not a substitute for your own backup.

## Continuity and limits

This release retains the name, blue/ocean visual direction, fourteen seed photographs, photographic icon, optional onboarding, historical Daily View, quotes, gong, existing media libraries, dictation, settings and data keys. Basic photo tags/search are included; there is no account, cloud sync or scheduled reminder service.

SoundCloud and native media retain the tuck-away dock within the app. YouTube is paused while its video is hidden, including a tucked dock or modal, and must be visible again before playing. Phone-lock/background behaviour and embedded-service availability still need testing on your device. Typing leaves media intact; dictation may pause it.

See [VERIFICATION.md](VERIFICATION.md) for exactly what was tested and what used test adapters.
