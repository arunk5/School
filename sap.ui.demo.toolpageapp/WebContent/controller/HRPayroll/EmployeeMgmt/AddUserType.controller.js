sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.EmployeeMgmt.AddUserType", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.EmployeeMgmt.AddUserType
*/
	onInit: function() {

		
		
        var model2 = new sap.ui.model.json.JSONModel();
        model2.loadData("model/TeacherView.json");
		
        var dropdown = this.getView().byId("idProductsTable");   
	      dropdown.setModel(model2);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.EmployeeMgmt.AddUserType
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.EmployeeMgmt.AddUserType
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.EmployeeMgmt.AddUserType
*/
//	onExit: function() {
//
//	}
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("HRPayroll/EmployeeMgmt/EmployeeList");
		//alert("Pressed");
	},
	
	
	onPress:function(oEvent){
		
		//var oTable = this.getView().byId("idProductsTable");
		var oSelectedItem = oEvent.getSource().getParent();
        var persnoVal = oSelectedItem.getBindingContext().getProperty("SNo");
        var firstnameVal = oSelectedItem.getBindingContext().getProperty("User");

//		
        this._getDialog().open();
        
        sap.ui.getCore().byId("idFragment13--SNo").setValue(persnoVal);
        sap.ui.getCore().byId("idFragment13--UserType").setValue(firstnameVal);

        
        
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
             this.dialog = sap.ui.xmlfragment("idFragment13","sap.ui.demo.toolpageapp.view.HRPayroll.EmployeeMgmt.AddUserType", this);
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
         var oFirstName = sap.ui.getCore().byId("idFragment13--UserType").getValue();

         
         
         var oTable = this.getView().byId("idProductsTable");
		 var oSelectedItem = oTable.getSelectedItem();
		 var aggregations = oTable.getAggregation("items");
 
	   	 
	   	 
	     var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
	    
	    console.log("oModelData"+oModelData);
	     oModelData[index].SNo = oPersonInfo;
	     oModelData[index].User = oFirstName;

	     oModel.setProperty("/ProductCollection", oModelData);
	   	 

         this._getDialog().close();
         
         
         
     },

     onCreate:function(oEvent){
    	 
       var Course = this.getView().byId("SelectId").getValue();   

       var oModel = this.getView().byId("idProductsTable").getModel();
       var oModelData = oModel.getProperty("/ProductCollection");
       console.log("oModelData"+oModelData);
    	 
    	 
    	 
       var finalData ={
               "SNo": oModelData.length+1,
               "User": Course,
                };    

       oModelData.push(finalData);
       oModel.setProperty("/ProductCollection", oModelData);
    	 
        
      // if(check=="true")
    	   {
       jQuery.sap.require("sap.m.MessageBox");
       sap.m.MessageBox.success(
           "User Has Been Added Successfully", {
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

         console.log("Init"+init);
        var oModel = this.getView().byId("idProductsTable").getModel();
    	//var oModel = sap.ui.getCore().getModel();
        var oModelData = oModel.getProperty("/ProductCollection");
        oModelData.splice(init,1);
        oModel.setProperty("/ProductCollection", oModelData);
   
    	
    } 

});