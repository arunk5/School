sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Timetable.SearchProxy", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Timetable.SearchProxy
*/
	onInit: function() {

		   
	    var model13 = new sap.ui.model.json.JSONModel();
	 //   model13.loadData("model/ElectiveSubject.json");
	    
	    var dropdown = this.getView().byId("Select");   
	    //dropdown.setModel(model13);
	      
	    var dropdown1 = this.getView().byId("Sele");   
	   // dropdown.setModel(model13);
	      
	    var dropdown2 = this.getView().byId("Sel");   
	  //  dropdown.setModel(model13);
	     
	 //   var dropdown = this.getView().byId("Subject");   
	  //  dropdown.setModel(model13); 
	    
	      var prdtable = this.getView().byId("idProductsTable");
	     
	      var coursemodel = new sap.ui.model.json.JSONModel();
		    
	        $.ajax({

	            type: "GET",

	            url : "http://php.my-e-school.com/school.php?type=1&table_name=school_subject",
	           	 //"http://my-e-school.com/school.php?table_name=school_course",
	            crossDomain: true,
	            dataType: "json",
	       /*     contentType:"application/json; charset=utf-8",
	            headers:{
	           	 
	            "Access-Control-Allow-Origin": "*",
	            "Access-Control-Allow-Credentials": "true"
	           	 
	            },*/
	            success: function(data,textStatus,jqXHR) {
	           	     console.log("Success");
	            	   //  console.log(data);
	                            data12 = data;
	                            //doSomething(data12);
	                        //   var oVizFrame1 =  this.getView().byId("idProductsTable");
	                           coursemodel.setData(data12);
	                       //     console.log(coursemodel);
	                           dropdown1.setModel(coursemodel);
	                           dropdown.setModel(coursemodel);
	                           prdtable.setModel(coursemodel);
	                           dropdown2.setModel(coursemodel);
	                          // dropdown4.setModel(coursemodel);
	                           
	                        //   this.setModel(data,"idProductsTable");

	            },
	        error: function () {
	       	 console.log("Failed");
				}
			});
		    
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Timetable.SearchProxy
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Timetable.SearchProxy
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Timetable.SearchProxy
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
	
	handleLinkPress:function(oEvent){
		
//		alert("press");
		
		   
   	     var Course = this.getView().byId("Select").getSelectedKey();   
     	 var Batch = this.getView().byId("Sele").getSelectedKey(); 
     	 var Subject = this.getView().byId("Subject").getSelectedKey(); 
     	 var Day = this.getView().byId("Sel").getSelectedItem().getText();
       	 var time = this.getView().byId("TP3").getValue();

   	 
		sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Timetable.ActiveTimeTable").addTimeTable(Course,Batch,Subject,time,Day);
	}
	
});