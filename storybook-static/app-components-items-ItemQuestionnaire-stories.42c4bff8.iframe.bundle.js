"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5021],{"./src/app/components/items/ItemQuestionnaire.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Caption:()=>Caption,Collapsable:()=>Collapsable,Default:()=>Default,PrivateAndLocked:()=>PrivateAndLocked,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Items/Questionnaire",component:__webpack_require__("./src/app/components/items/ItemQuestionnaire.tsx").P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"radio"},required:{control:"boolean"},isPrivate:{control:"boolean"},locked:{control:"boolean"},collapsable:{control:"boolean"}},args:{id:"questionDefault",type:"text",label:"Question Label",required:!1,isPrivate:!1,locked:!1,collapsable:!1,style:{width:"32rem"}}},Default={args:{id:"questionDefault"}},Caption={args:{id:"questionCaption",caption:"n options: [list options here]"}},Required={args:{id:"questionRequired",required:!0}},PrivateAndLocked={args:{id:"questionPrivateAndLocked",isPrivate:!0,locked:!0}},Collapsable={args:{id:"questionCollapsable",caption:"n options: [list options here]",collapsable:!0}},__namedExportsOrder=["Default","Caption","Required","PrivateAndLocked","Collapsable"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "questionDefault"\n  }\n}',...Default.parameters?.docs?.source}}},Caption.parameters={...Caption.parameters,docs:{...Caption.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "questionCaption",\n    caption: "n options: [list options here]"\n  }\n}',...Caption.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "questionRequired",\n    required: true\n  }\n}',...Required.parameters?.docs?.source}}},PrivateAndLocked.parameters={...PrivateAndLocked.parameters,docs:{...PrivateAndLocked.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "questionPrivateAndLocked",\n    isPrivate: true,\n    locked: true\n  }\n}',...PrivateAndLocked.parameters?.docs?.source}}},Collapsable.parameters={...Collapsable.parameters,docs:{...Collapsable.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "questionCollapsable",\n    caption: "n options: [list options here]",\n    collapsable: true\n  }\n}',...Collapsable.parameters?.docs?.source}}}},"./src/app/components/items/ItemQuestionnaire.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>ItemQuestionnaire});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/icons/Icon.tsx")),_app_content_placeholders_Placeholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/content/placeholders/Placeholder.tsx"),_app_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdowns/Dropdown.tsx"),_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/buttons/Button.tsx"),_app_components_dropdowns_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdowns/DropdownMenu.tsx"),_app_components_dropdowns_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdowns/DropdownItem.tsx"),_app_components_dropdowns_DropdownHeader__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdowns/DropdownHeader.tsx"),_app_components_dropdowns_DropdownDivider__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/app/components/dropdowns/DropdownDivider.tsx");const QuestionType=({type="text",addClass,style,...props})=>{let icon="form-textbox",title="Short text";return"text"===type&&(icon="form-textbox",title="Short text"),"textarea"===type&&(icon="form-textarea",title="Long text"),"select"===type&&(icon="form-select",title="Unique choice (select)"),"radio"===type&&(icon="form-radiobox-marked",title="Unique choice (radio)"),"checkbox"===type&&(icon="form-checkbox-marked",title="Multiple choices"),"checklist"===type&&(icon="form-checklist",title="Checklist"),"attachment"===type&&(icon="attachment",title="Resources"),"link"===type&&(icon="link",title="Link"),"rating"===type&&(icon="rating",title="Rating"),"votes"===type&&(icon="votes",title="Votes"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"2sm",addClass:"p-3xs text-muted",dataToggle:"tooltip",dataPlacement:"top",dataOriginalTitle:title,dataBoundary:"window"})},ItemQuestionnaire=({id="question1",type="text",label,caption,required,isPrivate,locked,collapsable,link="#",options=!0,addClass,style,children,...props})=>{let tabClass=["item","is-small","is-bordered","gap-0px"];return addClass&&tabClass.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:tabClass.join(" "),style,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row gap-2xs pb-8px","data-toggle":collapsable?"collapse":void 0,"data-target":collapsable?`#${id}`:void 0,"aria-expanded":collapsable?"false":void 0,"data-boundary":"window",children:[collapsable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-xs btn-transparent btn-icon","data-toggle":"collapse","data-target":`#${id}`,"aria-expanded":"false",href:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-chevron-right","data-toggle":"tooltip","data-placement":"top","data-original-title":"Click to toggle.","data-boundary":"window"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-fill gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuestionType,{type}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-content d-flex flex-column align-items-start justify-content-center",children:[collapsable?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4",{className:" h4 item-title",children:[label,required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-danger","data-toggle":"tooltip","data-placement":"top","data-original-title":"Required question","data-boundary":"window",children:"*"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:" h4 item-title stretched-link",children:[label,required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-danger","data-toggle":"tooltip","data-placement":"top","data-original-title":"Required question","data-boundary":"window",children:"*"})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:caption})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-center gap-xs dropdown z-2",children:[isPrivate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"visibility-off",size:"2sm",addClass:"text-muted",dataToggle:"tooltip",dataPlacement:"top",dataOriginalTitle:"Private response",dataBoundary:"window"}),locked&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"lock",size:"2sm",addClass:"text-muted",dataToggle:"tooltip",dataPlacement:"top",dataOriginalTitle:"Locked. Can't be moved or deleted.",dataBoundary:"window"}),options&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_4__.m,{addClass:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_5__.$,{type:"muted",addClass:"btn-icon",iconStartName:"options",dataToggle:"dropdown","aria-expanded":"false","data-boundary":"window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdowns_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdowns_DropdownHeader__WEBPACK_IMPORTED_MODULE_8__.h,{label:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdowns_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to top",iconName:"arrow-top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdowns_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move up",iconName:"arrow-up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdowns_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move down",iconName:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdowns_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to bottom",iconName:"arrow-bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdowns_DropdownDivider__WEBPACK_IMPORTED_MODULE_9__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdowns_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil","data-toggle":"collapse","data-target":`#${id}`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdowns_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Delete",type:"danger",iconName:"delete"})]})]})]})]}),collapsable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"collapse",id,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_placeholders_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{addClass:"rounded-sm mb-2xs",style:{height:"16rem"}})})]})};QuestionType.__docgenInfo={description:"",methods:[],displayName:"QuestionType",props:{type:{required:!1,tsType:{name:"union",raw:'"text" | "textarea" | "select" | "radio" | "checkbox" | "checklist" | "attachment" | "link" | "rating" | "votes"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"textarea"'},{name:"literal",value:'"select"'},{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"checklist"'},{name:"literal",value:'"attachment"'},{name:"literal",value:'"link"'},{name:"literal",value:'"rating"'},{name:"literal",value:'"votes"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}},ItemQuestionnaire.__docgenInfo={description:"",methods:[],displayName:"ItemQuestionnaire",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"question1"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "textarea" | "select" | "radio" | "checkbox" | "checklist" | "attachment" | "link" | "rating" | "votes"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"textarea"'},{name:"literal",value:'"select"'},{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"checklist"'},{name:"literal",value:'"attachment"'},{name:"literal",value:'"link"'},{name:"literal",value:'"rating"'},{name:"literal",value:'"votes"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},isPrivate:{required:!1,tsType:{name:"boolean"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""},collapsable:{required:!1,tsType:{name:"boolean"},description:""},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},options:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/app/content/placeholders/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Placeholder=({width="100%",height="40px",addClass,style})=>{let classTab=["placeholder-container"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{width,height,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder"})})};Placeholder.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"40px"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);