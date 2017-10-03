sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Subjects.AssignSubjects", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Subjects.AssignSubjects
*/
	onInit: function() {


		var model = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": " Please Select  ",

			                "KEY": " Please Select  "

			               },     
			     {

              "VALUE": " STD-I ",

              "KEY": " STD-I "

             },
             {

                 "VALUE": " STD-II ",

                 "KEY": " STD-II "

            },
            
            {

                "VALUE": " STD-III ",

                "KEY": " STD-III "

           },
           
           {

               "VALUE": " STD-IV ",

               "KEY": " STD-IV "

          },
          {

              "VALUE": " STD-V ",

              "KEY": " STD-V "

         },
         {

             "VALUE": " STD-VI ",

             "KEY": " STD-VI "

        },
        {

            "VALUE": " STD-VII ",

            "KEY": " STD-VII "

       },
       {

           "VALUE": " STD-VIII ",

           "KEY": " STD-VIII "

      },
      {

          "VALUE": " STD-IX ",

          "KEY": " STD-IX "

     },
     
     {

         "VALUE": " STD-X ",

         "KEY": " STD-X "

    },
    {

        "VALUE": " Inter ",

        "KEY": " Inter "

   },
   {

       "VALUE": " MBA ",

       "KEY": " MBA "

  },
  {

      "VALUE": " Pre-Primary ",

      "KEY": " Pre-Primary "

 }
       
			    
			  ]
			 // selectedTrip: ''
			});
		
		
	//	this.getView().setModel(model);
		
		
		 var dropdown = this.getView().byId("SelectId");   
	      dropdown.setModel(model);
		
		
        var model1 = new sap.ui.model.json.JSONModel();
        //model12.loadData("model/SubjectAssignment.json");
        var prdtable = this.getView().byId("idProductsTable");
       // console.log("table"+prdtable);
		//prdtable.setModel(model12);
	
		 $.ajax({

	          type: "GET",
	          
	          url : "http://php.my-e-school.com/school.php?type=1&table_name=school_subject",
	          crossDomain: true,
	          dataType: "json",

	          success: function(data,textStatus,jqXHR) {
	         	     console.log("Success");
	          	     console.log(data);
	                          data12 = data;
	                          //doSomething(data12);
	                      //   var oVizFrame1 =  this.getView().byId("idProductsTable");
	                          model1.setData(data);
	                        //  console.log(model1);
	                          prdtable.setModel(model1);
	                      //   this.setModel(data,"idProductsTable");

	          },
	      error: function () {
	     	 console.log("Failed");
				}
				});
        
        
        var model12 = new sap.ui.model.json.JSONModel({
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
        
        
        var dropdown = this.getView().byId("Select");   
	      dropdown.setModel(model12);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Subjects.AssignSubjects
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Subjects.AssignSubjects
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Subjects.AssignSubjects
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
             this.dialog = sap.ui.xmlfragment("idFragment2","sap.ui.demo.toolpageapp.view.Academic.Subjects.AssignSubjects", this);
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
	        var ClassTeacher = oSelectedItem.getBindingContext().getProperty("SubjectName");   
	        
			
	        this._getDialog().open();
	        
	        sap.ui.getCore().byId("idFragment2--SNo").setValue(Sno);
	        sap.ui.getCore().byId("idFragment2--Course").setValue(Course);
	        sap.ui.getCore().byId("idFragment2--Batch").setValue(Batch);
	        sap.ui.getCore().byId("idFragment2--Subject").setValue(ClassTeacher);               
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
		

		
		  var Sno = sap.ui.getCore().byId("idFragment2--SNo").getValue();
	      var Course = sap.ui.getCore().byId("idFragment2--Course").getValue();
	      var Batch = sap.ui.getCore().byId("idFragment2--Batch").getValue();
	      var Subject = sap.ui.getCore().byId("idFragment2--Subject").getValue();
	      
	  

     var oModel = this.getView().byId("idProductsTable").getModel();
     var oModelData = oModel.getProperty("/ProductCollection");
    
   // console.log("oModelData"+oModelData);
     oModelData[index].SNo = Sno;
     oModelData[index].Course = Course;
     oModelData[index].Batch = Batch;
     oModelData[index].Subject = Subject;
     
     
     //oModel.setProperty("/ProductCollection", oModelData);
   	 
     
     var finalData ={
             "SubjectID": Sno,   			 
             "Course": Course,
             "Batch": Batch,
             "SubjectName": Subject,
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
     
     

     this._getDialog().close();

	
		
	},
	
	
	addSubject:function(oEvent){
		
		
        
    	 
    	 var check = true;
    	 
    	   if(this.getView().byId("SelectId").getSelectedKey() == "" || this.getView().byId("SelectId").getSelectedKey() == null)
    	    		 
    	         {
    	        		// this.getView().byId("SelectId").setValueState("Error");
    	        		 
    	                 alert("Please Enter Subject Name");
    	                 
    	                 check = false;
    	          }
    	    	 
    	   if(this.getView().byId("Select").getSelectedKey() == "" || this.getView().byId("Select").getSelectedKey() == null)
	    		 
	         {
	        		// this.getView().byId("Sel").setValueState("Error");
	        		 
	                 alert("Please Enter Subject Code");
	                 
	                 check = false;
	          }
	    	 
    	 	 
         
           if(check)
           {   
        	   var Course = this.getView().byId("SelectId").getSelectedKey();   
          	 
          	 var Description = this.getView().byId("Select").getSelectedKey(); 
          	var Value = this.getView().byId("input-b").getValue(); 
        	   
        	   var oModel = this.getView().byId("idProductsTable").getModel();
           var oModelData = oModel.getProperty("/ProductCollection");
           console.log("oModelData"+oModelData);
        	 
        	 
        	 
           var finalData ={
                   "SubjectID": oModelData.length+1,
                   "Course": Course,
                   "Batch": Description,
                   "SubjectName": Value,
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
	     var init = sPath.substr(-1)

	     //console.log("Init"+init);
	    var oModel = this.getView().byId("idProductsTable").getModel();
	     
	     
	     var oSelectedItem = oEvent.getSource().getParent();
	        var Sno = oSelectedItem.getBindingContext().getProperty("SubjectID");
	        var Course = oSelectedItem.getBindingContext().getProperty("Course");
	        var Batch = oSelectedItem.getBindingContext().getProperty("Batch");
	        var Subject = oSelectedItem.getBindingContext().getProperty("SubjectName");

	        
	        var finalData ={
	                "SubjectID": Sno,   			 
	                "Course": Course,
	                "Batch": Batch,
	                "SubjectName": Subject,
	               // "TotalWorkingDays": eMail
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

	        
	        
	     
	     
		//var oModel = sap.ui.getCore().getModel();
//	    var oModelData = oModel.getProperty("/ProductCollection");
//	    oModelData.splice(init,1);
//	    oModel.setProperty("/ProductCollection", oModelData);
		
	}
	
});