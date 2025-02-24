"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[7346],{"./src/app/components/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accent:()=>Accent,Active:()=>Active,Assistant:()=>Assistant,Danger:()=>Danger,Default:()=>Default,Disabled:()=>Disabled,Dropdown:()=>Dropdown,Loading:()=>Loading,Muted:()=>Muted,Primary:()=>Primary,SSO:()=>SSO,Secondary:()=>Secondary,Sending:()=>Sending,Service:()=>Service,Transparent:()=>Transparent,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Buttons/Button",component:__webpack_require__("./src/app/components/Button.tsx").$,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},isActive:{control:"boolean"},isLoading:{control:"boolean"},hasDropdown:{control:"boolean"},extended:{control:"boolean"},outlined:{control:"boolean"}},args:{disabled:!1,isActive:!1,hasDropdown:!1,type:"default",size:"default",extended:!1,outlined:!1,label:"Button"}},Default={args:{iconStartName:"link",type:"default"}},Loading={args:{iconStartName:"link",type:"default",isLoading:!0,label:"Loading…"}},Sending={args:{iconStartName:"link",type:"primary",isLoading:!0,label:"Sending…"}},Active={args:{isActive:!0}},Dropdown={args:{hasDropdown:!0}},Disabled={args:{iconStartName:"link",disabled:!0}},Primary={args:{iconStartName:"link",type:"primary"}},Secondary={args:{iconStartName:"link",type:"secondary"}},Accent={args:{iconStartName:"link",type:"accent"}},Assistant={args:{iconStartName:"link",type:"assistant"}},Muted={args:{iconStartName:"link",type:"muted"}},Transparent={args:{iconStartName:"link",type:"transparent"}},Warning={args:{iconStartName:"link",type:"warning"}},Danger={args:{iconStartName:"link",type:"danger"}},Service={args:{iconStartImage:"img/platform-google.png",addClass:"btn-service"}},SSO={args:{type:"sso",iconStartName:"service-sso",addClass:"btn-service"}},__namedExportsOrder=["Default","Loading","Sending","Active","Dropdown","Disabled","Primary","Secondary","Accent","Assistant","Muted","Transparent","Warning","Danger","Service","SSO"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "default"\n  }\n}',...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "default",\n    isLoading: true,\n    label: "Loading…"\n  }\n}',...Loading.parameters?.docs?.source}}},Sending.parameters={...Sending.parameters,docs:{...Sending.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "primary",\n    isLoading: true,\n    label: "Sending…"\n  }\n}',...Sending.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  args: {\n    isActive: true\n  }\n}",...Active.parameters?.docs?.source}}},Dropdown.parameters={...Dropdown.parameters,docs:{...Dropdown.parameters?.docs,source:{originalSource:"{\n  args: {\n    hasDropdown: true\n  }\n}",...Dropdown.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "secondary"\n  }\n}',...Secondary.parameters?.docs?.source}}},Accent.parameters={...Accent.parameters,docs:{...Accent.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "accent"\n  }\n}',...Accent.parameters?.docs?.source}}},Assistant.parameters={...Assistant.parameters,docs:{...Assistant.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "assistant"\n  }\n}',...Assistant.parameters?.docs?.source}}},Muted.parameters={...Muted.parameters,docs:{...Muted.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "muted"\n  }\n}',...Muted.parameters?.docs?.source}}},Transparent.parameters={...Transparent.parameters,docs:{...Transparent.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "transparent"\n  }\n}',...Transparent.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "warning"\n  }\n}',...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartName: "link",\n    type: "danger"\n  }\n}',...Danger.parameters?.docs?.source}}},Service.parameters={...Service.parameters,docs:{...Service.parameters?.docs,source:{originalSource:'{\n  args: {\n    iconStartImage: "img/platform-google.png",\n    addClass: "btn-service"\n  }\n}',...Service.parameters?.docs?.source}}},SSO.parameters={...SSO.parameters,docs:{...SSO.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "sso",\n    iconStartName: "service-sso",\n    addClass: "btn-service"\n  }\n}',...SSO.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,isLoading=!1,showActive=!0,hasDropdown=!1,label,link="#",target,addClass,extended,outlined,iconStartName,iconEndName,iconStartImage,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),isLoading&&classTab.push("disabled"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:link,className:classTab.join(" "),role:"button",target,"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props,children:isLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"loading",addClass:"icon-spin"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),iconStartImage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"img",src:iconStartImage}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconStartImage:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "sso" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"sso"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""},dataToggle:{required:!1,tsType:{name:"string"},description:""},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,dataToggle,dataPlacement,dataOriginalTitle,dataBoundary,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":dataToggle,"data-placement":dataPlacement,"data-original-title":dataOriginalTitle,"data-boundary":dataBoundary,...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},dataToggle:{required:!1,tsType:{name:"string"},description:"Custom data attributes"},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}}}]);