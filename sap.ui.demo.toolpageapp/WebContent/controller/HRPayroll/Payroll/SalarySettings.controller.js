sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.Payroll.SalarySettings", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.Payroll.SalarySettings
*/
	onInit: function() {
		
		var model2 = new sap.ui.model.json.JSONModel();
        model2.loadData("model/TeacherView.json");
		
        var usertype = this.getView().byId("SelectId");   
        usertype.setModel(model2);
        
        var usertype1 = this.getView().byId("Select");   
        usertype1.setModel(model2);
        
        var usertype2 = this.getView().byId("Sele");   
        usertype2.setModel(model2);
        
        var usertype3 = this.getView().byId("S");   
        usertype3.setModel(model2);
        
        var table = this.getView().byId("idProductsTable");   
        table.setModel(model2);
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.Payroll.SalarySettings
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.Payroll.SalarySettings
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.Payroll.SalarySettings
*/
//	onExit: function() {
//
//	}
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("HRPayroll/Payroll/PayHead");
		//alert("Pressed");
	},
	
onPress:function(oEvent){
		
		//var oTable = this.getView().byId("idProductsTable");
		var oSelectedItem = oEvent.getSource().getParent();
        var SNo = oSelectedItem.getBindingContext().getProperty("SNo");
        var EmpName = oSelectedItem.getBindingContext().getProperty("ClassTeacher");
        var PayHead = oSelectedItem.getBindingContext().getProperty("ClassTeacher");
        var Unit = oSelectedItem.getBindingContext().getProperty("Hours");
        var Type = oSelectedItem.getBindingContext().getProperty("User");

//		
        this._getDialog().open();
        
        sap.ui.getCore().byId("idFragment16--SNo").setValue(SNo);
        sap.ui.getCore().byId("idFragment16--EmployeeName").setValue(EmpName);
        sap.ui.getCore().byId("idFragment16--PayHead").setValue(PayHead);
        sap.ui.getCore().byId("idFragment16--Unit").setValue(Unit);
        sap.ui.getCore().byId("idFragment16--Type").setValue(Type);
        
        
		  var oSelectedItem = oEvent.getSource().getParent();
	      var oBindingContext = oSelectedItem.getBindingContext();

        
	       var sPath = oEvent.getSource().getBindingContext().sPath; 
	                index = sPath.substr(-1)
		 
	         
	},
	
	 _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment16","sap.ui.demo.toolpageapp.view.HRPayroll.Payroll.Salary", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 closeDialog : function() {
         this._getDialog().close()
     },
     onSave : function(oEvent) {
         //debugger;
      
         var SNo = sap.ui.getCore().byId("idFragment16--SNo").getValue();
         var EmpName = sap.ui.getCore().byId("idFragment16--EmployeeName").getValue();
         var PayHead =  sap.ui.getCore().byId("idFragment16--PayHead").getValue();
         var Unit = sap.ui.getCore().byId("idFragment16--Unit").getValue();
         var Type = sap.ui.getCore().byId("idFragment16--Type").getValue();
       //  var oFirstName = sap.ui.getCore().byId("idFragment16--UserType").getValue();

         
         
         var oTable = this.getView().byId("idProductsTable");
		 var oSelectedItem = oTable.getSelectedItem();
		 var aggregations = oTable.getAggregation("items");
 
	   	 
	   	 
	     var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
	    
         
         
         
	     console.log("oModelData"+oModelData);
	     oModelData[index].SNo = SNo;
	     oModelData[index].ClassTeacher = EmpName;
	     oModelData[index].ClassTeacher = PayHead;
	     oModelData[index].Hours = Unit;
	     oModelData[index].User = Type;

	     oModel.setProperty("/ProductCollection", oModelData);
	   	 

         this._getDialog().close();
         
         
         
     },
     onDelete:function(oEvent)
     {
     	
     	 var sPath = oEvent.getSource().getBindingContext().sPath; 
          var init = sPath.substr(-1)

         // console.log("Init"+init);
         var oModel = this.getView().byId("idProductsTable").getModel();
     	//var oModel = sap.ui.getCore().getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
         oModelData.splice(init,1);
         oModel.setProperty("/ProductCollection", oModelData);
    
     	
     } 

});