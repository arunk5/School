sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.CourseBatch.CourseView", {
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Academic.CourseBatch.CourseView
*/
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
		
		 var AttnDD = this.getView().byId("Select");   
	   //  dropdown.setModel(model);
		
         var model2 = new sap.ui.model.json.JSONModel();
         model2.loadData("model/CourseView.json");
         
         var table = this.getView().byId("idProductsTable");
         var coursemodel = new sap.ui.model.json.JSONModel();
         
         var SybllDD = this.getView().byId("SelectId");
       //  prdtable.setModel(model1);
         
        // 
         
         $.ajax({

             type: "GET",

             url : "http://php.my-e-school.com/school.php?type=1&table_name=school_course",
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
                             table.setModel(coursemodel);
                             AttnDD.setModel(coursemodel);
                             SybllDD.setModel(coursemodel);
                         //   this.setModel(data,"idProductsTable");

             },
         error: function () {
        	 console.log("Failed");
			}
		});
         
         
         var model1 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			              "VALUE": " Select Syllabus ",

			              "KEY": " Select Syllabus "

			             },
			          
			          
			          
			          {

			                "VALUE": " GPA ",

			                "KEY": " GPA  "

			               },     
			    
            {

                "VALUE": " CCE ",

                "KEY": " CCE "

           },
           
           
           {

               "VALUE": " CA ",

               "KEY": " CA "

          }
           
			    
			  ]
			 // selectedTrip: ''
			});
         
     
      //var prdtable = sap.ui.getCore().byId("SelectId");


     // var table = this.getView().byId("idProductsTable");
    //  console.log("table"+table);
     // table.setModel(model2);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Academic.CourseBatch.CourseView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Academic.CourseBatch.CourseView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Academic.CourseBatch.CourseView
*/
//	onExit: function() {
//
//	},
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/CourseBatch/Course");
		//alert("Pressed");
	},
	
	onPress:function(oEvent){
		
		//var oTable = this.getView().byId("idProductsTable");
		var oSelectedItem = oEvent.getSource().getParent();
        var persnoVal = oSelectedItem.getBindingContext().getProperty("course_id");
        var firstnameVal = oSelectedItem.getBindingContext().getProperty("Course");
        var lastnameVal = oSelectedItem.getBindingContext().getProperty("AttendanceType");
        var deptVal = oSelectedItem.getBindingContext().getProperty("MinimumAttendance");   
        var eMail = oSelectedItem.getBindingContext().getProperty("TotalWorkingDays");
		
        this._getDialog().open();
        
        sap.ui.getCore().byId("idFragment--idPersNo").setValue(persnoVal);
        sap.ui.getCore().byId("idFragment--Course").setValue(firstnameVal);
        sap.ui.getCore().byId("idFragment--AttendanceType").setValue(lastnameVal);
        sap.ui.getCore().byId("idFragment--idDepartment").setValue(deptVal);               
        sap.ui.getCore().byId("idFragment--idEMail").setValue(eMail);
        
        
        
		 var oSelectedItem = oEvent.getSource().getParent();
	      var oBindingContext = oSelectedItem.getBindingContext();

		  //alert(sItemName);
		 
		 console.log("oBindingContext"+oBindingContext.sPath);
		 

         
	       var sPath = oEvent.getSource().getBindingContext().sPath; 
	                index = sPath.substr(-1)
		 
	                console.log("index     "+index);
	},
	
	 _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment","sap.ui.demo.toolpageapp.view.Academic.CourseBatch.CourseViewFragment", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 closeDialog : function() {
         this._getDialog().close()
     },
     onSave : function(oEvent) {
         //debugger;
      
         var oPersonInfo = sap.ui.getCore().byId("idFragment--idPersNo").getValue();
         var oFirstName = sap.ui.getCore().byId("idFragment--Course").getValue();
         var oLastName = sap.ui.getCore().byId("idFragment--AttendanceType").getValue();
         var oDept = sap.ui.getCore().byId("idFragment--idDepartment").getValue();
         var oEmail = sap.ui.getCore().byId("idFragment--idEMail").getValue();
      
         
         
//         var finalData ={
//                 "SNo": oPersonInfo,
//                 "Course": oFirstName,
//                 "Attendance Type": oLastName,
//                 "Minimum Attendance": oDept,
//                 "Total Working Days": oEmail
//         };           
//      
//         Create
//         var oModel = this.getView().byId("idProductsTable").getModel();
//         
//         var oModelData = oModel.getProperty("/ProductCollection");
//         console.log("oModelData"+oModelData);
//         oModelData.push(finalData);
//         oModel.setProperty("/ProductCollection", oModelData);
         
         
         var oTable = this.getView().byId("idProductsTable");
		 var oSelectedItem = oTable.getSelectedItem();
		 var aggregations = oTable.getAggregation("items");

		// var index = aggregations.indexOf(oSelectedItem);


		 console.log("oBindingContext   save"+index);
         console.log("data     "+oPersonInfo +" "+oFirstName+" "+oLastName+" "+oDept+" "+oEmail);
	   	 
         var finalData = {
               "course_id": oPersonInfo,
               "Course": oFirstName,
               "AttendanceType": oLastName,
               "MinimumAttendance": oDept,
               "TotalWorkingDays": oEmail
       }; 

			 
		// console.log("oBindingContext"+oBindingContext);
	   	 
	   	 
	   	 
	     var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
	    
	    console.log("oModelData"+oModelData);
	     oModelData[index].course_id = oPersonInfo;
	     oModelData[index].Course = oFirstName;
	     oModelData[index].AttendanceType = oLastName;
	     oModelData[index].MinimumAttendance = oDept;
	     oModelData[index].TotalWorkingDays = oEmail;
	     
	     
	     
	       $.ajax({

	           type: "POST",

	           url : "http://php.my-e-school.com/school.php?type=3&table_name=school_course",
	           crossDomain: true,
	           dataType: "json",
	           data:finalData,
	           success: function(data) {
	         	     console.log("Success");


	           },
	       error: function () {
	      	 console.log("Failed");
				}
				});
	     
	       oModel.refresh(true);
	     
	   	 

         this._getDialog().close();
         
         
         
     },

     addCourse:function(oEvent){
    	 
    	 
    	 var Course = this.getView().byId("input-a").getValue();   
    	 
    	 var Description = this.getView().byId("input-b").getValue(); 
    	 
    	 var Code = this.getView().byId("input-c").getValue(); 
    	 
    	 var AttendancePrecentage = this.getView().byId("input-d").getValue(); 
    	 
    	 var AttendanceType = this.getView().byId("Select").getSelectedKey();
    	 
    	 var TotalDays = this.getView().byId("input-4").getValue();
    	 
    	 var check = true;
    	 
   if(this.getView().byId("input-a").getValue() == "" || this.getView().byId("input-a").getValue() == null)
    		 
         {
        		 this.getView().byId("input-a").setValueState("Error");
        		 
                 alert("Please Enter Course");
                 
                 check = false;
          }
    	 
    	 
   if(this.getView().byId("input-d").getValue() == "" || this.getView().byId("input-d").getValue() == null)
    		 
         {
        		 this.getView().byId("input-d").setValueState("Error");
        		 
                 alert("Please Enter Minimum Attendance Percentage");
                 
                 check = false;
          }
    	 
   if(this.getView().byId("input-4").getValue() == "" || this.getView().byId("input-4").getValue() == null)
		 
   {
  		 this.getView().byId("input-4").setValueState("Error");
  		 
           alert("Please Enter Total Working Days");
           
           check = false;
    } 
    	 
    	 
       var oModel = this.getView().byId("idProductsTable").getModel();
       var oModelData = oModel.getProperty("/ProductCollection");
       console.log("oModelData"+oModelData);
    	 
    	 
    	 
       var finalData ={
            //   "SNo": oModelData.length+1,
               "Course": Course,
               "AttendanceType": AttendanceType,
               "MinimumAttendance": AttendancePrecentage,
               "TotalWorkingDays": TotalDays
       };    

       console.log()
       oModelData.push(finalData);
     //  oModel.setProperty("/ProductCollection", oModelData);
    	 
       
//       var table = this.getView().byId("idProductsTable");
//       var coursemodel = new sap.ui.model.json.JSONModel();
       
       $.ajax({

           type: "POST",

           url : "http://php.my-e-school.com/school.php?type=2&table_name=school_course",
           crossDomain: true,
           dataType: "json",
           data:finalData,
           success: function(data) {
         	     console.log("Success"+JSON.stringify(data));
//           	     console.log(data);
                       //    data12 = data;
                           //doSomething(data12);
                       //   var oVizFrame1 =  this.getView().byId("idProductsTable");
                         //  coursemodel.setData(data);
                    //       console.log(coursemodel);
                         //  table.setModel(coursemodel);
                       //   this.setModel(data,"idProductsTable");

           },
       error: function (data) {
      	 console.log("Failed"+JSON.stringify(data));
			}
			});
       
       
  
       
       
      // if(check=="true")
    	   {
       jQuery.sap.require("sap.m.MessageBox");
       sap.m.MessageBox.success(
           "Course Has Been Added Successfully", {
               icon: sap.m.MessageBox.Icon.INFORMATION,
               title: "Success",
               actions: [sap.m.MessageBox.Action.OK],
             
           }
         );
       
       } 
    	   
    	   oModel.refresh(true);
    	 
     },
     
    onDelete:function(oEvent)
    {
    	
    	 var sPath = oEvent.getSource().getBindingContext().sPath; 
         var init = sPath.substr(-1)

        //console.log("Init"+init);
        var oModel = this.getView().byId("idProductsTable").getModel();
    	//var oModel = sap.ui.getCore().getModel();
        var oModelData = oModel.getProperty("/ProductCollection");
      //  oModelData.splice(init,1);
      //  oModel.setProperty("/ProductCollection", oModelData);
    	
    	//
        
        var oSelectedItem = oEvent.getSource().getParent();
        var persnoVal = oSelectedItem.getBindingContext().getProperty("course_id");
        var firstnameVal = oSelectedItem.getBindingContext().getProperty("Course");
        var lastnameVal = oSelectedItem.getBindingContext().getProperty("AttendanceType");
        var deptVal = oSelectedItem.getBindingContext().getProperty("MinimumAttendance");   
        var eMail = oSelectedItem.getBindingContext().getProperty("TotalWorkingDays");
		
   	 
   	// console.log("data     "+persnoVal +" "+firstnameVal+" "+lastnameVal+" "+deptVal+" "+eMail);
   	 
   	 var finalData ={
                "course_id": persnoVal,   			 
                "Course": firstnameVal,
                "AttendanceType": lastnameVal,
                "MinimumAttendance": deptVal,
                "TotalWorkingDays": eMail
        };   
        
        
        $.ajax({

            type: "POST",

            url : "http://php.my-e-school.com/school.php?type=4&table_name=school_course",
            crossDomain: true,
            dataType: "json",
            data:finalData,
            success: function(data) {
          	     console.log("Success"+JSON.stringify(data));
//            	     console.log(data);
                        //    data12 = data;
                            //doSomething(data12);
                        //   var oVizFrame1 =  this.getView().byId("idProductsTable");
                          //  coursemodel.setData(data);
                     //       console.log(coursemodel);
                          //  table.setModel(coursemodel);
                        //   this.setModel(data,"idProductsTable");

            },
        error: function (data) {
       	 console.log("Failed"+JSON.stringify(data));
 			}
 			});
        
        oModel.refresh(true);    	
        oModel.getProperty("/ProductCollection")
    } ,
    
    
    dbCall:function(finalData){
    	
    	
        $.ajax({

	           type: "POST",

	           url : "http://php.my-e-school.com/school.php?type=3&table_name=school_course",
	           crossDomain: true,
	           dataType: "json",
	           data:finalData,
	           success: function(data) {
	         	     console.log("Success");


	           },
	       error: function () {
	      	 console.log("Failed");
				}
				});
	     
    	
    	
    }
    
}


);