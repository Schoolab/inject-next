"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[3680],{"./src/stories/components/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Danger:()=>Danger,Default:()=>Default,Muted:()=>Muted,Primary:()=>Primary,Secondary:()=>Secondary,Transparent:()=>Transparent,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:__webpack_require__("./src/app/components/Button.tsx").$,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{isActive:{control:"boolean"},extended:{control:"boolean"}},args:{isActive:!1,type:"default",size:"default",extended:!1}},Default={args:{iconStartName:"link",label:"Button",type:"default"}},Active={args:{iconStartName:"link",label:"Button",isActive:!0}},Primary={args:{iconStartName:"link",label:"Button",type:"primary"}},Transparent={args:{iconStartName:"link",label:"Button",type:"transparent"}},Danger={args:{iconStartName:"link",label:"Button",type:"danger"}},Warning={args:{iconStartName:"link",label:"Button",type:"warning"}},Secondary={args:{iconStartName:"link",label:"Button",type:"secondary"}},Muted={args:{iconStartName:"link",label:"Button",type:"muted"}},__namedExportsOrder=["Default","Active","Primary","Transparent","Danger","Warning","Secondary","Muted"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    label: "Button",\n    type: "default"\n  }\n}',...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    label: "Button",\n    isActive: true\n  }\n}',...Active.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    label: "Button",\n    type: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}},Transparent.parameters={...Transparent.parameters,docs:{...Transparent.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    label: "Button",\n    type: "transparent"\n  }\n}',...Transparent.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    label: "Button",\n    type: "danger"\n  }\n}',...Danger.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    label: "Button",\n    type: "warning"\n  }\n}',...Warning.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    label: "Button",\n    type: "secondary"\n  }\n}',...Secondary.parameters?.docs?.source}}},Muted.parameters={...Muted.parameters,docs:{...Muted.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    label: "Button",\n    type: "muted"\n  }\n}',...Muted.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Button=({size="default",type,isActive=!1,label,addClass,extended,iconStartName,iconEndName,...props})=>{let classTab=["btn"];return type&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),extended&&classTab.push("btn-block"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:classTab.join(" "),...props,children:[iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconStartName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconEndName})]})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:"Button contents"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active ?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "transparent" | "muted" | "danger" | "warning" | "secondary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"secondary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass})=>{let classTab=["icon"];"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass);return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" ")})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}}}]);