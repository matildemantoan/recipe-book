exports.id=190,exports.ids=[190],exports.modules={190:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ShoppingListModule:()=>ShoppingListModule});var fesm2015_forms=__webpack_require__(665),router=__webpack_require__(5406),shared_module=__webpack_require__(4466),shopping_list_actions=__webpack_require__(3584),core=__webpack_require__(7716),logging_service=__webpack_require__(9102),ngrx_store=__webpack_require__(4220),ingredient_model=__webpack_require__(9985);const _c0=["f"];class ShoppingEditComponent{constructor(store){this.store=store,this.editMode=!1}ngOnInit(){this.subscription=this.store.select("shoppingList").subscribe(stateData=>{stateData.editedIngredientIndex>=0&&(this.editMode=!0,this.editedItem=stateData.editedIngredient,this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount}))})}onSubmitItem(form){const value=form.value,newIngredient=new ingredient_model.o(value.name,value.amount);this.editMode?this.store.dispatch(new shopping_list_actions.D6(newIngredient)):this.store.dispatch(new shopping_list_actions.eh(newIngredient)),this.editMode=!1,form.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.onClear(),this.store.dispatch(new shopping_list_actions.cB)}ngOnDestroy(){this.subscription.unsubscribe(),this.store.dispatch(new shopping_list_actions.b)}}ShoppingEditComponent.\u0275fac=function ShoppingEditComponent_Factory(t){return new(t||ShoppingEditComponent)(core.Y36(ngrx_store.yh))},ShoppingEditComponent.\u0275cmp=core.Xpm({type:ShoppingEditComponent,selectors:[["app-shopping-edit"]],viewQuery:function ShoppingEditComponent_Query(rf,ctx){if(1&rf&&core.Gf(_c0,5),2&rf){let _t;core.iGM(_t=core.CRH())&&(ctx.slForm=_t.first)}},decls:21,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-xs-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","",1,"form-control",3,"pattern"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function ShoppingEditComponent_Template(rf,ctx){if(1&rf){const _r1=core.EpF();core.TgZ(0,"div",0),core.TgZ(1,"div",1),core.TgZ(2,"form",2,3),core.NdJ("ngSubmit",function ShoppingEditComponent_Template_form_ngSubmit_2_listener(){core.CHM(_r1);const _r0=core.MAs(3);return ctx.onSubmitItem(_r0)}),core.TgZ(4,"div",0),core.TgZ(5,"div",4),core.TgZ(6,"label",5),core._uU(7,"Name"),core.qZA(),core._UZ(8,"input",6),core.qZA(),core.TgZ(9,"div",7),core.TgZ(10,"label",8),core._uU(11,"Amount"),core.qZA(),core._UZ(12,"input",9),core.qZA(),core.qZA(),core.TgZ(13,"div",0),core.TgZ(14,"div",1),core.TgZ(15,"button",10),core._uU(16),core.qZA(),core.TgZ(17,"button",11),core.NdJ("click",function ShoppingEditComponent_Template_button_click_17_listener(){return ctx.onDelete()}),core._uU(18," Delete "),core.qZA(),core.TgZ(19,"button",12),core.NdJ("click",function ShoppingEditComponent_Template_button_click_19_listener(){return ctx.onClear()}),core._uU(20," Clear "),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const _r0=core.MAs(3);core.xp6(12),core.Q6J("pattern","[1-9]+[0-9]*$"),core.xp6(3),core.Q6J("disabled",!_r0.valid),core.xp6(1),core.hij(" ",ctx.editMode?"Update":"Add"," ")}},directives:[fesm2015_forms._Y,fesm2015_forms.JL,fesm2015_forms.F,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.On,fesm2015_forms.Q7,fesm2015_forms.wV,fesm2015_forms.c5],styles:[""]});var common=__webpack_require__(8583);function ShoppingListComponent_a_5_Template(rf,ctx){if(1&rf){const _r4=core.EpF();core.TgZ(0,"a",4),core.NdJ("click",function ShoppingListComponent_a_5_Template_a_click_0_listener(){const i_r2=core.CHM(_r4).index;return core.oxw().onEditItem(i_r2)}),core._uU(1),core.qZA()}if(2&rf){const ingredient_r1=ctx.$implicit;core.xp6(1),core.AsE(" ",ingredient_r1.name," (",ingredient_r1.amount,") ")}}class ShoppingListComponent{constructor(loggingService,store){this.loggingService=loggingService,this.store=store}ngOnInit(){this.ingredients=this.store.select("shoppingList"),this.loggingService.printLog("Hello from the ShoppingListComponent ngOnInit!")}onEditItem(index){this.store.dispatch(new shopping_list_actions.cd(index))}ngOnDestroy(){}}ShoppingListComponent.\u0275fac=function ShoppingListComponent_Factory(t){return new(t||ShoppingListComponent)(core.Y36(logging_service.e),core.Y36(ngrx_store.yh))},ShoppingListComponent.\u0275cmp=core.Xpm({type:ShoppingListComponent,selectors:[["app-shopping-list"]],decls:7,vars:3,consts:[[1,"row"],[1,"col","xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function ShoppingListComponent_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core.TgZ(1,"div",1),core._UZ(2,"app-shopping-edit"),core._UZ(3,"hr"),core.TgZ(4,"ul",2),core.YNc(5,ShoppingListComponent_a_5_Template,2,2,"a",3),core.ALo(6,"async"),core.qZA(),core.qZA(),core.qZA()),2&rf&&(core.xp6(5),core.Q6J("ngForOf",core.lcZ(6,1,ctx.ingredients).ingredients))},directives:[ShoppingEditComponent,common.sg],pipes:[common.Ov],styles:[""]});class ShoppingListModule{}ShoppingListModule.\u0275fac=function ShoppingListModule_Factory(t){return new(t||ShoppingListModule)},ShoppingListModule.\u0275mod=core.oAB({type:ShoppingListModule}),ShoppingListModule.\u0275inj=core.cJS({imports:[[fesm2015_forms.u5,router.Bz.forChild([{path:"",component:ShoppingListComponent}]),shared_module.m]]})}};