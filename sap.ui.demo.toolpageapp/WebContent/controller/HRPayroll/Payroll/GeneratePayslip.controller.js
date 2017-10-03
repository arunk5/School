sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.Payroll.GeneratePayslip", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.Payroll.GeneratePayslip
*/
	onInit: function() {
		
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

		 var prdtable = this.getView().byId("Sel");
		    //console.log("table"+prdtable);
				prdtable.setModel(model5); 
		
				 var model6 = new sap.ui.model.json.JSONModel({
					  trips: [
					          
					          {							
				                "VALUE": "2017 "							
					          },  
					          {							
					                "VALUE": "2016 "							
						          },  
						          {							
						                "VALUE": "2015 "							
							          },  
							          {							
							                "VALUE": "2014 "							
								          },  
								          {							
								                "VALUE": "2013 "							
									          },  
									          {							
									                "VALUE": "2012 "							
										          },  
										          {							
										                "VALUE": "2011"							
											          },  
											          {							
											                "VALUE": "2010 "							
												          },  
												          {							
												                "VALUE": "2009 "							
													          },  
													          {							
													                "VALUE": "2008"							
														          },  
														          {							
														                "VALUE": "2007"							
															          },  
															          {							
															                "VALUE": "2006"							
																          },  
					    
					  ]
					
					});

				 var prdtable = this.getView().byId("Sel1");
				    //console.log("table"+prdtable);
						prdtable.setModel(model6); 
				
						var model12 = new sap.ui.model.json.JSONModel();
						  model12.loadData("model/TeacherView.json");
						    var prdtable2 = this.getView().byId("Select");
						    //console.log("table"+prdtable);
								prdtable2.setModel(model12);
								
								  var prdtable1 = this.getView().byId("Sele");
								    //console.log("table"+prdtable);
										prdtable1.setModel(model12);
										
										var prdtable1 = this.getView().byId("Desg");
									    //console.log("table"+prdtable);
											prdtable1.setModel(model12);
											
											var prdtable1 = this.getView().byId("EName");
										    //console.log("table"+prdtable);
												prdtable1.setModel(model12);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.Payroll.GeneratePayslip
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.Payroll.GeneratePayslip
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.Payroll.GeneratePayslip
*/
//	onExit: function() {
//
//	}

});