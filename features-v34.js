/* Infinite Self v3.4 — gallery, reflection, review and routine extensions.
 * Public handlers stay compatible with the existing vanilla-JS application.
 * No user records or media are shipped with this release. */
(() => {
'use strict';
const clone = value => JSON.parse(JSON.stringify(value));
const now = () => new Date().toISOString();
const str = (v, max = 5000) => String(v ?? '').slice(0, max);
const object = v => v && typeof v === 'object' && !Array.isArray(v);
const list = v => Array.isArray(v) ? v : [];
const base = {
 normaliseState, save, init, renderAll, showTab, renderDailyView, renderJournal, saveJournal,
 renderJournalHistory, renderProgress, renderSettings, renderBackupSummary, loadPersonalMedia,
 uploadPhotos, uploadAudio, openReadingComposer, reflectOnDailyQuote, recordSession, startClock,
 markReading, toggleMilestone, restoreBackup, renderMeditation, updateTimerUI, closeDialog,
 renderFAQs, dbPut, dbDelete, exportCSV, readableJournal, deleteClip, resetMeditation, handleVisibility
};
let photoSequence = [], photoSequenceIndex = 0, photoFocusDate = null, photoOpening = 0;
let progressMode = 'overview', reviewWeek = weekBounds()[0], routineDraft = null;
let lastFingerprint = null, latestUndoId = null, storageInfo = null, renderSafetyPending = false;
const STEP_TYPES = {
 intention:'Guiding intention', meditation:'Meditation', reading:'Wisdom reading',
 journal:'Journal', priorities:'My 3 priorities', custom:'My own practice'
};
const FILTERS = ['All','Favourites','My uploads','Ocean','Light','Stillness','Growth'];
const sourcePhotoId = s => s?.key?.startsWith('photo|') ? s.key.slice(6) : '';
pagePhotos.routines='seed-stones';
pageCopy.routines=['A rhythm that belongs to you.','Choose the steps. Give them your attention. Come back tomorrow.'];

function makeStep(type, extra={}) { return {id:'step-'+uid(), type, label:STEP_TYPES[type], enabled:true, minutes:10, trackId:'ocean', category:'Spiritual', journalType:'freeform', dayOffset:0, note:'', ...extra}; }
function defaultRoutines(profile) {
 return [
  {id:'routine-morning', title:'Morning practice', slot:'morning', note:'Meet the day with intention.', steps:[
   makeStep('intention'),makeStep('meditation',{trackId:profile.defaultMeditation||'ocean'}),
   makeStep('reading',{category:profile.defaultWisdom||'Spiritual'}),makeStep('journal',{journalType:'morning',label:'Morning intention & journal'}),makeStep('priorities')
  ]},
  {id:'routine-evening', title:'Evening reset', slot:'evening', note:'Notice what helped. Make space for tomorrow.', steps:[
   makeStep('journal',{journalType:'evening',label:'Evening reflection'}),makeStep('priorities',{dayOffset:1,label:'Plan tomorrow’s My 3'}),
   makeStep('meditation',{minutes:5,trackId:'bells',label:'Five minutes of stillness'})
  ]}
 ];
}
function normaliseStep(step) {
 const s=object(step)?step:{};
 return {id:safeId(s.id)?s.id:'step-'+uid(),type:Object.hasOwn(STEP_TYPES,s.type)?s.type:'custom',label:str(s.label||STEP_TYPES[s.type]||'My practice',100),enabled:s.enabled!==false,
 minutes:Math.max(1,Math.min(180,finiteValue(s.minutes,10))),trackId:safeId(s.trackId)?s.trackId:'ocean',
 category:wisdomCategories.includes(s.category)?s.category:'Spiritual',journalType:['morning','freeform','evening'].includes(s.journalType)?s.journalType:'freeform',
 dayOffset:Number(s.dayOffset)===1?1:0,note:str(s.note,1500)};
}
normaliseState = function(raw) {
 const n=base.normaliseState(raw);
 n.photoDetails=object(n.photoDetails)?n.photoDetails:{};
 for(const [id,d] of Object.entries(n.photoDetails)) {
  if(!safeId(id)||!object(d)){delete n.photoDetails[id];continue;}
  n.photoDetails[id]={title:str(d.title,140),caption:str(d.caption,1500),tags:list(d.tags).map(t=>str(t,32).trim()).filter(Boolean).slice(0,12),updatedAt:str(d.updatedAt,40)};
 }
 n.trashedPhotoIds=list(n.trashedPhotoIds).filter(safeId);
 n.weeklyReviews=object(n.weeklyReviews)?n.weeklyReviews:{};
 for(const [date,r]of Object.entries(n.weeklyReviews)){if(!validDate(date)||!object(r)){delete n.weeklyReviews[date];continue;}for(const f of ['helped','obstacles','adjustment','nextFocus'])r[f]=str(r[f],f==='nextFocus'?280:20000);}
 n.weeklyFocus=object(n.weeklyFocus)?n.weeklyFocus:{};
 for(const [date,f]of Object.entries(n.weeklyFocus))if(!validDate(date)||!object(f))delete n.weeklyFocus[date];else f.text=str(f.text,280);
 if(!Array.isArray(n.routines)) n.routines=defaultRoutines(n.profile);
 n.routines=n.routines.filter(object).map(r=>({id:safeId(r.id)?r.id:'routine-'+uid(),title:str(r.title||'My practice',100),slot:['morning','evening','anytime'].includes(r.slot)?r.slot:'anytime',note:str(r.note,280),steps:list(r.steps).slice(0,12).map(normaliseStep),updatedAt:str(r.updatedAt,40)}));
 const routineIds=new Set();for(const r of n.routines){if(routineIds.has(r.id))r.id='routine-'+uid();routineIds.add(r.id);const ids=new Set();for(const s of r.steps){if(ids.has(s.id))s.id='step-'+uid();ids.add(s.id);}}
 n.routineRuns=list(n.routineRuns).filter(r=>object(r)&&safeId(r.id)&&validDate(r.date)).map(r=>({...r,title:str(r.title||'Practice',100),steps:list(r.steps).map(normaliseStep),cursor:Math.max(0,Math.floor(finiteValue(r.cursor))),results:object(r.results)?r.results:{},status:['active','paused','complete','ended'].includes(r.status)?r.status:'paused'}));
 n.activeRoutineRunId=safeId(n.activeRoutineRunId)&&n.routineRuns.some(r=>r.id===n.activeRoutineRunId&&['active','paused'].includes(r.status))?n.activeRoutineRunId:null;
 n.recentlyRemoved=list(n.recentlyRemoved).filter(r=>object(r)&&safeId(r.id)&&['photo','log'].includes(r.kind));
 n.safety={revision:0,mediaRevision:0,...(object(n.safety)?n.safety:{})};
 n.safety.revision=Math.max(0,finiteValue(n.safety.revision));n.safety.mediaRevision=Math.max(0,finiteValue(n.safety.mediaRevision));
 for(const j of Object.values(n.journal)){if(!safeId(j.photoOfDayId))delete j.photoOfDayId;}
 return n;
};

/* A content-change counter, not a count of keystrokes or proof of a cloud copy. */
function recordFingerprint() {
 const filteredPriorities=Object.fromEntries(Object.entries(state.priorities).filter(([,p])=>p.some(x=>x.text.trim())));
 const payload={...state,priorities:filteredPriorities};delete payload.safety;delete payload.dailyQuoteAssignments;
 const pref={...payload.preferences};delete pref.lastBackupKind;delete pref.lastBackupPreparedAt;payload.preferences=pref;
 return quoteHash(JSON.stringify(payload));
}
save = function() {
 if(!state?.safety)return base.save();
 const fingerprint=recordFingerprint(),changed=lastFingerprint!==null&&fingerprint!==lastFingerprint;
 const prev=state.safety.revision;
 if(changed)state.safety.revision++;
 const ok=base.save();
 if(ok){lastFingerprint=fingerprint;if(changed)scheduleSafetyRender();}
 else state.safety.revision=prev;
 return ok;
};
function scheduleSafetyRender(){if(renderSafetyPending)return;renderSafetyPending=true;setTimeout(()=>{renderSafetyPending=false;if(state){renderSafetyPanel();renderBackupReminder();}},120);}
function mediaChanged(){state.safety.mediaRevision++;save();scheduleSafetyRender();}
dbPut=async function(item){await base.dbPut(item);if(state?.safety)mediaChanged();};
dbDelete=async function(id){await base.dbDelete(id);if(state?.safety)mediaChanged();};

/* Gallery metadata is held by stable ID; renaming never breaks page choices. */
allPhotos = function() {
 return [...SEED_PHOTOS,...personalMedia.filter(p=>p.kind==='photo')]
 .filter(p=>!state.trashedPhotoIds.includes(p.id))
 .map(p=>{const d=state.photoDetails[p.id]||{};return {...p,title:d.title||p.title,alt:p.kind==='photo'?(d.title||p.alt||p.title):p.alt,caption:d.caption||'',tags:list(d.tags)};});
};
function filteredPhotos(){const q=($('gallerySearch')?.value||'').trim().toLocaleLowerCase();return allPhotos().filter(p=>
 (galleryFilter==='All'||galleryFilter==='Favourites'&&state.favoritePhotos.includes(p.id)||galleryFilter==='My uploads'&&p.kind==='photo'||p.category===galleryFilter)
 &&(!q||`${p.title} ${p.caption} ${p.tags.join(' ')}`.toLocaleLowerCase().includes(q)));}
renderGallery=function(){
 $('galleryFilters').innerHTML=FILTERS.map((f,i)=>`<button class="chip ${galleryFilter===f?'active':''}" onclick="setGalleryFilter(${i})" aria-pressed="${galleryFilter===f}">${f}</button>`).join('');
 const rows=filteredPhotos();$('galleryCount').textContent=`${rows.length} of ${allPhotos().length} photographs`;
 $('galleryGrid').innerHTML=rows.length?rows.map(p=>`<button class="gallery-tile" onclick="openPhoto('${p.id}')" aria-label="View ${esc(p.title)}"><img src="${esc(photoURL(p))}" alt="${esc(p.alt||p.title)}" loading="lazy"/><span class="caption"><span><strong>${esc(p.title)}</strong><small>${esc(p.tags.length?p.tags.join(' · '):p.kind==='photo'?'Your upload':p.category)}</small></span><span class="heart" aria-label="${state.favoritePhotos.includes(p.id)?'Favourite':'Not favourited'}">${state.favoritePhotos.includes(p.id)?'♥':'♡'}</span></span></button>`).join(''):'<div class="card"><p class="muted">No photos match this view. Try All or a different search.</p></div>';
};
setGalleryFilter=function(i){galleryFilter=FILTERS[i]||'All';renderGallery();};
function currentPhoto(){return allPhotos().find(p=>p.id===viewingPhotoId);}
openPhoto=function(id){
 const p=allPhotos().find(p=>p.id===id);if(!p)return toast('This photograph is no longer in the gallery.');
 const visible=filteredPhotos().map(p=>p.id);photoSequence=visible.includes(id)?visible:allPhotos().map(p=>p.id);
 photoSequenceIndex=photoSequence.indexOf(id);viewingPhotoId=id;photoOpening++;
 $('photoDetailsForm').classList.add('hidden');$('photoDayPicker').classList.add('hidden');
 $('photoDayDate').value=photoFocusDate||journalDay||isoDate();renderPhotoViewer();openDialog('photoModal');$('photoModal').querySelector('.sheet').scrollTop=0;
};
function renderPhotoViewer(){
 const p=currentPhoto();if(!p)return;
 $('photoFull').src=photoURL(p);$('photoFull').alt=p.alt||p.title;$('photoTitle').textContent=p.title;
 $('photoCaption').textContent=p.caption;$('photoCaption').classList.toggle('hidden',!p.caption);
 $('photoCredit').textContent=p.kind==='photo'?'Your local upload · a resized copy. The original on your device is unchanged.':'Photograph supplied by Richard Fraser for Infinite Self.';
 $('photoPosition').textContent=`${photoSequenceIndex+1} of ${photoSequence.length}`;
 $('photoPrev').disabled=photoSequenceIndex<=0;$('photoNext').disabled=photoSequenceIndex>=photoSequence.length-1;
 $('favoriteButton').textContent=state.favoritePhotos.includes(p.id)?'♥ Favourited':'♡ Favourite';$('favoriteButton').setAttribute('aria-pressed',String(state.favoritePhotos.includes(p.id)));
 $('deletePhotoButton').classList.toggle('hidden',p.kind!=='photo');
 $('photoNameEdit').value=p.title;$('photoCaptionEdit').value=p.caption||'';$('photoTagsEdit').value=p.tags.join(', ');
 $('photoEditStatus').textContent='';
}
function photoDetailsDirty(){const p=currentPhoto();return p&&($('photoNameEdit').value!==p.title||$('photoCaptionEdit').value!==(p.caption||'')||$('photoTagsEdit').value!==p.tags.join(', '));}
function movePhoto(delta){
 if(!$('photoModal').classList.contains('open'))return;
 const ids=photoSequence.filter(id=>allPhotos().some(p=>p.id===id));photoSequence=ids;
 const i=ids.indexOf(viewingPhotoId),next=i+delta;if(next<0||next>=ids.length)return;
 if(!$('photoDetailsForm').classList.contains('hidden')&&photoDetailsDirty()&&!confirm('Leave without saving these photo details?'))return;
 photoSequenceIndex=next;viewingPhotoId=ids[next];photoOpening++;
 $('photoDetailsForm').classList.add('hidden');$('photoDayPicker').classList.add('hidden');renderPhotoViewer();
 $('liveRegion').textContent=`Photograph ${next+1} of ${ids.length}: ${currentPhoto().title}`;
}
function togglePhotoEditor(force){
 const open=typeof force==='boolean'?force:$('photoDetailsForm').classList.contains('hidden');
 if(!open&&photoDetailsDirty()){renderPhotoViewer();}
 $('photoDetailsForm').classList.toggle('hidden',!open);
 if(open){$('photoNameEdit').focus({preventScroll:true});$('photoDetailsForm').scrollIntoView({block:'nearest'});}
}
function savePhotoDetails(){
 const p=currentPhoto();if(!p)return;
 const title=$('photoNameEdit').value.trim();if(!title)return $('photoNameEdit').reportValidity();
 const tags=[...new Set($('photoTagsEdit').value.split(',').map(t=>t.trim().slice(0,32)).filter(Boolean))].slice(0,12);
 const previous=state.photoDetails[p.id];state.photoDetails[p.id]={title:title.slice(0,140),caption:$('photoCaptionEdit').value.trim().slice(0,1500),tags,updatedAt:now()};
 if(!save()){if(previous)state.photoDetails[p.id]=previous;else delete state.photoDetails[p.id];$('photoEditStatus').textContent='Not saved — please export a backup.';return;}
 $('photoDetailsForm').classList.add('hidden');renderPhotoViewer();renderGallery();updateHero();renderJournalPhoto();renderJournalHistory();toast('Photo details saved. Your original file is unchanged.');
}
togglePhotoFavorite=function(){const id=viewingPhotoId,i=state.favoritePhotos.indexOf(id);if(i>=0)state.favoritePhotos.splice(i,1);else state.favoritePhotos.push(id);save();$('favoriteButton').textContent=state.favoritePhotos.includes(id)?'♥ Favourited':'♡ Favourite';$('favoriteButton').setAttribute('aria-pressed',String(state.favoritePhotos.includes(id)));renderGallery();};
downloadCurrentPhoto=function(){const p=currentPhoto();if(!p)return;const a=document.createElement('a');a.href=photoURL(p);a.download=(p.title||'Infinite Self photograph').replace(/[\\/:*?"<>|\x00-\x1F]/g,'').replace(/[. ]+$/,'').slice(0,140)+'.jpg';a.click();};
function initPhotoGestures(){
 const stage=$('photoStage');let touch=null,multi=false,pointers=new Set();
 stage.addEventListener('pointerdown',e=>{pointers.add(e.pointerId);if(pointers.size>1){multi=true;touch=null;return;}multi=false;if(e.button!==0||!e.isPrimary||window.visualViewport?.scale>1.05)return;touch={id:e.pointerId,x:e.clientX,y:e.clientY,time:performance.now()};try{stage.setPointerCapture(e.pointerId);}catch{}});
 stage.addEventListener('pointerup',e=>{pointers.delete(e.pointerId);const t=touch;touch=null;if(multi||!t||t.id!==e.pointerId)return;const dx=e.clientX-t.x,dy=e.clientY-t.y;if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.4&&performance.now()-t.time<1600){e.stopPropagation();movePhoto(dx<0?1:-1);}});
 stage.addEventListener('pointercancel',e=>{pointers.delete(e.pointerId);touch=null;});
 document.addEventListener('keydown',e=>{if(!$('photoModal').classList.contains('open')||/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)||e.ctrlKey||e.altKey||e.metaKey)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();movePhoto(e.key==='ArrowLeft'?-1:1);}});
 stage.addEventListener('dragstart',e=>e.preventDefault());
}
uploadPhotos=async function(files){await base.uploadPhotos(files);renderSafetyPanel();renderBackupReminder();};
loadPersonalMedia=async function(){await base.loadPersonalMedia();renderJournalPhoto();renderSafetyPanel();renderRoutineTemplates();};

/* A photo can be decorative, a journal attachment, or an actual inspiration source. */
function togglePhotoDayPicker(){const box=$('photoDayPicker');box.classList.toggle('hidden');if(!box.classList.contains('hidden')){$('photoDayDate').value=photoFocusDate||journalDay;box.scrollIntoView({block:'nearest'});}}
function attachPhotoToDay(){const date=$('photoDayDate').value,p=currentPhoto();if(!validDate(date)||!p)return toast('Choose a valid journal date.');flushJournal();const j=state.journal[date]||{morning:'',freeform:'',evening:'',state:6,tags:'',sources:[]};j.photoOfDayId=p.id;j.updatedAt=now();state.journal[date]=j;if(save()){photoFocusDate=null;closeDialog('photoModal');editJournalDate(date);toast('Photo attached to '+date+'.');}}
function chooseJournalPhoto(){photoFocusDate=journalDay;showTab('gallery');$('galleryStatus').textContent='Choose a photograph, then use Photo of the day to attach it to '+photoFocusDate+'.';}
function removePhotoOfDay(){flushJournal();const j=state.journal[journalDay];if(!j)return;delete j.photoOfDayId;j.updatedAt=now();save();renderJournalPhoto();toast('Photo detached. The photograph and your writing remain.');}
function renderJournalPhoto(){
 if(!$('journalPhotoCard')||!state)return;const j=currentJournal(),p=allPhotos().find(p=>p.id===j.photoOfDayId);
 $('journalPhotoCard').innerHTML=p?`<div class="section-title"><h3>Photo of the day</h3><button class="btn ghost small" onclick="chooseJournalPhoto()">Change</button></div><button class="journal-photo-preview" onclick="openPhoto('${p.id}')" aria-label="View ${esc(p.title)}"><img src="${esc(photoURL(p))}" alt="${esc(p.alt||p.title)}"/></button><strong>${esc(p.title)}</strong>${p.caption?`<p class="muted">${esc(p.caption)}</p>`:''}<div class="button-row"><button class="btn secondary small" onclick="reflectOnJournalPhoto()">Reflect on this image</button><button class="btn ghost small" onclick="removePhotoOfDay()">Detach from this date</button></div>`:
 `<div class="section-title"><h3>Photo of the day</h3><button class="btn secondary small" onclick="chooseJournalPhoto()">Choose a photo</button></div><p class="muted">${j.photoOfDayId?'This linked photo is unavailable. Restore its full backup or choose another. Your writing is still here.':'Optional. Give this date an image worth returning to.'}</p>`;
}
function reflectOnJournalPhoto(){viewingPhotoId=currentJournal().photoOfDayId;reflectOnPhoto(journalDay);}
function reflectOnPhoto(date){const p=currentPhoto();if(!p)return;flushJournal();const d=typeof date==='string'&&validDate(date)?date:photoFocusDate||journalDay||isoDate();if($('photoModal').classList.contains('open'))closeDialog('photoModal');
 activeCompose={type:'photo',category:'Photo reflection',title:p.title,prompt:p.caption||'What does this image bring up for you today?',key:'photo|'+p.id,source:'Personal gallery',sourceUrl:''};
 const saved=state.composeDraft?.key===activeCompose.key?state.composeDraft:null;
 $('composeSource').textContent='Photo reflection · '+p.title;$('composePrompt').textContent=activeCompose.prompt;
 $('composeType').value=saved?.type||'freeform';$('composeDate').value=saved?.date||d;$('composeText').value=saved?.text||'';
 $('composePhoto').src=photoURL(p);$('composePhoto').alt=p.alt||p.title;$('composePhotoBox').classList.remove('hidden');$('composePhotoOfDay').checked=true;openDialog('composeModal');refreshWritingFields();}
openReadingComposer=function(...args){$('composePhotoBox').classList.add('hidden');return base.openReadingComposer(...args);};
reflectOnDailyQuote=function(...args){$('composePhotoBox').classList.add('hidden');return base.reflectOnDailyQuote(...args);};
postCompose=function(){
 const date=$('composeDate').value,type=$('composeType').value,text=$('composeText').value.trim();
 if(!activeCompose||!validDate(date)||!['morning','freeform','evening'].includes(type))return toast('Choose a valid date and entry type.');
 if(!text)return toast('Add a few words before saving your reflection.');
 stopDictation();flushJournal();const previous=clone(state.journal[date]||null),j=state.journal[date]||{morning:'',freeform:'',evening:'',state:6,tags:'',sources:[]};
 j[type]=(j[type]?j[type]+'\n\n':'')+`${activeCompose.title} — ${activeCompose.category}\n${activeCompose.prompt}\n\n${text}`;
 const isPhoto=activeCompose.key.startsWith('photo|');j.sources=list(j.sources);
 if(!j.sources.some(s=>s.key===activeCompose.key))j.sources.push({type:isPhoto?'photo':activeCompose.key.startsWith('quote|')?'quote':'wisdom',key:activeCompose.key,title:activeCompose.title,category:activeCompose.category,source:activeCompose.source||'',sourceUrl:activeCompose.sourceUrl||''});
 if(isPhoto&&$('composePhotoOfDay').checked)j.photoOfDayId=sourcePhotoId(activeCompose);
 j.updatedAt=now();state.journal[date]=j;
 if(!save()){if(previous)state.journal[date]=previous;else delete state.journal[date];return toast('Reflection is not saved. Keep the draft and export a backup.');}
 state.composeDraft=null;activeCompose=null;save();closeDialog('composeModal');photoFocusDate=null;
 if(date===journalDay)renderJournal();if(date===selectedDailyDate)renderTodayStats();renderRoutineGuide();toast('Reflection appended to '+type+' · '+date+'.');
};
function journalSourceHTML(s){const pid=sourcePhotoId(s),p=pid?allPhotos().find(p=>p.id===pid):null;return `<div class="source-row">${p?`<img class="source-thumb" src="${esc(photoURL(p))}" alt=""/>`:''}<div><strong>${esc(p?.title||s.title||s.category||'Inspiration')}</strong><small>${esc(s.category||s.source||'')}</small></div><div>${pid?(p?`<button class="btn secondary small" onclick="openPhoto('${pid}')">View photo</button>`:'<span class="tiny">Photo unavailable · text retained</span>'):s.key?.startsWith('quote|')?'<span class="badge">Daily quote</span>':`<button class="btn secondary small" onclick="openWisdomSource('${esc(s.key)}')">Review in Wisdom</button>`}${cleanURL(s.sourceUrl)?`<a class="btn ghost small" href="${esc(cleanURL(s.sourceUrl))}" target="_blank" rel="noopener noreferrer">Original source ↗</a>`:''}</div></div>`;}
renderJournalSources=function(){const sources=list(currentJournal().sources);$('journalSourcesCard').classList.toggle('hidden',!sources.length);$('journalSources').innerHTML=sources.map((s,i)=>journalSourceHTML(s)+`<button class="btn ghost small" onclick="removeJournalSource(${i})">Remove link</button>`).join('');};
renderJournalHistory=function(){
 const q=($('journalSearch').value||'').toLocaleLowerCase();const entries=Object.entries(state.journal).filter(([d,j])=>(hasJournalContent(j)||j.photoOfDayId)&&`${d} ${j.morning||''} ${j.freeform||''} ${j.evening||''} ${j.tags||''} ${list(j.sources).map(s=>s.title).join(' ')}`.toLocaleLowerCase().includes(q)).sort((a,b)=>b[0].localeCompare(a[0]));
 $('journalCount').textContent=`${entries.length} entries`;$('journalHistory').innerHTML=entries.length?entries.map(([d,j])=>{
 const p=allPhotos().find(p=>p.id===j.photoOfDayId);return `<details><summary>${esc(d)}${j.tags?' · '+esc(j.tags):''}</summary>${p?`<button class="history-photo" onclick="openPhoto('${p.id}')"><img loading="lazy" src="${esc(photoURL(p))}" alt="${esc(p.title)}"/>${esc(p.title)}</button>`:''}<div class="journal-text">${['morning','freeform','evening'].map(f=>j[f]?`<h4>${f==='freeform'?'Journal':f==='morning'?'Morning':'Evening'}</h4><div>${esc(j[f])}</div>`:'').join('')}</div>${list(j.sources).map(journalSourceHTML).join('')}<div class="tiny">State / energy: ${j.state||'—'} of 10</div><button class="btn ghost small" onclick="editJournalDate('${d}')">Open this entry</button></details>`;
 }).join(''):'<p class="muted">No entries match this search yet.</p>';
};
renderJournal=function(){base.renderJournal();renderJournalPhoto();};
saveJournal=function(...args){const r=base.saveJournal(...args);renderRoutineGuide();return r;};

/* Weekly review: facts from dated records, always labelled with their boundaries. */
function weeklyEvidence(start){
 const end=addDaysISO(start,6),through=end<isoDate()?end:isoDate();
 const dates=Array.from({length:7},(_,i)=>addDaysISO(start,i));
 const eligible=dates.filter(d=>d<=through);
 const priorities=eligible.flatMap(d=>list(state.priorities[d]).filter(p=>p.text?.trim()).map(p=>({date:d,...p})));
 const journalDates=eligible.filter(d=>hasJournalContent(state.journal[d])||state.journal[d]?.photoOfDayId);
 const meditations=state.meditations.filter(m=>m.date>=start&&m.date<=through);
 const readings=state.readingActivity.filter(r=>r.date>=start&&r.date<=through);
 const routines=state.routineRuns.filter(r=>r.date>=start&&r.date<=through);
 const commitments=state.commitments.map(c=>{
  const leaves=(c.branches.length?c.branches:[null]).map(b=>{const t=b||c;const days=eligible.filter(d=>sumOnDate(c,b,d)>=t.target).length;return {name:t.name,unit:t.metric,amount:t.target,days,targetDays:t.frequency,coverage:Math.min(1,days/t.frequency)};});
  return {name:c.name,category:c.category,coverage:leaves.reduce((n,l)=>n+l.coverage,0)/leaves.length,leaves};
 });
 const milestones=[];for(const g of state.goals)for(const m of g.milestones)if(m.done&&m.completedAt&&m.completedAt.slice(0,10)>=start&&m.completedAt.slice(0,10)<=through)milestones.push({goal:g.title,text:m.text,date:m.completedAt.slice(0,10)});
 return {start,end,through,dates,eligible,priorities,journalDates,meditations,minutes:meditations.reduce((n,m)=>n+finiteValue(m.minutes),0),readings,routines,commitments,milestones};
}
function setProgressMode(mode){progressMode=mode==='weekly'?'weekly':'overview';$('progressOverview').classList.toggle('hidden',progressMode!=='overview');$('weeklyReviewPanel').classList.toggle('hidden',progressMode!=='weekly');$('progressOverviewButton').className='btn '+(progressMode==='overview'?'secondary':'ghost');$('progressReviewButton').className='btn '+(progressMode==='weekly'?'secondary':'ghost');if(progressMode==='weekly')renderWeeklyReview();}
function openWeeklyReview(date=isoDate()){showTab('progress');selectReviewWeek(validDate(date)?date:isoDate());setProgressMode('weekly');$('weeklyReviewPanel').scrollIntoView({block:'start',behavior:'auto'});}
function selectReviewWeek(date){if(!validDate(date))return toast('Choose a valid date.');stopDictation();const start=weekBounds(date)[0];if(start>weekBounds()[0])return toast('Review this week or an earlier week.');reviewWeek=start;renderWeeklyReview();}
function stepReviewWeek(delta){selectReviewWeek(addDaysISO(reviewWeek,delta*7));}
function renderWeeklyReview(){
 if(!$('weeklyReviewPanel')||!state)return;
 const e=weeklyEvidence(reviewWeek),r=state.weeklyReviews[reviewWeek]||{};
 $('reviewWeekDate').value=reviewWeek;$('reviewWeekDate').max=isoDate();$('reviewNextWeek').disabled=reviewWeek>=weekBounds()[0];
 $('reviewWeekLabel').textContent=reviewWeek+' – '+e.end;
 $('reviewWeekNote').textContent=e.end>=isoDate()?`Week in progress · through ${e.through}. Full-week targets are shown, not a grade for an unfinished week.`:'A completed calendar week. Activity reflects saved records, including later corrections.';
 const priDone=e.priorities.filter(p=>p.done).length;
 $('weeklyReviewStats').innerHTML=[
  [`${priDone}/${e.priorities.length}`,'filled priorities completed'],
  [`${e.journalDates.length}/${e.eligible.length}`,'days with writing or a photo'],
  [prettyNum(e.minutes),'saved meditation minutes'],
  [String(e.readings.length),'readings marked read']
 ].map(([v,t])=>`<div class="stat"><b>${v}</b><span>${t}</span></div>`).join('');
 const rows=e.commitments.map(c=>`<div class="review-commitment"><div class="analysis-label"><strong>${esc(c.name)}</strong><span>${Math.round(c.coverage*100)}% of weekly target</span></div>${c.leaves.map(l=>`<div class="week-sub"><span>${esc(l.name)} · ${prettyNum(l.amount)} ${esc(l.unit)} per qualifying day</span><strong>${l.days}/${l.targetDays} days</strong></div>`).join('')}</div>`).join('');
 const days=e.dates.map(d=>{const p=list(state.priorities[d]).filter(x=>x.text?.trim()),future=d>isoDate();return `<details><summary>${esc(dayLabel(d))} · ${d} · ${p.length?(future?'planned':p.filter(x=>x.done).length+'/'+p.length+' done'):'no priorities entered'}</summary>${p.length?`<ol class="review-priority-list">${p.map(x=>`<li>${!future&&x.done?'✓ ':''}${esc(x.text)}</li>`).join('')}</ol>`:'<p class="muted">No priorities saved for this date.</p>'}<div class="button-row"><button class="btn ghost small" onclick="showTab('today');setDailyDate('${d}')">Open Daily View</button><button class="btn ghost small" onclick="editJournalDate('${d}')">Open Journal</button></div></details>`;}).join('');
 const dated=e.milestones.length?e.milestones.map(m=>`<p class="muted">✓ ${esc(m.goal)} — ${esc(m.text)} · ${m.date}</p>`).join(''):'<p class="muted">No milestone completions with a recorded completion date in this week.</p>';
 const goals=state.goals.map(g=>`<p class="tiny">${esc(g.title)}: ${g.milestones.filter(m=>m.done).length}/${g.milestones.length} milestones complete now.</p>`).join('');
 $('weeklyReviewEvidence').innerHTML=`<div class="card"><h3>Practices across the week</h3>${rows}<p class="score-note">A qualifying day meets that activity's amount target. Separate units are not added together. These percentages apply your current commitment settings; old settings are not reconstructed.</p></div><div class="card"><h3>My 3 · the week's record</h3>${days}</div><div class="card"><h3>Goals &amp; routine practice</h3>${dated}${goals}<p class="tiny">Goal totals above are current totals, not historical snapshots. Older completed milestones without a date are not assigned to this week.</p><p class="muted">${e.routines.filter(r=>r.status==='complete').length} routines finished · ${e.routines.reduce((n,r)=>n+Object.values(r.results).filter(v=>v?.status==='done').length,0)} steps practised · ${e.routines.reduce((n,r)=>n+Object.values(r.results).filter(v=>v?.status==='skipped').length,0)} skipped.</p></div>`;
 for(const [id,key]of [['reviewHelped','helped'],['reviewObstacles','obstacles'],['reviewAdjustment','adjustment'],['reviewFocus','nextFocus']])$(id).value=r[key]||'';
 $('reviewSaveStatus').textContent=r.reviewedAt?'Review saved · '+new Date(r.reviewedAt).toLocaleString():r.updatedAt?'Draft saved on this device.':'Your reflection is optional; the evidence above is already available.';
 renderWeeklyHistory();refreshWritingFields();
}
function saveReviewDraft(){
 if(!$('weeklyReviewPanel')||!state)return;
 const r=state.weeklyReviews[reviewWeek]||{};
 Object.assign(r,{helped:$('reviewHelped').value,obstacles:$('reviewObstacles').value,adjustment:$('reviewAdjustment').value,nextFocus:$('reviewFocus').value.slice(0,280),updatedAt:now()});
 state.weeklyReviews[reviewWeek]=r;
 $('reviewSaveStatus').textContent=save()?'Draft saved on this device.':'Not saved — export a backup before closing.';
}
function finishWeeklyReview(){
 stopDictation();saveReviewDraft();const r=state.weeklyReviews[reviewWeek];
 if(![r.helped,r.obstacles,r.adjustment,r.nextFocus].some(v=>v.trim()))return toast('Add a reflection or a focus before saving this review.');
 const e=weeklyEvidence(reviewWeek);r.reviewedAt=now();r.snapshot={capturedAt:now(),through:e.through,prioritiesDone:e.priorities.filter(p=>p.done).length,prioritiesFilled:e.priorities.length,journalDays:e.journalDates.length,meditationMinutes:e.minutes,readings:e.readings.length,commitments:e.commitments};
 if(save()){$('reviewSaveStatus').textContent='Weekly review saved · '+new Date(r.reviewedAt).toLocaleString();renderWeeklyHistory();toast('Weekly review saved.');}
}
function applyWeeklyFocus(){
 saveReviewDraft();const focus=$('reviewFocus').value.trim();if(!focus)return toast('Add your next-week focus first.');
 const date=addDaysISO(reviewWeek,7),existing=state.weeklyFocus[date]?.text;
 if(existing&&existing!==focus&&!confirm('Replace the focus already saved for the week beginning '+date+'?'))return;
 state.weeklyFocus[date]={text:focus,fromReview:reviewWeek,updatedAt:now()};if(save()){renderWeeklyFocus();toast('Focus saved for the week beginning '+date+'.');}
}
function renderWeeklyFocus(){if(!$('weeklyFocusCard'))return;const week=weekBounds(selectedDailyDate)[0],f=state.weeklyFocus[week];$('weeklyFocusCard').innerHTML=f?.text?`<div class="card focus-card"><div class="source">FOCUS FOR THIS WEEK</div><p>${esc(f.text)}</p><button class="btn ghost small" onclick="openWeeklyReview('${f.fromReview||addDaysISO(week,-7)}')">Review or adjust</button></div>`:'';}
function renderWeeklyHistory(){const records=Object.entries(state.weeklyReviews).filter(([,r])=>r.reviewedAt).sort((a,b)=>b[0].localeCompare(a[0]));$('weeklyReviewHistory').innerHTML=records.length?records.map(([date,r])=>`<div class="clip-row"><div><strong>Week of ${date}</strong><p class="tiny">${esc(r.nextFocus||r.adjustment||'Reflection saved')}</p></div><button class="btn ghost small" onclick="selectReviewWeek('${date}');$('weeklyReviewPanel').scrollIntoView({block:'start'})">Open review</button></div>`).join(''):'<p class="muted">Save a review to begin your history.</p>';}
function exportWeeklyReview(){saveReviewDraft();const e=weeklyEvidence(reviewWeek),r=state.weeklyReviews[reviewWeek];const lines=['Infinite Self — private weekly review',`Week: ${reviewWeek} – ${e.end}`,`Through: ${e.through}`,`Exported: ${now()}`,'',`Priorities completed: ${e.priorities.filter(p=>p.done).length}/${e.priorities.length} filled`, `Journal days: ${e.journalDates.length}`,`Meditation: ${prettyNum(e.minutes)} minutes`,`Readings marked read: ${e.readings.length}`,'','Current-target coverage (not reconstructed historic settings)',...e.commitments.flatMap(c=>[c.name,...c.leaves.map(l=>`  ${l.name}: ${l.days}/${l.targetDays} qualifying days`)]),'','What helped?',r.helped||'—','','What got in the way?',r.obstacles||'—','','What will I adjust?',r.adjustment||'—','','Next week’s focus',r.nextFocus||'—'];download('infinite-self-weekly-review-'+reviewWeek+'.txt','text/plain;charset=utf-8',lines.join('\n'));}
toggleMilestone=function(gid,mid,done){const m=state.goals.find(g=>g.id===gid)?.milestones.find(m=>m.id===mid);if(m){if(done&&!m.done)m.completedAt=now();if(!done)delete m.completedAt;}return base.toggleMilestone(gid,mid,done);};

/* Routines: navigation over existing records, not another activity ledger. */
function activeRun(){return state.routineRuns.find(r=>r.id===state.activeRoutineRunId&&['active','paused'].includes(r.status))||null;}
function runStep(run=activeRun()){return run?.steps[run.cursor]||null;}
function stepDescription(s){
 if(s.type==='meditation')return `${s.minutes} ${s.minutes===1?'minute':'minutes'} · ${allTracks().find(t=>t.id===s.trackId)?.title||'Saved audio unavailable'}`;
 if(s.type==='reading')return s.category;
 if(s.type==='journal')return (s.journalType==='freeform'?'Freeform':s.journalType==='morning'?'Morning':'Evening')+' journal';
 if(s.type==='priorities')return s.dayOffset?'Plan tomorrow’s priorities':'Today’s three priorities';
 return s.note||STEP_TYPES[s.type];
}
function renderRoutineTemplates(){
 if(!$('routineTemplates')||!state)return;
 $('routineTemplates').innerHTML=state.routines.length?state.routines.map(r=>{
 const enabled=r.steps.filter(s=>s.enabled);return `<article class="card routine-template"><div class="section-title"><div><div class="source">${r.slot.toUpperCase()}</div><h3>${esc(r.title)}</h3></div><button class="btn ghost small" onclick="editRoutine('${r.id}')">Edit</button></div><p class="muted">${esc(r.note)}</p><ol class="routine-sequence">${enabled.map(s=>`<li><strong>${esc(s.label)}</strong><span>${esc(stepDescription(s))}</span></li>`).join('')}</ol><div class="button-row"><button class="btn primary" onclick="startRoutine('${r.id}')">Begin this practice</button><span class="tiny">${enabled.length} steps · each can be skipped</span></div></article>`;
 }).join(''):'<div class="card"><p class="muted">Build a routine to connect the practices you use most.</p></div>';
}
function renderRoutineToday(){if(!$('routineToday'))return;const run=activeRun(),templates=state.routines.slice(0,3);
 $('routineToday').innerHTML=`<div class="card routine-today"><div class="section-title"><div><div class="source">YOUR DAILY RHYTHM</div><h3>${run?'Pick up your practice.':'Begin my practice'}</h3></div><button class="btn ghost small" onclick="showTab('routines')">Manage</button></div>${run?`<p class="muted">${esc(run.title)} · step ${run.cursor+1} of ${run.steps.length} · ${run.date}</p><button class="btn primary" onclick="resumeRoutine('${run.id}')">${run.status==='paused'?'Resume':'Continue'} routine</button>`:`<p class="muted">A guided sequence using the sections you already know.</p><div class="button-row">${templates.map(r=>`<button class="btn ${r.slot==='morning'?'primary':'secondary'}" onclick="startRoutine('${r.id}')">${esc(r.title)}</button>`).join('')}${!templates.length?'<button class="btn secondary" onclick="editRoutine()">Build a routine</button>':''}</div>`}${selectedDailyDate!==isoDate()?'<p class="tiny">Routines start on the real current date, independently of the Daily View date selector.</p>':''}</div>`;
}
function renderRoutineHistory(){if(!$('routineHistory'))return;const rows=state.routineRuns.slice().reverse();$('routineHistory').innerHTML=rows.length?rows.map(r=>{
 const done=Object.values(r.results).filter(x=>x?.status==='done').length,skipped=Object.values(r.results).filter(x=>x?.status==='skipped').length;
 return `<details><summary>${esc(r.title)} · ${r.date} · ${r.status==='complete'?'finished':r.status}</summary><p class="muted">${done} practised · ${skipped} skipped · ${r.steps.length} total</p><ol class="routine-history-steps">${r.steps.map(s=>{const result=r.results[s.id];return `<li><strong>${esc(s.label)}</strong><span>${result?.status==='done'?'Practised':result?.status==='skipped'?'Skipped':'Not yet'}${result?.detail?' · '+esc(result.detail):''}</span></li>`;}).join('')}</ol>${['paused','active'].includes(r.status)?`<button class="btn secondary small" onclick="resumeRoutine('${r.id}')">Resume this routine</button> <button class="btn ghost small" onclick="endRoutine()">End run</button>`:''}</details>`;
 }).join(''):'<p class="muted">Your first routine will appear here. Skipped steps are not counted as completed practice.</p>';}
function renderRoutineGuide(){
 const r=activeRun(),s=runStep(r),box=$('routineGuide');if(!box)return;
 if(!r||r.status!=='active'||!s){box.classList.add('hidden');return;}
 box.classList.remove('hidden');
 box.innerHTML=`<div class="routine-guide-top"><div><div class="source">${esc(r.title)} · STEP ${r.cursor+1} OF ${r.steps.length}</div><strong>${esc(s.label)}</strong><p class="tiny">${esc(stepDescription(s))}${r.date!==isoDate()?' · started '+r.date:''}</p></div><button class="btn ghost small" onclick="pauseRoutine()">Pause routine</button></div><div class="routine-guide-actions"><button class="btn ghost small" onclick="openRoutineStep()">Open step</button>${r.cursor?'<button class="btn ghost small" onclick="routineBack()">← Back</button>':''}<button class="btn ghost small" onclick="skipRoutineStep()">Skip</button><button class="btn primary small" onclick="completeRoutineStep()">${r.cursor===r.steps.length-1?'Done & finish':'Done & next →'}</button></div><p class="routine-status tiny" id="routineStepStatus" role="status">${r.results[s.id]?.status==='done'?'Already practised. Continue without logging it again.':s.type==='meditation'?'Use the session controls below. Saved minutes are credited only once.':s.type==='reading'?(r.currentReadingKey&&isReadingRead(r.currentReadingKey)?'This reading is already in history. Review it, then choose Done.':'Mark a lesson as read, then continue.'):s.type==='custom'?'Practise in your own way, then choose Done.':'Use the existing fields below; your entries are not duplicated.'}</p>`;
}
function renderRoutines(){renderRoutineTemplates();renderRoutineToday();renderRoutineGuide();renderRoutineHistory();}
function editRoutine(id){
 const r=state.routines.find(r=>r.id===id);routineDraft=r?clone(r):{id:'routine-'+uid(),title:'',slot:'anytime',note:'',steps:[makeStep('journal')]};
 $('routineName').value=routineDraft.title;$('routineSlot').value=routineDraft.slot;$('routineNote').value=routineDraft.note;
 $('deleteRoutineButton').classList.toggle('hidden',!r);$('routineEditorStatus').textContent='';renderRoutineStepEditor();openDialog('routineEditorModal');
}
function renderRoutineStepEditor(){if(!routineDraft)return;
 $('routineStepEditor').innerHTML=routineDraft.steps.map((s,i)=>`<div class="routine-step-edit"><div class="routine-step-head"><label class="check-label"><input type="checkbox" ${s.enabled?'checked':''} onchange="setRoutineStep(${i},'enabled',this.checked)"/> Step ${i+1}</label><div class="button-row"><button class="btn ghost small" ${i===0?'disabled':''} aria-label="Move step ${i+1} up" onclick="moveRoutineStep(${i},-1)">↑</button><button class="btn ghost small" ${i===routineDraft.steps.length-1?'disabled':''} aria-label="Move step ${i+1} down" onclick="moveRoutineStep(${i},1)">↓</button><button class="btn ghost small" onclick="removeRoutineStep(${i})">Remove</button></div></div>
 <div class="row"><div class="field"><label for="rs-type-${i}">Step type</label><select id="rs-type-${i}" onchange="setRoutineStep(${i},'type',this.value,true)">${Object.entries(STEP_TYPES).map(([k,v])=>`<option value="${k}" ${k===s.type?'selected':''}>${v}</option>`).join('')}</select></div><div class="field"><label for="rs-label-${i}">Your step name</label><input id="rs-label-${i}" maxlength="100" value="${esc(s.label)}" oninput="setRoutineStep(${i},'label',this.value)"/></div></div>
 ${s.type==='meditation'?`<div class="row"><div class="field"><label for="rs-minutes-${i}">Minutes (1–180)</label><input id="rs-minutes-${i}" type="number" min="1" max="180" step="1" value="${s.minutes}" oninput="setRoutineStep(${i},'minutes',Number(this.value))"/></div><div class="field"><label for="rs-track-${i}">Sound</label><select id="rs-track-${i}" onchange="setRoutineStep(${i},'trackId',this.value)">${!allTracks().some(t=>t.id===s.trackId)?`<option value="${s.trackId}" selected>Saved sound unavailable — choose another</option>`:''}${allTracks().map(t=>`<option value="${t.id}" ${t.id===s.trackId?'selected':''}>${esc(t.title)}</option>`).join('')}</select></div></div>`:''}
 ${s.type==='reading'?`<div class="field"><label for="rs-category-${i}">Wisdom category</label><select id="rs-category-${i}" onchange="setRoutineStep(${i},'category',this.value)">${wisdomCategories.map(c=>`<option ${c===s.category?'selected':''}>${esc(c)}</option>`).join('')}</select></div>`:''}
 ${s.type==='journal'?`<div class="field"><label for="rs-journal-${i}">Entry type</label><select id="rs-journal-${i}" onchange="setRoutineStep(${i},'journalType',this.value)">${['morning','freeform','evening'].map(k=>`<option value="${k}" ${k===s.journalType?'selected':''}>${k==='freeform'?'Freeform':k==='morning'?'Morning':'Evening'}</option>`).join('')}</select></div>`:''}
 ${s.type==='priorities'?`<div class="field"><label for="rs-offset-${i}">Priorities for</label><select id="rs-offset-${i}" onchange="setRoutineStep(${i},'dayOffset',Number(this.value))"><option value="0" ${!s.dayOffset?'selected':''}>The routine's date</option><option value="1" ${s.dayOffset?'selected':''}>The following day</option></select></div>`:''}
 <div class="field"><label for="rs-note-${i}">Reminder or instructions (optional)</label><textarea id="rs-note-${i}" rows="2" maxlength="1500" oninput="setRoutineStep(${i},'note',this.value)">${esc(s.note)}</textarea></div></div>`).join('');refreshWritingFields();}
function setRoutineStep(i,key,value,rerender=false){const s=routineDraft?.steps[i];if(!s)return;const prev=s.type;s[key]=value;if(key==='type'&&(!s.label||s.label===STEP_TYPES[prev]))s.label=STEP_TYPES[value];if(rerender)renderRoutineStepEditor();}
function addRoutineStep(){if(routineDraft.steps.length>=12)return toast('Use up to 12 steps in one routine.');routineDraft.steps.push(makeStep('custom'));renderRoutineStepEditor();}
function moveRoutineStep(i,d){const j=i+d;if(j<0||j>=routineDraft.steps.length)return;[routineDraft.steps[i],routineDraft.steps[j]]=[routineDraft.steps[j],routineDraft.steps[i]];renderRoutineStepEditor();}
function removeRoutineStep(i){routineDraft.steps.splice(i,1);renderRoutineStepEditor();}
function closeRoutineEditor(){routineDraft=null;closeDialog('routineEditorModal');}
function saveRoutineTemplate(){
 if(!routineDraft)return;const title=$('routineName').value.trim();if(!title)return toast('Name this routine.');
 if(!routineDraft.steps.some(s=>s.enabled))return toast('Keep at least one enabled step.');
 if(routineDraft.steps.some(s=>!s.label.trim()||s.type==='meditation'&&(!Number.isFinite(s.minutes)||s.minutes<1||s.minutes>180)))return toast('Give each step a name and use 1–180 meditation minutes.');
 const r={...routineDraft,title,slot:$('routineSlot').value,note:$('routineNote').value.trim(),steps:routineDraft.steps.map(normaliseStep),updatedAt:now()},old=clone(state.routines),i=state.routines.findIndex(x=>x.id===r.id);
 if(i<0)state.routines.push(r);else state.routines[i]=r;
 if(!save()){state.routines=old;return toast('Routine was not saved. Please export a backup.');}
 closeRoutineEditor();renderRoutines();toast('Routine saved. Existing runs keep their original steps.');
}
function deleteRoutineTemplate(){if(!routineDraft||!confirm('Delete this routine template? Its practice history will stay.'))return;state.routines=state.routines.filter(r=>r.id!==routineDraft.id);save();closeRoutineEditor();renderRoutines();}
function startRoutine(id){
 const r=state.routines.find(r=>r.id===id);if(!r)return;const active=activeRun();
 if(active){if(active.routineId===id)return resumeRoutine(active.id);return toast('Finish or end the current routine before starting another. A paused routine can be resumed or ended from Routines.');}
 const steps=r.steps.filter(s=>s.enabled).map(s=>clone(s));if(!steps.length)return toast('Enable a step in the routine builder.');
 const run={id:'run-'+uid(),routineId:r.id,title:r.title,slot:r.slot,date:isoDate(),steps,cursor:0,results:{},status:'active',startedAt:now(),updatedAt:now()};
 state.routineRuns.push(run);state.activeRoutineRunId=run.id;if(!save())return toast('The routine could not be saved.');
 renderRoutines();openRoutineStep();
}
function resumeRoutine(id){const run=state.routineRuns.find(r=>r.id===id);if(!run||!['active','paused'].includes(run.status))return;const other=activeRun();if(other&&other.id!==id)return toast('End the current routine before resuming another.');state.activeRoutineRunId=id;run.status='active';run.updatedAt=now();save();renderRoutines();openRoutineStep();}
function pauseRoutine(){const run=activeRun();if(!run)return;flushJournal();stopDictation();if(PB.routineBinding?.runId===run.id&&(PB.running||PB.pending))pauseMeditation('Routine paused');run.status='paused';run.updatedAt=now();save();renderRoutines();toast('Routine paused. Resume from Today or Routines.');}
function endRoutine(){const run=activeRun();if(!run||!confirm('End this routine here? Completed and skipped steps stay in history; your journal and activity records remain.'))return;flushJournal();if(PB.routineBinding?.runId===run.id&&PB.running)pauseMeditation('Routine ended');run.status='ended';run.finishedAt=now();state.activeRoutineRunId=null;save();renderRoutines();}
function openRoutineStep(){
 const r=activeRun(),s=runStep(r);if(!r||!s)return;if(r.status==='paused'){r.status='active';save();}
 if(s.type==='intention'){showTab('settings');$('settingsIntention').focus({preventScroll:true});}
 else if(s.type==='journal'){changeJournalDate(r.date);showTab('journal');$('journal'+s.journalType[0].toUpperCase()+s.journalType.slice(1)).focus({preventScroll:true});}
 else if(s.type==='priorities'){setDailyDate(addDaysISO(r.date,s.dayOffset));showTab('today');}
 else if(s.type==='reading'){
  wisdomCategory=s.category;const rec=r.currentReadingKey?readingByKey(r.currentReadingKey):nextUnread(s.category)||readingByKey(readingKey(s.category,0));
  if(rec){r.currentReadingKey=rec.key;wisdomReviewKey=rec.key;save();}showTab('wisdom');
 }
 else if(s.type==='meditation'){
  showTab('meditation');
  if(PB.running||PB.pending||PB.elapsed>0&&!PB.finished){if(PB.routineBinding?.runId!==r.id||PB.routineBinding?.stepId!==s.id)toast('There is already an unfinished session. End & save or reset it before this step.');}
  else {const track=allTracks().find(t=>t.id===s.trackId);if(track){selectModule(track.id);setTimer(s.minutes);PB.routineBinding={runId:r.id,stepId:s.id};checkpointSession();}else toast('This sound is unavailable. Edit the routine or select another sound.');}
 }
 else showTab('routines');
 renderRoutineGuide();$('routineGuide').scrollIntoView({block:'start',behavior:'auto'});
}
function completeRoutineStep(){
 const r=activeRun(),s=runStep(r);if(!r||!s||r.status!=='active')return;flushJournal();stopDictation();
 const existing=r.results[s.id];let detail='',ref={};
 if(existing?.status==='done')return advanceRoutine();
 if(s.type==='intention'){if(!state.profile.guidingIntention.trim())return toast('Add a guiding intention in Settings, or Skip this step.');detail='Intention revisited';}
 if(s.type==='journal'){if(!state.journal[r.date]?.[s.journalType]?.trim())return toast('Write a few words in this entry, or Skip.');detail=`${s.journalType} · ${r.date}`;ref={date:r.date,entryType:s.journalType};}
 if(s.type==='priorities'){const d=addDaysISO(r.date,s.dayOffset),filled=list(state.priorities[d]).filter(p=>p.text.trim()).length;if(!filled)return toast('Enter at least one priority, or Skip.');detail=`${filled} priorities planned · ${d}`;ref={date:d};}
 if(s.type==='reading'){const key=r.stepReadingKeys?.[s.id]||(r.currentReadingKey&&isReadingRead(r.currentReadingKey)?r.currentReadingKey:null);if(!key)return toast('Mark a lesson as read first, or Skip.');detail=readingByKey(key)?.item.title||'Reading reviewed';ref={key};}
 if(s.type==='meditation'){
  const sessions=state.meditations.filter(m=>m.routineRunId===r.id&&m.routineStepId===s.id);
  if(!sessions.length)return toast('Play and save a session (at least 5 seconds), or Skip this step.');
  if(PB.running&&PB.routineBinding?.runId===r.id)return toast('End & save the running session before continuing.');
  const mins=sessions.reduce((n,m)=>n+m.minutes,0);detail=`${prettyNum(mins)} / ${s.minutes} planned minutes`;ref={sessionIds:sessions.map(m=>m.id)};
 }
 r.results[s.id]={status:'done',completedAt:now(),detail,ref};advanceRoutine();
}
function skipRoutineStep(){const r=activeRun(),s=runStep(r);if(!r||!s)return;if(PB.routineBinding?.runId===r.id&&PB.routineBinding?.stepId===s.id&&(PB.running||PB.pending||PB.elapsed>0&&!PB.finished))return toast('End & save or reset this meditation before skipping the step.');if(r.results[s.id]?.status==='done')return advanceRoutine();r.results[s.id]={status:'skipped',completedAt:now()};advanceRoutine();}
function advanceRoutine(){const r=activeRun();if(!r)return;r.currentReadingKey=null;r.updatedAt=now();if(r.cursor>=r.steps.length-1){r.status='complete';r.finishedAt=now();state.activeRoutineRunId=null;save();renderRoutines();showTab('routines');toast('Routine finished. Practised and skipped steps stay separate.');return;}r.cursor++;save();renderRoutines();openRoutineStep();}
function routineBack(){const r=activeRun();if(!r||r.cursor<=0)return;flushJournal();r.cursor--;r.currentReadingKey=null;save();openRoutineStep();}
startClock=function(){base.startClock();const r=activeRun(),s=runStep(r);if(r&&s?.type==='meditation'&&PB.routineBinding?.runId===r.id&&PB.routineBinding.stepId===s.id)checkpointSession();};
recordSession=function(completed){const binding=PB.routineBinding?{...PB.routineBinding}:null,id=PB.sessionId;const ret=base.recordSession(completed);if(binding&&id){const m=state.meditations.find(m=>m.id===id);if(m){m.routineRunId=binding.runId;m.routineStepId=binding.stepId;save();}}renderRoutineGuide();return ret;};
markReading=function(cat,idx){const r=activeRun(),s=runStep(r);const ret=base.markReading(cat,idx);if(r&&s?.type==='reading'&&r.status==='active'){r.stepReadingKeys=object(r.stepReadingKeys)?r.stepReadingKeys:{};r.stepReadingKeys[s.id]=readingKey(cat,idx);save();renderRoutineGuide();}return ret;};

/* Data safety. Trash is explicit, recoverable and included in full backups. */
function removeWithUndo(kind,item){const entry={id:'removed-'+uid(),kind,removedAt:now(),...item};state.recentlyRemoved.push(entry);latestUndoId=entry.id;save();renderUndoNotice();renderRecentlyRemoved();renderBackupSummary();return entry;}
removeLog=function(id){const log=state.logs.find(l=>l.id===id);if(!log)return;removeWithUndo('log',{item:clone(log),label:'Activity entry · '+log.date});state.logs=state.logs.filter(l=>l.id!==id);save();renderToday();renderProgress();};
deleteCurrentPhoto=async function(){
 const p=currentPhoto();if(!p||p.kind!=='photo')return;
 if(!confirm('Remove this photo from the gallery? It will stay in Recently removed, where it can be restored. Your original file is not affected.'))return;
 removeWithUndo('photo',{photoId:p.id,label:p.title,wasFavourite:state.favoritePhotos.includes(p.id),pages:Object.keys(state.photoPreferences).filter(k=>state.photoPreferences[k]===p.id)});
 if(!state.trashedPhotoIds.includes(p.id))state.trashedPhotoIds.push(p.id);
 state.favoritePhotos=state.favoritePhotos.filter(id=>id!==p.id);for(const k of Object.keys(state.photoPreferences))if(state.photoPreferences[k]===p.id)delete state.photoPreferences[k];
 save();closeDialog('photoModal');renderGallery();renderJournalPhoto();updateHero();renderRecentlyRemoved();toast('Moved to Recently removed. Undo is available.');
};
function renderUndoNotice(){const r=state.recentlyRemoved.find(x=>x.id===latestUndoId);const box=$('undoNotice');box.classList.toggle('hidden',!r);if(r)box.innerHTML=`<span>${esc(r.label||'Item')} removed.</span> <button class="btn secondary small" onclick="restoreRemoved('${r.id}')">Undo</button> <button class="btn ghost small" onclick="dismissUndoNotice()">Dismiss</button>`;}
function dismissUndoNotice(){latestUndoId=null;renderUndoNotice();}
async function restoreRemoved(id){
 const entry=state.recentlyRemoved.find(x=>x.id===id);if(!entry)return;
 if(entry.kind==='photo'){
  if(!personalMedia.some(p=>p.id===entry.photoId))return toast('This photo file is not available. Restore a full backup that includes it.');
  state.trashedPhotoIds=state.trashedPhotoIds.filter(x=>x!==entry.photoId);
  if(entry.wasFavourite&&!state.favoritePhotos.includes(entry.photoId))state.favoritePhotos.push(entry.photoId);
  for(const page of list(entry.pages))if(!state.photoPreferences[page])state.photoPreferences[page]=entry.photoId;
 }else if(entry.item&&!state.logs.some(l=>l.id===entry.item.id))state.logs.push(entry.item);
 state.recentlyRemoved=state.recentlyRemoved.filter(x=>x.id!==id);save();renderUndoNotice();renderRecentlyRemoved();renderGallery();renderJournalPhoto();renderToday();renderProgress();updateHero();toast('Restored.');
}
async function permanentlyRemove(id){const entry=state.recentlyRemoved.find(x=>x.id===id);if(!entry||!confirm('Permanently delete this removed item from the app? Restore from a saved backup would be the only recovery.'))return;
 try{if(entry.kind==='photo'){await dbDelete(entry.photoId);personalMedia=personalMedia.filter(p=>p.id!==entry.photoId);if(mediaURLs.has(entry.photoId))URL.revokeObjectURL(mediaURLs.get(entry.photoId));mediaURLs.delete(entry.photoId);state.trashedPhotoIds=state.trashedPhotoIds.filter(x=>x!==entry.photoId);delete state.photoDetails[entry.photoId];}
 state.recentlyRemoved=state.recentlyRemoved.filter(x=>x.id!==id);save();renderUndoNotice();renderRecentlyRemoved();renderBackupSummary();toast('Permanently deleted. Journal text and source titles remain.');}
 catch{toast('Could not delete the file. It remains in Recently removed.');}
}
function renderRecentlyRemoved(){if(!$('recentlyRemoved')||!state)return;const rows=state.recentlyRemoved.slice().reverse();$('recentlyRemoved').innerHTML=rows.length?`<p class="tiny">Removed photos still use local space and are included in full backups until you permanently delete them.</p>`+rows.map(r=>`<div class="clip-row"><div><strong>${esc(r.label||r.kind)}</strong><small>${esc(r.removedAt?.slice(0,10)||'')}</small></div><div class="button-row"><button class="btn secondary small" onclick="restoreRemoved('${r.id}')">Restore</button><button class="btn danger small" onclick="permanentlyRemove('${r.id}')">Delete permanently</button></div></div>`).join(''):'<p class="muted">Nothing waiting in Recently removed.</p>';}
function safetyChanges(){const s=state.safety,f=s.lastFull||null;return {records:Math.max(0,s.revision-finiteValue(f?.revision)),media:Math.max(0,s.mediaRevision-finiteValue(f?.mediaRevision))};}
function backupDate(v){return v?new Date(v).toLocaleString():'Not recorded';}
function renderSafetyPanel(){
 if(!$('safetySummary')||!state)return;const s=state.safety,c=safetyChanges();
 $('safetySummary').innerHTML=`<h3>Your data, safely in your hands</h3><dl class="safety-list"><div><dt>Last full-backup download initiated</dt><dd>${esc(backupDate(s.lastFull?.at))}</dd></div><div><dt>Saved changes since that full backup</dt><dd>${c.records} record revisions · ${c.media} media changes</dd></div><div><dt>Last backup you confirmed saving</dt><dd>${esc(s.confirmed?.kind||'None')} · ${esc(backupDate(s.confirmed?.at))}</dd></div></dl><p class="tiny">Revisions count changed saved states, not individual tasks or keystrokes. A records-only backup does not reset the full-backup reminder. These backups are private and unencrypted.</p>`;
 renderRecentlyRemoved();
}
function renderBackupReminder(){if(!$('backupReminder')||!state)return;const s=state.safety,c=safetyChanges(),hasRecords=state.logs.length||Object.values(state.journal).some(hasJournalContent)||personalMedia.length||state.routineRuns.length;
 const age=s.lastFull?.at?(Date.now()-Date.parse(s.lastFull.at))/86400000:Infinity;
 const changed=!s.lastFull||c.records>0||c.media>0;
 const due=hasRecords&&changed&&(age>=7||c.records>=10||c.media>=3)&&!(s.snoozeUntil&&s.snoozeUntil>now());
 $('backupReminder').classList.toggle('hidden',!due);if(due)$('backupReminder').innerHTML='<strong>A little protection for your practice.</strong><p class="tiny">You have writing, activity or media not confirmed in a recent full backup.</p><div class="button-row"><button class="btn secondary small" onclick="openDataSettings()">Back up my data</button><button class="btn ghost small" onclick="snoozeBackupReminder()">Remind me tomorrow</button></div>';
}
function snoozeBackupReminder(){state.safety.snoozeUntil=new Date(Date.now()+86400000).toISOString();save();renderBackupReminder();}
function markBackupStarted(kind,revision,mediaRevision,stamp){const s=state.safety,info={at:stamp,kind,revision,mediaRevision};s.latestExport=info;if(kind==='Full backup')s.lastFull=info;else s.lastRecords=info;state.preferences.lastBackupPreparedAt=stamp;state.preferences.lastBackupKind=kind;save();renderBackupSummary();renderBackupReminder();}
noteBackupPrepared=function(kind){markBackupStarted(kind,state.safety.revision,state.safety.mediaRevision,now());};
exportJSON=async function(){
 flushJournal();if($('weeklyReviewPanel')&&!$('weeklyReviewPanel').classList.contains('hidden'))saveReviewDraft();
 $('backupStatus').textContent='Preparing a full private backup…';
 try{
  const items=await dbAll(),total=items.reduce((n,m)=>n+m.blob.size,0);
  if(total>180*1024*1024)throw new Error('Media exceeds 180 MB. Save originals separately and use a records-only backup.');
  const snapshot=clone(state),stamp=now(),revision=snapshot.safety.revision,mediaRevision=snapshot.safety.mediaRevision,media=[];
  snapshot.safety.lastFull={at:stamp,kind:'Full backup',revision,mediaRevision};snapshot.safety.latestExport=snapshot.safety.lastFull;
  for(const item of items){const {blob,...meta}=item;media.push({...meta,data:await blobDataURL(blob)});}
  download('infinite-self-full-backup-'+isoDate()+'.json','application/json',JSON.stringify({format:'infinite-self-backup',version:3,appVersion:APP_VERSION,exportedAt:stamp,state:snapshot,media},null,2));
  markBackupStarted('Full backup',revision,mediaRevision,stamp);
  $('backupStatus').textContent=`Full backup download initiated: records, routines, weekly reviews, photo details and ${media.length} personal media files (including removed photos). Confirm that you saved it somewhere safe.`;
 }catch(e){$('backupStatus').textContent='Full backup not prepared: '+e.message;}
};
exportRecords=function(){flushJournal();const snapshot=clone(state),stamp=now();download('infinite-self-records-'+isoDate()+'.json','application/json',JSON.stringify(snapshot,null,2));markBackupStarted('Records-only backup',snapshot.safety.revision,snapshot.safety.mediaRevision,stamp);$('backupStatus').textContent='Records-only backup download initiated. Photo captions and links are included, but uploaded photo/audio files are not. Use Full backup to preserve those files.';};
function confirmBackupSaved(){const s=state.safety;if(!s.latestExport)return toast('Create a backup download first.');s.confirmed={...s.latestExport,confirmedAt:now()};save();renderSafetyPanel();toast('Noted: you confirmed saving that backup file.');}
async function refreshSafetyStorage(){const target=$('storageEstimate');try{if(!navigator.storage?.estimate){target.textContent='This browser does not provide a storage estimate.';return;}const estimate=await navigator.storage.estimate(),persisted=await navigator.storage.persisted?.();storageInfo=estimate;const mb=v=>(v/1024/1024).toFixed(1)+' MB';target.textContent=`This website’s estimated use: ${mb(estimate.usage||0)} / ${mb(estimate.quota||0)} allowed. Storage retention: ${persisted?'granted':'not granted or unavailable'}. App caches and any other apps on this origin can be included.`;}catch{target.textContent='Storage usage could not be estimated. Keep regular full backups.';}}
renderBackupSummary=function(){base.renderBackupSummary();renderSafetyPanel();renderBackupReminder();};
readableJournal=function(){const text=base.readableJournal(),photoRows=[];for(const [date,j]of Object.entries(state.journal)){if(j.photoOfDayId){const p=allPhotos().find(p=>p.id===j.photoOfDayId);photoRows.push(date+' — '+(p?.title||'Unavailable photo')+(p?.caption?'\n'+p.caption:''));}}return text+(photoRows.length?'\n\nPhoto-of-the-day references (images are in your full backup)\n'+photoRows.join('\n\n'):'');};
exportCSV=function(){base.exportCSV();};
restoreBackup=async function(file){await base.restoreBackup(file);lastFingerprint=recordFingerprint();renderRoutines();renderWeeklyReview();renderJournalPhoto();renderSafetyPanel();renderBackupReminder();};

/* Integrate without resetting established data keys, audio elements or UI fields. */
renderAll=function(){base.renderAll();renderRoutines();renderWeeklyFocus();renderBackupReminder();if(progressMode==='weekly')renderWeeklyReview();};
renderDailyView=function(){base.renderDailyView();renderWeeklyFocus();renderRoutineToday();renderBackupReminder();};
renderProgress=function(){base.renderProgress();if(progressMode==='weekly')renderWeeklyReview();};
renderSettings=function(){base.renderSettings();renderSafetyPanel();};
showTab=function(name,btn){const r=base.showTab(name,btn);if(name==='routines')renderRoutines();if(name==='journal')renderJournalPhoto();if(name==='progress')setProgressMode(progressMode);if(name==='settings')refreshSafetyStorage();renderRoutineGuide();return r;};
renderMeditation=function(){base.renderMeditation();renderRoutineGuide();};
// A YouTube video cannot play hidden; SoundCloud/local audio keep their dock behaviour.
shelveMediaDock=function(){if(!PB.dockVisible)return;if(currentTrack().kind==='youtube'&&(PB.running||PB.pending))pauseMeditation('Paused when video player is hidden');PB.shelved=true;updateTimerUI();checkpointSession();toast(currentTrack().kind==='youtube'?'Video paused. Restore the player and tap Play to continue.':'Player tucked away. Audio can continue inside the app.');};
const originalSelectModule=selectModule;
selectModule=function(id){const before=PB.trackId;const ret=originalSelectModule(id);if(!PB.sessionId&&!PB.running&&!PB.pending)PB.routineBinding=null;return ret;};
resetMeditation=function(){const ret=base.resetMeditation();if(!PB.sessionId&&!PB.running&&!PB.pending)PB.routineBinding=null;return ret;};
const originalStartMeditation=startMeditation;
startMeditation=async function(){const run=activeRun(),step=runStep(run);if(PB.routineBinding&&(!run||step?.id!==PB.routineBinding.stepId||run.id!==PB.routineBinding.runId||run.status!=='active'))PB.routineBinding=null;if(currentTrack().kind==='youtube'&&PB.shelved){PB.shelved=false;updateTimerUI();}return originalStartMeditation();};
const originalUpdateTimerUI=updateTimerUI;
updateTimerUI=function(){if(PB.running&&currentTrack().kind==='youtube'&&PB.shelved)PB.shelved=false;return originalUpdateTimerUI();};
// Persist routine-independent fields normally. On return from device background,
// recompute date labels without reinterpreting a backdated Daily View as today.
handleVisibility=function(){base.handleVisibility();if(!document.hidden){updateWritingViewport();if(currentTab==='today')renderDailyControls();renderBackupReminder();}};
const newFAQS=[
 ['How do I swipe or rename a photo?', 'Open Gallery and tap a photo. Swipe left/right over the image, use Previous/Next, or use the keyboard arrows. The viewer follows the gallery filter and search you opened it from. Edit details changes the app title, caption and tags; it does not rename the original on your device. Save a copy suggests the new title as the download filename.'],
 ['How do I reflect on a photograph?', 'Open a photo and choose Reflect on this image. Pick the journal date and Morning, Freeform or Evening, then type or dictate. Save appends your response and a link to the photograph without replacing existing writing. The checkbox also makes it that date’s photo of the day. You can attach a photo without writing using Photo of the day.'],
 ['What is the weekly review?', 'Progress → Weekly review gathers the week’s filled My 3 priorities, journal days, saved meditation minutes, read lessons, commitment target days, dated goal milestones and routine activity. Weeks run Monday–Sunday. The current week is labelled as incomplete. Current commitment settings are used; old targets are not reconstructed. Write or dictate your reflection, save it, and optionally send a focus to the following week.'],
 ['How do I build and use a routine?', 'Open Routines and Edit a starter routine or Build a routine. Rename, reorder, enable or remove steps. Choose meditation duration/audio, reading category, journal type, priorities for today or tomorrow, or a custom practice. Start from Today or Routines. Open step takes you to the existing app section; Done & next records routine progress only. Skip is always available. The app never creates an activity merely because you opened a step.'],
 ['Will routines duplicate my meditation or journal entries?', 'No. Journal steps use the normal journal date and fields; meditation uses the existing session recorder and its selected commitment credit. Done & next does not add a second activity. A meditation step needs a saved session of at least five seconds; an early-ended session shows actual minutes against planned minutes. A completed routine can include skipped steps, which remain visibly separate.'],
 ['Can I pause, resume or change a routine?', 'Pause retains the step and records. Resume from Today or Routines after a reload. Only one run is active/paused at a time; End run in routine history frees you to start another. Changing a template affects the next run, never an existing snapshot. A run starts on the real current date, independently of Simulate date. If resumed another day, its journal/priority steps keep the starting date; live meditation is dated when it is saved.'],
 ['What does the backup reminder mean?', 'Settings shows the last full-backup download initiated, saved record revisions and media changes since then, and the last backup you confirmed saving. Creating a download does not prove it was saved. Full backups include uploads, captions, routines, reviews and Recently removed. Records-only backups omit media and do not reset the full-backup reminder. Reminders are in-app only, not push notifications.'],
 ['Can I undo a deletion?', 'Removing an uploaded photo or activity creates a Recently removed entry. Use Undo immediately, or Settings → Backup & export → Recently removed. Removed photos retain their media files until explicitly deleted permanently, so full backups can restore them. Detaching a photo of the day does not delete the photograph or journal writing.']
];
const priorWhatsNew=FAQS.find(f=>f[0]==='What is new in v3.4?');
if(priorWhatsNew){priorWhatsNew[0]='What was new in v3.3?';priorWhatsNew[1]='The meditation dock added swipe-to-edge controls. In v3.4 SoundCloud and local audio retain this behaviour; YouTube pauses when tucked away.';}
FAQS.unshift(['What is new in v3.4?', 'Swipe and rename gallery photos, write photo-linked journal reflections, review each week, build morning/evening/custom routines, and protect records with backup status plus recoverable photo/activity removal.']);
FAQS.push(...newFAQS);
for(const faq of FAQS){if(/tuck|swipe.*player/i.test(faq[0]))faq[1]='Swipe the media-dock grip right or tap Hide. SoundCloud and local audio can continue within the app. YouTube pauses while hidden and must be restored before playing. Device background audio and embedded services remain subject to browser/platform limitations.';}

Object.assign(window,{
 movePhoto,togglePhotoEditor,savePhotoDetails,togglePhotoDayPicker,attachPhotoToDay,chooseJournalPhoto,removePhotoOfDay,reflectOnPhoto,reflectOnJournalPhoto,
 setProgressMode,openWeeklyReview,selectReviewWeek,stepReviewWeek,saveReviewDraft,finishWeeklyReview,applyWeeklyFocus,exportWeeklyReview,
 editRoutine,setRoutineStep,addRoutineStep,moveRoutineStep,removeRoutineStep,closeRoutineEditor,saveRoutineTemplate,deleteRoutineTemplate,
 startRoutine,resumeRoutine,pauseRoutine,endRoutine,openRoutineStep,completeRoutineStep,skipRoutineStep,routineBack,
 dismissUndoNotice,restoreRemoved,permanentlyRemove,snoozeBackupReminder,confirmBackupSaved,refreshSafetyStorage
});
init=function(){
 base.init();initPhotoGestures();renderRoutines();renderWeeklyReview();renderSafetyPanel();refreshSafetyStorage();
 $('composePhotoOfDay').addEventListener('change',saveComposeDraft);
 $('routineName').addEventListener('input',()=>{});
 document.addEventListener('click',e=>{if(e.target?.matches('[data-end-active-routine]'))endRoutine();});
};
// Useful pure data helpers for the release regression suite; no network or test mode.
window.InfiniteSelfV34={weeklyEvidence,filteredPhotos,activeRun,runStep,normaliseStep,version:APP_VERSION};
})();
init();
