import{a as de}from"./chunk-CRHXL4XG.js";import{b as K,c as d,d as Q,e as X,f as Z,i as $,k as ee,l as te,m as ie,n as oe,o as ne,p as re,q as ae,r as le}from"./chunk-CF2V3KPZ.js";import{a as se}from"./chunk-H3YD3O7J.js";import"./chunk-7F77G7NR.js";import{Aa as C,F as E,Fc as H,Gc as Y,I as S,Ia as p,Ja as D,K as T,Ka as W,Ma as g,Na as b,Oa as f,Q as v,Qa as B,Qb as P,R as F,aa as A,cb as V,da as s,db as L,ea as h,fc as q,gb as R,hc as z,ib as k,ic as O,ka as _,kc as U,la as I,ma as u,rb as G,sa as a,ta as l,tb as w,ua as M,va as N,wa as x,ya as J,za as y}from"./chunk-QRLRZPEF.js";import"./chunk-RGL3W33T.js";var j=class{constructor(){this._id=null,this.name="",this.description="",this.position="",this.applied_for="",this.entry_date="",this.resume=null,this.status=""}};var me=(()=>{let r=class r extends se{constructor(o,t){super(t,o)}};r.\u0275fac=function(t){return new(t||r)(S(w),S(k))},r.\u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();function be(n,r){if(n&1&&(a(0,"option",17),p(1),l()),n&2){let m=r.$implicit;u("value",m.id),s(),D(m.status)}}function fe(n,r){n&1&&M(0,"c-spinner",20)}function he(n,r){if(n&1){let m=J();N(0),a(1,"button",18),y("click",function(){v(m);let t=C();return F(t.addJob())}),_(2,fe,1,0,"c-spinner",19),p(3," Publish Job "),l(),x()}if(n&2){let m=C();s(),u("disabled",m.loading),s(),u("ngIf",m.loading)}}function _e(n,r){n&1&&M(0,"c-spinner",20)}function Ce(n,r){if(n&1){let m=J();N(0),a(1,"button",18),y("click",function(){v(m);let t=C();return F(t.updateJob())}),_(2,_e,1,0,"c-spinner",19),p(3," Update Job "),l(),x()}if(n&2){let m=C();s(),u("disabled",m.loading),s(),u("ngIf",m.loading)}}var Re=(()=>{let r=class r{constructor(o,t,e,c){this.route=o,this.router=t,this.jobService=e,this.formBuilder=c,this.is_update=!1,this.page_title="Add",this.job=new j,this.base64File=null,this.loading=!1,this.statuses=[{id:0,status:"Opened"},{id:1,status:"Closed"}],this.validation=new de}ngOnInit(){let o=this.route.snapshot.paramMap.get("id");o&&(this.jobService.getExisting("job/edit/",o).subscribe(t=>{let e=t;this.job=e,this.job.entry_date=this.convertDateForUpdate(this.job.entry_date),console.log("Response",t)}),this.page_title="Update",this.is_update=!0),this.initializeForm()}initializeForm(){this.form=Z,this.form=this.formBuilder.group({name:[this.job.name,d.compose([d.required])],description:[this.job.description,d.compose([d.required])],position:[this.job.position,d.compose([d.required])],applied_for:[this.job.applied_for,d.compose([d.required])],entry_date:[this.job.entry_date,d.compose([d.required])],resume:[this.job.resume,d.compose([d.required])],status:[this.job.status,d.compose([d.required])]})}onFileSelected(o){let t=o.target.files?.[0];t&&this.convertToBase64(t)}convertToBase64(o){let t=new FileReader;t.onload=()=>{this.base64File=t.result,this.job.resume=this.base64File},t.onerror=e=>{console.error("Error reading file:",e)},t.readAsDataURL(o)}convertDateForUpdate(o){let t=o,e=new Date(t),c=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),pe=String(e.getDate()).padStart(2,"0");return`${c}-${i}-${pe}`}addJob(){if(this.job.resume=this.base64File,!this.validation.validateForm(this.form))return alert("Some fields are missing");try{this.loading=!0,this.jobService.insert(this.job,"job/create").subscribe(o=>{if(o.status)return this.router.navigate(["/job"]),alert("New job has been added successfully!");if(o.status==!1)return this.loading=!1,alert(`${o.message}`)})}catch{return this.loading=!1,alert("Unknown error occured!")}}updateJob(){if(!this.validation.validateForm(this.form))return alert("Some fields are missing");this.loading=!0,this.jobService.update(`job/update?id=${this.job._id}`,this.job).subscribe(o=>{if(o.status)return this.router.navigate(["/job"]),alert("Job has been updated successfully!");if(o.status==!1)return this.loading=!1,alert(`${o.message}`)})}};r.\u0275fac=function(t){return new(t||r)(h(G),h(w),h(me),h(re))},r.\u0275cmp=T({type:r,selectors:[["app-add-new-job"]],standalone:!0,features:[B],decls:38,vars:12,consts:[[1,"bg-light","dark:bg-transparent","d-flex","flex-row","align-items-center"],["cForm","",3,"formGroup"],[1,"mb-3"],["cLabel","","for","exampleFormControlInput1"],["cFormControl","","placeholder","","type","text","formControlName","name",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","","type","text","formControlName","position",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","","type","text","formControlName","applied_for",3,"ngModelChange","ngModel"],["formControlName","description","cFormControl","","id","exampleFormControlTextarea1","rows","8",3,"ngModelChange","ngModel"],["cLabel","","for","exampleFormControlTextarea1"],["cFormControl","","id","inputGroupFile01","type","file",3,"change"],[1,"row","mb-3"],[1,"col-md-4"],["cFormControl","","id","exampleFormControlInput1","placeholder","","type","date","formControlName","entry_date",3,"ngModelChange","ngModel"],["formControlName","status","aria-label","Large select example","cSelect","","sizing","md",1,"mb-3",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"mb-5"],[4,"ngIf"],[3,"value"],["cButton","","color","primary",3,"click","disabled"],["color","white","size","sm","role","status","aria-hidden","true",4,"ngIf"],["color","white","size","sm","role","status","aria-hidden","true"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"c-container")(2,"h2"),p(3),l(),a(4,"form",1)(5,"div",2)(6,"label",3),p(7,"Job Title"),l(),a(8,"input",4),f("ngModelChange",function(i){return b(e.job.name,i)||(e.job.name=i),i}),l()(),a(9,"div",2)(10,"label",3),p(11,"Job Position"),l(),a(12,"input",5),f("ngModelChange",function(i){return b(e.job.position,i)||(e.job.position=i),i}),l()(),a(13,"div",2)(14,"label",3),p(15,"Applied For"),l(),a(16,"input",6),f("ngModelChange",function(i){return b(e.job.applied_for,i)||(e.job.applied_for=i),i}),l()(),a(17,"div",2)(18,"label",3),p(19,"Job Description"),l(),a(20,"textarea",7),f("ngModelChange",function(i){return b(e.job.description,i)||(e.job.description=i),i}),l()(),a(21,"div",2)(22,"label",8),p(23,"Attach Resume"),l(),a(24,"input",9),y("change",function(i){return e.onFileSelected(i)}),l()(),a(25,"div",10)(26,"div",11)(27,"label",3),p(28,"Entry Date"),l(),a(29,"input",12),f("ngModelChange",function(i){return b(e.job.entry_date,i)||(e.job.entry_date=i),i}),l()(),a(30,"div",11)(31,"label",3),p(32,"Status"),l(),a(33,"select",13),f("ngModelChange",function(i){return b(e.job.status,i)||(e.job.status=i),i}),_(34,be,2,2,"option",14),l()()(),a(35,"div",15),_(36,he,4,2,"ng-container",16)(37,Ce,4,2,"ng-container",16),l()()()()),t&2&&(s(3),W("",e.page_title," Job"),s(),u("formGroup",e.form),s(4),g("ngModel",e.job.name),s(4),g("ngModel",e.job.position),s(4),g("ngModel",e.job.applied_for),s(4),g("ngModel",e.job.description),I("style","resize: none;",A),s(9),g("ngModel",e.job.entry_date),s(4),g("ngModel",e.job.status),s(),u("ngForOf",e.statuses),s(2),u("ngIf",!e.is_update),s(),u("ngIf",e.is_update))},dependencies:[R,V,L,Y,H,ae,$,oe,ne,K,ie,Q,X,le,ee,te,U,q,O,P,z]});let n=r;return n})();export{Re as AddNewJobComponent};