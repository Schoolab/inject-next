"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[3820],{"./src/stories/components/Cards/CardFeed.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Commented:()=>Commented,Default:()=>Default,Liked:()=>Liked,WithAvatar:()=>WithAvatar,WithFrom:()=>WithFrom,WithMetas:()=>WithMetas,WithReadMore:()=>WithReadMore,WithRole:()=>WithRole,WithTitle:()=>WithTitle,WithType:()=>WithType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Cards/Feed",component:__webpack_require__("./src/app/components/cards/CardFeed.tsx").T,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{liked:{control:"boolean"},commented:{control:"boolean"},copyLink:{control:"boolean"}},args:{author:"Nora Hechelef",liked:!1,commented:!1,copyLink:!0,style:{width:"32rem"}}},Default={args:{}},WithAvatar={args:{avatar:"https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg"}},WithRole={args:{role:"admin"}},WithType={args:{author:"Schoolab",type:"org"}},WithMetas={args:{avatar:"https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg",author:"Pierre Forestier",role:"manager",metas:[{label:"Program Manager, Schoolab"}]}},WithFrom={args:{from:"Impact Innovators"}},WithReadMore={args:{readMore:!0}},WithTitle={args:{title:"Bienvenue à Schoolab!",content:"\n            <p>Nous sommes ravis de vous accueillir sur la plateforme dédiée au programme.</p>\n            <p>Nous espérons que vous y accomplirez beaucoup de grandes choses (nous en sommes certains) 💪</p>\n            <p>Si vous avez la moindre question, vous pouvez consulter le Help Center 😎</p>\n            <p>Ou nous poser des questions juste ici 🤩</p>\n            <p>Bonne aventure !</p>\n        "}},Liked={args:{liked:!0,likes:9}},Commented={args:{commented:!0,comments:4}},__namedExportsOrder=["Default","WithAvatar","WithRole","WithType","WithMetas","WithFrom","WithReadMore","WithTitle","Liked","Commented"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithAvatar.parameters={...WithAvatar.parameters,docs:{...WithAvatar.parameters?.docs,source:{originalSource:'{\n  args: {\n    avatar: "https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg"\n  }\n}',...WithAvatar.parameters?.docs?.source}}},WithRole.parameters={...WithRole.parameters,docs:{...WithRole.parameters?.docs,source:{originalSource:'{\n  args: {\n    role: "admin"\n  }\n}',...WithRole.parameters?.docs?.source}}},WithType.parameters={...WithType.parameters,docs:{...WithType.parameters?.docs,source:{originalSource:'{\n  args: {\n    author: "Schoolab",\n    type: "org"\n  }\n}',...WithType.parameters?.docs?.source}}},WithMetas.parameters={...WithMetas.parameters,docs:{...WithMetas.parameters?.docs,source:{originalSource:'{\n  args: {\n    avatar: "https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg",\n    author: "Pierre Forestier",\n    role: "manager",\n    metas: [{\n      label: "Program Manager, Schoolab"\n    }]\n  }\n}',...WithMetas.parameters?.docs?.source}}},WithFrom.parameters={...WithFrom.parameters,docs:{...WithFrom.parameters?.docs,source:{originalSource:'{\n  args: {\n    from: "Impact Innovators"\n  }\n}',...WithFrom.parameters?.docs?.source}}},WithReadMore.parameters={...WithReadMore.parameters,docs:{...WithReadMore.parameters?.docs,source:{originalSource:"{\n  args: {\n    readMore: true\n  }\n}",...WithReadMore.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Bienvenue à Schoolab!",\n    content: `\n            <p>Nous sommes ravis de vous accueillir sur la plateforme dédiée au programme.</p>\n            <p>Nous espérons que vous y accomplirez beaucoup de grandes choses (nous en sommes certains) 💪</p>\n            <p>Si vous avez la moindre question, vous pouvez consulter le Help Center 😎</p>\n            <p>Ou nous poser des questions juste ici 🤩</p>\n            <p>Bonne aventure !</p>\n        `\n  }\n}',...WithTitle.parameters?.docs?.source}}},Liked.parameters={...Liked.parameters,docs:{...Liked.parameters?.docs,source:{originalSource:"{\n  args: {\n    liked: true,\n    likes: 9\n  }\n}",...Liked.parameters?.docs?.source}}},Commented.parameters={...Commented.parameters,docs:{...Commented.parameters?.docs,source:{originalSource:"{\n  args: {\n    commented: true,\n    comments: 4\n  }\n}",...Commented.parameters?.docs?.source}}}},"./public/utils/tooltips.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>tooltips});const tooltips=()=>{$((function(){$('[data-toggle="tooltip"]').tooltip({trigger:"hover"});var tooltips=$('[data-toggle="tooltip"]');function disableTooltipInMobile(){tooltips.tooltip("enable"),window.matchMedia("(max-width: 991.98px)").matches&&tooltips.tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded a").tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded div").tooltip("disable")}tooltips.tooltip(),disableTooltipInMobile(),$(window).resize((function(){disableTooltipInMobile()}))}))}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,showActive=!0,hasDropdown=!1,label,link="#",target,addClass,extended,outlined,iconStartName,iconEndName,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),role:"button",target,...props,children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline-danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/avatars/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Avatar=({addClass,size="lg",isOval=!0,isBordered=!1,iconName="account",image,...props})=>{let classTab=["thumbnail"];return size&&classTab.push(`is-${size}`),isOval&&classTab.push("is-oval"),isBordered&&classTab.push("is-bordered"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[iconName&&!image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:image})]})};Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},isOval:{required:!1,tsType:{name:"Boolean"},description:"Make the avatar round",defaultValue:{value:"true",computed:!1}},isBordered:{required:!1,tsType:{name:"Boolean"},description:"Add a thin border on the outside of the avatar (useful when superposed)",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"Sizes",defaultValue:{value:'"lg"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"IconName",defaultValue:{value:'"account"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"Image URL"}}}},"./src/app/components/badges/roles/Role.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Role});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/tooltips.js");const Role=({addClass,status})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__.v)()}),[]);let classTab=["badge badge-role"];status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass);let statusFirstCapitalize=status.charAt(0).toUpperCase()+status.slice(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":"tooltip","data-placement":"top","data-original-title":statusFirstCapitalize,"data-boundary":"window"})};Role.__docgenInfo={description:"",methods:[],displayName:"Role",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant" | "visitor"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'},{name:"literal",value:'"visitor"'}]},description:"Status"}}}},"./src/app/components/cards/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Card=({children,addClass,style,...props})=>{let classTab=["card"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/cards/CardFeed.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>CardFeed});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Card__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/cards/Card.tsx")),_CardInfos__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/cards/CardInfos.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Icon.tsx"),_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),dompurify__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/dompurify/dist/purify.es.mjs"),_avatars_Avatar__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/app/components/avatars/Avatar.tsx"),_badges_roles_Role__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/app/components/badges/roles/Role.tsx"),_Button__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/app/components/Button.tsx");const CardFeed=({from,fromPrepend="From program:",avatar,author="Name",role,type,metas,datetime="May 13 at 3:39 PM",title,content="\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl ignissim est, at elementum felis diam eget massa.</p>\n        ",readMore,commented,comments=0,liked,likes=0,copyLink=!1,children,addClass,style,...props})=>{let classTab=[""];addClass&&classTab.push(addClass);let listMetas=null==metas?void 0:metas.map((meta=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:meta.label},meta.label))),sanitizedContent=dompurify__WEBPACK_IMPORTED_MODULE_9__.A.sanitize(content);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_2__.Z,{addClass:classTab.join(" "),style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CardInfos__WEBPACK_IMPORTED_MODULE_3__.Y,{addClass:"d-flex flex-column align-items-stretch gap-md p-24px",children:[from&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"text-muted small gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:fromPrepend})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-muted font-weight-bold",children:from})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-grow-1 gap-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"thumbnail-relation m-auto",children:["org"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatars_Avatar__WEBPACK_IMPORTED_MODULE_10__.e,{size:"lg",iconName:"org",image:avatar,isOval:!1}),"program"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatars_Avatar__WEBPACK_IMPORTED_MODULE_10__.e,{size:"lg",iconName:"program",image:avatar,isOval:!1}),!type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatars_Avatar__WEBPACK_IMPORTED_MODULE_10__.e,{size:"lg",image:avatar})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card-title flex-grow-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:author}),role&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_roles_Role__WEBPACK_IMPORTED_MODULE_11__.X,{status:role}),"org"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.I,{size:"xs",name:type,addClass:"text-muted","data-toggle":"tooltip","data-placement":"top","data-original-title":"Organization","data-boundary":"window"}),"program"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.I,{size:"xs",name:type,addClass:"text-muted","data-toggle":"tooltip","data-placement":"top","data-original-title":"Program","data-boundary":"window"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"text-muted small metas is-list mb-none",children:[metas&&listMetas,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:datetime})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__.m,{addClass:"z-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{type:"muted",iconStartName:"options","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Open post"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_8__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Open profile",outbound:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Open program",outbound:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_8__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{type:"danger",label:"Delete",iconName:"delete"})]})]})]}),title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:title}),sanitizedContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex flex-column gap-md",dangerouslySetInnerHTML:{__html:sanitizedContent}}),readMore&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",children:"Read more ->"}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-between flex-nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-xs flex-fill",children:[liked?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:likes,iconStartName:"thumb-up",isActive:!0,showActive:!1}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:likes>0?likes:"Like",iconStartName:"thumb-up",showActive:!1}),commented?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:comments,iconStartName:"comment"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:comments>0?comments:"Comment",iconStartName:"comment"})]}),copyLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:"Copy link",iconStartName:"share"})]})]})})};CardFeed.__docgenInfo={description:"",methods:[],displayName:"CardFeed",props:{from:{required:!1,tsType:{name:"string"},description:""},fromPrepend:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"From program:"',computed:!1}},avatar:{required:!1,tsType:{name:"string"},description:""},author:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Name"',computed:!1}},role:{required:!1,tsType:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'}]},description:""},type:{required:!1,tsType:{name:"union",raw:'null | "org" | "program"',elements:[{name:"null"},{name:"literal",value:'"org"'},{name:"literal",value:'"program"'}]},description:""},metas:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}],raw:"MetaType[]"},description:""},datetime:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"May 13 at 3:39 PM"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""},readMore:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},commented:{required:!1,tsType:{name:"boolean"},description:""},comments:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},liked:{required:!1,tsType:{name:"boolean"},description:""},likes:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},copyLink:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/cards/CardInfos.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardInfos});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const CardInfos=({addClass,children})=>{let classTab=["card-infos"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};CardInfos.__docgenInfo={description:"",methods:[],displayName:"CardInfos",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass,style,...props})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/dropdown/DropdownDivider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownDivider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownDivider=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"});DropdownDivider.__docgenInfo={description:"",methods:[],displayName:"DropdownDivider"}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const DropdownItem=({children,type,addClass,outbound,active,label,iconName,caption,toggle,href="#",target,rel,...props})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),active&&classTab.push("active"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href,target,...props,children:[void 0!==active&&(active?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"check",addClass:"dropdown-item--icon"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"",addClass:"dropdown-item--icon"})),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]}),toggle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-right",addClass:"dropdown-item--toggle"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger" | "ai"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"ai"'}]},description:""},iconName:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},toggle:{required:!1,tsType:{name:"boolean"},description:""},outbound:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}}}]);