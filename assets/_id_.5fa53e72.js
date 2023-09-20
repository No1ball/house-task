import{_ as w}from"./nuxt-link.3a82cdfe.js";import{u as l,_ as y,a as E}from"./character.632e4493.js";import{n as p,r as S,v as x,g as U,o as u,c as m,a as o,x as _,b as r,w as B,y as I,_ as g,t as R,u as k}from"./entry.6afdb005.js";const N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAYAAAB4zEQNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACCSURBVHgBdVDJDYNADLT9yDsdBCpJtoQkBYRUxvLiw9EBKxrh6IAnr4URArSyxEiWR5oZ2zIRULo+rdrxRwpSu/6O/lq8t9ogbxNPQmTAB23gg2BC5IkcaMQiyef5yDgcow0SinPAsYLPZI7UbU+h/l8TW74StoOuhBNF01k8IiGFFaNXOtKs6LZxAAAAAElFTkSuQmCC",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB9SURBVHgB7ZDRCYAgFEWvNkmjuEGN0CS6T0gjuEILhLRB0HeWBkJJH5p/5fkQH3gu9wkUvohUMx+U5rHvaSgDRmxAg0hoKO/AWAEsNoA8yS2rl+iAHPlcwcAQPySZvoE7eqWF/QzuWqy2RZeygr+8DSHXIafJLUSqSaDwJw5EgEIXSMYY0AAAAABJRU5ErkJggg==",Q={class:"slider"},L=["src"],Y={class:"slider__center-block"},D=["src"],H=["src"],W=p({__name:"index",async setup(i){let s,n,e=S(0);const t=l(),a=t.episode;[s,n]=x(()=>t.getCharacterById(+a.characters[e.value].split("/").slice(-1))),await s,n();let c=t.actualChar.imageLink;U(async()=>{await t.getCharacterById(+a.characters[e.value].split("/").slice(-1)),c=t.actualChar.imageLink},[e.value,t.actualChar]);async function v(h){switch(h){case"prev":return e.value!==0?e.value-=1:e.value=a.characters.length-1;case"next":return e.value===a.characters.length-1?e.value=0:e.value+=1}}return(h,A)=>{const C=w;return u(),m("div",Q,[o("button",{onClick:A[0]||(A[0]=f=>v("prev"))},[o("img",{src:_(b),class:"button__left"},null,8,L)]),o("div",Y,[r(C,{to:"/character/"+ +_(a).characters[_(e)].split("/").slice(-1)},{default:B(()=>[o("img",I({src:_(c)},_(e)),null,16,D)]),_:1},8,["to"])]),o("button",{onClick:A[1]||(A[1]=f=>v("next"))},[o("img",{src:_(N),class:"button__right"},null,8,H)])])}}});const X=g(W,[["__scopeId","data-v-a98ebdf4"]]),J={class:"card-item"},$=p({__name:"index",props:{episode:{}},setup(i){const s=i;return l().setActiveEpisode(s.episode),(e,t)=>{const a=X,d=y,c=E;return u(),m("div",J,[r(d,null,{default:B(()=>[o("div",null,"Эпизод: "+R(s.episode.name),1),r(a)]),_:1}),r(c,{"first-text":s.episode.air_date,"first-title":"Дата выхода"},null,8,["first-text"])])}}});const T=g($,[["__scopeId","data-v-ad9a2df8"]]),V={class:"episode-card"},F=p({__name:"[id]",async setup(i){let s,n;const e=k(),t=l();return[s,n]=x(()=>t.getEpisodeById(+e.params.id)),await s,n(),(a,d)=>{const c=T;return u(),m("div",V,[r(c,{episode:_(t).episode},null,8,["episode"])])}}});const P=g(F,[["__scopeId","data-v-4e5029b7"]]);export{P as default};
