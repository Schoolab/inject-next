"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5748],{"./src/stories/content/sections/SectionTimeline.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Content/Landing Sections/Timeline",component:__webpack_require__("./src/app/content/sections/SectionTimeline.tsx").P,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{},args:{}},Default={args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/content/sections/SectionTimeline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>SectionTimeline});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SectionTimeline=({title="Section title",subtitle="Use this line to summarize this section. View it as a TL:DR;",columns=[{color:"var(--bg-brand-primary)",date:"Date",label:"Step title",caption:"Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."},{color:"var(--bg-brand-secondary)",date:"Date",label:"Step title",caption:"Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."},{color:"var(--bg-brand-tertiary)",date:"Date",label:"Step title",caption:"Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."}],buttons,addClass,style,...props})=>{let classSection=["landing-section"];addClass&&classSection.push(addClass);let listColumns=null==columns?void 0:columns.map((column=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"cq-sm-4 d-flex flex-column gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-xs align-items-center",style:{color:column.color},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"circle",size:"2xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"font-weight-bold",children:column.date}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"display-3",children:column.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"small",children:column.caption})]})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:classSection.join(" "),style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container-xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"cq row-gap-xl",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cq-12 cq-lg-8 cq-offset-lg-2 mb-2xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-xs text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"display-2",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"lead",children:subtitle})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cq-12 cq-lg-10 cq-offset-lg-1 d-flex flex-column gap-2xl",children:columns&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cq row-gap-2xl",children:listColumns})})]})})})};SectionTimeline.__docgenInfo={description:"",methods:[],displayName:"SectionTimeline",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Section title"',computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Use this line to summarize this section. View it as a TL:DR;"',computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    color?: string;\n    date?: string;\n    label?: string;\n    caption?: string;\n}",signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"date",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"caption",value:{name:"string",required:!1}}]}}],raw:"ColumnType[]"},description:"",defaultValue:{value:'[\n    { color: "var(--bg-brand-primary)", date: "Date", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },\n    { color: "var(--bg-brand-secondary)", date: "Date", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },\n    { color: "var(--bg-brand-tertiary)", date: "Date", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },\n]',computed:!1}},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    type?: "primary" | "default";\n    label?: string;\n    link?: string;\n}',signature:{properties:[{key:"type",value:{name:"union",raw:'"primary" | "default"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}],required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}}]}}],raw:"ButtonType[]"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);