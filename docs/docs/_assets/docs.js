'use strict';
const docsRoot = new URL(document.documentElement.dataset.docsRoot, location.href);
const searchDialog = document.getElementById('search-dialog');
const menuDialog = document.getElementById('menu-dialog');
const input = document.getElementById('docs-search');
const results = document.getElementById('search-results');
const status = document.getElementById('search-status');
const suggestions = document.getElementById('search-suggestions');
let indexPromise;
let searchGeneration = 0;
function getIndex() {
  if (!indexPromise) indexPromise = fetch(new URL('_assets/search-index.json', docsRoot)).then(response => {
    if (!response.ok) throw Error('Search index unavailable');
    return response.json();
  }).then(data => {
    if (!Array.isArray(data)) throw Error('Invalid index');
    return data.map(item => ({...item, searchable:[item.title,item.summary,item.body,...item.keywords].join(' ').toLocaleLowerCase()}));
  }).catch(error => {indexPromise = undefined; throw error;});
  return indexPromise;
}
function openSearch() {
  if (menuDialog.open) menuDialog.close();
  if (!searchDialog.open) searchDialog.showModal();
  input.focus();
  getIndex().catch(() => {});
}
function highlight(node,text,tokens) {
  const query=tokens.filter(Boolean).sort((a,b)=>b.length-a.length).map(token=>token.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
  if (!query) {node.textContent=text;return;}
  const regex=new RegExp(query,'gi');let last=0;let match;
  while((match=regex.exec(text))){node.append(document.createTextNode(text.slice(last,match.index)));const mark=document.createElement('mark');mark.textContent=match[0];node.append(mark);last=match.index+match[0].length;}
  node.append(document.createTextNode(text.slice(last)));
}
async function runSearch() {
  const generation=++searchGeneration;
  const query=input.value.trim().toLocaleLowerCase().slice(0,160);
  results.replaceChildren(); suggestions.hidden=!!query;
  if(!query){status.textContent='Search guides, steps and terminology.';return;}
  status.textContent='Searching…';
  try {
    const data=await getIndex();if(generation!==searchGeneration)return;
    const tokens=query.split(/\s+/).filter(Boolean);
    const matches=data.filter(item=>tokens.every(token=>item.searchable.includes(token))).map(item=>({item,score:(item.title.toLowerCase().includes(query)?40:0)+tokens.reduce((sum,token)=>sum+(item.title.toLowerCase().includes(token)?12:0)+(item.keywords.join(' ').toLowerCase().includes(token)?8:0)+(item.headings.toLowerCase().includes(token)?4:0),0)})).sort((a,b)=>b.score-a.score).slice(0,10);
    status.textContent=matches.length?`${matches.length} ${matches.length===1?'guide':'guides'} found. Use the arrow keys to browse.`:'No guides found. Try a shorter phrase, a studio name or a file type such as GLB.';
    for(const {item} of matches){
      const link=document.createElement('a');link.className='search-result';link.href=new URL(item.url,docsRoot).href;
      const group=document.createElement('span');group.className='result-group';group.textContent=item.group+(item.version==='development'?' · Development 0.16.6':'');
      const title=document.createElement('strong');highlight(title,item.title,tokens);
      const excerpt=document.createElement('p');
      let snippet=item.summary;
      if(!tokens.some(token=>snippet.toLowerCase().includes(token))){const at=item.body.toLowerCase().indexOf(tokens[0]);if(at>=0){const start=Math.max(0,at-45);snippet=(start?'…':'')+item.body.slice(start,start+155)+'…';}}
      highlight(excerpt,snippet,tokens);link.append(group,title,excerpt);results.append(link);
    }
  }catch{if(generation===searchGeneration)status.textContent='Search could not load. Check your connection and try again, or use the guide menu.';}
}
document.querySelectorAll('[data-search]').forEach(button=>button.addEventListener('click',openSearch));
input.addEventListener('input',runSearch);
document.querySelectorAll('[data-query]').forEach(button=>button.addEventListener('click',()=>{input.value=button.dataset.query;input.focus();runSearch();}));
input.addEventListener('keydown',event=>{const links=[...results.querySelectorAll('a')];if((event.key==='ArrowDown'||event.key==='ArrowUp')&&links.length){event.preventDefault();links[event.key==='ArrowDown'?0:links.length-1].focus();}else if(event.key==='Enter'&&links.length){event.preventDefault();location.assign(links[0].href);}});
results.addEventListener('keydown',event=>{if(!['ArrowDown','ArrowUp'].includes(event.key))return;const links=[...results.querySelectorAll('a')];const current=links.indexOf(document.activeElement);if(current<0)return;event.preventDefault();const next=current+(event.key==='ArrowDown'?1:-1);if(next<0||next>=links.length)input.focus();else links[next].focus();});
document.addEventListener('keydown',event=>{const typing=event.target.closest('input,textarea,[contenteditable=true]');if((event.key.toLowerCase()==='k'&&(event.ctrlKey||event.metaKey))||(event.key==='/'&&!typing&&!searchDialog.open&&!menuDialog.open)){event.preventDefault();openSearch();}});
document.querySelector('.mobile-toggle').addEventListener('click',()=>menuDialog.showModal());
for(const dialog of [searchDialog,menuDialog]){
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
}
const themeButton=document.querySelector('.theme-toggle');
function syncTheme(){themeButton.setAttribute('aria-label',document.documentElement.dataset.theme==='dark'?'Use light theme':'Use dark theme');}
syncTheme();
themeButton.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('bbs-docs-theme',theme);}catch{}syncTheme();});
let toastTimer;
function toast(message){const output=document.getElementById('copy-status');output.textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>output.textContent='',3000);}
async function copy(text,success){try{await navigator.clipboard.writeText(text);toast(success);}catch{toast('Copy is unavailable here. Select the text and copy it manually.');}}
document.querySelector('.copy-page')?.addEventListener('click',()=>copy(location.href,'Guide link copied'));
document.querySelectorAll('pre').forEach(pre=>{const code=pre.querySelector('code');if(!code)return;const button=document.createElement('button');button.className='copy-code';button.textContent='Copy code';button.addEventListener('click',()=>copy(code.textContent,'Code copied'));pre.append(button);});
const toc=[...document.querySelectorAll('.on-page nav>a')];
if(toc.length){
 const headings=toc.map(link=>document.getElementById(decodeURIComponent(link.hash.slice(1)))).filter(Boolean);
 let scheduled=false;
 const update=()=>{scheduled=false;let active=headings[0]?.id;for(const heading of headings){if(heading.getBoundingClientRect().top<=175)active=heading.id;}toc.forEach(link=>{const current=link.hash==='#'+active;link.classList.toggle('active',current);if(current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});};
 addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update);}},{passive:true});update();
}
