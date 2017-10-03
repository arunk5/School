sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.EmployeeMgmt.AddBankDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.EmployeeMgmt.AddBankDetails
*/
	onInit: function() {


        var model2 = new sap.ui.model.json.JSONModel();
        model2.loadData("model/TeacherView.json");
		
        var dropdown = this.getView().byId("idProductsTable");   
	      dropdown.setModel(model2);
		
		
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.EmployeeMgmt.AddBankDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.EmployeeMgmt.AddBankDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.EmployeeMgmt.AddBankDetails
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
	},
	onPress:function(oEvent){
		
		 var sPath = oEvent.getSource().getBindingContext().sPath; 
         var init = sPath.substr(-1)

        // console.log("Init"+init);
        var oModel = this.getView().byId("idProductsTable").getModel();
    	//var oModel = sap.ui.getCore().getModel();
        var oModelData = oModel.getProperty("/ProductCollection");
        oModelData.splice(init,1);
        oModel.setProperty("/ProductCollection", oModelData);
   
		
	}

});