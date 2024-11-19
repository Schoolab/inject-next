"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5556],{"./src/stories/pages/sections/SectionTestimonials.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithButtons:()=>WithButtons,WithTitle:()=>WithTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SectionTestimonials_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),purify_es=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.es.mjs")),Button=__webpack_require__("./src/app/components/Button.tsx"),Avatar=__webpack_require__("./src/app/components/avatars/Avatar.tsx");const SectionTestimonials=({title,subtitle,quotes=[{quote:"\n                    <p>“Write a sentence said by someone here...”</p>\n                "}],buttons,addClass,style,...props})=>{let classSection=["landing-section"];addClass&&classSection.push(addClass);let listQuotes=null==quotes?void 0:quotes.map((quote=>(0,jsx_runtime.jsx)("div",{className:"cq-sm-6 d-flex flex-column",children:(0,jsx_runtime.jsx)("div",{className:"card h-100 quote-item",children:(0,jsx_runtime.jsxs)("div",{className:"card-body d-flex flex-column gap-xl",children:[quote.quote&&(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column gap-sm lead",dangerouslySetInnerHTML:{__html:purify_es.A.sanitize(quote.quote)}}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-sm align-items-center",children:[quote.avatar&&(0,jsx_runtime.jsx)(Avatar.e,{size:"lg",image:quote.avatar}),(quote.author||quote.source)&&(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-none",children:[quote.author&&(0,jsx_runtime.jsx)("p",{className:"font-weight-bold",children:quote.author}),quote.source&&(0,jsx_runtime.jsx)("p",{className:"small text-muted",children:quote.source})]})]})]})})}))),listButtons=null==buttons?void 0:buttons.map((button=>(0,jsx_runtime.jsx)(Button.$,{type:button.type,label:button.label,link:button.link})));return(0,jsx_runtime.jsx)("section",{className:classSection.join(" "),style,...props,children:(0,jsx_runtime.jsx)("div",{className:"container-xl",children:(0,jsx_runtime.jsxs)("div",{className:"cq row-gap-3xl",children:[(0,jsx_runtime.jsxs)("div",{className:"cq-12 cq-md-10 cq-lg-8 cq-offset-md-1 cq-offset-lg-2 text-center d-flex flex-column gap-xl align-items-center",children:[(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column gap-xs",children:[(0,jsx_runtime.jsx)("h2",{className:"display-2",children:title}),subtitle&&(0,jsx_runtime.jsx)("p",{className:"lead",children:subtitle})]}),buttons&&(0,jsx_runtime.jsx)("div",{className:"d-flex gap-sm",children:listButtons})]}),(0,jsx_runtime.jsx)("div",{className:"cq-12 cq-md-10 cq-lg-8 cq-offset-md-1 cq-offset-lg-2 d-flex flex-column gap-2xl",children:quotes&&(0,jsx_runtime.jsx)("div",{className:"cq-12",children:(0,jsx_runtime.jsx)("div",{className:"cq row-gap-2xl justify-content-center",children:listQuotes})})})]})})})};SectionTestimonials.__docgenInfo={description:"",methods:[],displayName:"SectionTestimonials",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},quotes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    quote?: string;\n    avatar?: string;\n    author?: string;\n    source?: string;\n}",signature:{properties:[{key:"quote",value:{name:"string",required:!1}},{key:"avatar",value:{name:"string",required:!1}},{key:"author",value:{name:"string",required:!1}},{key:"source",value:{name:"string",required:!1}}]}}],raw:"QuoteType[]"},description:"",defaultValue:{value:"[\n    {\n        quote: `\n            <p>“Write a sentence said by someone here...”</p>\n        `,\n    },\n]",computed:!1}},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    type?: "primary" | "default";\n    label?: string;\n    link?: string;\n}',signature:{properties:[{key:"type",value:{name:"union",raw:'"primary" | "default"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}],required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}}]}}],raw:"ButtonType[]"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const SectionTestimonials_stories={title:"Pages/Sections/Testimonials",component:SectionTestimonials,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{},args:{quotes:[{quote:"\n                    <p>“L’équipe Digitale de Schoolab conçoit, design et développe les sites Web et les Plateformes SaaS Schoolab en collaboration étroite avec nos équipes, nos clients et notre écosystème. Ce positionnement unique permet à chaque membre de l’équipe de contribuer directement au succès de nos programmes pour faire bouger les lignes sur nos missions.”</p>\n                ",avatar:"img/thumbnails/pierre.jpg",author:"Pierre Lemeteil",source:"Head of Digital @ Schoolab"},{quote:"\n                    <p>“L’équipe Digitale de Schoolab conçoit, design et développe les sites Web et les Plateformes SaaS Schoolab en collaboration étroite avec nos équipes, nos clients et notre écosystème. Ce positionnement unique permet à chaque membre de l’équipe de contribuer directement au succès de nos programmes pour faire bouger les lignes sur nos missions.”</p>\n                ",author:"Anonymous"}]}},Default={args:{}},WithTitle={args:{title:"Hear from our alumni",subtitle:"Meet our inspiring alumni from the Innovation Program, who are transforming ideas into impactful solutions."}},WithButtons={args:{title:"Hear from our alumni",subtitle:"Meet our inspiring alumni from the Innovation Program, who are transforming ideas into impactful solutions.",buttons:[{type:"primary",label:"Join today"},{type:"default",label:"Learn more"}]}},__namedExportsOrder=["Default","WithTitle","WithButtons"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Hear from our alumni",\n    subtitle: "Meet our inspiring alumni from the Innovation Program, who are transforming ideas into impactful solutions."\n  }\n}',...WithTitle.parameters?.docs?.source}}},WithButtons.parameters={...WithButtons.parameters,docs:{...WithButtons.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Hear from our alumni",\n    subtitle: "Meet our inspiring alumni from the Innovation Program, who are transforming ideas into impactful solutions.",\n    buttons: [{\n      type: "primary",\n      label: "Join today"\n    }, {\n      type: "default",\n      label: "Learn more"\n    }]\n  }\n}',...WithButtons.parameters?.docs?.source}}}},"./src/app/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Icon.tsx");const Button=({size="default",type,disabled,isActive=!1,showActive=!0,hasDropdown=!1,label,link="#",addClass,extended,outlined,iconStartName,iconEndName,...props})=>{let classTab=["btn"];return type&&outlined&&classTab.push(`btn-outline-${type}`),type&&!outlined&&classTab.push(`btn-${type}`),"default"!==size&&classTab.push(`btn-${size}`),isActive&&classTab.push("active"),hasDropdown&&classTab.push("dropdown-toggle"),extended&&classTab.push("btn-block"),disabled&&classTab.push("disabled"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:link,className:classTab.join(" "),role:"button",...props,children:[isActive&&showActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:"check"}),iconStartName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconStartName}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label}),props.children&&props.children,iconEndName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.I,{name:iconEndName})]})};Button.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children Content"},label:{required:!1,tsType:{name:"string"},description:"Button contents"},disabled:{required:!1,tsType:{name:"Boolean"},description:"Is the button disabled?"},isActive:{required:!1,tsType:{name:"Boolean"},description:"Is Active?",defaultValue:{value:"false",computed:!1}},showActive:{required:!1,tsType:{name:"Boolean"},description:"Show Active Icon?",defaultValue:{value:"true",computed:!1}},hasDropdown:{required:!1,tsType:{name:"Boolean"},description:"Has Dropdown?",defaultValue:{value:"false",computed:!1}},iconStartName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},iconEndName:{required:!1,tsType:{name:"string"},description:'Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static/?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list'},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},type:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"brand-primary"'},{name:"literal",value:'"brand-secondary"'},{name:"literal",value:'"brand-tertiary"'}]},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "xs"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"How large should the button be?",defaultValue:{value:'"default"',computed:!1}},extended:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},outlined:{required:!1,tsType:{name:"Boolean"},description:"Does the button have a btn-block class ?"},link:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/avatars/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Avatar=({addClass,size="lg",isOval=!0,isBordered=!1,iconName="account",image,...props})=>{let classTab=["thumbnail"];return size&&classTab.push(`is-${size}`),isOval&&classTab.push("is-oval"),isBordered&&classTab.push("is-bordered"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:classTab.join(" "),...props,children:[iconName&&!image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:image})]})};Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},isOval:{required:!1,tsType:{name:"Boolean"},description:"Make the avatar round",defaultValue:{value:"true",computed:!1}},isBordered:{required:!1,tsType:{name:"Boolean"},description:"Add a thin border on the outside of the avatar (useful when superposed)",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"Sizes",defaultValue:{value:'"lg"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"IconName",defaultValue:{value:'"account"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"Image URL"}}}}}]);