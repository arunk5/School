sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.GPA.SetTerm", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.GPA.SetTerm
*/
	onInit: function() {
		
	    var model13 = new sap.ui.model.json.JSONModel();
	    model13.loadData("model/ElectiveSubject.json");
	    
	    var dropdown = this.getView().byId("Select");   
	  //  dropdown.setModel(model13);
	      
	    
	    var model2 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
//			          {
//
//			                "VALUE": "  ",
//
//			                "KEY": "  "
//
//			               },     
			     {

        "VALUE": " MBA ",

        "KEY": " MBA "

       },
       {

           "VALUE": " BCA ",

           "KEY": " BCA "

      },
      
      {

          "VALUE": " Economics ",

          "KEY": " Economics "

     }
      ,
      {

          "VALUE": " B.Com ",

          "KEY": " B.Com "

     },
     {

         "VALUE": " PCM ",

         "KEY": " PCM "

    }
			    
			  ]
			 // selectedTrip: ''
			});
		
		var dropdown = this.getView().byId("SelectId");   
	    dropdown.setModel(model2);
	   
	      var prdtable = this.getView().byId("idProductsTable");
	      var model4 = new sap.ui.model.json.JSONModel({});
	      $.ajax({
	    	   type: "GET",
	           url : "http://php.my-e-school.com/school.php?type=1&table_name=school_GPA_setexam",
	           crossDomain: true,
	           dataType: "json",
	          // data:finalData,
	           success: function(data) {
	         	    console.log("Success"+JSON.stringify(data));
	         	    model4.setData(data);
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
* @memberOf controller.Academic.Exams.GPA.SetTerm
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.GPA.SetTerm
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.GPA.SetTerm
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
	
	Create:function(){
		
		
		 var Course = this.getView().byId("SelectId").getSelectedKey();
		 var Term = this.getView().byId("input-a").getValue();
		 var StartDate = this.getView().byId("DP1").getValue();
		 var EndDate = this.getView().byId("DP11").getValue();
		 var prdtable = this.getView().byId("idProductsTable");
		 var model4 = new sap.ui.model.json.JSONModel({});
		 console.log(Course+" "+Term+" "+StartDate+" "+EndDate);
		
		   var finalData ={
		            //   "SNo": oModelData.length+1,
		               "Course": Course,
		               "Term": Term,
		               "StartDate": StartDate,
		               "EndDate": EndDate
		       };    

		       
		       $.ajax({

		           type: "POST",

		           url : "http://php.my-e-school.com/school.php?type=2&table_name=school_GPA_setexam",
		           crossDomain: true,
		           dataType: "json",
		           data:finalData,
		           success: function(data) {
		         	     console.log("Success");
		           },
		       error: function (data) {
		      	 console.log("Failed"+JSON.stringify(data));
					}
			});
      // if(check=="true")
		    	   {
		       jQuery.sap.require("sap.m.MessageBox");
		       sap.m.MessageBox.success(
		           "Term Has Been Added Successfully", {
		               icon: sap.m.MessageBox.Icon.INFORMATION,
		               title: "Success",
		               actions: [sap.m.MessageBox.Action.OK],
		             
		           }
		         );
		   }
		}
});