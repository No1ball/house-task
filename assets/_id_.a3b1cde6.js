import{_ as h}from"./nuxt-link.3a82cdfe.js";import{_ as v,a as y,u as C}from"./character.632e4493.js";import{n as l,o as a,c as r,b as s,w as _,d as u,t as p,a as b,F as g,q as k,s as B,_ as x,u as w,v as N,x as I}from"./entry.6afdb005.js";const L={class:"card-item"},V=["src"],$=l({__name:"index",props:{item:{}},setup(i){const t=i;return(n,d)=>{const e=h,o=v,m=y;return a(),r("div",L,[s(o,null,{default:_(()=>[s(e,{to:"/character/"+t.item.id},{default:_(()=>[u(p(t.item.name),1)]),_:1},8,["to"]),b("img",{src:t.item.imageLink},null,8,V)]),_:1}),s(m,{"first-text":t.item.species,"first-title":"Разновидность","second-title":"Эпизоды","third-title":"Локация","third-text":t.item.location.name},{default:_(()=>[(a(!0),r(g,null,k(t.item.episodes,c=>(a(),B(e,{to:/episode/+c.split("/").slice(-1)},{default:_(()=>[u(p(c),1)]),_:2},1032,["to"]))),256))]),_:1},8,["first-text","third-text"])])}}});const F=x($,[["__scopeId","data-v-b83fbd06"]]),q={class:"character-card"},A=l({__name:"[id]",async setup(i){let t,n;const d=w(),e=C();[t,n]=N(()=>e.getCharacterById(+d.params.id)),await t,n();const o=e.actualChar;return(m,c)=>{const f=F;return a(),r("div",q,[s(f,{item:I(o)},null,8,["item"])])}}});const S=x(A,[["__scopeId","data-v-2b459a50"]]);export{S as default};
