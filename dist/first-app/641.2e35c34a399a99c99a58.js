(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[641],{8641:(t,n,e)=>{"use strict";e.r(n),e.d(n,{AuthModule:()=>m});var i=e(8583),o=e(665),s=e(266),r=e(4466),c=e(639);let l=(()=>{class t{constructor(){this.close=new c.vpe}ngOnInit(){}onClose(){this.close.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(c.TgZ(0,"div",0),c.NdJ("click",function(){return n.onClose()}),c.qZA(),c.TgZ(1,"div",1),c.TgZ(2,"p"),c._uU(3),c.qZA(),c.TgZ(4,"div",2),c.TgZ(5,"button",3),c.NdJ("click",function(){return n.onClose()}),c._uU(6,"Close"),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(3),c.Oqu(n.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000000bf;z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px #00000042}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})(),a=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(c.s_b))},t.\u0275dir=c.lG2({type:t,selectors:[["","appPlaceholder",""]]}),t})();var d=e(6382);let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring"]],template:function(t,n){1&t&&(c.TgZ(0,"div",0),c._UZ(1,"div"),c._UZ(2,"div"),c._UZ(3,"div"),c._UZ(4,"div"),c.qZA())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid #0000;border-top-color:#cef}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})();function g(t,n){}function p(t,n){1&t&&(c.TgZ(0,"div",5),c._UZ(1,"app-loading-spinner"),c.qZA())}function h(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"form",6,7),c.NdJ("ngSubmit",function(){c.CHM(t);const n=c.MAs(1);return c.oxw().onSubmit(n)}),c.TgZ(2,"div",8),c.TgZ(3,"label",9),c._uU(4,"Email"),c.qZA(),c._UZ(5,"input",10),c.qZA(),c.TgZ(6,"div",8),c.TgZ(7,"label",11),c._uU(8,"Password"),c.qZA(),c._UZ(9,"input",12),c.qZA(),c.TgZ(10,"div"),c.TgZ(11,"button",13),c._uU(12),c.qZA(),c._uU(13," | "),c.TgZ(14,"button",14),c.NdJ("click",function(){return c.CHM(t),c.oxw().switchMode()}),c._uU(15),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=c.MAs(1),n=c.oxw();c.xp6(11),c.Q6J("disabled",!t.valid),c.xp6(1),c.hij(" ",n.isLoginMode?"Log In":"Sign Up"," "),c.xp6(3),c.hij(" Switch To ",n.isLoginMode?"Sign Up":"Log In"," ")}}let f=(()=>{class t{constructor(t,n,e){this.authService=t,this.router=n,this.componentFactoryResolver=e,this.isLoginMode=!0,this.isLoading=!1,this.error=null}ngOnInit(){}switchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(t){if(!t.valid)return;const n=t.value.email,e=t.value.password;let i;this.isLoading=!0,i=this.isLoginMode?this.authService.login(n,e):this.authService.signUp(n,e),i.subscribe(t=>{console.log(t),this.isLoading=!1,this.router.navigate(["/recipes"])},t=>{console.log(t),this.error=t,this.isLoading=!1,this.showErrorAlert(t)}),t.reset()}onCloseError(){this.error=null}showErrorAlert(t){const n=this.componentFactoryResolver.resolveComponentFactory(l),e=this.alertHost.viewContainerRef;e.clear();const i=e.createComponent(n);i.instance.message=t,this.closeSubscr=i.instance.close.subscribe(()=>{this.closeSubscr.unsubscribe(),e.clear()})}ngOnDestroy(){this.closeSubscr&&this.closeSubscr.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(d.e),c.Y36(s.F0),c.Y36(c._Vd))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-auth"]],viewQuery:function(t,n){if(1&t&&c.Gf(a,5),2&t){let t;c.iGM(t=c.CRH())&&(n.alertHost=t.first)}},decls:5,vars:2,consts:[["appPlaceholder",""],[1,"row"],[1,"col-12","col-md-6","col-md-offset-3"],["style","text-align: center",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","name","email","ngModel","","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","name","password","ngModel","","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn-btn-primary",3,"click"]],template:function(t,n){1&t&&(c.YNc(0,g,0,0,"ng-template",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.YNc(3,p,2,0,"div",3),c.YNc(4,h,16,3,"form",4),c.qZA(),c.qZA()),2&t&&(c.xp6(3),c.Q6J("ngIf",n.isLoading),c.xp6(1),c.Q6J("ngIf",!n.isLoading))},directives:[a,i.O5,u,o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,o.Q7,o.on,o.wO],styles:[""]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,o.u5,s.Bz.forChild([{path:"",component:f}]),r.m]]}),t})()}}]);