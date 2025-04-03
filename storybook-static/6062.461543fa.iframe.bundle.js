"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[6062],{"./public/utils/tooltips.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>tooltips});const tooltips=()=>{$((function(){$('[data-toggle="tooltip"]').tooltip({trigger:"hover"});var tooltips=$('[data-toggle="tooltip"]');function disableTooltipInMobile(){tooltips.tooltip("enable"),window.matchMedia("(max-width: 991.98px)").matches&&tooltips.tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded a").tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded div").tooltip("disable")}tooltips.tooltip(),disableTooltipInMobile(),$(window).resize((function(){disableTooltipInMobile()}))}))}},"./src/app/components/modals/ModalAITab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>ModalAITab});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/buttons/Button.tsx"),_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./public/utils/tooltips.js"),_app_content_empty_states_EmptyState__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/content/empty-states/EmptyState.tsx"),_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const ModalAITab=({isShow=!1,emptyState=!1,loading=!1})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_5__.v)()}),[]);let classTabModal=["modal fade is-right"];return isShow&&classTabModal.push("show d-block"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTabModal.join(" "),id:"iaSidebar","aria-modal":"true",role:"dialog",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"modal-dialog modal-dialog-vertical",role:"document",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"modal-content scrollable",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"modal-header border-bottom",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"modal-title line-clamp-1 d-flex align-items-start",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:"AI Chat"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_4__.X,{label:"Beta 1",status:"highlight"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:"modal-nav nav nav-tabs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item active",id:"chat-tab","data-toggle":"tab","data-target":"#chat",type:"button",role:"tab","aria-controls":"chat","aria-selected":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Chat"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:" nav-link nav-item",id:"history-tab","data-toggle":"tab","data-target":"#history",type:"button",role:"tab","aria-controls":"responses","aria-selected":"false",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"History"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"modal-actions",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{className:"btn btn-default btn-sm text-ai",role:"button",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-ai"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"New chat"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"btn btn-transparent border-0 p-2xs text-muted",type:"button","data-dismiss":"modal","aria-label":"Close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-close is-24px","aria-hidden":"true"})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"tab-content h-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"chat",role:"tabpanel","aria-labelledby":"info-tab",className:"h-100 tab-pane fade active show",children:[emptyState?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_empty_states_EmptyState__WEBPACK_IMPORTED_MODULE_3__.p,{bordered:!1,iconBtn:"ai",title:"Your AI Agent is ready",iconTitle:"ai",text:"How can we help you?",labelBtn:"New chat",labelLink:"Support center"})}):loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"h-100 d-flex justify-content-center align-items-center small text-muted py-3 flex-column gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"spinner-border spinner-border-sm mr-3 text-primary",role:"status",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Loading..."})}),"Loading..."]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"nav nav-main flex-column border-bottom pl-5 pl-md-7 pr-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"nav-item d-flex justify-content-between align-items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:" d-flex line-clamp-1 flex-fill",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"nav-link--label d-flex align-items-center gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/mistral.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:"What is a design system ?"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-options dropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item update-comment","data-url":"/rest/comment/924/edit-modal",children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger delete-comment","data-url":"/rest/comment/924/delete",children:"Delete"})]})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"modal-body have-sticky-footer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message align-items-end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"thumbnail is-oval is-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"metas is-list small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-muted d-flex align-items-center gap-2xs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Pierre Lemeteil"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"June 18, 2024"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"3:40 PM"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row align-items-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-content gap-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"What is a design system ?"})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-end gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"thumbnail is-oval is-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/thumbnails/mistral.png"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"metas is-list small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-muted d-flex align-items-center gap-2xs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Mistral IA_"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"June 18, 2024"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"3:41 PM"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row align-items-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-content gap-md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"A design system is a set of interconnected standards used to manage design on a large scale. Here are some key components"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Design Guidelines: Rules and principles that guide the creation of consistent and high-quality products."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Reusable Components: Standardized and reusable user interface elements (like buttons, forms, etc.) that streamline development."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Design Patterns: Proven solutions to common design problems."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Documentation: Instructions and standards for using the components and design principles."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"The goal is to ensure visual and functional consistency across all products and experiences of a brand, while optimizing development time and simplifying maintenance."})]})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"thumb-up",size:"sm",type:"transparent",addClass:"text-muted "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"thumb-down",size:"sm",type:"transparent",addClass:"text-muted"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"copy",size:"sm",type:"transparent",addClass:"text-muted"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-end gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"thumbnail is-oval is-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/thumbnails/mistral.png"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"metas is-list small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-muted d-flex align-items-center gap-2xs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Mistral IA_"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"June 18, 2024"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"3:41 PM"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row align-items-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-content gap-md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"A design system is a set of interconnected standards used to manage design on a large scale. Here are some key components"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Design Guidelines: Rules and principles that guide the creation of consistent and high-quality products."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Reusable Components: Standardized and reusable user interface elements (like buttons, forms, etc.) that streamline development."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Design Patterns: Proven solutions to common design problems."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Documentation: Instructions and standards for using the components and design principles."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"The goal is to ensure visual and functional consistency across all products and experiences of a brand, while optimizing development time and simplifying maintenance."})]})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"thumb-up",size:"sm",type:"transparent",addClass:"text-muted "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"thumb-down",size:"sm",type:"transparent",addClass:"text-muted"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"copy",size:"sm",type:"transparent",addClass:"text-muted"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message align-items-end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"thumbnail is-oval is-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"metas is-list small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-muted d-flex align-items-center gap-2xs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Pierre Lemeteil"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"June 18, 2024"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"3:45 PM"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row align-items-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-content gap-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Could you develop what are Design patterns ?"})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-end gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"thumbnail is-oval is-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/thumbnails/mistral.png"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"metas is-list small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-muted d-flex align-items-center gap-2xs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Mistral IA_"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"June 18, 2024"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"3:46 PM"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-row align-items-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"message-content gap-md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"loading-bubble",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"spinner",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bounce1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bounce2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bounce3"})]})})})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex justify-content-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"reload",size:"sm",label:"try again",type:"transparent",addClass:"text-muted"})})]})]})]}),loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"modal-footer border-top is-sticky",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-100 message-composer-row disabled ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{className:"message-composer-input form-control",required:!0,placeholder:"Type your question here...",autoComplete:"off",defaultValue:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"btn btn-transparent btn-icon message-composer-action disabled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-send"})})]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"modal-footer border-top is-sticky",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-100 message-composer-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{className:"message-composer-input form-control",required:!0,placeholder:"Type your question here...",autoComplete:"off",defaultValue:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"btn btn-transparent btn-icon message-composer-action",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-send"})})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"history",role:"tabpanel","aria-labelledby":"history-tab",className:"h-100 tab-pane fade",children:[emptyState?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_empty_states_EmptyState__WEBPACK_IMPORTED_MODULE_3__.p,{bordered:!1,title:"No history",iconTitle:"format-list-bulleted",text:"Your chat list will be listed here"})}):loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"h-100 d-flex justify-content-center align-items-center small text-muted py-3 flex-column gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"spinner-border spinner-border-sm mr-3 text-primary",role:"status",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Loading..."})}),"Loading..."]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"modal-body have-sticky-footer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:"form-control form-control-md searchControl mb-3",placeholder:"Search",title:"Type in a name",type:"search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"nav nav-main flex-column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-title",children:"Today"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"nav-item d-flex justify-content-between align-items-center ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link d-flex line-clamp-1 flex-fill",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"nav-link--label d-flex align-items-center gap-xs active",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/mistral.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:"What is a design system ?"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-options dropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item update-comment","data-url":"/rest/comment/924/edit-modal",children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger delete-comment","data-url":"/rest/comment/924/delete",children:"Delete"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"nav-item d-flex justify-content-between align-items-center ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link d-flex line-clamp-1 flex-fill",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"nav-link--label d-flex align-items-center gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/InjectIA.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:"My second question very long with description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-options dropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item update-comment","data-url":"/rest/comment/924/edit-modal",children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger delete-comment","data-url":"/rest/comment/924/delete",children:"Delete"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"nav-item d-flex justify-content-between align-items-center ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link d-flex line-clamp-1 flex-fill",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"nav-link--label d-flex align-items-center gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/OpenIA.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:"My third question"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-options dropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item update-comment","data-url":"/rest/comment/924/edit-modal",children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger delete-comment","data-url":"/rest/comment/924/delete",children:"Delete"})]})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"nav nav-main flex-column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-title",children:"Yesterday"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"nav-item d-flex justify-content-between align-items-center ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link d-flex line-clamp-1 flex-fill",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"nav-link--label d-flex align-items-center gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/mistral.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:"My first question"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-options dropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item update-comment","data-url":"/rest/comment/924/edit-modal",children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger delete-comment","data-url":"/rest/comment/924/delete",children:"Delete"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"nav-item d-flex justify-content-between align-items-center ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link d-flex line-clamp-1 flex-fill",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"nav-link--label d-flex align-items-center gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/InjectIA.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:"My second question very long with description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-options dropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item update-comment","data-url":"/rest/comment/924/edit-modal",children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger delete-comment","data-url":"/rest/comment/924/delete",children:"Delete"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"nav-item d-flex justify-content-between align-items-center ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link d-flex line-clamp-1 flex-fill",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"nav-link--label d-flex align-items-center gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"img/OpenIA.svg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-truncate",children:"My third question"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"message-options dropdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-sm btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item update-comment","data-url":"/rest/comment/924/edit-modal",children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger delete-comment","data-url":"/rest/comment/924/delete",children:"Delete"})]})]})]})]})]})})}),loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"modal-footer border-top",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex gap-xs ml-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-lg btn-default disabled",href:"#",children:"New Chat"})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"modal-footer border-top",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex gap-xs ml-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-lg btn-default",href:"#",children:"New Chat"})})})]})]})]})})})};ModalAITab.__docgenInfo={description:"",methods:[],displayName:"ModalAITab",props:{isShow:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyState:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/app/content/empty-states/EmptyState.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>EmptyState});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/icons/Icon.tsx");const EmptyState=({title="No category",text="Your category will be listed here",labelLink,iconTitle,iconBtn="plus-circle",labelBtn,bordered=!0,spacious=!1,...props})=>{let classTab=["bg-white d-flex flex-column align-items-center gap-0px text-center"];return bordered&&classTab.push("border rounded"),!spacious&&classTab.push("px-2xl py-2xl"),spacious&&classTab.push("px-3xl py-80px"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[iconTitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex pb-16px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{size:"sm",name:iconTitle})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-weight-bold",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"small text-muted",children:text})]}),labelBtn&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex pt-32px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"btn btn-lg btn-primary",children:[iconBtn&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconBtn}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:labelBtn})]})}),labelLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex py-16px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"small",children:labelLink})})]})};EmptyState.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"No category"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Your category will be listed here"',computed:!1}},iconTitle:{required:!1,tsType:{name:"string"},description:""},iconBtn:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"plus-circle"',computed:!1}},labelBtn:{required:!1,tsType:{name:"string"},description:""},labelLink:{required:!1,tsType:{name:"string"},description:""},bordered:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},spacious:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}}}]);