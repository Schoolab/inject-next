"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[8387],{"./src/stories/pages/sections/SectionContent.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MediaRight:()=>MediaRight,WithButtons:()=>WithButtons,WithColumns:()=>WithColumns,WithColumnsAndButtons:()=>WithColumnsAndButtons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Pages/Sections/Content",component:__webpack_require__("./src/app/pages/sections/SectionContent.tsx").R,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{},args:{mediaSide:"left"}},Default={args:{mediaSide:"left"}},MediaRight={args:{mediaSide:"right"}},WithColumns={args:{mediaSide:"left",columns:[{label:"20 years",caption:"of experience in design thinking and lean startup"},{label:"700+",caption:"accelerated startups"},{label:"30,000+",caption:"people who have used our digital platform"},{label:"250+",caption:"corporate innovation projects initiated and accelerated"}]}},WithButtons={args:{mediaSide:"left",buttons:[{type:"primary",label:"Join today"},{type:"default",label:"Learn more"}]}},WithColumnsAndButtons={args:{mediaSide:"left",columns:[{label:"20 years",caption:"of experience in design thinking and lean startup"},{label:"700+",caption:"accelerated startups"}],buttons:[{type:"primary",label:"Join today"},{type:"default",label:"Learn more"}]}},__namedExportsOrder=["Default","MediaRight","WithColumns","WithButtons","WithColumnsAndButtons"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    mediaSide: "left"\n  }\n}',...Default.parameters?.docs?.source}}},MediaRight.parameters={...MediaRight.parameters,docs:{...MediaRight.parameters?.docs,source:{originalSource:'{\n  args: {\n    mediaSide: "right"\n  }\n}',...MediaRight.parameters?.docs?.source}}},WithColumns.parameters={...WithColumns.parameters,docs:{...WithColumns.parameters?.docs,source:{originalSource:'{\n  args: {\n    mediaSide: "left",\n    columns: [{\n      label: "20 years",\n      caption: "of experience in design thinking and lean startup"\n    }, {\n      label: "700+",\n      caption: "accelerated startups"\n    }, {\n      label: "30,000+",\n      caption: "people who have used our digital platform"\n    }, {\n      label: "250+",\n      caption: "corporate innovation projects initiated and accelerated"\n    }]\n  }\n}',...WithColumns.parameters?.docs?.source}}},WithButtons.parameters={...WithButtons.parameters,docs:{...WithButtons.parameters?.docs,source:{originalSource:'{\n  args: {\n    mediaSide: "left",\n    buttons: [{\n      type: "primary",\n      label: "Join today"\n    }, {\n      type: "default",\n      label: "Learn more"\n    }]\n  }\n}',...WithButtons.parameters?.docs?.source}}},WithColumnsAndButtons.parameters={...WithColumnsAndButtons.parameters,docs:{...WithColumnsAndButtons.parameters?.docs,source:{originalSource:'{\n  args: {\n    mediaSide: "left",\n    columns: [{\n      label: "20 years",\n      caption: "of experience in design thinking and lean startup"\n    }, {\n      label: "700+",\n      caption: "accelerated startups"\n    }],\n    buttons: [{\n      type: "primary",\n      label: "Join today"\n    }, {\n      type: "default",\n      label: "Learn more"\n    }]\n  }\n}',...WithColumnsAndButtons.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,showActive=!0,hasDropdown=!1,label,link="#",addClass,extended,outlined,iconStartName,iconEndName,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),role:"button",...props,children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/pages/sections/SectionContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>SectionContent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dompurify__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.es.mjs")),_app_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx");const SectionContent=({title="Section title",subtitle="Use this line to summarize this section. View it as a TL:DR;",content="\n            <p>Write a really short description to briefly explain what are the objectives</p>\n            <p>You can add multiple <code>&lt;div&gt;</code> paragraphs inside this <code>&lt;div&gt;</code> for more complexe situations. You can add <strong>bold</strong> texts, <em>italic</em> texts and more.</p>\n        ",columns,buttons,mediaSide="left",mediaUrl="https://www.theschoolab.com/wp-content/uploads/2022/03/Entreprise-de%CC%81velopper-vos-talents-apprendre-par-des-projets-416X600.jpg",addClass,style,...props})=>{let classSection=["landing-section"];addClass&&classSection.push(addClass);let classMedia=["cq-12 cq-md-5 cq-lg-4"];"left"===mediaSide&&classMedia.push("cq-offset-lg-1 cq-order-sm-0"),"right"===mediaSide&&classMedia.push("cq-offset-md-1 cq-order-sm-12");let classContent=["cq-12 cq-md-6 cq-lg-5 d-flex flex-column gap-2xl justify-content-center"];"left"===mediaSide&&classContent.push("cq-offset-md-1"),"right"===mediaSide&&classContent.push("cq-offset-lg-1");let sanitizedContent=dompurify__WEBPACK_IMPORTED_MODULE_2__.A.sanitize(content),listColumns=null==columns?void 0:columns.map((column=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"cq-xs-6 cq-md-3 d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"display-2",children:column.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"small text-muted",children:column.caption})]}))),listButtons=null==buttons?void 0:buttons.map((button=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:button.type,label:button.label,link:button.link})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:classSection.join(" "),style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container-xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"cq row-gap-md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classMedia.join(" "),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("picture",{className:"media vertical-stretch",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:mediaUrl,alt:"Illustration of "+title})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classContent.join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"display-2",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"lead",children:subtitle})]}),sanitizedContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex flex-column gap-sm",dangerouslySetInnerHTML:{__html:sanitizedContent}}),columns&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"cq row-gap-md",children:listColumns}),buttons&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex gap-sm",children:listButtons})]})]})})})};SectionContent.__docgenInfo={description:"",methods:[],displayName:"SectionContent",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},mediaSide:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"On which side is the media",defaultValue:{value:'"left"',computed:!1}},mediaUrl:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"https://www.theschoolab.com/wp-content/uploads/2022/03/Entreprise-de%CC%81velopper-vos-talents-apprendre-par-des-projets-416X600.jpg"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Section title"',computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Use this line to summarize this section. View it as a TL:DR;"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:""},columns:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label?: string;\n    caption?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"caption",value:{name:"string",required:!1}}]}}],raw:"ColumnType[]"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    type?: "primary" | "default";\n    label?: string;\n    link?: string;\n}',signature:{properties:[{key:"type",value:{name:"union",raw:'"primary" | "default"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}],required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}}]}}],raw:"ButtonType[]"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);