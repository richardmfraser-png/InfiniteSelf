## Before you update

1. In your current Infinite Self app, go to **Settings → Backup & export** and create a **Full backup**. Save the JSON privately. This includes local photos and audio; the records-only option does not.
2. Save any open Journal, photo-details or routine edits. End or pause an active meditation.
3. Keep using the **same site address and browser/installed app**. Do not clear website data, remove the installed app, rename the repository, or create a new Pages site just to install this release.

## Upload the release to GitHub

1. Extract `Infinite_Self_GitHub_Update_v3_4.zip` on your computer. Its contents are flat—there is no `assets` folder to reconstruct.
2. Open the repository you already use. Go to the **publishing folder that currently contains your live `index.html`**. It may be the repository root or `/docs`; keep your existing choice.
3. Choose **Add file → Upload files**, select **all extracted files**, and replace matching filenames. Do not upload the ZIP itself, your private backup, or an extra enclosing folder.
4. Commit the change with a message such as `Update Infinite Self to v3.4`.
5. Wait for your repository’s Pages deployment to finish successfully. A commit alone does not prove deployment completed; check its Pages/Actions status.

All release files are comfortably below GitHub’s web-upload file-size limit, and the package fits within a single batch. Older versioned script/style files can remain in the repository; the new entry page no longer references them. Keep `CNAME`, existing workflows and unrelated repository files intact.

## Activate and verify

1. Open your usual app address online. Refresh. If an update notice appears, choose **Save and refresh** after saving unfinished work.
2. Confirm the header shows **Infinite Self · v3.4**.
3. Open `ASSET_CHECK.html` at the same hosted directory. The headline should identify **v3.4**, the icon and fourteen photographs should appear, and each required file should pass its check.
4. Open **Routines**: the Morning practice and Evening reset templates should be present for an upgraded account that had no routines.
5. Open a Gallery photograph and test Next/Previous, rename, and Reflect on this image.
6. Confirm an earlier Journal entry and My 3 date are still available.

### Still seeing the previous version?

First check the deployment, not your private browser data. Confirm that the live publishing folder contains `app-v34.js`, `features-v34.js`, `style-v34.css`, `manifest-v34.webmanifest`, the new `service-worker.js`, and `release-v34.json`. Use the asset checker to spot missing or stale files. Close other tabs of the app and reopen the same site online; the updated worker may need the old page to close or the update prompt to be accepted.

**Do not use Clear site data as a refresh method.** Do not unregister the installed app merely to obtain new features. This release keeps the existing photo icon and app identity.

## Records and upgrades

The records key is still `spectacularSpiritJournalV1`, and personal media still use the existing `infinite-self-media-v3` IndexedDB database. This release adds fields; it does not intentionally reset legacy records. A different browser, private session, site origin or installed context can have different storage, so retain your full backup.

Full backups contain private, unencrypted material. Restore only a backup you trust. Restoring replaces records; save the current state first. A records-only file cannot recreate a missing uploaded photograph or audio file.

## Rollback

Prefer fixing an incomplete deployment rather than downgrading code. Rolling back to v3.3 would remove the v3.4 controls and is not a tested round-trip migration. Keep a v3.4 full backup before any rollback so routine/review/photo metadata can be recovered when returning to v3.4.

## Official deployment references

[GitHub: adding files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) and [GitHub: configuring a Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). The guide above does not require changing your existing publishing source.
