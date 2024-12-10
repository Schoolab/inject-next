"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2778],{"./src/app/components/Progress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Progress});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Progress=({percentage=0,text="0/8",subtext="completed",size="sm",addClass,style,...props})=>{let classTab=["progress-circle-container flex-shrink-0"];return size&&classTab.push(`is-${size}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{className:classTab.join(" "),...props,viewBox:"0 0 32 32","data-percent":percentage,style:{"--percent":percentage,...style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{className:"progress-circle progress-circle-bg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{className:"progress-circle progress-circle-percent"}),100===percentage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{className:"progress-circle-icon is-checked",d:"M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"}),text&&"lg"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:20,children:text}),text&&"xl"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:15,children:text}),text&&"2xl"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:16,children:text}),subtext&&("xl"===size||"2xl"===size)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-subtext",x:16,y:20,children:subtext})})]})};Progress.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{percentage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"0/8"',computed:!1}},subtext:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"completed"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the progress icon be?",defaultValue:{value:'"sm"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./src/app/components/page-header/Breadcrumb.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Breadcrumb});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Breadcrumb=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:"breadcrumb-container","aria-label":"breadcrumb",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol",{className:"breadcrumb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"breadcrumb-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"icon icon-program"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"breadcrumb-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",children:"Item"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Item"})]})});Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"}},"./src/app/components/page-header/SubNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>SubNav});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SubNav=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"application-subnav border-bottom",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:"nav nav-tabs w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item active",children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item",children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item",children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link nav-item ",children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"nav-item dropdown ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"nav-link dropdown-toggle","data-toggle":"dropdown","data-boundary":"window","aria-expanded":"false","aria-haspopup":"true",children:"dropdown 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item",children:"sub item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item",children:"sub item 1"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"nav-item dropdown ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"nav-link dropdown-toggle","data-toggle":"dropdown","data-boundary":"window","aria-expanded":"false","aria-haspopup":"true",children:"dropdown 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item",children:"sub item 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item",children:"sub item 2"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item",children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item",children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item",children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item",children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item",children:"Item"})]})});SubNav.__docgenInfo={description:"",methods:[],displayName:"SubNav"}},"./src/app/components/page-header/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Button.tsx")),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Icon.tsx");const Title=({title="Page title",iconName,emoji,backLink,paginationLabel,prevLink,nextLink,buttons,addClass})=>{let classTab=["application-title"];addClass&&classTab.push(addClass);let listButtons=null==buttons?void 0:buttons.map((button=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{label:button.label,disabled:button.disabled,isActive:button.isActive,showActive:button.showActive,hasDropdown:button.hasDropdown,iconStartName:button.iconStartName,iconEndName:button.iconEndName,addClass:button.addClass,type:button.type,size:button.size,extended:button.extended,outlined:button.outlined})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-lg-none flex-grow-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[backLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{link:backLink,type:"default",iconStartName:"arrow-left",size:"default","data-toggle":"tooltip","data-original-title":"Back"}),(prevLink||nextLink)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-center gap-xs",children:[paginationLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{className:"text-muted",children:paginationLabel}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{type:"default",iconStartName:"chevron-left",disabled:!prevLink,size:"default","data-toggle":"tooltip","data-original-title":"Previous"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{type:"default",iconStartName:"chevron-right",disabled:!nextLink,size:"default","data-toggle":"tooltip","data-original-title":"Next"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h2 m-none dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",id:"titleDropdown",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"titleDropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",href:"#",children:"Engagement"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",href:"#",children:"Participants"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",href:"#",children:"Projets"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",href:"#",children:"Experts"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",href:"#",children:"Evaluations"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",href:"#",children:"Contenu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",href:"#",children:"Paramètres"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-none d-lg-block flex-grow-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-grow-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-xs",children:[backLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{link:backLink,type:"default",iconStartName:"arrow-left",size:"default","data-toggle":"tooltip","data-original-title":"Back"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"h3 d-flex gap-xs m-none",children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{name:iconName}),emoji&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:emoji}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:title})]})]})}),(prevLink||nextLink)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-center gap-xs",children:[paginationLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{className:"text-muted",children:paginationLabel}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{type:"default",iconStartName:"chevron-left",disabled:!prevLink,size:"default","data-toggle":"tooltip","data-original-title":"Previous"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{type:"default",iconStartName:"chevron-right",disabled:!nextLink,size:"default","data-toggle":"tooltip","data-original-title":"Next"})]})]})}),buttons&&listButtons]})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{title:{required:!1,tsType:{name:"string"},description:"Title",defaultValue:{value:'"Page title"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"Icon"},emoji:{required:!1,tsType:{name:"string"},description:"Emoji"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},backLink:{required:!1,tsType:{name:"string"},description:""},paginationLabel:{required:!1,tsType:{name:"string"},description:""},prevLink:{required:!1,tsType:{name:"string"},description:""},nextLink:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    label?: string; \n    disabled?: Boolean;\n    isActive?: Boolean;\n    showActive?: Boolean;\n    hasDropdown?: Boolean;\n    iconStartName?: string;\n    iconEndName?: string;\n    addClass?: string;\n    type?: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;\n    size?: "default" | "sm" | "xs";\n    extended?: Boolean;\n    outlined?: Boolean;\n}',signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"disabled",value:{name:"Boolean",required:!1}},{key:"isActive",value:{name:"Boolean",required:!1}},{key:"showActive",value:{name:"Boolean",required:!1}},{key:"hasDropdown",value:{name:"Boolean",required:!1}},{key:"iconStartName",value:{name:"string",required:!1}},{key:"iconEndName",value:{name:"string",required:!1}},{key:"addClass",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}],required:!1}},{key:"size",value:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}],required:!1}},{key:"extended",value:{name:"Boolean",required:!1}},{key:"outlined",value:{name:"Boolean",required:!1}}]}}],raw:"ButtonType[]"},description:""}}}},"./src/app/components/sidebar/SidebarAdmin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SidebarAdmin});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SidebarAdmin=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("aside",{className:"application-sidebar d-none d-lg-block",id:"leftMainSidebar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"sidebar overflow-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"accordionManageNav",className:"d-flex flex-column flex-fill gap-xl px-24px pt-24px pb-32px accordion",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"nav nav-main flex-column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-title",children:"Schoolab"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-chart-line"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Overview"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link active",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-org"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Organization"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-program"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Programs"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-project"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Projects"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-account"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Users"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-coaching"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Coaching"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-calendar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Events"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-toolbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Toolbox"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-tag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Tags"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-console"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Logs"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Mails"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"nav nav-main flex-column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-title",children:"External"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Overview"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Programs"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Settings"})})})]})]})})});SidebarAdmin.__docgenInfo={description:"",methods:[],displayName:"SidebarAdmin"}},"./src/app/layouts/AppContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>AppContent});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Breadcrumb=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/page-header/Breadcrumb.tsx")),Title=__webpack_require__("./src/app/components/page-header/Title.tsx"),SubNav=__webpack_require__("./src/app/components/page-header/SubNav.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx"),Progress=__webpack_require__("./src/app/components/Progress.tsx");const Stepper=({})=>(0,jsx_runtime.jsx)("div",{className:"application-post-it",children:(0,jsx_runtime.jsx)("div",{className:"container-lg container-lg-fluid px-sm px-md-md px-lg-xl",children:(0,jsx_runtime.jsx)("div",{className:"item is-static resource",children:(0,jsx_runtime.jsxs)("div",{className:"item-row  gap-xs",children:[(0,jsx_runtime.jsxs)("div",{className:"mr-5 d-flex flex-fill",children:[(0,jsx_runtime.jsx)("div",{className:"item-icon is-darker icon icon-information "}),(0,jsx_runtime.jsxs)("div",{className:"item-content ml-3",children:[(0,jsx_runtime.jsx)("h4",{className:"mb-none ",children:"Complete the basic info"}),(0,jsx_runtime.jsxs)("span",{className:"small text-body line-clamp-2",children:["Review key details: program name, description, dates, visibility."," ",(0,jsx_runtime.jsx)("a",{className:"text-body font-weight-bold",href:"#",children:"Support center."})]})]})]}),(0,jsx_runtime.jsxs)(Button.$,{type:"default",size:"sm",addClass:"z-2",children:[(0,jsx_runtime.jsx)(Progress.k,{percentage:0,size:"sm",style:{width:"1rem",height:"1rem"}}),(0,jsx_runtime.jsx)("span",{className:"d-none d-lg-inline",children:"Mark as completed"})]}),(0,jsx_runtime.jsx)(Button.$,{type:"default",iconStartName:"chevron-left",size:"sm","data-toggle":"tooltip",addClass:"z-2 bg-none","data-original-title":"Previous"}),(0,jsx_runtime.jsx)(Button.$,{type:"default",iconStartName:"chevron-right",size:"sm","data-toggle":"tooltip",addClass:"z-2","data-original-title":"Next"})]})})})});Stepper.__docgenInfo={description:"",methods:[],displayName:"Stepper"};const Footer=({})=>(0,jsx_runtime.jsx)("footer",{className:"application-footer",children:(0,jsx_runtime.jsx)("div",{className:"container-fluid",style:{maxWidth:760},children:(0,jsx_runtime.jsx)("div",{className:"d-flex justify-content-center",children:(0,jsx_runtime.jsxs)("ul",{className:"metas is-list smaller justify-content-center",children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("span",{children:["© 2024",(0,jsx_runtime.jsx)("a",{className:"meta is-action",href:"#",target:"_blank",rel:"nofollow noreferrer noopener",children:"Schoolab"})]})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{className:"meta is-action",href:"/terms-and-conditions",target:"_blank",rel:"nofollow noreferrer noopener",children:"Terms of service"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{className:"meta is-action",href:"/privacy-policy",target:"_blank",rel:"nofollow noreferrer noopener",children:"Privacy policy"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{className:"meta is-action",href:"#",target:"_blank",rel:"nofollow noreferrer noopener",children:"Help center"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("div",{className:"dropdown",id:"changeLanguage",children:[(0,jsx_runtime.jsx)("span",{className:"dropdown-toggle cursorLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"English"}),(0,jsx_runtime.jsxs)("div",{className:"dropdown-menu",children:[(0,jsx_runtime.jsx)("a",{className:"dropdown-item",href:"#",children:"English"}),(0,jsx_runtime.jsx)("a",{className:"dropdown-item",href:"#",children:"French"})]})]})})]})})})});Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};const AppContent=({children,showSubnav=!0,showStepper=!1,isAsside,layout="centered",sections="cards",showBreadcrumb=!0,showTitle=!0})=>{let appMainContainerClass="application-main-content container-lg container-lg-fluid p-sm p-md-md p-lg-xl";isAsside&&(appMainContainerClass="application-main-content container-fluid p-sm p-md-md p-lg-xl"),"fluid"===layout&&(appMainContainerClass="application-main-content container-fluid p-sm p-md-md p-lg-xl"),"narrow"===layout&&(appMainContainerClass="application-main-content container-md p-sm p-md-md p-lg-xl"),"full"===layout&&(appMainContainerClass="application-landing");let appContentClass="application-content card-sections";"bordered"===sections&&(appContentClass="application-content bordered-sections"),"transparent"===sections&&(appContentClass="application-content transparent-sections"),"separated"===sections&&(appContentClass="application-content separated-sections");let titleClass=[""];return!showSubnav&&titleClass.push("border-bottom"),(0,jsx_runtime.jsxs)("main",{className:appContentClass,children:[showBreadcrumb&&(0,jsx_runtime.jsx)(Breadcrumb.Q,{}),showTitle&&(0,jsx_runtime.jsx)(Title.h,{backLink:"#",nextLink:"#",buttons:[{type:"default",label:"Preview",iconStartName:"preview",iconEndName:"new-tab",size:"sm"},{type:"primary",label:"Save changes",size:"sm"}],addClass:titleClass.join(" ")}),showSubnav&&(0,jsx_runtime.jsx)(SubNav.C,{}),showStepper&&(0,jsx_runtime.jsx)(Stepper,{}),(0,jsx_runtime.jsx)("div",{id:"appMainContainer",className:appMainContainerClass,children}),(0,jsx_runtime.jsx)(Footer,{})]})};AppContent.__docgenInfo={description:"",methods:[],displayName:"AppContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},showSubnav:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showStepper:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isAsside:{required:!1,tsType:{name:"boolean"},description:""},showBreadcrumb:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:'"centered" | "fluid" | "narrow" | "full"',elements:[{name:"literal",value:'"centered"'},{name:"literal",value:'"fluid"'},{name:"literal",value:'"narrow"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"centered"',computed:!1}},sections:{required:!1,tsType:{name:"union",raw:'"cards" | "bordered" | "transparent" | "separated"',elements:[{name:"literal",value:'"cards"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"separated"'}]},description:"",defaultValue:{value:'"cards"',computed:!1}}}}},"./src/app/layouts/layout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Layout});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_NavBar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/NavBar.tsx")),_components_Shortcutbar_ShortcutBar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Shortcutbar/ShortcutBar.tsx"),_components_sidebar_SidebarManage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/sidebar/SidebarManage.tsx"),_components_sidebar_SidebarAdmin__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/sidebar/SidebarAdmin.tsx");const Layout=({children,sideBar,theme,shortcutBarExpanded,showShortcutbar=!0,hub=!1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"application-ui",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__.F,{theme:theme&&theme,isHub:hub}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"application-container",children:[showShortcutbar&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Shortcutbar_ShortcutBar__WEBPACK_IMPORTED_MODULE_3__.Y,{isExpanded:shortcutBarExpanded}),sideBar&&"Manage"===sideBar&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_SidebarManage__WEBPACK_IMPORTED_MODULE_4__.u,{}),sideBar&&"Admin"===sideBar&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_SidebarAdmin__WEBPACK_IMPORTED_MODULE_5__.q,{}),children]})]});Layout.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},shortcutBarExpanded:{required:!1,tsType:{name:"boolean"},description:""},hub:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sideBar:{required:!1,tsType:{name:"union",raw:'"Admin" | "Manage"',elements:[{name:"literal",value:'"Admin"'},{name:"literal",value:'"Manage"'}]},description:""},theme:{required:!1,tsType:{name:"union",raw:'"default" | "Inject" | "Schoolab" | "Moho" | "Raiselab"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"Inject"'},{name:"literal",value:'"Schoolab"'},{name:"literal",value:'"Moho"'},{name:"literal",value:'"Raiselab"'}]},description:""},showShortcutbar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}}}}]);