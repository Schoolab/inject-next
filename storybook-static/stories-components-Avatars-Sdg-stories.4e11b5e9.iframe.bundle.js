"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5961],{"./src/stories/components/Avatars/Sdg.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,One:()=>One,Seventeen:()=>Seventeen,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Avatars/Sdg",component:__webpack_require__("./src/app/components/avatars/Sdg.tsx").p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio"},number:{control:{type:"number",min:1,max:17}}},args:{number:1,size:"24px"}},Default={args:{}},Small={args:{size:"16px"}},One={args:{number:1,size:"24px"}},Seventeen={args:{number:17,size:"24px"}},__namedExportsOrder=["Default","Small","One","Seventeen"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "16px"\n  }\n}',...Small.parameters?.docs?.source}}},One.parameters={...One.parameters,docs:{...One.parameters?.docs,source:{originalSource:'{\n  args: {\n    number: 1,\n    size: "24px"\n  }\n}',...One.parameters?.docs?.source}}},Seventeen.parameters={...Seventeen.parameters,docs:{...Seventeen.parameters?.docs,source:{originalSource:'{\n  args: {\n    number: 17,\n    size: "24px"\n  }\n}',...Seventeen.parameters?.docs?.source}}}},"./src/app/components/avatars/Sdg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Sdg});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Sdg=({number,size="40px",addClass,style,...props})=>{let classTab=["icon","icon--sdg"];return number&&classTab.push(`is-sdg-${number}`),size&&classTab.push(`is-${size}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"aria-hidden":"true",className:classTab.join(" "),style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:number})})};Sdg.__docgenInfo={description:"",methods:[],displayName:"Sdg",props:{number:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"16px" | "24px" | "40px"',elements:[{name:"literal",value:'"16px"'},{name:"literal",value:'"24px"'},{name:"literal",value:'"40px"'}]},description:"",defaultValue:{value:'"40px"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},dataToggle:{required:!1,tsType:{name:"string"},description:""},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}}}]);