import{r as t,_ as x,j as s}from"./index-cgs_M3Jb.js";import{u as y}from"./Markdown-uFjg6uF9.js";import{u as w,F as k}from"./Gallery-P-GQ80dj.js";import"./helper-DD-oFgKI.js";import"./FloatPopover-bjSwtsv6.js";import"./spring-rk-u5Py4.js";import"./use-is-client-gBF7hOzm.js";import"./env-BxExNCru.js";import"./index-kPqkayvO.js";import"./motion-minimal-jjcnT9WL.js";import"./visual-element-zeFNOyZo.js";import"./LinkCard-8FArr-ni.js";import"./Divider-9lw5rYxW.js";import"./StyledButton-aoJeTl3E.js";import"./index-OVDJ2T7o.js";import"./owner-vyfPQpxo.js";import"./utils-LfVIt7js.js";import"./RichLink-N5TFicgM.js";import"./Collapse-GeJCiGiA.js";const J=n=>{const[E,m]=t.useState(!0),[v,a]=t.useState(""),[c,u]=t.useState(""),[_,l]=t.useState(),[h,p]=t.useState(),f=y();t.useEffect(()=>{x(()=>import("./mermaid.core-06z1G8k2.js").then(r=>r.b4),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async r=>{r.default.initialize({theme:f?"dark":"default"})})},[f]);const d=t.useId().split(":").join("");t.useEffect(()=>{if(!n.content)return;a(""),m(!0);let r=!1;x(()=>import("./mermaid.core-06z1G8k2.js").then(i=>i.b4),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async i=>{var g;const I=i.default;let o;try{o=await I.render(`mermaid-${d}`,n.content)}catch(e){(g=document.getElementById(`dmermaid-${d}`))==null||g.remove(),e instanceof Error&&a(e.message),u(""),l(void 0),p(void 0)}if(!r){if(o){u(o.svg);const e=o.svg.match(/viewBox="[^"]*\s([\d.]+)\s([\d.]+)"/);e!=null&&e[1]&&(e!=null&&e[2])&&(l(parseInt(e==null?void 0:e[1])),p(parseInt(e==null?void 0:e[2]))),a("")}return m(!1),()=>{r=!0}}})},[d,n.content]);const{w:S}=w(),b=new TextEncoder().encode(c),j=`data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(b)))}`;return E?s.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-slate-100 text-sm dark:bg-neutral-800",children:"Mermaid Loading..."}):c?s.jsx("div",{children:s.jsx(k,{containerWidth:S,src:j,width:_,height:h})}):s.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-red-100 text-sm",children:v||"Error"})};export{J as Mermaid};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./mermaid.core-06z1G8k2.js","./index-cgs_M3Jb.js","./index-9oQp3RRR.css","./owner-vyfPQpxo.js","./env-BxExNCru.js","./utils-LfVIt7js.js","./helper-DD-oFgKI.js","./StyledButton-aoJeTl3E.js","./index-OVDJ2T7o.js","./motion-minimal-jjcnT9WL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
