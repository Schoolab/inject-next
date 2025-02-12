"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[4083],{"./src/stories/components/Asides/AsideHeader.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Full:()=>Full,NewTab:()=>NewTab,NotClosable:()=>NotClosable,Pagination:()=>Pagination,Tabs:()=>Tabs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Asides/Header",component:__webpack_require__("./src/app/components/asides/AsideHeader.tsx").m,parameters:{layout:"fullscreen",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{showNewTab:{type:"boolean"},showClose:{type:"boolean"},pagination:{description:"Pagination configuration",control:{type:"object"},table:{type:{summary:"PaginationProps",detail:"{\n  currentPage: number;\n  totalPages: number;\n  prevLink?: string;\n  nextLink?: string;\n  onPageChange?: (page: number) => void;\n}"}}}},args:{title:"Title",showNewTab:!1,showClose:!0}},Default={args:{title:"Title"}},NotClosable={args:{showClose:!1}},NewTab={args:{showNewTab:!0}},Tabs={args:{tabs:[{label:"Info",href:"#",isActive:!0,dataToggle:"tab",dataTarget:"#info",role:"tab",ariaControls:"info",ariaSelected:!0},{label:"Responses",href:"#",isActive:!1,icon:"visibility-off",tooltip:"Accessible only to admins",dataToggle:"tab",dataTarget:"#responses",role:"tab",ariaControls:"responses",ariaSelected:!1},{label:"Limited",href:"#",isActive:!1,dataToggle:"tab",dataTarget:"#limited",role:"tab",ariaControls:"limited",ariaSelected:!1}]}},Pagination={args:{pagination:{currentPage:1,totalPages:4,prevLink:"#",nextLink:"#"}}},Full={args:{title:"Title",tabs:[{label:"Info",href:"#",isActive:!0,dataToggle:"tab",dataTarget:"#info",role:"tab",ariaControls:"info",ariaSelected:!0},{label:"Responses",href:"#",isActive:!1,icon:"visibility-off",tooltip:"Accessible only to admins",dataToggle:"tab",dataTarget:"#responses",role:"tab",ariaControls:"responses",ariaSelected:!1},{label:"Limited",href:"#",isActive:!1,dataToggle:"tab",dataTarget:"#limited",role:"tab",ariaControls:"limited",ariaSelected:!1}],pagination:{currentPage:1,totalPages:4,prevLink:"#",nextLink:"#"},showNewTab:!0,showClose:!0}},__namedExportsOrder=["Default","NotClosable","NewTab","Tabs","Pagination","Full"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Title"\n  }\n}',...Default.parameters?.docs?.source}}},NotClosable.parameters={...NotClosable.parameters,docs:{...NotClosable.parameters?.docs,source:{originalSource:"{\n  args: {\n    showClose: false\n  }\n}",...NotClosable.parameters?.docs?.source}}},NewTab.parameters={...NewTab.parameters,docs:{...NewTab.parameters?.docs,source:{originalSource:"{\n  args: {\n    showNewTab: true\n  }\n}",...NewTab.parameters?.docs?.source}}},Tabs.parameters={...Tabs.parameters,docs:{...Tabs.parameters?.docs,source:{originalSource:'{\n  args: {\n    tabs: [{\n      label: "Info",\n      href: "#",\n      isActive: true,\n      dataToggle: "tab",\n      dataTarget: "#info",\n      role: "tab",\n      ariaControls: "info",\n      ariaSelected: true\n    }, {\n      label: "Responses",\n      href: "#",\n      isActive: false,\n      icon: "visibility-off",\n      tooltip: "Accessible only to admins",\n      dataToggle: "tab",\n      dataTarget: "#responses",\n      role: "tab",\n      ariaControls: "responses",\n      ariaSelected: false\n    }, {\n      label: "Limited",\n      href: "#",\n      isActive: false,\n      dataToggle: "tab",\n      dataTarget: "#limited",\n      role: "tab",\n      ariaControls: "limited",\n      ariaSelected: false\n    }]\n  }\n}',...Tabs.parameters?.docs?.source}}},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:'{\n  args: {\n    pagination: {\n      currentPage: 1,\n      totalPages: 4,\n      prevLink: "#",\n      nextLink: "#"\n    }\n  }\n}',...Pagination.parameters?.docs?.source}}},Full.parameters={...Full.parameters,docs:{...Full.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Title",\n    tabs: [{\n      label: "Info",\n      href: "#",\n      isActive: true,\n      dataToggle: "tab",\n      dataTarget: "#info",\n      role: "tab",\n      ariaControls: "info",\n      ariaSelected: true\n    }, {\n      label: "Responses",\n      href: "#",\n      isActive: false,\n      icon: "visibility-off",\n      tooltip: "Accessible only to admins",\n      dataToggle: "tab",\n      dataTarget: "#responses",\n      role: "tab",\n      ariaControls: "responses",\n      ariaSelected: false\n    }, {\n      label: "Limited",\n      href: "#",\n      isActive: false,\n      dataToggle: "tab",\n      dataTarget: "#limited",\n      role: "tab",\n      ariaControls: "limited",\n      ariaSelected: false\n    }],\n    pagination: {\n      currentPage: 1,\n      totalPages: 4,\n      prevLink: "#",\n      nextLink: "#"\n    },\n    showNewTab: true,\n    showClose: true\n  }\n}',...Full.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,isLoading=!1,showActive=!0,hasDropdown=!1,label,link="#",target,addClass,extended,outlined,iconStartName,iconEndName,iconStartImage,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),isLoading&&classTab.push("disabled"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:link,className:classTab.join(" "),role:"button",target,"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props,children:isLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"loading",addClass:"icon-spin"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),iconStartImage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"img",src:iconStartImage}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconStartImage:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "sso" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"sso"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""},dataToggle:{required:!1,tsType:{name:"string"},description:""},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/Pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Pagination});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Icon.tsx");const Pagination=props=>{const[currentPage,setCurrentPage]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.currentPage||1),handlePageChange=newPage=>{var _props_onPageChange;newPage>=1&&newPage<=props.totalPages&&(setCurrentPage(newPage),null===(_props_onPageChange=props.onPageChange)||void 0===_props_onPageChange||_props_onPageChange.call(props,newPage))};let classTab=["d-flex align-items-center ml-auto gap-xs"];return props.className&&classTab.push(props.className),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small",{className:"pagination-label text-muted",children:[currentPage," of ",props.totalPages]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-default "+(currentPage<=1?"disabled":""),"data-toggle":"tooltip","data-original-title":"Previous",href:props.prevLink||"#",onClick:e=>{e.preventDefault(),currentPage<=1||handlePageChange(currentPage-1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-left"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-default "+(currentPage>=props.totalPages?"disabled":""),"data-toggle":"tooltip","data-original-title":"Next",href:props.nextLink||"#",onClick:e=>{e.preventDefault(),currentPage>=props.totalPages||handlePageChange(currentPage+1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-right"})})]})};Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},prevLink:{required:!1,tsType:{name:"string"},description:""},nextLink:{required:!1,tsType:{name:"string"},description:""},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}}},"./src/app/components/asides/AsideHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>AsideHeader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_app_components_nav_tabs_NavTab__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/nav-tabs/NavTab.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Button.tsx"),_app_components_Pagination__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/Pagination.tsx");const AsideHeader=({title,tabs,addClass,style,pagination,showNewTab=!1,showClose=!0,buttons,...props})=>{let classTab=["aside-header"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header",{className:classTab.join(" "),style,...props,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"aside-title line-clamp-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:title})}),tabs&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_nav_tabs_NavTab__WEBPACK_IMPORTED_MODULE_3__.V,{addClass:"aside-nav",items:tabs}),pagination&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Pagination__WEBPACK_IMPORTED_MODULE_5__.d,{className:"aside-pagination",...pagination}),(showNewTab||showClose||buttons)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"aside-actions",children:[buttons&&buttons.map(((button,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_4__.$,{...button},index))),showNewTab&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_4__.$,{type:"transparent",size:"sm",addClass:"border-0 p-2xs text-muted","data-toggle":"tooltip","data-original-title":"Open in new tab",link:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"new-tab",size:"sm"})}),showClose&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_4__.$,{type:"transparent",size:"sm",addClass:"border-0 p-2xs text-muted","data-toggle":"tooltip","data-original-title":"Close",link:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"close",size:"sm"})})]})]})};AsideHeader.__docgenInfo={description:"",methods:[],displayName:"AsideHeader",props:{title:{required:!1,tsType:{name:"string"},description:""},tabs:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    href: string;\n    badge?: string;\n    isActive?: boolean;\n    hasDropdown?: boolean;\n    dropdownItems?: ItemType[];\n    icon?: string;\n    tooltip?: string;\n    id?: string;\n    dataToggle?: string;\n    dataTarget?: string;\n    role?: string;\n    ariaControls?: string;\n    ariaSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"badge",value:{name:"string",required:!1}},{key:"isActive",value:{name:"boolean",required:!1}},{key:"hasDropdown",value:{name:"boolean",required:!1}},{key:"dropdownItems",value:{name:"Array",elements:[{name:"ItemType"}],raw:"ItemType[]",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"tooltip",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"dataToggle",value:{name:"string",required:!1}},{key:"dataTarget",value:{name:"string",required:!1}},{key:"role",value:{name:"string",required:!1}},{key:"ariaControls",value:{name:"string",required:!1}},{key:"ariaSelected",value:{name:"boolean",required:!1}}]}}],raw:"ItemType[]"},description:""},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n    className?: string;\n    currentPage: number;\n    totalPages: number;\n    prevLink?: string;\n    nextLink?: string;\n    onPageChange?: (page: number) => void;\n}",signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"currentPage",value:{name:"number",required:!0}},{key:"totalPages",value:{name:"number",required:!0}},{key:"prevLink",value:{name:"string",required:!1}},{key:"nextLink",value:{name:"string",required:!1}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!1}}]}},description:""},showNewTab:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/badges/notifs/Notif.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Notif});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Notif=({addClass,status,label})=>{let classTab=["badge badge-notification"];return status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})})};Notif.__docgenInfo={description:"",methods:[],displayName:"Notif",props:{label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"interactive" | "accent" | "highlight"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"highlight"'}]},description:"Status"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass,style,...props})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const DropdownItem=({children,type,addClass,outbound,showActive=!1,active,disabled,label,iconName,caption,toggle,newTab,href="#",target,rel,badge,...props})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),active&&classTab.push("active"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href,target,...props,children:[showActive&&void 0!==active&&(showActive?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"check",addClass:"dropdown-item--icon"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"",addClass:"dropdown-item--icon"})),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"d-flex",children:[label," ",badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__.X,{label:badge,status:"highlight",addClass:"ml-auto"})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]}),newTab&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"new-tab"}),toggle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-right",addClass:"dropdown-item--toggle"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger" | "ai"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"ai"'}]},description:""},iconName:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},toggle:{required:!1,tsType:{name:"boolean"},description:""},newTab:{required:!1,tsType:{name:"boolean"},description:""},outbound:{required:!1,tsType:{name:"boolean"},description:""},showActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},badge:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"e"}],return:{name:"void"}}},description:""}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show,style,...props})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);