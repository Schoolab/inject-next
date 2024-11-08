"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5242],{"./src/stories/components/EmptyState.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Newsfeed:()=>Newsfeed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/EmptyState",component:__webpack_require__("./src/app/components/EmptyState.tsx").p,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}}},Default={args:{title:"No category",text:"Your category will be listed here",iconTitle:"newspaper-variant-outline",iconBtn:"plus-circle",labelBtn:"Add category",labelLink:"learn more about category"}},Newsfeed={args:{title:"No Newsfeed",text:"Your Newsfeed will be listed here",iconTitle:"newspaper-variant-outline"}},__namedExportsOrder=["Default","Newsfeed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "No category",\n    text: "Your category will be listed here",\n    iconTitle: "newspaper-variant-outline",\n    iconBtn: "plus-circle",\n    labelBtn: "Add category",\n    labelLink: "learn more about category"\n  }\n}',...Default.parameters?.docs?.source}}},Newsfeed.parameters={...Newsfeed.parameters,docs:{...Newsfeed.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "No Newsfeed",\n    text: "Your Newsfeed will be listed here",\n    iconTitle: "newspaper-variant-outline"\n  }\n}',...Newsfeed.parameters?.docs?.source}}}},"./src/app/components/EmptyState.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>EmptyState});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const EmptyState=({title="No category",text="Your category will be listed here",labelLink,iconTitle,iconBtn="plus-circle",labelBtn,bordered=!0,spacious=!1,...props})=>{let classTab=["bg-white d-flex flex-column align-items-center gap-0px text-center"];return bordered&&classTab.push("border rounded"),!spacious&&classTab.push("px-2xl py-2xl"),spacious&&classTab.push("px-3xl py-80px"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[iconTitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex pb-16px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{size:"sm",name:iconTitle})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-weight-bold",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"small text-muted",children:text})]}),labelBtn&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex pt-32px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"btn btn-lg btn-primary",children:[iconBtn&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconBtn}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:labelBtn})]})}),labelLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex py-16px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"small",children:labelLink})})]})};EmptyState.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"No category"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Your category will be listed here"',computed:!1}},iconTitle:{required:!1,tsType:{name:"string"},description:""},iconBtn:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"plus-circle"',computed:!1}},labelBtn:{required:!1,tsType:{name:"string"},description:""},labelLink:{required:!1,tsType:{name:"string"},description:""},bordered:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},spacious:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}}}]);