sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Timetable.TimeTableView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Academic.Timetable.TimeTableView
*/
	onInit: function() {

		 var model2 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": " Select Course ",

			                "KEY": "  "

			               },     
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
		
		var dropdown = this.getView().byId("Select");   
	    //dropdown.setModel(model2);
	    
	    
	    var model3 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": " Select Batch ",

			                "KEY": "  "

			               },     
			     {

        "VALUE": " A ",

        "KEY": " A "

       },
       {

           "VALUE": " Semester-1 ",

           "KEY": " Semester-1 "

      },
      
      {

          "VALUE": " Semester II ",

          "KEY": " Semester II "

     }
      ,
      {

          "VALUE": " MBA Finance Eveng ",

          "KEY": " MBA Finance Eveng "

     },
     {

         "VALUE": " MBA Finance Normal ",

         "KEY": " MBA Finance Normal "

    }
			    
			  ]
			 // selectedTrip: ''
			});
		
		var dropdown1 = this.getView().byId("Sele");   
	   // dropdown.setModel(model3);
	      
	    var model3 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": " Select Day ",

			                "KEY": "  "

			               },     
			     {

      "VALUE": " Monday ",

      "KEY": " A "

     },
     {

         "VALUE": " Tuesday ",

         "KEY": " Semester-1 "

    },
    
    {

        "VALUE": " Wednesday ",

        "KEY": " Semester II "

   }
    ,
    {

        "VALUE": " Thursday ",

        "KEY": " MBA Finance Eveng "

   },
   {

       "VALUE": " Friday ",

       "KEY": " MBA Finance Normal "

  }
			    
			  ]
			 // selectedTrip: ''
			});
		
		var dropdown4 = this.getView().byId("Sel");   
	   // dropdown.setModel(model3);
		
	    var model4 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": " Select Time ",

			                "KEY": "  "

			               },     
			     {

    "VALUE": " 9:00 ",

    "KEY": " 9:00 "

   },
   {

       "VALUE": " 10:00 ",

       "KEY": " 10:00 "

  },
  
  {

      "VALUE": " 11:00 ",

      "KEY": " 11:00 "

 }
  ,
  {

      "VALUE": " 12:00 ",

      "KEY": " 12:00 "

 },
 {

     "VALUE": " 13:00 ",

     "KEY": " 13:00 "

},


{

    "VALUE": " 14:00 ",

    "KEY": " 14:00 "

},
{

    "VALUE": " 15:00 ",

    "KEY": " 15:00 "

},
{

    "VALUE": " 16:00 ",

    "KEY": " 16:00 "

},
{

    "VALUE": " 17:00 ",

    "KEY": " 17:00 "

},
{

    "VALUE": " 18:00 ",

    "KEY": " 18:00 "

}

			    
			  ]
			 // selectedTrip: ''
			});
		
		var dropdown2 = this.getView().byId("input");   
	  //  dropdown.setModel(model4);
		var table = this.getView().byId("idProductsTable");
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
                           table.setModel(coursemodel);
                           dropdown2.setModel(coursemodel);
                           dropdown4.setModel(coursemodel);
                           
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
* @memberOf view.Academic.Timetable.TimeTableView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Academic.Timetable.TimeTableView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Academic.Timetable.TimeTableView
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
	
	OnSave:function(){
		

		
		var aFilter = [];
		var oTable = this.getView().byId("idProductsTable");
		console.log(oTable);
		var oBinding = oTable.getBinding("items");
		
		
		//var oFilter = new Filter(sPath, sOperator, sValue1, sValue2);

		var batch = this.getView().byId("Sele").getSelectedItem().getText();
		var course = this.getView().byId("Select").getSelectedItem().getText(); 
		var time = this.getView().byId("input").getSelectedItem().getText(); 
		var day = this.getView().byId("Sel").getSelectedItem().getText(); 
		
		aFilter.push(new sap.ui.model.Filter("Course",sap.ui.model.FilterOperator.Contains,course));
		aFilter.push(new sap.ui.model.Filter("Batch",sap.ui.model.FilterOperator.Contains,batch));
		aFilter.push(new sap.ui.model.Filter("Time",sap.ui.model.FilterOperator.Contains,time));
		aFilter.push(new sap.ui.model.Filter("Day",sap.ui.model.FilterOperator.Contains,day));
		
		oBinding.filter(new sap.ui.model.Filter({
			filters: aFilter,
			and: true
			}));
	
	
		
	}	
});