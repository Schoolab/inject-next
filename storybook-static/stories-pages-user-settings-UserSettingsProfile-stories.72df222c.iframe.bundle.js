"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[7417],{"./src/stories/pages/user/settings/UserSettingsProfile.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Profile:()=>Profile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserSettingsProfile_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),layout=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/layouts/layout.tsx")),AppContent=__webpack_require__("./src/app/layouts/AppContent.tsx"),Section=__webpack_require__("./src/app/components/Section.tsx"),FormGroup=__webpack_require__("./src/app/components/forms/FormGroup.tsx"),FormInput=__webpack_require__("./src/app/components/forms/FormInput.tsx"),ItemResource=__webpack_require__("./src/app/components/items/ItemResource.tsx"),Dropdown=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx"),DropdownMenu=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),DropdownItem=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),FormInputWrapper=__webpack_require__("./src/app/components/forms/FormInputWrapper.tsx"),FormTextarea=__webpack_require__("./src/app/components/forms/FormTextarea.tsx"),DropdownDivider=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),FormSelect=__webpack_require__("./src/app/components/forms/FormSelect.tsx"),FormSelectMultiple=__webpack_require__("./src/app/components/forms/FormSelectMultiple.tsx");const UserSettingsProfile=()=>(0,jsx_runtime.jsx)(layout.P,{showShortcutbar:!1,children:(0,jsx_runtime.jsx)(AppContent.D,{breadcrumbIcon:"home",breadcrumb:[{label:"John Doe",href:"#"},{label:"Settings",href:"/?path=/story/pages-user-settings--profile"},{label:"Profile"}],title:"Settings",buttons:[{type:"default",label:"Open profile",iconStartName:"preview",iconEndName:"new-tab",size:"sm"},{type:"primary",label:"Save changes",size:"sm"}],subnav:[{label:"Profile",href:"/?path=/story/pages-user-settings--profile",isActive:!0},{label:"Account",href:"/?path=/story/pages-user-settings--account"},{label:"Notifications",href:"/?path=/story/pages-user-settings--notifications"},{label:"Notes",href:"/?path=/story/pages-user-settings--notes",icon:"visibility-off",tooltip:"Only visible to managers",badge:"3"},{label:"Data",href:"/?path=/story/pages-user-settings--data",icon:"visibility-off",tooltip:"Only visible to managers"}],sections:"cards",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsxs)("div",{className:"cq-12 cq-md-6",children:[(0,jsx_runtime.jsx)(Section.w,{title:"Basic information",collapsable:!0,collapsableId:"basic",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsxs)(FormGroup.g,{addClass:"cq-12",id:"cover",label:"Cover image",hint:"PNG,JPG,JPEG, at least 1800x1200 px.",children:[(0,jsx_runtime.jsx)(ItemResource.m,{icon:{name:"image"},img:"img/avatar-john.jpeg",cover:!1,resource:{name:"avatar.jpeg",type:"JPEG Image"},action:"delete"}),(0,jsx_runtime.jsxs)(Dropdown.m,{children:[(0,jsx_runtime.jsx)(Button.$,{iconStartName:"plus-circle",label:"Add image",type:"default",extended:!0,addClass:"dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,jsx_runtime.jsxs)(DropdownMenu.r,{children:[(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Import image...",iconName:"attachment"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Add image link...",iconName:"link"}),(0,jsx_runtime.jsx)("div",{className:"dropdown-content text-center",children:(0,jsx_runtime.jsx)("span",{children:"AInject can make mistakes. Check important info."})})]})]})]}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12 cq-xs-6",id:"first-name",required:!0,label:"First Name",children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"first-name",required:!0,defaultValue:"John"})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12 cq-xs-6",id:"last-name",required:!0,label:"Last Name",children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"last-name",required:!0,defaultValue:"Doe"})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"gender",required:!0,label:"Gender",children:(0,jsx_runtime.jsx)(FormSelect.F,{id:"gender",options:[{label:"Choose an option...",value:"",disabled:!0},{label:"Man",value:"man"},{label:"Woman",value:"woman"},{label:"Non binary",value:"nb",selected:!0},{label:"Prefer not to say",value:"no-say"}]})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"description",label:"Short description",hint:"A short description about you, your occupation, your expertises and your interests.",children:(0,jsx_runtime.jsxs)(FormInputWrapper.A,{children:[(0,jsx_runtime.jsx)(FormTextarea.h,{id:"description",rows:4,defaultValue:"",placeholder:"Your content here..."}),(0,jsx_runtime.jsx)("div",{className:"input-floating-actions",children:(0,jsx_runtime.jsxs)(Dropdown.m,{"data-toggle":"dropdown",children:[(0,jsx_runtime.jsx)(Button.$,{iconStartName:"ai",size:"xs",type:"transparent",addClass:"dropdown-toggle text-ai","data-toggle":"dropdown","aria-expanded":"false"}),(0,jsx_runtime.jsxs)(DropdownMenu.r,{direction:"right",children:[(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Write a bio",caption:"From all the info in your settings",iconName:"summarize"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Improve writing",iconName:"improve-writing"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Make shorter",iconName:"shorter-text"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Change tone...",iconName:"tone"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"ai",label:"Translate to...",iconName:"translate"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Restore to saved value",iconName:"restore"}),(0,jsx_runtime.jsx)("div",{className:"dropdown-content text-center",children:(0,jsx_runtime.jsx)("span",{children:"AInject can make mistakes. Check important info."})})]})]})})]})})]})}),(0,jsx_runtime.jsx)(Section.w,{title:"Social",collapsable:!0,collapsableId:"social",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"public-agenda",required:!1,label:"Public agenda",hint:"This will appear on your profile page for members to book an appointment with you.",children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"public-agenda",required:!0,defaultValue:"",placeholder:"e.g. calendar.google.com"})}),(0,jsx_runtime.jsxs)(FormGroup.g,{addClass:"cq-12",id:"links",label:"External links",hint:"Add links to your profile, it can be link to your social media profiles or sites.",children:[(0,jsx_runtime.jsx)(ItemResource.m,{icon:{name:"link"},resource:{name:"LinkedIn",type:"linkedin.com"},action:"delete"}),(0,jsx_runtime.jsx)(Button.$,{iconStartName:"plus-circle",label:"Add link",type:"default",extended:!0})]})]})})]}),(0,jsx_runtime.jsxs)("div",{className:"cq-12 cq-md-6",children:[(0,jsx_runtime.jsx)(Section.w,{title:"Professional information",collapsable:!0,collapsableId:"pro-info",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"position",required:!1,label:"Current job position",children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"position",required:!0,defaultValue:"Product designer",placeholder:""})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12 cq-xs-6",id:"structure",required:!1,label:"Structure",children:(0,jsx_runtime.jsx)(FormSelect.F,{id:"structure",options:[{label:"Choose an option...",value:"",disabled:!0},{label:"MoHo",value:"moho"},{label:"RaiseLab",value:"raiselab"},{label:"Schoolab",value:"schoolab",selected:!0},{label:"Other",value:"other"}]})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12 cq-xs-6",id:"departement",required:!1,label:"Departement",children:(0,jsx_runtime.jsx)(FormSelect.F,{id:"departement",options:[{label:"Choose an option...",value:"",disabled:!0},{label:"Digital",value:"digital",selected:!0},{label:"Sales",value:"sales"},{label:"HR",value:"hr"},{label:"Startups",value:"starups"}]})})]})}),(0,jsx_runtime.jsx)(Section.w,{title:"Expertises & Interests",collapsable:!0,collapsableId:"expertises",children:(0,jsx_runtime.jsxs)("div",{className:"cq",children:[(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"expertises",required:!1,label:"Expertises",children:(0,jsx_runtime.jsx)(FormSelectMultiple.p,{id:"expertises",options:[{label:"Choose an option...",value:"",disabled:!0},{label:"SaaS",value:"saas"},{label:"Project",value:"projects"},{label:"Management",value:"management"},{label:"Design",value:"design",selected:!0},{label:"UX design",value:"ux-design"},{label:"Figma",value:"figma",selected:!0},{label:"Product",value:"product",selected:!0}]})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"cq-12",id:"interests",required:!1,label:"Interests",children:(0,jsx_runtime.jsx)(FormSelectMultiple.p,{id:"interests",options:[{label:"Choose an option...",value:"",disabled:!0},{label:"Climbing",value:"climbing"},{label:"Cosplay",value:"cosplay",selected:!0},{label:"Cycling",value:"cycling",selected:!0}]})})]})})]})]})})});UserSettingsProfile.__docgenInfo={description:"",methods:[],displayName:"UserSettingsProfile"};const UserSettingsProfile_stories={title:"Pages/User/Settings",component:UserSettingsProfile,parameters:{layout:"fullscreen"}},Profile={},__namedExportsOrder=["Profile"];Profile.parameters={...Profile.parameters,docs:{...Profile.parameters?.docs,source:{originalSource:"{}",...Profile.parameters?.docs?.source}}}},"./public/utils/select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>select});const select=()=>{$((function(){$(".form-group select:not(.custom-select-tags):not(.filterSelect)").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)").selectpicker({width:"100%",noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.table-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-transparent",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.card-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-link card-filter",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.dropdown-card").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-card",iconBase:"icon",showTick:!1}),$("select.select-with-search").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check",noneResultsText:"No results for “{0}”…",liveSearch:!0,liveSearchPlaceholder:"Search…",liveSearchNormalize:!0,virtualScroll:"400"}),$("select.custom-select-tags").selectize({delimiter:",",persist:!1,maxItems:null,valueField:"id",labelField:"name",searchField:"name",create:!0,plugins:["remove_button","clear_button"],render:{item:function(item,escape){return'<div class="badge badge-pill"><span>'+escape(item.name)+"</span></div>"}},create:function(input){return{value:input,text:input}}})}))}},"./src/app/components/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Placeholder=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder-container",style:{height:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder"})});Placeholder.__docgenInfo={description:"",methods:[],displayName:"Placeholder"}},"./src/app/components/Section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Section});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_Placeholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Placeholder.tsx");const Section=({title,subtitle,subtitleIcon,children,collapsable,collapsableId,isOpen=!0,addClass,style,...props})=>{let classTab=["application-section"];addClass&&classTab.push(addClass);let classCollapse=["collapse"];return isOpen&&classCollapse.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children:title&&collapsable&&collapsableId?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"application-section--title","data-toggle":"collapse","data-target":`#${collapsableId}`,"aria-expanded":isOpen?"true":"false",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"application-section--title-content",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[subtitleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:subtitleIcon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:subtitle})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-chevron-right ml-auto"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classCollapse.join(" "),id:collapsableId,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"application-section--title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"application-section--title-content",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[subtitleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:subtitleIcon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:subtitle})]})]})}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})]})})};Section.__docgenInfo={description:"",methods:[],displayName:"Section",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},subtitleIcon:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},collapsable:{required:!1,tsType:{name:"boolean"},description:""},collapsableId:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/forms/FormGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FormGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Placeholder.tsx");const FormGroup=({label,srOnly,hint,id,required=!1,addClass,children,...props})=>{let classGroup=["form-group"],classLabel=["label"];return required&&classLabel.push("required"),srOnly&&classLabel.push("sr-only"),addClass&&classGroup.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:classLabel.join(" "),htmlFor:id,children:label}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"invalid-feedback",children:"Please enter a message in the textarea."})]})};FormGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/forms/FormInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FormInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const FormInput=({type="text",id,defaultValue,placeholder,required=!1,disabled=!1,readonly=!1,addClass,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,defaultValue,placeholder,id,disabled,required,readOnly:readonly,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control"});FormInput.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormInput",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "email" | "tel" | "number" | "date" | "datetime-local" | "time" | "color" | "file" | "password" | "range"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"tel"'},{name:"literal",value:'"number"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime-local"'},{name:"literal",value:'"time"'},{name:"literal",value:'"color"'},{name:"literal",value:'"file"'},{name:"literal",value:'"password"'},{name:"literal",value:'"range"'}]},description:"",defaultValue:{value:'"text"',computed:!1}}}}},"./src/app/components/forms/FormInputWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormInputWrapper});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Placeholder.tsx"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Button.tsx"),_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx");const FormInputWrapper=({addClass,children,...props})=>{let classTab=["form-ai-wrapper"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[children&&children,!children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"input-floating-actions",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__.m,{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"ai",label:"Ask AI",size:"xs",type:"transparent",addClass:"dropdown-toggle text-ai"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Write a course summary",caption:"From all the content inside",iconName:"summarize"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Translate to French",iconName:"translate-generate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Improve writing",iconName:"improve-writing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Make shorter",iconName:"shorter-text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Change tone...",iconName:"tone"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Translate to...",iconName:"translate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Copy from English",iconName:"copy"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Restore to saved value",iconName:"restore"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-content text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"AInject can make mistakes. Check important info."})})]})]})})]})]})};FormInputWrapper.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormInputWrapper",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/forms/FormSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>FormSelect});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelect=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control custom-select",children:listOptions})};FormSelect.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}},"./src/app/components/forms/FormSelectMultiple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>FormSelectMultiple});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelectMultiple=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,multiple:!0,className:"form-control custom-select-tags",children:listOptions})};FormSelectMultiple.__docgenInfo={description:"",methods:[],displayName:"FormSelectMultiple",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}},"./src/app/components/forms/FormTextarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>FormTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const FormTextarea=({type="text",id,defaultValue,placeholder,required=!1,disabled=!1,rows=8,fieldSizing,addClass,...props})=>{let classInput=["form-control"];return fieldSizing&&classInput.push("field-sizing"),addClass&&classInput.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{defaultValue,placeholder,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:classInput.join(" "),rows,...props})};FormTextarea.__docgenInfo={description:"",methods:[],displayName:"FormTextarea",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Is the input disabled?",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Is the input required?",defaultValue:{value:"false",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"text" | "wysiwyg"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"wysiwyg"'}]},description:"Choose the type of input",defaultValue:{value:'"text"',computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},fieldSizing:{required:!1,tsType:{name:"boolean"},description:"Allows form controls to adjust in size to fit their contents."}}}},"./src/app/components/items/ItemResource.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ItemResource});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx");const ItemResource=({img,cover,resource,action,options=!0,icon,isSmall=!1})=>{let classTab=["item is-bordered"];return isSmall&&classTab.push("is-small"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),children:[cover&&img&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item-cover is-16by9",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:img,alt:"Intro to ideation file cover"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row",children:[cover?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon.name,addClass:`item-icon ${icon.addClass}`}):img?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"thumbnail is-lg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:img})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon.name,addClass:`item-icon ${icon.addClass}`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"item-title stretched-link text-truncate",href:"#",children:resource.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"item-caption metas small is-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:resource.type})}),resource.details&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"420 KB"})})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-options",children:["download"==action&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",iconStartName:"download",addClass:"z-1","data-toggle":"tooltip","data-placement":"top","data-title":"Download file","data-boundary":"window"}),"openLink"==action&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",iconStartName:"new-tab",addClass:"z-1","data-toggle":"tooltip","data-placement":"top","data-title":"Open in new tab","data-boundary":"window"}),"delete"==action&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",iconStartName:"delete",addClass:"z-1 btn-danger-on-hover","data-toggle":"tooltip","data-placement":"top","data-title":"Delete file","data-boundary":"window"}),options&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown","data-toggle":"tooltip","data-placement":"top","data-title":"Options","data-boundary":"window","data-original-title":"",title:"",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-muted btn-icon z-1",href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false","data-boundary":"window",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item",children:"Edit file"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger",children:"Delete file"})]})]})]})]})]})};ItemResource.__docgenInfo={description:"",methods:[],displayName:"ItemResource",props:{img:{required:!1,tsType:{name:"string"},description:"Does the item have an image url"},cover:{required:!1,tsType:{name:"boolean"},description:""},resource:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n    name: string;\n    type: string;\n    details?: string;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"details",value:{name:"string",required:!1}}]}},description:"Resource informations"},action:{required:!1,tsType:{name:"union",raw:'"download" | "openLink" | "delete"',elements:[{name:"literal",value:'"download"'},{name:"literal",value:'"openLink"'},{name:"literal",value:'"delete"'}]},description:"What kind of action is possible?"},options:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},icon:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n    name: string;\n    addClass?: string;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"addClass",value:{name:"string",required:!1}}]}},description:"Icon parameters"},isSmall:{required:!1,tsType:{name:"Boolean"},description:"Is small ?",defaultValue:{value:"false",computed:!1}}}}}}]);