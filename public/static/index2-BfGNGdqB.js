import{h as T,c as L,aU as A,aZ as S,j as m,au as $,aj as G,a_ as W,a$ as C,a3 as D,aW as H,aG as E,ax as F,aX as O,B as R,b0 as U,at as X,aY as K,as as M}from"./sanity-CMxTmPw4.js";const Y=T.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function Z(v){const e=L(20),{childItemId:o,items:t,isActive:d,layout:c,showIcons:i,title:r}=v,{collapsed:j}=G();let u;e[0]!==t?(u=t==null?void 0:t.filter(q),e[0]=t,e[1]=u):u=e[1];const s=W(u);let n;e[2]!==t?(n=a=>{var B;return((B=t==null?void 0:t.find((b,g)=>g===a))==null?void 0:B.type)==="divider"},e[2]=t,e[3]=n):n=e[3];const l=n;let y;e[4]!==i?(y=a=>{var B;const b=(B=a.displayOptions)==null?void 0:B.showIcon;return typeof b<"u"?b!==!1:i!==!1},e[4]=i,e[5]=y):y=e[5];const x=y;let p;e[6]!==o||e[7]!==s||e[8]!==d||e[9]!==c||e[10]!==x?(p=(a,B)=>{const{virtualIndex:b}=B;if(a.type==="divider")return m.jsx(R,{marginBottom:1,children:m.jsx(Y,{})},`divider-${b}`);const g=!d&&o===a.id,w=d&&o===a.id,k=a._id&&a.schemaType?{_id:a._id,_type:a.schemaType.name,title:a.title}:void 0;return m.jsx(U,{icon:x(a)?a.icon:!1,id:a.id,layout:c,marginBottom:1,pressed:g,schemaType:a.schemaType,selected:w,title:s(a).title,value:k},a.id)},e[6]=o,e[7]=s,e[8]=d,e[9]=c,e[10]=x,e[11]=p):p=e[11];const I=p,f=j?"hidden":"auto";let h;e[12]!==l||e[13]!==t||e[14]!==I||e[15]!==r?(h=t&&t.length>0&&m.jsx(C,{activeItemDataAttr:"data-hovered",ariaLabel:r,canReceiveFocus:!0,getItemDisabled:l,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:I,wrapAround:!1}),e[12]=l,e[13]=t,e[14]=I,e[15]=r,e[16]=h):h=e[16];let P;return e[17]!==f||e[18]!==h?(P=m.jsx(X,{overflow:f,children:h}),e[17]=f,e[18]=h,e[19]=P):P=e[19],P}function q(v){return v.type!=="divider"}const z=v=>{const e=L(11),{index:o,menuItems:t,menuItemGroups:d,title:c}=v,{features:i}=D(),{collapsed:r,isLast:j}=H(),u=j&&!r?-1:0;let s;e[0]!==d||e[1]!==t?(s=m.jsx(K,{menuItems:t,menuItemGroups:d}),e[0]=d,e[1]=t,e[2]=s):s=e[2];let n;e[3]!==i.backButton||e[4]!==o?(n=i.backButton&&o>0&&m.jsx(E,{as:F,"data-as":"a",icon:O,mode:"bleed",tooltipProps:{content:"Back"}}),e[3]=i.backButton,e[4]=o,e[5]=n):n=e[5];let l;return e[6]!==s||e[7]!==n||e[8]!==u||e[9]!==c?(l=m.jsx(M,{actions:s,backButton:n,tabIndex:u,title:c}),e[6]=s,e[7]=n,e[8]=u,e[9]=c,e[10]=l):l=e[10],l};function N(v){const e=L(21),{childItemId:o,index:t,isActive:d,isSelected:c,pane:i,paneKey:r}=v,{defaultLayout:j,displayOptions:u,items:s,menuItems:n,menuItemGroups:l}=i,y=(u==null?void 0:u.showIcons)!==!1,{title:x}=A(i);let p;e[0]!==i.source?(p=S,e[0]=i.source,e[1]=p):p=e[1];let I;e[2]!==t||e[3]!==l||e[4]!==n||e[5]!==x?(I=m.jsx(z,{index:t,menuItems:n,menuItemGroups:l,title:x}),e[2]=t,e[3]=l,e[4]=n,e[5]=x,e[6]=I):I=e[6];let f;e[7]!==o||e[8]!==j||e[9]!==d||e[10]!==s||e[11]!==r||e[12]!==y||e[13]!==x?(f=m.jsx(Z,{childItemId:o,isActive:d,items:s,layout:j,showIcons:y,title:x},r),e[7]=o,e[8]=j,e[9]=d,e[10]=s,e[11]=r,e[12]=y,e[13]=x,e[14]=f):f=e[14];let h;return e[15]!==c||e[16]!==r||e[17]!==p||e[18]!==I||e[19]!==f?(h=m.jsxs($,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:r,maxWidth:640,minWidth:320,selected:c,children:[p,I,f]}),e[15]=c,e[16]=r,e[17]=p,e[18]=I,e[19]=f,e[20]=h):h=e[20],h}export{N as default};