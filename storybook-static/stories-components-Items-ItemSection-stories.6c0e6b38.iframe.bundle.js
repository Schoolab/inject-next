"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[7065],{"./src/stories/components/Items/ItemSection.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Section:()=>Section,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Items/Section",component:__webpack_require__("./src/app/components/items/ItemSection.tsx").J,parameters:{layout:"centered"}},Section={},__namedExportsOrder=["Section"];Section.parameters={...Section.parameters,docs:{...Section.parameters?.docs,source:{originalSource:"{}",...Section.parameters?.docs?.source}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/avatars/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Avatar=({addClass,size="lg",isOval=!0,isBordered=!1,iconName="account",image,...props})=>{let classTab=["thumbnail"];return size&&classTab.push(`is-${size}`),isOval&&classTab.push("is-oval"),isBordered&&classTab.push("is-bordered"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[iconName&&!image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:image})]})};Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},isOval:{required:!1,tsType:{name:"Boolean"},description:"Make the avatar round",defaultValue:{value:"true",computed:!1}},isBordered:{required:!1,tsType:{name:"Boolean"},description:"Add a thin border on the outside of the avatar (useful when superposed)",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"Sizes",defaultValue:{value:'"lg"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"IconName",defaultValue:{value:'"account"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"Image URL"}}}},"./src/app/components/items/ItemSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>ItemSection});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_avatars_Avatar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/avatars/Avatar.tsx"));const ItemSection=({label="{section.title}",caption="{section.type.name}",image="https://placehold.co/1080x720/f5f5f5/262626.svg?font=Inter&text=3%3A2",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item is-small is-bordered gap-0px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row align-items-center gap-xs py-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatars_Avatar__WEBPACK_IMPORTED_MODULE_2__.e,{size:"xl",iconName:"section",isOval:!1,image,addClass:"is-16by10"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-content d-flex flex-column align-items-start justify-content-center overflow-hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"item-title stretched-link line-clamp-1",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:caption})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex align-items-center gap-xs dropdown",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-muted btn-icon z-1","data-toggle":"dropdown","aria-expanded":"false","data-boundary":"window",href:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options","data-toggle":"tooltip","data-placement":"bottom","data-original-title":"Drag to move. Click for options.","data-boundary":"window"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6",{className:"dropdown-header",children:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Send to top"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Move up"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Move down"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Send to bottom"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6",{className:"dropdown-header",children:"Section"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item","data-toggle":"collapse","data-target":"#question1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Edit"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item","data-toggle":"collapse","data-target":"#question1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Duplicate"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item is-danger",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Delete"})})]})]})})]})});ItemSection.__docgenInfo={description:"",methods:[],displayName:"ItemSection",props:{label:{required:!1,tsType:{name:"string"},description:"Item label",defaultValue:{value:'"{section.title}"',computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Item caption",defaultValue:{value:'"{section.type.name}"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"Image URL",defaultValue:{value:'"https://placehold.co/1080x720/f5f5f5/262626.svg?font=Inter&text=3%3A2"',computed:!1}}}}}}]);