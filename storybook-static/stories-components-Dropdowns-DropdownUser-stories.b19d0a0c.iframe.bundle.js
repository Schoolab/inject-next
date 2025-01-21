"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2097],{"./src/stories/components/Dropdowns/DropdownUser.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{User:()=>User,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropdownUser_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Dropdown=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),DropdownMenu=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),DropdownItem=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),DropdownDivider=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),nestedDropdown=__webpack_require__("./public/utils/nestedDropdown.js"),Avatar=__webpack_require__("./src/app/components/avatars/Avatar.tsx"),Role=__webpack_require__("./src/app/components/badges/roles/Role.tsx"),DropdownNested=__webpack_require__("./src/app/components/dropdown/DropdownNested.tsx");const DropdownUser=({})=>((0,react.useEffect)((()=>{(0,nestedDropdown.z)()}),[]),(0,jsx_runtime.jsx)(Dropdown.m,{children:(0,jsx_runtime.jsxs)(DropdownMenu.r,{show:!0,children:[(0,jsx_runtime.jsxs)(DropdownItem.t,{label:"Profile",addClass:"gap-xs",children:[(0,jsx_runtime.jsx)(Avatar.e,{}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column justify-content-center w-100",children:[(0,jsx_runtime.jsxs)("span",{className:"d-flex align-items-center gap-2xs",children:["John Doe ",(0,jsx_runtime.jsx)(Role.X,{status:"admin"})]}),(0,jsx_runtime.jsx)("span",{className:"small text-muted mb-none",children:"Head of Tests"})]})]}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Profile"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Followings"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Events"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Surveys"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Settings",iconName:"settings"}),(0,jsx_runtime.jsxs)(DropdownNested.V,{direction:"dropright",children:[(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Theme: Device",iconName:"theme-dark",toggle:!0,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,jsx_runtime.jsxs)(DropdownMenu.r,{children:[(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Device theme",active:!0}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Light theme",active:!1}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Dark theme",active:!1})]})]}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Help center",iconName:"help-center",target:"_blank",rel:"nofollow",href:"https://www.notion.so/Help-Center-INSIDE-7e56175d45bc47e8947e7584f2e3837d"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Sign out",iconName:"signout",type:"danger"})]})}));DropdownUser.__docgenInfo={description:"",methods:[],displayName:"DropdownUser"};const DropdownUser_stories={title:"Components/Dropdowns/User",component:DropdownUser,parameters:{layout:"padded"}},User={},__namedExportsOrder=["User"];User.parameters={...User.parameters,docs:{...User.parameters?.docs,source:{originalSource:"{}",...User.parameters?.docs?.source}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass,style,...props})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);