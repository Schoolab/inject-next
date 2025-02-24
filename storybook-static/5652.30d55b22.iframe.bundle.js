"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5652],{"./public/utils/select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>select});const select=()=>{$((function(){$(".form-group select:not(.custom-select-tags):not(.filterSelect)").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)").selectpicker({width:"100%",noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.table-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-transparent",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.card-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-link card-filter",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.dropdown-card").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-card",iconBase:"icon",showTick:!1}),$("select.select-with-search").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check",noneResultsText:"No results for “{0}”…",liveSearch:!0,liveSearchPlaceholder:"Search…",liveSearchNormalize:!0,virtualScroll:"400"}),$("select.custom-select-tags").selectize({delimiter:",",persist:!1,maxItems:null,valueField:"id",labelField:"name",searchField:"name",create:!0,plugins:["remove_button","clear_button"],render:{item:function(item,escape){return'<div class="badge badge-pill"><span>'+escape(item.name)+"</span></div>"}},create:function(input){return{value:input,text:input}}})}))}},"./src/app/components/avatars/Sdg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Sdg});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Sdg=({number,size="40px",addClass,style,...props})=>{let classTab=["icon","icon--sdg"];return number&&classTab.push(`is-sdg-${number}`),size&&classTab.push(`is-${size}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"aria-hidden":"true",className:classTab.join(" "),style,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:number})})};Sdg.__docgenInfo={description:"",methods:[],displayName:"Sdg",props:{number:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"16px" | "24px" | "40px"',elements:[{name:"literal",value:'"16px"'},{name:"literal",value:'"24px"'},{name:"literal",value:'"40px"'}]},description:"",defaultValue:{value:'"40px"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},dataToggle:{required:!1,tsType:{name:"string"},description:""},dataPlacement:{required:!1,tsType:{name:"string"},description:""},dataOriginalTitle:{required:!1,tsType:{name:"string"},description:""},dataBoundary:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/items/parts/ItemForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ItemForm});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_lang_switch_LangSwitch__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/lang-switch/LangSwitch.tsx")),_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/forms/FormGroup.tsx"),_app_forms_FormInput__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/forms/FormInput.tsx"),_app_forms_FormOption__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/forms/FormOption.tsx"),_app_forms_FormSelect__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/app/forms/FormSelect.tsx"),_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/components/buttons/Button.tsx"),_app_forms_FormOptions__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/app/forms/FormOptions.tsx");const ItemForm=({addClass,style,...props})=>{let classTab=["d-flex flex-column gap-md"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),style,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_lang_switch_LangSwitch__WEBPACK_IMPORTED_MODULE_2__.T,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"question_label",label:"Question",required:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormInput__WEBPACK_IMPORTED_MODULE_4__.Z,{id:"question_label",required:!0,defaultValue:"",placeholder:"Your question here…"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex gap-xs mt-4px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormOption__WEBPACK_IMPORTED_MODULE_5__._,{id:"required",type:"checkbox",label:"Required question",defaultChecked:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormOption__WEBPACK_IMPORTED_MODULE_5__._,{id:"private",type:"checkbox",label:"Private response"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"hint",label:"Hint text",hint:"This is a text to help participants to understand how to fill the field.",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormInput__WEBPACK_IMPORTED_MODULE_4__.Z,{id:"hint",defaultValue:"",placeholder:"e.g. What is you school name?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"type",label:"Type",required:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormSelect__WEBPACK_IMPORTED_MODULE_6__.F,{id:"type",defaultValue:"",options:[{label:"Short text",value:"short",selected:!0},{label:"Long text",value:"long"},{label:"Unique choice (select)",value:"unique-select"},{label:"Unique choice (radio)",value:"unique-radio"},{label:"Multiple choices",value:"multiple"},{label:"Checklist",value:"checklist"},{label:"Resources",value:"resources"},{label:"Links",value:"links"},{label:"Rating",value:"rating"},{label:"NPS",value:"nps"}]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"preview",label:"Preview",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bg-white border rounded d-flex flex-column justify-content-center align-items-center p-48px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"exemple",label:"Question Label",hint:"Hint text",required:!0,addClass:"w-100",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormInput__WEBPACK_IMPORTED_MODULE_4__.Z,{id:"exemple",required:!0,defaultValue:"",placeholder:"Your response here…"})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"choices",label:"Choices",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormOptions__WEBPACK_IMPORTED_MODULE_8__.L,{id:"choices",placeholders:"Option value here...",deletable:!0,options:[{id:"option1",label:"Option #1",value:"Option #1"},{id:"option2",label:"Option #2",value:"Option #2"},{id:"option3",label:"Option #3"}]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"text_max_length",label:"Text max length",hint:"Leave empty for no limit",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormInput__WEBPACK_IMPORTED_MODULE_4__.Z,{id:"text_max_length",defaultValue:"",placeholder:"e.g. 100",type:"number"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"text_type_verification",label:"Text type verification",hint:"Choose what type of content you want in responses",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormSelect__WEBPACK_IMPORTED_MODULE_6__.F,{id:"text_type_verification",defaultValue:"",options:[{label:"No verification",value:"none"},{label:"Texts",value:"texts",options:[{label:"Text",value:"text"},{label:"Email",value:"email"},{label:"URL",value:"url"}]},{label:"Numbers",value:"numbers",options:[{label:"Phone",value:"tel"},{label:"Number",value:"number"}]},{label:"Dates",value:"dates",options:[{label:"Date",value:"date"},{label:"Time",value:"time"},{label:"DateTime",value:"datetime"},{label:"Month",value:"month"},{label:"Week",value:"week"}]}]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"integrations",label:"Integrations",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex flex-column flex-lg-row gap-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormOption__WEBPACK_IMPORTED_MODULE_5__._,{id:"show_csv",type:"checkbox",label:"Show in CSV exports",defaultChecked:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormOption__WEBPACK_IMPORTED_MODULE_5__._,{id:"show_insights",type:"checkbox",label:"Show in Insights",defaultChecked:!0})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"insights_chart_type",label:"Insights chart type",required:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormSelect__WEBPACK_IMPORTED_MODULE_6__.F,{id:"insights_chart_type",defaultValue:"",options:[{label:"Pie chart",value:"pie",selected:!0},{label:"Bar chart",value:"bar"},{label:"Radar chart",value:"radar"},{label:"Average value",value:"average"},{label:"Total value",value:"total"}]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_forms_FormGroup__WEBPACK_IMPORTED_MODULE_3__.g,{id:"condition",label:"Condition",hint:"You can add only one condition on a question.",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_7__.$,{type:"default",iconStartName:"plus-circle",label:"Add condition",extended:!0})})]})};ItemForm.__docgenInfo={description:"",methods:[],displayName:"ItemForm",props:{addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./src/app/components/lang-switch/LangSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>LangSwitch});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/icons/Icon.tsx")),_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/buttons/Button.tsx");const LangSwitch=({label="Edit for each language",addClass})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:["d-flex align-items-center gap-xs",addClass].join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"translate",addClass:"text-muted"}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"small text-muted d-none d-md-flex",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"btn-group btn-group-toggle btn-filter-radios",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__.$,{label:"English",type:"default",size:"sm",isActive:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__.$,{label:"French – Français",type:"default",size:"sm"})]})]});LangSwitch.__docgenInfo={description:"",methods:[],displayName:"LangSwitch",props:{label:{required:!1,tsType:{name:"string"},description:"Label",defaultValue:{value:'"Edit for each language"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Add class"}}}},"./src/app/forms/FormOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>FormOption});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/icons/Icon.tsx")),_app_components_avatars_Sdg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/avatars/Sdg.tsx");const FormOption=({type,hideControl,id,name="option",label,caption,image,icon,sdg,value,checked,defaultChecked,disabled,card,addClass,labelClass,onChange,...props})=>{let classTab=["custom-control"];"checkbox"===type&&classTab.push("custom-checkbox"),"radio"===type&&classTab.push("custom-radio"),"switch"===type&&classTab.push("custom-switch"),card&&classTab.push("custom-control-card"),hideControl&&classTab.push("custom-control-hidden"),addClass&&classTab.push(addClass);let labelClassTab=["custom-control-label text-nowrap d-flex column-gap-xs"];return labelClass&&labelClassTab.push(labelClass),image&&labelClassTab.push("flex-column gap-xs"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"radio"!==type?"checkbox":"radio",id:"option-"+id,name,className:"custom-control-input",defaultValue:value,defaultChecked,disabled,checked,onChange:()=>onChange&&onChange(!checked)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:labelClassTab.join(" "),htmlFor:"option-"+id,"aria-describedby":"caption-"+id,children:[image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("picture",{className:"border rounded-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{role:"presentation",src:image,alt:label})}),icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"sm"}),sdg&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_avatars_Sdg__WEBPACK_IMPORTED_MODULE_3__.p,{number:sdg,size:"24px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"caption-"+id,className:"form-text text-muted",children:caption})]})};FormOption.__docgenInfo={description:"",methods:[],displayName:"FormOption",props:{type:{required:!0,tsType:{name:"union",raw:'"checkbox" | "radio" | "switch"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"radio"'},{name:"literal",value:'"switch"'}]},description:""},hideControl:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"option"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},image:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},sdg:{required:!1,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},card:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},labelClass:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}}},"./src/app/forms/FormSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>FormSelect});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelect=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>option.options?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("optgroup",{label:option.label,children:option.options.map(((subOption,subIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:subOption.value,disabled:subOption.disabled,selected:subOption.selected,children:subOption.label},subIndex)))},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,className:"form-control custom-select",children:listOptions})};FormSelect.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n    options?: OptionType[];\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"OptionType"}],raw:"OptionType[]",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}}}]);