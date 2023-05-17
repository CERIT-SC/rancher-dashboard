"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[1664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={toc_max_heading_level:4},o="Cards",i={unversionedId:"extensions/api/cards",id:"extensions/api/cards",title:"Cards",description:"Cards present information with a bordered box.",source:"@site/docs/extensions/api/cards.md",sourceDirName:"extensions/api",slug:"/extensions/api/cards",permalink:"/dashboard/extensions/api/cards",draft:!1,tags:[],version:"current",lastUpdatedAt:1684309690,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{toc_max_heading_level:4},sidebar:"mainSidebar",previous:{title:"Actions",permalink:"/dashboard/extensions/api/actions"},next:{title:"Panels",permalink:"/dashboard/extensions/api/panels"}},p={},d=[{value:"CardLocation.CLUSTER_DASHBOARD_CARD options",id:"cardlocationcluster_dashboard_card-options",level:2}],s={toc:d};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cards"},"Cards"),(0,r.kt)("p",null,"Cards present information with a bordered box."),(0,r.kt)("p",null,"Cards are added to Rancher via the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCard")," method."),(0,r.kt)("h1",{id:"addcard"},"addCard"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Rancher version v2.7.2)")),(0,r.kt)("p",null,"This method adds a card element to the UI."),(0,r.kt)("p",null,"Method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addCard(where: String, when: LocationConfig, options: Object);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Arguments")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"where")," string parameter admissable values for this method:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CardLocation.CLUSTER_DASHBOARD_CARD")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for a card on the Cluster Dashboard page")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"when")," Object admissable values:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LocationConfig")," as described above for the ",(0,r.kt)("a",{parentName:"p",href:"./common#locationconfig"},"LocationConfig object"),"."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"cardlocationcluster_dashboard_card-options"},"CardLocation.CLUSTER_DASHBOARD_CARD options"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cluster Dashboard Card",src:n(8279).Z,width:"1511",height:"1001"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"'CardLocation.CLUSTER_DASHBOARD_CARD'")," are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Card title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labelKey")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'Same as "label" but allows for translation. Will superseed "label"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"component")),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},'Component to be rendered aas content of a "Cluster Dashboard Card"')))),(0,r.kt)("p",null,"Usage example for ",(0,r.kt)("inlineCode",{parentName:"p"},"'CardLocation.CLUSTER_DASHBOARD_CARD'"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addCard(\n  CardLocation.CLUSTER_DASHBOARD_CARD,\n  { cluster: ['local'] },\n  {\n    label:     'some-label',\n    labelKey:  'generic.comingSoon',\n    component: () => import('./MastheadDetailsComponent.vue')\n  }\n);\n")))}c.isMDXComponent=!0},8279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cluster-cards-c43a7ddbf82d47a34e99b36b9834d74a.png"}}]);