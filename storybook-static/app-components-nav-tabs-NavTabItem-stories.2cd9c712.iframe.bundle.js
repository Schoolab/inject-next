"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[3038],{"./src/app/components/nav-tabs/NavTabItem.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Badge:()=>Badge,Default:()=>Default,Icon:()=>Icon,Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/NavTabs/Nav Item",component:__webpack_require__("./src/app/components/nav-tabs/NavTabItem.tsx").m,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{},args:{label:"Label",href:"#"}},Default={args:{}},Active={args:{isActive:!0}},Badge={args:{badge:"3"}},Icon={args:{icon:"visibility-off"}},Tooltip={args:{icon:"visibility-off",tooltip:"Only visible to managers"}},__namedExportsOrder=["Default","Active","Badge","Icon","Tooltip"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  args: {\n    isActive: true\n  }\n}",...Active.parameters?.docs?.source}}},Badge.parameters={...Badge.parameters,docs:{...Badge.parameters?.docs,source:{originalSource:'{\n  args: {\n    badge: "3"\n  }\n}',...Badge.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: "visibility-off"\n  }\n}',...Icon.parameters?.docs?.source}}},Tooltip.parameters={...Tooltip.parameters,docs:{...Tooltip.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: "visibility-off",\n    tooltip: "Only visible to managers"\n  }\n}',...Tooltip.parameters?.docs?.source}}}},"./src/app/components/badges/notifs/Notif.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Notif});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Notif=({addClass,status,label})=>{let classTab=["badge badge-notification"];return status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})})};Notif.__docgenInfo={description:"",methods:[],displayName:"Notif",props:{label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"interactive" | "accent" | "highlight"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"highlight"'}]},description:"Status"}}}},"./src/app/components/icons/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/nav-tabs/NavTabItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>NavTabItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/icons/Icon.tsx")),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const NavTabItem=({label="Label",href="#",isActive,icon,badge,tooltip,addClass,id,dataToggle,dataTarget,role,ariaControls,ariaSelected,...props})=>{let classTab=["nav-link nav-item"];return isActive&&classTab.push("active"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href,onClick:e=>e.preventDefault(),className:classTab.join(" "),id,"data-toggle":dataToggle,"data-target":dataTarget,role,"aria-controls":ariaControls,"aria-selected":ariaSelected,...props,children:[icon&&tooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"xs","data-toggle":"tooltip","data-placement":"top","data-original-title":tooltip,"data-boundary":"window"}),icon&&!tooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__.X,{label:badge,status:"highlight"})]})};NavTabItem.__docgenInfo={description:"",methods:[],displayName:"NavTabItem",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},badge:{required:!1,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},dataToggle:{required:!1,tsType:{name:"string"},description:""},dataTarget:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""},ariaControls:{required:!1,tsType:{name:"string"},description:""},ariaSelected:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);