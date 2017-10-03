sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.GPA.SubjectCreditPoint", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.GPA.SubjectCreditPoint
*/
	onInit: function() {
		
		 var model13 = new sap.ui.model.json.JSONModel();
		    model13.loadData("model/ElectiveSubject.json");
		 
		      var prdtable = this.getView().byId("idProductsTable");
		     
				prdtable.setModel(model13);
			
				 
			    var dropdown = this.getView().byId("Select");   
			    dropdown.setModel(model13);
			      
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Exams.GPA.SubjectCreditPoint
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.GPA.SubjectCreditPoint
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.GPA.SubjectCreditPoint
*/
//	onExit: function() {
//
//	}
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Exams/GPAOverView");
		//alert("Pressed");
	},
	
      onPress:function(oEvent){
		
		//var oTable = this.getView().byId("idProductsTable");
		var oSelectedItem = oEvent.getSource().getParent();
        var persnoVal = oSelectedItem.getBindingContext().getProperty("SNo");
        var firstnameVal = oSelectedItem.getBindingContext().getProperty("Subject");
        var lastnameVal = oSelectedItem.getBindingContext().getProperty("LowerMark");
//        var deptVal = oSelectedItem.getBindingContext().getProperty("MinimumAttendance");   
//        var eMail = oSelectedItem.getBindingContext().getProperty("TotalWorkingDays");
//		
        this._getDialog().open();
        
        sap.ui.getCore().byId("idFragment13--SNo").setValue(persnoVal);
        sap.ui.getCore().byId("idFragment13--Subject").setValue(firstnameVal);
        sap.ui.getCore().byId("idFragment13--LowerMark").setValue(lastnameVal);
//        sap.ui.getCore().byId("idFragment13--idDepartment").setValue(deptVal);               
//        sap.ui.getCore().byId("idFragment13--idEMail").setValue(eMail);
        
        
        
		 var oSelectedItem = oEvent.getSource().getParent();
	      var oBindingContext = oSelectedItem.getBindingContext();

		  //alert(sItemName);
		 
		// console.log("oBindingContext"+oBindingContext.sPath);
		 

         
	       var sPath = oEvent.getSource().getBindingContext().sPath; 
	                index = sPath.substr(-1)
		 
	          //      console.log("index     "+index);
	},
	
	 _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment13","sap.ui.demo.toolpageapp.view.Academic.Exams.GPA.SubjectCreditPoint", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 closeDialog : function() {
         this._getDialog().close()
     },
     onSave : function(oEvent) {
         //debugger;
      
         var oPersonInfo = sap.ui.getCore().byId("idFragment13--SNo").getValue();
         var oFirstName = sap.ui.getCore().byId("idFragment13--Subject").getValue();
         var oLastName = sap.ui.getCore().byId("idFragment13--LowerMark").getValue();

         
         var oTable = this.getView().byId("idProductsTable");
		 var oSelectedItem = oTable.getSelectedItem();
		 var aggregations = oTable.getAggregation("items");


	   	 
	   	 
	     var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
	    
	  //  console.log("oModelData"+oModelData);
	     oModelData[index].SNo = oPersonInfo;
	     oModelData[index].Subject = oFirstName;
	     oModelData[index].LowerMark = oLastName;
//	     oModelData[index].MinimumAttendance = oDept;
//	     oModelData[index].TotalWorkingDays = oEmail;
	     
	     oModel.setProperty("/ProductCollection", oModelData);
	   	 

         this._getDialog().close();
         
         
         
     },
     
     onDelete1:function(oEvent)
     {
    	 console.log("Init"+init);
     	 var sPath = oEvent.getSource().getBindingContext().sPath; 
          var init = sPath.substr(-1)

          console.log("Init"+init);
         var oModel = this.getView().byId("idProductsTable").getModel();
     	//var oModel = sap.ui.getCore().getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
         oModelData.splice(init,1);
         oModel.setProperty("/ProductCollection", oModelData);
     	
     	

     	
     	
     } 

});