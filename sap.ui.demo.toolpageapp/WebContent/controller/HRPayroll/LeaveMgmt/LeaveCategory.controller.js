sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.LeaveMgmt.LeaveCategory", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.LeaveMgmt.LeaveCategory
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

		 var prdtable = this.getView().byId("idProductsTable");
		    //console.log("table"+prdtable);
				prdtable.setModel(model5); 
		
		
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.LeaveMgmt.LeaveCategory
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.LeaveMgmt.LeaveCategory
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.LeaveMgmt.LeaveCategory
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

	  onCreate:function(oEvent){
	    	 
	       var Course = this.getView().byId("SelectId987").getValue();   

	       var oModel = this.getView().byId("idProductsTable").getModel();
	       var oModelData = oModel.getProperty("/trips");
	       console.log("oModelData"+oModelData);
	    	 
	    	 
	    	 
	       var finalData ={
	               "SNo": oModelData.length+1,
	               "VALUE": Course,
	                };    

	       oModelData.push(finalData);
	       oModel.setProperty("/trips", oModelData);
	    	 
	        
	      // if(check=="true")
	    	   {
	       jQuery.sap.require("sap.m.MessageBox");
	       sap.m.MessageBox.success(
	           "Leave Category Has Been Added Successfully", {
	               icon: sap.m.MessageBox.Icon.INFORMATION,
	               title: "Success",
	               actions: [sap.m.MessageBox.Action.OK],
	             //  onClose: function(oAction) { / * do something * / }
	           }
	         );
	       
	       } 
	    	 
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
	        var persnoVal = oSelectedItem.getBindingContext().getProperty("SNo");
	        var firstnameVal = oSelectedItem.getBindingContext().getProperty("VALUE");

//			
	        this._getDialog().open();
	        
	        sap.ui.getCore().byId("idFragment17--SNo").setValue(persnoVal);
	        sap.ui.getCore().byId("idFragment17--UserType").setValue(firstnameVal);

	        
	        
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
	             this.dialog = sap.ui.xmlfragment("idFragment17","sap.ui.demo.toolpageapp.view.HRPayroll.LeaveMgmt.LeaveCat", this);
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
		     oModelData[index].VALUE = oFirstName;

		     oModel.setProperty("/trips", oModelData);
		   	 

	         this._getDialog().close();
	         
	         
	         
	     }



});