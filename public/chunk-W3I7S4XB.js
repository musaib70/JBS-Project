import{Ia as n,Ja as m,K as u,Qa as g,Qb as M,Rb as b,W as s,da as d,ma as p,sa as t,sc as h,ta as o,tc as _,uc as f,vc as v,wc as k,za as l}from"./chunk-QRLRZPEF.js";var D=(()=>{let i=class i{constructor(){this.visible=!1,this.title="",this.message="",this.objectId=null,this.toggleModal=new s,this.closeModal=new s,this.trigger=new s}toggleVisibility(){this.toggleModal.emit()}close(){this.closeModal.emit()}takeAction(){this.objectId&&(this.trigger.emit(this.objectId),this.objectId=null,this.toggleModal.emit())}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=u({type:i,selectors:[["app-modal"]],inputs:{visible:"visible",title:"title",message:"message",objectId:"objectId"},outputs:{toggleModal:"toggleModal",closeModal:"closeModal",trigger:"trigger"},standalone:!0,features:[g],decls:12,vars:3,consts:[[3,"click","visible"],["cModalTitle",""],["cButtonClose","",3,"click"],["cButton","","color","primary",3,"click"],["cButton","","color","secondary",3,"click"]],template:function(a,e){a&1&&(t(0,"c-modal",0),l("click",function(){return e.close()}),t(1,"c-modal-header")(2,"h5",1),n(3),o(),t(4,"button",2),l("click",function(){return e.toggleVisibility()}),o()(),t(5,"c-modal-body"),n(6),o(),t(7,"c-modal-footer")(8,"button",3),l("click",function(){return e.takeAction()}),n(9,"Yes"),o(),t(10,"button",4),l("click",function(){return e.toggleVisibility()}),n(11," No "),o()()()),a&2&&(p("visible",e.visible),d(3),m(e.title),d(3),m(e.message))},dependencies:[b,M,h,k,_,f,v]});let c=i;return c})();export{D as a};
