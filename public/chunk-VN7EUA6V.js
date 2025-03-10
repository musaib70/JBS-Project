import{f as A,g as J,r as L}from"./chunk-GC5MTBRV.js";import{Aa as S,Ac as I,Ba as _,G as b,K as f,L as v,Ra as k,Y as x,Za as T,hc as F,ic as R,jb as M,lb as E,ma as w,oa as D,zc as B}from"./chunk-7UEHT57M.js";import{a as r,e as m,f as u,g as h}from"./chunk-RGL3W33T.js";var p=function(t,e){if(!(typeof window>"u")&&!(typeof document>"u")){var s=e??document.body;return window.getComputedStyle(s,null).getPropertyValue(t).replace(/^\s/,"")}};var g=function(t,e){if(e===void 0&&(e=100),typeof t>"u")throw new TypeError("Hex color is not defined");var s=t.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!s)throw new Error("".concat(t," is not a valid hex color"));var a,i,o;return t.length===7?(a=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16)):(a=parseInt(t.slice(1,2),16),i=parseInt(t.slice(2,3),16),o=parseInt(t.slice(3,5),16)),"rgba(".concat(a,", ").concat(i,", ").concat(o,", ").concat(e/100,")")};var W=(()=>{let e=class e{constructor(){this.mainChart={type:"line"}}random(a,i){return Math.floor(Math.random()*(i-a+1)+a)}initMainChart(a="Month"){let i=p("--cui-success")??"#4dbd74",o=p("--cui-info")??"#20a8d8",d=g(p("--cui-info")??"#20a8d8",10),y=p("--cui-danger")??"#f86c6b";this.mainChart.elements=a==="Month"?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let c=0;c<=this.mainChart.elements;c++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let n=[];if(a==="Month")n=["January","February","March","April","May","June","July","August","September","October","November","December"];else{let c=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];n=c.concat(c,c,c)}let l=[{backgroundColor:d,borderColor:o,pointHoverBackgroundColor:o,borderWidth:2,fill:!0},{backgroundColor:"transparent",borderColor:i||"#4dbd74",pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:y||"#f86c6b",pointHoverBackgroundColor:y,borderWidth:1,borderDash:[8,5]}],C=[r({data:this.mainChart.Data1,label:"Current"},l[0]),r({data:this.mainChart.Data2,label:"Previous"},l[1]),r({data:this.mainChart.Data3,label:"BEP"},l[2])],O={legend:{display:!1},tooltip:{callbacks:{labelColor:c=>({backgroundColor:c.dataset.borderColor})}}},j=this.getScales(),H={maintainAspectRatio:!1,plugins:O,scales:j,elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="line",this.mainChart.options=H,this.mainChart.data={datasets:C,labels:n}}getScales(){let a=p("--cui-border-color-translucent"),i=p("--cui-body-color");return{x:{grid:{color:a,drawOnChartArea:!1},ticks:{color:i}},y:{border:{color:a},grid:{color:a},max:250,beginAtZero:!0,ticks:{color:i,maxTicksLimit:5,stepSize:Math.ceil(250/5)}}}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"any"});let t=e;return t})();var De=(()=>{var e,s,a,i,o;let d=class d{constructor(){u(this,e);u(this,s);u(this,a);u(this,i);u(this,o);h(this,e,f(x)),h(this,s,f(E)),h(this,a,f(w)),h(this,i,f(W)),this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/images/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/images/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/images/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xE9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/images/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xE1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/images/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xE1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/images/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={type:"line"},this.mainChartRef=D(void 0),h(this,o,M(()=>{this.mainChartRef()&&this.setChartStyles()})),this.chart=[],this.trafficRadioGroup=new A({trafficRadio:new J("Month")})}ngOnInit(){this.initCharts(),this.updateChartOnColorModeChange()}initCharts(){this.mainChart=m(this,i).mainChart}setTrafficPeriod(n){this.trafficRadioGroup.setValue({trafficRadio:n}),m(this,i).initMainChart(n),this.initCharts()}handleChartRef(n){n&&this.mainChartRef.set(n)}updateChartOnColorModeChange(){let n=m(this,a).listen(m(this,s).documentElement,"ColorSchemeChange",()=>{this.setChartStyles()});m(this,e).onDestroy(()=>{n()})}setChartStyles(){this.mainChartRef()&&setTimeout(()=>{let n=r({},this.mainChart.options),l=m(this,i).getScales();this.mainChartRef().options.scales=r(r({},n.scales),l),this.mainChartRef().update()})}};e=new WeakMap,s=new WeakMap,a=new WeakMap,i=new WeakMap,o=new WeakMap,d.\u0275fac=function(l){return new(l||d)},d.\u0275cmp=v({type:d,selectors:[["ng-component"]],standalone:!0,features:[T],decls:6,vars:0,consts:[[1,"my-4"],["sm","5"]],template:function(l,C){l&1&&(S(0,"c-card",0)(1,"c-card-body")(2,"c-row")(3,"c-col",1)(4,"h4"),k(5,"Dashboard"),_()()()()())},dependencies:[F,R,I,B,L],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]});let t=d;return t})();export{De as DashboardComponent};
