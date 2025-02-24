"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[91],{"./src/app/content/EmptyState.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Content/EmptyState",component:__webpack_require__("./src/app/content/EmptyState.tsx").p,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{title:{control:"text"},text:{control:"text"},iconTitle:{control:"text"},iconBtn:{control:"text"},labelBtn:{control:"text"}},args:{title:"No category",text:"Your category will be listed here",iconTitle:"tag"}},Default={args:{}},Button={args:{iconBtn:"plus-circle",labelBtn:"Add category",labelLink:"Learn more about categories"}},__namedExportsOrder=["Default","Button"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Button.parameters={...Button.parameters,docs:{...Button.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconBtn: "plus-circle",\n    labelBtn: "Add category",\n    labelLink: "Learn more about categories"\n  }\n}',...Button.parameters?.docs?.source}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/content/EmptyState.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>EmptyState});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const EmptyState=({title="No category",text="Your category will be listed here",labelLink,iconTitle,iconBtn="plus-circle",labelBtn,bordered=!0,spacious=!1,...props})=>{let classTab=["bg-white d-flex flex-column align-items-center gap-0px text-center"];return bordered&&classTab.push("border rounded"),!spacious&&classTab.push("px-2xl py-2xl"),spacious&&classTab.push("px-3xl py-80px"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[iconTitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex pb-16px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{size:"sm",name:iconTitle})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-weight-bold",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"small text-muted",children:text})]}),labelBtn&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex pt-32px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"btn btn-lg btn-primary",children:[iconBtn&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconBtn}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:labelBtn})]})}),labelLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex py-16px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"small",children:labelLink})})]})};EmptyState.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"No category"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Your category will be listed here"',computed:!1}},iconTitle:{required:!1,tsType:{name:"string"},description:""},iconBtn:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"plus-circle"',computed:!1}},labelBtn:{required:!1,tsType:{name:"string"},description:""},labelLink:{required:!1,tsType:{name:"string"},description:""},bordered:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},spacious:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}}}]);