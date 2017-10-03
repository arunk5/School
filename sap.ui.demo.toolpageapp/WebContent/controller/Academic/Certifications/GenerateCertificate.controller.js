sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Certifications.GenerateCertificate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Certifications.GenerateCertificate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Certifications.GenerateCertificate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Certifications.GenerateCertificate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Certifications.GenerateCertificate
*/
//	onExit: function() {
//
//	}

	    getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

		CertificateTypes:function(evt){
		
		var oTile = evt.getSource();
		var oItem = evt.getParameters();
		this.getRouter().navTo(oTile.getFailedText());
		
	}	,
	
	   CustomCertificate:function(evt){
		
		var oTile = evt.getSource();
		var oItem = evt.getParameters();
		this.getRouter().navTo(oTile.getFailedText());
		
	}  ,
	
	Certificate:function(evt){
		
		var oTile = evt.getSource();
		var oItem = evt.getParameters();
		this.getRouter().navTo(oTile.getFailedText());
		
	}
	
});