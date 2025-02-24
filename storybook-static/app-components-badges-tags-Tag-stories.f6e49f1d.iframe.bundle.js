"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[9427],{"./src/app/components/badges/tags/Tag.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closed:()=>Closed,Default:()=>Default,Done:()=>Done,Draft:()=>Draft,InProgress:()=>InProgress,Open:()=>Open,Plus:()=>Plus,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Badges/Tags",component:__webpack_require__("./src/app/components/badges/tags/Tag.tsx").v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isPill:{control:"boolean"}},args:{isPill:!0,status:"default"}},Default={args:{label:"Tag #1"}},WithIcon={args:{label:"Private",iconName:"eye-off"}},Open={args:{label:"Open",iconName:"status-filled",status:"open"}},InProgress={args:{label:"In progress",iconName:"status-dashed",status:"progress"}},Closed={args:{label:"Closed",iconName:"status-stop",status:"closed"}},Done={args:{label:"Done",iconName:"status-filled",status:"done"}},Draft={args:{label:"Draft",iconName:"status-bordered",status:"draft"}},Plus={args:{iconName:"plus",isPill:!1}},__namedExportsOrder=["Default","WithIcon","Open","InProgress","Closed","Done","Draft","Plus"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Tag #1"\n  }\n}',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Private",\n    iconName: "eye-off"\n  }\n}',...WithIcon.parameters?.docs?.source}}},Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Open",\n    iconName: "status-filled",\n    status: "open"\n  }\n}',...Open.parameters?.docs?.source}}},InProgress.parameters={...InProgress.parameters,docs:{...InProgress.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "In progress",\n    iconName: "status-dashed",\n    status: "progress"\n  }\n}',...InProgress.parameters?.docs?.source}}},Closed.parameters={...Closed.parameters,docs:{...Closed.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Closed",\n    iconName: "status-stop",\n    status: "closed"\n  }\n}',...Closed.parameters?.docs?.source}}},Done.parameters={...Done.parameters,docs:{...Done.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Done",\n    iconName: "status-filled",\n    status: "done"\n  }\n}',...Done.parameters?.docs?.source}}},Draft.parameters={...Draft.parameters,docs:{...Draft.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Draft",\n    iconName: "status-bordered",\n    status: "draft"\n  }\n}',...Draft.parameters?.docs?.source}}},Plus.parameters={...Plus.parameters,docs:{...Plus.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconName: "plus",\n    isPill: false\n  }\n}',...Plus.parameters?.docs?.source}}}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/icons/Icon.tsx"));const Tag=({isPill=!0,iconName,status="default",label,link,addClass,style,children,...props})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},isPill:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./src/app/components/icons/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}}}]);