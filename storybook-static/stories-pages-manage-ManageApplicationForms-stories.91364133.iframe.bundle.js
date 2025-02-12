"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[8926],{"./src/stories/pages/manage/ManageApplicationForms.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ApplicationForms:()=>ApplicationForms,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ManageApplicationForms_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),layout=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/layouts/layout.tsx")),AppContent=__webpack_require__("./src/app/layouts/AppContent.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx"),ItemsGroup=__webpack_require__("./src/app/components/items-group/ItemsGroup.tsx"),ItemsGroupHeader=__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx"),ItemQuestionnaire=__webpack_require__("./src/app/components/items/ItemQuestionnaire.tsx"),ItemCondition=__webpack_require__("./src/app/components/items/ItemCondition.tsx"),Section=__webpack_require__("./src/app/components/Section.tsx"),EmptyState=__webpack_require__("./src/app/components/EmptyState.tsx"),ItemForm=__webpack_require__("./src/app/components/items/parts/ItemForm.tsx");const ManageApplicationForms=()=>(0,jsx_runtime.jsx)(layout.P,{sideBar:"Manage",children:(0,jsx_runtime.jsx)(AppContent.D,{sections:"transparent",breadcrumb:[{label:"Impact Innovators",href:"#"},{label:"Manage",href:"#"},{label:"Participants",href:"#"},{label:"Application forms"}],title:"Application forms",children:(0,jsx_runtime.jsx)("div",{className:"row",children:(0,jsx_runtime.jsxs)("div",{className:"col-12",children:[(0,jsx_runtime.jsx)(Section.w,{title:"Participants",subtitle:"Add questions you want to ask to participants during their applications.",collapsable:!0,isOpen:!0,collapsableId:"participants",children:(0,jsx_runtime.jsxs)("div",{className:"grid-vertical gap-md",children:[(0,jsx_runtime.jsxs)(ItemsGroup.K,{children:[(0,jsx_runtime.jsx)(ItemsGroupHeader.H,{label:"Basic info"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"text",label:"Your name",required:!0,locked:!0}),(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"textarea",label:"Describe yourself",required:!0,locked:!0}),(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"select",label:"Select your program",required:!0,locked:!0}),(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"radio",label:"Are you a student?",required:!0})]})]}),(0,jsx_runtime.jsxs)(ItemsGroup.K,{children:[(0,jsx_runtime.jsx)(ItemsGroupHeader.H,{label:"School info"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,jsx_runtime.jsx)(ItemCondition.d,{condition:"Participant's type is",value:"Student",children:(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"checklist",label:"Choose your school",caption:"238 options: [list options here]",required:!0,collapsable:!0,id:"school",children:(0,jsx_runtime.jsx)(ItemForm.m,{addClass:"bg-highlight rounded-sm p-lg mb-2xs"})})}),(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"attachment",label:"Upload your resume",required:!0}),(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"link",label:"Your LinkedIn profile",required:!0})]})]}),(0,jsx_runtime.jsxs)(ItemsGroup.K,{children:[(0,jsx_runtime.jsx)(ItemsGroupHeader.H,{label:"Conditions"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"checkbox",label:"I agree to the terms and conditions",required:!0,locked:!0}),(0,jsx_runtime.jsx)(ItemQuestionnaire.P,{type:"rating",label:"Rate the program registration process",required:!0,isPrivate:!0})]}),(0,jsx_runtime.jsx)(Button.$,{label:"Add question",iconStartName:"plus-circle",size:"sm",type:"muted",addClass:"align-self-start"})]}),(0,jsx_runtime.jsx)(Button.$,{label:"Add step",iconStartName:"plus-circle",size:"sm",type:"muted",addClass:"align-self-start"})]})}),(0,jsx_runtime.jsx)(Section.w,{title:"Projects",subtitle:"Add questions you want to ask to participants during their applications.",collapsable:!0,isOpen:!0,collapsableId:"projects",children:(0,jsx_runtime.jsx)(EmptyState.p,{title:"There’s no questions yet",text:"Before being able to add a question you have to create a first step.",iconTitle:"questionnaire",iconBtn:"plus-circle",labelBtn:"Add step",labelLink:"Learn more about questions",spacious:!0})}),(0,jsx_runtime.jsx)(Section.w,{title:"Experts",subtitle:"Add questions you want to ask to participants during their applications.",collapsable:!0,isOpen:!1,collapsableId:"experts",children:(0,jsx_runtime.jsx)(EmptyState.p,{title:"There’s no questions yet",text:"Before being able to add a question you have to create a first step.",iconTitle:"questionnaire",iconBtn:"plus-circle",labelBtn:"Add step",labelLink:"Learn more about questions",spacious:!0})}),(0,jsx_runtime.jsx)(Section.w,{title:"Jury",subtitle:"Add questions you want to ask to participants during their applications.",collapsable:!0,isOpen:!1,collapsableId:"jury",children:(0,jsx_runtime.jsx)(EmptyState.p,{title:"There’s no questions yet",text:"Before being able to add a question you have to create a first step.",iconTitle:"questionnaire",iconBtn:"plus-circle",labelBtn:"Add step",labelLink:"Learn more about questions"})})]})})})});ManageApplicationForms.__docgenInfo={description:"",methods:[],displayName:"ManageApplicationForms"};const ManageApplicationForms_stories={title:"Pages/Manage/ApplicationForms",component:ManageApplicationForms,parameters:{layout:"fullscreen"}},ApplicationForms={},__namedExportsOrder=["ApplicationForms"];ApplicationForms.parameters={...ApplicationForms.parameters,docs:{...ApplicationForms.parameters?.docs,source:{originalSource:"{}",...ApplicationForms.parameters?.docs?.source}}}},"./src/app/components/Section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Section});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Button.tsx");const Section=({title,subtitle,subtitleIcon,buttons,children,collapsable,collapsableId,isOpen=!0,addClass,style,...props})=>{let classTab=["application-section"];addClass&&classTab.push(addClass);let classCollapse=["collapse"];isOpen&&classCollapse.push("show");let listButtons=null==buttons?void 0:buttons.map((button=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_4__.$,{label:button.label,type:button.type,link:button.link,iconStartName:button.iconStartName,iconEndName:button.iconEndName,size:"sm"})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children:title&&collapsable&&collapsableId?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"application-section--title","data-toggle":"collapse","data-target":`#${collapsableId}`,"aria-expanded":isOpen?"true":"false",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"application-section--title-content",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[subtitleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:subtitleIcon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:subtitle})]})]}),buttons&&listButtons,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-chevron-right ml-auto"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classCollapse.join(" "),id:collapsableId,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"application-section--title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"application-section--title-content",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[subtitleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:subtitleIcon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:subtitle})]})]}),buttons&&listButtons]}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})]})})};Section.__docgenInfo={description:"",methods:[],displayName:"Section",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},subtitleIcon:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    addClass?: string;\n    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;\n    label?: string | number; \n    iconStartName?: string;\n    iconEndName?: string;\n    link?: string;\n    hasDropdown?: Boolean;\n}',signature:{properties:[{key:"addClass",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}],required:!0}},{key:"label",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"iconStartName",value:{name:"string",required:!1}},{key:"iconEndName",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}},{key:"hasDropdown",value:{name:"Boolean",required:!1}}]}}],raw:"ButtonType[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},collapsable:{required:!1,tsType:{name:"boolean"},description:""},collapsableId:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Tag=({isPill=!0,iconName,status="default",label,link,addClass,style,children,...props})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},isPill:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./src/app/components/items-group/ItemsGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemsGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_items_group_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx");const ItemsGroup=({children,addClass,style,...props})=>{let classTab=["item-group"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_items_group_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__.H,{label:"Items Group",number:3}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}})]})]})})};ItemsGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/items-group/ItemsGroupHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ItemsGroupHeader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx"),_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/badges/tags/Tag.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx"),_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownHeader.tsx"),_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx");const ItemsGroupHeader=({label,number,date,dueDate,locked,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["item-group-header"].join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4",{className:"nav-title flex-fill mb-none",children:label}),date&&!dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"open",iconName:locked?"status-bordered":"status-filled",label:date}),date&&dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"progress",iconName:locked?"status-bordered":"status-dashed",label:date+" -> "+dueDate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__.X,{label:number,status:"highlight"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__.m,{addClass:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",addClass:"btn-icon",iconStartName:"options",dataToggle:"dropdown","aria-expanded":"false","data-boundary":"window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__.h,{label:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to top",iconName:"arrow-top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move up",iconName:"arrow-up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move down",iconName:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to bottom",iconName:"arrow-bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Delete",type:"danger",iconName:"delete"})]})]})]});ItemsGroupHeader.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroupHeader",props:{label:{required:!1,tsType:{name:"string"},description:""},number:{required:!1,tsType:{name:"number"},description:""},date:{required:!1,tsType:{name:"string"},description:""},dueDate:{required:!1,tsType:{name:"string"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/app/components/items/ItemCondition.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>ItemCondition});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/content/Placeholder.tsx"));const ItemCondition=({condition="If Participant's type is",value="Student",addClass,style,children,...props})=>{let classTab=["item--condition-wrapper"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),style,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"py-8px px-12px d-flex justify-content-between align-items-center text-muted small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[condition," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-body",children:value})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Condition"})]}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_2__.O,{style:{border:"1px solid var(--border-default)"}})]})};ItemCondition.__docgenInfo={description:"",methods:[],displayName:"ItemCondition",props:{condition:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"If Participant\'s type is"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Student"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/app/components/items/ItemQuestionnaire.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>ItemQuestionnaire});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/Button.tsx"),_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownHeader.tsx"),_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx");const QuestionType=({type="text",addClass,style,...props})=>{let icon="form-textbox",title="Short text";return"text"===type&&(icon="form-textbox",title="Short text"),"textarea"===type&&(icon="form-textarea",title="Long text"),"select"===type&&(icon="form-select",title="Unique choice (select)"),"radio"===type&&(icon="form-radiobox-marked",title="Unique choice (radio)"),"checkbox"===type&&(icon="form-checkbox-marked",title="Multiple choices"),"checklist"===type&&(icon="form-checklist",title="Checklist"),"attachment"===type&&(icon="attachment",title="Resources"),"link"===type&&(icon="link",title="Link"),"rating"===type&&(icon="rating",title="Rating"),"votes"===type&&(icon="votes",title="Votes"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"2sm",addClass:"p-3xs text-muted",dataToggle:"tooltip",dataPlacement:"top",dataOriginalTitle:title,dataBoundary:"window"})},ItemQuestionnaire=({id="question1",type="text",label,caption,required,isPrivate,locked,collapsable,link="#",options=!0,addClass,style,children,...props})=>{let tabClass=["item","is-small","is-bordered","gap-0px"];return addClass&&tabClass.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:tabClass.join(" "),style,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row gap-2xs pb-8px","data-toggle":collapsable?"collapse":void 0,"data-target":collapsable?`#${id}`:void 0,"aria-expanded":collapsable?"false":void 0,"data-boundary":"window",children:[collapsable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-xs btn-transparent btn-icon","data-toggle":"collapse","data-target":`#${id}`,"aria-expanded":"false",href:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-chevron-right","data-toggle":"tooltip","data-placement":"top","data-original-title":"Click to toggle.","data-boundary":"window"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-fill gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuestionType,{type}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-content d-flex flex-column align-items-start justify-content-center",children:[collapsable?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4",{className:" h4 item-title",children:[label,required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-danger","data-toggle":"tooltip","data-placement":"top","data-original-title":"Required question","data-boundary":"window",children:"*"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:" h4 item-title stretched-link",children:[label,required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-danger","data-toggle":"tooltip","data-placement":"top","data-original-title":"Required question","data-boundary":"window",children:"*"})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:caption})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-center gap-xs dropdown z-2",children:[isPrivate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"visibility-off",size:"2sm",addClass:"text-muted",dataToggle:"tooltip",dataPlacement:"top",dataOriginalTitle:"Private response",dataBoundary:"window"}),locked&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"lock",size:"2sm",addClass:"text-muted",dataToggle:"tooltip",dataPlacement:"top",dataOriginalTitle:"Locked. Can't be moved or deleted.",dataBoundary:"window"}),options&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__.m,{addClass:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_5__.$,{type:"muted",addClass:"btn-icon",iconStartName:"options",dataToggle:"dropdown","aria-expanded":"false","data-boundary":"window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_8__.h,{label:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to top",iconName:"arrow-top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move up",iconName:"arrow-up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move down",iconName:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to bottom",iconName:"arrow-bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_9__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil","data-toggle":"collapse","data-target":`#${id}`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Delete",type:"danger",iconName:"delete"})]})]})]})]}),collapsable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"collapse",id,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{addClass:"rounded-sm mb-2xs",style:{height:"16rem"}})})]})};QuestionType.__docgenInfo={description:"",methods:[],displayName:"QuestionType",props:{type:{required:!1,tsType:{name:"union",raw:'"text" | "textarea" | "select" | "radio" | "checkbox" | "checklist" | "attachment" | "link" | "rating" | "votes"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"textarea"'},{name:"literal",value:'"select"'},{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"checklist"'},{name:"literal",value:'"attachment"'},{name:"literal",value:'"link"'},{name:"literal",value:'"rating"'},{name:"literal",value:'"votes"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}},ItemQuestionnaire.__docgenInfo={description:"",methods:[],displayName:"ItemQuestionnaire",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"question1"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "textarea" | "select" | "radio" | "checkbox" | "checklist" | "attachment" | "link" | "rating" | "votes"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"textarea"'},{name:"literal",value:'"select"'},{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"checklist"'},{name:"literal",value:'"attachment"'},{name:"literal",value:'"link"'},{name:"literal",value:'"rating"'},{name:"literal",value:'"votes"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},isPrivate:{required:!1,tsType:{name:"boolean"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""},collapsable:{required:!1,tsType:{name:"boolean"},description:""},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},options:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);