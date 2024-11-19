"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2266],{"./src/stories/pages/sections/SectionNumbers.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SectionNumbers_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),purify_es=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.es.mjs"));const SectionNumbers=({title="",subtitle="",content="",columns,addClass,style,...props})=>{let classSection=["landing-section"];addClass&&classSection.push(addClass);purify_es.A.sanitize(content);let listColumns=null==columns?void 0:columns.map((column=>(0,jsx_runtime.jsxs)("div",{className:"cq-xs-6 cq-md-3 d-flex flex-column gap-2xs",children:[(0,jsx_runtime.jsx)("p",{className:"display-2",children:column.label}),(0,jsx_runtime.jsx)("p",{className:"small text-muted",children:column.caption})]})));return(0,jsx_runtime.jsx)("section",{className:classSection.join(" "),style,...props,children:(0,jsx_runtime.jsx)("div",{className:"container-xl",children:(0,jsx_runtime.jsxs)("div",{className:"cq row-gap-3xl",children:[(0,jsx_runtime.jsx)("div",{className:"cq-12 cq-md-5 cq-lg-4 cq-offset-lg-1",children:(0,jsx_runtime.jsx)("div",{className:"d-flex flex-column gap-xs",children:(0,jsx_runtime.jsx)("h2",{className:"display-2",children:"Our programs to support your transformation"})})}),(0,jsx_runtime.jsx)("div",{className:"cq-12 cq-md-6 cq-lg-5 cq-offset-md-1 d-flex flex-column gap-2xl",children:columns&&(0,jsx_runtime.jsx)("div",{className:"cq-12",children:(0,jsx_runtime.jsx)("div",{className:"cq row-gap-md",children:listColumns})})})]})})})};SectionNumbers.__docgenInfo={description:"",methods:[],displayName:"SectionNumbers",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},content:{required:!1,tsType:{name:"string"},description:""},columns:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label?: string;\n    caption?: string;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"caption",value:{name:"string",required:!1}}]}}],raw:"ColumnType[]"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    type?: "primary" | "default";\n    label?: string;\n    link?: string;\n}',signature:{properties:[{key:"type",value:{name:"union",raw:'"primary" | "default"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}],required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}}]}}],raw:"ButtonType[]"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const SectionNumbers_stories={title:"Pages/Sections/Numbers",component:SectionNumbers,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{},args:{title:"Our programs to support your transformation",columns:[{label:"20 years",caption:"of experience in design thinking and lean startup"},{label:"700+",caption:"accelerated startups"},{label:"30,000+",caption:"people who have used our digital platform"},{label:"250+",caption:"corporate innovation projects initiated and accelerated"}]}},Default={args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}}}}]);