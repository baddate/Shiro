import{_ as m,j as e}from"./index-6FmyeDn-.js";import{I as a}from"./Gallery-1Z7uhXc0.js";import"./Divider-Rj8tNF9U.js";import"./helper-ABMQuD8K.js";import"./utils-hBEwYuQd.js";const s={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function p({id:t}){const{Tweet:r}=await m(()=>import("./index.client-C1DHMgBk.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:s})})}export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-C1DHMgBk.js","./index-6FmyeDn-.js","./index-uxB4I8Jc.css","./index-jQj_laaM.js","./helper-ABMQuD8K.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
