sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Subjects.SubjectView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Academic.Subjects.SubjectView
*/
	onInit: function() {


		var model = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": "  ",

			                "KEY": "  "

			               },     
			     {

              "VALUE": " MTech ",

              "KEY": " MTech "

             },
             {

                 "VALUE": " BTech ",

                 "KEY": " BTech "

            }
			    
			  ]
			 // selectedTrip: ''
			});
		
	this.getView().setModel(model);
    var model1 = new sap.ui.model.json.JSONModel();
   // model1.loadData("model/SubjectView.json");
    
      var prdtable = this.getView().byId("idProductsTable");
//      console.log("table"+prdtable);
//	  prdtable.setModel(model1);
	
	  
	  $.ajax({

          type: "GET",
          
          url : "http://php.my-e-school.com/school.php?type=1&table_name=school_subject",
          crossDomain: true,
          dataType: "json",

          success: function(data,textStatus,jqXHR) {
         	     console.log("Success");
          	     data12 = data;
                 model1.setData(data);
                 prdtable.setModel(model1);
},
      error: function () {
     	 console.log("Failed");
			}
			});
	  
	  
	  
	  
	  
	  
	  
	  
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Academic.Subjects.SubjectView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Academic.Subjects.SubjectView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Academic.Subjects.SubjectView
*/
//	onExit: function() {
//
//	}

	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Subjects/Subjects");
		//alert("Pressed");
	},
	
	 closeDialog : function() {
         this._getDialog().close()
     },
     
     _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment1","sap.ui.demo.toolpageapp.view.Academic.Subjects.Subject", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 onPress:function(oEvent){
			
			
			//var oTable = this.getView().byId("idProductsTable");
			var oSelectedItem = oEvent.getSource().getParent();
	        var Sno = oSelectedItem.getBindingContext().getProperty("SubjectID");
	        var Course = oSelectedItem.getBindingContext().getProperty("SubjectName");
	        var Batch = oSelectedItem.getBindingContext().getProperty("SubjectCode");
	      //  var ClassTeacher = oSelectedItem.getBindingContext().getProperty("ClassTeacher");   
	        
			
	        this._getDialog().open();
	        
	        sap.ui.getCore().byId("idFragment1--SNo").setValue(Sno);
	        sap.ui.getCore().byId("idFragment1--SubjectName").setValue(Course);
	        sap.ui.getCore().byId("idFragment1--SubjectCode").setValue(Batch);
	     //   sap.ui.getCore().byId("idFragment1--ClassTeacher").setValue(ClassTeacher);               
	      //  sap.ui.getCore().byId("idFragment--idEMail").setValue(eMail);
	        
	        
	        
			 var oSelectedItem = oEvent.getSource().getParent();
		      var oBindingContext = oSelectedItem.getBindingContext();

			  //alert(sItemName);
			 
			 //console.log("oBindingContext"+oBindingContext.sPath);
			 

	         
		       var sPath = oEvent.getSource().getBindingContext().sPath; 
		                index = sPath.substr(-1)
			 
		                //console.log("index     "+index);
			
		},
		
	onSave:function(){
		

		
		  var Sno = sap.ui.getCore().byId("idFragment1--SNo").getValue();
	      var Course = sap.ui.getCore().byId("idFragment1--SubjectName").getValue();
	      var Batch = sap.ui.getCore().byId("idFragment1--SubjectCode").getValue();
		
        var oModel = this.getView().byId("idProductsTable").getModel();
        var oModelData = oModel.getProperty("/ProductCollection");
        
       // console.log("Values"+ oModelData.length);
		
		
	    

//     var oModel = this.getView().byId("idProductsTable").getModel();
//     var oModelData = oModel.getProperty("/ProductCollection");
//    
//    console.log("oModelData"+oModelData);
//     oModelData[index].SNo = Sno;
//     oModelData[index].SubjectName = Course;
//     oModelData[index].SubjectCode = Batch;
//     
     
     var finalData ={
             "SubjectID": Sno,   			 
             "SubjectName": Course,
             "SubjectCode": Batch,
//             "MinimumAttendance": deptVal,
//             "TotalWorkingDays": eMail
     };  



     $.ajax({

         type: "POST",

         url : "http://php.my-e-school.com/school.php?type=3&table_name=school_subject",
         crossDomain: true,
         dataType: "json",
         data:finalData,
         success: function(data) {
       	     console.log("Success"+JSON.stringify(data));
//         	     console.log(data);
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
     
     
     //oModel.setProperty("/ProductCollection", oModelData);
   	 

     this._getDialog().close();

	
		
	},
	
	
	addSubject:function(oEvent){
		
		
        
    	 
    	 var check = true;
    	 
    	   if(this.getView().byId("SelectId").getValue() == "" || this.getView().byId("SelectId").getValue() == null)
    	    		 
    	         {
    	        		 this.getView().byId("SelectId").setValueState("Error");
    	        		 
    	                 alert("Please Enter Subject Name");
    	                 
    	                 check = false;
    	          }
    	    	 
    	   if(this.getView().byId("Sel").getValue() == "" || this.getView().byId("Sel").getValue() == null)
	    		 
	         {
	        		 this.getView().byId("Sel").setValueState("Error");
	        		 
	                 alert("Please Enter Subject Code");
	                 
	                 check = false;
	          }
	    	 
    	 	 
         
           if(check)
           {   
        	   var Course = this.getView().byId("SelectId").getValue();   
          	 
          	 var Description = this.getView().byId("Sel").getValue(); 
        	   
        	   
        	   var oModel = this.getView().byId("idProductsTable").getModel();
           var oModelData = oModel.getProperty("/ProductCollection");
           console.log("oModelData"+oModelData);
        	 
        	 
        	 
           var finalData ={
                   "SubjectID": oModelData.length+1,
                   "SubjectName": Course,
                   "SubjectCode": Description
//                   "MinimumAttendance": AttendancePrecentage,
//                   "TotalWorkingDays": TotalDays
           };    

//           oModelData.push(finalData);
//           oModel.setProperty("/ProductCollection", oModelData);
        	 
            

           $.ajax({

               type: "POST",

               url : "http://php.my-e-school.com/school.php?type=2&table_name=school_subject",
               crossDomain: true,
               dataType: "json",
               data:finalData,
               success: function(data) {
             	     console.log("Success"+JSON.stringify(data));
//               	     console.log(data);
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


        	   
        	   
        	  
           jQuery.sap.require("sap.m.MessageBox");
           sap.m.MessageBox.success(
               "Subject Has Been Added Successfully", {
                   icon: sap.m.MessageBox.Icon.INFORMATION,
                   title: "Success",
                   actions: [sap.m.MessageBox.Action.OK],
                 //  onClose: function(oAction) { / * do something * / }
               }
             );
           
           } 
     
		
	},
	
	onDelete:function(oEvent){
		
		 
		 var sPath = oEvent.getSource().getBindingContext().sPath; 
	   //  var init = sPath.substr(-1)
	     
	     
	        var oSelectedItem = oEvent.getSource().getParent();
	        var Sno = oSelectedItem.getBindingContext().getProperty("SubjectID");
	        var Course = oSelectedItem.getBindingContext().getProperty("SubjectName");
	        var Batch = oSelectedItem.getBindingContext().getProperty("SubjectCode");
	     
	        
	        var finalData ={
	                "SubjectID": Sno,   			 
	                "SubjectName": Course,
	                "SubjectCode": Batch,
//	                "MinimumAttendance": deptVal,
//	                "TotalWorkingDays": eMail
	        };  
	        
	        
	        
	        
	        

	        $.ajax({

	            type: "POST",

	            url : "http://php.my-e-school.com/school.php?type=4&table_name=school_subject",
	            crossDomain: true,
	            dataType: "json",
	            data:finalData,
	            success: function(data) {
	          	     console.log("Success"+JSON.stringify(data));
//	            	     console.log(data);
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

	        
	        
	        
	        
	     //console.log("Init"+init);
	    var oModel = this.getView().byId("idProductsTable").getModel();
		//var oModel = sap.ui.getCore().getModel();
	    var oModelData = oModel.getProperty("/ProductCollection");
	  //  oModelData.splice(init,1);
	  //  oModel.setProperty("/ProductCollection", oModelData);
		
	}
	
	
});