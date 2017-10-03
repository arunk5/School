sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.CourseBatch.Course", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.CourseBatch.Course
*/
	onInit: function() {

		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.CourseBatch.Course
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.CourseBatch.Course
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.CourseBatch.Course
*/
//	onExit: function() {
//
//	}
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	pressCourse:function(evt){
		
		var oTile = evt.getSource();
		//MessageToast.show("The GenericTile \"" + oTile.getHeader() + "\" was pressed.");

		var oItem = evt.getParameters();
		//console.log(oItem);
		//var sKey = 'Library/';
		this.getRouter().navTo(oTile.getFailedText());
		
		
	
//		String SID = oEvent.getSource().sId.toString();
//		//if(SID.indexOf("Tile1") == -1)
//			{
//			oRouter.navTo("Academic/CourseBatch/Batch");
//			}
		
	},
	
	pressBatch:function(evt){
		
		var oTile = evt.getSource();
		var oItem = evt.getParameters();
		this.getRouter().navTo(oTile.getFailedText());
		
	},
	pressTeacher:function(evt){
		
		var oTile = evt.getSource();
		var oItem = evt.getParameters();
		console.log(" 0+0+"+oTile.getFailedText());
		this.getRouter().navTo(oTile.getFailedText());
		
	}
	
	
	
});