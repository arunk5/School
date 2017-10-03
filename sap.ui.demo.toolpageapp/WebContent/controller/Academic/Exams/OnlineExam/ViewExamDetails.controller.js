sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.OnlineExam.ViewExamDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.OnlineExam.ViewExamDetails
*/
	onInit: function() {
		
		var model13 = new sap.ui.model.json.JSONModel();
		  model13.loadData("model/ElectiveSubject.json");
		    var prdtable = this.getView().byId("Select");
		    var prdt = this.getView().byId("Sele");
		    var pr = this.getView().byId("Sel");
		   
			prdtable.setModel(model13);
			prdt.setModel(model13);
			pr.setModel(model13);
			

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Exams.OnlineExam.ViewExamDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.OnlineExam.ViewExamDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.OnlineExam.ViewExamDetails
*/
//	onExit: function() {
//
//	}
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Exams/UnitTest");
		//alert("Pressed");
		
		
	}

});