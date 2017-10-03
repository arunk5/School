sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.Attendance", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.Attendance
*/
	onInit: function() {

		 
		
        var model2 = new sap.ui.model.json.JSONModel();
        model2.loadData("model/ElectiveSubject.json");
		
          var dropdown = this.getView().byId("1");   
	      dropdown.setModel(model2);
	      
	        var model21 = new sap.ui.model.json.JSONModel();
	        model21.loadData("model/AllocatedSubjects.json");
			
	        var dropdown = this.getView().byId("Select123");   
		    dropdown.setModel(model21);
	      
	      
	      
	      var dropdown1 = this.getView().byId("Select");   
	      dropdown1.setModel(model2);
	      
	      
	      var model5 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {							
		                "VALUE": "Jan "							
			          },  
			          {							
			                "VALUE": "Feb "							
				          },  
				          {							
				                "VALUE": "March "							
					          },  
					          {							
					                "VALUE": "April "							
						          },  
						          {							
						                "VALUE": "May "							
							          },  
							          {							
							                "VALUE": "June "							
								          },  
								          {							
								                "VALUE": "July"							
									          },  
									          {							
									                "VALUE": "August "							
										          },  
										          {							
										                "VALUE": "Sepetember "							
											          },  
											          {							
											                "VALUE": "October"							
												          },  
												          {							
												                "VALUE": "Novomber"							
													          },  
													          {							
													                "VALUE": "December"							
														          },  
			    
			  ]
			
			});

		 var prdtable = this.getView().byId("Select1234");
		    //console.log("table"+prdtable);
				prdtable.setModel(model5); 
	      
	      
	      
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.Attendance
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.Attendance
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.Attendance
*/
//	onExit: function() {
//
//	}

});