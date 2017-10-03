sap.ui.controller("sap.ui.demo.toolpageapp.controller.HRPayroll.Payroll.EmployeeSalary", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.HRPayroll.Payroll.EmployeeSalary
*/
	onInit: function() {
		
		
		  var model6 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
//			          {
//
//			                "VALUE": "  ",
//
//			                "KEY": "  "
//
//			               },     
			    
			  ]
			
			});
		
		  var prdtable = this.getView().byId("idProductsTables");
		    //console.log("table"+prdtable);
				prdtable.setModel(model6);
	
				var model12 = new sap.ui.model.json.JSONModel();
				  model12.loadData("model/TeacherView.json");
				    var prdtable = this.getView().byId("idProductsTable");
				    //console.log("table"+prdtable);
						prdtable.setModel(model12);

						
						  var prdtable = this.getView().byId("SelectId");
						    //console.log("table"+prdtable);
								prdtable.setModel(model12); 
								
								var prdtable = this.getView().byId("Select");
							    //console.log("table"+prdtable);
									prdtable.setModel(model12);  
									
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

									 var prdtable = this.getView().byId("Sele");
									    //console.log("table"+prdtable);
											prdtable.setModel(model5); 
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.HRPayroll.Payroll.EmployeeSalary
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.HRPayroll.Payroll.EmployeeSalary
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.HRPayroll.Payroll.EmployeeSalary
*/
//	onExit: function() {
//
//	}
	
	Accept:function(oEvent){
		
		   var one = this.getView().byId("1").getValue();
		   var two = this.getView().byId("2").getValue();
	//	   console.log(one+"  "+two);
		
		   var oModel = this.getView().byId("idProductsTables").getModel();
           var oModelData = oModel.getProperty("/trips");

        var finalData ={
                "VALUE": one,
                "KEY": two,
                "Symbol":"+"
              };    

        oModelData.push(finalData);
        oModel.setProperty("/trips", oModelData);
		
	},
	
	Acceptless:function(oEvent){
		
		   var one = this.getView().byId("1").getValue();
		   var two = this.getView().byId("2").getValue();
	//	   console.log(one+"  "+two);
		
		   var oModel = this.getView().byId("idProductsTables").getModel();
           var oModelData = oModel.getProperty("/trips");

     var finalData ={
             "VALUE": one,
             "KEY": two,
             "Symbol":"-"
           };    

     oModelData.push(finalData);
     oModel.setProperty("/trips", oModelData);
		
	},
	
	 closeDialog : function() {
         this._getDialog().close()
     },
     
     _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment4","sap.ui.demo.toolpageapp.view.Academic.LessonPlanning.LessonPlanning", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 onPress:function(oEvent){
			
			
			//var oTable = this.getView().byId("idProductsTable");
			var oSelectedItem = oEvent.getSource().getParent();
	        var Sno = oSelectedItem.getBindingContext().getProperty("SNo");
	        var Course = oSelectedItem.getBindingContext().getProperty("Course");
	        var Batch = oSelectedItem.getBindingContext().getProperty("Batch");
	        var Student = oSelectedItem.getBindingContext().getProperty("Subject");
	        var LCode = oSelectedItem.getBindingContext().getProperty("LectureCode");   
	        
			
	        this._getDialog().open();
	        
	        sap.ui.getCore().byId("idFragment4--SNo").setValue(Sno);
	        sap.ui.getCore().byId("idFragment4--Course").setValue(Course);
	        sap.ui.getCore().byId("idFragment4--Batch").setValue(Batch);
	        sap.ui.getCore().byId("idFragment4--Subject").setValue(Student);
	        sap.ui.getCore().byId("idFragment4--LectureCode").setValue(LCode);               
	      //  sap.ui.getCore().byId("idFragment--idEMail").setValue(eMail);
	        
	        
	        
			 var oSelectedItem = oEvent.getSource().getParent();
		      var oBindingContext = oSelectedItem.getBindingContext();

			  //alert(sItemName);
			 
			 //console.log("oBindingContext"+oBindingContext.sPath);
			 

	         
		       var sPath = oEvent.getSource().getBindingContext().sPath; 
		                index = sPath.substr(-1)
			 
		                console.log("index     "+index);
			
		},
		
	onSave:function(){
		

		
		  var Sno = sap.ui.getCore().byId("idFragment4--SNo").getValue();
	      var Course = sap.ui.getCore().byId("idFragment4--Course").getValue();
	      var Batch = sap.ui.getCore().byId("idFragment4--Batch").getValue();
	      var LectureCode = sap.ui.getCore().byId("idFragment4--LectureCode").getValue();
	      var Subject = sap.ui.getCore().byId("idFragment4--Subject").getValue();
	      
	  

     var oModel = this.getView().byId("idProductsTable").getModel();
     var oModelData = oModel.getProperty("/ProductCollection");
    
   // console.log("oModelData"+oModelData);
     oModelData[index].SNo = Sno;
     oModelData[index].Course = Course;
     oModelData[index].Batch = Batch;
     oModelData[index].LectureCode = LectureCode;
     oModelData[index].Subject = Subject;
     
     
     oModel.setProperty("/ProductCollection", oModelData);
   	 

     this._getDialog().close();

	
		
	},
	OnDelete:function(oEvent){

		 var sPath = oEvent.getSource().getBindingContext().sPath; 
	     var init = sPath.substr(-1)

	  //   console.log("Init"+init);
	    var oModel = this.getView().byId("idProductsTable").getModel();
		//var oModel = sap.ui.getCore().getModel();
	    var oModelData = oModel.getProperty("/ProductCollection");
	    oModelData.splice(init,1);
	    oModel.setProperty("/ProductCollection", oModelData);
		
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
			},

		
		BackButtonPress:function(){
			
			this.getRouter().navTo("HRPayroll/Payroll/PayHead");
			//alert("Pressed");
		},
	
	

});