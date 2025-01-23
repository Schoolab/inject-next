"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[7358],{"./src/stories/pages/user/settings/UserSettingsData.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Data:()=>Data,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserSettingsData_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),layout=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/layouts/layout.tsx")),AppContent=__webpack_require__("./src/app/layouts/AppContent.tsx"),Section=__webpack_require__("./src/app/components/Section.tsx"),FormGroup=__webpack_require__("./src/app/components/forms/FormGroup.tsx"),FormInput=__webpack_require__("./src/app/components/forms/FormInput.tsx"),Dropdown=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx"),DropdownMenu=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),DropdownItem=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),FormInputWrapper=__webpack_require__("./src/app/components/forms/FormInputWrapper.tsx"),FormTextarea=__webpack_require__("./src/app/components/forms/FormTextarea.tsx"),DropdownDivider=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),FormSelect=__webpack_require__("./src/app/components/forms/FormSelect.tsx"),FormSelectMultiple=__webpack_require__("./src/app/components/forms/FormSelectMultiple.tsx"),FormFieldSet=__webpack_require__("./src/app/components/forms/FormFieldSet.tsx"),FormOption=__webpack_require__("./src/app/components/forms/FormOption.tsx");const UserSettingsData=()=>(0,jsx_runtime.jsx)(layout.P,{showShortcutbar:!1,children:(0,jsx_runtime.jsx)(AppContent.D,{breadcrumbIcon:"home",breadcrumb:[{label:"John Doe",href:"#"},{label:"Settings",href:"/?path=/story/pages-user-settings--profile"},{label:"Notifications"}],title:"Settings",buttons:[{type:"default",label:"Open profile",iconStartName:"preview",iconEndName:"new-tab",size:"sm"},{type:"primary",label:"Save changes",size:"sm"}],subnav:[{label:"Profile",href:"/?path=/story/pages-user-settings--profile"},{label:"Account",href:"/?path=/story/pages-user-settings--account"},{label:"Notifications",href:"/?path=/story/pages-user-settings--notifications"},{label:"Notes",href:"/?path=/story/pages-user-settings--notes",icon:"visibility-off",tooltip:"Only visible to managers",badge:"3"},{label:"Data",href:"/?path=/story/pages-user-settings--data",icon:"visibility-off",tooltip:"Only visible to managers",isActive:!0}],sections:"cards",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsxs)("div",{className:"cq-12 cq-md-6",children:[(0,jsx_runtime.jsx)(Section.w,{title:"Account rights",collapsable:!0,collapsableId:"account-right",children:(0,jsx_runtime.jsx)("div",{className:"cq",children:(0,jsx_runtime.jsxs)(FormFieldSet.J,{id:"platform-access",addClass:"cq-12",legend:"Platform access",children:[(0,jsx_runtime.jsx)(FormOption._,{name:"platform-access",id:"active",value:"active",type:"radio",card:!0,label:"Active (default)",caption:"This user can sign in to the platform and make any modification.",defaultChecked:!0}),(0,jsx_runtime.jsx)(FormOption._,{name:"platform-access",id:"read-only",value:"read-only",type:"radio",card:!0,label:"Read only (all organizations)",caption:"This user can sign in to the platform, but can’t make any modification apart from the command to delete the account."}),(0,jsx_runtime.jsx)(FormOption._,{name:"platform-access",id:"inactive",value:"inactive",type:"radio",card:!0,label:"Inactive",caption:"This user can no longer sign in to the platform. The user messages and files will still be accessible."})]})})}),(0,jsx_runtime.jsx)(Section.w,{title:"Schoolab organization rights",collapsable:!0,collapsableId:"org-rights",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"role",required:!0,label:"Role in the organization",children:(0,jsx_runtime.jsx)(FormSelect.F,{id:"role",options:[{label:"Admin",value:"admin"},{label:"User",value:"User",selected:!0}]})}),(0,jsx_runtime.jsxs)(FormFieldSet.J,{id:"org-access",addClass:"cq-12",legend:"Organization access",children:[(0,jsx_runtime.jsx)(FormOption._,{name:"org-access",id:"write",value:"write",type:"radio",card:!0,label:"Write and read (default)",caption:"This user can sign in to the organization and make any modification.",defaultChecked:!0}),(0,jsx_runtime.jsx)(FormOption._,{name:"org-access",id:"read",value:"read",type:"radio",card:!0,label:"Read only",caption:"This user can sign in to the organization, but can’t make any modification apart from the command to delete the account."})]}),(0,jsx_runtime.jsxs)(FormFieldSet.J,{id:"autorizations",addClass:"cq-12",legend:"Autorizations",children:[(0,jsx_runtime.jsx)(FormOption._,{name:"autorizations",id:"categories",value:"categories",type:"checkbox",card:!0,label:"Categories",caption:"This user can manage categories of this organization’s programs"}),(0,jsx_runtime.jsx)(FormOption._,{name:"autorizations",id:"data",value:"data",type:"checkbox",card:!0,label:"Data",caption:"This user can manage data of this organization’s programs"}),(0,jsx_runtime.jsx)(FormOption._,{name:"autorizations",id:"plans",value:"plans",type:"checkbox",card:!0,label:"Plans",caption:"This user can manage plans of this organization’s programs"}),(0,jsx_runtime.jsx)(FormOption._,{name:"autorizations",id:"impersonate",value:"impersonate",type:"checkbox",card:!0,label:"Impersonate participants (login as)",caption:"This user can access to participants accounts, for trusted users only."})]})]})})]}),(0,jsx_runtime.jsxs)("div",{className:"cq-12 cq-md-6",children:[(0,jsx_runtime.jsx)(Section.w,{title:"Data",collapsable:!0,collapsableId:"data",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"public-tags",required:!1,label:"Public Tags",children:(0,jsx_runtime.jsx)(FormSelectMultiple.p,{id:"public-tags",options:[{label:"Choose an option...",value:"",disabled:!0},{label:"SaaS",value:"saas"},{label:"Project",value:"projects"},{label:"Management",value:"management"},{label:"Design",value:"design",selected:!0},{label:"UX design",value:"ux-design"},{label:"Figma",value:"figma",selected:!0},{label:"Product",value:"product",selected:!0}]})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"private-tags",required:!1,label:"Private Tags",children:(0,jsx_runtime.jsx)(FormSelectMultiple.p,{id:"private-tags",options:[{label:"Choose an option...",value:"",disabled:!0},{label:"Climbing",value:"climbing"},{label:"Cosplay",value:"cosplay",selected:!0},{label:"Cycling",value:"cycling",selected:!0}]})})]})}),(0,jsx_runtime.jsx)(Section.w,{title:"Custom fields",collapsable:!0,collapsableId:"custom-fields",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"custom1",label:"Label",children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"custom1",placeholder:"Your content here..."})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"custom2",label:"Label",children:(0,jsx_runtime.jsx)(FormSelect.F,{id:"custom2",options:[{label:"Choose an option...",value:"",disabled:!0}]})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"custom3",label:"Label",children:(0,jsx_runtime.jsxs)(FormInputWrapper.A,{children:[(0,jsx_runtime.jsx)(FormTextarea.h,{id:"custom3",rows:4,defaultValue:"",placeholder:"Your content here..."}),(0,jsx_runtime.jsx)("div",{className:"input-floating-actions",children:(0,jsx_runtime.jsxs)(Dropdown.m,{"data-toggle":"dropdown",children:[(0,jsx_runtime.jsx)(Button.$,{iconStartName:"ai",size:"xs",type:"transparent",addClass:"dropdown-toggle text-ai","data-toggle":"dropdown","aria-expanded":"false"}),(0,jsx_runtime.jsxs)(DropdownMenu.r,{direction:"right",children:[(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Write a bio",caption:"From all the info in your settings",iconName:"summarize"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Improve writing",iconName:"improve-writing"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Make shorter",iconName:"shorter-text"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Change tone...",iconName:"tone"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Translate to...",iconName:"translate"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Restore to saved value",iconName:"restore"}),(0,jsx_runtime.jsx)("div",{className:"dropdown-content text-center",children:(0,jsx_runtime.jsx)("span",{children:"AInject can make mistakes. Check important info."})})]})]})})]})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"custom4",label:"Label",children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"custom4",type:"date"})})]})})]})]})})});UserSettingsData.__docgenInfo={description:"",methods:[],displayName:"UserSettingsData"};const UserSettingsData_stories={title:"Pages/User/Settings",component:UserSettingsData,parameters:{layout:"fullscreen"}},Data={},__namedExportsOrder=["Data"];Data.parameters={...Data.parameters,docs:{...Data.parameters?.docs,source:{originalSource:"{}",...Data.parameters?.docs?.source}}}},"./public/utils/select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>select});const select=()=>{$((function(){$(".form-group select:not(.custom-select-tags):not(.filterSelect)").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)").selectpicker({width:"100%",noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.table-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-transparent",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.card-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-link card-filter",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.dropdown-card").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-card",iconBase:"icon",showTick:!1}),$("select.select-with-search").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check",noneResultsText:"No results for “{0}”…",liveSearch:!0,liveSearchPlaceholder:"Search…",liveSearchNormalize:!0,virtualScroll:"400"}),$("select.custom-select-tags").selectize({delimiter:",",persist:!1,maxItems:null,valueField:"id",labelField:"name",searchField:"name",create:!0,plugins:["remove_button","clear_button"],render:{item:function(item,escape){return'<div class="badge badge-pill"><span>'+escape(item.name)+"</span></div>"}},create:function(input){return{value:input,text:input}}})}))}},"./src/app/components/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Placeholder=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder-container",style:{height:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder"})});Placeholder.__docgenInfo={description:"",methods:[],displayName:"Placeholder"}},"./src/app/components/Section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Section});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_Placeholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Placeholder.tsx"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Button.tsx");const Section=({title,subtitle,subtitleIcon,buttons,children,collapsable,collapsableId,isOpen=!0,addClass,style,...props})=>{let classTab=["application-section"];addClass&&classTab.push(addClass);let classCollapse=["collapse"];isOpen&&classCollapse.push("show");let listButtons=null==buttons?void 0:buttons.map((button=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.$,{label:button.label,type:button.type,link:button.link,iconStartName:button.iconStartName,iconEndName:button.iconEndName,size:"sm"})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children:title&&collapsable&&collapsableId?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"application-section--title","data-toggle":"collapse","data-target":`#${collapsableId}`,"aria-expanded":isOpen?"true":"false",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"application-section--title-content",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[subtitleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:subtitleIcon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:subtitle})]})]}),buttons&&listButtons,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-chevron-right ml-auto"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classCollapse.join(" "),id:collapsableId,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"application-section--title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"application-section--title-content",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[subtitleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:subtitleIcon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:subtitle})]})]}),buttons&&listButtons]}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})]})})};Section.__docgenInfo={description:"",methods:[],displayName:"Section",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},subtitleIcon:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    addClass?: string;\n    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;\n    label?: string | number; \n    iconStartName?: string;\n    iconEndName?: string;\n    link?: string;\n    hasDropdown?: Boolean;\n}',signature:{properties:[{key:"addClass",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}],required:!0}},{key:"label",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"iconStartName",value:{name:"string",required:!1}},{key:"iconEndName",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}},{key:"hasDropdown",value:{name:"Boolean",required:!1}}]}}],raw:"ButtonType[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},collapsable:{required:!1,tsType:{name:"boolean"},description:""},collapsableId:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/forms/FormFieldSet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>FormFieldSet});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Placeholder.tsx");const FormFieldSet=({name,legend,hint,id,disabled=!1,grid,addClass,children,...props})=>{let classGroup=["form-group"],classOptions=["form-options"];return addClass&&classGroup.push(addClass),grid&&classOptions.push("grid gap-xs"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset",{name,className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("legend",{className:["label"].join(" "),children:legend}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classOptions.join(" "),id,"aria-describedby":"hint-"+id,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{})})]})};FormFieldSet.__docgenInfo={description:"The `fieldset` HTML element is used to group several controls as well as labels (`label`) within a web form.",methods:[],displayName:"FormFieldSet",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},legend:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},grid:{required:!1,tsType:{name:"boolean"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/forms/FormGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FormGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Placeholder.tsx");const FormGroup=({label,srOnly,hint,id,required=!1,addClass,children,...props})=>{let classGroup=["form-group"],classLabel=["label"];return required&&classLabel.push("required"),srOnly&&classLabel.push("sr-only"),addClass&&classGroup.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:classLabel.join(" "),htmlFor:id,children:label}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"invalid-feedback",children:"Please enter a message in the textarea."})]})};FormGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/forms/FormInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FormInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const FormInput=({type="text",id,defaultValue,placeholder,required=!1,disabled=!1,readonly=!1,addClass,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,defaultValue,placeholder,id,disabled,required,readOnly:readonly,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control"});FormInput.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormInput",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "email" | "tel" | "number" | "date" | "datetime-local" | "time" | "color" | "file" | "password" | "range"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"tel"'},{name:"literal",value:'"number"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime-local"'},{name:"literal",value:'"time"'},{name:"literal",value:'"color"'},{name:"literal",value:'"file"'},{name:"literal",value:'"password"'},{name:"literal",value:'"range"'}]},description:"",defaultValue:{value:'"text"',computed:!1}}}}},"./src/app/components/forms/FormInputWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormInputWrapper});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Placeholder.tsx"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Button.tsx"),_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx");const FormInputWrapper=({addClass,children,...props})=>{let classTab=["form-ai-wrapper"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[children&&children,!children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"input-floating-actions",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__.m,{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"ai",label:"Ask AI",size:"xs",type:"transparent",addClass:"dropdown-toggle text-ai"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Write a course summary",caption:"From all the content inside",iconName:"summarize"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Translate to French",iconName:"translate-generate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Improve writing",iconName:"improve-writing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Make shorter",iconName:"shorter-text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Change tone...",iconName:"tone"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Translate to...",iconName:"translate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Copy from English",iconName:"copy"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Restore to saved value",iconName:"restore"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-content text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"AInject can make mistakes. Check important info."})})]})]})})]})]})};FormInputWrapper.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormInputWrapper",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/forms/FormOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>FormOption});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const FormOption=({type,id,name="option",label,caption,icon,value,checked,defaultChecked,disabled,card,addClass,...props})=>{let classTab=["custom-control"];return addClass&&classTab.push(addClass),"checkbox"===type&&classTab.push("custom-checkbox"),"radio"===type&&classTab.push("custom-radio"),"switch"===type&&classTab.push("custom-switch"),card&&classTab.push("custom-control-card"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"radio"!==type?"checkbox":"radio",id:"option-"+id,name,className:"custom-control-input",defaultValue:value,defaultChecked,disabled,checked}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"custom-control-label text-nowrap d-flex flex-column gap-xs",htmlFor:"option-"+id,"aria-describedby":"caption-"+id,children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"caption-"+id,className:"form-text text-muted",children:caption})]})};FormOption.__docgenInfo={description:"",methods:[],displayName:"FormOption",props:{type:{required:!0,tsType:{name:"union",raw:'"checkbox" | "radio" | "switch"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"radio"'},{name:"literal",value:'"switch"'}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"option"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},card:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/forms/FormSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>FormSelect});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelect=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control custom-select",children:listOptions})};FormSelect.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}},"./src/app/components/forms/FormSelectMultiple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>FormSelectMultiple});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelectMultiple=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,multiple:!0,className:"form-control custom-select-tags",children:listOptions})};FormSelectMultiple.__docgenInfo={description:"",methods:[],displayName:"FormSelectMultiple",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}},"./src/app/components/forms/FormTextarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>FormTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const FormTextarea=({type="text",id,defaultValue,placeholder,required=!1,disabled=!1,rows=8,fieldSizing,addClass,...props})=>{let classInput=["form-control"];return fieldSizing&&classInput.push("field-sizing"),addClass&&classInput.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{defaultValue,placeholder,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:classInput.join(" "),rows,...props})};FormTextarea.__docgenInfo={description:"",methods:[],displayName:"FormTextarea",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Is the input disabled?",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Is the input required?",defaultValue:{value:"false",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"text" | "wysiwyg"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"wysiwyg"'}]},description:"Choose the type of input",defaultValue:{value:'"text"',computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},fieldSizing:{required:!1,tsType:{name:"boolean"},description:"Allows form controls to adjust in size to fit their contents."}}}}}]);