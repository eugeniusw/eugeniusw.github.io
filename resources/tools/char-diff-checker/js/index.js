({574:function(){var e=(e,t,_)=>new Promise(((n,c)=>{var r=e=>{try{l(_.next(e))}catch(e){c(e)}},a=e=>{try{l(_.throw(e))}catch(e){c(e)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,a);l((_=_.apply(e,t)).next())}));document.addEventListener("DOMContentLoaded",(()=>e(this,null,(function*(){function t(e,t){const n=e.length,c=t.length,r=Array.from({length:n+1},(()=>Array(c+1).fill(0))),a=new Set;for(let _=1;_<=n;_++)for(let n=1;n<=c;n++)e[_-1]===t[n-1]?r[_][n]=r[_-1][n-1]+1:r[_][n]=Math.max(r[_-1][n],r[_][n-1]);let l=n,i=c;const d=[],s=[];for(;l>0&&i>0;)e[l-1]===t[i-1]?(d.unshift({type:"a_5",text:e[l-1],line:_(e.slice(0,l))}),s.unshift({type:"a_5",text:t[i-1],line:_(t.slice(0,i))}),l--,i--):r[l-1][i]>=r[l][i-1]?(d.unshift({type:"a_8",text:e[l-1],line:_(e.slice(0,l))}),a.add(_(e.slice(0,l))),l--):(s.unshift({type:"a_12",text:t[i-1],line:_(t.slice(0,i))}),a.add(_(t.slice(0,i))),i--);for(;l>0;)d.unshift({type:"a_8",text:e[l-1],line:_(e.slice(0,l))}),a.add(_(e.slice(0,l))),l--;for(;i>0;)s.unshift({type:"a_12",text:t[i-1],line:_(t.slice(0,i))}),a.add(_(t.slice(0,i))),i--;return[d,s,a]}function _(e){return(e.match(/\n/g)||[]).length+1}function n(e,t){let _="";return t.forEach((e=>{"\n"===e.text?_+=`<span class="a_17 ${e.type}">${r(e.text)}</span>`:_+=`<span class="a_39 ${e.type}">${r(e.text)}</span>`})),_}function c(e,t,_){const n=document.getElementById(_),c=e.split("\n");n.innerHTML=c.map(((e,_)=>{const n=_+1;return`<span class="a_38 ${t.has(n)?"a_9":""}">${n}</span>`})).join("")}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/\n/g,"<br>")}document.getElementById("a_20").addEventListener("click",(()=>e(this,null,(function*(){document.getElementById("a_429").style.display="flex",document.getElementById("a_88").style.display="none",yield new Promise((e=>setTimeout(e,80))),function(){const e=document.getElementById("a_96").value||document.getElementById("a_96").placeholder,_=document.getElementById("a_97").value||document.getElementById("a_97").placeholder,r=document.getElementById("a_6"),a=document.getElementById("a_7");r.innerHTML="",a.innerHTML="";const l=document.getElementById("a_4").value,[i,d,s]="by_line"===l?function(e,_){const n=e.split("\n"),c=_.split("\n"),r=n.map(((e,t)=>t<n.length-1?e+"\n":e)),a=c.map(((e,t)=>t<c.length-1?e+"\n":e)),l=[],i=[],d=[],s=r.length,h=a.length;let f=s,o=h;for(;f>0&&o>0;){const[e,_,n]=t(r[s-f],a[h-o]);l.push(e),i.push(_),d.push(n),f--,o--}for(;f>0;){const[e,_,n]=t(r[s-f],"");l.push(e),i.push(_),d.push(n),f--}for(;o>0;){const[e,_,n]=t("",a[h-o]);l.push(e),i.push(_),d.push(n),o--}const u=new Set;return d.map(((e,t)=>{[...e][0]>=0&&u.add(t+1)})),[l.flat(),i.flat(),u]}(e,_):t(e,_);r.innerHTML=n(0,i),a.innerHTML=n(0,d),c(e,s,"a_21"),c(_,s,"a_22")}(),document.getElementById("a_429").style.display="none",document.getElementById("a_88").style.display="grid"}))))}))))}})[574]();