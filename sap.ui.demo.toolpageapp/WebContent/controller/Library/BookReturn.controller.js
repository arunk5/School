sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/table/SortOrder",
	"sap/ui/model/Sorter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	'sap/ui/core/Fragment',
], function(Controller, SortOrder, Sorter, JSONModel, DateFormat, Fragment) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.toolpageapp.controller.Library.BookReturn", {
 
		onInit: function () {
			// set explored app's demo model on this sample
			this.oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.toolpageapp", "/products.json"));
			var oView = this.getView();
			oView.setModel(this.oModel);
			this.oSF = oView.byId("searchField");
		},
 
		onSearch: function (event) {
			var item = event.getParameter("suggestionItem");
			if (item) {
				sap.m.MessageToast.show("search for: " + item.getText());
			}
		},
 
		onSuggest: function (event) {
			var value = event.getParameter("suggestValue");
			var filters = [];
			if (value) {
				filters = [new sap.ui.model.Filter([
		                                               new sap.ui.model.Filter("ProductId", function(sText) {
			                                            	return (sText || "").toUpperCase().indexOf(value.toUpperCase()) > -1;
			                                               }),
			                                           new sap.ui.model.Filter("Name", function(sDes) {
				                                            return (sDes || "").toUpperCase().indexOf(value.toUpperCase()) > -1;
				                                           })
		                                               ], false)];
			}
 
			this.oSF.getBinding("suggestionItems").filter(filters);
			this.oSF.suggest();
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
		},
		handleStethoscopePress: function(evt) {
			var oTile = evt.getSource();
			//MessageToast.show("The GenericTile \"" + oTile.getHeader() + "\" was pressed.");
			//var model = this.getModel();
			var oItem = evt.getParameters("idProductsTable");
			//var selDesc = oItem.getProperty("ariaLabelledBy", currentRowContext);
			//var obj = evt.getSource().getBindingContext("Category").getObject();
			var path = evt.getSource().getBindingContext().getProperty("Category");
	        //var obj = model.getProperty(path);
	        console.log(path);
			//alert(oTile.getAriaLabelledBy(0));
			//console.log(obj);
			//var sKey = 'Library/';
			//this.getRouter().navTo(oTile.getAriaLabelledBy());
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
 
//		showInfo : function(oEvent) {
//			try {
//				jQuery.sap.require("sap.ui.demo.toolpageapp");
//				sap.ui.table.sample.TableExampleUtils.showInfo(jQuery.sap.getModulePath("sap.ui.demo.toolpageapp", "/info.json"), oEvent.getSource());
//			} catch(e) {}
//		}
 
	});
 
});