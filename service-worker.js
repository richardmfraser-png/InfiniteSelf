/* Infinite Self v3.1. Cache only this app's known same-origin files. */
const SCOPE=new URL(self.registration.scope);
const CACHE_PREFIX='infinite-self-'+encodeURIComponent(SCOPE.pathname)+'-';
const CACHE=CACHE_PREFIX+'v3.1.0';
const FILES=["ASSET_CHECK.html", "CHANGELOG.md", "GITHUB_UPDATE_GUIDE.html", "GITHUB_UPDATE_GUIDE.md", "LOCKED_BRIEF.md", "QUICK_START.html", "QUICK_START.md", "README.md", "START_HERE.html", "START_HERE.md", "TECHNICAL_NOTES.md", "TEST_RESULTS.json", "VERIFICATION.md", "app-v31.js", "apple-touch-icon.png", "blossoms-v3.jpg", "bluewater-v3.jpg", "candles-v3.jpg", "clouds-v3.jpg", "evening-v3.jpg", "feature-v3.jpg", "foamsun-v3.jpg", "forestlight-v3.jpg", "goldsea-v3.jpg", "horizon-v3.jpg", "index.html", "infinite-self-apple-v3.png", "infinite-self-icon-192-v3.png", "infinite-self-icon-512-v3.png", "manifest-v21.webmanifest", "manifest-v3.webmanifest", "manifest-v31.webmanifest", "manifest.webmanifest", "ocean-v3.mp3", "photos-v3.json", "sky-v3.jpg", "soft-bell-v3.mp3", "spray-v3.jpg", "stones-v3.jpg", "style-v31.css", "wavewide-v3.jpg"];
const absolute=name=>new URL(name,self.registration.scope).href;
const ALLOWED=new Set(FILES.map(absolute));
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(absolute))));
 // On upgrades, wait until the user chooses Save and refresh. Do not discard a draft.
});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
 await self.clients.claim();
})()));
async function rangeResponse(request,response){
 const range=request.headers.get('Range');if(!range)return response;
 const match=/^bytes=(\d*)-(\d*)$/.exec(range.trim());if(!match)return new Response('Unsupported range',{status:416});
 const buf=await response.arrayBuffer(),size=buf.byteLength;let start=match[1]?Number(match[1]):0,end=match[2]?Number(match[2]):size-1;
 if(!match[1]&&match[2]){start=Math.max(0,size-Number(match[2]));end=size-1}
 if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start<0||start>=size||end<start)return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+size}});
 end=Math.min(end,size-1);const headers=new Headers(response.headers);headers.set('Content-Range',`bytes ${start}-${end}/${size}`);headers.set('Accept-Ranges','bytes');headers.set('Content-Length',String(end-start+1));return new Response(buf.slice(start,end+1),{status:206,statusText:'Partial Content',headers});
}
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==SCOPE.origin||!url.pathname.startsWith(SCOPE.pathname))return;
 const plain=new URL(url);plain.search='';plain.hash='';const key=plain.href;
 if(req.mode==='navigate'){
  const appEntry=url.pathname===SCOPE.pathname||key===absolute('index.html');
  event.respondWith((async()=>{
   const cache=await caches.open(CACHE);
   try{const response=await fetch(req);if(response.ok&&response.headers.get('Content-Type')?.includes('text/html')){
    if(appEntry)await cache.put(absolute('index.html'),response.clone());else if(ALLOWED.has(key))await cache.put(key,response.clone());
   }return response}catch{const cached=await cache.match(appEntry?absolute('index.html'):key);return cached||new Response('This page is not available offline.',{status:503,headers:{'Content-Type':'text/plain'}})}
  })());return;
 }
 if(!ALLOWED.has(key))return; // Never replace an unknown or missing image with HTML.
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE),cached=await cache.match(key);
  if(cached)return rangeResponse(req,cached);
  const response=await fetch(req);if(response.ok&&response.status===200&&!req.headers.has('Range'))await cache.put(key,response.clone());return response;
 })());
});
