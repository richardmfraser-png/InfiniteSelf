## Welcome to Infinite Self v3.4

This is an upgrade to your existing app, not a replacement for your personal records.

**Updating an existing GitHub Pages app:** begin with the [GitHub update guide](GITHUB_UPDATE_GUIDE.html). Extract the ZIP and replace the corresponding files in the same publishing folder. Upload all the extracted files together—not the ZIP itself or an extra enclosing folder.

**Already updated:** open the [app](index.html). Check for **v3.4** in the header. Explore **Routines**, **Gallery**, and **Progress → Weekly review**. The [new-feature guide](V3_4_FEATURE_GUIDE.html) walks through each addition.

**Checking the deployment:** open [ASSET_CHECK.html](ASSET_CHECK.html) at your hosted site. It verifies the packaged files and displays the photographs and icon. It does not inspect private records.

> Before changing anything, use your current app’s **Settings → Backup & export → Full backup** and save the resulting JSON file somewhere private. Never upload that personal backup to GitHub.

## What this version adds

Gallery swiping and editable photo names/captions, photo-linked journaling, a dated weekly review, an editable routine builder, and backup status with recoverable photo/activity removal. Basic photo tags and search are included.

## Local preview

The app uses separate HTML, JavaScript, CSS, images and audio files. A single `index.html` attachment is not a standalone app. For a desktop check, serve the extracted folder using a local web server, for example:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in your browser. Phone installation uses the hosted HTTPS site. Public guides and code can be shared; your saved journal and uploaded media are not part of this ZIP.
