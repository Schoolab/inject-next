"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[6101],{"./src/app/components/cards/CardTask.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Task:()=>Task,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Cards/Task",component:__webpack_require__("./src/app/components/cards/CardTask.tsx").K,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}}},Task={},__namedExportsOrder=["Task"];Task.parameters={...Task.parameters,docs:{...Task.parameters?.docs,source:{originalSource:"{}",...Task.parameters?.docs?.source}}}},"./src/app/components/icons/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/progress/Progress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Progress});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Progress=({percentage=0,text="0/8",subtext="completed",size="sm",addClass,style,...props})=>{let classTab=["progress-circle-container flex-shrink-0"];return size&&classTab.push(`is-${size}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{className:classTab.join(" "),...props,viewBox:"0 0 32 32","data-percent":percentage,style:{"--percent":percentage,...style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{className:"progress-circle progress-circle-bg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{className:"progress-circle progress-circle-percent"}),100===percentage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{className:"progress-circle-icon is-checked",d:"M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"}),text&&"lg"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:20,children:text}),text&&"xl"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:15,children:text}),text&&"2xl"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:16,children:text}),subtext&&("xl"===size||"2xl"===size)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-subtext",x:16,y:20,children:subtext})})]})};Progress.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{percentage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"0/8"',computed:!1}},subtext:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"completed"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the progress icon be?",defaultValue:{value:'"sm"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./src/app/content/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Placeholder=({width="100%",height="40px",addClass,style})=>{let classTab=["placeholder-container"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{width,height,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder"})})};Placeholder.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"40px"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);