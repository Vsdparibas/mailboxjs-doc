"use strict";(self.webpackChunkmailboxjs_doc=self.webpackChunkmailboxjs_doc||[]).push([[171],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:d,groupId:b,className:f}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??y.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,s.U)(),[x,w]=(0,n.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==x&&v.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=O.indexOf(t),r=v[a].value;r!==x&&(j(t),w(r),null!=b&&T(b,String(r)))},N=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:N,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,n.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},6195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={displayed_sidebar:"tutorialSidebar"},s="Installation",u={unversionedId:"tutorial/installation",id:"tutorial/installation",title:"Installation",description:"To use MailboxJS, you need to install the library :",source:"@site/docs/tutorial/installation.md",sourceDirName:"tutorial",slug:"/tutorial/installation",permalink:"/docs/tutorial/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/installation.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",next:{title:"Configuration",permalink:"/docs/tutorial/configuration"}},c={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation"},"Installation"),(0,n.kt)("p",null,"To use MailboxJS, you need to install the library :"),(0,n.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install mailboxjs\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mailboxjs\n")))),(0,n.kt)("p",null,"To import MailboxJS in your project :"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"apple",label:"ESM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { MailboxJS } from 'mailboxjs';\n"))),(0,n.kt)(o.Z,{value:"orange",label:"CJS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { MailboxJS } = require('mailboxjs');\n")))),(0,n.kt)("p",null,"In the next part, we will see how to configure the mailbox."))}d.isMDXComponent=!0}}]);