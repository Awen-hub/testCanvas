webpackJsonp([1],{0:function(t,e){},1:function(t,e){},"1ZT5":function(t,e){},2:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},r,!1,function(t){n("gsu9")},null,null).exports,c=n("/ocq"),o=n("tsU9"),s=n("eMjc"),u=n.n(s),d={name:"HelloWorld",data:function(){return{background:"black",imgColor:"red",imgX:100,imgY:100,imgWidth:100,imgHeight:100,myCanvas:"",dataURL:"",screenUrl:""}},mounted:function(){var t=new o.fabric.Canvas("canvas");o.fabric.Image.fromURL("../../static/s1.jpg",function(e){e.scale(.3),t.add(e)}),o.fabric.Image.fromURL("../../static/s2.jpg",function(e){e.scale(.3),t.add(e)})},methods:{generatorImage:function(){u()(this.$refs.capture).then(function(t){var e=document.getElementById("captureContent");e.appendChild(t);var n=e.getElementsByTagName("canvas"),a=n[n.length-1],r=document.createElement("a");r.href=a.toDataURL(),r.download="images.png",r.click()})},move:function(t){}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("canvas",{ref:"capture",staticClass:"captureId",attrs:{id:"canvas",width:"500",height:"400"}}),this._v(" "),e("button",{on:{click:this.generatorImage}},[this._v("下载")]),this._v(" "),e("div",{attrs:{id:"captureContent"}}),this._v(" "),e("img",{attrs:{src:this.dataURL,alt:""}})])},staticRenderFns:[]};var m=n("VU/8")(d,l,!1,function(t){n("1ZT5")},"data-v-4e733d81",null).exports;a.a.use(c.a);var p=new c.a({routes:[{path:"/",name:"HelloWorld",component:m}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:i},template:"<App/>"})},gsu9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b7df40f277fad567b71d.js.map