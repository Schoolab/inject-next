"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[527],{"./src/stories/components/Cards/CardMeeting.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Flagged:()=>Flagged,Notes:()=>Notes,Pending:()=>Pending,Project:()=>Project,Today:()=>Today,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardMeeting_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Card=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/cards/Card.tsx")),CardInfos=__webpack_require__("./src/app/components/cards/CardInfos.tsx"),Icon=__webpack_require__("./src/app/components/Icon.tsx"),Tag=__webpack_require__("./src/app/components/badges/tags/Tag.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx"),CardActions=__webpack_require__("./src/app/components/cards/CardActions.tsx"),Avatar=__webpack_require__("./src/app/components/avatars/Avatar.tsx"),DropdownMenu=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),DropdownItem=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),Dropdown=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),DropdownDivider=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx");const CardMeeting=({avatar,mainAvatar="expert",showRelation,name="Expert",project="Project",today,date,time,metas,link="#",status="accepted",links,actions,children,addClass,style,...props})=>{let classTab=[""];addClass&&classTab.push(addClass);let listMetas=null==metas?void 0:metas.map((meta=>(0,jsx_runtime.jsxs)("li",{children:[meta.iconName&&(0,jsx_runtime.jsx)(Icon.I,{name:meta.iconName,size:"xs"}),(0,jsx_runtime.jsx)("span",{children:meta.label})]},meta.label))),listLinks=null==links?void 0:links.map((link=>(0,jsx_runtime.jsxs)("div",{className:"card-target",children:[(0,jsx_runtime.jsxs)("a",{href:link.link,className:"stretched-link d-flex align-items-center",children:[link.iconLetter&&(0,jsx_runtime.jsx)("span",{className:"icon icon--letter is-sm",children:(0,jsx_runtime.jsx)("span",{children:link.iconLetter})}),link.iconName&&(0,jsx_runtime.jsx)(Icon.I,{name:link.iconName,size:"sm"}),(0,jsx_runtime.jsx)("span",{children:link.label})]}),(0,jsx_runtime.jsx)(Icon.I,{name:"chevron-right",size:"sm"})]}))),listActions=null==actions?void 0:actions.map((action=>(0,jsx_runtime.jsx)(CardActions.w,{title:action.title,metas:action.metas,progress:action.progress,tasksNb:action.tasksNb,buttons:action.buttons})));return(0,jsx_runtime.jsxs)(Card.Z,{addClass:classTab.join(" "),style,...props,children:[(0,jsx_runtime.jsxs)(CardInfos.Y,{addClass:`is-linked d-flex align-items-start gap-sm ${"pending"===status&&"is-pending"}`,children:["expert"===mainAvatar?(0,jsx_runtime.jsxs)("div",{className:"thumbnail-relation m-auto",children:[(0,jsx_runtime.jsx)(Avatar.e,{size:"lg",image:avatar,iconName:"account"}),showRelation&&(0,jsx_runtime.jsx)("div",{className:"icon icon--letter is-sm is-top",children:(0,jsx_runtime.jsx)("span",{children:project.charAt(0)})})]}):(0,jsx_runtime.jsxs)("div",{className:"thumbnail-relation m-auto",children:[(0,jsx_runtime.jsx)("div",{className:"icon icon--letter is-lg",children:(0,jsx_runtime.jsx)("span",{children:project.charAt(0)})}),showRelation&&(0,jsx_runtime.jsx)(Avatar.e,{size:"sm",image:avatar,iconName:"account",addClass:"is-top"})]}),(0,jsx_runtime.jsxs)("div",{className:"card-title flex-grow-1",children:["expert"===mainAvatar?(0,jsx_runtime.jsxs)("a",{href:"#",className:"h4 mb-none stretched-link line-clamp-1 gap-2xs d-flex flex-direction align-items-center gap-2xs",children:[(0,jsx_runtime.jsx)("span",{children:name})," / ",(0,jsx_runtime.jsx)("span",{children:project})]}):(0,jsx_runtime.jsxs)("a",{href:"#",className:"h4 mb-none stretched-link line-clamp-1 gap-2xs d-flex flex-direction align-items-center gap-2xs",children:[(0,jsx_runtime.jsx)("span",{children:project})," / ",(0,jsx_runtime.jsx)("span",{children:name})]}),(0,jsx_runtime.jsxs)("ul",{className:"text-muted small metas is-list mb-none",children:[(0,jsx_runtime.jsxs)("li",{className:today?"text-danger":"",children:[today&&(0,jsx_runtime.jsx)(Icon.I,{name:"notifications",size:"xs"}),(0,jsx_runtime.jsx)("span",{children:today?"Today":date})]}),(0,jsx_runtime.jsx)("li",{children:time})]}),metas&&(0,jsx_runtime.jsx)("ul",{className:"text-muted small metas is-list mb-none mt-2xs",children:listMetas})]}),"pending"===status&&(0,jsx_runtime.jsxs)("div",{className:"d-flex align-items-center gap-xs py-2xs z-2",children:[(0,jsx_runtime.jsx)(Tag.v,{status:"progress",iconName:"status-dashed",label:"Pending"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex",children:[(0,jsx_runtime.jsx)(Button.$,{iconStartName:"check",size:"sm",type:"default",addClass:"text-success","data-toggle":"tooltip","data-placement":"top","data-original-title":"Accept invitation","data-boundary":"window"}),(0,jsx_runtime.jsx)(Button.$,{iconStartName:"cancel",size:"sm",type:"transparent",addClass:"text-muted","data-toggle":"tooltip","data-placement":"top","data-original-title":"Decline invitation","data-boundary":"window"})]})]}),"success"===status&&(0,jsx_runtime.jsx)("div",{className:"d-flex align-items-center gap-xs py-xs z-2",children:(0,jsx_runtime.jsxs)(Dropdown.m,{addClass:"z-2",children:[(0,jsx_runtime.jsx)(Tag.v,{status:"open",iconName:"flag",label:"Success",addClass:"dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,jsx_runtime.jsxs)(DropdownMenu.r,{direction:"right",children:[(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Success",iconName:"flag",addClass:"text-success"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Warning",iconName:"flag",addClass:"text-warning"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Failed",iconName:"flag",addClass:"text-danger"})]})]})}),"pending"!==status&&(0,jsx_runtime.jsxs)(Dropdown.m,{addClass:"z-2",children:[(0,jsx_runtime.jsx)(Button.$,{type:"muted",iconStartName:"options","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,jsx_runtime.jsxs)(DropdownMenu.r,{direction:"right",children:[(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Open profile",outbound:!0}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Open project",outbound:!0}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Add notes",caption:"Access to meeting notes",iconName:"plus-circle"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Mark as successful",iconName:"check-circle"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Edit",iconName:"pencil"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"danger",label:"Delete",iconName:"delete"})]})]})]}),links&&(0,jsx_runtime.jsx)("div",{className:"card-targets",children:listLinks}),actions&&listActions,children]})};CardMeeting.__docgenInfo={description:"",methods:[],displayName:"CardMeeting",props:{avatar:{required:!1,tsType:{name:"string"},description:""},mainAvatar:{required:!1,tsType:{name:"union",raw:'"expert" | "project"',elements:[{name:"literal",value:'"expert"'},{name:"literal",value:'"project"'}]},description:"",defaultValue:{value:'"expert"',computed:!1}},showRelation:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Expert"',computed:!1}},project:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Project"',computed:!1}},today:{required:!1,tsType:{name:"boolean"},description:""},date:{required:!0,tsType:{name:"string"},description:""},time:{required:!0,tsType:{name:"string"},description:""},metas:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    iconName?: string;\n    addClass?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"iconName",value:{name:"string",required:!1}},{key:"addClass",value:{name:"string",required:!1}}]}}],raw:"MetaType[]"},description:""},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"pending" | "accepted" | "success"',elements:[{name:"literal",value:'"pending"'},{name:"literal",value:'"accepted"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"accepted"',computed:!1}},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    iconLetter?: string;\n    iconName?: string;\n    link?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"iconLetter",value:{name:"string",required:!1}},{key:"iconName",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}}]}}],raw:"LinkType[]"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    title?: string;\n    metas?: MetaType[];\n    tasksNb?: number;\n    tasksLabel?: string;\n    tasksLabelPlural?: string;\n    progress?: number;\n    buttons?: ButtonType[];\n}",signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"metas",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    iconName?: string;\n    addClass?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"iconName",value:{name:"string",required:!1}},{key:"addClass",value:{name:"string",required:!1}}]}}],raw:"MetaType[]",required:!1}},{key:"tasksNb",value:{name:"number",required:!1}},{key:"tasksLabel",value:{name:"string",required:!1}},{key:"tasksLabelPlural",value:{name:"string",required:!1}},{key:"progress",value:{name:"number",required:!1}},{key:"buttons",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    addClass?: string;\n    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;\n    label?: string | number; \n    iconStartName?: string;\n    iconEndName?: string;\n    link?: string;\n    hasDropdown?: Boolean;\n}',signature:{properties:[{key:"addClass",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}],required:!0}},{key:"label",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"iconStartName",value:{name:"string",required:!1}},{key:"iconEndName",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}},{key:"hasDropdown",value:{name:"Boolean",required:!1}}]}}],raw:"ButtonType[]",required:!1}}]}}],raw:"ActionType[]"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const CardMeeting_stories={title:"Components/Cards/Meeting",component:CardMeeting,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{},args:{avatar:"img/avatar-marine.jpeg",name:"Marine Martinez",project:"Healthify",date:"Tomorrow",time:"2 PM (30min)",status:"accepted",style:{width:"32rem"}}},Default={args:{}},Today={args:{today:!0}},Project={args:{mainAvatar:"project",metas:[{iconName:"members",label:"Terence Irvin, Alexandra Jolly"}]}},Notes={args:{showRelation:!0,mainAvatar:"project",links:[{label:"Access to expert meeting notes",iconName:"file-document-box",link:"#"}]}},Pending={args:{showRelation:!0,mainAvatar:"project",links:[{label:"Access to expert meeting notes",iconName:"file-document-box",link:"#"}],status:"pending"}},Flagged={args:{showRelation:!0,mainAvatar:"project",links:[{label:"Access to expert meeting notes",iconName:"file-document-box",link:"#"}],status:"success"}},__namedExportsOrder=["Default","Today","Project","Notes","Pending","Flagged"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Today.parameters={...Today.parameters,docs:{...Today.parameters?.docs,source:{originalSource:"{\n  args: {\n    today: true\n  }\n}",...Today.parameters?.docs?.source}}},Project.parameters={...Project.parameters,docs:{...Project.parameters?.docs,source:{originalSource:'{\n  args: {\n    mainAvatar: "project",\n    metas: [{\n      iconName: "members",\n      label: "Terence Irvin, Alexandra Jolly"\n    }]\n  }\n}',...Project.parameters?.docs?.source}}},Notes.parameters={...Notes.parameters,docs:{...Notes.parameters?.docs,source:{originalSource:'{\n  args: {\n    showRelation: true,\n    mainAvatar: "project",\n    links: [{\n      label: "Access to expert meeting notes",\n      iconName: "file-document-box",\n      link: "#"\n    }]\n  }\n}',...Notes.parameters?.docs?.source}}},Pending.parameters={...Pending.parameters,docs:{...Pending.parameters?.docs,source:{originalSource:'{\n  args: {\n    showRelation: true,\n    mainAvatar: "project",\n    links: [{\n      label: "Access to expert meeting notes",\n      iconName: "file-document-box",\n      link: "#"\n    }],\n    status: "pending"\n  }\n}',...Pending.parameters?.docs?.source}}},Flagged.parameters={...Flagged.parameters,docs:{...Flagged.parameters?.docs,source:{originalSource:'{\n  args: {\n    showRelation: true,\n    mainAvatar: "project",\n    links: [{\n      label: "Access to expert meeting notes",\n      iconName: "file-document-box",\n      link: "#"\n    }],\n    status: "success"\n  }\n}',...Flagged.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,isLoading=!1,showActive=!0,hasDropdown=!1,label,link="#",target,addClass,extended,outlined,iconStartName,iconEndName,iconStartImage,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),isLoading&&classTab.push("disabled"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:link,className:classTab.join(" "),role:"button",target,...props,children:isLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"loading",addClass:"icon-spin"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Loading…"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),iconStartImage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"img",src:iconStartImage}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconStartImage:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "sso" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"sso"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/avatars/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Avatar=({addClass,size="lg",isOval=!0,isBordered=!1,iconName="account",image,...props})=>{let classTab=["thumbnail"];return size&&classTab.push(`is-${size}`),isOval&&classTab.push("is-oval"),isBordered&&classTab.push("is-bordered"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[iconName&&!image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:image})]})};Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},isOval:{required:!1,tsType:{name:"Boolean"},description:"Make the avatar round",defaultValue:{value:"true",computed:!1}},isBordered:{required:!1,tsType:{name:"Boolean"},description:"Add a thin border on the outside of the avatar (useful when superposed)",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"Sizes",defaultValue:{value:'"lg"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"IconName",defaultValue:{value:'"account"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"Image URL"}}}},"./src/app/components/badges/notifs/Notif.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Notif});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Notif=({addClass,status,label})=>{let classTab=["badge badge-notification"];return status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})})};Notif.__docgenInfo={description:"",methods:[],displayName:"Notif",props:{label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"interactive" | "accent" | "highlight"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"highlight"'}]},description:"Status"}}}},"./src/app/components/cards/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Card=({children,addClass,style,...props})=>{let classTab=["card"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/cards/CardInfos.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardInfos});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const CardInfos=({addClass,children})=>{let classTab=["card-infos"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};CardInfos.__docgenInfo={description:"",methods:[],displayName:"CardInfos",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass,style,...props})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/dropdown/DropdownDivider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownDivider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownDivider=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"});DropdownDivider.__docgenInfo={description:"",methods:[],displayName:"DropdownDivider"}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const DropdownItem=({children,type,addClass,outbound,active,label,iconName,caption,toggle,href="#",target,rel,badge,...props})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),active&&classTab.push("active"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href,target,...props,children:[void 0!==active&&(active?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"check",addClass:"dropdown-item--icon"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"",addClass:"dropdown-item--icon"})),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"d-flex",children:[label," ",badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__.X,{label:badge,status:"highlight",addClass:"ml-auto"})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]}),toggle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-right",addClass:"dropdown-item--toggle"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger" | "ai"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"ai"'}]},description:""},iconName:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},toggle:{required:!1,tsType:{name:"boolean"},description:""},outbound:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},badge:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show,style,...props})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);