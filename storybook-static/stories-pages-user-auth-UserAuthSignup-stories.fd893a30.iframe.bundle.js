"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[8092],{"./src/stories/pages/user/auth/UserAuthSignup.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Boxed:()=>Boxed,Cover:()=>Cover,Default:()=>Default,SSO:()=>SSO,Video:()=>Video,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserAuthSignup_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),layout=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/layouts/layout.tsx")),Button=__webpack_require__("./src/app/components/Button.tsx"),FormGroup=__webpack_require__("./src/app/components/forms/FormGroup.tsx"),FormInput=__webpack_require__("./src/app/components/forms/FormInput.tsx"),FormSelect=__webpack_require__("./src/app/components/forms/FormSelect.tsx"),Logo=__webpack_require__("./src/app/components/Logo.tsx"),AppSplit=__webpack_require__("./src/app/layouts/AppSplit.tsx");const UserAuthSignup=({theme="default",showEmail=!0,showPlatforms=!0,showSso=!1,positionX,positionY,boxed,shadow,rounded,cover,video})=>{let logoUrl="img/inject-logo-dark.svg",logoDarkUrl="img/inject-logo-dark.svg",logoLightUrl="img/inject-logo-light.svg";switch(theme){case"Schoolab":logoUrl="img/schoolab-logo-dark.svg",logoDarkUrl="img/schoolab-logo-dark.svg",logoLightUrl="img/schoolab-logo-light.svg";break;case"Moho":logoUrl="img/moho-logo-dark.svg",logoDarkUrl="img/moho-logo-dark.svg",logoLightUrl="img/moho-logo-light.svg";break;case"Raiselab":logoUrl="img/raiselab-logo-dark.svg",logoDarkUrl="img/raiselab-logo-dark.svg",logoLightUrl="img/raiselab-logo-light.svg";break;default:logoUrl="img/inject-logo-dark.svg",logoDarkUrl="img/inject-logo-dark.svg",logoLightUrl="img/inject-logo-light.svg"}return(0,jsx_runtime.jsx)(layout.P,{showNavbar:!1,showShortcutbar:!1,children:(0,jsx_runtime.jsxs)(AppSplit.U,{cover,video,theme,positionX,positionY,boxed,shadow,rounded,children:[(0,jsx_runtime.jsx)("nav",{className:"navbar",children:(0,jsx_runtime.jsx)("div",{className:"container-fluid p-0",children:(0,jsx_runtime.jsx)("a",{className:"m-0",href:"#",children:(0,jsx_runtime.jsx)(Logo.g,{alt:theme,logoThemeDefault:logoUrl,logoThemeLight:logoDarkUrl,logoThemeDark:logoLightUrl,logoStyle:{maxWidth:150,maxHeight:40}})})})}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-xl",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-md",children:[(0,jsx_runtime.jsxs)("h2",{className:"display-2 mb-md",children:["Nice to meet you,",(0,jsx_runtime.jsx)("br",{})," join us today!"]}),(0,jsx_runtime.jsxs)("p",{children:["Sign up or ",(0,jsx_runtime.jsx)("a",{href:"/signin",children:"sign in"})," to the digital platform to simplify your learning journey and participate to the community."]})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-md",children:[(showPlatforms||showSso)&&(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-sm}",children:[showPlatforms&&(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Join with Google",iconStartImage:"img/platform-google.png",extended:!0,addClass:"btn-service"}),showSso&&(0,jsx_runtime.jsx)(Button.$,{type:"sso",label:"Join with Schoolab",iconStartName:"service-sso",extended:!0,addClass:"btn-service"})]}),(showPlatforms||showSso)&&(0,jsx_runtime.jsx)("hr",{className:"text-muted","data-content":"or"}),(0,jsx_runtime.jsxs)("form",{method:"post",action:"/signin",id:"loginForm",className:"d-flex flex-column",children:[(0,jsx_runtime.jsxs)("div",{className:"form-row",children:[(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"col-6 mb-xs",id:"first-name",required:!0,label:"First Name",srOnly:!0,children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"first-name",required:!0,placeholder:"First Name",autofocus:!0})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"col-6 mb-xs",id:"last-name",required:!0,label:"Last Name",srOnly:!0,children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"last-name",required:!0,placeholder:"Last Name"})})]}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"mb-xs",id:"gender",required:!0,label:"Gender",srOnly:!0,children:(0,jsx_runtime.jsx)(FormSelect.F,{id:"gender",options:[{label:"Choose your gender…",value:"",disabled:!0,selected:!0},{label:"Man",value:"man"},{label:"Woman",value:"woman"},{label:"Non binary",value:"nb"},{label:"Prefer not to say",value:"no-say"}]})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"mb-xs",id:"email",label:"Email address",srOnly:!0,required:!0,children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"email",type:"email",placeholder:"Email address"})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"mb-xs",id:"password",label:"Password",srOnly:!0,required:!0,children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"password",type:"password",placeholder:"Password"})}),(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Join with email",extended:!0})]})]}),(0,jsx_runtime.jsxs)("p",{className:"small text-muted mt-5 mb-0",children:["Already registered? ",(0,jsx_runtime.jsx)("a",{href:"/signup",children:"Sign in with email"})]}),(0,jsx_runtime.jsxs)("p",{className:"smaller text-muted mt-8 mb-8",children:['By clicking on "Join" above, you acknowledge that you have read and understood, and agree to ',(0,jsx_runtime.jsx)("a",{href:"/terms-and-conditions",children:"Terms & Conditions"})," and ",(0,jsx_runtime.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"}),"."]}),(0,jsx_runtime.jsxs)("ul",{className:"metas is-list smaller mt-5",children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("span",{children:["© 2025 ",(0,jsx_runtime.jsx)("a",{className:"meta is-action",href:"https://theschoolab.com",target:"_blank",rel:"nofollow noreferrer noopener",children:"Schoolab"})]})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("div",{className:"dropdown",id:"changeLanguage",children:[(0,jsx_runtime.jsx)("span",{className:"dropdown-toggle cursorLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"English"}),(0,jsx_runtime.jsxs)("div",{className:"dropdown-menu",children:[(0,jsx_runtime.jsx)("a",{className:"dropdown-item",href:"/signin?_locale=fr",children:"Français – French"}),(0,jsx_runtime.jsx)("a",{className:"dropdown-item",href:"/signin?_locale=en",children:"English"})]})]})})]})]})]})})};UserAuthSignup.__docgenInfo={description:"",methods:[],displayName:"UserAuthSignup",props:{theme:{required:!1,tsType:{name:"union",raw:'"default" | "Inject" | "Schoolab" | "Moho" | "Raiselab"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"Inject"'},{name:"literal",value:'"Schoolab"'},{name:"literal",value:'"Moho"'},{name:"literal",value:'"Raiselab"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showEmail:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPlatforms:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSso:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},positionX:{required:!1,tsType:{name:"union",raw:'"none" | "left" | "center" | "right"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:""},positionY:{required:!1,tsType:{name:"union",raw:'"none" | "top" | "middle" | "bottom"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"top"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"bottom"'}]},description:""},boxed:{required:!1,tsType:{name:"boolean"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""},cover:{required:!1,tsType:{name:"string"},description:""},video:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const UserAuthSignup_stories={title:"Pages/User/Auth/Signup",component:UserAuthSignup,parameters:{layout:"fullscreen"},argTypes:{boxed:{control:"boolean"},shadow:{control:"boolean"},rounded:{control:"boolean"}},args:{theme:"Inject",showPlatforms:!0,boxed:!1,shadow:!1,rounded:!1}},Default={},SSO={args:{showPlatforms:!1,showSso:!0}},Cover={args:{cover:"img/signin-cover.jpg",shadow:!0}},Video={args:{video:"https://www.theschoolab.com/wp-content/uploads/2022/04/Open-Schoolab_2022-Aftermovie.mp4",shadow:!0}},Boxed={args:{cover:"img/signin-cover.jpg",shadow:!0,boxed:!0,rounded:!0,positionX:"right",positionY:"middle"}},__namedExportsOrder=["Default","SSO","Cover","Video","Boxed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},SSO.parameters={...SSO.parameters,docs:{...SSO.parameters?.docs,source:{originalSource:"{\n  args: {\n    showPlatforms: false,\n    showSso: true\n  }\n}",...SSO.parameters?.docs?.source}}},Cover.parameters={...Cover.parameters,docs:{...Cover.parameters?.docs,source:{originalSource:'{\n  args: {\n    cover: "img/signin-cover.jpg",\n    shadow: true\n  }\n}',...Cover.parameters?.docs?.source}}},Video.parameters={...Video.parameters,docs:{...Video.parameters?.docs,source:{originalSource:'{\n  args: {\n    video: "https://www.theschoolab.com/wp-content/uploads/2022/04/Open-Schoolab_2022-Aftermovie.mp4",\n    shadow: true\n  }\n}',...Video.parameters?.docs?.source}}},Boxed.parameters={...Boxed.parameters,docs:{...Boxed.parameters?.docs,source:{originalSource:'{\n  args: {\n    cover: "img/signin-cover.jpg",\n    shadow: true,\n    boxed: true,\n    rounded: true,\n    positionX: "right",\n    positionY: "middle"\n  }\n}',...Boxed.parameters?.docs?.source}}}},"./public/utils/select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>select});const select=()=>{$((function(){$(".form-group select:not(.custom-select-tags):not(.filterSelect)").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)").selectpicker({width:"100%",noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.table-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-transparent",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.card-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-link card-filter",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.dropdown-card").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-card",iconBase:"icon",showTick:!1}),$("select.select-with-search").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check",noneResultsText:"No results for “{0}”…",liveSearch:!0,liveSearchPlaceholder:"Search…",liveSearchNormalize:!0,virtualScroll:"400"}),$("select.custom-select-tags").selectize({delimiter:",",persist:!1,maxItems:null,valueField:"id",labelField:"name",searchField:"name",create:!0,plugins:["remove_button","clear_button"],render:{item:function(item,escape){return'<div class="badge badge-pill"><span>'+escape(item.name)+"</span></div>"}},create:function(input){return{value:input,text:input}}})}))}},"./src/app/components/forms/FormSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>FormSelect});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelect=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>option.options?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("optgroup",{label:option.label,children:option.options.map(((subOption,subIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:subOption.value,disabled:subOption.disabled,selected:subOption.selected,children:subOption.label},subIndex)))},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control custom-select",children:listOptions})};FormSelect.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n    options?: OptionType[];\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"OptionType"}],raw:"OptionType[]",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}}}]);