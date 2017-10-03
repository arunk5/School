sap.ui.controller("sap.ui.demo.toolpageapp.controller.student.StudentAdmission", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.student.StudentAdmission
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.student.StudentAdmission
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.student.StudentAdmission
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.student.StudentAdmission
*/
//	onExit: function() {
//
//	}

	onInit: function() {

		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

		var model = new sap.ui.model.json.JSONModel({
		 trips: [
		         
		         {

		             "VALUE": " Please Select ",

		             "KEY": " Please Select "

		            },
		         
		         
		         
		         {

		               "VALUE": " Daily ",

		               "KEY": " Daily  "

		              },     
		   
		            {

		                "VALUE": " Weekly ",

		                "KEY": " Weekly "

		           },
		           
		           
		           {

		               "VALUE": " Subject Wise ",

		               "KEY": " Subject Wise "

		          }
		           
		   
		 ]
		// selectedTrip: ''
		});

		//this.getView().setModel(model);

		var dropdown = this.getView().byId("Course"); 
		var dropdown1 = this.getView().byId("Batch");
		var dropdown2 = this.getView().byId("Gender");
		var dropdown3 = this.getView().byId("Blood");
		    dropdown.setModel(model);

		        var model2 = new sap.ui.model.json.JSONModel();
		        model2.loadData("model/CourseView.json");
		        
		        var table = this.getView().byId("idProductsTable");
		        var coursemodel = new sap.ui.model.json.JSONModel();
		        
		       // 
		        
		        $.ajax({

		            type: "GET",

		            url : "http://php.my-e-school.com/school.php?type=1&table_name=school_student_detail",
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
		                console.log(data);
		                            data12 = data;
		                            //doSomething(data12);
		                        //   var oVizFrame1 =  this.getView().byId("idProductsTable");
		                           coursemodel.setData(data12);
		                            console.log(coursemodel);
		                            dropdown.setModel(coursemodel);
		                            dropdown1.setModel(coursemodel);
		                            dropdown2.setModel(coursemodel);
		                            dropdown3.setModel(coursemodel);
		                        //   this.setModel(data,"idProductsTable");

		            },
		        error: function () {
		       	console.log("Failed");
		       }
		   });
	 	}
		});
