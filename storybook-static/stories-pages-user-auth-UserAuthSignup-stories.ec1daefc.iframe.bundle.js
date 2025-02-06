"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[8092],{"./src/stories/pages/user/auth/UserAuthSignup.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Boxed:()=>Boxed,Cover:()=>Cover,Default:()=>Default,SSO:()=>SSO,Video:()=>Video,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserAuthSignup_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),layout=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/layouts/layout.tsx")),Button=__webpack_require__("./src/app/components/Button.tsx"),FormGroup=__webpack_require__("./src/app/components/forms/FormGroup.tsx"),FormInput=__webpack_require__("./src/app/components/forms/FormInput.tsx"),Theme=__webpack_require__("./src/app/components/Theme.tsx"),FormSelect=__webpack_require__("./src/app/components/forms/FormSelect.tsx"),Logo=__webpack_require__("./src/app/components/Logo.tsx");const UserAuthSignup=({theme="default",showEmail=!0,showPlatforms=!0,showSso=!1,positionX,positionY,boxed,shadow,rounded,cover,video})=>{let logoUrl="img/inject-logo-dark.svg",logoDarkUrl="img/inject-logo-dark.svg",logoLightUrl="img/inject-logo-light.svg";switch(theme){case"Schoolab":logoUrl="img/schoolab-logo-dark.svg",logoDarkUrl="img/schoolab-logo-dark.svg",logoLightUrl="img/schoolab-logo-light.svg";break;case"Moho":logoUrl="img/moho-logo-dark.svg",logoDarkUrl="img/moho-logo-dark.svg",logoLightUrl="img/moho-logo-light.svg";break;case"Raiselab":logoUrl="img/raiselab-logo-dark.svg",logoDarkUrl="img/raiselab-logo-dark.svg",logoLightUrl="img/raiselab-logo-light.svg";break;default:logoUrl="img/inject-logo-dark.svg",logoDarkUrl="img/inject-logo-dark.svg",logoLightUrl="img/inject-logo-light.svg"}let splitedContentClass=["splited-content splited-content-large gap-3xl"];return positionX&&splitedContentClass.push(`is-${positionX}`),positionY&&splitedContentClass.push(`is-${positionY}`),boxed&&splitedContentClass.push("is-boxed"),shadow&&splitedContentClass.push("is-shadowed"),rounded&&splitedContentClass.push("is-rounded"),(0,jsx_runtime.jsxs)(layout.P,{showNavbar:!1,showShortcutbar:!1,children:[theme&&"default"!==theme&&(0,jsx_runtime.jsx)(Theme.S,{themeName:theme}),(0,jsx_runtime.jsx)("main",{className:"application-content p-0",children:(0,jsx_runtime.jsxs)("div",{className:["splited-container"].join(" "),children:[(0,jsx_runtime.jsxs)("div",{className:splitedContentClass.join(" "),children:[(0,jsx_runtime.jsx)("nav",{className:"navbar",children:(0,jsx_runtime.jsx)("div",{className:"container-fluid p-0",children:(0,jsx_runtime.jsx)("a",{className:"m-0",href:"#",children:(0,jsx_runtime.jsx)(Logo.g,{alt:theme,logoThemeDefault:logoUrl,logoThemeLight:logoDarkUrl,logoThemeDark:logoLightUrl,logoStyle:{maxWidth:150,maxHeight:40}})})})}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-xl",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-md",children:[(0,jsx_runtime.jsxs)("h2",{className:"display-2 mb-md",children:["Nice to meet you,",(0,jsx_runtime.jsx)("br",{})," join us today!"]}),(0,jsx_runtime.jsxs)("p",{children:["Sign up or ",(0,jsx_runtime.jsx)("a",{href:"/signin",children:"sign in"})," to the digital platform to simplify your learning journey and participate to the community."]})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-md",children:[(showPlatforms||showSso)&&(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-sm}",children:[showPlatforms&&(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Join with Google",iconStartImage:"img/platform-google.png",extended:!0,addClass:"btn-service"}),showSso&&(0,jsx_runtime.jsx)(Button.$,{type:"sso",label:"Join with Schoolab",iconStartName:"service-sso",extended:!0,addClass:"btn-service"})]}),(showPlatforms||showSso)&&(0,jsx_runtime.jsx)("hr",{className:"text-muted","data-content":"or"}),(0,jsx_runtime.jsxs)("form",{method:"post",action:"/signin",id:"loginForm",className:"d-flex flex-column",children:[(0,jsx_runtime.jsxs)("div",{className:"form-row",children:[(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"col-6 mb-xs",id:"first-name",required:!0,label:"First Name",srOnly:!0,children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"first-name",required:!0,placeholder:"First Name",autofocus:!0})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"col-6 mb-xs",id:"last-name",required:!0,label:"Last Name",srOnly:!0,children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"last-name",required:!0,placeholder:"Last Name"})})]}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"mb-xs",id:"gender",required:!0,label:"Gender",srOnly:!0,children:(0,jsx_runtime.jsx)(FormSelect.F,{id:"gender",options:[{label:"Choose your gender…",value:"",disabled:!0,selected:!0},{label:"Man",value:"man"},{label:"Woman",value:"woman"},{label:"Non binary",value:"nb"},{label:"Prefer not to say",value:"no-say"}]})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"mb-xs",id:"email",label:"Email address",srOnly:!0,required:!0,children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"email",type:"email",placeholder:"Email address"})}),(0,jsx_runtime.jsx)(FormGroup.g,{addClass:"mb-xs",id:"password",label:"Password",srOnly:!0,required:!0,children:(0,jsx_runtime.jsx)(FormInput.Z,{id:"password",type:"password",placeholder:"Password"})}),(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Join with email",extended:!0})]})]}),(0,jsx_runtime.jsxs)("p",{className:"small text-muted mt-5 mb-0",children:["Already registered? ",(0,jsx_runtime.jsx)("a",{href:"/signup",children:"Sign in with email"})]}),(0,jsx_runtime.jsxs)("p",{className:"smaller text-muted mt-8 mb-8",children:['By clicking on "Join" above, you acknowledge that you have read and understood, and agree to ',(0,jsx_runtime.jsx)("a",{href:"/terms-and-conditions",children:"Terms & Conditions"})," and ",(0,jsx_runtime.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"}),"."]}),(0,jsx_runtime.jsxs)("ul",{className:"metas is-list smaller mt-5",children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("span",{children:["© 2025 ",(0,jsx_runtime.jsx)("a",{className:"meta is-action",href:"https://theschoolab.com",target:"_blank",rel:"nofollow noreferrer noopener",children:"Schoolab"})]})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("div",{className:"dropdown",id:"changeLanguage",children:[(0,jsx_runtime.jsx)("span",{className:"dropdown-toggle cursorLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"English"}),(0,jsx_runtime.jsxs)("div",{className:"dropdown-menu",children:[(0,jsx_runtime.jsx)("a",{className:"dropdown-item",href:"/signin?_locale=fr",children:"Français – French"}),(0,jsx_runtime.jsx)("a",{className:"dropdown-item",href:"/signin?_locale=en",children:"English"})]})]})})]})]})]}),cover&&(0,jsx_runtime.jsx)("div",{className:"splited-cover",children:(0,jsx_runtime.jsx)("img",{src:cover})}),video&&(0,jsx_runtime.jsx)("div",{className:"splited-cover",children:(0,jsx_runtime.jsx)("video",{poster:cover,autoPlay:!0,playsInline:!0,muted:!0,loop:!0,style:{visibility:"inherit",opacity:"1"},children:(0,jsx_runtime.jsx)("source",{src:video,type:"video/mp4"})})})]})})]})};UserAuthSignup.__docgenInfo={description:"",methods:[],displayName:"UserAuthSignup",props:{theme:{required:!1,tsType:{name:"union",raw:'"default" | "Inject" | "Schoolab" | "Moho" | "Raiselab"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"Inject"'},{name:"literal",value:'"Schoolab"'},{name:"literal",value:'"Moho"'},{name:"literal",value:'"Raiselab"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showEmail:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPlatforms:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSso:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},positionX:{required:!1,tsType:{name:"union",raw:'"none" | "left" | "center" | "right"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:""},positionY:{required:!1,tsType:{name:"union",raw:'"none" | "top" | "middle" | "bottom"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"top"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"bottom"'}]},description:""},boxed:{required:!1,tsType:{name:"boolean"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""},cover:{required:!1,tsType:{name:"string"},description:""},video:{required:!1,tsType:{name:"string"},description:""}}};const UserAuthSignup_stories={title:"Pages/User/Auth/Signup",component:UserAuthSignup,parameters:{layout:"fullscreen"},argTypes:{boxed:{control:"boolean"},shadow:{control:"boolean"},rounded:{control:"boolean"}},args:{theme:"Inject",showPlatforms:!0,boxed:!1,shadow:!1,rounded:!1}},Default={},SSO={args:{showPlatforms:!1,showSso:!0}},Cover={args:{cover:"img/signin-cover.jpg",shadow:!0}},Video={args:{video:"https://www.theschoolab.com/wp-content/uploads/2022/04/Open-Schoolab_2022-Aftermovie.mp4",shadow:!0}},Boxed={args:{cover:"img/signin-cover.jpg",shadow:!0,boxed:!0,rounded:!0,positionX:"right",positionY:"middle"}},__namedExportsOrder=["Default","SSO","Cover","Video","Boxed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},SSO.parameters={...SSO.parameters,docs:{...SSO.parameters?.docs,source:{originalSource:"{\n  args: {\n    showPlatforms: false,\n    showSso: true\n  }\n}",...SSO.parameters?.docs?.source}}},Cover.parameters={...Cover.parameters,docs:{...Cover.parameters?.docs,source:{originalSource:'{\n  args: {\n    cover: "img/signin-cover.jpg",\n    shadow: true\n  }\n}',...Cover.parameters?.docs?.source}}},Video.parameters={...Video.parameters,docs:{...Video.parameters?.docs,source:{originalSource:'{\n  args: {\n    video: "https://www.theschoolab.com/wp-content/uploads/2022/04/Open-Schoolab_2022-Aftermovie.mp4",\n    shadow: true\n  }\n}',...Video.parameters?.docs?.source}}},Boxed.parameters={...Boxed.parameters,docs:{...Boxed.parameters?.docs,source:{originalSource:'{\n  args: {\n    cover: "img/signin-cover.jpg",\n    shadow: true,\n    boxed: true,\n    rounded: true,\n    positionX: "right",\n    positionY: "middle"\n  }\n}',...Boxed.parameters?.docs?.source}}}},"./public/utils/maxlength.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>maxlength});const maxlength=()=>{$(".form-group > input[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"12px"},appendToParent:!0,separator:"/",showOnReady:!0}),$(".form-input-wrapper > input[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"40px"},appendToParent:!0,separator:"/",showOnReady:!0}),$("textarea[maxlength]").maxlength({warningClass:"small text-muted",limitReachedClass:"small text-danger",placement:{bottom:"10px",right:"12px"},appendToParent:!0,separator:"/",showOnReady:!0})}},"./public/utils/select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>select});const select=()=>{$((function(){$(".form-group select:not(.custom-select-tags):not(.filterSelect)").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)").selectpicker({width:"100%",noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.table-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-transparent",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.card-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-link card-filter",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.dropdown-card").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-card",iconBase:"icon",showTick:!1}),$("select.select-with-search").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check",noneResultsText:"No results for “{0}”…",liveSearch:!0,liveSearchPlaceholder:"Search…",liveSearchNormalize:!0,virtualScroll:"400"}),$("select.custom-select-tags").selectize({delimiter:",",persist:!1,maxItems:null,valueField:"id",labelField:"name",searchField:"name",create:!0,plugins:["remove_button","clear_button"],render:{item:function(item,escape){return'<div class="badge badge-pill"><span>'+escape(item.name)+"</span></div>"}},create:function(input){return{value:input,text:input}}})}))}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Placeholder=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder-container",style:{height:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder"})});Placeholder.__docgenInfo={description:"",methods:[],displayName:"Placeholder"}},"./src/app/components/badges/notifs/Notif.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Notif});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Notif=({addClass,status,label})=>{let classTab=["badge badge-notification"];return status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})})};Notif.__docgenInfo={description:"",methods:[],displayName:"Notif",props:{label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"interactive" | "accent" | "highlight"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"highlight"'}]},description:"Status"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass,style,...props})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const DropdownItem=({children,type,addClass,outbound,active,label,iconName,caption,toggle,newTab,href="#",target,rel,badge,...props})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),active&&classTab.push("active"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href,target,...props,children:[void 0!==active&&(active?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"check",addClass:"dropdown-item--icon"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"",addClass:"dropdown-item--icon"})),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"d-flex",children:[label," ",badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__.X,{label:badge,status:"highlight",addClass:"ml-auto"})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]}),newTab&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"new-tab"}),toggle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-right",addClass:"dropdown-item--toggle"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger" | "ai"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"ai"'}]},description:""},iconName:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},toggle:{required:!1,tsType:{name:"boolean"},description:""},newTab:{required:!1,tsType:{name:"boolean"},description:""},outbound:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},badge:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"e"}],return:{name:"void"}}},description:""}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show,style,...props})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/forms/FormGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FormGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Placeholder.tsx");const FormGroup=({label,srOnly,hint,id,required=!1,addClass,children,...props})=>{let classGroup=["form-group"],classLabel=["label"];return required&&classLabel.push("required"),srOnly&&classLabel.push("sr-only"),addClass&&classGroup.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:classLabel.join(" "),htmlFor:id,children:label}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"invalid-feedback",children:"Please enter a message in the textarea."})]})};FormGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hint:{required:!1,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/forms/FormInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FormInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_maxlength__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/maxlength.js");const FormInput=({type="text",id,defaultValue,placeholder,required=!1,disabled=!1,readonly=!1,autofocus,maxLength,addClass,...props})=>((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_maxlength__WEBPACK_IMPORTED_MODULE_2__.V)()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,defaultValue,placeholder,id,disabled,required,readOnly:readonly,autoFocus:autofocus,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control",maxLength,...props}));FormInput.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormInput",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autofocus:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "email" | "tel" | "number" | "date" | "datetime-local" | "time" | "color" | "file" | "password" | "range"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"tel"'},{name:"literal",value:'"number"'},{name:"literal",value:'"date"'},{name:"literal",value:'"datetime-local"'},{name:"literal",value:'"time"'},{name:"literal",value:'"color"'},{name:"literal",value:'"file"'},{name:"literal",value:'"password"'},{name:"literal",value:'"range"'}]},description:"",defaultValue:{value:'"text"',computed:!1}}}}},"./src/app/components/forms/FormSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>FormSelect});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelect=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control custom-select",children:listOptions})};FormSelect.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}},"./src/app/components/sidebar/SidebarAdmin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SidebarAdmin});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SidebarAdmin=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("aside",{className:"application-sidebar d-none d-lg-block",id:"leftMainSidebar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"sidebar overflow-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"accordionManageNav",className:"d-flex flex-column flex-fill gap-xl px-24px pt-24px pb-32px accordion",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"nav nav-main flex-column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-title",children:"Schoolab"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-chart-line"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Overview"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link active",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-org"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Organization"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-program"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Programs"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-project"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Projects"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-account"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Users"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-coaching"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Coaching"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-calendar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Events"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-toolbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Toolbox"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-tag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Tags"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-console"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Logs"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:" nav-link",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--icon icon icon-email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Mails"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"nav nav-main flex-column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-title",children:"External"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Overview"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Programs"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"nav-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"nav-link",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"nav-link--label",children:"Settings"})})})]})]})})});SidebarAdmin.__docgenInfo={description:"",methods:[],displayName:"SidebarAdmin"}},"./src/app/layouts/layout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Layout});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_NavBar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/NavBar.tsx")),_components_Shortcutbar_ShortcutBar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Shortcutbar/ShortcutBar.tsx"),_components_sidebar_SidebarManage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/sidebar/SidebarManage.tsx"),_components_sidebar_SidebarAdmin__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/sidebar/SidebarAdmin.tsx");const Layout=({children,theme,showNavbar=!0,hub=!1,showShortcutbar=!0,shortcutBarExpanded,sideBar})=>{let appContainerClass="application-container";return"Admin"===sideBar&&(appContainerClass="application-container pb-0"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"application-ui",children:[showNavbar&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__.F,{theme:theme&&theme,isHub:hub}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:appContainerClass,children:[showShortcutbar&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Shortcutbar_ShortcutBar__WEBPACK_IMPORTED_MODULE_3__.Y,{isExpanded:shortcutBarExpanded}),sideBar&&"Manage"===sideBar&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_SidebarManage__WEBPACK_IMPORTED_MODULE_4__.u,{}),sideBar&&"Admin"===sideBar&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_SidebarAdmin__WEBPACK_IMPORTED_MODULE_5__.q,{}),children]})]})};Layout.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},showNavbar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shortcutBarExpanded:{required:!1,tsType:{name:"boolean"},description:""},hub:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sideBar:{required:!1,tsType:{name:"union",raw:'"Admin" | "Manage"',elements:[{name:"literal",value:'"Admin"'},{name:"literal",value:'"Manage"'}]},description:""},theme:{required:!1,tsType:{name:"union",raw:'"default" | "Inject" | "Schoolab" | "Moho" | "Raiselab"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"Inject"'},{name:"literal",value:'"Schoolab"'},{name:"literal",value:'"Moho"'},{name:"literal",value:'"Raiselab"'}]},description:""},showShortcutbar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}}}}]);