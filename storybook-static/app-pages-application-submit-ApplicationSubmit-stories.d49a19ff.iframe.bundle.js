"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5354],{"./src/app/pages/application/submit/ApplicationSubmit.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Submit:()=>Submit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ApplicationSubmit_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),layout=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/layouts/layout.tsx")),AppContent=__webpack_require__("./src/app/layouts/AppContent.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx"),Section=__webpack_require__("./src/app/components/Section.tsx"),Stepper=__webpack_require__("./src/app/components/Stepper.tsx"),FormInput=__webpack_require__("./src/app/forms/FormInput.tsx"),FormGroup=__webpack_require__("./src/app/forms/FormGroup.tsx"),FormInputWrapper=__webpack_require__("./src/app/forms/FormInputWrapper.tsx");const steps=[{title:"Step 1",description:"completed",status:"completed",link:"/?path=/story/pages-admin-installer--basic-info",current:!1},{title:"Step 2",description:"completed",status:"completed",current:!1},{title:"Step 3",description:"Not completed",status:"in-progress",current:!0}],ApplicationSubmit=()=>(0,jsx_runtime.jsx)(layout.P,{showShortcutbar:!1,children:(0,jsx_runtime.jsx)(AppContent.D,{showSubnav:!1,showBreadcrumb:!1,showTitle:!1,children:(0,jsx_runtime.jsx)("div",{className:"row justify-content-center",children:(0,jsx_runtime.jsxs)("div",{className:"col-12 col-md-10 col-lg-8 d-flex flex-column gap-md",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-sm",children:[(0,jsx_runtime.jsxs)("span",{className:"d-flex align-items-start gap-xs",children:[(0,jsx_runtime.jsx)(Button.$,{size:"sm",type:"default",iconStartName:"arrow-left","data-toggle":"tooltip","data-original-title":"Back"}),(0,jsx_runtime.jsx)("h2",{children:"Participant account creation"})]}),(0,jsx_runtime.jsx)(Stepper.C,{steps})]}),(0,jsx_runtime.jsxs)(Section.w,{title:"Submit",subtitle:"Check the data below and click “Submit” to finalize your application",children:[(0,jsx_runtime.jsx)(FormGroup.g,{id:"1",label:"Question 1",children:(0,jsx_runtime.jsx)(FormInputWrapper.A,{children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"1",defaultValue:"Lorem ipsum",readonly:!0})})}),(0,jsx_runtime.jsx)(FormGroup.g,{id:"2",label:"Question 2 ",children:(0,jsx_runtime.jsx)(FormInputWrapper.A,{children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"2",defaultValue:"Lorem ipsum",readonly:!0})})}),(0,jsx_runtime.jsx)(FormGroup.g,{id:"3",label:"Question 3",children:(0,jsx_runtime.jsx)(FormInputWrapper.A,{children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"3",defaultValue:"Lorem ipsum",readonly:!0})})})]}),(0,jsx_runtime.jsx)("div",{className:"d-flex justify-content-end",children:(0,jsx_runtime.jsx)(Button.$,{iconStartImage:"",iconStartName:"",label:"Submit",size:"default",type:"primary"})})]})})})});ApplicationSubmit.__docgenInfo={description:"",methods:[],displayName:"ApplicationSubmit"};const ApplicationSubmit_stories={title:"Pages/Application/Submit",component:ApplicationSubmit,parameters:{layout:"fullscreen"}},Submit={},__namedExportsOrder=["Submit"];Submit.parameters={...Submit.parameters,docs:{...Submit.parameters?.docs,source:{originalSource:"{}",...Submit.parameters?.docs?.source}}}},"./public/utils/maxlength.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>maxlength});const maxlength=()=>{$(".form-group > input[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"12px"},appendToParent:!0,separator:"/",showOnReady:!0}),$(".form-input-wrapper > input[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"40px"},appendToParent:!0,separator:"/",showOnReady:!0}),$("textarea[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"12px"},appendToParent:!0,separator:"/",showOnReady:!0})}},"./src/app/components/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ProgressBar=({label,percentage=0,min=0,max=100,text="0%",size="sm",inline,addClass,style,...props})=>{let classTab=["d-flex flex-column gap-2xs"];return size&&classTab.push(`is-${size}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),style,...props,children:[label&&!inline&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:text})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-xs align-items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"progress flex-fill mr-3",style:{height:".5rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":Math.round(percentage),"aria-valuemin":min,"aria-valuemax":max,style:{width:percentage+"%"}})}),inline&&text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:text})]})]})};ProgressBar.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{label:{required:!1,tsType:{name:"string"},description:""},percentage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"0%"',computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the progress icon be?",defaultValue:{value:'"sm"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./src/app/components/Section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Section});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Button.tsx");const Section=({title,subtitle,subtitleIcon,buttons,children,collapsable,collapsableId,isOpen=!0,addClass,style,...props})=>{let classTab=["application-section"];addClass&&classTab.push(addClass);let classCollapse=["collapse"];isOpen&&classCollapse.push("show");let listButtons=null==buttons?void 0:buttons.map((button=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_4__.$,{label:button.label,type:button.type,link:button.link,iconStartName:button.iconStartName,iconEndName:button.iconEndName,size:"sm"})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children:title&&collapsable&&collapsableId?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"application-section--title","data-toggle":"collapse","data-target":`#${collapsableId}`,"aria-expanded":isOpen?"true":"false",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"application-section--title-content",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[subtitleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:subtitleIcon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:subtitle})]})]}),buttons&&listButtons,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-chevron-right ml-auto"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classCollapse.join(" "),id:collapsableId,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"application-section--title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-none w-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"application-section--title-content",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-2xs align-items-center text-navigation text-muted",children:[subtitleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:subtitleIcon,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:subtitle})]})]}),buttons&&listButtons]}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})]})})};Section.__docgenInfo={description:"",methods:[],displayName:"Section",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},subtitleIcon:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    addClass?: string;\n    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;\n    label?: string | number; \n    iconStartName?: string;\n    iconEndName?: string;\n    link?: string;\n    hasDropdown?: Boolean;\n}',signature:{properties:[{key:"addClass",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}],required:!0}},{key:"label",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"iconStartName",value:{name:"string",required:!1}},{key:"iconEndName",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}},{key:"hasDropdown",value:{name:"Boolean",required:!1}}]}}],raw:"ButtonType[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},collapsable:{required:!1,tsType:{name:"boolean"},description:""},collapsableId:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/Stepper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Stepper});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_ProgressBar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/ProgressBar.tsx")),_app_components_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Icon.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");const Stepper=({steps,addClass,style,...props})=>{let classTab=["stepper cq row-gap-md"];addClass&&classTab.push(addClass),console.log(steps.length);let classStepper=["stepper-item cq-xs-6"],ratio=12/steps.length;return classStepper.push(`cq-sm-${ratio}`),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:steps.map(((step,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classStepper.join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.z,{percentage:"completed"===step.status?100:"in-progress"===step.status?50:0,addClass:"mb-xs"}),step.current&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"d-flex align-items-center gap-2xs text-reset text-decoration-none font-weight-bold",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:step.title})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:"completed"===step.status?"Completed":"in-progress"===step.status?"In progress":"Not completed"})]}),!step.current&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column",children:[step.link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:step.link,className:"d-flex align-items-center gap-2xs text-reset text-decoration-none",children:["completed"===step.status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{size:"xs",name:"check-circle",addClass:"text-primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:step.title})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"d-flex align-items-center gap-2xs text-reset text-decoration-none",children:["completed"===step.status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{size:"xs",name:"check-circle",addClass:"text-primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:step.title})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:"completed"===step.status?"Completed":"in-progress"===step.status?"In progress":"Not completed"})]})]},index)))})};Stepper.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepType"}],raw:"StepType[]"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/forms/FormGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FormGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/content/Placeholder.tsx");const FormGroup=({label,srOnly,hint,id,required=!1,addClass,children,...props})=>{let classGroup=["form-group"],classLabel=["label"];return required&&classLabel.push("required"),srOnly&&classLabel.push("sr-only"),addClass&&classGroup.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:classLabel.join(" "),htmlFor:id,children:label}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"invalid-feedback",children:"Please enter a message in the textarea."})]})};FormGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hint:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/forms/FormInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FormInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_maxlength__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/maxlength.js");const FormInput=({type="text",id,defaultValue,placeholder,required=!1,disabled=!1,readonly=!1,autofocus,maxLength,addClass,...props})=>((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_maxlength__WEBPACK_IMPORTED_MODULE_2__.V)()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,defaultValue,placeholder,id,disabled,required,readOnly:readonly,autoFocus:autofocus,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control",maxLength,...props}));FormInput.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormInput",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autofocus:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "email" | "tel" | "number" | "date" | "datetime-local" | "time" | "color" | "file" | "password" | "range"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"tel"'},{name:"literal",value:'"number"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime-local"'},{name:"literal",value:'"time"'},{name:"literal",value:'"color"'},{name:"literal",value:'"file"'},{name:"literal",value:'"password"'},{name:"literal",value:'"range"'}]},description:"",defaultValue:{value:'"text"',computed:!1}}}}},"./src/app/forms/FormInputWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormInputWrapper});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Button.tsx"),_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),_app_components_dropdown_DropdownNested__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownNested.tsx");const FormInputWrapper=({addClass,children,...props})=>{let classTab=["form-input-wrapper"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[children&&children,!children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"input-floating-actions",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_2__.$,{iconStartName:"ai",label:"Ask AI",size:"xs",type:"transparent",addClass:"dropdown-toggle text-ai","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Write a course summary",caption:"From all the content inside",iconName:"summarize"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Translate to French",iconName:"translate-generate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Improve writing",iconName:"improve-writing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Make shorter",iconName:"shorter-text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownNested__WEBPACK_IMPORTED_MODULE_7__.V,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Change tone...",iconName:"tone",toggle:!0,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.r,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Professional"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Casual"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Straightforward"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Confident"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Friendly"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownNested__WEBPACK_IMPORTED_MODULE_7__.V,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{type:"ai",label:"Translate to...",iconName:"translate",toggle:!0,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__.r,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"English"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Korean"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Chinese, Simplified"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Chinese, Traditional"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Japanese"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Spanish"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Russian"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"French"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Portuguese"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"German"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Italian"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Dutch"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Indonesian"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Filipino"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Vietnamese"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_6__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Copy from English",iconName:"copy"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_5__.t,{label:"Restore to saved value",iconName:"restore"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-content text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Ask AI can make mistakes. Check important info."})})]})]})})]})]})};FormInputWrapper.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormInputWrapper",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}}}]);