jQuery.sap.require("sap.ui.core.util.Export");
jQuery.sap.require("sap.ui.core.util.ExportTypeCSV");

sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Timetable.TimeTableExport",{

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Timetable.TimeTableExport
*/
	onInit: function() {

//		jQuery.sap.require("sap.ui.core.util.Export");
//		jQuery.sap.require("sap.ui.core.util.ExportTypeCSV");
//		
		 var model13 = new sap.ui.model.json.JSONModel();
		    model13.loadData("model/ElectiveSubject.json");
		    
		    var dropdown = this.getView().byId("Select");   
		    dropdown.setModel(model13);
		      
		    var dropdown = this.getView().byId("Sele");   
		    dropdown.setModel(model13);
		      
		    var dropdown = this.getView().byId("Sel");   
		    dropdown.setModel(model13);
		     
		    var prdtable = this.getView().byId("idProductsTable");
		     
			//prdtable.setModel(model13); 
		    
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Timetable.TimeTableExport
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Timetable.TimeTableExport
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Timetable.TimeTableExport
*/
//	onExit: function() {
//
//	}

	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Timetable/SetTimeTable");
		//alert("Pressed");
	},
	
	onExport : sap.m.Table.prototype.exportData || function(oEvent) {
		
		jQuery.sap.require("sap.ui.core.util.Export");
		jQuery.sap.require("sap.ui.core.util.ExportTypeCSV");
		
		
		 
		var oExport = new sap.ui.core.util.Export({

			// Type that will be used to generate the content. Own ExportType's can be created to support other formats
			exportType : new sap.ui.core.util.ExportTypeCSV({
				separatorChar : ",",
				
				
			}),
			
//			 exportType: new sap.ui.core.util.ExportType({
//				  fileExtension: "xls",
//				  charset : "utf-8"
//			 }),

			// Pass in the model created above
			models : this.getView().byId("idProductsTable").getModel(),

			// binding information for the rows aggregation
			rows : {
				path : "/ProductCollection"
			},

			// column definitions with column name and binding info for the content

			columns : [{
				name : "Time Table Name",
				template : {
					content : "{TimeTable Name}"
				}
			}, {
				name : "Course",
				template : {
					content : "{Course}"
				}
			},
			{
				name : "Batch",
				template : {
					content : "{Batch}"
				}
			},
			{
				name : "Subject",
				template : {
					content : "{Subject}"
				}
			},
			{
				name : "Faculty",
				template : {
					content : "{Student}"
				}
			}, {
				name : "Start Date",
				template : {
					content : "{Start Date}"
				}
			},
			{
				name : "End Date",
				template : {
					content : "{End Date}"
				}
			}]
		});

		// download exported file
		oExport.saveFile().then(function() {
			oExport.destroy();
		});
	}
	
		
		
});