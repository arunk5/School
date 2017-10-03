sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Certifications.CertificateType", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Certifications.CertificateType
*/
	onInit: function() {
		
		
		
var model1 = new sap.ui.model.json.JSONModel();
model1.loadData("model/Certificates.json");
  var prdtable = this.getView().byId("idProductsTable");
  //console.log("table"+prdtable);
		prdtable.setModel(model1);
  var dropdown = this.getView().byId("SelectId");   
  dropdown.setModel(model1);

		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Certifications.CertificateType
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Certifications.CertificateType
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Certifications.CertificateType
*/
//	onExit: function() {
//
//	}

	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Certifications/GenerateCertificate");
		//alert("Pressed");
	}
});