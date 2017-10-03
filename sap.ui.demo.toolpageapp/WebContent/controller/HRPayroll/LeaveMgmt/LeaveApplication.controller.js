sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.LeaveMgmt.LeaveApplication", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.LeaveMgmt.LeaveApplication
*/
	onInit: function() {
		
		 var model5 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {	
			        	"SNo" :"1",
		                "VALUE": "Annual "							
			          },  
			          {		"SNo" :"2",					
			                "VALUE": "Casual "							
				          },  
				          {		
				        	   "SNo" :"3",
				                "VALUE": "Emergency "							
					          },  
					          {			"SNo" :"4",				
					                "VALUE": "Personal "							
						          },  
						          {				"SNo" :"5",			
						                "VALUE": "Loss Of Pay "							
							          }
						     
			  ]
			
			});

		 var prdtable = this.getView().byId("SelectId");
		    //console.log("table"+prdtable);
				prdtable.setModel(model5); 
		
			      var model2 = new sap.ui.model.json.JSONModel();
			         model2.loadData("model/TeacherView.json");
			         
			         var prdtable1 = this.getView().byId("idProductsTable");
					    //console.log("table"+prdtable);
							prdtable1.setModel(model2); 

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.LeaveMgmt.LeaveApplication
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.LeaveMgmt.LeaveApplication
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.LeaveMgmt.LeaveApplication
*/
//	onExit: function() {
//
//	}


	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("HRPayroll/LeaveMgmt/LeaveDetails");
		//alert("Pressed");
	},
	
	
	   onDelete:function(oEvent)
	    {
	    	
	    	 var sPath = oEvent.getSource().getBindingContext().sPath; 
	         var init = sPath.substr(-1)

	        // console.log("Init"+init);
	        var oModel = this.getView().byId("idProductsTable").getModel();
	    	//var oModel = sap.ui.getCore().getModel();
	        var oModelData = oModel.getProperty("/trips");
	        oModelData.splice(init,1);
	        oModel.setProperty("/trips", oModelData);
	   
	    	
	    } ,
	    
	    
		onPress:function(oEvent){
			
			//var oTable = this.getView().byId("idProductsTable");
			var oSelectedItem = oEvent.getSource().getParent();
	        var SNo = oSelectedItem.getBindingContext().getProperty("SNo");
	        var LeaveType = oSelectedItem.getBindingContext().getProperty("LeaveType");
	        var StartDate = oSelectedItem.getBindingContext().getProperty("StartDate");
	        //var firstnameVal = oSelectedItem.getBindingContext().getProperty("StartDate");
//			
	        this._getDialog().open();
	        
	        sap.ui.getCore().byId("idFragment17--SNo").setValue(SNo);
	        sap.ui.getCore().byId("idFragment17--UserType").setValue(LeaveType);
	        sap.ui.getCore().byId("idFragment17--FrmDate").setValue(StartDate);
	        sap.ui.getCore().byId("idFragment17--ToDate").setValue(StartDate);
	        sap.ui.getCore().byId("idFragment17--Status").setValue("Approved");

	        
	        
			 var oSelectedItem = oEvent.getSource().getParent();
		      var oBindingContext = oSelectedItem.getBindingContext();

	        
		       var sPath = oEvent.getSource().getBindingContext().sPath; 
		                index = sPath.substr(-1)
			 
		           //     console.log("index     "+index);
		},
		
		 _getDialog : function() {
	         // create a fragment with dialog, and pass the selected data
	         if (!this.dialog) {
	             // This fragment can be instantiated from a controller as follows:
	             this.dialog = sap.ui.xmlfragment("idFragment17","sap.ui.demo.toolpageapp.view.HRPayroll.LeaveMgmt.LeaveApp", this);
	             //debugger;
	         }	
	         
	         return this.dialog;
		 },
		 
		 closeDialog : function() {
	         this._getDialog().close()
	     },
	     onSave : function(oEvent) {
	         //debugger;
	      
	         var oPersonInfo = sap.ui.getCore().byId("idFragment17--SNo").getValue();
	         var oFirstName = sap.ui.getCore().byId("idFragment17--UserType").getValue();

	         
	         
	         var oTable = this.getView().byId("idProductsTable");
			 var oSelectedItem = oTable.getSelectedItem();
			 var aggregations = oTable.getAggregation("items");
	 
		   	 
		   	 
		     var oModel = this.getView().byId("idProductsTable").getModel();
	         var oModelData = oModel.getProperty("/trips");
		    
		    console.log("oModelData"+oModelData);
		     oModelData[index].SNo = oPersonInfo;
		     oModelData[index].Department = oFirstName;

		     oModel.setProperty("/trips", oModelData);
		   	 

	         this._getDialog().close();
	         
	         
	         
	     }
});