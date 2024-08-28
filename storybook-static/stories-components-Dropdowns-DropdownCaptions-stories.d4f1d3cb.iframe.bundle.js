"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[7337],{"./src/stories/components/Dropdowns/DropdownCaptions.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Captions:()=>Captions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropdownCaptions_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Dropdown=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/dropdown/Dropdown.tsx")),DropdownMenu=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),DropdownItem=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),DropdownDivider=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx");const DropdownCaptions=({})=>(0,jsx_runtime.jsx)(Dropdown.m,{children:(0,jsx_runtime.jsxs)(DropdownMenu.r,{direction:"left",show:!0,children:[(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Write a course summary",caption:"From all the content inside",iconName:"summarize"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Translate to French",iconName:"translate-generate"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Improve writing",iconName:"improve-writing"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Make shorter",iconName:"shorter-text"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Change tone...",iconName:"tone"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Translate to...",iconName:"translate"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Copy from English",iconName:"copy"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Restore to saved value",iconName:"restore"}),(0,jsx_runtime.jsx)("div",{className:"dropdown-content text-center",children:(0,jsx_runtime.jsx)("span",{children:"AInject can make mistakes. Check important info."})})]})});DropdownCaptions.__docgenInfo={description:"",methods:[],displayName:"DropdownCaptions"};const DropdownCaptions_stories={title:"Components/Dropdowns/Captions",component:DropdownCaptions,parameters:{layout:"padded"}},Captions={},__namedExportsOrder=["Captions"];Captions.parameters={...Captions.parameters,docs:{...Captions.parameters?.docs,source:{originalSource:"{}",...Captions.parameters?.docs?.source}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass})=>{let classTab=["icon"];"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass);return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" ")})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/DropdownDivider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownDivider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownDivider=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"});DropdownDivider.__docgenInfo={description:"",methods:[],displayName:"DropdownDivider"}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const DropdownItem=({type,addClass,outbound,label,iconName,caption})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href:"#",children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'}]},description:"is interactive or danger ?"},outbound:{required:!1,tsType:{name:"boolean"},description:"is this an outbound link?"},label:{required:!0,tsType:{name:"string"},description:"Label"},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},caption:{required:!1,tsType:{name:"string"},description:"Caption"}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}}}]);