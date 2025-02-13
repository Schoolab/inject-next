"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[3554],{"./public/utils/maxlength.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>maxlength});const maxlength=()=>{$(".form-group > input[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"12px"},appendToParent:!0,separator:"/",showOnReady:!0}),$(".form-input-wrapper > input[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"40px"},appendToParent:!0,separator:"/",showOnReady:!0}),$("textarea[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"12px"},appendToParent:!0,separator:"/",showOnReady:!0})}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Tag=({isPill=!0,iconName,status="default",label,link,addClass,style,children,...props})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},isPill:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./src/app/components/items-group/ItemsGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemsGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_items_group_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx");const ItemsGroup=({children,addClass,style,...props})=>{let classTab=["item-group"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_items_group_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__.H,{label:"Items Group",number:3}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}})]})]})})};ItemsGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/items-group/ItemsGroupHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ItemsGroupHeader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx"),_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/badges/tags/Tag.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx"),_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownHeader.tsx"),_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx");const ItemsGroupHeader=({label,number,date,dueDate,locked,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["item-group-header"].join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4",{className:"nav-title flex-fill mb-none",children:label}),date&&!dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"open",iconName:locked?"status-bordered":"status-filled",label:date}),date&&dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"progress",iconName:locked?"status-bordered":"status-dashed",label:date+" -> "+dueDate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__.X,{label:number,status:"highlight"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__.m,{addClass:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",addClass:"btn-icon",iconStartName:"options",dataToggle:"dropdown","aria-expanded":"false","data-boundary":"window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__.h,{label:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to top",iconName:"arrow-top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move up",iconName:"arrow-up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move down",iconName:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to bottom",iconName:"arrow-bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Delete",type:"danger",iconName:"delete"})]})]})]});ItemsGroupHeader.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroupHeader",props:{label:{required:!1,tsType:{name:"string"},description:""},number:{required:!1,tsType:{name:"number"},description:""},date:{required:!1,tsType:{name:"string"},description:""},dueDate:{required:!1,tsType:{name:"string"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/app/forms/FormGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FormGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/content/Placeholder.tsx");const FormGroup=({label,srOnly,hint,id,required=!1,addClass,children,...props})=>{let classGroup=["form-group"],classLabel=["label"];return required&&classLabel.push("required"),srOnly&&classLabel.push("sr-only"),addClass&&classGroup.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:classLabel.join(" "),htmlFor:id,children:label}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"invalid-feedback",children:"Please enter a message in the textarea."})]})};FormGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hint:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/forms/FormInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FormInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_maxlength__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/maxlength.js");const FormInput=({type="text",id,defaultValue,placeholder,required=!1,disabled=!1,readonly=!1,autofocus,maxLength,addClass,...props})=>((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_maxlength__WEBPACK_IMPORTED_MODULE_2__.V)()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,defaultValue,placeholder,id,disabled,required,readOnly:readonly,autoFocus:autofocus,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control",maxLength,...props}));FormInput.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormInput",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autofocus:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "email" | "tel" | "number" | "date" | "datetime-local" | "time" | "color" | "file" | "password" | "range"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"tel"'},{name:"literal",value:'"number"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime-local"'},{name:"literal",value:'"time"'},{name:"literal",value:'"color"'},{name:"literal",value:'"file"'},{name:"literal",value:'"password"'},{name:"literal",value:'"range"'}]},description:"",defaultValue:{value:'"text"',computed:!1}}}}},"./src/app/forms/FormOptions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>FormOptions});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Button.tsx")),_app_components_items_group_ItemsGroup__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/items-group/ItemsGroup.tsx"),_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/forms/FormGroup.tsx"),_app_forms_FormInput__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/forms/FormInput.tsx");const FormOptions=({id,options,placeholders="Option value here...",autofocus,addable=!0,deletable,buttonLabel="Add option",buttonIcon="plus-circle",addClass,style,...props})=>{let classTab=[];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_items_group_ItemsGroup__WEBPACK_IMPORTED_MODULE_3__.K,{addClass:classTab.join(" "),"aria-describedby":"hint-"+id,style,...props,children:[null==options?void 0:options.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex align-items-center gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_4__.g,{id:option.id,label:"Name",srOnly:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormInput__WEBPACK_IMPORTED_MODULE_5__.Z,{id:option.id,defaultValue:option.value,placeholder:placeholders,autofocus})}),deletable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_2__.$,{type:"muted",size:"sm",addClass:"btn-danger-on-hover",iconStartName:"delete"})]}))),addable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_2__.$,{label:buttonLabel,iconStartName:buttonIcon,size:"sm",type:"muted",addClass:"align-self-start"})]})};FormOptions.__docgenInfo={description:"",methods:[],displayName:"FormOptions",props:{id:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    id: string;\n    label: string;\n    value?: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"Option[]"},description:""},placeholders:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Option value here..."',computed:!1}},autofocus:{required:!1,tsType:{name:"boolean"},description:""},addable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},deletable:{required:!1,tsType:{name:"boolean"},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Add option"',computed:!1}},buttonIcon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"plus-circle"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);