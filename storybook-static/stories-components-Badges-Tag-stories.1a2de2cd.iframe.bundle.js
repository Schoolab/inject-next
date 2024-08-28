"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[1295],{"./src/stories/components/Badges/Tag.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closed:()=>Closed,Default:()=>Default,Done:()=>Done,Draft:()=>Draft,InProgress:()=>InProgress,Open:()=>Open,Plus:()=>Plus,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Badges/Tags",component:__webpack_require__("./src/app/components/badges/tags/Tag.tsx").v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isPill:{control:"boolean"}},args:{isPill:!0,status:"default"}},Default={args:{label:"Tag #1"}},WithIcon={args:{label:"Private",iconName:"eye-off"}},Open={args:{label:"Open",iconName:"status-filled",status:"open"}},InProgress={args:{label:"In progress",iconName:"status-dashed",status:"progress"}},Closed={args:{label:"Closed",iconName:"status-stop",status:"closed"}},Done={args:{label:"Done",iconName:"status-filled",status:"done"}},Draft={args:{label:"Draft",iconName:"status-bordered",status:"draft"}},Plus={args:{iconName:"plus",isPill:!1}},__namedExportsOrder=["Default","WithIcon","Open","InProgress","Closed","Done","Draft","Plus"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Tag #1"\n  }\n}',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Private",\n    iconName: "eye-off"\n  }\n}',...WithIcon.parameters?.docs?.source}}},Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Open",\n    iconName: "status-filled",\n    status: "open"\n  }\n}',...Open.parameters?.docs?.source}}},InProgress.parameters={...InProgress.parameters,docs:{...InProgress.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "In progress",\n    iconName: "status-dashed",\n    status: "progress"\n  }\n}',...InProgress.parameters?.docs?.source}}},Closed.parameters={...Closed.parameters,docs:{...Closed.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Closed",\n    iconName: "status-stop",\n    status: "closed"\n  }\n}',...Closed.parameters?.docs?.source}}},Done.parameters={...Done.parameters,docs:{...Done.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Done",\n    iconName: "status-filled",\n    status: "done"\n  }\n}',...Done.parameters?.docs?.source}}},Draft.parameters={...Draft.parameters,docs:{...Draft.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Draft",\n    iconName: "status-bordered",\n    status: "draft"\n  }\n}',...Draft.parameters?.docs?.source}}},Plus.parameters={...Plus.parameters,docs:{...Plus.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconName: "plus",\n    isPill: false\n  }\n}',...Plus.parameters?.docs?.source}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass})=>{let classTab=["icon"];"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass);return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" ")})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Tag=({isPill=!0,addClass,iconName,status="default",label})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href:"#",children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:"Contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},isPill:{required:!1,tsType:{name:"Boolean"},description:"is pill ?",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"Status",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'}}}}}]);