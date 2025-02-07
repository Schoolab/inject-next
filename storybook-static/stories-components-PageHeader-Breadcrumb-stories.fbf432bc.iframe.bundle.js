"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2376],{"./src/stories/components/PageHeader/Breadcrumb.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/PageHeader/Breadcrumb",component:__webpack_require__("./src/app/components/page-header/Breadcrumb.tsx").Q,parameters:{layout:"fullscreen",docs:{controls:{sort:"requiredFirst"}}}},Default={args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/page-header/Breadcrumb.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Breadcrumb});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Breadcrumb=({homeIcon="home",homeLink="#",items=[{label:"Impact Innovators",href:"#"},{label:"Item",href:"#"},{label:"Item"}]})=>{let listItems=items.map(((item,index)=>item.href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"breadcrumb-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,children:item.label})},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:item.label})},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:"breadcrumb-container","aria-label":"breadcrumb",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol",{className:"breadcrumb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"breadcrumb-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:homeLink,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:homeIcon})})}),listItems]})})};Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{homeIcon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"home"',computed:!1}},homeLink:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    href?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"ItemType[]"},description:"",defaultValue:{value:'[\n    {\n        label: "Impact Innovators",\n        href: "#",\n    },\n    {\n        label: "Item",\n        href: "#",\n    },\n    {\n        label: "Item",\n    },\n]',computed:!1}}}}}}]);