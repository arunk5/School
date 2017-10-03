sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.EmployeeMgmt.WithDrawal", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.EmployeeMgmt.WithDrawal
*/
	onInit: function() {
		
		    var model2 = new sap.ui.model.json.JSONModel();
	        model2.loadData("model/TeacherView.json");
			
	        var usertype = this.getView().byId("SelectId");   
	        usertype.setModel(model2);
	        
	        var user = this.getView().byId("Select");   
	        user.setModel(model2);
	        
	        var table = this.getView().byId("idProductsTable");   
	        table.setModel(model2);
		
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.EmployeeMgmt.WithDrawal
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.EmployeeMgmt.WithDrawal
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.EmployeeMgmt.WithDrawal
*/
//	onExit: function() {
//
//	}
	
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("HRPayroll/EmployeeMgmt/EmployeeList");
		//alert("Pressed");
	}


});