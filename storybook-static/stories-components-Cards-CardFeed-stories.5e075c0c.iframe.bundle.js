"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[3820],{"./src/stories/components/Cards/CardFeed.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardFeed_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Card=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/cards/Card.tsx")),CardInfos=__webpack_require__("./src/app/components/cards/CardInfos.tsx"),ItemResource=__webpack_require__("./src/app/components/items/ItemResource.tsx"),Icon=__webpack_require__("./src/app/components/Icon.tsx"),Dropdown=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),DropdownMenu=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),DropdownItem=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),DropdownDivider=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx");const CardFeed=({commented,liked,copyLink=!1})=>(0,jsx_runtime.jsx)(Card.Z,{children:(0,jsx_runtime.jsxs)(CardInfos.Y,{addClass:"d-flex flex-column align-items-stretch gap-md p-24px",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-grow-1 gap-sm",children:[(0,jsx_runtime.jsx)("div",{className:"thumbnail-relation m-auto",children:(0,jsx_runtime.jsx)("a",{href:"#",className:"thumbnail is-oval is-lg is-bordered",children:(0,jsx_runtime.jsx)("img",{src:"https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg"})})}),(0,jsx_runtime.jsxs)("div",{className:"card-title flex-grow-1",children:[(0,jsx_runtime.jsx)("a",{href:"#",className:"h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs",children:(0,jsx_runtime.jsx)("span",{children:"Nora Hechelef"})}),(0,jsx_runtime.jsxs)("ul",{className:"text-muted small metas is-list mb-none",children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("span",{children:"May 13"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("span",{children:"3:39 PM"})})]})]}),(0,jsx_runtime.jsxs)(Dropdown.m,{addClass:"z-2",children:[(0,jsx_runtime.jsx)("a",{className:"btn btn-transparent btn-icon",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,jsx_runtime.jsx)("span",{className:"icon is-20px icon-options"})}),(0,jsx_runtime.jsxs)(DropdownMenu.r,{direction:"right",children:[(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Open post"}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Open profile",outbound:!0}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Open program",outbound:!0}),(0,jsx_runtime.jsx)(DropdownDivider.r,{}),(0,jsx_runtime.jsx)(DropdownItem.t,{label:"Edit",iconName:"pencil"}),(0,jsx_runtime.jsx)(DropdownItem.t,{type:"danger",label:"Delete",iconName:"delete"})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-md",children:[(0,jsx_runtime.jsx)("p",{children:"Dans la gestion de projet, on entend souvent parler de \"chemin critique\". Mais qu'est-ce que cela signifie réellement ? Comment est-il déterminé et pourquoi est-il si crucial pour la réussite d'un projet ? Pourriez-vous donner un exemple concret pour illustrer son importance ?"}),(0,jsx_runtime.jsx)("a",{href:"#",children:"Read more ->"})]}),(0,jsx_runtime.jsx)(ItemResource.m,{isSmall:!1,action:"download",icon:{addClass:"text-danger",name:"file-pdf-box"},resource:{details:"120 KB",name:"stakeholdermap-model.pdf",type:"PDF File"}}),(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-content-between flex-nowrap",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-xs flex-fill",children:[liked?(0,jsx_runtime.jsxs)("a",{href:"#",className:"btn btn-sm btn-secondary active",children:[(0,jsx_runtime.jsx)(Icon.I,{name:"thumb-up"}),(0,jsx_runtime.jsx)("span",{children:"9"})]}):(0,jsx_runtime.jsxs)("a",{href:"#",className:"btn btn-sm btn-secondary",children:[(0,jsx_runtime.jsx)(Icon.I,{name:"thumb-up"}),(0,jsx_runtime.jsx)("span",{children:"Like"})]}),commented?(0,jsx_runtime.jsxs)("a",{href:"#",className:"btn btn-sm btn-secondary",children:[(0,jsx_runtime.jsx)(Icon.I,{name:"comment"}),(0,jsx_runtime.jsx)("span",{children:"4"})]}):(0,jsx_runtime.jsxs)("a",{href:"#",className:"btn btn-sm btn-secondary",children:[(0,jsx_runtime.jsx)(Icon.I,{name:"comment"}),(0,jsx_runtime.jsx)("span",{children:"Comment"})]})]}),copyLink&&(0,jsx_runtime.jsxs)("a",{href:"#",className:"btn btn-sm btn-secondary","data-toggle":"tooltip","data-placement":"top","data-original-title":"Click to copy link","data-boundary":"window",children:[(0,jsx_runtime.jsx)(Icon.I,{name:"share"}),(0,jsx_runtime.jsx)("span",{children:"Copy link"})]})]})]})});CardFeed.__docgenInfo={description:"",methods:[],displayName:"CardFeed",props:{commented:{required:!1,tsType:{name:"boolean"},description:"commented ?"},liked:{required:!1,tsType:{name:"boolean"},description:"liked ?"},copyLink:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const CardFeed_stories={title:"Components/Cards/Feed",component:CardFeed,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{liked:{control:"boolean"},commented:{control:"boolean"},copyLink:{control:"boolean"}},args:{liked:!1,commented:!1,copyLink:!1}},Default={},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,showActive=!0,hasDropdown=!1,label,link="#",addClass,extended,outlined,iconStartName,iconEndName,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),role:"button",...props,children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"string"},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/cards/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Card=({children,addClass})=>{let classTab=["card"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/cards/CardInfos.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardInfos});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const CardInfos=({addClass,children})=>{let classTab=["card-infos"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};CardInfos.__docgenInfo={description:"",methods:[],displayName:"CardInfos",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/DropdownDivider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownDivider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownDivider=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"});DropdownDivider.__docgenInfo={description:"",methods:[],displayName:"DropdownDivider"}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const DropdownItem=({type,addClass,outbound,label,iconName,caption})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href:"#",children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'}]},description:"is interactive or danger ?"},outbound:{required:!1,tsType:{name:"boolean"},description:"is this an outbound link?"},label:{required:!0,tsType:{name:"string"},description:"Label"},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},caption:{required:!1,tsType:{name:"string"},description:"Caption"}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/items/ItemResource.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ItemResource});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button.tsx");const ItemResource=({img,resource,action,options=!0,icon,isSmall=!1})=>{let classTab=["item is-bordered"];return isSmall&&classTab.push("is-small"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),children:[img&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item-cover is-16by9",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:img,alt:"Intro to ideation file cover"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-row",children:[icon.addClass?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon.name,addClass:`item-icon ${icon.addClass}`}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon.name,addClass:"item-icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"item-title stretched-link text-truncate",href:"#",children:resource.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"item-caption metas small is-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:resource.type})}),resource.details&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"420 KB"})})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"item-options",children:["download"==action&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",iconStartName:"download",addClass:"z-1","data-toggle":"tooltip","data-placement":"top","data-title":"Download file","data-boundary":"window"}),"openLink"==action&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",iconStartName:"new-tab",addClass:"z-1","data-toggle":"tooltip","data-placement":"top","data-title":"Open in new tab","data-boundary":"window"}),"delete"==action&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"muted",iconStartName:"delete",addClass:"z-1 btn-danger-on-hover","data-toggle":"tooltip","data-placement":"top","data-title":"Delete file","data-boundary":"window"}),options&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown","data-toggle":"tooltip","data-placement":"top","data-title":"Options","data-boundary":"window","data-original-title":"",title:"",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"btn btn-muted btn-icon z-1",href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false","data-boundary":"window",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon icon-options"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item",children:"Edit file"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"dropdown-item is-danger",children:"Delete file"})]})]})]})]})]})};ItemResource.__docgenInfo={description:"",methods:[],displayName:"ItemResource",props:{img:{required:!1,tsType:{name:"string"},description:"Does the item have an image url"},resource:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n    name: string;\n    type: string;\n    details?: string;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"details",value:{name:"string",required:!1}}]}},description:"Resource informations"},action:{required:!0,tsType:{name:"union",raw:'"download" | "openLink" | "delete"',elements:[{name:"literal",value:'"download"'},{name:"literal",value:'"openLink"'},{name:"literal",value:'"delete"'}]},description:"What kind of action is possible?"},options:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"true",computed:!1}},icon:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n    name: string;\n    addClass?: string;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"addClass",value:{name:"string",required:!1}}]}},description:"Icon parameters"},isSmall:{required:!1,tsType:{name:"Boolean"},description:"Is small ?",defaultValue:{value:"false",computed:!1}}}}}}]);