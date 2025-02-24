"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[5321],{"./src/app/components/filters/FilterDateRange.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DateRange:()=>DateRange,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Filters/DateRange",component:__webpack_require__("./src/app/components/filters/FilterDateRange.tsx").Q,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}}},DateRange={},__namedExportsOrder=["DateRange"];DateRange.parameters={...DateRange.parameters,docs:{...DateRange.parameters?.docs,source:{originalSource:"{}",...DateRange.parameters?.docs?.source}}}},"./public/utils/tooltips.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>tooltips});const tooltips=()=>{$((function(){$('[data-toggle="tooltip"]').tooltip({trigger:"hover"});var tooltips=$('[data-toggle="tooltip"]');function disableTooltipInMobile(){tooltips.tooltip("enable"),window.matchMedia("(max-width: 991.98px)").matches&&tooltips.tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded a").tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded div").tooltip("disable")}tooltips.tooltip(),disableTooltipInMobile(),$(window).resize((function(){disableTooltipInMobile()}))}))}},"./src/app/components/filters/FilterDateRange.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>FilterDateRange});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");var tooltips=__webpack_require__("./public/utils/tooltips.js");const FilterDateRange=({})=>((0,react.useEffect)((()=>{$((function(){var langFr={format:"DD/MM/YYYY",separator:" - ",applyLabel:"Appliquer",cancelLabel:"Annuler",fromLabel:"De",toLabel:"à",customRangeLabel:"Personnalisé",weekLabel:"S",daysOfWeek:["Dim","lun","Mar","Mer","Jeu","Ven","Sam"],monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Decembre"],firstDay:1},rangesFr=(moment().startOf("day"),moment().endOf("day"),moment().startOf("year"),moment().endOf("year"),moment().subtract(6,"month").startOf("month"),moment().endOf("month"),moment().subtract(3,"month").startOf("month"),moment().endOf("month"),moment().startOf("month"),moment().endOf("month"),{Global:[moment().startOf("day"),moment().endOf("day")],"Année en cours":[moment().startOf("year"),moment().endOf("year")],"6 derniers mois":[moment().subtract(6,"month").startOf("month"),moment().endOf("month")],"3 derniers mois":[moment().subtract(3,"month").startOf("month"),moment().endOf("month")],"Mois en cours":[moment().startOf("month"),moment().endOf("month")]});$(".reportrange").daterangepicker({locale:langFr,buttonClasses:"btn",ranges:rangesFr,opens:"left"}),$(".reportrange").on("apply.daterangepicker",(function(ev,picker){console.log(picker.chosenLabel),"Overall"==picker.chosenLabel||"Global"==picker.chosenLabel?$(".reportrange input").val("Overall"):($(".reportrange input[name='startDate']").val(picker.startDate.format(langFr.format)),$(".reportrange input[name='endDate']").val(picker.endDate.format(langFr.format))),console.log($(".reportrange input").val())}))})),(0,tooltips.v)()}),[]),(0,jsx_runtime.jsxs)("div",{className:"btn btn-lg btn-default custom-select small text-nowrap reportrange",children:[(0,jsx_runtime.jsx)("i",{className:"icon icon-calendar"}),(0,jsx_runtime.jsx)("input",{type:"hidden",name:"startDate",value:""}),(0,jsx_runtime.jsx)("input",{type:"hidden",name:"endDate",value:""})]}));FilterDateRange.__docgenInfo={description:"",methods:[],displayName:"FilterDateRange"}}}]);