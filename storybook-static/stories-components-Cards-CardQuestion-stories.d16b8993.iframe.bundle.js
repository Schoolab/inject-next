"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[7596],{"./src/stories/components/Cards/CardQuestion.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Resolved:()=>Resolved,WithDetails:()=>WithDetails,WithResponses:()=>WithResponses,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardQuestion_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Card=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/cards/Card.tsx")),CardInfos=__webpack_require__("./src/app/components/cards/CardInfos.tsx"),Icon=__webpack_require__("./src/app/components/Icon.tsx"),Dropdown=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),DropdownMenu=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),DropdownItem=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),DropdownDivider=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),purify_es=__webpack_require__("./node_modules/dompurify/dist/purify.es.mjs"),Avatar=__webpack_require__("./src/app/components/avatars/Avatar.tsx"),Role=__webpack_require__("./src/app/components/badges/roles/Role.tsx"),Button=__webpack_require__("./src/app/components/Button.tsx"),Tag=__webpack_require__("./src/app/components/badges/tags/Tag.tsx"),Notif=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const CardQuestion=({from,fromPrepend="From program:",avatar,author="Name",role,metas,datetime="May 13 at 3:39 PM",content="\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl ignissim est, at elementum felis diam eget massa.</p>\n        ",tags,status="pending",responses,showDetails,commented,comments=0,liked,likes=0,copyLink=!1,children,addClass,style,...props})=>{let listMetas=null==metas?void 0:metas.map((meta=>(0,jsx_runtime.jsx)("li",{children:meta.label},meta.label))),listTags=null==tags?void 0:tags.map((tag=>(0,jsx_runtime.jsx)(Tag.v,{label:tag.label}))),listResponses=null==responses?void 0:responses.map((response=>(0,jsx_runtime.jsxs)("div",{className:"message p-0 align-items-end",children:[(0,jsx_runtime.jsx)(Avatar.e,{size:"md",image:response.avatar}),(0,jsx_runtime.jsxs)("div",{className:"message-body",children:[(0,jsx_runtime.jsx)("div",{className:"message-row",children:(0,jsx_runtime.jsxs)("ul",{className:"metas is-list small",children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("a",{href:"#",className:"text-muted d-flex align-items-center gap-2xs",children:[(0,jsx_runtime.jsx)("span",{children:response.author}),response.role&&(0,jsx_runtime.jsx)(Role.X,{status:response.role})]})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("span",{children:response.datetime})})]})}),(0,jsx_runtime.jsxs)("div",{className:"message-row align-items-end",children:[(0,jsx_runtime.jsx)("div",{className:"message-content gap-md",dangerouslySetInnerHTML:{__html:purify_es.A.sanitize(response.content)}}),(0,jsx_runtime.jsxs)("div",{className:"message-options dropdown",children:[(0,jsx_runtime.jsx)("a",{className:"btn btn-lg btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,jsx_runtime.jsx)("span",{className:"icon icon-options"})}),(0,jsx_runtime.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,jsx_runtime.jsx)("a",{href:"#",className:"dropdown-item update-comment","data-url":"/rest/comment/924/edit-modal",children:"Edit"}),(0,jsx_runtime.jsx)("a",{href:"#",className:"dropdown-item is-danger delete-comment","data-url":"/rest/comment/924/delete",children:"Delete"})]})]})]})]})]}))),sanitizedContent=purify_es.A.sanitize(content);return(0,jsx_runtime.jsxs)(Card.Z,{addClass,style,...props,children:[(0,jsx_runtime.jsxs)(CardInfos.Y,{addClass:"d-flex flex-column align-items-stretch gap-md p-24px",children:[from&&(0,jsx_runtime.jsxs)("p",{className:"text-muted small gap-2xs",children:[(0,jsx_runtime.jsx)("span",{children:fromPrepend})," ",(0,jsx_runtime.jsx)("a",{href:"#",className:"text-muted font-weight-bold",children:from})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-grow-1 gap-sm",children:[(0,jsx_runtime.jsx)("div",{className:"thumbnail-relation m-auto",children:(0,jsx_runtime.jsx)(Avatar.e,{size:"lg",image:avatar})}),(0,jsx_runtime.jsxs)("div",{className:"card-title flex-grow-1",children:[(0,jsx_runtime.jsxs)("a",{href:"#",className:"h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs",children:[(0,jsx_runtime.jsx)("span",{children:author}),role&&(0,jsx_runtime.jsx)(Role.X,{status:role})]}),(0,jsx_runtime.jsxs)("ul",{className:"text-muted small metas is-list mb-none",children:[metas&&listMetas,(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("span",{children:datetime})})]})]}),(0,jsx_runtime.jsxs)(Dropdown.m,{addClass:"z-2",children:[(0,jsx_runtime.jsx)(Button.$,{type:"muted",iconStartName:"options","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,jsx_runtime.jsxs)(DropdownMenu.r,{direction:"right",children:[(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Open profile",outbound:!0}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Open program",outbound:!0}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Add response",caption:"Open details & responses",iconName:"plus-circle"}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Mark resolved",iconName:"check-circle"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Edit",iconName:"pencil"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"danger",label:"Delete",iconName:"delete"})]})]})]}),sanitizedContent&&(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column gap-md",dangerouslySetInnerHTML:{__html:sanitizedContent}}),children,(tags||status)&&(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-content-between flex-nowrap gap-0",children:[(0,jsx_runtime.jsx)("div",{className:"badges flex-nowrap",children:listTags}),"draft"===status&&(0,jsx_runtime.jsx)(Tag.v,{status:"draft",iconName:"status-bordered",label:"Draft"}),"pending"===status&&(0,jsx_runtime.jsx)(Tag.v,{status:"progress",iconName:"status-dashed",label:"Pending"}),"resolved"===status&&(0,jsx_runtime.jsx)(Tag.v,{status:"open",iconName:"status-filled",label:"Resolved"}),"closed"===status&&(0,jsx_runtime.jsx)(Tag.v,{status:"closed",iconName:"status-stop",label:"Closed"})]}),responses&&(0,jsx_runtime.jsx)("hr",{}),responses&&(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column gap-md",children:listResponses}),(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-content-between flex-nowrap",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-xs flex-fill",children:[liked?(0,jsx_runtime.jsx)(Button.$,{size:"sm",type:"secondary",label:likes,iconStartName:"thumb-up",isActive:!0,showActive:!1}):(0,jsx_runtime.jsx)(Button.$,{size:"sm",type:"secondary",label:likes>0?likes:"Like",iconStartName:"thumb-up",showActive:!1}),commented?(0,jsx_runtime.jsx)(Button.$,{size:"sm",type:"secondary",label:comments,iconStartName:"comment"}):(0,jsx_runtime.jsx)(Button.$,{size:"sm",type:"secondary",label:comments>0?comments:"Comment",iconStartName:"comment"})]}),copyLink&&(0,jsx_runtime.jsx)(Button.$,{size:"sm",type:"secondary",label:"Copy link",iconStartName:"share"})]})]}),showDetails&&(0,jsx_runtime.jsx)("div",{className:"card-targets",children:(0,jsx_runtime.jsxs)("div",{className:"card-target",children:[(0,jsx_runtime.jsxs)("a",{href:"#",className:"stretched-link d-flex align-items-center",children:[(0,jsx_runtime.jsx)(Icon.I,{name:"faq",size:"sm"}),(0,jsx_runtime.jsx)("span",{children:"Details & responses"})]}),(0,jsx_runtime.jsx)(Notif.X,{label:responses?responses.length:0,status:"highlight"}),(0,jsx_runtime.jsx)(Icon.I,{name:"chevron-right",size:"sm"})]})})]})};CardQuestion.__docgenInfo={description:"",methods:[],displayName:"CardQuestion",props:{from:{required:!1,tsType:{name:"string"},description:""},fromPrepend:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"From program:"',computed:!1}},avatar:{required:!1,tsType:{name:"string"},description:""},author:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Name"',computed:!1}},role:{required:!1,tsType:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'}]},description:""},metas:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}],raw:"MetaType[]"},description:""},datetime:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"May 13 at 3:39 PM"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}],raw:"TagType[]"},description:""},status:{required:!1,tsType:{name:"union",raw:'"draft" | "pending" | "resolved" | "closed"',elements:[{name:"literal",value:'"draft"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"resolved"'},{name:"literal",value:'"closed"'}]},description:"",defaultValue:{value:'"pending"',computed:!1}},responses:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    avatar?: string;\n    author: string;\n    role?: "admin" | "manager" | "expert" | "jury" | "participant";\n    datetime: string;\n    content: string;\n}',signature:{properties:[{key:"avatar",value:{name:"string",required:!1}},{key:"author",value:{name:"string",required:!0}},{key:"role",value:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'}],required:!1}},{key:"datetime",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!0}}]}}],raw:"ResponseType[]"},description:""},showDetails:{required:!1,tsType:{name:"boolean"},description:""},commented:{required:!1,tsType:{name:"boolean"},description:""},comments:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},liked:{required:!1,tsType:{name:"boolean"},description:""},likes:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},copyLink:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    icon?: string;\n    label?: string;\n    link?: string;\n    responses?: number;\n}",signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}},{key:"responses",value:{name:"number",required:!1}}]}}],raw:"LinkType[]"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const CardQuestion_stories={title:"Components/Cards/Question",component:CardQuestion,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{liked:{control:"boolean"},commented:{control:"boolean"},copyLink:{control:"boolean"}},args:{avatar:"https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg",author:"Nora Hechelef",content:'\n            <p>In project management, the term "critical path" is often mentioned. But what does it actually mean? Could you provide an example to illustrate its importance?</p>\n        ',tags:[{label:"Project Management"}],status:"pending",liked:!1,commented:!1,copyLink:!0,style:{width:"32rem"}}},Default={args:{}},Resolved={args:{status:"resolved"}},WithResponses={args:{status:"resolved",responses:[{avatar:"https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg",author:"Sasha Lehmann",role:"expert",datetime:"Oct 14 at 9:24 AM",content:"\n                    <p>The critical path is the longest sequence of activities that defines the project's minimum duration. Delays will push back the completion date.</p>\n                "}]}},WithDetails={args:{showDetails:!0}},__namedExportsOrder=["Default","Resolved","WithResponses","WithDetails"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Resolved.parameters={...Resolved.parameters,docs:{...Resolved.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: "resolved"\n  }\n}',...Resolved.parameters?.docs?.source}}},WithResponses.parameters={...WithResponses.parameters,docs:{...WithResponses.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: "resolved",\n    responses: [{\n      avatar: "https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg",\n      author: "Sasha Lehmann",\n      role: "expert",\n      datetime: "Oct 14 at 9:24 AM",\n      content: `\n                    <p>The critical path is the longest sequence of activities that defines the project\'s minimum duration. Delays will push back the completion date.</p>\n                `\n    }]\n  }\n}',...WithResponses.parameters?.docs?.source}}},WithDetails.parameters={...WithDetails.parameters,docs:{...WithDetails.parameters?.docs,source:{originalSource:"{\n  args: {\n    showDetails: true\n  }\n}",...WithDetails.parameters?.docs?.source}}}},"./public/utils/tooltips.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>tooltips});const tooltips=()=>{$((function(){$('[data-toggle="tooltip"]').tooltip({trigger:"hover"});var tooltips=$('[data-toggle="tooltip"]');function disableTooltipInMobile(){tooltips.tooltip("enable"),window.matchMedia("(max-width: 991.98px)").matches&&tooltips.tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded a").tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded div").tooltip("disable")}tooltips.tooltip(),disableTooltipInMobile(),$(window).resize((function(){disableTooltipInMobile()}))}))}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,showActive=!0,hasDropdown=!1,label,link="#",target,addClass,extended,outlined,iconStartName,iconEndName,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),role:"button",target,...props,children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/avatars/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Avatar=({addClass,size="lg",isOval=!0,isBordered=!1,iconName="account",image,...props})=>{let classTab=["thumbnail"];return size&&classTab.push(`is-${size}`),isOval&&classTab.push("is-oval"),isBordered&&classTab.push("is-bordered"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[iconName&&!image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:image})]})};Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},isOval:{required:!1,tsType:{name:"Boolean"},description:"Make the avatar round",defaultValue:{value:"true",computed:!1}},isBordered:{required:!1,tsType:{name:"Boolean"},description:"Add a thin border on the outside of the avatar (useful when superposed)",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"Sizes",defaultValue:{value:'"lg"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"IconName",defaultValue:{value:'"account"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"Image URL"}}}},"./src/app/components/badges/notifs/Notif.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Notif});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Notif=({addClass,status,label})=>{let classTab=["badge badge-notification"];return status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})})};Notif.__docgenInfo={description:"",methods:[],displayName:"Notif",props:{label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"interactive" | "accent" | "highlight"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"highlight"'}]},description:"Status"}}}},"./src/app/components/badges/roles/Role.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Role});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/tooltips.js");const Role=({addClass,status})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__.v)()}),[]);let classTab=["badge badge-role"];status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass);let statusFirstCapitalize=status.charAt(0).toUpperCase()+status.slice(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":"tooltip","data-placement":"top","data-original-title":statusFirstCapitalize,"data-boundary":"window"})};Role.__docgenInfo={description:"",methods:[],displayName:"Role",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant" | "visitor"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'},{name:"literal",value:'"visitor"'}]},description:"Status"}}}},"./src/app/components/badges/tags/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Tag=({isPill=!0,iconName,status="default",label,link,addClass,style,...props})=>{let classTab=["badge"];return isPill&&classTab.push("is-pill"),"default"!==status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),style,...props,children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]})};Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},isPill:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "open" | "progress" | "closed" | "done" | "draft"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"open"'},{name:"literal",value:'"progress"'},{name:"literal",value:'"closed"'},{name:"literal",value:'"done"'},{name:"literal",value:'"draft"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/cards/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Card=({children,addClass,style,...props})=>{let classTab=["card"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/cards/CardInfos.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardInfos});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const CardInfos=({addClass,children})=>{let classTab=["card-infos"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};CardInfos.__docgenInfo={description:"",methods:[],displayName:"CardInfos",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass,style,...props})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/dropdown/DropdownDivider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownDivider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownDivider=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"});DropdownDivider.__docgenInfo={description:"",methods:[],displayName:"DropdownDivider"}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const DropdownItem=({children,type,addClass,outbound,active,label,iconName,caption,toggle,href="#",target,rel,...props})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),active&&classTab.push("active"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href,target,...props,children:[void 0!==active&&(active?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"check",addClass:"dropdown-item--icon"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"",addClass:"dropdown-item--icon"})),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]}),toggle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-right",addClass:"dropdown-item--toggle"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger" | "ai"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"ai"'}]},description:""},iconName:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},toggle:{required:!1,tsType:{name:"boolean"},description:""},outbound:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}}}]);