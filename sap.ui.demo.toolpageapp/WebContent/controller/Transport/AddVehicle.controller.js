sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/table/SortOrder",
	"sap/ui/model/Sorter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	'sap/ui/core/Fragment',
], function(Controller, SortOrder, Sorter, JSONModel, DateFormat, Fragment) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.toolpageapp.controller.Transport.AddVehicle", {
 
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
 
		clearAllSortings : function(oEvent) {
			var oTable = this.getView().byId("table");
			oTable.getBinding("rows").sort(null);
			this._resetSortingState();
		},
 
		sortCategories : function(oEvent) {
			var oView = this.getView();
			var oTable = oView.byId("table");
			var oCategoriesColumn = oView.byId("categories");
 
			oTable.sort(oCategoriesColumn, this._bSortColumnDescending ? SortOrder.Descending : SortOrder.Ascending, /*extend existing sorting*/true);
			this._bSortColumnDescending = !this._bSortColumnDescending;
		},
 
		sortCategoriesAndName : function(oEvent) {
			var oView = this.getView();
			var oTable = oView.byId("table");
			oTable.sort(oView.byId("categories"), SortOrder.Ascending, false);
			oTable.sort(oView.byId("name"), SortOrder.Ascending, true);
		},
 
		sortDeliveryDate : function(oEvent) {
			var oCurrentColumn = oEvent.getParameter("column");
			var oDeliveryDateColumn = this.getView().byId("deliverydate");
			if (oCurrentColumn != oDeliveryDateColumn) {
				oDeliveryDateColumn.setSorted(false); //No multi-column sorting
				return;
			}
 
			oEvent.preventDefault();
 
			var sOrder = oEvent.getParameter("sortOrder");
			var oDateFormat = DateFormat.getDateInstance({pattern: "dd/MM/yyyy"});
 
			this._resetSortingState(); //No multi-column sorting
			oDeliveryDateColumn.setSorted(true);
			oDeliveryDateColumn.setSortOrder(sOrder);
 
			var oSorter = new Sorter(oDeliveryDateColumn.getSortProperty(), sOrder === SortOrder.Descending);
			//The date data in the JSON model is string based. For a proper sorting the compare function needs to be customized.
			oSorter.fnCompare = function(a, b) {
				if (b == null) {
					return -1;
				}
				if (a == null) {
					return 1;
				}
 
				var aa = oDateFormat.parse(a).getTime();
				var bb = oDateFormat.parse(b).getTime();
 
				if (aa < bb) {
					return -1;
				}
				if (aa > bb) {
					return 1;
				}
				return 0;
			};
 
			this.getView().byId("table").getBinding("rows").sort(oSorter);
		},
 
		_resetSortingState : function() {
			var oTable = this.getView().byId("table");
			var aColumns = oTable.getColumns();
			for (var i=0; i<aColumns.length; i++) {
				aColumns[i].setSorted(false);
			}
		},
		
		handlePressOpenMenu: function(oEvent) {
			var oButton = oEvent.getSource();
 
			// create menu only once
			if (!this._menu) {
				this._menu = sap.ui.xmlfragment(
					"sap.ui.demo.toolpageapp.MenuItemEventing",
					this
				);
				this.getView().addDependent(this._menu);
			}
 
			var eDock = sap.ui.core.Popup.Dock;
			this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		},
 
		handleMenuItemPress: function(oEvent) {
			var msg = "'" + oEvent.getParameter("item").getText() + "' pressed";
			MessageToast.show(msg);
		},
 
		handleTextFieldItemPress: function(oEvent) {
			var msg = "'" + oEvent.getParameter("item").getValue() + "' entered";
			MessageToast.show(msg);
		}
 
//		showInfo : function(oEvent) {
//			try {
//				jQuery.sap.require("sap.ui.demo.toolpageapp");
//				sap.ui.table.sample.TableExampleUtils.showInfo(jQuery.sap.getModulePath("sap.ui.demo.toolpageapp", "/info.json"), oEvent.getSource());
//			} catch(e) {}
//		}
 
	});
 
});