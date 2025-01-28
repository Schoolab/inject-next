"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[9104],{"./src/stories/components/Cards/CardEvent.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Condensed:()=>Condensed,Default:()=>Default,Ongoing:()=>Ongoing,Register:()=>Register,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Cards/Event",component:__webpack_require__("./src/app/components/cards/CardEvent.tsx").x,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{pin:{control:"boolean"},ongoing:{control:"boolean"}},args:{pin:!1,ongoing:!1,style:{width:"32rem"}}},Default={args:{start:{month:"June",day:"8",startTime:"10 AM",endTime:"11 AM"},location:"Online",title:"Event Not started",img:"img/placeholder-events-pink.png"}},Register={args:{start:{month:"June",day:"8",startTime:"10 AM",endTime:"11 AM"},location:"Online",title:"Event Not started",img:"img/placeholder-events-pink.png",actions:[{title:"To access the event",metas:[{label:"Attendees"},{iconName:"account",label:"32",addClass:"font-weight-bold"}],buttons:[{label:"Register",type:"primary",link:"#"},{label:"Learn more",type:"default",link:"#"}]}]}},Ongoing={args:{start:{month:"June",day:"8",startTime:"10 AM",endTime:"11 AM"},ongoing:!0,location:"Hybride",title:"Ongoing Event Name",img:"img/placeholder-events-pink.png"}},Condensed={args:{start:{month:"June",day:"8",startTime:"10 AM",endTime:"11 AM"},location:"InPerson",title:"Condensed Event "}},__namedExportsOrder=["Default","Register","Ongoing","Condensed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    start: {\n      month: "June",\n      day: "8",\n      startTime: "10 AM",\n      endTime: "11 AM"\n    },\n    location: "Online",\n    title: "Event Not started",\n    img: "img/placeholder-events-pink.png"\n  }\n}',...Default.parameters?.docs?.source}}},Register.parameters={...Register.parameters,docs:{...Register.parameters?.docs,source:{originalSource:'{\n  args: {\n    start: {\n      month: "June",\n      day: "8",\n      startTime: "10 AM",\n      endTime: "11 AM"\n    },\n    location: "Online",\n    title: "Event Not started",\n    img: "img/placeholder-events-pink.png",\n    actions: [{\n      title: "To access the event",\n      metas: [{\n        label: "Attendees"\n      }, {\n        iconName: "account",\n        label: "32",\n        addClass: "font-weight-bold"\n      }],\n      buttons: [{\n        label: "Register",\n        type: "primary",\n        link: "#"\n      }, {\n        label: "Learn more",\n        type: "default",\n        link: "#"\n      }]\n    }]\n  }\n}',...Register.parameters?.docs?.source}}},Ongoing.parameters={...Ongoing.parameters,docs:{...Ongoing.parameters?.docs,source:{originalSource:'{\n  args: {\n    start: {\n      month: "June",\n      day: "8",\n      startTime: "10 AM",\n      endTime: "11 AM"\n    },\n    ongoing: true,\n    location: "Hybride",\n    title: "Ongoing Event Name",\n    img: "img/placeholder-events-pink.png"\n  }\n}',...Ongoing.parameters?.docs?.source}}},Condensed.parameters={...Condensed.parameters,docs:{...Condensed.parameters?.docs,source:{originalSource:'{\n  args: {\n    start: {\n      month: "June",\n      day: "8",\n      startTime: "10 AM",\n      endTime: "11 AM"\n    },\n    location: "InPerson",\n    title: "Condensed Event "\n  }\n}',...Condensed.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,showActive=!0,hasDropdown=!1,label,link="#",target,addClass,extended,outlined,iconStartName,iconEndName,iconStartImage,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),role:"button",target,...props,children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),iconStartImage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"img",src:iconStartImage}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconStartImage:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/cards/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Card=({children,addClass,style,...props})=>{let classTab=["card"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/cards/CardInfos.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardInfos});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const CardInfos=({addClass,children})=>{let classTab=["card-infos"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};CardInfos.__docgenInfo={description:"",methods:[],displayName:"CardInfos",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}}}]);