"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2582],{"./src/stories/pages/admin/installer/studies/AdminInstallerCategories.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Categories:()=>Categories,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AdminInstallerCategories_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),layout=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/layouts/layout.tsx")),Button=__webpack_require__("./src/app/components/Button.tsx"),FormFieldSet=__webpack_require__("./src/app/components/forms/FormFieldSet.tsx"),FormOption=__webpack_require__("./src/app/components/forms/FormOption.tsx"),AppSplit=__webpack_require__("./src/app/layouts/AppSplit.tsx"),ProgressBar=__webpack_require__("./src/app/components/ProgressBar.tsx"),CardProgram=__webpack_require__("./src/app/components/cards/CardProgram.tsx");const Preview=()=>(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-center w-100 h-100",children:(0,jsx_runtime.jsx)(CardProgram.l,{name:"Impact Innovators",actions:[{title:"Join the program",metas:[{label:"Applicants"},{iconName:"account",label:"143",addClass:"font-weight-bold"}],buttons:[{label:"Join",type:"primary",link:"#"},{label:"Learn more",type:"default",link:"#"}]}],style:{width:"100%",maxWidth:"32rem"},cover:"img/program-innovators.png"})}),AdminInstallerCategories=({theme="default"})=>(0,jsx_runtime.jsx)(layout.P,{showNavbar:!1,showShortcutbar:!1,children:(0,jsx_runtime.jsxs)(AppSplit.U,{addClass:"py-3xl",theme,positionX:"left",shadow:!0,preview:(0,jsx_runtime.jsx)(Preview,{}),children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-xs",children:[(0,jsx_runtime.jsx)("h1",{className:"display-3",children:"Categories"}),(0,jsx_runtime.jsx)("p",{children:"Choose the impact and the categories of the program. It will be used for insights."})]}),(0,jsx_runtime.jsxs)("form",{className:"d-flex flex-column flex-fill justify-content-start",name:"ChallengeDefaultForm",method:"post",action:"/rest/challenge/create/default",children:[(0,jsx_runtime.jsxs)("div",{className:"cq mb-lg",children:[(0,jsx_runtime.jsxs)(FormFieldSet.J,{id:"impact",legend:"Impact",hint:"Choose the the case that best describes the program.",grid:!0,children:[(0,jsx_runtime.jsx)("div",{className:"g-col-12 g-col-sm-6",children:(0,jsx_runtime.jsx)(FormOption._,{name:"impact",id:"no-impact",value:"no-impact",type:"radio",card:!0,label:"None",defaultChecked:!0,icon:"impact-none"})}),(0,jsx_runtime.jsx)("div",{className:"g-col-12 g-col-sm-6",children:(0,jsx_runtime.jsx)(FormOption._,{name:"impact",id:"impact-not-obvious",value:"impact-not-obvious",type:"radio",card:!0,label:"Not obvious",icon:"impact-not-obvious"})}),(0,jsx_runtime.jsx)("div",{className:"g-col-12 g-col-sm-6",children:(0,jsx_runtime.jsx)(FormOption._,{name:"impact",id:"impact-push",value:"impact-push",type:"radio",card:!0,label:"Push",icon:"impact-push"})}),(0,jsx_runtime.jsx)("div",{className:"g-col-12 g-col-sm-6",children:(0,jsx_runtime.jsx)(FormOption._,{name:"impact",id:"impact-native",value:"impact-native",type:"radio",card:!0,label:"Native",icon:"impact-native"})})]}),(0,jsx_runtime.jsxs)(FormFieldSet.J,{id:"verticals",legend:"Verticals",children:[(0,jsx_runtime.jsx)(FormOption._,{name:"verticals",id:"plastic",value:"plastic",type:"checkbox",card:!0,icon:"vertical-plastic",label:"Plastic"}),(0,jsx_runtime.jsx)(FormOption._,{name:"verticals",id:"food",value:"food",type:"checkbox",card:!0,icon:"vertical-food",label:"Food"}),(0,jsx_runtime.jsx)(FormOption._,{name:"verticals",id:"dei",value:"dei",type:"checkbox",card:!0,icon:"vertical-dei",label:"DEI"})]}),(0,jsx_runtime.jsxs)(FormFieldSet.J,{name:"ecosystems",legend:"Ecosystems",children:[(0,jsx_runtime.jsx)(FormOption._,{name:"ecosystems",id:"ecosystem-students",value:"students",type:"checkbox",card:!0,label:"Students",icon:"ecosystem-student"}),(0,jsx_runtime.jsx)(FormOption._,{name:"ecosystems",id:"ecosystem-startups",value:"startups",type:"checkbox",card:!0,label:"Startups",icon:"ecosystem-startups"}),(0,jsx_runtime.jsx)(FormOption._,{name:"ecosystems",id:"ecosystem-corporate",value:"corporate",type:"checkbox",card:!0,label:"Corporate",icon:"ecosystem-corporate"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-lg align-items-center mt-auto",children:[(0,jsx_runtime.jsx)(ProgressBar.z,{percentage:62,max:100,addClass:"flex-fill",inline:!0,text:"5/8"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-xs",children:[(0,jsx_runtime.jsx)(Button.$,{type:"default",label:"Previous",link:"/?path=/story/pages-admin-installer-studies--results"}),(0,jsx_runtime.jsx)(Button.$,{type:"primary",label:"Next step",link:"/?path=/story/pages-admin-installer-studies--sdg"})]})]})]})]})});AdminInstallerCategories.__docgenInfo={description:"",methods:[],displayName:"AdminInstallerCategories",props:{theme:{required:!1,tsType:{name:"union",raw:'"default" | "Inject" | "Schoolab" | "Moho" | "Raiselab"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"Inject"'},{name:"literal",value:'"Schoolab"'},{name:"literal",value:'"Moho"'},{name:"literal",value:'"Raiselab"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};const AdminInstallerCategories_stories={title:"Pages/Admin/Installer/Studies",component:AdminInstallerCategories,parameters:{layout:"fullscreen"}},Categories={},__namedExportsOrder=["Categories"];Categories.parameters={...Categories.parameters,docs:{...Categories.parameters?.docs,source:{originalSource:"{}",...Categories.parameters?.docs?.source}}}},"./src/app/components/forms/FormFieldSet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>FormFieldSet});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Placeholder.tsx");const FormFieldSet=({name,legend,hint,id,disabled=!1,grid,addClass,children,...props})=>{let classGroup=["form-group"],classOptions=["form-options"];return addClass&&classGroup.push(addClass),grid&&classOptions.push("grid gap-xs"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset",{name,className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("legend",{className:["label"].join(" "),children:legend}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classOptions.join(" "),id,"aria-describedby":"hint-"+id,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{})})]})};FormFieldSet.__docgenInfo={description:"The `fieldset` HTML element is used to group several controls as well as labels (`label`) within a web form.",methods:[],displayName:"FormFieldSet",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},legend:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},grid:{required:!1,tsType:{name:"boolean"},description:""},hint:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/forms/FormOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>FormOption});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Icon=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Sdg=({sdg,size="24"})=>(0,jsx_runtime.jsx)("div",{"aria-hidden":"true",className:`icon icon--sdg is-sdg-${sdg} is-${size}px`,children:(0,jsx_runtime.jsx)("span",{children:sdg})});Sdg.__docgenInfo={description:"",methods:[],displayName:"Sdg",props:{sdg:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"16" | "24" | "40"',elements:[{name:"literal",value:'"16"'},{name:"literal",value:'"24"'},{name:"literal",value:'"40"'}]},description:"",defaultValue:{value:'"24"',computed:!1}}}};const FormOption=({type,id,name="option",label,caption,icon,sdg,value,checked,defaultChecked,disabled,card,addClass,labelClass,onChange,...props})=>{let classTab=["custom-control"];addClass&&classTab.push(addClass),"checkbox"===type&&classTab.push("custom-checkbox"),"radio"===type&&classTab.push("custom-radio"),"switch"===type&&classTab.push("custom-switch"),card&&classTab.push("custom-control-card");let labelClassTab=["custom-control-label text-nowrap d-flex column-gap-xs"];return labelClass&&labelClassTab.push(labelClass),(0,jsx_runtime.jsxs)("div",{className:classTab.join(" "),...props,children:[(0,jsx_runtime.jsx)("input",{type:"radio"!==type?"checkbox":"radio",id:"option-"+id,name,className:"custom-control-input",defaultValue:value,defaultChecked,disabled,checked,onChange:()=>onChange&&onChange(!checked)}),(0,jsx_runtime.jsxs)("label",{className:labelClassTab.join(" "),htmlFor:"option-"+id,"aria-describedby":"caption-"+id,children:[icon&&(0,jsx_runtime.jsx)(Icon.I,{name:icon,size:"sm"}),sdg&&(0,jsx_runtime.jsx)(Sdg,{sdg,size:"24"}),(0,jsx_runtime.jsx)("span",{children:label})]}),caption&&(0,jsx_runtime.jsx)("small",{id:"caption-"+id,className:"form-text text-muted",children:caption})]})};FormOption.__docgenInfo={description:"",methods:[],displayName:"FormOption",props:{type:{required:!0,tsType:{name:"union",raw:'"checkbox" | "radio" | "switch"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"radio"'},{name:"literal",value:'"switch"'}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"option"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},sdg:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},card:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},labelClass:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}}},"./src/app/layouts/AppSplit.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>AppSplit});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_Theme__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Theme.tsx")),_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Placeholder.tsx"),_components_Logo__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Logo.tsx");const AppSplit=({children,preview,cover,video,theme="default",logo=!0,positionX="none",positionY="none",boxed=!1,shadow=!1,rounded=!1,addClass,style,...props})=>{let splitedContentClass=["splited-content splited-content-large gap-3xl"];positionX&&splitedContentClass.push(`is-${positionX}`),positionY&&splitedContentClass.push(`is-${positionY}`),boxed&&splitedContentClass.push("is-boxed"),shadow&&splitedContentClass.push("is-shadowed"),rounded&&splitedContentClass.push("is-rounded"),addClass&&splitedContentClass.push(addClass);let logoUrl="img/inject-logo-dark.svg",logoDarkUrl="img/inject-logo-dark.svg",logoLightUrl="img/inject-logo-light.svg";switch(theme){case"Schoolab":logoUrl="img/schoolab-logo-dark.svg",logoDarkUrl="img/schoolab-logo-dark.svg",logoLightUrl="img/schoolab-logo-light.svg";break;case"Moho":logoUrl="img/moho-logo-dark.svg",logoDarkUrl="img/moho-logo-dark.svg",logoLightUrl="img/moho-logo-light.svg";break;case"Raiselab":logoUrl="img/raiselab-logo-dark.svg",logoDarkUrl="img/raiselab-logo-dark.svg",logoLightUrl="img/raiselab-logo-light.svg";break;default:logoUrl="img/inject-logo-dark.svg",logoDarkUrl="img/inject-logo-dark.svg",logoLightUrl="img/inject-logo-light.svg"}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main",{className:["application-content p-0"].join(" "),style,...props,children:[theme&&"default"!==theme&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Theme__WEBPACK_IMPORTED_MODULE_2__.S,{themeName:theme}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["splited-container"].join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:splitedContentClass.join(" "),children:[logo&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:"navbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container-fluid p-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"m-0",href:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Logo__WEBPACK_IMPORTED_MODULE_4__.g,{alt:theme,logoThemeDefault:logoUrl,logoThemeLight:logoDarkUrl,logoThemeDark:logoLightUrl,logoStyle:{maxWidth:150,maxHeight:40}})})})}),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xl",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{width:"75%",height:"40px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{height:"20px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{width:"50%",height:"20px"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__.O,{})]})]}),preview&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"splited-cover bg-highlight",children:preview}),cover&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"splited-cover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:cover})}),video&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"splited-cover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video",{poster:cover,autoPlay:!0,playsInline:!0,muted:!0,loop:!0,style:{visibility:"inherit",opacity:"1"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{src:video,type:"video/mp4"})})})]})]})};AppSplit.__docgenInfo={description:"",methods:[],displayName:"AppSplit",props:{theme:{required:!1,tsType:{name:"union",raw:'"default" | "Inject" | "Schoolab" | "Moho" | "Raiselab"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"Inject"'},{name:"literal",value:'"Schoolab"'},{name:"literal",value:'"Moho"'},{name:"literal",value:'"Raiselab"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},logo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},positionX:{required:!1,tsType:{name:"union",raw:'"none" | "left" | "center" | "right"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},positionY:{required:!1,tsType:{name:"union",raw:'"none" | "top" | "middle" | "bottom"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"top"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},boxed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},cover:{required:!1,tsType:{name:"string"},description:""},video:{required:!1,tsType:{name:"string"},description:""},preview:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);