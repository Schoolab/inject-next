"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2777],{"./src/stories/components/SidebarItem.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Icon:()=>Icon,Locked:()=>Locked,NewFeature:()=>NewFeature,NewTab:()=>NewTab,Notif:()=>Notif,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Sidebar Item",component:__webpack_require__("./src/app/components/sidebar/SidebarItem.tsx").u,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{label:{control:"text"},href:{control:"text"},icon:{control:"text"},newFeature:{control:"boolean"},notif:{control:"number"},newTab:{control:"boolean"}},args:{label:"Label",href:"#",newFeature:!1,notif:0,newTab:!1,style:{}}},Default={},Active={args:{active:!0}},Icon={args:{icon:"home"}},Locked={args:{locked:!0}},Notif={args:{notif:1}},NewFeature={args:{newFeature:!0}},NewTab={args:{newTab:!0}},__namedExportsOrder=["Default","Active","Icon","Locked","Notif","NewFeature","NewTab"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  args: {\n    active: true\n  }\n}",...Active.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: "home"\n  }\n}',...Icon.parameters?.docs?.source}}},Locked.parameters={...Locked.parameters,docs:{...Locked.parameters?.docs,source:{originalSource:"{\n  args: {\n    locked: true\n  }\n}",...Locked.parameters?.docs?.source}}},Notif.parameters={...Notif.parameters,docs:{...Notif.parameters?.docs,source:{originalSource:"{\n  args: {\n    notif: 1\n  }\n}",...Notif.parameters?.docs?.source}}},NewFeature.parameters={...NewFeature.parameters,docs:{...NewFeature.parameters?.docs,source:{originalSource:"{\n  args: {\n    newFeature: true\n  }\n}",...NewFeature.parameters?.docs?.source}}},NewTab.parameters={...NewTab.parameters,docs:{...NewTab.parameters?.docs,source:{originalSource:"{\n  args: {\n    newTab: true\n  }\n}",...NewTab.parameters?.docs?.source}}}},"./public/utils/tooltips.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>tooltips});const tooltips=()=>{$((function(){$('[data-toggle="tooltip"]').tooltip({trigger:"hover"});var tooltips=$('[data-toggle="tooltip"]');function disableTooltipInMobile(){tooltips.tooltip("enable"),window.matchMedia("(max-width: 991.98px)").matches&&tooltips.tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded a").tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded div").tooltip("disable")}tooltips.tooltip(),disableTooltipInMobile(),$(window).resize((function(){disableTooltipInMobile()}))}))}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/badges/notifs/Notif.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Notif});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Notif=({addClass,status,label})=>{let classTab=["badge badge-notification"];return status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})})};Notif.__docgenInfo={description:"",methods:[],displayName:"Notif",props:{label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"interactive" | "accent" | "highlight"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"highlight"'}]},description:"Status"}}}},"./src/app/components/sidebar/SidebarItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>SidebarItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Icon.tsx"),_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./public/utils/tooltips.js");const SidebarLink=({id,label="Label",href="#",icon,active,locked,newFeature,notif=0,badge=0,newTab,items,parent,addClass,style,children,dataToggle,dataTarget,ariaExpanded,ariaControls,...props})=>{let classLink=["nav-link"];return active&&classLink.push("active"),locked&&classLink.push("disabled"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{id,href,className:classLink.join(" "),"data-toggle":dataToggle,"data-target":dataTarget,"aria-expanded":"true"===ariaExpanded,"aria-controls":ariaControls,children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{name:icon,addClass:"nav-link--icon","aria-label":label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:label}),locked&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{name:"lock",addClass:"nav-link--icon","aria-label":"Locked feature"}),newFeature&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_2__.X,{status:"interactive",label:"NEW","aria-label":"New feature"}),notif>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_2__.X,{status:"accent",label:notif.toString(),"aria-label":`${notif} notifications`}),badge>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_2__.X,{status:"highlight",label:badge.toString(),"aria-label":`${badge} elements`}),newTab&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{name:"new-tab",size:"2xs",addClass:"my-4px text-muted","aria-label":"New tab"})]})},SidebarItem=({id,label="Label",href="#",icon,active,locked,newFeature,notif=0,badge=0,newTab,items,parent,addClass,style,children,...props})=>{let classTab=["nav-item"];addClass&&classTab.push(addClass);const isAnyItemActive=null==items?void 0:items.some((item=>item.active)),isActive=active||isAnyItemActive;isActive&&["nav-link"].push("active");const tooltipProps=locked?{"data-toggle":"tooltip","data-placement":"right",tabIndex:0,"data-original-title":"<p class='m-2px font-weight-bold'>Access locked.</p><p class='small'>Ask your organization manager for access.</p>","data-html":"true","data-boundary":"window"}:{};return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_4__.v)()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:classTab.join(" "),style,...props,...tooltipProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SidebarLink,{id:`heading-${id}`,label,href,icon,active:isActive,locked,newFeature,notif,badge,newTab,addClass,style,children,...items&&{dataToggle:"collapse",dataTarget:`#${id}`,ariaExpanded:isActive?"true":"false",ariaControls:id}}),items&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{id,className:"collapse "+(isActive?"show":""),"aria-labelledby":`heading-${id}`,"data-parent":`#${parent}`,children:items.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SidebarLink,{...item})},index)))})]})};SidebarLink.__docgenInfo={description:"",methods:[],displayName:"SidebarLink",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""},newFeature:{required:!1,tsType:{name:"boolean"},description:""},notif:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},badge:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},newTab:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarItemProps"}],raw:"SidebarItemProps[]"},description:""},parent:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dataToggle:{required:!1,tsType:{name:"string"},description:""},dataTarget:{required:!1,tsType:{name:"string"},description:""},ariaExpanded:{required:!1,tsType:{name:"string"},description:""},ariaControls:{required:!1,tsType:{name:"string"},description:""}}},SidebarItem.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""},newFeature:{required:!1,tsType:{name:"boolean"},description:""},notif:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},badge:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},newTab:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarItemProps"}],raw:"SidebarItemProps[]"},description:""},parent:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dataToggle:{required:!1,tsType:{name:"string"},description:""},dataTarget:{required:!1,tsType:{name:"string"},description:""},ariaExpanded:{required:!1,tsType:{name:"string"},description:""},ariaControls:{required:!1,tsType:{name:"string"},description:""}}}}}]);