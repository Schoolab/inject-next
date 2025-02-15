"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[7868],{"./src/stories/components/Avatars/ProgramLetters.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ExtraLarge:()=>ExtraLarge,Medium:()=>Medium,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Avatars/ProgramLetters",component:__webpack_require__("./src/app/components/avatars/ProgramLetters.tsx").q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio"}},args:{name:"Impact Innovators",size:"lg"}},Default={args:{}},Small={args:{size:"sm"}},Medium={args:{size:"md"}},ExtraLarge={args:{size:"xl"}},__namedExportsOrder=["Default","Small","Medium","ExtraLarge"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "sm"\n  }\n}',...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md"\n  }\n}',...Medium.parameters?.docs?.source}}},ExtraLarge.parameters={...ExtraLarge.parameters,docs:{...ExtraLarge.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "xl"\n  }\n}',...ExtraLarge.parameters?.docs?.source}}}},"./src/app/components/avatars/ProgramLetters.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>ProgramLetters});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ProgramLetters=({name,addClass,size="lg",...props})=>{let classTab=["icon","icon--program"];size&&classTab.push(`is-${size}`),addClass&&classTab.push(addClass);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"aria-hidden":"true",className:classTab.join(" "),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",children:(str=name,str.split(/\s+/).slice(0,3).map((word=>word.charAt(0))).join(""))})});var str};ProgramLetters.__docgenInfo={description:"",methods:[],displayName:"ProgramLetters",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"",defaultValue:{value:'"lg"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},dataToggle:{required:!1,tsType:{name:"string"},description:""},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}}}]);