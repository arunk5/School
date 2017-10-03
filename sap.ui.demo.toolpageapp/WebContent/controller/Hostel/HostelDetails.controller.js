sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/table/SortOrder",
	"sap/ui/model/Sorter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	'sap/ui/core/Fragment',
], function(Controller, SortOrder, Sorter, JSONModel, DateFormat, Fragment) {
    "use strict";
 
    return Controller.extend("sap.ui.demo.toolpageapp.controller.Hostel.HostelDetails", {
 
		onInit : function () {
			// set explored app's demo model on this sample
			var oJSONModel = this.initSampleDataModel();
			var oView = this.getView();
			oView.setModel(oJSONModel);
 
			//Initial sorting
			var oProductNameColumn = oView.byId("name");
			oView.byId("idProductsTable");
			
//			this.byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent){
//				this._bKeyboard = oEvent.type == "keyup";
//			}, this);
		},
 
		initSampleDataModel : function() {
			var oModel = new JSONModel();
 
			var oDateFormat = DateFormat.getDateInstance({source: {pattern: "timestamp"}, pattern: "dd/MM/yyyy"});
 
			jQuery.ajax(jQuery.sap.getModulePath("sap.ui.demo.toolpageapp", "/products.json"), {
				dataType: "json",
				success: function (oData) {
					var aTemp1 = [];
					var aTemp2 = [];
					var aSuppliersData = [];
					var aCategoryData = [];
					for (var i=0; i<oData.ProductCollection.length; i++) {
						var oProduct = oData.ProductCollection[i];
						if (oProduct.SupplierName && jQuery.inArray(oProduct.SupplierName, aTemp1) < 0) {
							aTemp1.push(oProduct.SupplierName);
							aSuppliersData.push({Name: oProduct.SupplierName});
						}
						if (oProduct.Category && jQuery.inArray(oProduct.Category, aTemp2) < 0) {
							aTemp2.push(oProduct.Category);
							aCategoryData.push({Name: oProduct.Category});
						}
						oProduct.DeliveryDate = (new Date()).getTime() - (i%10 * 4 * 24 * 60 * 60 * 1000);
						oProduct.DeliveryDateStr = oDateFormat.format(new Date(oProduct.DeliveryDate));
						oProduct.Heavy = oProduct.WeightMeasure > 1000 ? "true" : "false";
						oProduct.Available = oProduct.Status == "Available" ? true : false;
					}
 
					oData.Suppliers = aSuppliersData;
					oData.Categories = aCategoryData;
 
					oModel.setData(oData);
				}.bind(this),
				error: function () {
					jQuery.sap.log.error("failed to load json");
				}
			});
 
			return oModel;
		},
 
        onCollapseAll: function () {
            var oTreeTable = this.getView().byId("TreeTableBasic");
            oTreeTable.collapseAll();
        },
 
        onExpandFirstLevel: function () {
            var oTreeTable = this.getView().byId("TreeTableBasic");
            oTreeTable.expandToLevel(1);
        }
    });
 
});