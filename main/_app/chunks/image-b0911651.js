import{au as t}from"./vendor-83c23bd8.js";const e=new t;function n(t,e,n){const r=[t,e,n].map((t=>(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)));return.2126*r[0]+.7152*r[1]+.0722*r[2]}async function r(t){const r=t.naturalWidth/2,o=t.naturalHeight/2;return Promise.all([new Promise((n=>{e.getColorAsync(t,{width:r,height:o}).then((t=>{t&&"hex"in t&&n(t.hex)}))})),new Promise((n=>{e.getColorAsync(t,{width:r,height:o,left:r}).then((t=>{t&&"hex"in t&&n(t.hex)}))})),new Promise((n=>{e.getColorAsync(t,{width:r,height:o,top:o}).then((t=>{t&&"hex"in t&&n(t.hex)}))})),new Promise((n=>{e.getColorAsync(t,{width:r,height:o,left:r,top:o}).then((t=>{t&&"hex"in t&&n(t.hex)}))})),new Promise((n=>{e.getColorAsync(t).then((t=>{t&&"value"in t&&n(t.value)}))}))]).then((t=>{let e="";return e+=`linear-gradient(to bottom right, ${t[0]}, 35%, transparent),`,e+=`linear-gradient(to bottom left, ${t[1]}, 35%, transparent),`,e+=`linear-gradient(to top right, ${t[2]}, 35%, transparent),`,e+=`linear-gradient(to top left, ${t[3]}, 35%, transparent),`,e+="linear-gradient(rgb(64, 64, 64), rgb(64, 64, 64));",{background:e,light:n(t[4][0],t[4][1],t[4][2])>.4}}))}export{r as g};
