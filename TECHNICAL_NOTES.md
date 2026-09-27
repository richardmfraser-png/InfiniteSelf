# Technical notes — Infinite Self v3.1

## Audio sources and implementation
The added source is the user-selected **Nam Myoho Renge Kyo — 1 Hour Daimoku** by **A Nichiren Buddhist**. The production app retains its canonical URL and loads the official SoundCloud widget/API on a user Play action. No stream scraping, credentials or external recording files are included.

Source: https://soundcloud.com/nichirenletters/nam-myoho-renge-kyo-1-hour-daimoku-namu-myoho-renge-kyo-chanting
Widget API: https://developers.soundcloud.com/docs/api/html5-widget

The integration uses the documented play/pause, seek, readiness and playback events. That API lists no rate setter, so the SoundCloud controls are disabled at 1×. The iframe stays outside application tab rendering. A separate HTML audio element handles native recordings. YouTube rate options are obtained from its player rather than assumed. One wall-clock session timer continues to measure practice time, independently of source speed.

Native rate control: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate
YouTube API: https://developers.google.com/youtube/iframe_api_reference
Media-session controls: https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API
YouTube policies: https://developers.google.com/youtube/terms/developer-policies

## Writing and preferences
Preferences are validated on load/restore. Colour values must be six-digit hex; text scaling is bounded; invalid audio-rate values are ignored. Appearance uses semantic CSS colours and scales text without disabling browser zoom. A delegated input handler covers current and dynamically inserted fields. A hidden measurement element estimates textarea cursor position so middle edits do not jump to the end. Viewport and scroll adjustments are separate from text persistence.

Textarea API: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement
Visual viewport: https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport
Speech recognition: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

## Privacy, persistence and deployments
Records remain in the legacy localStorage key; binary media remain in the existing IndexedDB store. New settings are carried by JSON backup/restore. Full backups include uploaded media; remote links remain links. Journal text/PDF copies are not substitutes for restorable backups. Streaming and optional browser dictation contact their providers; local journal writing is not uploaded by this app.

Code/style filenames and the service-worker cache are versioned. Cache cleanup is scoped to this app's path prefix and does not erase localStorage or IndexedDB. The worker does not cache cross-origin streams. Offline range responses are retained for included audio.

GitHub publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
