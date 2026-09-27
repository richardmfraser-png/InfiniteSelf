/* Infinite Self v3.1 | vanilla JavaScript | legacy-compatible records */

const KEY='spectacularSpiritJournalV1';
const heroMap={today:{img:'feature-v3.jpg',title:'Rough. Ragged. Calm. Serene. Full of light.',text:'A structured but compassionate app for spiritual growth, journaling, mental and physical wellness, and purposeful living.',quote:'The surface can be turbulent while the horizon remains calm.'},journal:{img:'goldsea-v3.jpg',title:'Infinite Self',text:'Journaling sits at the centre of this build: intention, reflection, honest writing, and a history you can learn from.',quote:'Write close to the truth. Read back with mercy.'},commitments:{img:'wavewide-v3.jpg',title:'Commit to the practices that shape you',text:'Define mental and physical commitments, then break them into sub-branches when the detail matters.',quote:'Consistency is architecture. One action at a time.'},goals:{img:'blossoms-v3.jpg',title:'Goals with meaning, not pressure',text:'Describe the destination, why it matters, and the milestones that make it real.',quote:'Purpose becomes visible when it is named.'},meditation:{img:'candles-v3.jpg',title:'Stillness has its own strength',text:'Three simple audio experiences: chant, ocean breath, and soft bell. Press play, breathe, and return.',quote:'The return is the practice.'},wisdom:{img:'forestlight-v3.jpg',title:'Selected readings & videos',text:'A pluralistic library organized around spirit, motivation, leadership, wellness, reflection, and character.',quote:'Read widely. Keep what serves.'},progress:{img:'horizon-v3.jpg',title:'See the pattern, then adjust',text:'Track consistency, balance, and the small signals that show where your practice is helping or slipping.',quote:'Awareness → adjustment → consistency.'},help:{img:'feature-v3.jpg',title:'Help when you need it',text:'Quick start instructions, common questions, setup guidance and deployment notes live here.',quote:'Structure should make the practice easier, not heavier.'}};
const wisdomCategories=['Spiritual','Motivational','Leadership','Wellness','Reflection / Philosophy','Purpose / Character'];
const wisdomLibrary={
 'Spiritual':[
  {title:'Returning to the Present',source:'Buddhist practice • original summary',body:'Practice begins whenever attention returns. The mind wanders, emotion rises, life becomes noisy — and then a quieter choice appears: notice, release the argument, and come back. Repeated gently, that return becomes a training in freedom rather than a performance of perfection.',prompt:'Where can I return to the present today?',videos:[['Buddhist basics – a beginner-friendly overview','https://www.youtube.com/results?search_query=beginner+buddhism+overview'],['Guided chant / Nam-myoho-renge-kyo','https://www.youtube.com/results?search_query=Nam+myoho+renge+kyo+chant'],['Contemplative prayer / Christian stillness','https://www.youtube.com/results?search_query=contemplative+prayer+guided']]},
  {title:'A Good Life Has an Inner Life',source:'General spirituality • original summary',body:'Whatever language a person uses — God, spirit, conscience, awareness, the sacred, the inner voice — the good life usually includes some regular way of becoming still enough to hear it. Spiritual practice is less about display and more about alignment.',prompt:'What practice helps me hear myself most clearly?',videos:[['Spiritual discipline and daily life','https://www.youtube.com/results?search_query=daily+spiritual+discipline'],['The practice of gratitude','https://www.youtube.com/results?search_query=gratitude+spiritual+practice']]},
  {title:'Grace and Effort',source:'Christian / non-denominational tone • original summary',body:'Healthy spiritual effort is not frantic striving to earn worth. It is an honest response to grace: because life is precious, because we are called to grow, we participate in the work of becoming more loving, more truthful, and more steady.',prompt:'What would faithful effort look like today?',videos:[['Daily devotion / reflective practice','https://www.youtube.com/results?search_query=daily+devotion+reflection'],['The Sermon on the Mount explained','https://www.youtube.com/results?search_query=sermon+on+the+mount+explained']]},
  {title:'Silence as Teacher',source:'Interspiritual reflection • original summary',body:'Silence is not empty. In the right measure it becomes clarifying. What feels unsettled first often becomes visible. What feels noisy can soften. Silence teaches by revealing what we are carrying before we have words for it.',prompt:'What do I discover when I stop filling the space?',videos:[['Short guided silence practice','https://www.youtube.com/results?search_query=guided+silence+meditation']]}],
 'Motivational':[
  {title:'Action Creates Confidence',source:'Motivation • original summary',body:'Confidence is rarely a precondition for action. More often it is a result of it. Momentum gathers when we begin, not when we wait to feel fully ready. Small actions performed consistently can calm anxiety far more effectively than large intentions left unrealized.',prompt:'What small action would begin the day well?',videos:[['Angela Duckworth on grit (TED)','https://www.ted.com/talks/angela_lee_duckworth_grit_the_power_of_passion_and_perseverance'],['Mel Robbins on starting before you feel like it','https://www.youtube.com/results?search_query=Mel+Robbins+motivation'],['Atomic habits interview / behaviour change','https://www.youtube.com/results?search_query=James+Clear+habits+interview']]},
  {title:'Discipline Is a Form of Self-Respect',source:'Motivation • original summary',body:'Discipline is often described harshly, but at its healthiest it is an expression of care. It says my future matters enough for me to act today, even when mood and comfort pull elsewhere. Done rightly, it is firm without being punitive.',prompt:'Where would self-respect look like discipline today?',videos:[['Jocko on discipline','https://www.youtube.com/results?search_query=Jocko+discipline'],['Habit building for consistency','https://www.youtube.com/results?search_query=building+consistency+habits']]},
  {title:'Optimism Needs Structure',source:'Motivation • original summary',body:'Hope is strongest when paired with a plan. Motivation that never becomes structure fades quickly; structure that contains no inspiration becomes sterile. The work is to marry the two: spirit for lift, system for follow-through.',prompt:'What structure would support the hope I feel?',videos:[['How to turn goals into systems','https://www.youtube.com/results?search_query=goals+into+systems']]}],
 'Leadership':[
  {title:'Start With Why',source:'Leadership • inspired by Simon Sinek',body:'People respond more deeply when they understand the why beneath the what. Purpose creates meaning, and meaning makes effort more durable. Whether leading a company, a family, or oneself, clarity of purpose steadies action and invites trust.',prompt:'What is the deeper why behind what I am building?',videos:[['Simon Sinek – How great leaders inspire action','https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action'],['Simon Sinek – Leaders eat last','https://www.youtube.com/results?search_query=Simon+Sinek+leaders+eat+last'],['Simon Sinek – trust and psychological safety','https://www.youtube.com/results?search_query=Simon+Sinek+trust+leadership']]},
  {title:'Trust Is Built in Small Moments',source:'Leadership • original summary',body:'Leadership is rarely proved in speeches. It is proved in the repeated experience people have around you: whether they feel seen, whether commitments are honoured, whether truth is spoken clearly, and whether calm can be held when things are difficult.',prompt:'What small moment of trust am I shaping today?',videos:[['Brené Brown on vulnerability and leadership','https://www.ted.com/talks/brene_brown_the_power_of_vulnerability'],['Leadership communication basics','https://www.youtube.com/results?search_query=leadership+communication+trust']]},
  {title:'The Tone Starts at the Top',source:'Leadership • original summary',body:'A leader’s habits and emotional range become contagious. When the leader is reactive, the system tightens. When the leader is calm, candid, and consistent, the system usually becomes more workable. Leadership therefore begins with self-leadership.',prompt:'What tone am I setting, intentionally or otherwise?',videos:[['Leadership presence and self-management','https://www.youtube.com/results?search_query=leadership+presence+self+management']]}],
 'Wellness':[
  {title:'Wellness Is a System, Not a Mood',source:'Wellness • original summary',body:'We often treat wellness as something we either feel or do not feel. In practice it is built from systems: sleep, movement, hydration, nourishment, reflection, recovery, and relationships. A good system can support us even when mood is flat.',prompt:'Which part of my wellness system needs attention now?',videos:[['Dr. Rangan Chatterjee on everyday health','https://www.youtube.com/results?search_query=Rangan+Chatterjee+everyday+health'],['Huberman basics: sleep, light, and rhythm','https://www.youtube.com/results?search_query=Huberman+sleep+light+basics'],['Simple breathwork for calm','https://www.youtube.com/results?search_query=breathwork+calm+beginner']]},
  {title:'Recovery Is Productive',source:'Wellness • original summary',body:'Rest is not the enemy of serious living. Thoughtful recovery makes effort sustainable. The body and mind adapt between sessions of stress, not only during them. When rest becomes deliberate, performance usually becomes wiser.',prompt:'How can I recover in a way that supports tomorrow?',videos:[['Sleep and recovery fundamentals','https://www.youtube.com/results?search_query=sleep+recovery+fundamentals'],['Stretching and mobility basics','https://www.youtube.com/results?search_query=mobility+basics+beginner']]},
  {title:'Move Because You Live',source:'Wellness • original summary',body:'Movement is not only exercise; it is also a way of inhabiting life more fully. Strength, walking, sport, stretching, breathing, mobility — each can be a means of returning to the body with respect rather than judgment.',prompt:'What form of movement would feel life-giving today?',videos:[['Walking and health science','https://www.youtube.com/results?search_query=walking+health+science']]}],
 'Reflection / Philosophy':[
  {title:'What Is Yours to Govern',source:'Stoicism • original summary',body:'Some parts of life answer to us directly: attention, preparation, conduct, and the judgments we allow to settle into character. Other parts do not: the weather, other people, reputation, chance. Peace often grows where this distinction is remembered.',prompt:'What am I trying to control that is not mine?',videos:[['Stoicism explained simply','https://www.youtube.com/results?search_query=stoicism+explained+simply'],['Marcus Aurelius for modern life','https://www.youtube.com/results?search_query=Marcus+Aurelius+modern+life']]},
  {title:'The Lesson of Water',source:'Taoism • original summary',body:'Water shows a kind of power that does not always look forceful. It adapts, persists, yields, nourishes, and over time changes even stone. Softness and patience are not weakness; they are sometimes the more intelligent form of strength.',prompt:'Where would flexibility be wiser than force?',videos:[['Tao Te Ching explained','https://www.youtube.com/results?search_query=Tao+Te+Ching+explained'],['The wisdom of water','https://www.youtube.com/results?search_query=wisdom+of+water+taoism']]},
  {title:'Test Ideas in Life',source:'Pragmatism • original summary',body:'An idea is not only to be admired. It is to be tested in experience. If a belief improves conduct, clarifies judgment, or leads to better consequences, it deserves attention. Reflection therefore belongs beside experiment.',prompt:'What belief or practice can I test this week?',videos:[['Pragmatism in everyday life','https://www.youtube.com/results?search_query=pragmatism+everyday+life']]}],
 'Purpose / Character':[
  {title:'Integrity Has a Quiet Voice',source:'Character • original summary',body:'Character is usually expressed in unspectacular moments: whether we keep the promise, tell the truth, act with restraint, apologize cleanly, or continue when no one is watching. Integrity is less a performance than a pattern.',prompt:'What choice today would strengthen integrity?',videos:[['Character and integrity talk','https://www.youtube.com/results?search_query=character+integrity+talk'],['The courage to do what matters','https://www.youtube.com/results?search_query=courage+do+what+matters']]},
  {title:'Service Enlarges the Self',source:'Purpose • original summary',body:'A life becomes larger when it is not only about itself. Service does not always mean grand sacrifice; often it means attention, generosity, care, and competence offered where they are needed. Service clarifies value by directing it outward.',prompt:'Who or what can I serve well today?',videos:[['Service and meaningful living','https://www.youtube.com/results?search_query=meaningful+living+service']]},
  {title:'Choose the Person, Not Only the Outcome',source:'Character • original summary',body:'Outcomes matter, but the kind of person one becomes while pursuing them matters too. Ambition without character usually corrodes. Character without action can remain merely aspirational. The work is to grow both together.',prompt:'What kind of person am I practicing being?',videos:[['Character development and excellence','https://www.youtube.com/results?search_query=character+development+excellence']]}]
};
const modules=[
 {id:'chant',title:'Nam-myoho-renge-kyo Chant',icon:'◉',desc:'Streams the supplied reference recording when online, with an offline device-voice fallback.'},
 {id:'ocean',title:'Ocean Breath',icon:'≈',desc:'A generated wash of filtered sound that rises and falls like breathing surf.'},
 {id:'bells',title:'Soft Bell',icon:'○',desc:'A quiet harmonic drone with a gentle bell at intervals.'}
];
const defaultCommitments=[
 {name:'Move',category:'physical',metric:'minutes',target:30,frequency:7,note:'Move with intention.',branches:[]},
 {name:'Strength',category:'physical',metric:'minutes',target:30,frequency:4,note:'Build strength and resilience.',branches:[]},
 {name:'Stillness',category:'mental',metric:'minutes',target:10,frequency:7,note:'Meditation, chanting or quiet reflection.',branches:[]},
 {name:'Read & Reflect',category:'mental',metric:'minutes',target:20,frequency:7,note:'Read, journal or study.',branches:[]}
];
let state=null, currentTab='today', editId=null, goalEditId=null, branchDrafts=[], milestoneDrafts=[], audioCtx=null,audioNodes=[],speechActive=false,bellInterval=null, selectedModule='chant', timerMinutes=10, timerRemaining=600, timerInterval=null, timerRunning=false, wisdomCategory='Spiritual';

const SEED_PHOTOS = [{"id": "seed-feature", "title": "Light through the waves", "category": "Ocean", "alt": "Sunlight, a calm horizon and a close breaking wave.", "src": "feature-v3.jpg", "kind": "seed"}, {"id": "seed-stones", "title": "Balance at the shore", "category": "Stillness", "alt": "Balanced stones beside a quiet horizon.", "src": "stones-v3.jpg", "kind": "seed"}, {"id": "seed-blossoms", "title": "A little more colour", "category": "Growth", "alt": "Yellow blossoms against a blue sky.", "src": "blossoms-v3.jpg", "kind": "seed"}, {"id": "seed-candles", "title": "Quiet lights", "category": "Stillness", "alt": "A field of glowing candles.", "src": "candles-v3.jpg", "kind": "seed"}, {"id": "seed-forestlight", "title": "Light through the canopy", "category": "Growth", "alt": "Sunlight through leaves overhead.", "src": "forestlight-v3.jpg", "kind": "seed"}, {"id": "seed-horizon", "title": "An open horizon", "category": "Light", "alt": "A warm sunset over the water.", "src": "horizon-v3.jpg", "kind": "seed"}, {"id": "seed-wavewide", "title": "Water in motion", "category": "Ocean", "alt": "A wide view of sea spray and sunlight.", "src": "wavewide-v3.jpg", "kind": "seed"}, {"id": "seed-goldsea", "title": "Gold on water", "category": "Light", "alt": "Golden light resting on textured water.", "src": "goldsea-v3.jpg", "kind": "seed"}, {"id": "seed-evening", "title": "Between the branches", "category": "Light", "alt": "Branches framing a colourful horizon.", "src": "evening-v3.jpg", "kind": "seed"}, {"id": "seed-foamsun", "title": "Return to the horizon", "category": "Ocean", "alt": "A foamy wave below the sun.", "src": "foamsun-v3.jpg", "kind": "seed"}, {"id": "seed-sky", "title": "Layers of evening", "category": "Light", "alt": "A band of colour beneath textured clouds.", "src": "sky-v3.jpg", "kind": "seed"}, {"id": "seed-clouds", "title": "After the clouds", "category": "Stillness", "alt": "Clouds and calm water in soft light.", "src": "clouds-v3.jpg", "kind": "seed"}, {"id": "seed-bluewater", "title": "Blue meets gold", "category": "Ocean", "alt": "Blue water beneath a warm sky.", "src": "bluewater-v3.jpg", "kind": "seed"}, {"id": "seed-spray", "title": "Alive with movement", "category": "Ocean", "alt": "A close view of the breaking sea.", "src": "spray-v3.jpg", "kind": "seed"}];

function uid(){return Math.random().toString(36).slice(2,9)}
function isoDate(d=new Date()){let x=new Date(d.getTime()-d.getTimezoneOffset()*60000);return x.toISOString().slice(0,10)}
function mondayOf(d=new Date()){let x=new Date(d);x.setHours(0,0,0,0);let day=(x.getDay()+6)%7;x.setDate(x.getDate()-day);return x}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function toast(msg){let t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1900)}
function skipSetup(){state.profile.onboardingStatus='skipped'; save(); setup.classList.remove('open'); toast('Setup skipped — you can run it anytime from Help')}
function setupNext(n){for(let i=1;i<=4;i++){document.getElementById('setup'+i).classList.toggle('hidden',i!==n); document.getElementById('sd'+i).classList.toggle('active',i===n)}}
function renderSetupGoals(){let goals=[...state.goals].slice(0,3); while(goals.length<3)goals.push({title:'',targetDate:'',why:''}); obGoals.innerHTML=goals.map((g,i)=>`<div class="onboard-goal"><div class="field"><label>Goal ${i+1}</label><input id="obGoal${i}" value="${esc(g.title||'')}" placeholder="Optional goal"></div><div class="row"><div class="field"><label>Target date</label><input id="obGoalDate${i}" type="date" value="${esc(g.targetDate||'')}"></div><div class="field"><label>Why it matters</label><input id="obGoalWhy${i}" value="${esc(g.why||'')}" placeholder="Short reason"></div></div></div>`).join('')}
function renderIntention(){const v=(state.profile.guidingIntention||'').trim();$('intentionCard').innerHTML=`<div class="card intention-card"><div class="section-title"><div class="source">GUIDING INTENTION</div><button class="btn ghost small" onclick="editGuidingIntention()">${v?'Edit':'Add intention'}</button></div><p class="intention-text">${v?esc(v):'What would you like this practice to help you become or experience?'}</p></div>`}

function priorityData(){let d=isoDate(); state.priorities[d] ||= [{text:'',done:false},{text:'',done:false},{text:'',done:false}]; return state.priorities[d]}
function renderPriorities(){let p=priorityData(); priorities.innerHTML=p.map((x,i)=>`<div class="priority"><button class="check ${x.done?'done':''}" onclick="togglePriority(${i})">${x.done?'✓':''}</button><input type="text" value="${esc(x.text)}" placeholder="Priority ${i+1}" oninput="updatePriority(${i},this.value)"></div>`).join('')}
function updatePriority(i,v){priorityData()[i].text=v; save()}
function togglePriority(i){let p=priorityData(); p[i].done=!p[i].done; save(); renderPriorities(); renderTodayStats()}
function targetItem(c,b=null){return b||c}
function renderCommitments(){commitmentList.innerHTML=state.commitments.map(c=>`<div class="card"><div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start"><span class="pill ${c.category}">${c.category}</span><h3 style="margin-right:auto">${esc(c.name)}</h3><button class="btn ghost small" onclick="openCommitment('${c.id}')">Edit</button></div><div class="muted">${c.target} ${c.metric} • ${c.frequency}× / week${c.note?' • '+esc(c.note):''}</div>${(c.branches||[]).map(b=>`<div style="margin:10px 0 0 18px;padding:9px 0 0 12px;border-left:2px solid #cbe3ec"><b>${esc(b.name)}</b><div class="muted">${b.target} ${b.metric} • ${b.frequency}× / week</div></div>`).join('')}<div style="margin-top:12px"><div class="progress"><i style="width:${Math.round(commitRatio(c)*100)}%"></i></div><div class="muted" style="margin-top:5px">${Math.round(commitRatio(c)*100)}% of this week's target</div></div></div>`).join('')}
function openCommitment(id=null){editId=id; branchDrafts=[]; let c=state.commitments.find(x=>x.id===id); commitModalTitle.textContent=c?'Edit commitment':'New commitment'; deleteCommitBtn.classList.toggle('hidden',!c); cName.value=c?.name||''; cCategory.value=c?.category||'mental'; cMetric.value=c?.metric||'minutes'; cTarget.value=c?.target||20; cFreq.value=c?.frequency||7; cNote.value=c?.note||''; branchDrafts=(c?.branches||[]).map(x=>({...x})); renderBranchEditors(); commitModal.classList.add('open')}
function closeCommitment(){commitModal.classList.remove('open')}
function addBranchEditor(){branchDrafts.push({id:uid(),name:'',metric:'minutes',target:20,frequency:3}); renderBranchEditors()}
function renderBranchEditors(){branchEditors.innerHTML=branchDrafts.map((b,i)=>`<div class="card" style="padding:12px;margin-bottom:10px"><div class="field"><label>Branch name</label><input value="${esc(b.name)}" oninput="branchDrafts[${i}].name=this.value"></div><div class="row"><div class="field"><label>Measure</label><select onchange="branchDrafts[${i}].metric=this.value">${['minutes','sessions','pages','steps','items','check'].map(m=>`<option${b.metric===m?' selected':''}>${m}</option>`).join('')}</select></div><div class="field"><label>Target each time</label><input type="number" min="1" value="${b.target}" oninput="branchDrafts[${i}].target=+this.value"></div><div class="field"><label>Times/week</label><input type="number" min="1" max="7" value="${b.frequency}" oninput="branchDrafts[${i}].frequency=+this.value"></div></div><button class="btn danger small" onclick="branchDrafts.splice(${i},1);renderBranchEditors()">Remove branch</button></div>`).join('')}
function deleteCommitment(){let next=state.commitments.filter(x=>x.id!==editId); let mental=next.filter(x=>x.category==='mental').length, physical=next.filter(x=>x.category==='physical').length; if(next.length<4||mental<2||physical<2){toast('The foundation stays at 2 mental + 2 physical.'); return} if(confirm('Delete this commitment?')){state.commitments=next; save(); closeCommitment(); renderAll()}}

function renderGoals(){goalList.innerHTML=state.goals.length?state.goals.map(g=>{let total=g.milestones.length||0, done=g.milestones.filter(m=>m.done).length, pct=total?Math.round(done/total*100):0; return `<div class="card goal-card"><div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start"><h3>${esc(g.title)}</h3><button class="btn ghost small" onclick="openGoal('${g.id}')">Edit</button></div><div class="muted">${esc(g.why||'')}</div><div class="meta"><span class="badge">Target: ${esc(g.targetDate||'open')}</span><span class="badge">${done}/${total} milestones complete</span></div><div style="margin-top:12px"><div class="progress"><i style="width:${pct}%"></i></div><div class="tiny" style="margin-top:5px">${pct}% milestone completion</div></div>${g.linkedCommitmentIds?.length?`<div class="tiny" style="margin-top:10px">Linked commitments: ${g.linkedCommitmentIds.map(id=>esc(state.commitments.find(c=>c.id===id)?.name||'')).join(', ')}</div>`:''}${g.milestones.map((m,idx)=>`<div class="milestone"><input type="checkbox" ${m.done?'checked':''} onchange="toggleMilestone('${g.id}','${m.id}',this.checked)"><div><b>${esc(m.text)}</b><div class="tiny">${esc(m.targetDate||'')}</div></div></div>`).join('')}</div>`}).join(''):'<div class="card"><div class="muted">Add a goal to define what you are trying to achieve, why it matters, and the milestones along the way.</div></div>'}
function openGoal(id=null){goalEditId=id; milestoneDrafts=[]; let g=state.goals.find(x=>x.id===id); goalModalTitle.textContent=g?'Edit goal':'New goal'; deleteGoalBtn.classList.toggle('hidden',!g); gTitle.value=g?.title||''; gWhy.value=g?.why||''; gDate.value=g?.targetDate||''; gLinks.innerHTML=state.commitments.map(c=>`<option value="${c.id}" ${(g?.linkedCommitmentIds||[]).includes(c.id)?'selected':''}>${esc(c.name)}</option>`).join(''); milestoneDrafts=(g?.milestones||[]).map(x=>({...x})); renderMilestoneEditors(); goalModal.classList.add('open')}
function closeGoal(){goalModal.classList.remove('open')}
function addMilestoneEditor(){milestoneDrafts.push({id:uid(),text:'',targetDate:'',done:false}); renderMilestoneEditors()}
function renderMilestoneEditors(){milestoneEditors.innerHTML=milestoneDrafts.map((m,i)=>`<div class="card" style="padding:12px;margin-bottom:10px"><div class="field"><label>Milestone</label><input value="${esc(m.text)}" oninput="milestoneDrafts[${i}].text=this.value"></div><div class="row"><div class="field"><label>Target date</label><input type="date" value="${esc(m.targetDate||'')}" oninput="milestoneDrafts[${i}].targetDate=this.value"></div><div class="field"><label>Completed</label><select onchange="milestoneDrafts[${i}].done=this.value==='true'"><option value="false" ${!m.done?'selected':''}>Not yet</option><option value="true" ${m.done?'selected':''}>Done</option></select></div></div><button class="btn danger small" onclick="milestoneDrafts.splice(${i},1);renderMilestoneEditors()">Remove milestone</button></div>`).join('')}
function selectedOptions(select){return [...select.selectedOptions].map(o=>o.value)}
function saveGoal(){let obj={id:goalEditId||uid(), title:gTitle.value.trim()||'Untitled goal', why:gWhy.value.trim(), targetDate:gDate.value, linkedCommitmentIds:selectedOptions(gLinks), milestones:milestoneDrafts.filter(m=>m.text.trim()).map(m=>({...m}))}; if(goalEditId) state.goals=state.goals.map(x=>x.id===goalEditId?obj:x); else state.goals.push(obj); save(); closeGoal(); renderAll(); toast('Goal saved')}
function deleteGoal(){if(confirm('Delete this goal?')){state.goals=state.goals.filter(x=>x.id!==goalEditId); save(); closeGoal(); renderAll()}}
function toggleMilestone(gid, mid, done){let g=state.goals.find(x=>x.id===gid); if(!g) return; let m=g.milestones.find(x=>x.id===mid); if(!m) return; m.done=done; save(); renderGoals(); renderProgress()}

function shorten(s,n){return s.length>n?s.slice(0,n-1)+'…':s}
function setWisdomCategory(c){wisdomCategory=c; renderWisdom()}
function openResource(){rCategory.innerHTML=wisdomCategories.map(c=>`<option${c===wisdomCategory?' selected':''}>${c}</option>`).join(''); rCategory.value=wisdomCategory; rType.value='reading'; rTitle.value=''; rUrl.value=''; rNote.value=''; resourceModal.classList.add('open')}
function closeResource(){resourceModal.classList.remove('open')}
function deleteResource(id){state.customResources=state.customResources.filter(x=>x.id!==id); save(); renderCustomResources()}
function openSearchForCurrent(){let q=encodeURIComponent(wisdomCategory+' free readings philosophy wellness leadership'); window.open('https://www.google.com/search?q='+q,'_blank')}
function openVideoSearchForCurrent(){let q=encodeURIComponent(wisdomCategory+' talks readings'); window.open('https://www.youtube.com/results?search_query='+q,'_blank')}

function download(name,type,data){let a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([data],{type})); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),500)}

/* Infinite Self v3.1 — refinements layered on the v2.1 data model.
 * No credentials or cloud database. KEY deliberately stays spectacularSpiritJournalV1.
 * Photos and personal audio live in IndexedDB; records remain compatible with v2.
 */
const APP_VERSION='3.1.0';
const $=id=>document.getElementById(id);
let journalDay=isoDate(), journalDirty=false, journalSaveTimeout=null, storageBlocked=false;
let personalMedia=[], mediaURLs=new Map(), mediaDBPromise=null, galleryFilter='All', viewingPhotoId=null;
let activeDictation=null, dictationResume=false, activeCompose=null, swRegistration=null;
let setupCommitmentIds=[], setupGoalIds=[], lastFocusedElement=null;
const pagePhotos={today:'seed-feature',journal:'seed-stones',commitments:'seed-wavewide',goals:'seed-blossoms',meditation:'seed-candles',wisdom:'seed-forestlight',progress:'seed-horizon',gallery:'seed-evening',settings:'seed-clouds',help:'seed-foamsun'};
const pageCopy={today:['Make space for your next chapter.','Small commitments. Honest reflection. Your own rhythm.'],journal:['A quieter place to meet yourself.','Begin with what is true today.'],commitments:['Practice, with intention.','Two mental and two physical foundations. Make the details yours.'],goals:['Give your direction a shape.','A meaningful outcome, a date, and the next achievable step.'],meditation:['Return to the present.','Choose your sound. Give yourself this space.'],wisdom:['Read widely. Reflect personally.','Ideas to explore, not beliefs to prescribe.'],progress:['Notice. Adjust. Begin again.','Understand the pattern without turning it into a judgment.'],gallery:['Light, water and life.','A collection of moments worth returning to.'],settings:['Make it your own.','Your name, your intentions, your pace.'],help:['A little guidance, when you need it.','Practical answers for your daily practice.']};
const safeId=v=>typeof v==='string'&&/^[A-Za-z0-9_-]{1,100}$/.test(v);
const validDate=v=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v+'T12:00:00'));
function cleanURL(value){try{const u=new URL(String(value).trim());return ['https:','http:'].includes(u.protocol)&&!u.username&&!u.password?u.href:''}catch{return ''}}
function finiteValue(v,fallback=0){let n=Number(v);return Number.isFinite(n)?n:fallback}
function normaliseState(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw new Error('Not an app backup');
 const next={...raw};
 for(const name of ['commitments','goals','logs','meditations','readingActivity','customResources','audioClips'])if(!Array.isArray(next[name]))next[name]=[];
 for(const name of ['profile','priorities','journal','photoPreferences'])if(!next[name]||typeof next[name]!=='object'||Array.isArray(next[name]))next[name]={};
 next.profile={name:'',journeyName:'Infinite Self',durationDays:75,startDate:isoDate(),defaultMeditation:'chant',defaultWisdom:'Spiritual',...next.profile};
 if(!next.profile.journeyName||/^Spectacular Spirit Journal$/i.test(next.profile.journeyName))next.profile.journeyName='Infinite Self';
 next.profile.name=String(next.profile.name||'');next.profile.guidingIntention=String(next.profile.guidingIntention||'');
 next.profile.startDate=validDate(next.profile.startDate)?next.profile.startDate:isoDate();next.profile.durationDays=Math.max(7,Math.min(1095,finiteValue(next.profile.durationDays,75)));
 if(!next.commitments.length)next.commitments=JSON.parse(JSON.stringify(defaultCommitments));
 const used=new Set();
 for(const c of next.commitments){
  if(!c||typeof c!=='object')throw new Error('Invalid commitment');
  if(!safeId(c.id)||used.has(c.id))c.id=uid();used.add(c.id);
  c.name=String(c.name||'Untitled practice');c.note=String(c.note||'');c.category=c.category==='physical'?'physical':'mental';
  c.metric=['minutes','sessions','pages','steps','items','check'].includes(c.metric)?c.metric:'minutes';
  c.target=c.metric==='check'?1:Math.max(.1,finiteValue(c.target,1));c.frequency=Math.min(7,Math.max(1,Math.round(finiteValue(c.frequency,7))));
  if(!Array.isArray(c.branches))c.branches=[];
  for(const b of c.branches){if(!safeId(b.id)||used.has(b.id))b.id=uid();used.add(b.id);b.name=String(b.name||'Practice');b.metric=['minutes','sessions','pages','steps','items','check'].includes(b.metric)?b.metric:'minutes';b.target=b.metric==='check'?1:Math.max(.1,finiteValue(b.target,1));b.frequency=Math.min(7,Math.max(1,Math.round(finiteValue(b.frequency,7))))}
 }
 for(const g of next.goals){if(!safeId(g.id))g.id=uid();g.title=String(g.title||'Goal');g.why=String(g.why||'');g.milestones=Array.isArray(g.milestones)?g.milestones:[];g.linkedCommitmentIds=Array.isArray(g.linkedCommitmentIds)?g.linkedCommitmentIds:[];for(const m of g.milestones){if(!safeId(m.id))m.id=uid();m.text=String(m.text||'Milestone');m.done=Boolean(m.done)}}
 for(const l of next.logs)if(!safeId(l.id))l.id=uid();
 for(const r of next.customResources){if(!safeId(r.id))r.id=uid();r.title=String(r.title||'Resource');r.url=cleanURL(r.url);r.note=String(r.note||'')}
 next.audioClips=next.audioClips.filter(c=>c&&(parseYouTube(c.url)||parseSoundCloud(c.url)));for(const c of next.audioClips){if(!safeId(c.id))c.id=uid();c.title=String(c.title||'Saved audio link');c.kind=parseSoundCloud(c.url)?'soundcloud':'youtube';c.url=c.kind==='soundcloud'?parseSoundCloud(c.url):'https://www.youtube.com/watch?v='+parseYouTube(c.url)}
 next.favoritePhotos=Array.isArray(next.favoritePhotos)?next.favoritePhotos:[];
 for(const [d,j]of Object.entries(next.journal)){if(!validDate(d)||!j||typeof j!=='object'){delete next.journal[d];continue}for(const key of ['morning','freeform','evening','tags'])j[key]=String(j[key]||'');j.state=Math.max(1,Math.min(10,finiteValue(j.state,6)))}
 for(const [d,items]of Object.entries(next.priorities)){if(!validDate(d)||!Array.isArray(items)){delete next.priorities[d];continue}next.priorities[d]=Array.from({length:3},(_,i)=>({text:String(items[i]?.text||''),done:Boolean(items[i]?.done)}))}
 next.preferences=normalisePreferences(next.preferences);
 next.schemaVersion=3;next.appVersion=APP_VERSION;
 return next;
}
function storageError(message){
 const box=$('storageAlert');box.classList.remove('hidden');box.textContent=message+' Export a backup before closing this page. Nothing has been sent to a server.';
}
function load(){
 let text=null;
 try{text=localStorage.getItem(KEY);state=normaliseState(text?JSON.parse(text):{});if(text&&!localStorage.getItem(KEY+'-before-v3')){try{localStorage.setItem(KEY+'-before-v3',text)}catch{}}}
 catch(err){storageBlocked=true;state=normaliseState({});storageError('Saved records could not be read. The existing storage has been left untouched; use Help to restore a valid backup.');if(text){const b=document.createElement('button');b.className='btn ghost small';b.textContent='Download original saved data';b.onclick=()=>download('infinite-self-recovery.json','application/json',text);$('storageAlert').append(b)}}
 if(!storageBlocked)save();
}
function save(){if(storageBlocked)return false;try{localStorage.setItem(KEY,JSON.stringify(state));return true}catch(err){storageError('Your changes are in memory but could not be saved on this device (storage may be full or blocked).');return false}}
function init(){
 load();journalDay=isoDate();$('journalDate').value=journalDay;
 selectedModule=state.profile.defaultMeditation||'chant';wisdomCategory=wisdomCategories.includes(state.profile.defaultWisdom)?state.profile.defaultWisdom:'Spiritual';
 applyAppearance();renderAll();renderFAQs();initMedia();initWritingFollow();registerSW();loadPersonalMedia();$('composeType').addEventListener('change',saveComposeDraft);$('composeDate').addEventListener('change',saveComposeDraft);
 if(!state.profile.onboardingStatus&&!storageBlocked)setTimeout(openSetup,150);
 document.addEventListener('visibilitychange',handleVisibility);
 window.addEventListener('pagehide',()=>{flushJournal();checkpointSession()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=document.querySelector('.modal.open');if(m){if(m.id==='composeModal')closeCompose();else closeDialog(m.id)}}if(e.key==='Tab')trapDialogFocus(e)});
 const observer=new MutationObserver(()=>{const any=Boolean(document.querySelector('.modal.open,.setup.open'));document.body.classList.toggle('dialog-open',any);if(any&&PB.running&&currentTrack().kind==='youtube')pauseMeditation('Paused while a dialog is open')});
 document.querySelectorAll('.modal,.setup').forEach(el=>observer.observe(el,{attributes:true,attributeFilter:['class']}));
 window.addEventListener('storage',e=>{if(e.key===KEY){storageError('Another window changed these records. Back up this window, then reload to use the newest saved copy.')}});
}
function renderAll(){
 $('dateBadge').textContent=new Date().toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'});
 $('profileName').value=state.profile.name||'';$('journeyName').value=state.profile.journeyName||'Infinite Self';$('journeyDays').value=state.profile.durationDays||75;$('journeyStart').value=state.profile.startDate||isoDate();
 renderDayBadge();renderPriorities();renderToday();renderIntention();renderCommitments();renderGoals();renderMeditation();renderWisdom();renderJournal();renderProgress();updateHero();renderSettings();
}
function renderDayBadge(){let start=new Date(state.profile.startDate+'T12:00:00');let today=new Date(isoDate()+'T12:00:00');let d=Math.round((today-start)/86400000)+1;let str=d<1?`Starts ${state.profile.startDate}`:d>state.profile.durationDays?`Day ${d} · journey extended`:`Day ${d} of ${state.profile.durationDays}`;$('dayBadge').textContent=str;$('dayCount').textContent=str}
function showTab(name,btn){
 if(!$('tab-'+name))return;
 flushJournal();stopDictation();currentTab=name;
 document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.id==='tab-'+name));document.querySelectorAll('.tabbtn').forEach(x=>{let active=x.dataset.tab===name;x.classList.toggle('active',active);if(active)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current')});
 updateHero();
 if(name==='journal')renderJournal();if(name==='today'){renderDayBadge();renderPriorities();renderToday()}if(name==='progress')renderProgress();if(name==='gallery')renderGallery();if(name==='wisdom')renderWisdom();if(name==='meditation')renderMeditation();if(name==='settings')renderSettings();
 const chosen=btn||document.querySelector(`[data-tab="${name}"]`);chosen?.scrollIntoView({block:'nearest',inline:'nearest'});window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
function allPhotos(){return [...SEED_PHOTOS,...personalMedia.filter(p=>p.kind==='photo')]}
function photoURL(photo){if(!photo)return '';if(photo.src)return photo.src;if(!mediaURLs.has(photo.id)&&photo.blob)mediaURLs.set(photo.id,URL.createObjectURL(photo.blob));return mediaURLs.get(photo.id)||''}
function updateHero(){
 const copy=pageCopy[currentTab]||pageCopy.today;$('welcomeTitle').textContent=currentTab==='today'&&state.profile.name?`Great day, ${state.profile.name}.`:copy[0];$('welcomeNote').textContent=currentTab==='today'&&state.profile.guidingIntention?state.profile.guidingIntention:copy[1];
 const id=state.photoPreferences[currentTab]||pagePhotos[currentTab];const p=allPhotos().find(p=>p.id===id)||SEED_PHOTOS.find(p=>p.id===pagePhotos[currentTab])||SEED_PHOTOS[0];const img=$('heroPhoto');img.src=photoURL(p);img.alt=p.alt||p.title;img.style.objectPosition=p.id==='seed-stones'?'center 66%':p.id==='seed-feature'?'center 15%':'center';
}
function openDialog(id){flushJournal();lastFocusedElement=document.activeElement;$(id).classList.add('open');$(id).querySelector('input,textarea,button,select')?.focus();if(currentTrack().kind==='youtube'&&PB.running)pauseMeditation('Paused while a dialog is open')}
function closeDialog(id){stopDictation();$(id).classList.remove('open');lastFocusedElement?.focus?.()}
function trapDialogFocus(e){let d=document.querySelector('.modal.open');if(!d)return;let nodes=[...d.querySelectorAll('button,input,select,textarea,a[href]')].filter(x=>!x.disabled&&x.offsetParent!==null);if(!nodes.length)return;let first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
// Weekly coverage: a qualifying day meets that leaf's amount target. Extra amount
// on one day is not fabricated into attendance on multiple days.
function sumOnDate(c,b,date){return state.logs.filter(l=>l.date===date&&l.commitmentId===c.id&&(l.branchId||null)===(b?.id||null)).reduce((n,l)=>n+Math.max(0,finiteValue(l.value)),0)}
function todayValue(c,b=null){return sumOnDate(c,b,isoDate())}
function weeklySessions(c,b=null){const start=isoDate(mondayOf()),end=isoDate();const days={};for(const l of state.logs)if(l.date>=start&&l.date<=end&&l.commitmentId===c.id&&(l.branchId||null)===(b?.id||null))days[l.date]=(days[l.date]||0)+Math.max(0,finiteValue(l.value));return Object.values(days).filter(v=>v>=(b||c).target).length}
function weeklyRatio(c,b=null){return Math.min(1,weeklySessions(c,b)/Math.max(1,(b||c).frequency))}
function commitRatio(c){const leaves=c.branches?.length?c.branches:[null];return leaves.reduce((v,b)=>v+weeklyRatio(c,b),0)/leaves.length}
function prettyNum(v){return Number(v.toFixed(1)).toLocaleString()}
function renderToday(){
 renderTodayStats();
 $('todayCommitments').innerHTML=state.commitments.map(c=>{const pct=Math.round(commitRatio(c)*100),leaves=c.branches.length?c.branches:[null];return `<article class="commit-block ${c.category}"><header class="commit-heading ${c.category}"><div><div class="area-label">${c.category==='mental'?'Mind · mental':'Body · physical'}</div><h3>${esc(c.name)}</h3><div class="tiny">Weekly target coverage</div></div><div class="gauge" style="--pct:${pct}%" role="img" aria-label="${pct}% of weekly target"><span>${pct}%</span></div></header><div>${leaves.map(b=>{const it=b||c,val=todayValue(c,b),p=Math.min(100,Math.round(val/it.target*100)),ident=`log-${c.id}-${b?.id||'root'}`;return `<div class="task-item"><div class="task-name"><strong>${esc(b?b.name:c.name+' practice')}</strong><span class="tiny">${p}% today</span></div><div class="metricline"><span><b>${prettyNum(val)} / ${prettyNum(it.target)}</b> ${it.metric==='check'?'done':esc(it.metric)} today</span><span>${weeklySessions(c,b)} / ${it.frequency} target days this week</span></div><div class="progress" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100" aria-label="Today's ${esc(it.name)} coverage"><i style="width:${p}%"></i></div><div class="entryline">${it.metric==='check'?`<button class="btn ${val>=1?'secondary':'primary'} small" onclick="toggleCheck('${c.id}','${b?.id||''}')">${val>=1?'Done ✓ · undo':'Mark done'}</button>`:`<label for="${ident}">Add ${esc(it.metric)}</label><input id="${ident}" type="number" inputmode="decimal" min="0" step="any" placeholder="0"><button class="btn primary small" onclick="logFromInput('${c.id}','${b?.id||''}')">Log</button>`}</div></div>`}).join('')}</div>${c.note?`<div class="task-item category-note tiny">${esc(c.note)}</div>`:''}</article>`}).join('')+`<p class="score-note">Weekly coverage compares completed target days with your full Monday–Sunday goal. Daily bars show activity amounts, not a judgment about unscheduled rest days. A parent with branches is the equal average of its branches.</p>`;
 const recent=state.logs.filter(l=>l.date===isoDate()&&state.commitments.some(c=>c.id===l.commitmentId)).slice(-5).reverse();
 if(recent.length)$('todayCommitments').insertAdjacentHTML('beforeend',`<details><summary class="tiny">Recent entries · correct a mistake</summary>${recent.map(l=>{const c=state.commitments.find(c=>c.id===l.commitmentId),b=c.branches.find(b=>b.id===l.branchId);return `<div class="recent-log"><span>${esc(c.name)}${b?' / '+esc(b.name):''}: ${prettyNum(finiteValue(l.value))} ${esc((b||c).metric)}</span><button class="btn ghost small" onclick="removeLog('${l.id}')">Remove</button></div>`}).join('')}</details>`);
}
function hasJournalContent(j){return j&&[j.morning,j.freeform,j.evening,j.tags].some(s=>String(s||'').trim())}
function renderTodayStats(){const overall=state.commitments.length?Math.round(state.commitments.reduce((n,c)=>n+commitRatio(c),0)/state.commitments.length*100):0,done=priorityData().filter(p=>p.done&&p.text.trim()).length,med=state.meditations.filter(m=>m.date===isoDate()).reduce((n,m)=>n+finiteValue(m.minutes),0);$('todayStats').innerHTML=`<div class="stat"><b>${overall}%</b><span>weekly target coverage</span></div><div class="stat"><b>${done}/3</b><span>daily priorities completed</span></div><div class="stat"><b>${prettyNum(med)}</b><span>session minutes today</span></div><div class="stat"><b>${hasJournalContent(state.journal[isoDate()])?'Saved':'Open'}</b><span>today's journal</span></div>`}
function logFromInput(cid,bid){const el=$(`log-${cid}-${bid||'root'}`),v=Number(el?.value);if(!Number.isFinite(v)||v<=0||v>1e7)return toast('Enter a positive, realistic amount.');logValue(cid,bid,v)}
function logValue(cid,bid,v){const c=state.commitments.find(c=>c.id===cid),b=c?.branches.find(b=>b.id===bid);if(!c||(bid&&!b))return toast('Choose a current commitment.');if(!Number.isFinite(v)||v<=0)return;state.logs.push({id:uid(),date:isoDate(),commitmentId:cid,branchId:bid||null,value:v,createdAt:new Date().toISOString()});if(save())toast('Activity saved');renderToday()}
function toggleCheck(cid,bid){const c=state.commitments.find(c=>c.id===cid),b=c?.branches.find(b=>b.id===bid)||null;if(todayValue(c,b)>=1)state.logs=state.logs.filter(l=>!(l.date===isoDate()&&l.commitmentId===cid&&(l.branchId||null)===(bid||null)));else state.logs.push({id:uid(),date:isoDate(),commitmentId:cid,branchId:bid||null,value:1,createdAt:new Date().toISOString()});save();renderToday()}
function removeLog(id){state.logs=state.logs.filter(l=>l.id!==id);save();renderToday()}
function saveCommitment(){
 const name=$('cName').value.trim(),target=Number($('cTarget').value),freq=Number($('cFreq').value);
 if(!name)return toast('Give the commitment a name.');if(!(target>0)||freq<1||freq>7||!Number.isInteger(freq))return toast('Use a positive target and 1–7 target days per week.');
 if(branchDrafts.some(b=>!b.name.trim()||!(Number(b.target)>0)||b.frequency<1||b.frequency>7||!Number.isInteger(Number(b.frequency))))return toast('Each branch needs a name, a positive target and 1–7 target days.');
 let obj={id:editId||uid(),name,category:$('cCategory').value,metric:$('cMetric').value,target:$('cMetric').value==='check'?1:target,frequency:freq,note:$('cNote').value.trim(),branches:branchDrafts.map(b=>({...b,target:b.metric==='check'?1:Number(b.target),frequency:Number(b.frequency)}))};
 let next=state.commitments.filter(c=>c.id!==editId).concat(obj);if(next.filter(c=>c.category==='mental').length<2||next.filter(c=>c.category==='physical').length<2)return toast('Keep at least two mental and two physical commitments.');
 state.commitments=editId?state.commitments.map(c=>c.id===editId?obj:c):[...state.commitments,obj];if(save())toast('Commitment saved');closeCommitment();renderAll();
}
function dayCompletion(date){return state.commitments.length?state.commitments.reduce((n,c)=>{const leaves=c.branches.length?c.branches:[null];return n+leaves.reduce((a,b)=>a+Math.min(1,sumOnDate(c,b,date)/(b||c).target),0)/leaves.length},0)/state.commitments.length:0}
function renderProgress(){
 const avg=cs=>cs.length?Math.round(100*cs.reduce((n,c)=>n+commitRatio(c),0)/cs.length):0;
 const mental=avg(state.commitments.filter(c=>c.category==='mental')),physical=avg(state.commitments.filter(c=>c.category==='physical')),overall=avg(state.commitments);
 const mins=state.meditations.filter(m=>m.date>=isoDate(mondayOf())&&m.date<=isoDate()).reduce((n,m)=>n+finiteValue(m.minutes),0),entries=Object.values(state.journal).filter(hasJournalContent).length;
 $('progressStats').innerHTML=`<div class="stat"><b>${overall}%</b><span>full-week target coverage</span></div><div class="stat"><b>${mental}%</b><span>mental target coverage</span></div><div class="stat"><b>${physical}%</b><span>physical target coverage</span></div><div class="stat"><b>${prettyNum(mins)}</b><span>session minutes this week</span></div><div class="stat"><b>${state.goals.length}</b><span>goals recorded</span></div><div class="stat"><b>${entries}</b><span>journal entries with writing</span></div>`;
 const days=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-(6-i));return d});$('dayBars').innerHTML=days.map(d=>{const p=Math.round(dayCompletion(isoDate(d))*100);return `<div class="barwrap"><div class="bar"><i style="height:${p}%"></i></div><small>${d.toLocaleDateString(undefined,{weekday:'short'})}<br>${p}%</small></div>`}).join('');
 $('commitBars').innerHTML=state.commitments.map(c=>`<div class="analysis-row"><div class="analysis-label"><strong>${esc(c.name)}</strong><span>${Math.round(commitRatio(c)*100)}% this week</span></div><div class="progress"><i style="width:${commitRatio(c)*100}%"></i></div>${c.branches.map(b=>`<div class="week-sub"><div class="analysis-label"><span>${esc(b.name)}</span><span>${weeklySessions(c,b)} / ${b.frequency} days · ${Math.round(weeklyRatio(c,b)*100)}%</span></div><div class="progress"><i style="width:${weeklyRatio(c,b)*100}%"></i></div></div>`).join('')}</div>`).join('')+'<p class="score-note">Branch-level results remain separate. Weekly scores use target days, not raw totals across different units. Current goals are applied to the displayed history; editing targets can change historical percentages.</p>';
 $('goalProgress').innerHTML=state.goals.length?state.goals.map(g=>{const count=g.milestones.length,done=g.milestones.filter(m=>m.done).length,p=count?100*done/count:0;return `<div class="analysis-row"><div class="analysis-label"><strong>${esc(g.title)}</strong><span>${count?Math.round(p)+'% · '+done+'/'+count:'No milestones yet'}</span></div>${count?`<div class="progress"><i style="width:${p}%"></i></div>`:''}</div>`}).join(''):'<p class="muted">Goals are optional. Add one when an outcome matters to you.</p>';
 $('insight').textContent=state.logs.length?`Your mental commitments have reached ${mental}% and your physical commitments ${physical}% of the full weekly target. This is progress through the week, not a prediction or a grade. Which next practice would be useful?`:'Your next practice will begin the picture. There is no catch-up penalty.';
}
// Journal: date-aware autosave, intact drafts across tabs, full searchable history.
function currentJournal(){return state.journal[journalDay]||{morning:'',freeform:'',evening:'',state:6,tags:''}}
function renderJournal(){if(journalDirty)return;const j=currentJournal();$('journalDate').value=journalDay;$('journalMorning').value=j.morning||'';$('journalFreeform').value=j.freeform||'';$('journalEvening').value=j.evening||'';$('journalTags').value=j.tags||'';$('stateRange').value=j.state||6;$('stateValue').textContent=$('stateRange').value;$('journalSaveStatus').textContent=hasJournalContent(j)?'Saved on this device':'Ready to write';renderJournalHistory()}
function queueJournalSave(){journalDirty=true;$('journalSaveStatus').textContent='Saving…';clearTimeout(journalSaveTimeout);journalSaveTimeout=setTimeout(()=>saveJournal(false),600)}
function flushJournal(){if(journalDirty)saveJournal(false)}
function saveJournal(announce=true){clearTimeout(journalSaveTimeout);state.journal[journalDay]={...currentJournal(),morning:$('journalMorning').value,freeform:$('journalFreeform').value,evening:$('journalEvening').value,tags:$('journalTags').value,state:Number($('stateRange').value),updatedAt:new Date().toISOString()};journalDirty=false;const ok=save();$('journalSaveStatus').textContent=ok?'Saved on this device':'Not saved — export a backup';if(announce&&ok)toast('Journal saved');renderJournalHistory();renderTodayStats()}
function changeJournalDate(date){if(!validDate(date)){toast('Choose a valid date.');return}flushJournal();stopDictation();journalDay=date;renderJournal()}
function editJournalDate(date){changeJournalDate(date);showTab('journal')}
function renderJournalHistory(){const q=($('journalSearch').value||'').toLowerCase();const entries=Object.entries(state.journal).filter(([d,j])=>hasJournalContent(j)&&`${d} ${j.morning||''} ${j.freeform||''} ${j.evening||''} ${j.tags||''}`.toLowerCase().includes(q)).sort((a,b)=>b[0].localeCompare(a[0]));$('journalCount').textContent=`${entries.length} entries`;$('journalHistory').innerHTML=entries.length?entries.map(([date,j])=>`<details><summary>${esc(date)}${j.tags?' · '+esc(j.tags):''}</summary><div class="journal-text">${[['morning','Morning'],['freeform','Journal'],['evening','Evening']].map(([key,title])=>j[key]?`<h4>${title}</h4><div>${esc(j[key])}</div>`:'').join('')}</div><div class="tiny">State / energy: ${j.state||'—'} of 10</div><button class="btn ghost small" onclick="editJournalDate('${date}')">Open this entry</button></details>`).join(''):'<p class="muted">No writing matches this search yet.</p>'}
function saveJourneySettings(){const days=Number($('journeyDays').value),date=$('journeyStart').value;if(!Number.isFinite(days)||days<7||days>1095||!validDate(date))return toast('Use a valid start date and 7–1095 days.');state.profile.name=$('profileName').value.trim();state.profile.journeyName=$('journeyName').value.trim()||'Infinite Self';state.profile.durationDays=days;state.profile.startDate=date;state.profile.guidingIntention=$('settingsIntention').value;state.profile.defaultMeditation=$('settingsMeditation').value;state.profile.defaultWisdom=$('settingsWisdom').value;if(save()){toast('Journey settings saved');$('settingsStatus').textContent='Saved on this device.'}renderDayBadge();renderIntention();updateHero()}
// Optional browser dictation; nothing pretends to be offline or universally supported.
function startDictation(targetId,button){
 if(activeDictation){stopDictation();return}
 const target=$(targetId);if(!target)return;
 const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!Recognition){toast('Use your keyboard microphone, or type. This browser does not provide in-app dictation.');target.focus();return}
 if(!window.isSecureContext){toast('In-app dictation needs the HTTPS website. Your keyboard microphone can also enter text.');return}
 if(!state.profile.dictationConsent){if(!confirm('Dictation uses your browser’s speech service. Your browser/device provider may process audio remotely; Infinite Self does not save microphone recordings. Continue?'))return;state.profile.dictationConsent=true;save()}
 dictationResume=PB.running;if(PB.running||PB.pending)pauseMeditation('Paused for dictation');
 const recognition=new Recognition();recognition.lang=navigator.language||'en-GB';recognition.continuous=true;recognition.interimResults=true;
 const hint=$(targetId+'Hint'),before=target.value,dictationDate=journalDay;let finalText='';
 const token={recognition,targetId,button,stopping:false};activeDictation=token;
 button?.classList.add('listening');if(button)button.textContent='■ Stop dictation';if(hint)hint.textContent='Listening… review the words before saving.';
 target.focus({preventScroll:true});followWriting(target,true);
 recognition.onresult=event=>{
  if(activeDictation!==token||token.stopping)return;
  if(targetId==='composeText'&&!activeCompose)return;
  if(targetId.startsWith('journal')&&journalDay!==dictationDate)return;
  let interim='';for(let i=event.resultIndex;i<event.results.length;i++){const t=event.results[i][0].transcript;if(event.results[i].isFinal)finalText+=(finalText?' ':'')+t.trim();else interim+=t}
  target.value=before+(before&&!/\s$/.test(before)?' ':'')+finalText;
  target.dispatchEvent(new Event('input',{bubbles:true}));followWriting(target,true);
  if(hint)hint.textContent=interim||'Listening…';
 };
 recognition.onerror=event=>{if(hint)hint.textContent=event.error==='not-allowed'?'Microphone permission denied. Use the keyboard mic or change browser permission.':'Dictation stopped: '+event.error+'. You can continue typing.'};
 recognition.onend=()=>{if(button){button.classList.remove('listening');button.textContent='◉ Dictate'}if(hint&&!hint.textContent.includes('denied')&&!hint.textContent.includes('stopped:'))hint.textContent='Finished. Review the text.';if(activeDictation===token)activeDictation=null;if(targetId==='composeText')saveComposeDraft();else if(targetId.startsWith('journal'))flushJournal();if(dictationResume){dictationResume=false;toast('Text saved. Tap Play when ready to resume your session.')}};
 try{recognition.start()}catch{activeDictation=null;button?.classList.remove('listening');if(button)button.textContent='◉ Dictate';if(hint)hint.textContent='Microphone could not start. Use your keyboard microphone or type.'}
}
function stopDictation(){if(activeDictation){activeDictation.stopping=true;try{activeDictation.recognition.stop()}catch{} }}
// Wisdom composer stays on the Wisdom tab and appends rather than replaces.
function renderWisdom(){
 $('wisdomFilters').innerHTML=wisdomCategories.map((c,i)=>`<button class="chip ${c===wisdomCategory?'active':''}" onclick="setWisdomCategory(wisdomCategories[${i}])">${esc(c)}</button>`).join('');
 $('wisdomList').innerHTML=(wisdomLibrary[wisdomCategory]||[]).map((r,i)=>{const catIndex=wisdomCategories.indexOf(wisdomCategory);let done=state.readingActivity.some(x=>x.date===isoDate()&&x.category===wisdomCategory&&String(x.item)===String(i));return `<article class="card reading-card"><div class="source">${esc(wisdomCategory)} · ${esc(r.source)}</div><h3>${esc(r.title)}</h3><div class="excerpt">${esc(r.body)}</div><div class="prompt"><b>Reflection:</b> ${esc(r.prompt)}</div><div class="reading-actions"><button class="btn ${done?'secondary':'primary'} small" onclick="markReading(wisdomCategories[${catIndex}],${i})">${done?'Read today ✓':'Mark read'}</button><button class="btn ghost small" onclick="openReadingComposer(${catIndex},${i})">Carry to Journal</button>${(r.videos||[]).map(([title,url])=>`<a class="btn secondary small" href="${esc(cleanURL(url))}" target="_blank" rel="noopener noreferrer">${url.includes('results?')?'Search YouTube: ':'Watch: '}${esc(title)}</a>`).join('')}</div></article>`}).join('');renderCustomResources();
}
function markReading(cat,idx){if(!state.readingActivity.some(x=>x.date===isoDate()&&x.category===cat&&String(x.item)===String(idx)))state.readingActivity.push({date:isoDate(),category:cat,item:idx,createdAt:new Date().toISOString()});save();renderWisdom()}
function openReadingComposer(catIndex,index){const category=wisdomCategories[catIndex],r=wisdomLibrary[category]?.[index];if(!r)return;flushJournal();activeCompose={category,title:r.title,prompt:r.prompt,key:category+'|'+index};const d=state.composeDraft?.key===activeCompose.key?state.composeDraft:null;$('composeSource').textContent=category+' · '+r.title;$('composePrompt').textContent=r.prompt;$('composeType').value=d?.type||'freeform';$('composeDate').value=d?.date||isoDate();$('composeText').value=d?.text||'';openDialog('composeModal')}
function saveComposeDraft(){if(activeCompose){state.composeDraft={...activeCompose,text:$('composeText').value,type:$('composeType').value,date:$('composeDate').value};save()}}
function closeCompose(){saveComposeDraft();closeDialog('composeModal')}
function postCompose(){
 const date=$('composeDate').value,type=$('composeType').value,text=$('composeText').value.trim();if(!activeCompose||!validDate(date)||!['morning','freeform','evening'].includes(type))return toast('Choose a valid journal date and entry type.');if(!text)return toast('Add a few words before saving your reflection.');
 stopDictation();flushJournal();const j=state.journal[date]||{morning:'',freeform:'',evening:'',state:6,tags:''};const addition=`${activeCompose.title} — ${activeCompose.category}\n${activeCompose.prompt}\n\n${text}`;j[type]=(j[type]?j[type]+'\n\n':'')+addition;j.updatedAt=new Date().toISOString();state.journal[date]=j;state.composeDraft=null;if(save()){activeCompose=null;closeDialog('composeModal');if(date===journalDay)renderJournal();renderTodayStats();toast('Saved to '+(type==='freeform'?'Journal':type+' journal')+' · '+date)}
}
function saveResource(){const url=cleanURL($('rUrl').value),title=$('rTitle').value.trim();if(!title||!url)return toast('Add a title and a valid http/https web address.');state.customResources.push({id:uid(),category:$('rCategory').value,type:$('rType').value,title,url,note:$('rNote').value.trim(),createdAt:new Date().toISOString()});save();closeResource();renderCustomResources();toast('Resource saved')}
function renderCustomResources(){const resources=state.customResources.filter(r=>r.category===wisdomCategory);$('resourceList').innerHTML=resources.length?resources.map(r=>`<div class="clip-row"><div><strong>${esc(r.title)}</strong><p class="muted">${esc(r.note||'')}</p></div><div class="clip-buttons">${cleanURL(r.url)?`<a class="btn secondary small" href="${esc(cleanURL(r.url))}" target="_blank" rel="noopener noreferrer">Open</a>`:''}<button class="btn ghost small" onclick="deleteResource('${r.id}')">Delete</button></div></div>`).join(''):'No custom resources saved in this category yet.'}
// IndexedDB holds media blobs instead of putting large images in localStorage.
function mediaDB(){if(!mediaDBPromise)mediaDBPromise=new Promise((resolve,reject)=>{if(!window.indexedDB)return reject(new Error('Local media storage is unavailable'));const req=indexedDB.open('infinite-self-media-v3',1);req.onupgradeneeded=()=>req.result.createObjectStore('media',{keyPath:'id'});req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});return mediaDBPromise}
async function dbAll(){const db=await mediaDB();return new Promise((resolve,reject)=>{const tx=db.transaction('media','readonly'),r=tx.objectStore('media').getAll();r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
async function dbPut(item){const db=await mediaDB();return new Promise((resolve,reject)=>{const tx=db.transaction('media','readwrite');tx.objectStore('media').put(item);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
async function dbDelete(id){const db=await mediaDB();return new Promise((resolve,reject)=>{const tx=db.transaction('media','readwrite');tx.objectStore('media').delete(id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
async function dbReplace(items){const db=await mediaDB();return new Promise((resolve,reject)=>{const tx=db.transaction('media','readwrite'),s=tx.objectStore('media');s.clear();items.forEach(i=>s.put(i));tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
async function loadPersonalMedia(){try{personalMedia=await dbAll();renderGallery();renderClips();updateHero()}catch(e){$('galleryStatus').textContent='Personal uploads are unavailable in this browser session. The included photographs still work.'}}
function renderGallery(){
 const filters=['All','Favourites','My uploads','Ocean','Light','Stillness','Growth'];$('galleryFilters').innerHTML=filters.map((f,i)=>`<button class="chip ${f===galleryFilter?'active':''}" onclick="setGalleryFilter(${i})">${f}</button>`).join('');
 const photos=allPhotos().filter(p=>galleryFilter==='All'||galleryFilter==='Favourites'&&state.favoritePhotos.includes(p.id)||galleryFilter==='My uploads'&&p.kind==='photo'||p.category===galleryFilter);
 $('galleryCount').textContent=`${allPhotos().length} photographs`;
 $('galleryGrid').innerHTML=photos.length?photos.map(p=>`<button class="gallery-tile" onclick="openPhoto('${p.id}')" aria-label="View ${esc(p.title)}"><img src="${esc(photoURL(p))}" alt="${esc(p.alt||p.title)}" loading="lazy"><span class="caption"><span><strong>${esc(p.title)}</strong><small>${p.kind==='photo'?'Your upload':esc(p.category)}</small></span><span class="heart" aria-label="${state.favoritePhotos.includes(p.id)?'Favourite':'Not favourited'}">${state.favoritePhotos.includes(p.id)?'♥':'♡'}</span></span></button>`).join(''):'<div class="card"><p class="muted">Nothing here yet. Add a photograph or favourite one from the full gallery.</p></div>';
}
function setGalleryFilter(i){galleryFilter=['All','Favourites','My uploads','Ocean','Light','Stillness','Growth'][i]||'All';renderGallery()}
async function resizePhoto(file){
 if(file.size>20*1024*1024)throw new Error('Choose an image smaller than 20 MB');
 if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw new Error('Use JPEG, PNG or WebP. Export HEIC as JPEG first');
 const image=new Image(),url=URL.createObjectURL(file);
 try{await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=()=>reject(new Error('This image could not be decoded'));image.src=url});const scale=Math.min(1,1600/Math.max(image.naturalWidth,image.naturalHeight)),c=document.createElement('canvas');c.width=Math.round(image.naturalWidth*scale);c.height=Math.round(image.naturalHeight*scale);const ctx=c.getContext('2d');ctx.fillStyle='#ffffff';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(image,0,0,c.width,c.height);return await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(new Error('Image conversion failed')),'image/jpeg',.84))}finally{URL.revokeObjectURL(url)}
}
async function uploadPhotos(files){
 if(!files?.length)return;let added=0,issues=[];const selected=Array.from(files);$('galleryStatus').textContent='Saving photographs on this device…';
 for(const f of selected){try{if(personalMedia.filter(x=>x.kind==='photo').length>=80)throw new Error('The personal gallery limit is 80 photos');const blob=await resizePhoto(f),p={id:'photo-'+uid(),kind:'photo',title:f.name.replace(/\.[^.]+$/,''),alt:'Personal photograph: '+f.name,category:'My uploads',blob,createdAt:new Date().toISOString()};await dbPut(p);personalMedia.push(p);added++;$('galleryStatus').textContent=`Saved ${added} of ${selected.length}…`}catch(e){issues.push(f.name+': '+e.message)}}
 galleryFilter='All';renderGallery();$('galleryStatus').textContent=`${added} photo${added===1?'':'s'} saved on this device.`+(issues.length?' '+issues.join(' · '):'');
}
function openPhoto(id){const p=allPhotos().find(p=>p.id===id);if(!p)return;viewingPhotoId=id;$('photoFull').src=photoURL(p);$('photoFull').alt=p.alt||p.title;$('photoTitle').textContent=p.title;$('photoCaption').textContent=p.kind==='photo'?'Your local upload. The app stores a resized copy; keep your original.':'Photography supplied by Richard Fraser for Infinite Self.';$('deletePhotoButton').classList.toggle('hidden',p.kind!=='photo');$('favoriteButton').textContent=state.favoritePhotos.includes(id)?'♥ Favourited · remove':'♡ Add to favourites';openDialog('photoModal')}
function togglePhotoFavorite(){const i=state.favoritePhotos.indexOf(viewingPhotoId);if(i>=0)state.favoritePhotos.splice(i,1);else state.favoritePhotos.push(viewingPhotoId);save();$('favoriteButton').textContent=state.favoritePhotos.includes(viewingPhotoId)?'♥ Favourited · remove':'♡ Add to favourites';renderGallery()}
function useCurrentPhoto(){const page=$('photoPage').value;state.photoPreferences[page]=viewingPhotoId;save();closeDialog('photoModal');showTab(page);toast('Photograph set for '+page)}
function downloadCurrentPhoto(){const p=allPhotos().find(p=>p.id===viewingPhotoId);if(!p)return;const a=document.createElement('a');a.href=photoURL(p);a.download=(p.title||'infinite-self-photo').replace(/[^\w\s-]/g,'')+'.jpg';a.click()}
async function deleteCurrentPhoto(){const p=personalMedia.find(p=>p.id===viewingPhotoId);if(!p||!confirm('Delete this uploaded photo from this browser? Your original file is not affected.'))return;try{await dbDelete(p.id);personalMedia=personalMedia.filter(x=>x.id!==p.id);state.favoritePhotos=state.favoritePhotos.filter(id=>id!==p.id);for(const key of Object.keys(state.photoPreferences))if(state.photoPreferences[key]===p.id)delete state.photoPreferences[key];URL.revokeObjectURL(mediaURLs.get(p.id)||'');mediaURLs.delete(p.id);save();closeDialog('photoModal');renderGallery();updateHero()}catch{toast('Photo could not be deleted; browser storage may be unavailable.')}}
async function requestPersistence(){try{const granted=await navigator.storage?.persist?.();toast(granted?'The browser granted persistent storage. Keep making backups.':'The browser did not grant persistence. Keep originals and regular backups.')}catch{toast('Persistent storage is not available here. Keep regular backups.')}}
// Saved video links are user-entered labels, not downloaded YouTube media.
function parseYouTube(value){try{const u=new URL(String(value).trim());if(!['https:','http:'].includes(u.protocol))return null;const h=u.hostname.toLowerCase(),parts=u.pathname.split('/').filter(Boolean);let id=null;if(h==='youtu.be')id=parts[0];else if(['youtube.com','www.youtube.com','m.youtube.com','music.youtube.com','www.youtube-nocookie.com'].includes(h)){if(parts[0]==='watch')id=u.searchParams.get('v');else if(['shorts','embed','live'].includes(parts[0]))id=parts[1]}return id&&/^[A-Za-z0-9_-]{11}$/.test(id)?id:null}catch{return null}}
function openClipForm(){$('clipTitle').value='';$('clipURL').value='';openDialog('clipModal')}
function saveClip(){const title=$('clipTitle').value.trim(),sc=parseSoundCloud($('clipURL').value),yt=parseYouTube($('clipURL').value);if(!title||(!sc&&!yt))return toast('Add a title and a full SoundCloud track or YouTube video URL.');const url=sc||'https://www.youtube.com/watch?v='+yt;if(state.audioClips.some(c=>c.url===url)||builtinTracks().some(c=>c.url===url||yt&&c.videoId===yt))return toast('That recording is already in your library.');state.audioClips.push({id:'clip-'+uid(),title,url,kind:sc?'soundcloud':'youtube',createdAt:new Date().toISOString()});save();closeDialog('clipModal');renderClips();toast('Audio link saved')}
async function uploadAudio(files){const file=files?.[0];if(!file)return;if(file.size>40*1024*1024)return toast('Choose an audio file smaller than 40 MB.');if(!/\.(mp3|m4a|wav|ogg|webm)$/i.test(file.name))return toast('Use MP3, M4A, WAV, OGG or WebM audio.');if(!confirm('Please use only audio you own or have permission to use. Save this file in your browser?'))return;try{const item={id:'audio-'+uid(),kind:'audio',title:file.name.replace(/\.[^.]+$/,''),blob:file,createdAt:new Date().toISOString()};await dbPut(item);personalMedia.push(item);renderClips();toast('Your audio is saved on this device')}catch{toast('Audio could not be saved. Browser storage may be full or unavailable.')}}
function builtinTracks(){return [{id:'chant-sc',title:'Daimoku · SoundCloud',kind:'soundcloud',url:SOUNDCLOUD_CHANT_URL,note:'Nam Myoho Renge Kyo — 1 Hour Daimoku · A Nichiren Buddhist'},{id:'chant',title:'Daimoku · YouTube',kind:'youtube',videoId:'SazK2dPvd4c',note:'Your original reference chant · YouTube'},{id:'ocean',title:'Ocean Breath',kind:'audio',src:'ocean-v3.mp3',note:'Original generated soundscape · offline file'},{id:'bells',title:'Soft Bell',kind:'audio',src:'soft-bell-v3.mp3',note:'Original generated soundscape · offline file'}]}
function allTracks(){return [...builtinTracks(),...state.audioClips.map(c=>parseSoundCloud(c.url)?{id:c.id,title:c.title,kind:'soundcloud',url:parseSoundCloud(c.url),note:'Your saved link · SoundCloud'}:{id:c.id,title:c.title,kind:'youtube',videoId:parseYouTube(c.url),note:'Your saved link · YouTube'}),...personalMedia.filter(p=>p.kind==='audio').map(p=>({id:p.id,title:p.title,kind:'audio',src:photoURL(p),note:'Your audio file · stored on this device'}))]}
function currentTrack(){return allTracks().find(t=>t.id===PB.trackId)||builtinTracks()[0]}
function renderClips(){if(!$('clipList'))return;const clips=allTracks().slice(builtinTracks().length);$('clipList').innerHTML=clips.length?clips.map(c=>`<div class="clip-row"><div class="clip-copy"><strong>${esc(c.title)}</strong><small>${esc(c.note)}</small></div><div class="clip-buttons"><button class="btn secondary small" onclick="selectModule('${c.id}')">${PB.trackId===c.id?'Selected':'Use'}</button>${c.kind!=='audio'?`<a class="btn ghost small" target="_blank" rel="noopener noreferrer" href="${esc(c.kind==='soundcloud'?c.url:'https://www.youtube.com/watch?v='+c.videoId)}">${c.kind==='soundcloud'?'SoundCloud':'YouTube'} ↗</a>`:''}<button class="btn ghost small" onclick="deleteClip('${c.id}')">Remove</button></div></div>`).join(''):'<p class="muted">No additional clips yet.</p>'}
async function deleteClip(id){if(PB.trackId===id&&(PB.running||PB.elapsed>0))return toast('End or reset this session before removing its clip.');if(!confirm('Remove this saved clip from this device?'))return;try{if(id.startsWith('audio-')){await dbDelete(id);personalMedia=personalMedia.filter(p=>p.id!==id);URL.revokeObjectURL(mediaURLs.get(id)||'');mediaURLs.delete(id)}else state.audioClips=state.audioClips.filter(c=>c.id!==id);if(PB.trackId===id)selectModule('chant');save();renderClips()}catch{toast('Could not remove the saved clip.')}}
// One app-level media element, one visible YouTube player, and an elapsed-time clock.
// No browser interval is treated as a reliable second while the device sleeps.
const PB={trackId:'chant',target:600,elapsed:0,anchor:0,running:false,finished:false,saved:false,sessionId:null,loop:true,dockVisible:false,prepared:'',changing:false,status:'Ready',resumeRequested:false,generation:0,pending:false};
let ytPlayer=null,ytAPI=null,ytReady=null,ytError=null,ticker=null,sessionRestored=false;
function elapsedNow(){return Math.max(0,PB.elapsed+(PB.running?(Date.now()-PB.anchor)/1000:0))}
function settleSession(){if(PB.running){PB.elapsed=elapsedNow();PB.anchor=Date.now()}}
function checkpointSession(){try{sessionStorage.setItem('infinite-self-session-v3',JSON.stringify({...PB,elapsed:elapsedNow(),running:false,anchor:0,status:'Paused after reload'}))}catch{}}
function startClock(){PB.pending=false;if(!PB.running){PB.anchor=Date.now();PB.running=true;timerRunning=true;PB.status='Playing';PB.sessionId ||= 'session-'+uid();}PB.dockVisible=true;updateTimerUI();checkpointSession()}
function pauseClock(note='Paused'){settleSession();PB.running=false;timerRunning=false;PB.anchor=0;PB.status=note;updateTimerUI();checkpointSession()}
function initMedia(){
 PB.trackId=state.profile.defaultMeditation||'chant';
 try{const saved=JSON.parse(sessionStorage.getItem('infinite-self-session-v3'));if(saved&&saved.elapsed>0&&!saved.finished&&saved.target>0){Object.assign(PB,saved,{running:false,anchor:0,dockVisible:false,prepared:'',pending:false,generation:0,changing:false,status:'Paused after reload'});sessionRestored=true}}catch{}
 const audio=$('globalAudio');audio.loop=true;
 audio.addEventListener('play',()=>{if(currentTrack().kind==='audio'&&!PB.changing)startClock()});
 audio.addEventListener('pause',()=>{if(currentTrack().kind==='audio'&&!PB.changing&&PB.running)pauseClock('Paused')});
 audio.addEventListener('ended',()=>{if(!PB.loop)pauseClock('Audio ended · session paused')});
 audio.addEventListener('error',()=>{if(PB.prepared&&currentTrack().kind==='audio'){pauseClock('Audio unavailable');toast('Audio could not play. Check the file format or deployment assets.')}});
 audio.addEventListener('timeupdate',()=>{if(PB.running&&elapsedNow()>=PB.target)completeMeditation()});
 ticker=setInterval(()=>{if(PB.running&&elapsedNow()>=PB.target)completeMeditation();else updateTimerUI();if(PB.running&&Math.floor(Date.now()/1000)%5===0)checkpointSession()},350);
 renderMeditation();
}
function renderMeditation(){
 const core=builtinTracks();$('moduleList').innerHTML=core.map(t=>`<button class="module ${PB.trackId===t.id?'selected':''}" onclick="selectModule('${t.id}')" aria-pressed="${PB.trackId===t.id}"><div class="source">${t.kind==='audio'?'Included soundscape':'Reference recording'}</div><h3>${esc(t.title)}</h3><div class="muted">${esc(t.note)}</div></button>`).join('');
 $('timerOptions').innerHTML=[5,10,15,20,30].map(n=>`<button class="${PB.target===n*60?'active':''}" onclick="setTimer(${n})" ${PB.running?'disabled':''}>${n} min</button>`).join('');$('sessionMinutes').value=PB.target/60;$('sessionMinutes').disabled=PB.running;$('loopMedia').checked=PB.loop;renderClips();
 const sessions=state.meditations.slice(-8).reverse();$('medHistory').innerHTML=sessions.length?sessions.map(m=>`<div class="clip-row"><div><strong>${esc(m.title||allTracks().find(t=>t.id===m.module)?.title||m.module)}</strong><small>${esc(m.date)} · ${m.completed===false?'ended early':'session saved'}</small></div><span>${prettyNum(finiteValue(m.minutes))} min</span></div>`).join(''):'No sessions yet.';
 if(!$('creditContainer')){const div=document.createElement('div');div.id='creditContainer';div.className='field';div.style.marginTop='16px';document.querySelector('.timerWrap').append(div)}
 const choices=[];for(const c of state.commitments.filter(c=>c.category==='mental')){const leaves=c.branches.length?c.branches:[null];for(const b of leaves)if((b||c).metric==='minutes')choices.push({id:c.id+'|'+(b?.id||''),label:c.name+(b?' / '+b.name:'')})}
 if(state.profile.meditationCredit===undefined){state.profile.meditationCredit=choices.find(c=>/still|meditat|chant/i.test(c.label))?.id||'';save()}
 renderSpeedControls();
 $('creditContainer').innerHTML=`<label for="sessionCredit">Credit completed session minutes to</label><select id="sessionCredit" onchange="state.profile.meditationCredit=this.value;save()"><option value="">Session history only</option>${choices.map(c=>`<option value="${esc(c.id)}" ${state.profile.meditationCredit===c.id?'selected':''}>${esc(c.label)}</option>`).join('')}</select><small>Do not also log the same minutes manually.</small>`;
 updateTimerUI();
}
function selectModule(id){if(PB.running||PB.elapsed>0&&!PB.finished){toast('End & save, or reset the current session before changing sound.');return}stopMedia();PB.trackId=id;selectedModule=id;PB.prepared='';PB.elapsed=0;PB.finished=false;PB.saved=false;PB.sessionId=null;PB.dockVisible=false;PB.status='Ready';renderMeditation()}
function setTimer(value){const n=Number(value);if(PB.running||PB.elapsed>0&&!PB.finished){toast('Reset or end this session before changing its length.');$('sessionMinutes').value=PB.target/60;return}if(!Number.isFinite(n)||n<1||n>180){toast('Choose 1–180 minutes.');return}PB.target=Math.round(n*60);PB.elapsed=0;PB.finished=false;PB.saved=false;timerMinutes=n;timerRemaining=PB.target;renderMeditation()}
function setLoopMedia(loop){PB.loop=Boolean(loop);$('globalAudio').loop=PB.loop;if(ytPlayer?.setLoop)try{ytPlayer.setLoop(PB.loop)}catch{}}
function formatTime(seconds){seconds=Math.max(0,Math.ceil(seconds));return Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0')}
function updateTimerUI(){
 const elapsed=Math.min(elapsedNow(),PB.target),remaining=PB.target-elapsed;timerRemaining=Math.ceil(remaining);timerMinutes=PB.target/60;timerRunning=PB.running;
 $('timerText').textContent=formatTime(remaining);$('timerState').textContent=PB.status;$('timerRing').style.setProperty('--timerPct',Math.min(100,100*elapsed/PB.target)+'%');$('playBtn').textContent=PB.running?'Pause session':PB.finished?'Start another session':PB.elapsed>0?'Resume session':'Play session';$('dockPlay').textContent=PB.running?'Pause':'Play';$('dockTitle').textContent=currentTrack().title;$('dockClock').textContent=formatTime(remaining);$('dockStatus').textContent=PB.running?'playing':PB.status;
 const visible=PB.dockVisible;$('mediaDock').classList.toggle('hidden',!visible);const isYT=currentTrack().kind==='youtube',isSC=currentTrack().kind==='soundcloud';$('dockVideo').classList.toggle('hidden',!isYT);$('dockSoundCloud').classList.toggle('hidden',!isSC);$('soundcloudStatus').classList.toggle('hidden',!isSC);document.body.classList.toggle('soundcloud-present',visible&&isSC);document.body.classList.toggle('media-present',visible);document.body.classList.toggle('youtube-present',visible&&isYT);
 if(PB.running&&currentTrack().kind==='audio'&&'mediaSession'in navigator)navigator.mediaSession.playbackState='playing';
}
async function toggleMeditation(){if(PB.pending){pauseMeditation('Paused');return}if(PB.running){pauseMeditation();return}await startMeditation()}
async function startMeditation(){
 if(document.querySelector('.modal.open,.setup.open')){toast('Close the dialog before starting your session.');return}
 if(activeDictation){toast('Stop dictation before starting audio.');return}
 if(PB.finished||elapsedNow()>=PB.target){try{$('globalAudio').currentTime=0;scWidget?.seekTo(0);ytPlayer?.seekTo(0,true)}catch{}PB.elapsed=0;PB.saved=false;PB.finished=false;PB.sessionId=null}
 const track=currentTrack(),request=++PB.generation;PB.pending=true;PB.dockVisible=true;PB.status='Loading…';updateTimerUI();
 try{
  if(track.kind==='soundcloud'){
   $('youtubeStatus').classList.add('hidden');if(ytPlayer)try{ytPlayer.pauseVideo()}catch{}
   $('globalAudio').pause();if(!navigator.onLine)throw new Error('SoundCloud needs an internet connection. Choose an included sound or your own audio offline.');
   await prepareSoundCloud(track,request);if(request!==PB.generation)return;
   PB.status='Tap the SoundCloud player if needed';updateTimerUI();scPauseGuard=0;scWidget.play();
  }else if(track.kind==='youtube'){
   pauseSoundCloud();
   $('youtubeStatus').classList.remove('hidden');$('youtubeStatus').innerHTML=`Tap Play in the video if needed. <a href="https://www.youtube.com/watch?v=${track.videoId}" target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a>`;
   if(!navigator.onLine)throw new Error('YouTube needs an internet connection. Choose Ocean Breath, Soft Bell or your own audio offline.');
   await prepareYouTube(track,request);if(request!==PB.generation)return;if(document.hidden||document.querySelector('.modal.open,.setup.open')){pauseMeditation('Paused · app or player not visible');return}PB.status='Tap the video to play';updateTimerUI();ytPlayer.playVideo();
  }else{
   pauseSoundCloud();$('youtubeStatus').classList.add('hidden');if(ytPlayer)try{ytPlayer.pauseVideo()}catch{}
   const audio=$('globalAudio');PB.changing=true;if(PB.prepared!==track.id){audio.pause();audio.src=track.src;audio.load();PB.prepared=track.id}audio.loop=PB.loop;audio.preservesPitch=true;audio.playbackRate=storedPlaybackRate(track);PB.changing=false;
   try{if(navigator.audioSession)navigator.audioSession.type='playback'}catch{}
   await audio.play();if(request!==PB.generation)return;startClock();configureMediaSession(track);
  }
 }catch(err){if(request!==PB.generation)return;PB.pending=false;PB.changing=false;pauseClock('Unable to start');toast(err.message||'Tap Play again, or choose another sound.')}
}
function pauseMeditation(note='Paused'){pauseSoundCloud();PB.generation++;PB.pending=false;pauseClock(note);const audio=$('globalAudio');if(!audio.paused)audio.pause();if(ytPlayer)try{ytPlayer.pauseVideo()}catch{}if('mediaSession'in navigator)navigator.mediaSession.playbackState='paused'}
function stopMedia(){pauseSoundCloud();PB.generation++;PB.pending=false;PB.changing=true;$('globalAudio').pause();if(ytPlayer)try{ytPlayer.pauseVideo()}catch{}PB.changing=false;if('mediaSession'in navigator)navigator.mediaSession.playbackState='none'}
function resetMeditation(){if((PB.running||PB.elapsed>0)&&!PB.finished&&!confirm('Discard the time in this session and reset the timer?'))return;pauseMeditation();stopMedia();PB.elapsed=0;PB.finished=false;PB.saved=false;PB.sessionId=null;PB.status='Ready';PB.dockVisible=false;try{$('globalAudio').currentTime=0;scWidget?.seekTo(0);ytPlayer?.seekTo(0,true)}catch{}checkpointSession();renderMeditation()}
function endMeditation(){if(PB.running||PB.elapsed>0&&!PB.finished){recordSession(false)}else{pauseMeditation();PB.dockVisible=false;updateTimerUI()}}
function completeMeditation(){if(PB.running&&!PB.saved)recordSession(true)}
function recordSession(completed){
 const seconds=Math.min(PB.target,elapsedNow());pauseMeditation();stopMedia();PB.finished=true;PB.dockVisible=false;PB.status=completed?'Session complete':'Session ended';
 if(PB.saved){updateTimerUI();return}PB.saved=true;
 if(seconds>=5){const minutes=Math.round(seconds/6)/10,id=PB.sessionId||'session-'+uid(),track=currentTrack();if(!state.meditations.some(m=>m.id===id)){
  state.meditations.push({id,date:isoDate(),module:track.id,title:track.title,minutes,seconds:Math.round(seconds),completed:completed||seconds>=PB.target,completedAt:new Date().toISOString()});
  const [cid,bid]=String(state.profile.meditationCredit||'').split('|');const c=state.commitments.find(c=>c.id===cid),b=c?.branches.find(b=>b.id===bid);if(c&&(!c.branches.length&&!bid||b)&&(b||c).metric==='minutes')state.logs.push({id:uid(),date:isoDate(),commitmentId:cid,branchId:bid||null,value:minutes,source:'meditation',sessionId:id,createdAt:new Date().toISOString()});
  save();toast(`${prettyNum(minutes)} session minutes saved`)
 }}else toast('Session shorter than five seconds; no time recorded.');checkpointSession();renderMeditation();renderToday();
}
function loadYouTubeAPI(){if(window.YT?.Player)return Promise.resolve();if(ytAPI)return ytAPI;ytAPI=new Promise((resolve,reject)=>{const t=setTimeout(()=>{ytAPI=null;reject(new Error('YouTube did not load. Use the YouTube link or an included offline sound.'))},12000);window.onYouTubeIframeAPIReady=()=>{clearTimeout(t);resolve()};let s=document.createElement('script');s.src='https://www.youtube.com/iframe_api';s.onerror=()=>{clearTimeout(t);ytAPI=null;reject(new Error('YouTube is unavailable on this connection.'))};document.head.append(s)});return ytAPI}
async function prepareYouTube(track,request){
 if(PB.prepared===track.id&&ytPlayer)return;
 await loadYouTubeAPI();if(request!==PB.generation||track.id!==PB.trackId)return;if(ytPlayer){try{ytPlayer.destroy()}catch{}ytPlayer=null}
 $('dockVideo').innerHTML='<div id="youtubeMount"></div>';PB.prepared=track.id;
 return new Promise((resolve,reject)=>{
  let t=setTimeout(()=>reject(new Error('The video player did not become ready. Try the Open on YouTube link.')),14000);
  ytPlayer=new YT.Player('youtubeMount',{host:'https://www.youtube-nocookie.com',width:'100%',height:202,videoId:track.videoId,playerVars:{playsinline:1,controls:1,loop:PB.loop?1:0,playlist:track.videoId,origin:location.origin},events:{
   onReady:()=>{clearTimeout(t);applyStoredRate();renderSpeedControls();resolve()},
   onPlaybackRateChange:event=>{if(currentTrack().kind==='youtube'){rememberRate(PB.trackId,event.data);renderSpeedControls()}},
   onStateChange:event=>{
    if(PB.trackId!==track.id)return;
    if(event.data===1){if(document.hidden||document.querySelector('.modal.open,.setup.open')){pauseMeditation('Paused · player not visible');return}startClock()}
    else if(event.data===2){if(PB.running)pauseClock('Paused')}
    else if(event.data===0){if(PB.loop&&!PB.finished&&!document.hidden){try{ytPlayer.seekTo(0,true);ytPlayer.playVideo()}catch{}}else pauseClock('Video ended · session paused')}
   },
   onError:event=>{clearTimeout(t);pauseClock('YouTube unavailable');$('youtubeStatus').textContent='This video cannot play here (code '+event.data+'). It may restrict embedding, age or region. Use its Open on YouTube link in the audio library, or choose a local file.';reject(new Error('This video could not be embedded. Try opening it on YouTube.'))}
  }})
 });
}
function configureMediaSession(track){if(!('mediaSession'in navigator))return;try{navigator.mediaSession.metadata=new MediaMetadata({title:track.title,artist:'Infinite Self',album:'Personal practice',artwork:[{src:new URL('infinite-self-icon-512-v3.png',location.href).href,sizes:'512x512',type:'image/png'}]});for(const [event,fn]of Object.entries({play:startMeditation,pause:pauseMeditation,stop:endMeditation}))try{navigator.mediaSession.setActionHandler(event,()=>fn())}catch{}navigator.mediaSession.playbackState=PB.running?'playing':'paused'}catch{}}
function handleVisibility(){
 flushJournal();
 if(document.hidden){stopDictation();if(currentTrack().kind==='youtube'&&PB.running)pauseMeditation('Paused · YouTube needs a visible player');checkpointSession()}
 else{if(currentTrack().kind==='soundcloud'&&scWidget)scWidget.isPaused(paused=>{if(paused&&PB.running&&currentTrack().kind==='soundcloud')pauseClock('Paused by player or device')});if(PB.running&&elapsedNow()>=PB.target)completeMeditation();renderDayBadge();updateTimerUI();if(currentTab==='today'){renderPriorities();renderToday()}}
}
// Compatibility adapters for any retained v2 controls (not used to start hidden audio).
function startSound(){return startMeditation()}function stopSound(){return pauseMeditation()}function youtubeCommand(cmd){if(ytPlayer&&typeof ytPlayer[cmd]==='function')ytPlayer[cmd]()}
// Elective setup updates existing records by stable IDs; it never recreates a
// logged commitment just because the app was renamed or the wizard was rerun.
function openSetup(){
 flushJournal();if(currentTrack().kind==='youtube'&&PB.running)pauseMeditation('Paused during setup');
 $('obName').value=state.profile.name||'';$('obJourney').value=state.profile.journeyName||'Infinite Self';
 const length=String(state.profile.durationDays||75);if(![...$('obDays').options].some(o=>o.value===length))$('obDays').add(new Option(length,length));$('obDays').value=length;
 $('obStart').value=state.profile.startDate||isoDate();$('obIntention').value=state.profile.guidingIntention||'';$('obMeditation').value=['chant','ocean','bells'].includes(state.profile.defaultMeditation)?state.profile.defaultMeditation:'chant';$('obWisdom').value=state.profile.defaultWisdom||'Spiritual';
 setupGoalIds=state.goals.slice(0,3).map(g=>g.id);renderSetupGoals();renderSetupCommitments();setupNext(1);$('setup').classList.add('open');
}
function renderSetupCommitments(){
 const foundations=[];for(const category of ['mental','physical']){const cs=state.commitments.filter(c=>c.category===category).slice(0,2),defaults=defaultCommitments.filter(c=>c.category===category);while(cs.length<2)cs.push({...defaults[cs.length],id:uid(),branches:[]});foundations.push(...cs)}setupCommitmentIds=foundations.map(c=>c.id);
 $('obCommitments').innerHTML=foundations.map((c,i)=>`<div class="onboard-commit"><div class="label">${i<2?'Mental':'Physical'} foundation</div><div class="field"><label for="obCName${i}">Name</label><input id="obCName${i}" value="${esc(c.name)}"></div><div class="row"><div class="field"><label for="obCMetric${i}">Measure</label><select id="obCMetric${i}">${['minutes','sessions','pages','steps','items','check'].map(m=>`<option ${m===c.metric?'selected':''}>${m}</option>`).join('')}</select></div><div class="field"><label for="obCTarget${i}">Target each day</label><input id="obCTarget${i}" type="number" min="0.1" step="any" value="${c.target}"></div><div class="field"><label for="obCFreq${i}">Target days/week</label><input id="obCFreq${i}" type="number" min="1" max="7" value="${c.frequency}"></div></div></div>`).join('');
}
function finishSetup(){
 const replacements=[];for(let i=0;i<4;i++){const name=$('obCName'+i).value.trim(),target=Number($('obCTarget'+i).value),frequency=Number($('obCFreq'+i).value);if(!name||!(target>0)||!Number.isInteger(frequency)||frequency<1||frequency>7){setupNext(3);return toast('Each commitment needs a name, positive target and 1–7 target days.')}const metric=$('obCMetric'+i).value,old=state.commitments.find(c=>c.id===setupCommitmentIds[i]);replacements.push({...old,id:setupCommitmentIds[i],name,category:i<2?'mental':'physical',target:metric==='check'?1:target,frequency,metric,note:old?.note||'',branches:old?.branches||[]})}
 if(!validDate($('obStart').value)){setupNext(1);return toast('Choose a valid start date.')}
 state.profile={...state.profile,name:$('obName').value.trim(),journeyName:$('obJourney').value.trim()||'Infinite Self',durationDays:Number($('obDays').value)||75,startDate:$('obStart').value,guidingIntention:$('obIntention').value.trim(),defaultMeditation:$('obMeditation').value,defaultWisdom:$('obWisdom').value,onboardingStatus:'completed',onboardingCompletedAt:new Date().toISOString()};
 const others=state.commitments.filter(c=>!setupCommitmentIds.includes(c.id));state.commitments=[...replacements,...others];
 for(let i=0;i<3;i++){const title=$('obGoal'+i).value.trim();if(!title)continue;const old=state.goals.find(g=>g.id===setupGoalIds[i]);const goal={...old,id:old?.id||uid(),title,why:$('obGoalWhy'+i).value.trim(),targetDate:$('obGoalDate'+i).value,milestones:old?.milestones||[],linkedCommitmentIds:old?.linkedCommitmentIds||[]};if(old)state.goals=state.goals.map(g=>g.id===goal.id?goal:g);else state.goals.push(goal)}
 wisdomCategory=state.profile.defaultWisdom;if(!PB.running&&PB.elapsed===0){PB.trackId=state.profile.defaultMeditation;selectedModule=PB.trackId;PB.prepared=''}save();$('setup').classList.remove('open');renderAll();toast('Your practice is ready.');
}
// Private backups include optional binary media. A restore validates first,
// asks for confirmation, then replaces records; no automatic data loss on update.
function blobDataURL(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.readAsDataURL(blob)})}
async function exportJSON(){
 flushJournal();$('backupStatus').textContent='Preparing full private backup…';
 try{const items=await dbAll();const total=items.reduce((n,m)=>n+m.blob.size,0);if(total>180*1024*1024)throw new Error('The media collection is over 180 MB. Save individual originals and use a records-only backup.');const media=[];for(const item of items){const {blob,...meta}=item;media.push({...meta,data:await blobDataURL(blob)})}download('infinite-self-full-backup-'+isoDate()+'.json','application/json',JSON.stringify({format:'infinite-self-backup',version:3,appVersion:APP_VERSION,exportedAt:new Date().toISOString(),state,media},null,2));noteBackupPrepared('Full backup');$('backupStatus').textContent=`Full backup prepared: records and ${media.length} personal media files. It contains private, unencrypted information.`}
 catch(e){$('backupStatus').textContent='Full backup could not be prepared: '+e.message+' A records-only backup is still available.'}
}
function exportRecords(){flushJournal();download('infinite-self-records-'+isoDate()+'.json','application/json',JSON.stringify(state,null,2));noteBackupPrepared('Records backup');$('backupStatus').textContent='Records backup prepared. This does not include personal photo/audio files; keep those separately.'}
function decodeMediaBackup(item){
 if(!item||!safeId(item.id)||!['photo','audio'].includes(item.kind)||typeof item.data!=='string')throw new Error('Invalid media record');
 const match=item.data.match(/^data:([\w.+-]+\/[\w.+-]+);base64,([A-Za-z0-9+/=\r\n]+)$/);if(!match)throw new Error('Invalid embedded media');
 const mime=match[1];if(item.kind==='photo'&&!['image/jpeg','image/png','image/webp'].includes(mime))throw new Error('Unsupported photo type');if(item.kind==='audio'&&!mime.startsWith('audio/')&&mime!=='application/octet-stream')throw new Error('Unsupported audio type');
 const bytes=atob(match[2]);if(bytes.length>42*1024*1024)throw new Error('One media item exceeds 42 MB');const a=new Uint8Array(bytes.length);for(let i=0;i<bytes.length;i++)a[i]=bytes.charCodeAt(i);return {id:item.id,kind:item.kind,title:String(item.title||'Saved media'),alt:String(item.alt||''),category:String(item.category||'My uploads'),createdAt:item.createdAt||new Date().toISOString(),blob:new Blob([a],{type:mime})};
}
async function restoreBackup(file){
 if(!file)return;if(PB.running)return toast('Pause your session before restoring a backup.');if(file.size>260*1024*1024)return toast('This backup is too large to restore in the browser.');
 try{
  const raw=JSON.parse(await file.text());const data=raw.format==='infinite-self-backup'?raw.state:raw;if(!data||!Array.isArray(data.commitments)||!data.profile)throw new Error('This is not an Infinite Self / Spectacular Spirit Journal backup');
  const candidate=normaliseState(data);const media=raw.format==='infinite-self-backup'?(Array.isArray(raw.media)?raw.media.map(decodeMediaBackup):null):null;
  if(!confirm(`Restore ${candidate.commitments.length} commitments and ${Object.keys(candidate.journal).length} dated journal records? This replaces the current records${media?' and personal media':''}. Export a backup first if you need the current version.`))return;
  flushJournal();const oldRaw=localStorage.getItem(KEY);try{localStorage.setItem(KEY+'-before-restore',oldRaw||'{}')}catch{}
  const oldState=state;state=candidate;storageBlocked=false;
  if(!save()){state=oldState;throw new Error('There is not enough local storage to save this backup')}
  if(media){try{await dbReplace(media)}catch(e){state=oldState;save();throw new Error('Media restore failed; the previous records were restored')}}
  try{personalMedia=await dbAll()}catch{personalMedia=[]}mediaURLs.forEach(u=>URL.revokeObjectURL(u));mediaURLs.clear();$('storageAlert').classList.add('hidden');journalDirty=false;journalDay=isoDate();PB.elapsed=0;PB.running=false;PB.finished=false;PB.dockVisible=false;stopMedia();PB.prepared='';PB.trackId=state.profile.defaultMeditation||'chant';applyAppearance();renderAll();renderGallery();$('backupStatus').textContent='Backup restored on this device.';toast('Backup restored');
 }catch(e){$('backupStatus').textContent='No restore completed: '+e.message;toast('The backup could not be restored. See Help for details.')}
}
function exportCSV(){flushJournal();const rows=[['date','type','commitment','branch','value','unit_or_label']];for(const l of state.logs){const c=state.commitments.find(c=>c.id===l.commitmentId),b=c?.branches.find(b=>b.id===l.branchId);rows.push([l.date,'activity',c?.name||'[legacy / removed commitment]',b?.name||'',l.value,(b||c)?.metric||''])}for(const m of state.meditations)rows.push([m.date,'meditation session','','',m.minutes,m.title||m.module]);for(const [date,j]of Object.entries(state.journal))if(hasJournalContent(j))rows.push([date,'journal (metadata only)','','',j.state,j.tags||'']);const encode=v=>{let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'};download('infinite-self-activity-'+isoDate()+'.csv','text/csv;charset=utf-8','\ufeff'+rows.map(r=>r.map(encode).join(',')).join('\r\n'))}
async function resetAll(){if(!confirm('Erase Infinite Self records AND your personal gallery/audio from this browser? Export a full backup first. This cannot be undone.'))return;pauseMeditation();try{await dbReplace([]);localStorage.removeItem(KEY);localStorage.removeItem(KEY+'-before-v3');localStorage.removeItem(KEY+'-before-restore');sessionStorage.removeItem('infinite-self-session-v3');location.reload()}catch{toast('Could not erase all local data. Browser storage may be blocked.')}}
function registerSW(){
 if(!('serviceWorker'in navigator)||!location.protocol.startsWith('http'))return;
 navigator.serviceWorker.register('service-worker.js',{updateViaCache:'none'}).then(reg=>{swRegistration=reg;if(reg.waiting)$('updateNotice').classList.remove('hidden');reg.addEventListener('updatefound',()=>{const worker=reg.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)$('updateNotice').classList.remove('hidden')})});reg.update().catch(()=>{})}).catch(()=>{console.info('Offline caching is unavailable in this browser session.')});
}
function applyAppUpdate(){flushJournal();if(PB.running&&!confirm('Refresh the app now? Your session will pause.'))return;pauseMeditation();checkpointSession();if(swRegistration?.waiting){navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload(),{once:true});swRegistration.waiting.postMessage({type:'SKIP_WAITING'})}else location.reload()}
const FAQS=[
 ['What changed in Infinite Self v3?', 'The app is renamed, photographs are text-free, Today has clearer activity cards and gauges, Journal supports dictation and date-aware autosave, Wisdom has an in-place journal composer, and Gallery stores personal uploads. One persistent player keeps a session intact across app tabs.'],
 ['Where should I start?', 'Use the optional setup button above, or skip it. Set your name and journey, keep two mental plus two physical commitments, add optional goals, then use My 3 and log your activity. You can edit everything later in Settings, Commitments and Goals.'],
 ['Will my old journal and goals remain after this update?', 'This build retains the existing spectacularSpiritJournalV1 storage key and reads the old record format. Keep the same GitHub Pages origin and use the same browser or installed app. Export a backup before updating, changing sites or removing an installed shortcut. Private/incognito sessions and different browsers have separate storage.'],
 ['How do I dictate?', 'Choose Dictate beside a journal field or inside Carry to Journal, allow microphone access, speak, and choose Stop. Always review the result. In-app recognition is browser-dependent and may use your browser/device provider’s online speech service. Infinite Self does not save microphone recordings. If the button is unavailable or permission is denied, use the microphone on your phone keyboard or type.'],
 ['Can I write while listening?', 'Yes. Typing and moving between Infinite Self tabs keep the same session alive. Dictation intentionally pauses audio so the microphone does not transcribe the speaker. After dictation, tap Play to resume. Native keyboard dictation may also interrupt media according to your device settings.'],
 ['Will the YouTube chant keep playing after I switch apps?', 'No hidden/background YouTube player is provided. The video remains visible in a persistent player while you move between pages of Infinite Self. When the app is hidden or a dialog covers the player, YouTube pauses. This follows YouTube’s embedded-player policies. Use the Open on YouTube link to use whatever playback your YouTube account and app support.'],
 ['What can continue when I switch apps or lock the phone?', 'The included Ocean Breath and Soft Bell audio files and your own uploaded audio use one HTML audio player, with device media-session controls where available. This supports background playback on compatible devices; it cannot guarantee playback through every operating-system suspension, call or low-power condition. Test your actual phone. The YouTube reference recording is not copied into a local audio file.'],
 ['How does the timer behave if the phone sleeps?', 'The app uses elapsed wall-clock time between start and pause, not a count of browser timer ticks. It reconciles on return. If the operating system suspends JavaScript, a stop at the target can be delayed. The displayed session duration is a practice timer, not proof that audio played throughout. Refreshing restores an interrupted session as paused, requiring a fresh Play action.'],
 ['How do I add a chant or other clip?', 'In Meditation, choose Add YouTube link, provide a title and paste a link to one video. The link is saved on this device. A video may disallow embedding or need an internet connection, age verification or regional access. For local playback, choose Add your own audio file and use a recording you own or have permission to use (up to 40 MB).'],
 ['How does Carry to Journal work now?', 'On Wisdom, choose Carry to Journal under a reading. The composer opens on that same page. Pick Morning, Freeform or Evening, choose the date, then type or dictate your response. Save to Journal appends the reading prompt and your response without replacing existing writing. Closing the composer retains its draft on this device.'],
 ['How do I add or change photographs?', 'Open Gallery and Add photos. JPEG, PNG and WebP are supported, up to 20 MB per original and 80 personal photographs. The app resizes them to at most 1600 pixels on the long side and stores a JPEG copy. Keep your originals. Tap any photo to view it uncropped, favourite it, or use it on a specific page. Personal uploads are never put in your GitHub repository.'],
 ['What do the Today gauges mean?', 'The parent gauge is coverage of the full Monday–Sunday target, averaged across its branches. A target day is counted only when its amount target is reached. Logging double the amount on one day does not create two target days. Daily bars show activity amounts, not a missed-day penalty. Targets and prior daily coverage use your current configuration.'],
 ['How can I correct an activity entry?', 'Under Today’s commitment cards, open Recent entries and remove the incorrect log, then enter the corrected amount. Done/not-done activities can be toggled. Journal entries can be opened by date and edited in full.'],
 ['Are Goals different from Commitments?', 'A goal is a specific outcome with a target date and optional milestones. Commitments are recurring practices. Link practices to a goal, then mark milestones when achieved. Milestone progress is not automatically treated as success of the entire goal.'],
 ['How do I back up or move to another device?', 'Use Full backup below to include records and personal photos/audio. Restore that JSON file in the new browser using Restore backup. A records-only backup is smaller but excludes personal media. Backups contain private, unencrypted journal text; do not put them in your public repository or share them as the app package.'],
 ['Does local storage mean encrypted or guaranteed forever?', 'No. Records use localStorage and personal media use IndexedDB in this browser. Anyone with access to the browser/device may access them, and clearing site data, storage eviction or private browsing can remove them. Ask browser to retain my data in Gallery may help but is not guaranteed. Keep backups. Loading YouTube and external links contacts those third parties; dictation may use a provider service.'],
 ['Why is my home-screen name or icon still old?', 'The package includes the Infinite Self name and a fresh photographic icon, but existing installed shortcuts may keep their prior icon or name. First back up your data and verify ASSET_CHECK on the deployed site. Do not clear site data. After confirming the app works, re-add the shortcut only if needed, with a backup ready to restore.'],
 ['Why are some Wisdom buttons search links?', 'The existing library includes original short reflections and a mix of direct talks and YouTube searches. Search buttons are labelled as searches; they are not represented as individually verified video recommendations. You may add your own direct resources in any category.'],
 ['Where are the technical references?', 'The repository includes TECHNICAL_NOTES.md with official documentation for YouTube visibility rules, browser dictation, local storage, media-session controls and GitHub deployment, plus a test record describing what was and was not verified.']
];
function renderFAQs(){$('faqList').innerHTML='<h3>Frequently asked questions</h3>'+FAQS.map(([q,a])=>`<details><summary>${esc(q)}</summary><div>${esc(a)}</div></details>`).join('')}

/* v3.1 refinements. All preferences and personal media stay in the existing stores. */
const SOUNDCLOUD_CHANT_URL='https://soundcloud.com/nichirenletters/nam-myoho-renge-kyo-1-hour-daimoku-namu-myoho-renge-kyo-chanting';
const PALETTES={
 ocean:{name:'Ocean blue',background:'#f2f7fa',surface:'#ffffff',accent:'#155982'},
 sea:{name:'Sea glass',background:'#e7f2ef',surface:'#fafffd',accent:'#176250'},
 sand:{name:'Warm sand',background:'#f4ede0',surface:'#fffcf5',accent:'#78541c'},
 lavender:{name:'Lavender',background:'#f0ecf8',surface:'#fdfbff',accent:'#64458a'},
 night:{name:'Midnight',background:'#102231',surface:'#1c3545',accent:'#a6d9f2'}
};
const validColour=v=>typeof v==='string'&&/^#[0-9a-f]{6}$/i.test(v);
function normalisePreferences(input){
 const p=input&&typeof input==='object'&&!Array.isArray(input)?input:{};
 const a=p.appearance&&typeof p.appearance==='object'?p.appearance:{};
 const preset=Object.hasOwn(PALETTES,a.preset)?a.preset:a.preset==='custom'?'custom':'ocean';
 const fallback=PALETTES[preset]||PALETTES.ocean;
 const appearance={preset,background:validColour(a.background)?a.background:fallback.background,surface:validColour(a.surface)?a.surface:fallback.surface,accent:validColour(a.accent)?a.accent:fallback.accent,fontScale:Math.max(.9,Math.min(1.5,finiteValue(a.fontScale,1)))};
 const audioRates={};if(p.audioRates&&typeof p.audioRates==='object')for(const [k,v]of Object.entries(p.audioRates)){if(safeId(k)&&Number.isFinite(Number(v)))audioRates[k]=Math.min(2,Math.max(.5,Number(v)))}
 return {...p,appearance,audioRates};
}
function rgb(hex){return [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16))}
function luminance(hex){const c=rgb(hex).map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function contrast(a,b){const aa=luminance(a),bb=luminance(b);return (Math.max(aa,bb)+.05)/(Math.min(aa,bb)+.05)}
function mixColour(a,b,t){return '#'+rgb(a).map((v,i)=>Math.round(v*(1-t)+rgb(b)[i]*t).toString(16).padStart(2,'0')).join('')}
function readableText(bg){return contrast(bg,'#173a50')>=4.5?'#173a50':contrast(bg,'#ffffff')>=4.5?'#ffffff':'#111111'}
function subduedText(bg,fg){const mixed=mixColour(bg,fg,.72);return contrast(bg,mixed)>=4.5?mixed:fg}
function applyAppearance(){
 if(!state)return;state.preferences=normalisePreferences(state.preferences);
 const a=state.preferences.appearance,root=document.documentElement,ink=readableText(a.surface),pageInk=readableText(a.background);
 let accent=a.accent;if(contrast(a.surface,accent)<4.5)accent=ink;
 const alt=mixColour(a.surface,ink,.055),line=mixColour(a.surface,ink,.25);
 const props={'--font-scale':a.fontScale,'--page-bg':a.background,'--surface':a.surface,'--surface-alt':alt,'--ink':ink,'--muted':subduedText(a.surface,ink),'--page-ink':pageInk,'--page-muted':subduedText(a.background,pageInk),'--line':line,'--accent':accent,'--accent-color':accent,'--accent-text':readableText(accent),'--deep':accent,'--ocean':accent,'--physical-accent':contrast(a.surface,'#226657')>=4.5?'#226657':ink};
 for(const [key,value]of Object.entries(props))root.style.setProperty(key,String(value));
 root.style.colorScheme=luminance(a.surface)<.179?'dark':'light';
 document.querySelector('meta[name="theme-color"]')?.setAttribute('content',a.background);
 renderAppearanceControls();refreshWritingFields();
}
function renderAppearanceControls(){
 if(!$('palettePresets')||!state.preferences)return;const a=state.preferences.appearance;
 $('palettePresets').innerHTML=Object.entries(PALETTES).map(([id,p])=>`<button class="palette-choice" onclick="selectPalette('${id}')" aria-pressed="${id===a.preset}"><span class="palette-dot" aria-hidden="true" style="--swatch:${p.background}"></span>${p.name}</button>`).join('');
 $('pageColor').value=a.background;$('cardColor').value=a.surface;$('pageColorValue').textContent=a.background.toUpperCase();$('cardColorValue').textContent=a.surface.toUpperCase();$('fontScale').value=Math.round(a.fontScale*100);$('fontScaleValue').textContent=Math.round(a.fontScale*100)+'%';
}
function selectPalette(id){if(!Object.hasOwn(PALETTES,id))return;const p=PALETTES[id];state.preferences.appearance={...state.preferences.appearance,preset:id,background:p.background,surface:p.surface,accent:p.accent};applyAppearance();if(save())$('appearanceStatus').textContent=p.name+' saved on this browser. Text colours adjust for contrast.'}
function customiseColour(key,value){if(!['background','surface'].includes(key)||!validColour(value))return;state.preferences.appearance[key]=value;state.preferences.appearance.preset='custom';applyAppearance();if(save())$('appearanceStatus').textContent='Custom colours saved. Text colours adjust for readable contrast.'}
function setFontScale(value){const scale=Math.max(.9,Math.min(1.5,Math.round(Number(value)/5)*5/100));if(!Number.isFinite(scale))return;state.preferences.appearance.fontScale=scale;applyAppearance();if(save())$('appearanceStatus').textContent='Text size '+Math.round(scale*100)+'% saved on this browser.'}
function resetAppearance(){state.preferences.appearance={...PALETTES.ocean,preset:'ocean',fontScale:1};applyAppearance();save();$('appearanceStatus').textContent='Default Ocean blue and 100% text restored. Your entries and photographs have not changed.'}
function renderSettings(){
 if(!$('settingsIntention'))return;$('settingsIntention').value=state.profile.guidingIntention||'';
 const tracks=allTracks(),selected=state.profile.defaultMeditation||'chant';
 $('settingsMeditation').innerHTML=tracks.map(t=>`<option value="${esc(t.id)}" ${t.id===selected?'selected':''}>${esc(t.title)}</option>`).join('');
 $('settingsWisdom').innerHTML=wisdomCategories.map(c=>`<option ${c===state.profile.defaultWisdom?'selected':''}>${esc(c)}</option>`).join('');
 renderAppearanceControls();renderBackupSummary();refreshWritingFields();
}
function saveGuidingIntention(){state.profile.guidingIntention=$('settingsIntention').value;const ok=save();$('settingsStatus').textContent=ok?'Guiding Intention saved on this device.':'Not saved — please export a backup.';renderIntention();if(currentTab==='today')updateHero()}
function editGuidingIntention(){showTab('settings');requestAnimationFrame(()=>{$('settingsIntention').focus({preventScroll:true});followWriting($('settingsIntention'),true)})}
function openDataSettings(){showTab('settings');requestAnimationFrame(()=>$('backupSection').scrollIntoView({block:'start',behavior:'auto'}))}
function renderBackupSummary(){
 if(!$('backupSummary'))return;const n=Object.values(state.journal).filter(hasJournalContent).length;
 $('backupSummary').textContent=`${n} journal dates · ${state.commitments.length} commitments · ${state.goals.length} goals · ${personalMedia.filter(p=>p.kind==='photo').length} personal photos · ${personalMedia.filter(p=>p.kind==='audio').length} personal audio files.`;
 $('lastBackupNote').textContent=state.preferences.lastBackupPreparedAt?'Last backup prepared: '+new Date(state.preferences.lastBackupPreparedAt).toLocaleString()+'. Confirm you saved the downloaded file.':'No backup has been prepared in this version yet. Downloads are not cloud sync.';
}
function noteBackupPrepared(kind){state.preferences.lastBackupPreparedAt=new Date().toISOString();state.preferences.lastBackupKind=kind;save();renderBackupSummary()}
function readableJournal(){
 flushJournal();const lines=['Infinite Self — private journal export','Prepared: '+new Date().toLocaleString(),'Name: '+(state.profile.name||''),'Journey: '+state.profile.journeyName,'Guiding Intention: '+(state.profile.guidingIntention||''),''];
 for(const [d,j]of Object.entries(state.journal).filter(([d,j])=>hasJournalContent(j)).sort((a,b)=>a[0].localeCompare(b[0]))){lines.push('────────────────────────────────',d,'State / energy: '+(j.state||'—')+'/10','Tags: '+(j.tags||''),'');for(const [key,label]of [['morning','Morning intention'],['freeform','Freeform journal'],['evening','Evening reflection']])if(j[key])lines.push(label,j[key],'')}
 return lines.join('\n');
}
function exportJournalText(){download('infinite-self-journal-'+isoDate()+'.txt','text/plain;charset=utf-8',readableJournal());$('backupStatus').textContent='Readable journal text prepared. It includes private writing, but it is not a restorable app backup.'}
function printJournal(){
 const text=readableJournal(),win=window.open('','_blank');if(!win)return toast('Allow a popup for printing, or use Export journal text.');
 win.opener=null;win.document.open();win.document.write('<!doctype html><html lang="en"><meta charset="utf-8"><title>Infinite Self — Journal</title><style>body{font-family:Georgia,serif;max-width:780px;margin:40px auto;padding:0 20px;color:#182f41}pre{font-family:inherit;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12pt;line-height:1.6}button{padding:12px;font:inherit}@media print{button{display:none}body{margin:0}pre{font-size:11pt}}</style><button onclick="window.print()">Print / save as PDF</button><pre>'+esc(text)+'</pre></html>');win.document.close();
 $('backupStatus').textContent='A private printable journal is open. Use your browser’s Print dialog to save a PDF. This is not a restorable backup.';
}
// Only full public track URLs are accepted. No credentials, scraper, MP3 extraction or API key.
function parseSoundCloud(value){try{const u=new URL(String(value).trim());const parts=u.pathname.split('/').filter(Boolean);if(!['https:','http:'].includes(u.protocol)||u.username||u.password||!['soundcloud.com','www.soundcloud.com','m.soundcloud.com'].includes(u.hostname.toLowerCase())||parts.length!==2||['sets','discover','search','you','stream','stations'].includes(parts[0])||parts[1]==='sets')return null;return 'https://soundcloud.com/'+parts.map(p=>encodeURIComponent(decodeURIComponent(p))).join('/')}catch{return null}}
let scAPI=null,scWidget=null,scFrame=null,scReady=false,scTrackId='',scPauseGuard=0;
function pauseSoundCloud(){scPauseGuard=Date.now()+350;if(scWidget)try{scWidget.pause()}catch{}}
function loadSoundCloudAPI(){
 if(window.SC?.Widget)return Promise.resolve();if(scAPI)return scAPI;
 scAPI=new Promise((resolve,reject)=>{const script=document.createElement('script');let settled=false;const fail=()=>{if(settled)return;settled=true;clearTimeout(timeout);scAPI=null;script.remove();reject(new Error('SoundCloud could not load. Check the connection or open the recording on SoundCloud.'))};const timeout=setTimeout(fail,12000);script.src='https://w.soundcloud.com/player/api.js';script.onload=()=>{if(settled)return;if(!window.SC?.Widget){fail();return}settled=true;clearTimeout(timeout);resolve()};script.onerror=fail;document.head.append(script)});return scAPI;
}
async function prepareSoundCloud(track,request){
 if(scReady&&scWidget&&scTrackId===track.id){PB.prepared=track.id;return}
 await loadSoundCloudAPI();if(request!==PB.generation||PB.trackId!==track.id)return;
 if(scWidget){try{scWidget.pause();for(const e of Object.values(SC.Widget.Events))scWidget.unbind(e)}catch{}}
 scReady=false;scTrackId=track.id;scWidget=null;
 const frame=document.createElement('iframe');scFrame=frame;frame.title=track.title+' — SoundCloud';frame.width='100%';frame.height='166';frame.allow='autoplay';frame.setAttribute('scrolling','no');frame.referrerPolicy='strict-origin-when-cross-origin';
 const url=new URL('https://w.soundcloud.com/player/');url.search=new URLSearchParams({url:track.url,auto_play:'false',color:'#155982',show_artwork:'true',show_user:'true',show_comments:'false',visual:'false',single_active:'true'}).toString();frame.src=url.href;
 $('dockSoundCloud').replaceChildren(frame);
 $('soundcloudStatus').replaceChildren();const note=document.createTextNode('SoundCloud stream · normal speed. Tap its play button when prompted. '),link=document.createElement('a');link.href=track.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Open on SoundCloud ↗';$('soundcloudStatus').append(note,link);
 const widget=SC.Widget(frame);scWidget=widget;
 return new Promise((resolve,reject)=>{
  let settled=false;const active=()=>widget===scWidget&&PB.trackId===track.id;
  const failure=()=>{if(!active())return;if(!settled){settled=true;clearTimeout(t);reject(new Error('This SoundCloud track did not become ready. Try its Open on SoundCloud link.'))}pauseClock('SoundCloud unavailable');scReady=false;PB.prepared='';};
  const t=setTimeout(failure,18000);
  widget.bind(SC.Widget.Events.READY,()=>{if(!active())return;if(!settled){settled=true;clearTimeout(t);scReady=true;PB.prepared=track.id;renderSpeedControls();resolve()}});
  widget.bind(SC.Widget.Events.PLAY,()=>{if(!active())return;if(Date.now()<scPauseGuard||PB.finished||activeDictation){widget.pause();return}startClock()});
  widget.bind(SC.Widget.Events.PAUSE,()=>{if(active()&&PB.running)pauseClock('Paused')});
  widget.bind(SC.Widget.Events.PLAY_PROGRESS,()=>{if(active()&&PB.running&&elapsedNow()>=PB.target)completeMeditation()});
  widget.bind(SC.Widget.Events.FINISH,()=>{if(!active())return;if(PB.loop&&PB.running&&!PB.finished){widget.seekTo(0);widget.play()}else if(PB.running)pauseClock('Recording ended · session paused')});
  widget.bind(SC.Widget.Events.ERROR,failure);
 });
}
function storedPlaybackRate(track=currentTrack()){return track.kind==='soundcloud'?1:state.preferences.audioRates[track.id]||1}
function rememberRate(id,rate){const n=Number(rate);if(!Number.isFinite(n)||n<.5||n>2)return;state.preferences.audioRates[id]=n;save()}
function youtubeRates(){try{return (ytPlayer?.getAvailablePlaybackRates?.()||[]).filter(n=>n>=.5&&n<=2)}catch{return []}}
function applyStoredRate(){
 const t=currentTrack(),requested=storedPlaybackRate(t);
 if(t.kind==='audio'){const a=$('globalAudio');a.preservesPitch=true;a.playbackRate=requested;return requested}
 if(t.kind==='youtube'&&ytPlayer){const rates=youtubeRates();if(!rates.length)return 1;const chosen=rates.reduce((best,r)=>Math.abs(r-requested)<Math.abs(best-requested)?r:best,rates[0]);try{ytPlayer.setPlaybackRate(chosen)}catch{}return chosen}
 return 1;
}
function renderSpeedControls(){
 if(!$('speedPanel'))return;const t=currentTrack(),sc=t.kind==='soundcloud',yt=t.kind==='youtube',rates=yt?youtubeRates():[];
 const notReady=yt&&(!ytPlayer||PB.prepared!==t.id||!rates.length),rate=sc?1:storedPlaybackRate(t),disabled=sc||notReady;
 $('playbackSpeed').disabled=disabled;$('playbackSpeed').value=rate;$('speedValue').textContent=prettyNum(rate)+'×';
 const presets=yt&&rates.length?rates:[.5,.75,1,1.25,1.5,2];$('ratePresets').innerHTML=presets.map(n=>`<button class="btn ghost small" ${disabled?'disabled':''} onclick="setPlaybackSpeed(${n})" aria-pressed="${n===rate}">${prettyNum(n)}×</button>`).join('');
 $('speedHelp').textContent=sc?'SoundCloud’s embedded player does not expose playback-speed controls. This stream stays at 1×. For slower/faster chanting, import an audio copy you own or are permitted to use, or use supported rates on the YouTube option.':notReady?'Start the YouTube recording to load its supported speeds. The options shown will then reflect the rates offered by that player.':yt?'The available rates come from this YouTube video. The nearest supported rate is used.':'Adjust from 0.5× to 2×. Pitch is preserved where supported. The choice is remembered for this recording.';
}
function setPlaybackSpeed(value){
 const t=currentTrack();if(t.kind==='soundcloud'){renderSpeedControls();return toast('SoundCloud embedding is fixed at normal speed.')}
 let rate=Math.max(.5,Math.min(2,Number(value)));if(!Number.isFinite(rate))return;
 if(t.kind==='youtube'){const rates=youtubeRates();if(!rates.length)return toast('Start the YouTube recording first.');rate=rates.reduce((best,n)=>Math.abs(n-rate)<Math.abs(best-rate)?n:best,rates[0]);try{ytPlayer.setPlaybackRate(rate)}catch{return toast('The YouTube player could not change speed.')}}
 else{$('globalAudio').preservesPitch=true;$('globalAudio').playbackRate=rate}
 rememberRate(t.id,rate);renderSpeedControls();
}
// Universal input following. Appending follows the new end; editing in the middle
// keeps the user's insertion point and does not force the caret to the end.
let writingFrame=0,writingObserver=null,caretMirror=null;
function writingInput(el){return el instanceof HTMLTextAreaElement||el instanceof HTMLInputElement&&['text','search','url','email','tel','password'].includes(el.type)}
function visualBounds(){const v=window.visualViewport;return {top:v?.offsetTop||0,height:v?.height||innerHeight,width:v?.width||innerWidth}}
function updateWritingViewport(){const v=visualBounds();document.documentElement.style.setProperty('--visible-height',v.height+'px');document.documentElement.style.setProperty('--visible-top',v.top+'px')}
function resizeWritingField(el){
 if(!(el instanceof HTMLTextAreaElement)||!el.offsetWidth)return;
 const oldScroll=el.scrollTop,v=visualBounds(),base=el.id==='journalFreeform'?150:116;
 const maxHeight=Math.max(116,Math.min(460,v.height*.50)),minHeight=Math.min(base,maxHeight);
 if(!el.classList.contains('writing-field'))el.classList.add('writing-field');el.style.height='auto';el.style.height=Math.max(minHeight,Math.min(el.scrollHeight+2,maxHeight))+'px';el.scrollTop=oldScroll;
}
function caretCoordinates(el){
 if(!(el instanceof HTMLTextAreaElement))return {top:6,height:parseFloat(getComputedStyle(el).lineHeight)||24};
 if(!caretMirror){caretMirror=document.createElement('div');caretMirror.setAttribute('aria-hidden','true');caretMirror.style.cssText='position:fixed;top:0;left:-99999px;visibility:hidden;pointer-events:none;white-space:pre-wrap;overflow-wrap:break-word;';document.body.append(caretMirror)}
 const css=getComputedStyle(el);
 for(const p of ['fontFamily','fontSize','fontWeight','fontStyle','letterSpacing','textTransform','textIndent','lineHeight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderStyle','boxSizing','wordBreak','overflowWrap','tabSize'])caretMirror.style[p]=css[p];
 // Use the text viewport width so wrapping matches even when there is a scrollbar.
 caretMirror.style.width=(el.clientWidth+parseFloat(css.borderLeftWidth)+parseFloat(css.borderRightWidth))+'px';caretMirror.style.height='auto';
 caretMirror.replaceChildren(document.createTextNode(el.value.slice(0,el.selectionEnd??el.value.length)));
 const marker=document.createElement('span');marker.textContent='\u200b';caretMirror.append(marker);const r=marker.getBoundingClientRect(),m=caretMirror.getBoundingClientRect();return {top:r.top-m.top,height:parseFloat(css.lineHeight)||r.height||24};
}
function followWriting(el,forceEnd=false){
 if(!writingInput(el)||!el.isConnected||!el.offsetWidth)return;
 if(forceEnd){try{el.setSelectionRange(el.value.length,el.value.length)}catch{}}
 resizeWritingField(el);
 const c=caretCoordinates(el);
 if(el instanceof HTMLTextAreaElement){const pad=8;if(c.top+c.height>el.scrollTop+el.clientHeight-pad)el.scrollTop=c.top+c.height-el.clientHeight+pad;else if(c.top<el.scrollTop+pad)el.scrollTop=Math.max(0,c.top-pad)}else if(forceEnd||el.selectionEnd===el.value.length)el.scrollLeft=el.scrollWidth;
 if(document.activeElement!==el)return;
 let rect=el.getBoundingClientRect(),caretTop=rect.top+c.top-el.scrollTop,caretBottom=caretTop+c.height;
 const v=visualBounds();let upper=v.top+16,lower=v.top+v.height-24;
 const sheet=el.closest('.sheet,.setup');if(sheet){const r=sheet.getBoundingClientRect();upper=Math.max(upper,r.top+14);lower=Math.min(lower,r.bottom-20)}
 else{const tabs=$('tabs')?.getBoundingClientRect();if(tabs&&tabs.top<=v.top+5&&tabs.bottom>v.top)upper=Math.max(upper,tabs.bottom+10)}
 const dock=$('mediaDock');if(dock&&!dock.classList.contains('hidden')&&getComputedStyle(dock).position==='fixed'){const r=dock.getBoundingClientRect();if(r.left<rect.right&&r.right>rect.left&&r.top>upper)lower=Math.min(lower,r.top-12)}
 const delta=caretBottom>lower?caretBottom-lower:caretTop<upper?caretTop-upper:0;
 if(Math.abs(delta)<2)return;
 let remaining=delta,parent=el.parentElement;
 while(parent&&parent!==document.body&&Math.abs(remaining)>1){const style=getComputedStyle(parent);if(/auto|scroll/.test(style.overflowY)&&parent.scrollHeight>parent.clientHeight){const before=parent.scrollTop;parent.scrollTop+=remaining;remaining-=parent.scrollTop-before}parent=parent.parentElement}
 if(Math.abs(remaining)>1)window.scrollBy({top:remaining,behavior:'instant'});
}
function refreshWritingFields(){if(typeof document==='undefined')return;requestAnimationFrame(()=>document.querySelectorAll('textarea').forEach(resizeWritingField))}
function scheduleFollow(el){cancelAnimationFrame(writingFrame);writingFrame=requestAnimationFrame(()=>followWriting(el,false))}
function initWritingFollow(){
 updateWritingViewport();refreshWritingFields();
 document.addEventListener('input',e=>{if(writingInput(e.target))scheduleFollow(e.target)});
 document.addEventListener('compositionend',e=>{if(writingInput(e.target))scheduleFollow(e.target)});
 document.addEventListener('focusin',e=>{if(writingInput(e.target)){document.body.classList.add('writing-focus');updateWritingViewport();scheduleFollow(e.target)}});
 document.addEventListener('focusout',()=>setTimeout(()=>{if(!writingInput(document.activeElement)&&!activeDictation)document.body.classList.remove('writing-focus')},80));
 window.visualViewport?.addEventListener('resize',()=>{updateWritingViewport();if(writingInput(document.activeElement))scheduleFollow(document.activeElement)});
 window.addEventListener('resize',()=>{updateWritingViewport();refreshWritingFields()});
 writingObserver=new MutationObserver(changes=>{if(changes.some(c=>c.type==='childList'||c.attributeName==='class'))refreshWritingFields()});
 // Covers dynamically added branches, goals, setup steps and composer fields, but
 // excludes every-tick media updates to avoid a self-triggering layout loop.
 for(const id of ['setup','branchEditors','milestoneEditors','composeModal','goalModal','commitModal','resourceModal'])if($(id))writingObserver.observe($(id),{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
}
FAQS.unshift(
 ['What is new in v3.1?', 'The supplied SoundCloud Daimoku is now a fourth included choice alongside YouTube, Ocean Breath and Soft Bell. Settings now holds the editable Guiding Intention, backup/restore and exports, custom background palettes and text size. Long typing and dictation follow the active insertion point.'],
 ['Can the SoundCloud chant play faster or slower?', 'Not through SoundCloud’s current embedded Widget API. Its speed controls are shown as unavailable at 1× instead of pretending to work. The app offers 0.5×–2× for included/local audio and the supported playback rates for YouTube. An audio file you own or have permission to use can be imported for variable-speed chanting.'],
 ['Will SoundCloud play while I journal or lock the screen?', 'The same SoundCloud iframe remains loaded across Infinite Self tabs, and the app does not deliberately pause SoundCloud on backgrounding. However, mobile browsers, operating systems, the connection and SoundCloud can still interrupt playback. Screen-lock playback is not guaranteed. The included files and your permitted local audio remain the best option for background use.'],
 ['Where can I edit Guiding Intention?', 'Open Settings → Journey & guiding intention, or tap Edit on the Today intention card. Type or dictate; the intention saves as you write. Use Save journey settings for the other profile fields.'],
 ['Where are backup, export and restore?', 'Open Settings → Backup, restore & export. Full JSON backup includes records, settings, saved links, personal photos and audio. Records-only JSON excludes photo/audio files. Restore accepts earlier app JSON backups. Activity CSV excludes journal text; the journal text and printable PDF options include it. Keep exports private and out of GitHub.'],
 ['How do I change colours or text size?', 'Settings → Appearance & reading comfort has Ocean blue, Sea glass, Warm sand, Lavender and Midnight. Page and card colour pickers allow custom choices. Text size ranges from 90% to 150%. Settings save locally and are included in backups; Reset appearance changes only these preferences. External streaming players keep their own styling.'],
 ['Why does a long text field scroll while I write?', 'Fields grow to a comfortable height, then scroll internally to keep the cursor visible. The page or open dialog follows the cursor above the keyboard where the browser exposes viewport information. Appending follows the new end; deliberately editing earlier text keeps that insertion point. During writing on a small screen the non-YouTube player moves into normal page flow so it does not cover your words.']
);

for(const faq of FAQS){
 if(faq[0]==='How do I add a chant or other clip?')faq[1]='In Meditation, choose Add audio link, provide a title and paste the full URL of a SoundCloud track or one YouTube video. Streaming needs internet and embedding permission. For offline/native playback and speed control, import an audio file you own or have permission to use, up to 40 MB.';
 if(faq[0]==='How do I back up or move to another device?')faq[1]='Open Settings → Backup, restore & export. Full backup includes records and personal photos/audio. Restore that JSON in the destination browser. Records-only JSON excludes personal media. Exported journal text and PDFs are readable copies, not restorable backups. Keep backups private and out of GitHub.';
 if(faq[0]==='Does local storage mean encrypted or guaranteed forever?')faq[1]='No. Records use localStorage; photos and local audio use IndexedDB. Clearing site data, storage eviction or private browsing can remove them. Anyone with access to this browser/device may access them. Make regular backups. SoundCloud and YouTube are loaded when you request their playback and contact those services; dictation may use your browser provider’s speech service.';
}

init();
