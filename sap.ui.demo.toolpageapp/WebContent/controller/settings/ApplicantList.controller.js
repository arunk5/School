sap.ui.controller("sap.ui.demo.toolpageapp.controller.settings.ApplicantList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.settings.ApplicantList
*/
	onInit: function() {

		 var model13 = new sap.ui.model.json.JSONModel();
		    model13.loadData("model/uploadCollection.json");
		    
		    var dropdown = this.getView().byId("UploadCollection");   
		    dropdown.setModel(model13);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.settings.ApplicantList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.settings.ApplicantList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.settings.ApplicantList
*/
//	onExit: function() {
//
//	}

	
	onDownloadItem:function() {
		var oUploadCollection = this.getView().byId("UploadCollection");
		var aSelectedItems = oUploadCollection.getSelectedItems();
		if (aSelectedItems){
			for (var i = 0; i < aSelectedItems.length; i++){
				oUploadCollection.downloadItem(aSelectedItems[i], true);
			}
		} else {
			MessageToast.show("Select an item to download");
		}
	}
		
	
});