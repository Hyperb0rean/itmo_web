(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c094014c"],{"0899":function(t,i,e){"use strict";e.r(i);e("fb6a");var h=e("7a23"),c={key:0,class:"all"},s=Object(h["g"])("div",{class:"container"},[Object(h["g"])("div",{class:"alert alert-danger admin",role:"alert",style:{"text-align":"center"}}," User panel ")],-1),n={class:"list row"},r={class:"col-md-6"},o={for:"xSlider"},l=Object(h["g"])("br",null,null,-1),a=Object(h["g"])("br",null,null,-1),d=Object(h["g"])("br",null,null,-1),u={for:"ySlider"},x=Object(h["g"])("br",null,null,-1),b=Object(h["g"])("br",null,null,-1),g={for:"rSlider"},p=Object(h["g"])("br",null,null,-1),f={class:"col-md-6"},w={style:{"text-align":"center",width:"40%",display:"flex"}},v={class:"table-responsive"},O={class:"table-hover table-bordered"},j=Object(h["g"])("thead",null,[Object(h["g"])("tr",{style:{"text-align":"center"}},[Object(h["g"])("th",null,"X"),Object(h["g"])("th",null,"Y"),Object(h["g"])("th",null,"R"),Object(h["g"])("th",null,"Hit")])],-1),y={key:1};function T(t,i,e,T,m,k){var P=this;return Object(h["s"])(),Object(h["d"])(h["a"],null,[k.isUser?(Object(h["s"])(),Object(h["d"])("div",c,[s,Object(h["g"])("div",n,[Object(h["g"])("div",r,[Object(h["g"])("div",null,[Object(h["g"])("label",o,"X = "+Object(h["C"])(m.point.x),1),l,Object(h["K"])(Object(h["g"])("input",{type:"range",class:"bg-danger",id:"xSlider",required:"",min:"-3",max:"3",step:"0.5","onUpdate:modelValue":i[1]||(i[1]=function(t){return m.point.x=t}),name:"x"},null,512),[[h["F"],m.point.x]])]),a,d,Object(h["g"])("div",null,[Object(h["g"])("label",u,"Y = "+Object(h["C"])(m.point.y),1),x,Object(h["K"])(Object(h["g"])("input",{type:"range",class:"bg-danger",id:"ySlider",required:"",min:"-3",max:"3",step:"0.5","onUpdate:modelValue":i[2]||(i[2]=function(t){return m.point.y=t}),name:"y"},null,512),[[h["F"],m.point.y]])]),b,Object(h["g"])("div",null,[Object(h["g"])("label",g,"R = "+Object(h["C"])(m.point.r),1),p,Object(h["K"])(Object(h["g"])("input",{type:"range",class:"bg-danger",id:"rSlider",required:"",min:"0.5",max:"3",step:"0.5","onUpdate:modelValue":i[3]||(i[3]=function(t){return m.point.r=t}),name:"r",onInput:i[4]||(i[4]=function(t){return P.loadGraph(m.point.r)})},null,544),[[h["F"],m.point.r]])]),Object(h["g"])("button",{onClick:i[5]||(i[5]=function(){return k.save&&k.save.apply(k,arguments)}),class:"btn btn-outline-danger",style:{"margin-top":"10px"}},"Submit")]),Object(h["g"])("div",f,[Object(h["g"])("div",w,[Object(h["g"])("canvas",{id:"graph",height:"400px",width:"400px",style:{background:"transparent"},ref:"graphic",onMousedown:i[6]||(i[6]=function(){return P.clickOnGraph&&P.clickOnGraph.apply(P,arguments)})},null,544)])])]),Object(h["g"])("div",null,[Object(h["g"])("div",v,[Object(h["g"])("table",O,[j,Object(h["g"])("tbody",null,[(Object(h["s"])(!0),Object(h["d"])(h["a"],null,Object(h["y"])(m.points.slice().reverse(),(function(t){return Object(h["s"])(),Object(h["d"])("tr",{key:t,class:"res-table-column"},[Object(h["g"])("td",null,Object(h["C"])(t.x),1),Object(h["g"])("td",null,Object(h["C"])(t.y),1),Object(h["g"])("td",null,Object(h["C"])(t.r),1),Object(h["g"])("td",null,Object(h["C"])(t.hit),1)])})),128))])])])])])):Object(h["e"])("",!0),k.isUser?Object(h["e"])("",!0):(Object(h["s"])(),Object(h["d"])("div",y,"No bro you need to log in"))],64)}e("cb29");var m=e("b697"),k={name:"User",data:function(){return{points:[],point:{x:1,y:1,r:1,hit:!1},c:null,ctx:null,radiusOnGraph:null}},computed:{currentUser:function(){return this.$store.state.auth.user},isUser:function(){return!(!this.currentUser||!this.currentUser["roles"])}},methods:{getPoints:function(){var t=this;m["a"].getAll().then((function(i){t.points=i.data})).catch((function(t){return console.error(t)}))},save:function(){var t=this,i={x:this.point.x,y:this.point.y,r:this.point.r};m["a"].savePoint(i).then((function(i){t.point.hit=i.data.hit,t.getPoints()}))},startGraph:function(){this.draw()},draw:function(){this.loadGraph(this.point.r)},drawArea:function(){var t=15,i=this.c.width/2-t,e=this.c.width/2;this.ctx.lineWidth=0,this.ctx.beginPath(),this.ctx.fillStyle="#cd071e",this.ctx.strokeStyle="#cd071e",this.ctx.moveTo(e,e),this.ctx.fillRect(e,e-i,i,i),this.ctx.moveTo(e,e),this.ctx.lineTo(e,e-i),this.ctx.lineTo(e-i,e),this.ctx.fill(),this.ctx.moveTo(e,e),this.ctx.arc(e,e,i,0,Math.PI/2),this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke()},drawCoordinatePlane:function(t){this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(0,this.c.height/2),this.ctx.lineTo(this.c.width,this.c.height/2),this.ctx.moveTo(this.c.width-1,this.c.height/2),this.ctx.lineTo(this.c.width-4,this.c.height/2+1.5),this.ctx.lineTo(this.c.width-4,this.c.height/2-1.5),this.ctx.strokeStyle="black",this.ctx.closePath(),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(this.c.width/2,0),this.ctx.lineTo(this.c.width/2,this.c.height),this.ctx.moveTo(this.c.width/2,1),this.ctx.lineTo(this.c.width/2+1.5,4),this.ctx.lineTo(this.c.width/2-1.5,4),this.ctx.strokeStyle="black",this.ctx.closePath(),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(15,this.c.height/2),this.ctx.lineTo(15,this.c.height/2+2),this.ctx.lineTo(15,this.c.height/2-2),this.ctx.moveTo(this.c.width/4+7.5,this.c.height/2),this.ctx.lineTo(this.c.width/4+7.5,this.c.height/2+2),this.ctx.lineTo(this.c.width/4+7.5,this.c.height/2-2),this.ctx.moveTo(this.c.width/4+this.c.width/2-7.5,this.c.height/2),this.ctx.lineTo(this.c.width/4+this.c.width/2-7.5,this.c.height/2+2),this.ctx.lineTo(this.c.width/4+this.c.width/2-7.5,this.c.height/2-2),this.ctx.moveTo(this.c.width-15,this.c.height/2),this.ctx.lineTo(this.c.width-15,this.c.height/2+2),this.ctx.lineTo(this.c.width-15,this.c.height/2-2),this.ctx.strokeStyle="black",this.ctx.closePath(),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(this.c.width/2,this.c.height-15),this.ctx.lineTo(this.c.width/2+2,this.c.height-15),this.ctx.lineTo(this.c.width/2-2,this.c.height-15),this.ctx.moveTo(this.c.width/2,3*this.c.height/4-7.5),this.ctx.lineTo(this.c.width/2+2,3*this.c.height/4-7.5),this.ctx.lineTo(this.c.width/2-2,3*this.c.height/4-7.5),this.ctx.moveTo(this.c.width/2,1*this.c.height/4+7.5),this.ctx.lineTo(this.c.width/2+2,1*this.c.height/4+7.5),this.ctx.lineTo(this.c.width/2-2,1*this.c.height/4+7.5),this.ctx.moveTo(this.c.width/2,15),this.ctx.lineTo(this.c.width/2+2,15),this.ctx.lineTo(this.c.width/2-2,15),this.ctx.strokeStyle="black",this.ctx.closePath(),this.ctx.stroke(),this.ctx.strokeStyle="black",this.ctx.fillStyle="black",this.ctx.font="12pt monospace",this.ctx.lineWidth=1,this.ctx.strokeText(t,this.c.width-19,this.c.height/2+17),this.ctx.strokeText(t,this.c.width/2+7,22),this.ctx.strokeText(-1*t,2,this.c.height/2+17),this.ctx.strokeText(-1*t,this.c.width/2+4,this.c.height-10),this.ctx.strokeText(t/2*-1,this.c.width/2+2,3*this.c.height/4-4),this.ctx.strokeText(t/2,this.c.width/2+6,1*this.c.height/4+12.5),this.ctx.strokeText(t/2*-1,this.c.width/4-13,this.c.height/2+17),this.ctx.strokeText(t/2,this.c.width/4+this.c.width/2-21,this.c.height/2+17),this.ctx.fill(),this.ctx.stroke()},clickOnGraph:function(t){var i=this,e=this.c.getBoundingClientRect(),h=t.clientX-e.x,c=t.clientY-e.y,s=this.point.r;this.loadGraph(this.point.r);var n={x:Math.round((h-this.c.width/2)*s/this.radiusOnGraph*1e5)/1e5,y:Math.round(-1*(c-this.c.height/2)*s/this.radiusOnGraph*1e5)/1e5,r:s};this.point.x=n.x,this.point.y=n.y,m["a"].savePoint(n).then((function(t){i.point.hit=t.data.hit;var e={x:i.point.x,y:i.point.y,r:i.point.r,hit:i.point.hit};i.drawItemFromTable(e),i.getPoints()}))},loadGraph:function(t){for(var i in this.clearCanvas(),this.drawArea(),this.drawCoordinatePlane(t),this.points)this.points[i].r==t&&this.drawItemFromTable(this.points[i])},drawItemFromTable:function(t){var i=parseFloat(t.x),e=parseFloat(t.y),h=parseFloat(t.r),c=t.hit,s="black";c&&(s="gold");var n=i*this.radiusOnGraph/h+this.c.width/2,r=this.c.height/2-e*this.radiusOnGraph/h;n<2&&(n=2,s="white"),n>this.c.width-2&&(n=this.c.width-2,s="white"),r<2&&(r=2,s="white"),r>this.c.height-2&&(r=this.c.height-2,s="white"),this.drawItem(n,r,s)},drawItem:function(t,i,e){this.ctx.beginPath(),this.ctx.arc(t,i,3,0,2*Math.PI),this.ctx.fillStyle=e,this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke()},clearCanvas:function(){this.ctx.clearRect(0,0,this.c.width,this.c.height)}},mounted:function(){this.currentUser||this.$router.push("/login"),this.getPoints(),this.c=document.getElementById("graph"),this.c&&(this.c.width=400,this.c.height=400,this.radiusOnGraph=(this.c.width-30)/2,this.ctx=this.c.getContext("2d"),this.startGraph(),this.loadGraph(1))}};e("38a6");k.render=T;i["default"]=k},"1dde":function(t,i,e){var h=e("d039"),c=e("b622"),s=e("2d00"),n=c("species");t.exports=function(t){return s>=51||!h((function(){var i=[],e=i.constructor={};return e[n]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},"38a6":function(t,i,e){"use strict";e("cc41")},"81d5":function(t,i,e){"use strict";var h=e("7b0b"),c=e("23cb"),s=e("50c4");t.exports=function(t){var i=h(this),e=s(i.length),n=arguments.length,r=c(n>1?arguments[1]:void 0,e),o=n>2?arguments[2]:void 0,l=void 0===o?e:c(o,e);while(l>r)i[r++]=t;return i}},8418:function(t,i,e){"use strict";var h=e("c04e"),c=e("9bf2"),s=e("5c6c");t.exports=function(t,i,e){var n=h(i);n in t?c.f(t,n,s(0,e)):t[n]=e}},b697:function(t,i,e){"use strict";var h=e("d4ec"),c=e("bee2"),s=e("bc3a"),n=e.n(s),r=e("c4c6"),o="http://localhost:1337/api/points/",l=function(){function t(){Object(h["a"])(this,t)}return Object(c["a"])(t,[{key:"getAll",value:function(){return n.a.get(o+"",{headers:Object(r["a"])()})}},{key:"savePoint",value:function(t){return n.a.post(o,t,{headers:Object(r["a"])()})}},{key:"deleteAll",value:function(){return n.a.delete(o,{headers:Object(r["a"])()})}}]),t}();i["a"]=new l},c4c6:function(t,i,e){"use strict";function h(){var t=JSON.parse(localStorage.getItem("user"));return t&&t.accessToken?{Authorization:"Bearer "+t.accessToken}:{}}e.d(i,"a",(function(){return h}))},cb29:function(t,i,e){var h=e("23e7"),c=e("81d5"),s=e("44d2");h({target:"Array",proto:!0},{fill:c}),s("fill")},cc41:function(t,i,e){},e8b5:function(t,i,e){var h=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==h(t)}},fb6a:function(t,i,e){"use strict";var h=e("23e7"),c=e("861d"),s=e("e8b5"),n=e("23cb"),r=e("50c4"),o=e("fc6a"),l=e("8418"),a=e("b622"),d=e("1dde"),u=d("slice"),x=a("species"),b=[].slice,g=Math.max;h({target:"Array",proto:!0,forced:!u},{slice:function(t,i){var e,h,a,d=o(this),u=r(d.length),p=n(t,u),f=n(void 0===i?u:i,u);if(s(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)?c(e)&&(e=e[x],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return b.call(d,p,f);for(h=new(void 0===e?Array:e)(g(f-p,0)),a=0;p<f;p++,a++)p in d&&l(h,a,d[p]);return h.length=a,h}})}}]);
//# sourceMappingURL=chunk-c094014c.4beea7c0.js.map