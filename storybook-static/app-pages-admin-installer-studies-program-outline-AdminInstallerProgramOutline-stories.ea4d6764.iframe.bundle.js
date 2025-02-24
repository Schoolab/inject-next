"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5616],{"./src/app/pages/admin/installer/studies/program-outline/AdminInstallerProgramOutline.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgramOutline:()=>ProgramOutline,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AdminInstallerProgramOutline_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),layout=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/layouts/layout.tsx")),FormGroup=__webpack_require__("./src/app/forms/FormGroup.tsx"),Button=__webpack_require__("./src/app/components/buttons/Button.tsx"),FormTextarea=__webpack_require__("./src/app/forms/FormTextarea.tsx"),FormSelect=__webpack_require__("./src/app/forms/FormSelect.tsx"),AppSplit=__webpack_require__("./src/app/layouts/AppSplit.tsx"),ProgressBar=__webpack_require__("./src/app/components/progress/bar/ProgressBar.tsx"),CardProgram=__webpack_require__("./src/app/components/cards/CardProgram.tsx");const Preview=()=>(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-center w-100 h-100",children:(0,jsx_runtime.jsx)(CardProgram.l,{name:"Impact Innovators",actions:[{title:"Join the program",metas:[{label:"Applicants"},{iconName:"account",label:"143",addClass:"font-weight-bold"}],buttons:[{label:"Join",type:"primary",link:"#"},{label:"Learn more",type:"default",link:"#"}]}],style:{width:"100%",maxWidth:"32rem"},cover:"img/program-innovators.png"})}),AdminInstallerProgramOutline=({theme="default"})=>(0,jsx_runtime.jsx)(layout.P,{showNavbar:!1,showShortcutbar:!1,children:(0,jsx_runtime.jsxs)(AppSplit.U,{addClass:"py-3xl",theme,positionX:"left",shadow:!0,preview:(0,jsx_runtime.jsx)(Preview,{}),children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-xs",children:[(0,jsx_runtime.jsx)("h1",{className:"display-3",children:"Program outline"}),(0,jsx_runtime.jsx)("p",{children:"Describe the program and its objectives."})]}),(0,jsx_runtime.jsxs)("form",{className:"d-flex flex-column flex-fill justify-content-start",name:"ChallengeDefaultForm",method:"post",action:"/rest/challenge/create/default",children:[(0,jsx_runtime.jsxs)("div",{className:"cq mb-lg",children:[(0,jsx_runtime.jsx)(FormGroup.g,{id:"problematics",label:"Problems addressed",children:(0,jsx_runtime.jsx)(FormTextarea.h,{id:"problematics",rows:4})}),(0,jsx_runtime.jsx)(FormGroup.g,{id:"mission_goal",label:"Mission goal",children:(0,jsx_runtime.jsx)(FormTextarea.h,{id:"mission_goal",rows:4})}),(0,jsx_runtime.jsx)(FormGroup.g,{id:"methodology",label:"Used methodology",required:!0,children:(0,jsx_runtime.jsx)(FormSelect.F,{id:"methodology",options:[{label:"Consulting",value:"consulting"},{label:"Design fiction",value:"design_fiction"},{label:"Design thinking",value:"design_thinking"},{label:"Educational engineering",value:"educational_engineering"},{label:"Sustainable design",value:"sustainable_design"},{label:"UX / UI",value:"ux_ui"},{label:"Other",value:"other"}]})})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-lg align-items-center mt-auto",children:[(0,jsx_runtime.jsx)(ProgressBar.z,{percentage:37,max:100,addClass:"flex-fill",inline:!0,text:"3/8"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-xs",children:[(0,jsx_runtime.jsx)(Button.$,{type:"default",label:"Previous",link:"/?path=/story/pages-admin-installer-studies--properties"}),(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Next step",link:"/?path=/story/pages-admin-installer-studies--results"})]})]})]})]})});AdminInstallerProgramOutline.__docgenInfo={description:"",methods:[],displayName:"AdminInstallerProgramOutline",props:{theme:{required:!1,tsType:{name:"union",raw:'"default" | "Inject" | "Schoolab" | "Moho" | "Raiselab"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"Inject"'},{name:"literal",value:'"Schoolab"'},{name:"literal",value:'"Moho"'},{name:"literal",value:'"Raiselab"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};const AdminInstallerProgramOutline_stories={title:"Pages/Admin/Installer/Studies",component:AdminInstallerProgramOutline,parameters:{layout:"fullscreen"}},ProgramOutline={},__namedExportsOrder=["ProgramOutline"];ProgramOutline.parameters={...ProgramOutline.parameters,docs:{...ProgramOutline.parameters?.docs,source:{originalSource:"{}",...ProgramOutline.parameters?.docs?.source}}}},"./public/utils/maxlength.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>maxlength});const maxlength=()=>{$(".form-group > input[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"12px"},appendToParent:!0,separator:"/",showOnReady:!0}),$(".form-input-wrapper > input[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"40px"},appendToParent:!0,separator:"/",showOnReady:!0}),$("textarea[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"12px"},appendToParent:!0,separator:"/",showOnReady:!0})}},"./public/utils/select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>select});const select=()=>{$((function(){$(".form-group select:not(.custom-select-tags):not(.filterSelect)").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)").selectpicker({width:"100%",noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.table-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-transparent",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.card-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-link card-filter",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.dropdown-card").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-card",iconBase:"icon",showTick:!1}),$("select.select-with-search").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check",noneResultsText:"No results for “{0}”…",liveSearch:!0,liveSearchPlaceholder:"Search…",liveSearchNormalize:!0,virtualScroll:"400"}),$("select.custom-select-tags").selectize({delimiter:",",persist:!1,maxItems:null,valueField:"id",labelField:"name",searchField:"name",create:!0,plugins:["remove_button","clear_button"],render:{item:function(item,escape){return'<div class="badge badge-pill"><span>'+escape(item.name)+"</span></div>"}},create:function(input){return{value:input,text:input}}})}))}},"./src/app/forms/FormGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FormGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/content/Placeholder.tsx");const FormGroup=({label,srOnly,hint,id,required=!1,addClass,children,...props})=>{let classGroup=["form-group"],classLabel=["label"];return required&&classLabel.push("required"),srOnly&&classLabel.push("sr-only"),addClass&&classGroup.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:classLabel.join(" "),htmlFor:id,children:label}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"invalid-feedback",children:"Please enter a message in the textarea."})]})};FormGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hint:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/forms/FormSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>FormSelect});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelect=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>option.options?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("optgroup",{label:option.label,children:option.options.map(((subOption,subIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:subOption.value,disabled:subOption.disabled,selected:subOption.selected,children:subOption.label},subIndex)))},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control custom-select",children:listOptions})};FormSelect.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n    options?: OptionType[];\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"OptionType"}],raw:"OptionType[]",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}},"./src/app/forms/FormTextarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>FormTextarea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_maxlength__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/maxlength.js");const FormTextarea=({type="text",id,defaultValue,placeholder,required=!1,disabled=!1,readonly=!1,autofocus,maxLength,rows=8,fieldSizing,addClass,...props})=>{let classInput=["form-control"];return fieldSizing&&classInput.push("field-sizing"),addClass&&classInput.push(addClass),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_maxlength__WEBPACK_IMPORTED_MODULE_2__.V)()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{defaultValue,placeholder,id,disabled,readOnly:readonly,autoFocus:autofocus,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:classInput.join(" "),rows,maxLength,...props})};FormTextarea.__docgenInfo={description:"",methods:[],displayName:"FormTextarea",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autofocus:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "wysiwyg"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"wysiwyg"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},fieldSizing:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/app/layouts/AppSplit.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>AppSplit});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Theme__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Theme.tsx")),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_Logo__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Logo.tsx");const AppSplit=({children,preview,cover,video,theme="default",logo=!0,positionX="none",positionY="none",boxed=!1,shadow=!1,rounded=!1,addClass,style,...props})=>{let splitedContentClass=["splited-content splited-content-large gap-3xl"];positionX&&splitedContentClass.push(`is-${positionX}`),positionY&&splitedContentClass.push(`is-${positionY}`),boxed&&splitedContentClass.push("is-boxed"),shadow&&splitedContentClass.push("is-shadowed"),rounded&&splitedContentClass.push("is-rounded"),addClass&&splitedContentClass.push(addClass);let logoUrl="img/inject-logo-dark.svg",logoDarkUrl="img/inject-logo-dark.svg",logoLightUrl="img/inject-logo-light.svg";switch(theme){case"Schoolab":logoUrl="img/schoolab-logo-dark.svg",logoDarkUrl="img/schoolab-logo-dark.svg",logoLightUrl="img/schoolab-logo-light.svg";break;case"Moho":logoUrl="img/moho-logo-dark.svg",logoDarkUrl="img/moho-logo-dark.svg",logoLightUrl="img/moho-logo-light.svg";break;case"Raiselab":logoUrl="img/raiselab-logo-dark.svg",logoDarkUrl="img/raiselab-logo-dark.svg",logoLightUrl="img/raiselab-logo-light.svg";break;default:logoUrl="img/inject-logo-dark.svg",logoDarkUrl="img/inject-logo-dark.svg",logoLightUrl="img/inject-logo-light.svg"}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main",{className:["application-content p-0"].join(" "),style,...props,children:[theme&&"default"!==theme&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Theme__WEBPACK_IMPORTED_MODULE_2__.S,{themeName:theme}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["splited-container"].join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:splitedContentClass.join(" "),children:[logo&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:"navbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container-fluid p-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"m-0",href:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Logo__WEBPACK_IMPORTED_MODULE_4__.g,{alt:theme,logoThemeDefault:logoUrl,logoThemeLight:logoDarkUrl,logoThemeDark:logoLightUrl,logoStyle:{maxWidth:150,maxHeight:40}})})})}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xl",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{width:"75%",height:"40px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{height:"20px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{width:"50%",height:"20px"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})]})]}),preview&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"splited-cover bg-highlight",children:preview}),cover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"splited-cover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:cover})}),video&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"splited-cover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video",{poster:cover,autoPlay:!0,playsInline:!0,muted:!0,loop:!0,style:{visibility:"inherit",opacity:"1"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{src:video,type:"video/mp4"})})})]})]})};AppSplit.__docgenInfo={description:"",methods:[],displayName:"AppSplit",props:{theme:{required:!1,tsType:{name:"union",raw:'"default" | "Inject" | "Schoolab" | "Moho" | "Raiselab"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"Inject"'},{name:"literal",value:'"Schoolab"'},{name:"literal",value:'"Moho"'},{name:"literal",value:'"Raiselab"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},logo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},positionX:{required:!1,tsType:{name:"union",raw:'"none" | "left" | "center" | "right"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},positionY:{required:!1,tsType:{name:"union",raw:'"none" | "top" | "middle" | "bottom"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"top"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},boxed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},cover:{required:!1,tsType:{name:"string"},description:""},video:{required:!1,tsType:{name:"string"},description:""},preview:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);