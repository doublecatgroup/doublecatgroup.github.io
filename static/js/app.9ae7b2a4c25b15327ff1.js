webpackJsonp([1],{"4r8w":function(e,t){},"7lGg":function(e,t){},J7DT:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("center",[t("a",{attrs:{href:"/"}},[t("img",{attrs:{src:"/static/logo.png",height:"200",width:"200"}})])]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(e){n("aL5J")},null,null).exports,a=n("/ocq"),s=n("mw3O"),u=n.n(s),l=n("Gu7T"),c=n.n(l),m=n("woOf"),p=n.n(m),d=n("fZjL"),v=n.n(d),f=n("ivXw");function h(e){return f.path(e,this.$route.query)}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];y.call(this,f.assocPath(e,t),n)}function _(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];y.call(this,f.dissocPath(e),t)}function y(e,t){var n=e(this.$route.query);(t?this.$router.replace:this.$router.push).call(this.$router,{query:n})}var w={beforeCreate:function(){var e={qget:h,qset:g,qdel:_};this.$options.methods=f.merge(this.$options.methods||{},e)}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Order Confirmation")]),e._v(" "),n("table",{staticClass:"confirmation"},[e._m(0),e._v(" "),e._l(e.items,function(t,i){return[n("tr",{key:i},[n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v("curtains")]),e._v(" "),n("td",[e._v(" "+e._s(t.width)+" x "+e._s(t.drop)+" ")]),e._v(" "),n("td",{staticClass:"total"},[e._v(e._s(t.curtainsTotal.toFixed(2)))])]),e._v(" "),"none"!=t.fixation.key?n("tr",{key:i+"-fixation"},[n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(" "+e._s(t.fixation.key)+" ")]),e._v(" "),n("td",[e._v(" "+e._s(t.width)+" ")]),e._v(" "),n("td",{staticClass:"total"},[e._v(e._s(t.fixationTotal.toFixed(2)))])]):e._e()]}),e._v(" "),n("tr",[n("th",{attrs:{colspan:"3"}},[e._v("Total")]),e._v(" "),n("th",{staticClass:"total"},[e._v(" "+e._s(e.total.toFixed(2))+" ")])])],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",[this._v("Window")]),this._v(" "),t("th",[this._v("Item")]),this._v(" "),t("th",[this._v("Size (cm)")]),this._v(" "),t("th",[this._v("Price (SGD)")])])}]};var x=n("VU/8")({props:["items","total"]},b,!1,function(e){n("x+S3")},null,null).exports,k=n("Dd8w"),N=n.n(k),P=n("aFK5"),$=n.n(P),I=function(){function e(e){this.fixation={key:"none",price:0,mounting:"ceiling"},this.width=240,this.drop=230,this.fabric={key:"custom",design:"custom",price:26},this.heading="doublePleat",this.ratio=2,this.remarks="",this.name=e}return Object.defineProperty(e.prototype,"materialUsage",{get:function(){return this.width*this.ratio/100},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fixationTotal",{get:function(){return this.width/100*this.fixation.price},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"curtainsTotal",{get:function(){return this.materialUsage*this.fabric.price},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"total",{get:function(){return this.fixationTotal+this.curtainsTotal},enumerable:!0,configurable:!0}),e}(),T={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],class:e.original&&e.input!=e.original?"modified":"",domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})},staticRenderFns:[]};var U=n("VU/8")({props:["value","original"],computed:{input:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},T,!1,function(e){n("RXa9")},null,null).exports,F=n("ivXw"),C={none:{name:"None",price:0},track:{name:"Track",price:10},rod:{name:"Rod",price:26}},A={ceiling:"Ceiling",wall:"Wall"},R={components:{ShowModificationsInput:U},props:["value"],data:function(){return{fixations:C,mountings:A}},computed:{key:{get:function(){return this.value.key},set:function(e){this.$emit("input",F.merge(this.value,{key:e,price:this.fixations[e].price}))}},price:{get:function(){return this.value.price},set:function(e){this.$emit("input",F.assoc("price",e,this.value))}},mounting:{get:function(){return this.value.mounting},set:function(e){this.$emit("input",F.assoc("mounting",e,this.value))}}}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.key=t.target.multiple?n:n[0]}}},e._l(e.fixations,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(t.name))])})),e._v(" "),"none"!=e.key?[n("show-modifications-input",{attrs:{placeholder:"price",type:"number",step:"any",original:e.fixations[e.value.key].price},model:{value:e.price,callback:function(t){e.price=e._n(t)},expression:"price"}}),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.mounting,expression:"mounting"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.mounting=t.target.multiple?n:n[0]}}},e._l(e.mountings,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(t))])}))]:e._e()],2)},staticRenderFns:[]},q=n("VU/8")(R,V,!1,null,null,null).exports,D=n("ivXw"),E=n("0XFg").sprintf;function O(e,t){return{key:e,name:t.name,price:t.price,designs:D.mapObjIndexed(function(e,n,i){var r=D.merge({key:n},e);return{name:E(t.designNameTemplate,r),value:{design:n,no:E(t.designNoTemplate,r),color:e.color}}},t.designs)}}var j=D.mapObjIndexed(function(e,t,n){return O(t,e)},{custom:{name:"-",designNameTemplate:"-",designNoTemplate:"",designs:{custom:{price:26}}},bolove:{name:"BoLove",price:26,designNameTemplate:"P%(key)s",designNoTemplate:"TH305-%(key)02d",designs:{18:{color:"blue"},19:{color:"grey"},21:{color:"red"},22:{color:"purple"}}},chenille:{name:"Chenille",price:30,designNameTemplate:"%(key)s",designNoTemplate:"018-%(key)s",designs:{12:{color:"brown"},19:{color:"red"},23:{color:"green"}}}}),K={mkFabric:O,components:{ShowModificationsInput:U},props:["value"],data:function(){return{fabrics:j}},computed:{fabricKey:{get:function(){return this.value.key},set:function(e){var t=this.fabrics[e],n=D.keys(t.designs)[0],i=t.designs[n];this.$emit("input",D.merge(i.value,{key:e,price:t.price}))}},designKey:{get:function(){return this.value.design},set:function(e){var t=this.designs[e];this.$emit("input",D.merge(this.value,t.value))}},color:{get:function(){return this.value.color},set:function(e){this.$emit("input",D.assoc("color",e,this.value))}},no:{get:function(){return this.value.no},set:function(e){this.$emit("input",D.assoc("no",e,this.value))}},price:{get:function(){return this.value.price},set:function(e){this.$emit("input",D.assoc("price",e,this.value))}},fabric:function(){return this.fabrics[this.value.key]},designs:function(){return this.fabric.designs},design:function(){return this.designs[this.value.design]}}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.fabricKey,expression:"fabricKey"}],attrs:{name:"fabric"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.fabricKey=t.target.multiple?n:n[0]}}},e._l(e.fabrics,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(t.name))])})),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.designKey,expression:"designKey"}],attrs:{name:"design"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.designKey=t.target.multiple?n:n[0]}}},e._l(e.designs,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(t.name))])})),e._v(" "),"custom"!==e.designKey?n("img",{staticClass:"design",attrs:{src:"/static/"+e.value.key+"/"+e.value.design+".png",height:"64",width:"64"}}):e._e(),e._v(" "),n("show-modifications-input",{attrs:{placeholder:"color",original:e.design.value.color},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}),e._v(" "),n("show-modifications-input",{attrs:{placeholder:"no",original:e.design.value.no},model:{value:e.no,callback:function(t){e.no=t},expression:"no"}}),e._v(" "),n("label",[e._v("priceS$: "),n("show-modifications-input",{attrs:{placeholder:"price",type:"number",step:"any",original:e.fabric.price},model:{value:e.price,callback:function(t){e.price=e._n(t)},expression:"price"}})],1)],1)},staticRenderFns:[]};var X=n("VU/8")(K,S,!1,function(e){n("J7DT")},null,null).exports,B={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.valueByUnit,expression:"valueByUnit"}],attrs:{type:"number",step:"any"},domProps:{value:e.valueByUnit},on:{input:function(t){t.target.composing||(e.valueByUnit=t.target.value)}}})},staticRenderFns:[]},M=n("VU/8")({props:["value","unit"],computed:{valueByUnit:{get:function(){return this.value/this.unit.multiplier},set:function(e){this.$emit("input",e*this.unit.multiplier)}}}},B,!1,null,null,null).exports,J=n("ivXw"),z=$()(new I),G={deepPleat:{cn:"四脚勾",en:"Deep Pleat"},doublePleat:{cn:"韩折",en:"Double Pleat"},eylet:{cn:"打孔",en:"Eyelet"},tabTop:{cn:"吊带",en:"Tab Top"},rodPocket:{cn:"穿杆",en:"Rod Pocket"}},L=[{name:"window窗口",value:function(){return this.name}},{name:"fabric布料",value:function(){return this.fabric.key}},{name:"design色号",value:function(){return this.fabric.no}},{name:"color颜色",value:function(){return this.fabric.color}},{name:"width宽",value:function(){return this.width/100}},{name:"height高",value:function(){return this.drop/100}},{name:"ratio折率",value:function(){return this.ratio}},{name:"heading加工",value:function(){var e=this.headings[this.heading];return e.cn+" ("+e.en+")"}},{name:"material usage用料",value:function(){return this.windowItem.materialUsage}},{name:"remarks备注",value:function(){return this.windowItem.remarks}}],W={components:{InputByUnit:M,Fixation:q,Fabric:X},exportedData:L,props:["path","unit","exportView","value"],data:function(){return{headings:G}},computed:N()({},J.map(function(e){return{get:function(){return this.windowItem[e]},set:function(t){this.$emit("input",J.assoc(e,t,this.value))}}},J.zipObj(z,z)),{windowItem:function(){return p()(new I,this.value)},exportedData:function(){var e=this;return J.map(function(t){return{name:t.name,value:t.value.call(e)}},L)}})},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.exportView?n("tr",e._l(e.exportedData,function(t){return n("td",{key:t.name},[e._v(e._s(t.value))])})):n("li",{staticClass:"item",attrs:{id:e.path.join("-")}},[n("fieldset",[n("legend",[e._v("window")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"window-name",attrs:{autocapitalize:"none"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("label",[e._v("width:\n      "),n("input-by-unit",{attrs:{unit:e.unit,placeholder:"width"},model:{value:e.width,callback:function(t){e.width=e._n(t)},expression:"width"}})],1)]),e._v(" "),n("fieldset",[n("legend",[e._v("fixation")]),e._v(" "),n("fixation",{model:{value:e.fixation,callback:function(t){e.fixation=t},expression:"fixation"}})],1),e._v(" "),n("fieldset",[n("legend",[e._v("fabric")]),e._v(" "),n("fabric",{model:{value:e.fabric,callback:function(t){e.fabric=t},expression:"fabric"}})],1),e._v(" "),n("fieldset",[n("legend",[e._v("tailoring")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.heading,expression:"heading"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.heading=t.target.multiple?n:n[0]}}},e._l(e.headings,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(t.en))])})),e._v(" "),n("label",[e._v("drop:\n      "),n("input-by-unit",{attrs:{unit:e.unit,placeholder:"drop"},model:{value:e.drop,callback:function(t){e.drop=e._n(t)},expression:"drop"}})],1),e._v(" "),n("label",[e._v("ratio:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.ratio,expression:"ratio",modifiers:{number:!0}}],attrs:{type:"number",step:"0.1",placeholder:"ratio"},domProps:{value:e.ratio},on:{input:function(t){t.target.composing||(e.ratio=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),n("fieldset",[n("legend",[e._v("remarks")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.remarks,expression:"remarks"}],staticClass:"remarks",domProps:{value:e.remarks},on:{input:function(t){t.target.composing||(e.remarks=t.target.value)}}})]),e._v(" "),n("fieldset",[n("legend",[e._v("Total(S$)")]),e._v(" "),n("input",{attrs:{placeholder:"total",readonly:""},domProps:{value:e.windowItem.total.toFixed(2)}}),e._v(" "),n("button",{attrs:{name:"remove"},on:{click:function(t){e.$emit("remove")}}},[e._v("Remove")])])])},staticRenderFns:[]};var Q=n("VU/8")(W,H,!1,function(e){n("7lGg")},null,null).exports,Z=n("ivXw"),Y={components:{WindowView:Q,Confirmation:x},mixins:[w],data:function(){return{newItemName:"",units:{m:100,cm:1,inch:2.54},unitName:"cm",debug:!1,exportedData:L}},computed:{mode:{get:function(){return this.qget(["mode"])||"edit"},set:function(e){return this.qset(["mode"],e)}},isEditMode:function(){return"edit"===this.mode},hasItems:function(){return 0!==v()(this.items).length},items:function(){return this.qget(["item"])||{}},windowItems:function(){return Z.map(function(e){return p()(new I,e)},this.items)},total:function(){return Z.sum(Z.pluck("total",Z.values(this.windowItems)))},unit:function(){return{name:this.unitName,multiplier:this.units[this.unitName]}}},methods:{storeItem:function(e,t){this.qset(["item"],Z.assoc(e,t,this.items))},removeItem:function(e){this.qdel(["item",e])},newItem:function(){var e=(Math.max.apply(Math,[0].concat(c()(Z.keys(this.items))))+1).toString();this.storeItem(e,{name:this.newItemName}),this.newItemName=""}}},ee={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isEditMode?n("div",[n("ol",{staticClass:"items"},[e._l(e.items,function(t,i){return n("window-view",{key:i,attrs:{value:t,path:["item",i],unit:e.unit,exportView:!1},on:{input:function(t){e.storeItem(i,t)},remove:function(t){e.removeItem(i)}}})}),e._v(" "),n("li",[n("form",{on:{submit:function(t){return t.preventDefault(),e.newItem(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newItemName,expression:"newItemName",modifiers:{trim:!0}}],staticClass:"window-name",attrs:{id:"new-item-name",autocapitalize:"none"},domProps:{value:e.newItemName},on:{input:function(t){t.target.composing||(e.newItemName=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("button",{attrs:{id:"new-item"}},[e._v("Add")])])])],2),e._v(" "),e.hasItems?n("div",{staticClass:"grand-total"},[e._v("\n    total: "),n("input",{attrs:{placeholder:"total",readonly:""},domProps:{value:e.total.toFixed(2)}})]):e._e(),e._v(" "),n("center",{staticClass:"controls"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.unitName,expression:"unitName"}],attrs:{id:"select-unit"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.unitName=t.target.multiple?n:n[0]}}},e._l(e.units,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(i))])})),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.debug,expression:"debug"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.debug=t.target.multiple?n:n[0]}}},[n("option",{key:!1,domProps:{value:!1}},[e._v("normal")]),e._v(" "),n("option",{key:!0,domProps:{value:!0}},[e._v("debug")])]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.mode=t.target.multiple?n:n[0]}}},[n("option",{key:"edit",domProps:{value:"edit"}},[e._v("edit")]),e._v(" "),n("option",{key:"confirmation",domProps:{value:"confirmation"}},[e._v("confirmation")])])]),e._v(" "),n("div",{style:e.debug?"":"display: none"},[n("table",[n("tr",e._l(e.exportedData,function(t){return n("th",{key:t.name},[e._v(e._s(t.name))])})),e._v(" "),e._l(e.items,function(t,i){return n("window-view",{key:i,attrs:{value:t,path:["item",i],unit:e.unit,exportView:!0},on:{input:function(t){e.storeItem(i,t)}}})})],2)])],1):n("confirmation",{attrs:{items:e.windowItems,total:e.total}})},staticRenderFns:[]};var te=n("VU/8")(Y,ee,!1,function(e){n("4r8w")},null,null).exports;i.a.use(a.a);var ne=new a.a({parseQuery:function(e){return u.a.parse(e,{parseArrays:!1})},stringifyQuery:function(e){return u.a.stringify(e,{addQueryPrefix:!0})},mode:"history",routes:[{path:"*",name:"OrderForm",component:te}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:ne,components:{App:o},template:"<App/>"})},RXa9:function(e,t){},aL5J:function(e,t){},"x+S3":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9ae7b2a4c25b15327ff1.js.map