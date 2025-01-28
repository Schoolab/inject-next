"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[9596],{"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass,style,...props})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/nav-tabs/NavTab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>NavTab});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_NavTabItem__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/nav-tabs/NavTabItem.tsx")),_NavTabDropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/nav-tabs/NavTabDropdown.tsx");const NavTab=({children,items=[{label:"Item",href:"#",isActive:!0},{label:"Item",href:"#"},{label:"Item",href:"#",badge:"3"},{label:"Item",href:"#",icon:"visibility-off",tooltip:"Only visible to managers"},{label:"Dropdown",href:"#",hasDropdown:!0,dropdownItems:[{label:"sub item 1",href:"#"},{label:"sub item 1",href:"#"}]}],addClass,...props})=>{let classTab=["nav nav-tabs"];addClass&&classTab.push(addClass);let listItems=items.map(((item,index)=>item.hasDropdown&&item.dropdownItems?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavTabDropdown__WEBPACK_IMPORTED_MODULE_3__.k,{label:item.label,href:item.href,icon:item.icon,badge:item.badge,isActive:item.isActive,tooltip:item.tooltip,dropdownItems:item.dropdownItems},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavTabItem__WEBPACK_IMPORTED_MODULE_2__.m,{label:item.label,href:item.href,icon:item.icon,badge:item.badge,isActive:item.isActive,tooltip:item.tooltip},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:classTab.join(" "),...props,children:[listItems&&listItems,children]})};NavTab.__docgenInfo={description:"",methods:[],displayName:"NavTab",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!1,tsType:{name:"union",raw:"ItemType[] | undefined",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    href: string;\n    badge?: string;\n    isActive?: boolean;\n    hasDropdown?: boolean;\n    dropdownItems?: ItemType[];\n    icon?: string;\n    tooltip?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"badge",value:{name:"string",required:!1}},{key:"isActive",value:{name:"boolean",required:!1}},{key:"hasDropdown",value:{name:"boolean",required:!1}},{key:"dropdownItems",value:{name:"Array",elements:[{name:"ItemType"}],raw:"ItemType[]",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"tooltip",value:{name:"string",required:!1}}]}}],raw:"ItemType[]"},{name:"undefined"}]},description:"",defaultValue:{value:'[\n    {\n        label: "Item",\n        href: "#",\n        isActive: true,\n    },\n    {\n        label: "Item",\n        href: "#",\n    },\n    {\n        label: "Item",\n        href: "#",\n        badge: "3",\n    },\n    {\n        label: "Item",\n        href: "#",\n        icon: "visibility-off",\n        tooltip: "Only visible to managers",\n    },\n    {\n        label: "Dropdown",\n        href: "#",\n        hasDropdown: true,\n        dropdownItems: [\n            {\n                label: "sub item 1",\n                href: "#",\n            },\n            {\n                label: "sub item 1",\n                href: "#",\n            },\n        ],\n    },\n]',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/nav-tabs/NavTabDropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>NavTabDropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const NavTabDropdown=({label="Label",href="#",isActive,dropdownItems,icon,badge,tooltip,addClass,...props})=>{let classDropdown=["nav-item"];addClass&&classDropdown.push(addClass);let classLink=["nav-link dropdown-toggle"];return isActive&&classLink.push("active"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__.m,{addClass:classDropdown.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:classLink.join(" "),"data-toggle":"dropdown","data-boundary":"window","aria-expanded":"false","aria-haspopup":"true",children:[icon&&tooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"xs","data-toggle":"tooltip","data-placement":"top","data-original-title":tooltip,"data-boundary":"window"}),icon&&!tooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_6__.X,{label:badge,status:"highlight"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.r,{children:dropdownItems.map(((dropdownItem,dropdownIndex)=>{var _dropdownItem_isActive;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:dropdownItem.label,href:dropdownItem.href,active:null!==(_dropdownItem_isActive=dropdownItem.isActive)&&void 0!==_dropdownItem_isActive&&_dropdownItem_isActive},dropdownIndex)}))})]})};NavTabDropdown.__docgenInfo={description:"",methods:[],displayName:"NavTabDropdown",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},badge:{required:!1,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},dropdownItems:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    href: string;\n    isActive?: boolean;\n    icon?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"isActive",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"string",required:!1}}]}}],raw:"ItemType[]"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/nav-tabs/NavTabItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>NavTabItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const NavTabItem=({label="Label",href="#",isActive,icon,badge,tooltip,addClass,...props})=>{let classTab=["nav-link nav-item"];return isActive&&classTab.push("active"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href,className:classTab.join(" "),...props,children:[icon&&tooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"xs","data-toggle":"tooltip","data-placement":"top","data-original-title":tooltip,"data-boundary":"window"}),icon&&!tooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__.X,{label:badge,status:"highlight"})]})};NavTabItem.__docgenInfo={description:"",methods:[],displayName:"NavTabItem",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},badge:{required:!1,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/page-header/SubNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>SubNav});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_nav_tabs_NavTab__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/nav-tabs/NavTab.tsx"));const SubNav=({items})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"application-subnav border-bottom",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_nav_tabs_NavTab__WEBPACK_IMPORTED_MODULE_2__.V,{items,addClass:"w-100"})});SubNav.__docgenInfo={description:"",methods:[],displayName:"SubNav",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    href: string;\n    badge?: string;\n    isActive?: boolean;\n    dropdownItems?: ItemType[];\n    icon?: string;\n    tooltip?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"badge",value:{name:"string",required:!1}},{key:"isActive",value:{name:"boolean",required:!1}},{key:"dropdownItems",value:{name:"Array",elements:[{name:"ItemType"}],raw:"ItemType[]",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"tooltip",value:{name:"string",required:!1}}]}}],raw:"ItemType[]"},description:""}}}}}]);