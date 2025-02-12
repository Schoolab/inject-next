"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5400],{"./src/stories/components/Grids/GridObjectives.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Objectives:()=>Objectives,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GridObjectives_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ItemsGroup=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/items-group/ItemsGroup.tsx")),ItemsGroupHeader=__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx"),ItemObjective=__webpack_require__("./src/app/components/items/ItemObjective.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx");const GridObjectives=({milestones})=>{let listMilestones=null==milestones?void 0:milestones.map((milestone=>{var _milestone_objectives;return(0,jsx_runtime.jsxs)(ItemsGroup.K,{children:[(0,jsx_runtime.jsx)(ItemsGroupHeader.H,{label:milestone.label,date:milestone.date,dueDate:milestone.dueDate,locked:milestone.locked,number:milestone.number}),milestone.objectives&&(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column gap-2xs",children:null===(_milestone_objectives=milestone.objectives)||void 0===_milestone_objectives?void 0:_milestone_objectives.map((objective=>(0,jsx_runtime.jsx)(ItemObjective.z,{icon:objective.icon,emoji:objective.emoji,name:objective.name,tasks:objective.tasks,date:objective.date,dueDate:objective.dueDate,locked:objective.locked})))}),(0,jsx_runtime.jsx)(Button.$,{label:"Add objective",iconStartName:"plus-circle",size:"sm",type:"muted",addClass:"align-self-start"})]})}));return(0,jsx_runtime.jsx)("div",{className:"grid-container overflow-x-scroll overflow-y-visible w-100",children:(0,jsx_runtime.jsxs)("div",{className:"grid-cards gap-md",children:[listMilestones,(0,jsx_runtime.jsx)(Button.$,{label:"Add milestone",iconStartName:"plus-circle",size:"sm",type:"muted",addClass:"align-self-start"})]})})};GridObjectives.__docgenInfo={description:"",methods:[],displayName:"GridObjectives",props:{milestones:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label?: string; \n    number?: number; \n    date?: string;\n    dueDate?: string;\n    locked?: boolean;\n    objectives?: ObjectiveType[];\n}",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"number",value:{name:"number",required:!1}},{key:"date",value:{name:"string",required:!1}},{key:"dueDate",value:{name:"string",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"objectives",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    icon?: string;\n    emoji?: string;\n    name: string;\n    link?: string;\n    tasks?: number;\n    date?: string;\n    dueDate?: string;\n    locked?: boolean;\n}",signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"emoji",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!1}},{key:"tasks",value:{name:"number",required:!1}},{key:"date",value:{name:"string",required:!1}},{key:"dueDate",value:{name:"string",required:!1}},{key:"locked",value:{name:"boolean",required:!1}}]}}],raw:"ObjectiveType[]",required:!1}}]}}],raw:"MilestoneType[]"},description:""}}};const GridObjectives_stories={title:"Components/Grid/Objectives",component:GridObjectives,parameters:{layout:"centered"}},Objectives={args:{milestones:[{label:"Before Starting",locked:!1,number:0,objectives:[]},{label:"1. Observation",date:"Oct 12",locked:!0,number:5,objectives:[{name:"Initial observation points",tasks:5,emoji:"👀"},{name:"Company visit",tasks:2,emoji:"💼",date:"Oct 19"},{name:"Stakeholder map",tasks:1,emoji:"🗺"},{name:"Interview guide",tasks:1,emoji:"🎤"},{name:"Interview summaries",tasks:3,emoji:"💬"}]},{label:"2. Definition of needs",date:"Nov 2",locked:!0,number:7,objectives:[{name:"Personas",tasks:3,emoji:"👥"},{name:"User journeys",tasks:3,emoji:"👤"},{name:"Presentation of initial observations",tasks:1,emoji:"💬",date:"Nov 9"},{name:"Analogies*",tasks:1,emoji:"✌️"},{name:"Benchmark",tasks:1,emoji:"🕶️"},{name:"Refined issues",tasks:1,emoji:"🔍"},{name:"Presentation of Preliminary Design Review",tasks:1,emoji:"🎨",date:"Nov 30",dueDate:"Dec 7"}]},{label:"3. Conception",date:"Dec 14",locked:!0,number:4,objectives:[{name:"Idea Cards",tasks:3,emoji:"📋"},{name:"Value Proposition",tasks:3,emoji:"💎"},{name:"Use Case Scenario",tasks:3,emoji:"🎞️"},{name:"MOSCOW Matrix",tasks:3,emoji:"🇷🇺"}]},{label:"4. Prototyping",date:"Dec 14",locked:!0,number:5,objectives:[{name:"Solution Choice",tasks:12,emoji:"✅"},{name:"Lean Canvas",tasks:1,emoji:"📑"},{name:"First Prototype",tasks:2,emoji:"🚧"},{name:"Presentation of Initial Tests",tasks:1,emoji:"🎤",date:"Dec 16"},{name:"Final Prototype",tasks:1,emoji:"🎨",date:"Dec 16"}]},{label:"5. Launch",date:"Dec 16",locked:!0,number:7,objectives:[{name:"Business model canvas*",tasks:1,emoji:"📑"},{name:"Presentation canvas",tasks:1,emoji:"🎤"},{name:"Launch roadmap",tasks:1,emoji:"🗺️"},{name:"Communication strategy",tasks:1,emoji:"👋"},{name:"Corporate presentation",tasks:3,emoji:"💼",date:"Dec 21"},{name:"Demo Day",tasks:3,emoji:"🎤",date:"Dec 28"},{name:"Virtual Fair 2025",tasks:6,emoji:"💻"}]},{label:"AfterWords",date:"Dec 24",locked:!0,number:0,objectives:[]}]}},__namedExportsOrder=["Objectives"];Objectives.parameters={...Objectives.parameters,docs:{...Objectives.parameters?.docs,source:{originalSource:'{\n  args: {\n    milestones: [{\n      label: "Before Starting",\n      locked: false,\n      number: 0,\n      objectives: []\n    }, {\n      label: "1. Observation",\n      date: "Oct 12",\n      locked: true,\n      number: 5,\n      objectives: [{\n        name: "Initial observation points",\n        tasks: 5,\n        emoji: "👀"\n      }, {\n        name: "Company visit",\n        tasks: 2,\n        emoji: "💼",\n        date: "Oct 19"\n      }, {\n        name: "Stakeholder map",\n        tasks: 1,\n        emoji: "🗺"\n      }, {\n        name: "Interview guide",\n        tasks: 1,\n        emoji: "🎤"\n      }, {\n        name: "Interview summaries",\n        tasks: 3,\n        emoji: "💬"\n      }]\n    }, {\n      label: "2. Definition of needs",\n      date: "Nov 2",\n      locked: true,\n      number: 7,\n      objectives: [{\n        name: "Personas",\n        tasks: 3,\n        emoji: "👥"\n      }, {\n        name: "User journeys",\n        tasks: 3,\n        emoji: "👤"\n      }, {\n        name: "Presentation of initial observations",\n        tasks: 1,\n        emoji: "💬",\n        date: "Nov 9"\n      }, {\n        name: "Analogies*",\n        tasks: 1,\n        emoji: "✌️"\n      }, {\n        name: "Benchmark",\n        tasks: 1,\n        emoji: "🕶️"\n      }, {\n        name: "Refined issues",\n        tasks: 1,\n        emoji: "🔍"\n      }, {\n        name: "Presentation of Preliminary Design Review",\n        tasks: 1,\n        emoji: "🎨",\n        date: "Nov 30",\n        dueDate: "Dec 7"\n      }]\n    }, {\n      label: "3. Conception",\n      date: "Dec 14",\n      locked: true,\n      number: 4,\n      objectives: [{\n        name: "Idea Cards",\n        tasks: 3,\n        emoji: "📋"\n      }, {\n        name: "Value Proposition",\n        tasks: 3,\n        emoji: "💎"\n      }, {\n        name: "Use Case Scenario",\n        tasks: 3,\n        emoji: "🎞️"\n      }, {\n        name: "MOSCOW Matrix",\n        tasks: 3,\n        emoji: "🇷🇺"\n      }]\n    }, {\n      label: "4. Prototyping",\n      date: "Dec 14",\n      locked: true,\n      number: 5,\n      objectives: [{\n        name: "Solution Choice",\n        tasks: 12,\n        emoji: "✅"\n      }, {\n        name: "Lean Canvas",\n        tasks: 1,\n        emoji: "📑"\n      }, {\n        name: "First Prototype",\n        tasks: 2,\n        emoji: "🚧"\n      }, {\n        name: "Presentation of Initial Tests",\n        tasks: 1,\n        emoji: "🎤",\n        date: "Dec 16"\n      }, {\n        name: "Final Prototype",\n        tasks: 1,\n        emoji: "🎨",\n        date: "Dec 16"\n      }]\n    }, {\n      label: "5. Launch",\n      date: "Dec 16",\n      locked: true,\n      number: 7,\n      objectives: [{\n        name: "Business model canvas*",\n        tasks: 1,\n        emoji: "📑"\n      }, {\n        name: "Presentation canvas",\n        tasks: 1,\n        emoji: "🎤"\n      }, {\n        name: "Launch roadmap",\n        tasks: 1,\n        emoji: "🗺️"\n      }, {\n        name: "Communication strategy",\n        tasks: 1,\n        emoji: "👋"\n      }, {\n        name: "Corporate presentation",\n        tasks: 3,\n        emoji: "💼",\n        date: "Dec 21"\n      }, {\n        name: "Demo Day",\n        tasks: 3,\n        emoji: "🎤",\n        date: "Dec 28"\n      }, {\n        name: "Virtual Fair 2025",\n        tasks: 6,\n        emoji: "💻"\n      }]\n    }, {\n      label: "AfterWords",\n      date: "Dec 24",\n      locked: true,\n      number: 0,\n      objectives: []\n    }]\n  }\n}',...Objectives.parameters?.docs?.source}}}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Tag=({isPill=!0,iconName,status="default",label,link,addClass,style,children,...props})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),children]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},isPill:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./src/app/components/items-group/ItemsGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemsGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/content/Placeholder.tsx"),_app_components_items_group_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/items-group/ItemsGroupHeader.tsx");const ItemsGroup=({children,addClass,style,...props})=>{let classTab=["item-group"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_items_group_ItemsGroupHeader__WEBPACK_IMPORTED_MODULE_2__.H,{label:"Items Group",number:3}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_content_Placeholder__WEBPACK_IMPORTED_MODULE_1__.O,{style:{border:"var(--stroke-thin) solid var(--border-default)",borderRadius:"var(--radius-minimal)"}})]})]})})};ItemsGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/items-group/ItemsGroupHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ItemsGroupHeader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx"),_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/badges/tags/Tag.tsx"),_app_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx"),_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownHeader.tsx"),_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx");const ItemsGroupHeader=({label,number,date,dueDate,locked,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["item-group-header"].join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4",{className:"nav-title flex-fill mb-none",children:label}),date&&!dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"open",iconName:locked?"status-bordered":"status-filled",label:date}),date&&dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_2__.v,{status:locked?"draft":"progress",iconName:locked?"status-bordered":"status-dashed",label:date+" -> "+dueDate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_1__.X,{label:number,status:"highlight"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__.m,{addClass:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",addClass:"btn-icon",iconStartName:"options",dataToggle:"dropdown","aria-expanded":"false","data-boundary":"window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_components_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownHeader__WEBPACK_IMPORTED_MODULE_6__.h,{label:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to top",iconName:"arrow-top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move up",iconName:"arrow-up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Move down",iconName:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Send to bottom",iconName:"arrow-bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_5__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Delete",type:"danger",iconName:"delete"})]})]})]});ItemsGroupHeader.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"ItemsGroupHeader",props:{label:{required:!1,tsType:{name:"string"},description:""},number:{required:!1,tsType:{name:"number"},description:""},date:{required:!1,tsType:{name:"string"},description:""},dueDate:{required:!1,tsType:{name:"string"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/app/components/items/ItemObjective.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ItemObjective});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/badges/tags/Tag.tsx");const ItemObjective=({icon="objective",emoji,name,link="#",tasks=0,date,dueDate,locked=!0,children,addClass,style,...props})=>{let classTab=["item is-small is-bordered gap-0px"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row gap-xs pb-8px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex p-3xs text-muted",children:[emoji&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"emoji is-20px",children:emoji}),!emoji&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"2sm"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-content d-flex flex-column align-items-start justify-content-center overflow-hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:link,className:"item-title stretched-link line-clamp-1",children:name}),tasks>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted",children:1===tasks?"1 task":tasks+" tasks"})]}),date&&!dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_3__.v,{status:locked?"draft":"open",iconName:locked?"status-bordered":"status-filled",label:date}),date&&dueDate&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_badges_tags_Tag__WEBPACK_IMPORTED_MODULE_3__.v,{status:locked?"draft":"progress",iconName:locked?"status-bordered":"status-dashed",label:date+" -> "+dueDate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex align-items-center gap-xs dropdown",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-muted btn-icon z-1","data-toggle":"dropdown","aria-expanded":"false","data-boundary":"window",href:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options","data-toggle":"tooltip","data-placement":"bottom","data-original-title":"Drag to move. Click for options.","data-boundary":"window"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6",{className:"dropdown-header",children:"Position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Send to top"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Move up"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Move down"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Send to bottom"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6",{className:"dropdown-header",children:"Actions"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item","data-toggle":"collapse","data-target":"#question1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Edit"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"dropdown-item is-danger",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"dropdown-item--label",children:"Delete"})})]})]})})]})})};ItemObjective.__docgenInfo={description:"",methods:[],displayName:"ItemObjective",props:{icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"objective"',computed:!1}},emoji:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},tasks:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},dueDate:{required:!1,tsType:{name:"string"},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/content/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Placeholder=({width="100%",height="40px",addClass,style})=>{let classTab=["placeholder-container"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{width,height,...style},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"placeholder"})})};Placeholder.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"40px"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);