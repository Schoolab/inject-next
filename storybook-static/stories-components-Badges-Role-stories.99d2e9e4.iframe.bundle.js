"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[8073],{"./src/stories/components/Badges/Role.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Admin:()=>Admin,Expert:()=>Expert,Jury:()=>Jury,Manager:()=>Manager,Participant:()=>Participant,Visitor:()=>Visitor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Badges/Roles",component:__webpack_require__("./src/app/components/badges/roles/Role.tsx").X,parameters:{layout:"centered"},tags:["autodocs"]},Admin={args:{status:"admin"}},Expert={args:{status:"expert"}},Jury={args:{status:"jury"}},Manager={args:{status:"manager"}},Participant={args:{status:"participant"}},Visitor={args:{status:"visitor"}},__namedExportsOrder=["Admin","Expert","Jury","Manager","Participant","Visitor"];Admin.parameters={...Admin.parameters,docs:{...Admin.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: "admin"\n  }\n}',...Admin.parameters?.docs?.source}}},Expert.parameters={...Expert.parameters,docs:{...Expert.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: "expert"\n  }\n}',...Expert.parameters?.docs?.source}}},Jury.parameters={...Jury.parameters,docs:{...Jury.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: "jury"\n  }\n}',...Jury.parameters?.docs?.source}}},Manager.parameters={...Manager.parameters,docs:{...Manager.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: "manager"\n  }\n}',...Manager.parameters?.docs?.source}}},Participant.parameters={...Participant.parameters,docs:{...Participant.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: "participant"\n  }\n}',...Participant.parameters?.docs?.source}}},Visitor.parameters={...Visitor.parameters,docs:{...Visitor.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: "visitor"\n  }\n}',...Visitor.parameters?.docs?.source}}}},"./public/utils/tooltips.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>tooltips});const tooltips=()=>{$((function(){$('[data-toggle="tooltip"]').tooltip({trigger:"hover focus"});var tooltips=$('[data-toggle="tooltip"]');function disableTooltipInMobile(){tooltips.tooltip("enable"),window.matchMedia("(max-width: 991.98px)").matches&&tooltips.tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded a").tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded div").tooltip("disable")}tooltips.tooltip(),disableTooltipInMobile(),$(window).resize((function(){disableTooltipInMobile()}))}))}},"./src/app/components/badges/roles/Role.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Role});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/tooltips.js");const Role=({addClass,status})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__.v)()}),[]);let classTab=["badge badge-role"];status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass);let statusFirstCapitalize=status.charAt(0).toUpperCase()+status.slice(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":"tooltip","data-placement":"top","data-original-title":statusFirstCapitalize,"data-boundary":"window"})};Role.__docgenInfo={description:"",methods:[],displayName:"Role",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant" | "visitor"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'},{name:"literal",value:'"visitor"'}]},description:"Status"}}}}}]);