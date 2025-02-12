"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2060],{"./src/stories/components/ItemsGroup/ItemsGroupHeader.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Available:()=>Available,Date:()=>Date,Default:()=>Default,DueDate:()=>DueDate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Items/Group Header",component:__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx").H,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{date:{control:"text"},dueDate:{control:"text"}},args:{label:"Items group header",number:"0"}},Default={args:{}},Date={args:{date:"Oct 1"}},DueDate={args:{date:"Oct 1",dueDate:"31",locked:!1}},Available={args:{date:"Oct 1",locked:!1}},__namedExportsOrder=["Default","Date","DueDate","Available"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Date.parameters={...Date.parameters,docs:{...Date.parameters?.docs,source:{originalSource:'{\n  args: {\n    date: "Oct 1"\n  }\n}',...Date.parameters?.docs?.source}}},DueDate.parameters={...DueDate.parameters,docs:{...DueDate.parameters?.docs,source:{originalSource:'{\n  args: {\n    date: "Oct 1",\n    dueDate: "31",\n    locked: false\n  }\n}',...DueDate.parameters?.docs?.source}}},Available.parameters={...Available.parameters,docs:{...Available.parameters?.docs,source:{originalSource:'{\n  args: {\n    date: "Oct 1",\n    locked: false\n  }\n}',...Available.parameters?.docs?.source}}}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Tag=({isPill=!0,iconName,status="default",label,link,addClass,style,children,...props})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},isPill:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./src/app/components/items-group/ItemsGroupHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ItemsGroupHeader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx"),_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/badges/tags/Tag.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx"),_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownHeader.tsx"),_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx");const ItemsGroupHeader=({label,number,date,dueDate,locked,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["item-group-header"].join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4",{className:"nav-title flex-fill mb-none",children:label}),date&&!dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"open",iconName:locked?"status-bordered":"status-filled",label:date}),date&&dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"progress",iconName:locked?"status-bordered":"status-dashed",label:date+" -> "+dueDate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__.X,{label:number,status:"highlight"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__.m,{addClass:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",addClass:"btn-icon",iconStartName:"options",dataToggle:"dropdown","aria-expanded":"false","data-boundary":"window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__.h,{label:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to top",iconName:"arrow-top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move up",iconName:"arrow-up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move down",iconName:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to bottom",iconName:"arrow-bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Delete",type:"danger",iconName:"delete"})]})]})]});ItemsGroupHeader.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroupHeader",props:{label:{required:!1,tsType:{name:"string"},description:""},number:{required:!1,tsType:{name:"number"},description:""},date:{required:!1,tsType:{name:"string"},description:""},dueDate:{required:!1,tsType:{name:"string"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);