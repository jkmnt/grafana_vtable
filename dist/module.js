define(["emotion","@grafana/ui","@grafana/data","react","@grafana/runtime","moment"],(function(e,n,t,r,o,l){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=6)}([function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n){e.exports=r},function(e,n){e.exports=o},function(e,n){e.exports=l},function(e,n,t){"use strict";t.r(n);var r=function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function o(e,n,t,r){return new(t||(t=Promise))((function(o,l){function i(e){try{s(r.next(e))}catch(e){l(e)}}function a(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}s((r=r.apply(e,n||[])).next())}))}function l(e,n){var t,r,o,l,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function a(l){return function(a){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,a])}}}function i(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i}function a(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(i(arguments[n]));return e}function s(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var u=t(3),c=t.n(u),d=t(2),f=t(1),p=t(5),g=t.n(p),m=t(0),b=t(4);function v(e,n,t){var r=Array(n).fill(t);if(!e||!e.length)return r;for(var o=0;o<n;o++){var l=e[o];l&&l>0&&(r[o]=l+"px")}return r}function h(e,n){var t,o;void 0===n&&(n={});var l=[],i=null!==(o=null===(t=e.find((function(e){return e.fields.length})))||void 0===t?void 0:t.fields[0].values.length)&&void 0!==o?o:0,s=0;e.forEach((function(e){var n;if(e.label){var t=r(r({},null===(n=e.label.props)||void 0===n?void 0:n.style),{"grid-column":"1 / span "+i,"justify-self":"start"});l.push(c.a.cloneElement(e.label,{style:t})),s+=1}e.fields.forEach((function(e){return l.push.apply(l,a(e.values))})),s+=e.fields.length}));var u=v(n.colws,i,"minmax(max-content, 1fr)"),d=v(n.rowhs,s,"max-content");return{style:{display:"grid","grid-template-columns":u.join(" "),"grid-template-rows":d.join(" ")},children:l}}function x(e,n){var t,o;void 0===n&&(n={});var l=[],i=e.find((function(e){return e.label})),s=null!==(o=null===(t=e.find((function(e){return e.fields.length})))||void 0===t?void 0:t.fields[0].values.length)&&void 0!==o?o:0;if(i){s+=1;var u=1;e.forEach((function(e){var n,t={"grid-row":"1 / 2","grid-column":u+" / span "+e.fields.length},o=e.label?c.a.cloneElement(e.label,{style:r(r({},null===(n=e.label.props)||void 0===n?void 0:n.style),t)}):c.a.createElement("div",{key:"__spacer."+u,style:t});l.push(o),u+=e.fields.length}))}var d=0;e.forEach((function(e){e.fields.forEach((function(e){l.push.apply(l,a(e.values))})),d+=e.fields.length}));var f=v(n.colws,d,"auto"),p=v(n.rowhs,s,"max-content");return{style:{display:"grid","grid-template-columns":f.join(" "),"grid-template-rows":p.join(" "),"grid-auto-flow":"column"},children:l}}function y(e,n){var t;return r(r(r(r(r({},_(n+"__field__name",e.field.name)),_(n+"__field__value",e.field.value)),_(n+"__field--dim__name",e.dimfield.name)),_(n+"__field--dim__value",e.dimfield.value)),((t={})[n+"__grouplabel"]=e.grouplabel,t[n+"__scrollbars"]=e.scrollbars,t))}function _(e,n){var t;return(t={})[e]=n,t[e+"--l"]=Object(m.css)(n,Object(m.css)(E||(E=s(["text-align: left;"],["text-align: left;"])))),t[e+"--r"]=Object(m.css)(n,Object(m.css)(z||(z=s(["text-align: right;"],["text-align: right;"])))),t[e+"--c"]=Object(m.css)(n,Object(m.css)(P||(P=s(["text-align: center;"],["text-align: center;"])))),t}function w(e){var n=j(e),t=n.cell,r=n.sticky,o=n.bborder,l=n.scrollbars;n.lborder,n.rborder;return{field:{name:Object(m.css)(t,r,o,Object(m.css)(I||(I=s(["\n                left: 0;\n                z-index: 2;\n                color: ",";"],["\n                left: 0;\n                z-index: 2;\n                color: ",";"])),e.dim)),value:Object(m.css)(t,o,Object(m.css)(K||(K=s(["\n                text-align: right;"],["\n                text-align: right;"]))))},dimfield:{name:Object(m.css)(t,r,o,Object(m.css)(N||(N=s(["\n                left: 0;\n                top: 0;\n                z-index: 3;\n\n                padding: 15px 16px 4px 16px;\n\n                color: ",";"],["\n                left: 0;\n                top: 0;\n                z-index: 3;\n\n                padding: 15px 16px 4px 16px;\n\n                color: ",";"])),e.dim)),value:Object(m.css)(t,r,o,Object(m.css)(B||(B=s(["\n                top: 0;\n                z-index: 1;\n\n                padding: 15px 16px 4px 16px;\n\n                color: ",";\n\n                text-align: right;"],["\n                top: 0;\n                z-index: 1;\n\n                padding: 15px 16px 4px 16px;\n\n                color: ",";\n\n                text-align: right;"])),e.hl))},grouplabel:Object(m.css)(r,Object(m.css)(F||(F=s(["\n            left: 0;\n            z-index: 2;\n\n            padding: 19px 4px 0px 4px;\n            color: ",";"],["\n            left: 0;\n            z-index: 2;\n\n            padding: 19px 4px 0px 4px;\n            color: ",";"])),e.hl)),scrollbars:l}}function j(e){return{cell:Object(m.css)(T||(T=s(["\n            padding: 9px 16px 9px 16px;\n            white-space: nowrap;"],["\n            padding: 9px 16px 9px 16px;\n            white-space: nowrap;"]))),bborder:Object(m.css)(V||(V=s(["\n            border-bottom: 1px solid ",";"],["\n            border-bottom: 1px solid ",";"])),e.border_bg),tborder:Object(m.css)(M||(M=s(["\n            border-top: 1px solid ",";"],["\n            border-top: 1px solid ",";"])),e.border_bg),rborder:Object(m.css)(D||(D=s(["\n            border-right: 1px solid ",";"],["\n            border-right: 1px solid ",";"])),e.border_bg),lborder:Object(m.css)(G||(G=s(["\n            border-left: 1px solid ",";"],["\n            border-left: 1px solid ",";"])),e.border_bg),sticky:Object(m.css)(H||(H=s(["\n            position: sticky;\n            background-color: ",";"],["\n            position: sticky;\n            background-color: ",";"])),e.sticky_bg),scrollbars:Object(m.css)(A||(A=s(["\n            ::-webkit-scrollbar {\n                height: revert;\n            }\n            ::-webkit-scrollbar-corner {\n                background-color: ",";\n            }"],["\n            ::-webkit-scrollbar {\n                height: revert;\n            }\n            ::-webkit-scrollbar-corner {\n                background-color: ",";\n            }"])),e.sticky_bg)}}function O(e){var n=j(e),t=n.cell,r=n.sticky,o=n.bborder,l=n.scrollbars,i=n.lborder,a=n.rborder;return{field:{name:Object(m.css)(t,r,o,Object(m.css)(R||(R=s(["\n                top: 0;\n                z-index: 1;\n\n                color: ",";\n\n                padding: 7px 16px 4px 16px;\n\n                text-align: right;\n                white-space: normal;"],["\n                top: 0;\n                z-index: 1;\n\n                color: ",";\n\n                padding: 7px 16px 4px 16px;\n\n                text-align: right;\n                white-space: normal;"])),e.hl)),value:Object(m.css)(t,o,Object(m.css)(L||(L=s(["\n                text-align: right;"],["\n                text-align: right;"]))))},dimfield:{name:Object(m.css)(t,r,o,Object(m.css)(U||(U=s(["\n                left: 0;\n                top: 0;\n                z-index: 3;\n\n                padding: 7px 16px 4px 16px;\n\n                color: ",";\n\n                text-align: right;\n                white-space: normal;"],["\n                left: 0;\n                top: 0;\n                z-index: 3;\n\n                padding: 7px 16px 4px 16px;\n\n                color: ",";\n\n                text-align: right;\n                white-space: normal;"])),e.hl)),value:Object(m.css)(t,r,o,Object(m.css)(W||(W=s(["\n                left: 0;\n                z-index: 2;\n\n                color: ",";\n                text-align: right;"],["\n                left: 0;\n                z-index: 2;\n\n                color: ",";\n                text-align: right;"])),e.dim))},grouplabel:Object(m.css)(t,r,i,a,Object(m.css)(q||(q=s(["\n            top: 0;\n            color: ",";\n\n            padding: 8px 4px 0px 4px;\n\n            text-align: center;\n\n            white-space: normal;"],["\n            top: 0;\n            color: ",";\n\n            padding: 8px 4px 0px 4px;\n\n            text-align: center;\n\n            white-space: normal;"])),e.hl)),scrollbars:l}}var S,k,C,E,z,P,I,K,N,B,F,T,V,M,D,G,H,A,R,L,U,W,q,J=(S=b.config.theme,k={dim:S.colors.textSemiWeak,hl:S.colors.textBlue,sticky_bg:S.colors.panelBg,border_bg:S.colors.border1},C=r(r({},k),{sticky_bg:S.colors.dashboardBg}),r(r(r(r({},y(w(k),"panel__grid")),y(O(k),"panel__grid--horizontal")),y(w(C),"panel--transparent__grid")),y(O(C),"panel--transparent__grid--horizontal")));function Q(e,n){return e&&e.length?function(e,n){var t=/\s*([r|c|l]?)\s*([0-9]*)\s*/,r=e.split(",").map((function(e){var n=e.match(t);return{a:n&&""!=n[1]?n[1]:void 0,w:n&&""!=n[2]?Number.parseInt(n[2]):0}})),o=r.length;o&&o<n&&(r.length=n,r.fill(r[o-1],o));return r}(e,n):[]}var X,Y,Z=c.a.createElement;function $(e,n,t,r){for(var o,l,i,a,s,u,c=t.df,p=t.formatter,g=t.order,m=Object(d.getFieldDisplayName)(e,c),b=null!==(o=e.display)&&void 0!==o?o:Object(d.getDisplayProcessor)({field:e}),v=n.show_common_unit&&e.type==d.FieldType.number?function(e){var n=e.config.mappings;e.config.mappings=void 0;var t=Object(d.getDisplayProcessor)({field:e})(1).suffix;return e.config.mappings=n,t&&t.length?t:void 0}(e):void 0,h=[Z("div",{key:e.name,className:r.nameclass},v?m+", "+v:m)],x=0;x<e.values.length;x++){var y=e.name+"."+x,_=e.values.get(g?g[x]:x);null==_&&(_=void 0);var w=b(_),j={raw:_,i:x,name:e.name,text:n.show_common_unit?w.text:""+(null!==(l=w.prefix)&&void 0!==l?l:"")+w.text+(null!==(i=w.suffix)&&void 0!==i?i:""),style:(s=null===(a=e.config.custom)||void 0===a?void 0:a.display_mode,u=w.color,u?"fg"==s?{color:u}:"bg"==s?{background:u,color:Object(f.getTextColorForBackground)(u)}:{}:{}),html:void 0};if(p)try{p(j,e,{})}catch(e){}var O=void 0;O=(null==j?void 0:j.html)?Z("div",{key:y,style:j.style,className:r.get_valueclass(x),dangerouslySetInnerHTML:{__html:j.html}}):Z("div",{key:y,style:j.style,className:r.get_valueclass(x)},j.text),h.push(O)}return{values:h}}function ee(e,n,t,r){var o=0;return e.map((function(e){var l="__group."+(null==e?void 0:e.name);return{label:e.name?Z("div",{key:l,className:t.style.grouplabel},e.name):void 0,fields:e.fields.map((function(l){return $(l,n,t,function(e,o){var l=t.style.get_fieldstyle(o);return n.is_horizontal?{nameclass:l.get_nameclass(r[e]),get_valueclass:function(n){return l.get_valueclass(r[e])}}:{nameclass:l.get_nameclass(r[0]),get_valueclass:function(e){return l.get_valueclass(r[e+1])}}}(o++,!!e.is_dim))}))}}))}function ne(e,n){var t=n.sort;if(t.field&&t.field.length){var r=e.find((function(e){return e.name==t.field}));if(r){var o=r.values.toArray().map((function(e,n){return{v:0==e&&t.zeronull?null:e,i:n}}));return r.type==d.FieldType.number?o.sort((function(e,n){return function(e,n,t,r){return null==e&&null==n?0:null==e?t?-1:1:null==n?t?1:-1:r?n-e:e-n}(e.v,n.v,t.nullfirst,t.desc)})):o.sort((function(e,n){return function(e,n,t,r){if(null==e&&null==n)return 0;if(null==e)return t?-1:1;if(null==n)return t?1:-1;if(r){if(e>n)return-1;if(e<n)return 1}else{if(e<n)return-1;if(e>n)return 1}return 0}(e.v,n.v,t.nullfirst,t.desc)})),o.map((function(e){return e.i}))}}}t.d(n,"plugin",(function(){return ie}));var te=[{kind:f.CodeEditorSuggestionItemKind.Field,label:"value"},{kind:f.CodeEditorSuggestionItemKind.Property,label:"value.text"},{kind:f.CodeEditorSuggestionItemKind.Property,label:"value.style"},{kind:f.CodeEditorSuggestionItemKind.Property,label:"value.html"},{kind:f.CodeEditorSuggestionItemKind.Constant,label:"value.raw"},{kind:f.CodeEditorSuggestionItemKind.Constant,label:"value.name"},{kind:f.CodeEditorSuggestionItemKind.Constant,label:"value.i"},{kind:f.CodeEditorSuggestionItemKind.Field,label:"field"},{kind:f.CodeEditorSuggestionItemKind.Constant,label:"field.name"},{kind:f.CodeEditorSuggestionItemKind.Field,label:"lib"},{kind:f.CodeEditorSuggestionItemKind.Property,label:"lib.moment"},{kind:f.CodeEditorSuggestionItemKind.Field,label:"context"},{kind:f.CodeEditorSuggestionItemKind.Constant,label:"context.df"}];function re(e){var n=e.value,t=e.onChange;return c.a.createElement(f.CodeEditor,{value:n,onBlur:t,onSave:t,language:"javascript",showMiniMap:!1,showLineNumbers:!0,getSuggestions:function(){return te},height:400})}var oe=function(e){return o(void 0,void 0,void 0,(function(){var n,t,r;return l(this,(function(o){return n=[{value:"",label:"─"}],e&&e.data&&e.data.length&&(t=e.data[0],r=[],t.fields.filter((function(e){return e.labels})).forEach((function(e){return Object.entries(e.labels).forEach((function(e){var n=i(e,2),t=n[0],o=n[1];null==t||null==o||r.includes(t)||r.push(t)}))})),r.forEach((function(e){return n.push({label:e,value:e})}))),[2,Promise.resolve(n)]}))}))},le=function(e){return o(void 0,void 0,void 0,(function(){var n,t;return l(this,(function(r){return n=[{value:"",label:"─"}],e&&e.data&&e.data.length&&(t=e.data[0]).fields.forEach((function(e){var r=Object(d.getFieldDisplayName)(e,t);n.push({label:r!=e.name?r+" ("+e.name+")":e.name,value:e.name})})),[2,Promise.resolve(n)]}))}))},ie=new d.PanelPlugin((function(e){var n,t,o=e.data,l=e.options,u=e.height,c=e.width,d=e.transparent;if(!(o.series&&o.series.length&&(null===(t=null===(n=o.series[0])||void 0===n?void 0:n.fields)||void 0===t?void 0:t.length)))return Z("div",null,"No data");var f,p=o.series[0],v=p.fields,y=function(e,n){var t="panel"+(n?"--transparent":"")+"__grid"+(e?"--horizontal":"");return{grouplabel:J[t+"__grouplabel"],scrollbars:J[t+"__scrollbars"],get_fieldstyle:function(e){var n=t+"__field"+(e?"--dim":"");return{get_nameclass:function(e){return J[n+"__name"+(e?"--"+e:"")]},get_valueclass:function(e){return J[n+"__value"+(e?"--"+e:"")]}}}}}(l.is_horizontal,d),_=function(e){var n;return Math.max(e.length,null!==(n=(null==e?void 0:e[0].values.length)+1)&&void 0!==n?n:1)}(v),w=Q(l.custom_columns,_);if(b.config.disableSanitizeHtml&&l.use_formatcode&&l.formatcode)try{var j=Function("value","field","context","lib",l.formatcode);f=function(e,n,t){return j(e,n,r({df:p},t),{moment:g.a})}}catch(e){}var O={formatter:f,df:p,style:y,order:ne(v,l)},S=ee(function(e,n,t){var r,o=[];if(n&&n.length){var l=e.find((function(e){return e.name==n}));l&&(o.push({fields:[l],is_dim:!0}),e=e.filter((function(e){return e!=l})))}if(t&&t.length){var s=new Map;s.set(void 0,[]),e.forEach((function(e){var n,r,o=null===(n=null==e?void 0:e.labels)||void 0===n?void 0:n[t];s.has(o)||s.set(o,[]),null===(r=s.get(o))||void 0===r||r.push(e)})),(null===(r=s.get(void 0))||void 0===r?void 0:r.length)||s.delete(void 0),o.push.apply(o,a(a(s).map((function(e){var n=i(e,2);return{name:n[0],fields:n[1]}}))))}else o.push({fields:e});return o}(v,l.dimension_field,l.group_by_label),l,O,w.map((function(e){return e.a}))),k=(l.is_horizontal?x:h)(S,{colws:w.length?w.map((function(e){return e.w})):void 0});return Z("div",{style:{width:c,height:u},className:Object(m.css)(X||(X=s(["\n        display: flex;\n        flex-direction: column;\n      "],["\n        display: flex;\n        flex-direction: column;\n      "])))},Z("div",r({className:Object(m.css)(Object(m.css)(Y||(Y=s(["\n          overflow: auto;\n        "],["\n          overflow: auto;\n        "]))),y.scrollbars)},k)))}));ie.setPanelOptions((function(e){e.addSelect({path:"dimension_field",name:"Dimension field name",settings:{allowCustomValue:!0,options:[],getOptions:le},defaultValue:""}).addBooleanSwitch({path:"is_horizontal",name:"Horizontal layout ",defaultValue:!1}).addBooleanSwitch({path:"show_common_unit",name:"Show common unit",defaultValue:!0}).addSelect({path:"group_by_label",name:"Group by label",settings:{allowCustomValue:!0,options:[],getOptions:oe},defaultValue:""}).addTextInput({path:"custom_columns",name:"Custom column widths and text alignments",description:"Comma-separated format string: r100, c200, l300, etc"}).addSelect({path:"sort.field",name:"By field",settings:{allowCustomValue:!0,options:[],getOptions:le},defaultValue:"",category:["Sort"]}).addBooleanSwitch({path:"sort.desc",name:"Descending",category:["Sort"]}).addBooleanSwitch({path:"sort.zeronull",name:"Treat zeros as nulls",category:["Sort"]}).addBooleanSwitch({path:"sort.nullfirst",name:"Nulls go first",category:["Sort"]}).addBooleanSwitch({path:"use_formatcode",name:"Use formatting code (DANGER!)",description:b.config.disableSanitizeHtml?"":"Feature is disabled. Set disable_sanitize_html = false in Grafana config to activate it.",category:["Custom formatting"],defaultValue:!1}).addCustomEditor({id:"formatcode",path:"formatcode",name:"Code",showIf:function(e){return e.use_formatcode&&b.config.disableSanitizeHtml},category:["Custom formatting"],editor:re,defaultValue:"\n/*\n    This code would be called for formatting each value.\n    The object 'value' is in scope for modification.\n\n    Set the text:\n      value.text = 'foo'\n    Set the style:\n      value.style = {'color': 'red', 'border': '1px solid'}\n    Render as html instead of text:\n      value.html = '<a href=\"http://www.grafana.com\">Go to base</a>'\n    Get raw (numeric) value:\n      let a = value.raw\n\n    Extra objects are in scope to help the formatting:\n      field: dataframe field of this value. The field.name is most useful here.\n      context.df: whole dataframe\n      lib.moment: moment.js library, handy for the datetimes.\n*/\n\nvalue.text = field.name + ':' + value.raw\nvalue.style = {'color': 'red'}"})})),ie.useFieldConfig({useCustomConfig:function(e){e.addRadio({path:"display_mode",name:"Cell display mode",settings:{options:[{value:"auto",label:"Auto"},{value:"fg",label:"Color text"},{value:"bg",label:"Color background"}]},defaultValue:"auto"})}})}])}));
//# sourceMappingURL=module.js.map