(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[190],{190:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ShoppingListModule:()=>h});var n=i(665),s=i(266),r=i(4466),o=i(639),c=i(2457),d=i(9102),u=i(9985);const l=["f"];let g=(()=>{class t{constructor(t){this.slService=t,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(t=>{this.editMode=!0,this.editedItemIndex=t,this.editedItem=this.slService.getIngredient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmitItem(t){const e=t.value,i=new u.o(e.name,e.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,i):this.slService.addIngredient(i),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.onClear(),this.slService.deleteIngredient(this.editedItemIndex)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c._))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){if(1&t&&o.Gf(l,5),2&t){let t;o.iGM(t=o.CRH())&&(e.slForm=t.first)}},decls:21,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-xs-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","",1,"form-control",3,"pattern"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"form",2,3),o.NdJ("ngSubmit",function(){o.CHM(t);const i=o.MAs(3);return e.onSubmitItem(i)}),o.TgZ(4,"div",0),o.TgZ(5,"div",4),o.TgZ(6,"label",5),o._uU(7,"Name"),o.qZA(),o._UZ(8,"input",6),o.qZA(),o.TgZ(9,"div",7),o.TgZ(10,"label",8),o._uU(11,"Amount"),o.qZA(),o._UZ(12,"input",9),o.qZA(),o.qZA(),o.TgZ(13,"div",0),o.TgZ(14,"div",1),o.TgZ(15,"button",10),o._uU(16),o.qZA(),o.TgZ(17,"button",11),o.NdJ("click",function(){return e.onDelete()}),o._uU(18," Delete "),o.qZA(),o.TgZ(19,"button",12),o.NdJ("click",function(){return e.onClear()}),o._uU(20," Clear "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=o.MAs(3);o.xp6(12),o.Q6J("pattern","[1-9]+[0-9]*$"),o.xp6(3),o.Q6J("disabled",!t.valid),o.xp6(1),o.hij(" ",e.editMode?"Update":"Add"," ")}},directives:[n._Y,n.JL,n.F,n.Fj,n.JJ,n.On,n.Q7,n.wV,n.c5],styles:[""]}),t})();var p=i(8583);function a(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"a",4),o.NdJ("click",function(){const e=o.CHM(t).index;return o.oxw().onEditItem(e)}),o._uU(1),o.qZA()}if(2&t){const t=e.$implicit;o.xp6(1),o.AsE(" ",t.name," (",t.amount,") ")}}let m=(()=>{class t{constructor(t,e){this.slService=t,this.loggingService=e}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.igChangeSub=this.slService.ingredientsChanged.subscribe(t=>{this.ingredients=t}),this.loggingService.printLog("Hello from the ShoppingListComponent ngOnInit!")}onEditItem(t){this.slService.startedEditing.next(t)}ngOnDestroy(){this.igChangeSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c._),o.Y36(d.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col","xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o._UZ(2,"app-shopping-edit"),o._UZ(3,"hr"),o.TgZ(4,"ul",2),o.YNc(5,a,2,2,"a",3),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(5),o.Q6J("ngForOf",e.ingredients))},directives:[g,p.sg],styles:[""]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[n.u5,s.Bz.forChild([{path:"",component:m}]),r.m]]}),t})()}}]);