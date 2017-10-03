sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/table/SortOrder",
	"sap/ui/model/Sorter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	'sap/ui/core/Fragment',
], function(Controller, SortOrder, Sorter, JSONModel, DateFormat, Fragment) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.toolpageapp.controller.StoreMgmt.InventoryCategory", {
 
		onInit : function () {
			// set explored app's demo model on this sample
			var oJSONModel = this.initSampleDataModel();
			var oView = this.getView();
			oView.setModel(oJSONModel);
 
			//Initial sorting
			var oProductNameColumn = oView.byId("name");
			oView.byId("table");
			
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
 
		onPress:function(oEvent){
			//var oTable = this.getView().byId("idProductsTable");
			var oSelectedItem = oEvent.getSource().getParent();
	        var persnoVal = oSelectedItem.getBindingContext().getProperty("ProductId");
	        var persnoVal1 = oSelectedItem.getBindingContext().getProperty("ProductId");
	        var persnoVal2 = oSelectedItem.getBindingContext().getProperty("ProductId");
	        
	        
	        this._getDialog().open();
	        sap.ui.getCore().byId("idFragment--idPersNo").setValue(persnoVal);
	        sap.ui.getCore().byId("idFragment--idPersNo1").setValue(persnoVal1);
	        sap.ui.getCore().byId("idFragment--idPersNo2").setValue(persnoVal2);
	        
	        
	        
			var oSelectedItem = oEvent.getSource().getParent();
		    var oBindingContext = oSelectedItem.getBindingContext();
		    var sPath = oEvent.getSource().getBindingContext().sPath; 
		    index = sPath.substr(-1)
			
		},
 

		 _getDialog : function() {
	         // create a fragment with dialog, and pass the selected data
	         if (!this.dialog) {
	             // This fragment can be instantiated from a controller as follows:
	             this.dialog = sap.ui.xmlfragment("idFragment1","sap.ui.demo.toolpageapp.view.StoreMgmt.InventoryCategoryFragment", this);
	             //debugger;
	         }	
	         
	         return this.dialog;
		 },
		 
		 closeDialog : function() {
	         this._getDialog().close()
	     },
	     onSave : function(oEvent) {
	         //debugger;
	      
	         var oPersonInfo = sap.ui.getCore().byId("idFragment--idPersNo").getValue();
	      	         
	         var oTable = this.getView().byId("idProductsTable");
			 var oSelectedItem = oTable.getSelectedItem();
			 var aggregations = oTable.getAggregation("items");

			// var index = aggregations.indexOf(oSelectedItem);

		     var oModel = this.getView().byId("idProductsTable").getModel();
	         var oModelData = oModel.getProperty("/ProductCollection");
		    
		    console.log("oModelData"+oModelData);
		    oModelData[index].SNo = oPersonInfo;
		    oModelData[index].Course = oFirstName;
		     
		    oModel.setProperty("/ProductCollection", oModelData);
	        this._getDialog().close();
	     },
 
	});
 
});