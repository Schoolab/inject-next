"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[7353],{"./src/stories/components/Forms/FormGroup.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Form",component:__webpack_require__("./src/app/components/forms/FormGroup.tsx").g,parameters:{layout:"padded",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{required:{control:"boolean"}},args:{required:!1}},Default={args:{id:"name",label:"Name",hint:"This is visible to participants on courses list.",placeholder:"A short name",required:!0}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "name",\n    label: "Name",\n    hint: "This is visible to participants on courses list.",\n    placeholder: "A short name",\n    required: true\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/app/components/forms/FormGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FormGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const FormGroup=({label,hint,id,defaultValue,required=!1,addClass,children,...props})=>{let classGroup=["form-group"],classLabel=[""];return required&&classLabel.push("required"),addClass&&classGroup.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classGroup.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:classLabel.join(" "),htmlFor:id,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"hint-"+id,className:"form-text text-muted",children:hint}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"invalid-feedback",children:"Please enter a message in the textarea."})]})};FormGroup.__docgenInfo={description:"Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.",methods:[],displayName:"FormGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:"Form Group Label"},hint:{required:!1,tsType:{name:"string"},description:"A short text to help users to complete the input"},id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"Is the input required?",defaultValue:{value:"false",computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}}}]);