"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[895],{"./src/app/components/badges/roles/Role.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Role});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/tooltips.js");const Role=({addClass,status})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__.v)()}),[]);let classTab=["badge badge-role"];status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass);let statusFirstCapitalize=status.charAt(0).toUpperCase()+status.slice(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":"tooltip","data-placement":"top","data-original-title":statusFirstCapitalize,"data-boundary":"window"})};Role.__docgenInfo={description:"",methods:[],displayName:"Role",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant" | "visitor"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'},{name:"literal",value:'"visitor"'}]},description:"Status"}}}},"./src/app/components/cards/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Card=({children,addClass,style,...props})=>{let classTab=["card"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/cards/CardFeed.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>CardFeed});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Card__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/cards/Card.tsx")),_CardInfos__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/cards/CardInfos.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/components/Icon.tsx"),_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/components/dropdown/Dropdown.tsx"),_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/components/dropdown/DropdownMenu.tsx"),_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/dropdown/DropdownItem.tsx"),_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/components/dropdown/DropdownDivider.tsx"),dompurify__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/dompurify/dist/purify.es.mjs"),_avatars_Avatar__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/app/components/avatars/Avatar.tsx"),_badges_roles_Role__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/app/components/badges/roles/Role.tsx"),_Button__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/app/components/Button.tsx");const CardFeed=({from,fromPrepend="From program:",avatar,author="Name",role,type,metas,date="May 13",time="3:39 PM",title,content="\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl ignissim est, at elementum felis diam eget massa.</p>\n        ",readMore,commented,comments=0,liked,likes=0,copyLink=!1,children,addClass,style,...props})=>{let listMetas=null==metas?void 0:metas.map((meta=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:meta.label},meta.label))),sanitizedContent=dompurify__WEBPACK_IMPORTED_MODULE_9__.A.sanitize(content);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_2__.Z,{addClass,style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CardInfos__WEBPACK_IMPORTED_MODULE_3__.Y,{addClass:"d-flex flex-column align-items-stretch gap-md p-24px",children:[from&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"text-muted small gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:fromPrepend})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-muted font-weight-bold",children:from})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-grow-1 gap-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"thumbnail-relation m-auto",children:["org"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatars_Avatar__WEBPACK_IMPORTED_MODULE_10__.e,{size:"lg",iconName:"org",image:avatar,isOval:!1}),"program"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatars_Avatar__WEBPACK_IMPORTED_MODULE_10__.e,{size:"lg",iconName:"program",image:avatar,isOval:!1}),!type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avatars_Avatar__WEBPACK_IMPORTED_MODULE_10__.e,{size:"lg",image:avatar})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card-title flex-grow-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:author}),role&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_roles_Role__WEBPACK_IMPORTED_MODULE_11__.X,{status:role}),"org"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.I,{size:"xs",name:type,addClass:"text-muted","data-toggle":"tooltip","data-placement":"top","data-original-title":"Organization","data-boundary":"window"}),"program"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.I,{size:"xs",name:type,addClass:"text-muted","data-toggle":"tooltip","data-placement":"top","data-original-title":"Program","data-boundary":"window"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"text-muted small metas is-list mb-none",children:[metas&&listMetas,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:date})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:time})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__.m,{addClass:"z-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{type:"muted",iconStartName:"options","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dropdown_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.r,{direction:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Open post"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_8__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Open profile",outbound:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Open program",outbound:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownDivider__WEBPACK_IMPORTED_MODULE_8__.r,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{label:"Edit",iconName:"pencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_7__.t,{type:"danger",label:"Delete",iconName:"delete"})]})]})]}),title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:title}),sanitizedContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-flex flex-column gap-md",dangerouslySetInnerHTML:{__html:sanitizedContent}}),readMore&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",children:"Read more ->"}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-between flex-nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-xs flex-fill",children:[liked?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:likes,iconStartName:"thumb-up",isActive:!0,showActive:!1}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:likes>0?likes:"Like",iconStartName:"thumb-up",showActive:!1}),commented?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:comments,iconStartName:"comment"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:comments>0?comments:"Comment",iconStartName:"comment"})]}),copyLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_12__.$,{size:"sm",type:"secondary",label:"Copy link",iconStartName:"share"})]})]})})};CardFeed.__docgenInfo={description:"",methods:[],displayName:"CardFeed",props:{from:{required:!1,tsType:{name:"string"},description:""},fromPrepend:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"From program:"',computed:!1}},avatar:{required:!1,tsType:{name:"string"},description:""},author:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Name"',computed:!1}},role:{required:!1,tsType:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'}]},description:""},type:{required:!1,tsType:{name:"union",raw:'null | "org" | "program"',elements:[{name:"null"},{name:"literal",value:'"org"'},{name:"literal",value:'"program"'}]},description:""},metas:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}],raw:"MetaType[]"},description:""},date:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"May 13"',computed:!1}},time:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"3:39 PM"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""},readMore:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},commented:{required:!1,tsType:{name:"boolean"},description:""},comments:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},liked:{required:!1,tsType:{name:"boolean"},description:""},likes:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},copyLink:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/cards/CardInfos.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardInfos});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const CardInfos=({addClass,children})=>{let classTab=["card-infos"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};CardInfos.__docgenInfo={description:"",methods:[],displayName:"CardInfos",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/dropdown/DropdownDivider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownDivider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownDivider=({})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dropdown-divider"});DropdownDivider.__docgenInfo={description:"",methods:[],displayName:"DropdownDivider"}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const DropdownItem=({type,addClass,outbound,label,iconName,caption})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href:"#",children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'}]},description:"is interactive or danger ?"},outbound:{required:!1,tsType:{name:"boolean"},description:"is this an outbound link?"},label:{required:!0,tsType:{name:"string"},description:"Label"},iconName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>'},caption:{required:!1,tsType:{name:"string"},description:"Caption"}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}}}]);