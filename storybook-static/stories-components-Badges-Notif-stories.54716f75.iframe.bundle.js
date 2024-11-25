"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[8701],{"./src/stories/components/Badges/Notif.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accent:()=>Accent,Highlight:()=>Highlight,Interactive:()=>Interactive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Badges/Notifs",component:__webpack_require__("./src/app/components/badges/notifs/Notif.tsx").X,parameters:{layout:"centered"},tags:["autodocs"]},Interactive={args:{label:"New",status:"interactive"}},Accent={args:{label:"8",status:"accent"}},Highlight={args:{label:"0",status:"highlight"}},__namedExportsOrder=["Interactive","Accent","Highlight"];Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "New",\n    status: "interactive"\n  }\n}',...Interactive.parameters?.docs?.source}}},Accent.parameters={...Accent.parameters,docs:{...Accent.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "8",\n    status: "accent"\n  }\n}',...Accent.parameters?.docs?.source}}},Highlight.parameters={...Highlight.parameters,docs:{...Highlight.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "0",\n    status: "highlight"\n  }\n}',...Highlight.parameters?.docs?.source}}}},"./src/app/components/badges/notifs/Notif.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Notif});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Notif=({addClass,status,label})=>{let classTab=["badge badge-notification"];return status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})})};Notif.__docgenInfo={description:"",methods:[],displayName:"Notif",props:{label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"interactive" | "accent" | "highlight"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"highlight"'}]},description:"Status"}}}}}]);