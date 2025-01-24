"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2468],{"./src/stories/components/Items/ItemSetupTask.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Done:()=>Done,Ongoing:()=>Ongoing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Items/Setup Task",component:__webpack_require__("./src/app/components/items/ItemSetupTask.tsx").w,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{},args:{title:"Complete the basic info",caption:"Review the name, the description, dates and cover of the program",tasks:3,style:{width:"32rem"}}},Default={args:{}},Ongoing={args:{progress:1}},Done={args:{progress:3}},__namedExportsOrder=["Default","Ongoing","Done"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Ongoing.parameters={...Ongoing.parameters,docs:{...Ongoing.parameters?.docs,source:{originalSource:"{\n  args: {\n    progress: 1\n  }\n}",...Ongoing.parameters?.docs?.source}}},Done.parameters={...Done.parameters,docs:{...Done.parameters?.docs,source:{originalSource:"{\n  args: {\n    progress: 3\n  }\n}",...Done.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,showActive=!0,hasDropdown=!1,label,link="#",target,addClass,extended,outlined,iconStartName,iconEndName,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),role:"button",target,...props,children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/Progress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Progress});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Progress=({percentage=0,text="0/8",subtext="completed",size="sm",addClass,style,...props})=>{let classTab=["progress-circle-container flex-shrink-0"];return size&&classTab.push(`is-${size}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{className:classTab.join(" "),...props,viewBox:"0 0 32 32","data-percent":percentage,style:{"--percent":percentage,...style},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{className:"progress-circle progress-circle-bg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{className:"progress-circle progress-circle-percent"}),100===percentage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{className:"progress-circle-icon is-checked",d:"M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z"}),text&&"lg"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:20,children:text}),text&&"xl"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:15,children:text}),text&&"2xl"===size&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-text",x:16,y:16,children:text}),subtext&&("xl"===size||"2xl"===size)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:"progress-circle-subtext",x:16,y:20,children:subtext})})]})};Progress.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{percentage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"0/8"',computed:!1}},subtext:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"completed"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the progress icon be?",defaultValue:{value:'"sm"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./src/app/components/items/ItemSetupTask.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>ItemSetupTask});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_Progress__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Progress.tsx"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Button.tsx");const ItemSetupTask=({title="Task title",link="#",caption="Task description",icon="information",progress=0,tasks=0,addClass,style,...props})=>{let classTab=["item is-linked is-bordered"];return addClass&&classTab.push(addClass),progress/tasks*100==100&&classTab.push("is-completed"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,addClass:"item-icon is-darker"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:link,className:"item-title stretched-link",children:title}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:caption})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item-options",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.$,{addClass:"z-2",type:"transparent","data-toggle":"tooltip","data-original-title":"Mark as uncompleted",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_3__.k,{percentage:progress/tasks*100,size:"sm"})})})]})})};ItemSetupTask.__docgenInfo={description:"",methods:[],displayName:"ItemSetupTask",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Task title"',computed:!1}},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Task description"',computed:!1}},icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"information"',computed:!1}},progress:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},tasks:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);