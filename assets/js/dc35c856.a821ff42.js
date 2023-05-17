"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[4409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},a="Custom Node Driver UI",c={unversionedId:"extensions/api/components/node-drivers",id:"extensions/api/components/node-drivers",title:"Custom Node Driver UI",description:"Rancher allows UI to be created for custom Node Drivers by registering components for the following two component types:",source:"@site/docs/extensions/api/components/node-drivers.md",sourceDirName:"extensions/api/components",slug:"/extensions/api/components/node-drivers",permalink:"/dashboard/extensions/api/components/node-drivers",draft:!1,tags:[],version:"current",lastUpdatedAt:1684309690,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Resource Views",permalink:"/dashboard/extensions/api/components/resources"},next:{title:"Auto-Import Folders",permalink:"/dashboard/extensions/api/components/auto-import"}},s={},p=[],l={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-node-driver-ui"},"Custom Node Driver UI"),(0,o.kt)("p",null,"Rancher allows UI to be created for custom Node Drivers by registering components for the following two component types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cloud-credential")," - defines a custom component for collecting data for a cloud credential for a given node driver"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"machine-config")," - defined a custom component for the machine pool configuration for a cloud credential for a given node driver")),(0,o.kt)("p",null,"In both cases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," when registering should match the Node Driver name."),(0,o.kt)("p",null,"For more information, see: ",(0,o.kt)("a",{parentName:"p",href:"../../../code-base-works/machine-drivers"},"Machine Drivers"),"."))}d.isMDXComponent=!0}}]);