"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[8397],{"./src/stories/components/Modals/CoachingSession/ModalCoachingSessionSent.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sent:()=>Sent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ModalCoachingSessionSent_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Button=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Button.tsx")),ItemsGroup=__webpack_require__("./src/app/components/items-group/ItemsGroup.tsx"),Icon=__webpack_require__("./src/app/components/Icon.tsx");const ModalCoachingSessionSent=({})=>(0,jsx_runtime.jsx)("div",{className:"application-modals modal show overflow-y-scroll",tabIndex:-1,role:"dialog",style:{zIndex:1040,display:"block"},"aria-modal":"true",children:(0,jsx_runtime.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",style:{maxWidth:"800px!important"},children:(0,jsx_runtime.jsxs)("div",{className:"modal-content",children:[(0,jsx_runtime.jsxs)("div",{className:"modal-header border-bottom",children:[(0,jsx_runtime.jsx)("h3",{className:"modal-title line-clamp-1",children:(0,jsx_runtime.jsx)("span",{className:"text-truncate",children:"New coaching session"})}),(0,jsx_runtime.jsx)("div",{className:"modal-actions",children:(0,jsx_runtime.jsx)("button",{className:"btn btn-transparent border-0 p-2xs text-muted",type:"button","data-dismiss":"modal","aria-label":"Close",children:(0,jsx_runtime.jsx)("span",{className:"icon icon-close is-24px","aria-hidden":"true"})})})]}),(0,jsx_runtime.jsxs)("div",{className:"modal-body d-flex flex-column gap-xl",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-md align-items-center text-center",children:[(0,jsx_runtime.jsx)(Icon.I,{size:"lg",name:"coaching"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-none",children:[(0,jsx_runtime.jsx)("h2",{children:"Invitation sent"}),(0,jsx_runtime.jsxs)("p",{children:["An invitation has been sent, you will receive an email when ",(0,jsx_runtime.jsx)("a",{href:"#",children:"Sasha Lehmann"})," accepts your invitation."]})]}),(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Add to calendar",iconStartName:"plus-circle"})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,jsx_runtime.jsx)("h3",{children:"Topic"}),(0,jsx_runtime.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione ullam, placeat illo veniam repudiandae dignissimos maiores numquam culpa debitis laudantium architecto ut reprehenderit quibusdam laboriosam! Quod cupiditate eius ea."})]}),(0,jsx_runtime.jsxs)(ItemsGroup.K,{addClass:"p-xl gap-md",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,jsx_runtime.jsx)("h3",{children:"Access"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[(0,jsx_runtime.jsx)(Icon.I,{size:"xs",name:"lock"}),(0,jsx_runtime.jsx)("span",{children:"Only visible to participants and staff"})]})]}),(0,jsx_runtime.jsx)("p",{children:"This meeting takes place online. Here is the information to attend to the meeting."}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-xs",children:[(0,jsx_runtime.jsx)(Icon.I,{size:"sm",name:"link",addClass:"text-muted"}),(0,jsx_runtime.jsx)("p",{children:"Meeting on meet.jit.si"})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-xs",children:[(0,jsx_runtime.jsx)(Icon.I,{size:"sm",name:"lock",addClass:"text-muted"}),(0,jsx_runtime.jsx)("p",{children:"Password: 6ndei-91bo3"})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-2xs align-items-start",children:[(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Join with Jitsi",iconStartName:"plus-circle"}),(0,jsx_runtime.jsx)("p",{className:"small text-muted",children:"meet.jit.si/schoolab-inject/dca0f6edf0e190628351b08f5da351ac"})]})]})]}),(0,jsx_runtime.jsx)("div",{className:"modal-footer border-top",children:(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-xs ml-auto",children:[(0,jsx_runtime.jsx)(Button.$,{type:"default",label:"Cancel"}),(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Done"})]})})]})})});ModalCoachingSessionSent.__docgenInfo={description:"",methods:[],displayName:"ModalCoachingSessionSent"};const ModalCoachingSessionSent_stories={title:"Components/Modals/Coaching Session",component:ModalCoachingSessionSent,parameters:{layout:"fullscreen"}},Sent={},__namedExportsOrder=["Sent"];Sent.parameters={...Sent.parameters,docs:{...Sent.parameters?.docs,source:{originalSource:"{}",...Sent.parameters?.docs?.source}}}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Tag=({isPill=!0,iconName,status="default",label,link,addClass,style,children,...props})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},isPill:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./src/app/components/items-group/ItemsGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemsGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_items_group_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx");const ItemsGroup=({children,addClass,style,...props})=>{let classTab=["item-group"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_items_group_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__.H,{label:"Items Group",number:3}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}})]})]})})};ItemsGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/items-group/ItemsGroupHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ItemsGroupHeader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx"),_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/badges/tags/Tag.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx"),_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownHeader.tsx"),_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx");const ItemsGroupHeader=({label,number,date,dueDate,locked,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["item-group-header"].join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4",{className:"nav-title flex-fill mb-none",children:label}),date&&!dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"open",iconName:locked?"status-bordered":"status-filled",label:date}),date&&dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"progress",iconName:locked?"status-bordered":"status-dashed",label:date+" -> "+dueDate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__.X,{label:number,status:"highlight"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__.m,{addClass:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",addClass:"btn-icon",iconStartName:"options",dataToggle:"dropdown","aria-expanded":"false","data-boundary":"window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__.h,{label:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to top",iconName:"arrow-top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move up",iconName:"arrow-up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move down",iconName:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to bottom",iconName:"arrow-bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Delete",type:"danger",iconName:"delete"})]})]})]});ItemsGroupHeader.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroupHeader",props:{label:{required:!1,tsType:{name:"string"},description:""},number:{required:!1,tsType:{name:"number"},description:""},date:{required:!1,tsType:{name:"string"},description:""},dueDate:{required:!1,tsType:{name:"string"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/app/content/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Placeholder=({width="100%",height="40px",addClass,style})=>{let classTab=["placeholder-container"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{width,height,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder"})})};Placeholder.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"40px"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);