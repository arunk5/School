sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.GPA.SetExam", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.GPA.SetExam
*/
	onInit: function() {
		
		    var model4 = new sap.ui.model.json.JSONModel();
		    //model4.loadData("model/BatchView.json");
		 
		    var dropdown = this.getView().byId("Select20");   
		    var dropdown1 = this.getView().byId("Select21");
		    var dropdown2 = this.getView().byId("Select22");
		    var dropdown3 = this.getView().byId("Select23");
		    var dropdown4 = this.getView().byId("Select24");
		    
//		    var dropdown4 = this.getView().byId("Select24");
//		    var dropdown4 = this.getView().byId("Select24");
//		    var dropdown4 = this.getView().byId("Select24");
		    
		    
		    
		    var model4 = new sap.ui.model.json.JSONModel();
		 		 
		    var prdtable = this.getView().byId("idProductsTable1");   
		 //   dropdown.setModel(model4);
		    
		    $.ajax({
	   	    	   type: "GET",
	   	           url : "http://php.my-e-school.com/school.php?type=1&table_name=school_GPA_setmarklist",
	   	           crossDomain: true,
	   	           dataType: "json",
	   	          // data:finalData,
	   	           success: function(data) {
	   	         	   console.log("Success"+JSON.stringify(data));
	   	         	   model4.setData(data);
	   	               dropdown.setModel(model4);
	   	         	   dropdown1.setModel(model4);
	   	         	   dropdown2.setModel(model4);
	   	               dropdown3.setModel(model4);
	   	               dropdown4.setModel(model4);
	   	               prdtable.setModel(model4);	   	         	   
	   	         	   
	   	           },
	   	       error: function (data) {
	   	      	 console.log("Failed"+JSON.stringify(data));
	   		   }
	   		});
			      
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Exams.GPA.SetExam
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.GPA.SetExam
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.GPA.SetExam
*/
//	onExit: function() {
//
//	}

});