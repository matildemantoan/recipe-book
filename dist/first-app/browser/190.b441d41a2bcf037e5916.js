(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[190],{190:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ShoppingListModule:()=>Z});var i=n(665),s=n(3735),o=n(4466),r=n(3584),c=n(7716),p=n(9102),u=n(4220),d=n(9985);const l=["f"];let a=(()=>{class t{constructor(t){this.store=t,this.editMode=!1}ngOnInit(){this.subscription=this.store.select("shoppingList").subscribe(t=>{t.editedIngredientIndex>=0&&(this.editMode=!0,this.editedItem=t.editedIngredient,this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount}))})}onSubmitItem(t){const e=t.value,n=new d.o(e.name,e.amount);this.store.dispatch(this.editMode?new r.D6(n):new r.eh(n)),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.onClear(),this.store.dispatch(new r.cB)}ngOnDestroy(){this.subscription.unsubscribe(),this.store.dispatch(new r.b)}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.yh))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){if(1&t&&c.Gf(l,5),2&t){let t;c.iGM(t=c.CRH())&&(e.slForm=t.first)}},decls:21,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-xs-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","",1,"form-control",3,"pattern"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"form",2,3),c.NdJ("ngSubmit",function(){c.CHM(t);const n=c.MAs(3);return e.onSubmitItem(n)}),c.TgZ(4,"div",0),c.TgZ(5,"div",4),c.TgZ(6,"label",5),c._uU(7,"Name"),c.qZA(),c._UZ(8,"input",6),c.qZA(),c.TgZ(9,"div",7),c.TgZ(10,"label",8),c._uU(11,"Amount"),c.qZA(),c._UZ(12,"input",9),c.qZA(),c.qZA(),c.TgZ(13,"div",0),c.TgZ(14,"div",1),c.TgZ(15,"button",10),c._uU(16),c.qZA(),c.TgZ(17,"button",11),c.NdJ("click",function(){return e.onDelete()}),c._uU(18," Delete "),c.qZA(),c.TgZ(19,"button",12),c.NdJ("click",function(){return e.onClear()}),c._uU(20," Clear "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=c.MAs(3);c.xp6(12),c.Q6J("pattern","[1-9]+[0-9]*$"),c.xp6(3),c.Q6J("disabled",!t.valid),c.xp6(1),c.hij(" ",e.editMode?"Update":"Add"," ")}},directives:[i._Y,i.JL,i.F,i.Fj,i.JJ,i.On,i.Q7,i.wV,i.c5],styles:[""]}),t})();var m=n(8583);function g(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"a",4),c.NdJ("click",function(){const e=c.CHM(t).index;return c.oxw().onEditItem(e)}),c._uU(1),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(1),c.AsE(" ",t.name," (",t.amount,") ")}}let h=(()=>{class t{constructor(t,e){this.loggingService=t,this.store=e}ngOnInit(){this.ingredients=this.store.select("shoppingList"),this.loggingService.printLog("Hello from the ShoppingListComponent ngOnInit!")}onEditItem(t){this.store.dispatch(new r.cd(t))}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(p.e),c.Y36(u.yh))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-shopping-list"]],decls:7,vars:3,consts:[[1,"row"],[1,"col","xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c._UZ(2,"app-shopping-edit"),c._UZ(3,"hr"),c.TgZ(4,"ul",2),c.YNc(5,g,2,2,"a",3),c.ALo(6,"async"),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(5),c.Q6J("ngForOf",c.lcZ(6,1,e.ingredients).ingredients))},directives:[a,m.sg],pipes:[m.Ov],styles:[""]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.u5,s.Bz.forChild([{path:"",component:h}]),o.m]]}),t})()}}]);