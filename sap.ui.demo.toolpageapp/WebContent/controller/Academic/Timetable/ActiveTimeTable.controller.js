sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Timetable.ActiveTimeTable", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Timetable.ActiveTimeTable
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
	    dropdown.setModel(model2);
	    
	    
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
	    dropdown.setModel(model3);
	      
	      
	    var model13 = new sap.ui.model.json.JSONModel();
	    //model13.loadData("model/ElectiveSubject.json");
	    var prdtable = this.getView().byId("idProductsTable");
//	   window.tableID = sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Timetable.ActiveTimeTable").getView().byId("idProductsTable").getModel();
			//prdtable.setModel(model13);
			
	    
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
//                           dropdown2.setModel(coursemodel);
//                           dropdown4.setModel(coursemodel);
                           
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
* @memberOf controller.Academic.Timetable.ActiveTimeTable
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Timetable.ActiveTimeTable
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Timetable.ActiveTimeTable
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
	
	onPress:function(){
		
		var aFilter = [];
		var oTable = this.getView().byId("idProductsTable");
		 console.log(oTable);
		var oBinding = oTable.getBinding("items");
		
		
		//var oFilter = new Filter(sPath, sOperator, sValue1, sValue2);

		var batch = this.getView().byId("Sele").getSelectedItem().getText();
		var course = this.getView().byId("Select").getSelectedItem().getText(); 
		
		aFilter.push(new sap.ui.model.Filter("Course",sap.ui.model.FilterOperator.Contains,course));
		aFilter.push(new sap.ui.model.Filter("Batch",sap.ui.model.FilterOperator.Contains,batch));
		
		oBinding.filter(new sap.ui.model.Filter({
			filters: aFilter,
			and: true
			}));
	},
	
	addTimeTable:function(course,batch,subject,time,day){
		

          {   
       	   this.onInit();
       	   //var oThis = this;
       	     var Course = course;   
         	 var Batch = batch; 
         	 var Subject = subject;
           	 var Time = time;
           	 var Day = day;
          // 	id="__xmlview0--idProductsTable"
           	 
        //  var viewid=sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Timetable.ActiveTimeTable").getMetadata().getName();
           	viewid = this.getView().getId();
           	 console.log("viewid"+viewid);
           	sap.ui.getCore().byId(viewid+"--idProductsTable");
       	    var oModel = sap.ui.getCore().byId("idProductsTable");
         	console.log("Subject"+	sap.ui.getCore().byId(viewid+"--idProductsTable"));
            var oModelData = oModel.getProperty("/ProductCollection");
            console.log("Subject"+Subject);
       	 
       	 
       	 
          var finalData ={
                  "SNo": oModelData.length+1,
                  "Course": Course,
                  "Batch": Batch,
                  "Subject": Subject,
                  "Time": Time,
                  "Day": Day,
          };    

          oModelData.push(finalData);
          oModel.setProperty("/ProductCollection", oModelData);
       	 
           
       	   
       	   
       	   
       	  
          jQuery.sap.require("sap.m.MessageBox");
          sap.m.MessageBox.success(
              "Elective Subject Has Been Added Successfully", {
                  icon: sap.m.MessageBox.Icon.INFORMATION,
                  title: "Success",
                  actions: [sap.m.MessageBox.Action.OK],
                //  onClose: function(oAction) { / * do something * / }
              }
            );
          
          } 
    
		
	
		
		
	}
});