# Update your existing GitHub Pages app to Infinite Self v3

## 1. Protect the current records
Open the current app and export its JSON backup. Keep that file privately on your device. Do not put it in the GitHub repository. Continue using the same browser/installed app after the update.

## 2. Extract this ZIP
Open `Infinite_Self_GitHub_Update_v3.zip` on your computer. Its contents are flat files, not nested assets folders. You should see `index.html`, `app-v3.js`, `style-v3.css`, photographs, MP3 files, icons, manifests, `service-worker.js` and the guides.

## 3. Update the SAME publishing folder
In your existing GitHub repository, open the folder where the currently deployed `index.html` lives. This may be the repository root or a `docs` folder, depending on your existing Pages settings.

Choose **Add file → Upload files**. Drag in ALL extracted files from the package. Replace existing files with matching names and commit the update. Do not drag the ZIP itself or create a new wrapper folder around the files. There is no need to rename the repository.

If you use Git locally, copy the extracted files into the same publishing directory, then review `git status`, commit, and push. Preserve existing repository configuration such as a `CNAME` file. Do not delete unrelated files.

## 4. Wait for Pages to publish
Check the repository's Actions / deployment status. When the Pages deployment succeeds, open the same app address with `?release=3` added to its end. That query is a diagnostic cache-buster, not a new site or storage location.

Refresh the page. If an update notice appears, choose **Save and refresh**. Stop an active meditation before refreshing. Do not clear site data to refresh the app.

## 5. Check the assets
At the SAME hosted directory, open `ASSET_CHECK.html`. For example, add `/ASSET_CHECK.html` after the folder portion of your ordinary app address. It lists every required app asset and shows the 14 seed photographs and the icon. All checks should pass.

If photos fail, check that their exact lowercase `-v3.jpg` filenames are next to `index.html` in the published directory, not only present somewhere else in the repository. GitHub filename case matters. If the check page itself is missing, the wrong folder may have been uploaded or the deployment may not yet have completed.

## 6. Confirm the app
The header should say **Infinite Self** and show version **v3.0**. Check that your records remain. In Journal, you should see the balanced-stones photograph, Dictate buttons and an entry-date selector. Gallery should show 14 supplied photos before your own uploads.

Try an included audio mode while typing in Journal, then return to Meditation and confirm the timer continued. Separately test real-device lock-screen playback: this is browser-dependent. YouTube is intentionally paused when the app is hidden.

## 7. Home-screen name and icon
The package includes fresh photograph-only icon files and the new app name. Existing shortcuts may retain their old name/icon. Back up first, verify that the hosted asset-check page displays the photograph, then re-add the shortcut only if needed. Do not clear site storage. Storage can differ between Safari, other browsers and installed web apps; keep the backup available to restore.

## Troubleshooting without losing data
- Old appearance: verify the completed deployment, refresh, then check the update notice.
- Missing photos: use ASSET_CHECK and correct the file placement or case.
- Blank app: ensure `app-v3.js` and `style-v3.css` are uploaded beside `index.html`.
- Audio file missing: upload both `ocean-v3.mp3` and `soft-bell-v3.mp3`.
- YouTube refuses to play: use Open on YouTube; a video may disallow embedding or require account/region checks.
- No Dictate support: use the keyboard microphone or type. Visit the HTTPS app, not a local HTML preview.
- Records appear empty: verify the same site/browser context and use Help → Restore backup. Do not repeatedly reset or erase storage.

## Rollback
Keep the v2.1 package. To roll back, restore that app's deployment files at the same location and preserve your private backup. The records key remains compatible, but v2.1 does not expose v3's gallery or new media features.
