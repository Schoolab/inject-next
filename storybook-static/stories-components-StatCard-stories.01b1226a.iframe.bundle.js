"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[6284],{"./src/stories/components/StatCard.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/StatCard",component:__webpack_require__("./src/app/components/StatCard.tsx").h,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{warning:{control:"boolean"}},args:{warning:!1}},Default={args:{number:"13",caption:"Ongoing registrations (> 2 days)",warning:!0,variation:2}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    number: "13",\n    caption: "Ongoing registrations (> 2 days)",\n    warning: true,\n    variation: 2\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/StatCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>StatCard});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const StatCard=({number=0,isPercentage,variation,warning=!1,caption="Statistic Name",link="",addClass,...props})=>{let difference,formattedDifference,classTab=["bg-light rounded p-sm w-100 h-100 d-flex flex-column gap-xs justify-content-start text-decoration-none"];return addClass&&classTab.push(addClass),void 0!==variation&&(difference=(number-(number-variation))/(number-variation)*100,formattedDifference=Math.abs(difference).toFixed(1)),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"link",className:classTab.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-none align-items-center text-muted text-navigation-bold",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:caption}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-right",size:"xs"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-baseline gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"h2 mb-none",style:{fontSize:"2rem",lineHeight:"2rem",fontWeight:"600"},children:[number,isPercentage?"%":""]}),warning&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"alert",addClass:"text-warning is-sm"})]})]}),variation&&0!==variation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-3xs small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{size:"xs",name:variation>=0?"arrow-up-circle":"arrow-down-circle",addClass:variation>0?" text-success":" text-danger"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:variation>0?" text-success":" text-danger",children:[(variation>=0?"+":"")+variation,isPercentage?"%":""]}),difference&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"text-muted",children:["(",difference>=0?"+":"-",formattedDifference,"%)"]})]})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex gap-none align-items-center text-muted text-navigation-bold",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:caption})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-baseline gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"h2 mb-none",style:{fontSize:"2rem",lineHeight:"2rem",fontWeight:"600"},children:[number,isPercentage?"%":""]}),warning&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"alert",addClass:"text-warning is-sm"})]})]}),variation&&0!==variation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-3xs small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{size:"xs",name:variation>=0?"arrow-up-circle":"arrow-down-circle",addClass:variation>0?" text-success":" text-danger"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:variation>0?" text-success":" text-danger",children:[(variation>=0?"+":"")+variation,isPercentage?"%":""]}),difference&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"text-muted",children:["(",difference>=0?"+":"-",formattedDifference,"%)"]})]})]})};StatCard.__docgenInfo={description:"",methods:[],displayName:"StatCard",props:{number:{required:!1,tsType:{name:"union",raw:"number | any",elements:[{name:"number"},{name:"any"}]},description:"Stat Number",defaultValue:{value:"0",computed:!1}},isPercentage:{required:!1,tsType:{name:"boolean"},description:""},variation:{required:!1,tsType:{name:"number"},description:"Stat variation compared to previous period"},warning:{required:!1,tsType:{name:"Boolean"},description:"Warning",defaultValue:{value:"false",computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Caption",defaultValue:{value:'"Statistic Name"',computed:!1}},link:{required:!1,tsType:{name:"string"},description:"Link",defaultValue:{value:'""',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}}}]);