"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5643],{"./src/stories/components/Grids/GridCourse.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Course:()=>Course,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GridCourse_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ItemsGroup=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/items-group/ItemsGroup.tsx")),ItemsGroupHeader=__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx"),ItemCapsule=__webpack_require__("./src/app/components/items/ItemCapsule.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx");const GridCourse=({modules})=>{let listModules=null==modules?void 0:modules.map((module=>{var _module_capsules;return(0,jsx_runtime.jsxs)(ItemsGroup.K,{children:[(0,jsx_runtime.jsx)(ItemsGroupHeader.H,{label:module.label,date:module.date,dueDate:module.dueDate,locked:module.locked,number:module.number}),module.capsules&&(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column gap-2xs",children:null===(_module_capsules=module.capsules)||void 0===_module_capsules?void 0:_module_capsules.map((capsule=>(0,jsx_runtime.jsx)(ItemCapsule.R,{icon:capsule.icon,emoji:capsule.emoji,name:capsule.name,questions:capsule.questions,date:capsule.date,dueDate:capsule.dueDate,locked:capsule.locked})))}),(0,jsx_runtime.jsx)(Button.$,{label:"Add capsule",iconStartName:"plus-circle",size:"sm",type:"muted",addClass:"align-self-start"})]})}));return(0,jsx_runtime.jsx)("div",{className:"grid-container overflow-x-scroll overflow-y-visible w-100",children:(0,jsx_runtime.jsxs)("div",{className:"grid-cards gap-md",children:[listModules,(0,jsx_runtime.jsx)(Button.$,{label:"Add module",iconStartName:"plus-circle",size:"sm",type:"muted",addClass:"align-self-start"})]})})};GridCourse.__docgenInfo={description:"",methods:[],displayName:"GridCourse",props:{modules:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label?: string; \n    number?: number; \n    date?: string;\n    dueDate?: string;\n    locked?: boolean;\n    capsules?: CapsuleType[];\n}",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"number",value:{name:"number",required:!1}},{key:"date",value:{name:"string",required:!1}},{key:"dueDate",value:{name:"string",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"capsules",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    icon?: string;\n    emoji?: string;\n    name: string;\n    link?: string;\n    questions?: number;\n    date?: string;\n    dueDate?: string;\n    locked?: boolean;\n}",signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"emoji",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!1}},{key:"questions",value:{name:"number",required:!1}},{key:"date",value:{name:"string",required:!1}},{key:"dueDate",value:{name:"string",required:!1}},{key:"locked",value:{name:"boolean",required:!1}}]}}],raw:"CapsuleType[]",required:!1}}]}}],raw:"ModuleType[]"},description:""}}};const GridCourse_stories={title:"Components/Grid/Course",component:GridCourse,parameters:{layout:"centered"}},Course={args:{modules:[{label:"Before Starting",date:"Oct 1",locked:!1,number:1,capsules:[{name:"Introduction to Design Thinking",emoji:"👋"}]},{label:"1. The stakes of observation",date:"Oct 1",locked:!1,number:2,capsules:[{name:"The importance of the observation phase",emoji:"👀"},{name:"Identify stakeholders",questions:5,emoji:"🤝"}]},{label:"2. Frame the issue",date:"Oct 17",locked:!0,number:4,capsules:[{name:"Analyze the issue",emoji:"🔍"},{name:"Key terms",emoji:"💬"},{name:"Planetary limits",emoji:"🌍"},{name:"Reframe the issue",questions:3,emoji:"🤔"}]},{label:"3. Launch your observation strategy",date:"Oct 24",locked:!0,number:8,capsules:[{name:"The observation roadmap",questions:1,emoji:"🚧"},{name:"Observation - research",emoji:"🔎"},{name:"Observation - the field",emoji:"🥊"},{name:"Identify environmental issues",emoji:"🌱"},{name:"Identifying the stakeholders to interview",questions:2,emoji:"🎤",date:"Oct 26",locked:!0},{name:"Writing an interview guide",questions:1,emoji:"✍️",date:"Oct 26",locked:!0},{name:"The semi-structured interview",emoji:"📆",date:"Oct 26",locked:!0},{name:"Synthesize your interviews",questions:8,emoji:"💬",date:"Oct 28",locked:!0}]},{label:"AfterWords",date:"Oct 24",locked:!0,number:1,capsules:[{name:"Thank you!",questions:3}]}]}},__namedExportsOrder=["Course"];Course.parameters={...Course.parameters,docs:{...Course.parameters?.docs,source:{originalSource:'{\n  args: {\n    modules: [{\n      label: "Before Starting",\n      date: "Oct 1",\n      locked: false,\n      number: 1,\n      capsules: [{\n        name: "Introduction to Design Thinking",\n        emoji: "👋"\n      }]\n    }, {\n      label: "1. The stakes of observation",\n      date: "Oct 1",\n      locked: false,\n      number: 2,\n      capsules: [{\n        name: "The importance of the observation phase",\n        emoji: "👀"\n      }, {\n        name: "Identify stakeholders",\n        questions: 5,\n        emoji: "🤝"\n      }]\n    }, {\n      label: "2. Frame the issue",\n      date: "Oct 17",\n      locked: true,\n      number: 4,\n      capsules: [{\n        name: "Analyze the issue",\n        emoji: "🔍"\n      }, {\n        name: "Key terms",\n        emoji: "💬"\n      }, {\n        name: "Planetary limits",\n        emoji: "🌍"\n      }, {\n        name: "Reframe the issue",\n        questions: 3,\n        emoji: "🤔"\n      }]\n    }, {\n      label: "3. Launch your observation strategy",\n      date: "Oct 24",\n      locked: true,\n      number: 8,\n      capsules: [{\n        name: "The observation roadmap",\n        questions: 1,\n        emoji: "🚧"\n      }, {\n        name: "Observation - research",\n        emoji: "🔎"\n      }, {\n        name: "Observation - the field",\n        emoji: "🥊"\n      }, {\n        name: "Identify environmental issues",\n        emoji: "🌱"\n      }, {\n        name: "Identifying the stakeholders to interview",\n        questions: 2,\n        emoji: "🎤",\n        date: "Oct 26",\n        locked: true\n      }, {\n        name: "Writing an interview guide",\n        questions: 1,\n        emoji: "✍️",\n        date: "Oct 26",\n        locked: true\n      }, {\n        name: "The semi-structured interview",\n        emoji: "📆",\n        date: "Oct 26",\n        locked: true\n      }, {\n        name: "Synthesize your interviews",\n        questions: 8,\n        emoji: "💬",\n        date: "Oct 28",\n        locked: true\n      }]\n    }, {\n      label: "AfterWords",\n      date: "Oct 24",\n      locked: true,\n      number: 1,\n      capsules: [{\n        name: "Thank you!",\n        questions: 3\n      }]\n    }]\n  }\n}',...Course.parameters?.docs?.source}}}},"./src/app/components/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Placeholder=({width="100%",height="40px",addClass,style})=>{let classTab=["placeholder-container"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{width,height,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder"})})};Placeholder.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"40px"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Tag=({isPill=!0,iconName,status="default",label,link,addClass,style,children,...props})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},isPill:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./src/app/components/items-group/ItemsGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemsGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Placeholder.tsx"),_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx");const ItemsGroup=({children,addClass,style,...props})=>{let classTab=["item-group"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__.H,{label:"Items Group",number:3}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}})]})]})})};ItemsGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/items-group/ItemsGroupHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ItemsGroupHeader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx"),_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/badges/tags/Tag.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx"),_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownHeader.tsx"),_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx");const ItemsGroupHeader=({label,number,date,dueDate,locked,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["item-group-header"].join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4",{className:"nav-title flex-fill mb-none",children:label}),date&&!dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"open",iconName:locked?"status-bordered":"status-filled",label:date}),date&&dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"progress",iconName:locked?"status-bordered":"status-dashed",label:date+" -> "+dueDate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__.X,{label:number,status:"highlight"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__.m,{addClass:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",addClass:"btn-icon",iconStartName:"options",dataToggle:"dropdown","aria-expanded":"false","data-boundary":"window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__.h,{label:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to top",iconName:"arrow-top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move up",iconName:"arrow-up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move down",iconName:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to bottom",iconName:"arrow-bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Delete",type:"danger",iconName:"delete"})]})]})]});ItemsGroupHeader.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroupHeader",props:{label:{required:!1,tsType:{name:"string"},description:""},number:{required:!1,tsType:{name:"number"},description:""},date:{required:!1,tsType:{name:"string"},description:""},dueDate:{required:!1,tsType:{name:"string"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/app/components/items/ItemCapsule.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>ItemCapsule});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/badges/tags/Tag.tsx");const ItemCapsule=({icon="learning",emoji,name,link="#",questions=0,date,dueDate,locked=!0,children,addClass,style,...props})=>{let classTab=["item is-small is-bordered gap-0px"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row gap-xs pb-8px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex p-3xs text-muted",children:[emoji&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"emoji is-20px",children:emoji}),!emoji&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"2sm"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-content d-flex flex-column align-items-start justify-content-center overflow-hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:link,className:"item-title stretched-link line-clamp-1",children:name}),questions>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:1===questions?"1 question":questions+" questions"})]}),date&&!dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_3__.v,{status:locked?"draft":"open",iconName:locked?"status-bordered":"status-filled",label:date}),date&&dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_3__.v,{status:locked?"draft":"progress",iconName:locked?"status-bordered":"status-dashed",label:date+" -> "+dueDate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex align-items-center gap-xs dropdown",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-muted btn-icon z-1","data-toggle":"dropdown","aria-expanded":"false","data-boundary":"window",href:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options","data-toggle":"tooltip","data-placement":"bottom","data-original-title":"Drag to move. Click for options.","data-boundary":"window"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6",{className:"dropdown-header",children:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Send to top"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Move up"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Move down"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Send to bottom"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6",{className:"dropdown-header",children:"Actions"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item","data-toggle":"collapse","data-target":"#question1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Edit"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item is-danger",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Delete"})})]})]})})]})})};ItemCapsule.__docgenInfo={description:"",methods:[],displayName:"ItemCapsule",props:{icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"learning"',computed:!1}},emoji:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},questions:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},dueDate:{required:!1,tsType:{name:"string"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);