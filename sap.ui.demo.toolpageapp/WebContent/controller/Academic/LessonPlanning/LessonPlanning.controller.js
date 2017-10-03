sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.LessonPlanning.LessonPlanning", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.LessonPlanning.LessonPlanning
*/
	onInit: function() {

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
	      
	    
	    var model3 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
//			          {
//
//			                "VALUE": "  ",
//
//			                "KEY": "  "
//
//			               },     
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
		
		var dropdown = this.getView().byId("Select");   
	    dropdown.setModel(model3);
	      
	    
	    var model4 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
//			          {
//
//			                "VALUE": "  ",
//
//			                "KEY": "  "
//
//			               },     
			     {

        "VALUE": " Artifical Intelligence ",

        "KEY": " A "

       },
       {

           "VALUE": " Managerial Economics ",

           "KEY": " Semester-1 "

      },
      
      {

          "VALUE": " Design Algorithms ",

          "KEY": " Semester II "

     }
      ,
      {

          "VALUE": " Ethical Hacking ",

          "KEY": " MBA Finance Eveng "

     },
     {

         "VALUE": " Computer Architecture And Organization ",

         "KEY": " MBA Finance Normal "

    },
    
    {

        "VALUE": " Maths ",

        "KEY": " Maths "

   }
			    
			  ]
			 // selectedTrip: ''
			});
		
		var dropdown = this.getView().byId("Sele");   
	    dropdown.setModel(model4);
	    
	    
  var model12 = new sap.ui.model.json.JSONModel();
 // model12.loadData("model/ElectiveSubject.json");
    var prdtable = this.getView().byId("idProductsTable");
    //console.log("table"+prdtable);
		//prdtable.setModel(model12);
		
		
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
		
		  var prdtable1 = this.getView().byId("idProductsTables1");
		    //console.log("table"+prdtable);
		  prdtable1.setModel(model6);
				
				 $.ajax({

			          type: "GET",
			          
			          url : "http://php.my-e-school.com/school.php?type=1&table_name=school_subject",
			          crossDomain: true,
			          dataType: "json",

			          success: function(data,textStatus,jqXHR) {
			         	     console.log("Success");
			          	     data12 = data;
			          	    model12.setData(data);
			          	  prdtable.setModel(model12);
			},
			      error: function () {
			     	 console.log("Failed");
						}
						});
				
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.LessonPlanning.LessonPlanning
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.LessonPlanning.LessonPlanning
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.LessonPlanning.LessonPlanning
*/
//	onExit: function() {
//
//	}

	
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
	        var Sno = oSelectedItem.getBindingContext().getProperty("SubjectID");
	        var Course = oSelectedItem.getBindingContext().getProperty("Course");
	        var Batch = oSelectedItem.getBindingContext().getProperty("Batch");
	        var Student = oSelectedItem.getBindingContext().getProperty("Student");
	        var LCode = oSelectedItem.getBindingContext().getProperty("SubjectCode");   
	        
			
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
    
//   // console.log("oModelData"+oModelData);
//     oModelData[index].SNo = Sno;
//     oModelData[index].Course = Course;
//     oModelData[index].Batch = Batch;
//     oModelData[index].LectureCode = LectureCode;
//     oModelData[index].Subject = Subject;
     
     var finalData = {
    		 "SubjectID":Sno,
             "Course": Course,
             "Batch": Batch,
             "Student": Subject,
             "SubjectCode": LectureCode
     }; 
     
     
     $.ajax({

         type: "POST",

         url : "http://php.my-e-school.com/school.php?type=3&table_name=school_subject",
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
     
     
     
    // oModel.setProperty("/ProductCollection", oModelData);
   	 

     this._getDialog().close();

	
		
	},
	
	
	addElective:function(oEvent){
		
		
        
    	 
    	 var check = true;
    	 
    	   if(this.getView().byId("SelectId").getSelectedKey() == "" || this.getView().byId("SelectId").getSelectedKey() == null)
    	    		 
    	         {
    	        		// this.getView().byId("SelectId").setValueState("Error");
    	        		 
    	                 alert("Please Enter Course Name");
    	                 
    	                 check = false;
    	          }
    	    	 
    	   if(this.getView().byId("Select").getSelectedKey() == "" || this.getView().byId("Select").getSelectedKey() == null)
	    		 
	         {
	        		// this.getView().byId("Sel").setValueState("Error");
	        		 
	                 alert("Please Enter Batch Code");
	                 
	                 check = false;
	          }
	    	 
    	   if(this.getView().byId("Subject").getSelectedKey() == "" || this.getView().byId("Subject").getSelectedKey() == null)
	    		 
	         {
	        		// this.getView().byId("Sel").setValueState("Error");
	        		 
	                 alert("Please Enter Subject Code");
	                 
	                 check = false;
	          }
    	   
    	   if(this.getView().byId("Student").getValue() == "" || this.getView().byId("Student").getValue() == null)
	    		 
	         {
	        		 this.getView().byId("Student").setValueState("Error");
	        		 
	                 alert("Please Enter Student Name");
	                 
	                 check = false;
	         }
         
           if(check)
           {   
        	   
        	   
        	 var Course = this.getView().byId("SelectId").getSelectedKey();   
          	 var Batch = this.getView().byId("Select").getSelectedKey(); 
          	 var Subject = this.getView().byId("Subject").getSelectedItem().getText();
             var Student = this.getView().byId("Student").getValue();
        	   
        	   var oModel = this.getView().byId("idProductsTable").getModel();
               var oModelData = oModel.getProperty("/ProductCollection");
               console.log("Subject"+Subject);
        	 
        	 
        	 
           var finalData ={
                   "SNo": oModelData.length+1,
                   "Course": Course,
                   "Batch": Batch,
                   "Subject": Subject,
                   "Student": Student
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
     
		
	},
	
	Accept:function(oEvent){
		
		   var one = this.getView().byId("1").getValue();
		   var two = this.getView().byId("2").getValue();
	//	   console.log(one+"  "+two);
		
		   var oModel = this.getView().byId("idProductsTables1").getModel();
           var oModelData = oModel.getProperty("/trips");
           console.log("Subject"+oModelData +" "+oModel);
        	 

           
        	 
           var finalData ={
                   "VALUE": one,
                   "KEY": two
                 };    

           oModelData.push(finalData);
           oModel.setProperty("/trips", oModelData);
		   
		   
		   
		   
	},
	OnDelete:function(oEvent){

	 var sPath = oEvent.getSource().getBindingContext().sPath; 
     var init = sPath.substr(-1)

  //   console.log("Init"+init);
    var oModel = this.getView().byId("idProductsTables").getModel();
	//var oModel = sap.ui.getCore().getModel();
   // var oModelData = oModel.getProperty("/trips");
    
    
    var oSelectedItem = oEvent.getSource().getParent();
    var persnoVal = oSelectedItem.getBindingContext().getProperty("SubjectID");
    var firstnameVal = oSelectedItem.getBindingContext().getProperty("Course");
    var lastnameVal = oSelectedItem.getBindingContext().getProperty("Batch");
    var deptVal = oSelectedItem.getBindingContext().getProperty("Student");   
    var eMail = oSelectedItem.getBindingContext().getProperty("SubjectCode");
	
	 
	// console.log("data     "+persnoVal +" "+firstnameVal+" "+lastnameVal+" "+deptVal+" "+eMail);
	 
    var finalData = {
   		    "SubjectID":Sno,
            "Course": Course,
            "Batch": Batch,
            "Student": Subject,
            "SubjectCode": LectureCode
    };   
    
    
    $.ajax({

        type: "POST",

        url : "http://php.my-e-school.com/school.php?type=4&table_name=school_subject",
        crossDomain: true,
        dataType: "json",
        data:finalData,
        success: function(data) {
      	     console.log("Success"+JSON.stringify(data));
//        	     console.log(data);
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
    //oModel.getProperty("/ProductCollection")
	},
	
	onDel:function(oEvent){

		 var sPath = oEvent.getSource().getBindingContext().sPath; 
	     var init = sPath.substr(-1)

	  //   console.log("Init"+init);
	    var oModel = this.getView().byId("idProductsTable").getModel();
		//var oModel = sap.ui.getCore().getModel();
	    var oModelData = oModel.getProperty("/ProductCollection");
	    oModelData.splice(init,1);
	    oModel.setProperty("/ProductCollection", oModelData);
		
		},
		
		addLesson:function(oEvent){
			
			
			 var Course = this.getView().byId("SelectId").getSelectedKey();
			 var Batch = this.getView().byId("Select").getSelectedKey();
			 var Subject = this.getView().byId("Sele").getSelectedKey();
			
			 var oTable = this.getView().byId("idProductsTables1");
		       var oModel = this.getView().byId("idProductsTables1").getModel();
		       var oModelData = oModel.getProperty("/trips");
		   //    console.log("oModelData"+oModelData);
		    	 
//		         oModelData[0].VALUE = oPersonInfo;
//			     oModelData[1].KEY = oFirstName;

		       oModel = oTable.getModel(),
		       console.log(oModel+"model");
		       aItems = oTable.getItems();
		       var iRowIndex = 0;
		   if(iRowIndex < aItems.length)
		   {
		   var LecCode = oModel.getProperty("VALUE",aItems[iRowIndex].getBindingContext());
		   console.log( oModel.getProperty("KEY",aItems[iRowIndex].getBindingContext()));
		   }
		       
		       var finalData ={
		            //   "SNo": oModelData.length+1,
		               "Course": Course,
		               "Batch": Batch,
		               "SubjectName": Subject,
		               "SubjectCode": LecCode
		       };    

		       
		       $.ajax({

		           type: "POST",

		           url : "http://php.my-e-school.com/school.php?type=2&table_name=school_subject",
		           crossDomain: true,
		           dataType: "json",
		           data:finalData,
		           success: function(data) {
		         	     console.log("Success"+JSON.stringify(data));
//		           	     console.log(data);
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
			
			
			
		}
	
});