"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[3295],{"./src/app/pages/manage/table/progress/ManageProgress.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Progress:()=>Progress,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ManageProgress_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),tooltips=__webpack_require__("./public/utils/tooltips.js"),tableheader=__webpack_require__("./public/utils/tableheader.js"),Views=__webpack_require__("./src/app/content/views/Views.tsx"),Filters=__webpack_require__("./src/app/content/filters/Filters.tsx"),TableSkewed=__webpack_require__("./src/app/content/tables/TableSkewed.tsx"),layout=__webpack_require__("./src/app/layouts/layout.tsx"),AppContent=__webpack_require__("./src/app/layouts/AppContent.tsx");const ManageProgress=({})=>((0,react.useEffect)((()=>{(0,tooltips.v)(),(0,tableheader.A)()}),[]),(0,jsx_runtime.jsx)(layout.P,{sideBar:"Manage",children:(0,jsx_runtime.jsx)(AppContent.D,{showStepper:!0,sections:"separated",showSubnav:!0,children:(0,jsx_runtime.jsxs)("div",{id:"mainTable",className:"application-section gap-16px dataTableContainer",children:[(0,jsx_runtime.jsx)(Views.P,{addClass:"pb-16px border-bottom"}),(0,jsx_runtime.jsx)(Filters.C,{}),(0,jsx_runtime.jsx)(TableSkewed.k,{})]})})}));ManageProgress.__docgenInfo={description:"",methods:[],displayName:"ManageProgress"};const ManageProgress_stories={title:"Pages/Manage/Table",component:ManageProgress,parameters:{layout:"fullscreen"}},Progress={},__namedExportsOrder=["Progress"];Progress.parameters={...Progress.parameters,docs:{...Progress.parameters?.docs,source:{originalSource:"{}",...Progress.parameters?.docs?.source}}}},"./public/utils/tableheader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>tableheader});const tableheader=()=>{$((function(){var appHeaderHeight=$(".application-header")[0].offsetHeight;$(".dataTables_scrollHead").css("top",appHeaderHeight),$(window).on("resize",(function(){$(".dataTables_scrollHead").css("top",appHeaderHeight)}))}))}},"./src/app/content/views/Views.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Views});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Icon.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Button.tsx");const Views=({id="tables-views",addClass,style,options=[{value:"_default",label:"All {{items}}",active:!0},{value:"draft",label:"Draft"},{value:"pending",label:"Pending review"},{value:"rejected",label:"Rejected"},{value:"accepted",label:"Accepted"}],addView=!1,buttons=[],...props})=>{const[viewOptions,setViewOptions]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options),handleOptionClick=value=>{setViewOptions((prevOptions=>prevOptions.map((option=>({...option,active:option.value===value})))))};let classTab=["d-flex align-items-lg-start justify-content-between gap-xs"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id,className:classTab.join(" "),style,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{name:"views",className:"dataTableFilter",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{name:"filters",id:"filter-select",className:"custom-select field-sizing d-md-none",children:viewOptions.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,onClick:()=>handleOptionClick(option.value),children:option.label},option.value)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-none d-md-flex btn-group btn-group-lg btn-group-toggle btn-filter-radios","data-toggle":"buttons","data-col":0,children:viewOptions.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"btn btn-default btn-lg "+(option.active?"active":""),onClick:()=>handleOptionClick(option.value),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"radio",className:"btn-check",name:"resourcesMainFilters[related]",id:`resourcesMainFilters_related_${option.value}`,defaultValue:option.value,autoComplete:"off",required:!0,defaultChecked:option.active}),option.active&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{name:"check",size:"xs"}),option.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{size:"2sm",name:option.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:option.label}),option.badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_2__.X,{label:option.badge,status:"highlight"})]},option.value)))})]}),buttons.map((button=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_4__.$,{...button}))),addView&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_4__.$,{label:"Add view",iconStartName:"plus-circle",type:"muted"})]})};Views.__docgenInfo={description:"",methods:[],displayName:"Views",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"tables-views"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    value: string;\n    label: string;\n    icon?: string;\n    badge?: string;\n    active?: boolean;\n    disabled?: boolean;\n}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    {\n        value: "_default",\n        label: "All {{items}}",\n        active: true,\n    },\n    {\n        value: "draft",\n        label: "Draft",\n    },\n    {\n        value: "pending",\n        label: "Pending review",\n    },  \n    {\n        value: "rejected",\n        label: "Rejected",\n    },\n    {\n        value: "accepted",  \n        label: "Accepted",\n    },\n]',computed:!1}},addView:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:"",defaultValue:{value:"[]",computed:!1}}}}}}]);