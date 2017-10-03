sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Subjects.SubjectAllocation", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Subjects.SubjectAllocation
*/
	onInit: function() {

		var model = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": "  ",

			                "KEY": "  "

			               },     
			     {

              "VALUE": " Physics ",

              "KEY": " Physics "

             },
             {

                 "VALUE": " Maths ",

                 "KEY": " Maths "

            },
            
            {

                "VALUE": " Commerce ",

                "KEY": " Commerce "

           }
            ,
            {

                "VALUE": " Administration ",

                "KEY": " Administration "

           },
           {

               "VALUE": " Physical Education ",

               "KEY": " Physical Education "

          }
			    
			  ]
			 // selectedTrip: ''
			});
		
		var dropdown = this.getView().byId("SelectId");   
	    dropdown.setModel(model);
	      
	      
	    
	    var model1 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": "  ",

			                "KEY": "  "

			               },     
			     {

            "VALUE": " Avinash ",

            "KEY": " Avinash "

           },
           {

               "VALUE": " Krithi ",

               "KEY": " Krithi "

          },
          
          {

              "VALUE": " Vasuda ",

              "KEY": " Vasuda "

         }
          ,
          {

              "VALUE": " Nikhil ",

              "KEY": " Nikhil "

         },
         {

             "VALUE": " Srikanth ",

             "KEY": " Srikanth "

        }
			    
			  ]
			 // selectedTrip: ''
			});
		
		var dropdown = this.getView().byId("Select");   
	    dropdown.setModel(model1);
	      
	    var model2 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": "  ",

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
		
		var dropdown = this.getView().byId("Sele");   
	    dropdown.setModel(model2);
	      
	    
	    var model3 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": "  ",

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
		
		var dropdown = this.getView().byId("Sel");   
	    dropdown.setModel(model3);
	      
	    
	    var model4 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": "  ",

			                "KEY": "  "

			               },     
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
		
		var dropdown = this.getView().byId("S");   
	    dropdown.setModel(model4);
	      
	    
	      
    var model13 = new sap.ui.model.json.JSONModel();
   // model13.loadData("model/AllocatedSubjects.json");
      var prdtable = this.getView().byId("idProductsTable");
     
		//prdtable.setModel(model13);
	
		  $.ajax({

	             type: "GET",

	             url : "https://my-e-school.com/school.php?table_name=school_subject",
	             crossDomain: true,
	             dataType: "json",

	             success: function(data,textStatus,jqXHR) {
	            	     console.log("Success");
	             	     console.log(data);
	                             data12 = data;
	                             //doSomething(data12);
	                         //   var oVizFrame1 =  this.getView().byId("idProductsTable");
	                             model13.setData(data);
	                             console.log(model13);
	                             prdtable.setModel(model13);
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
* @memberOf controller.Academic.Subjects.SubjectAllocation
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Subjects.SubjectAllocation
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Subjects.SubjectAllocation
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
	
	
	onSave:function(){
		

		
		
        
   	 
//   	 var check = true;
//   	 
//   	   if(this.getView().byId("SelectId").getSelectedKey() == "" || this.getView().byId("SelectId").getSelectedKey() == null)
//   	    		 
//   	         {
//   	        		// this.getView().byId("SelectId").setValueState("Error");
//   	        		 
//   	                 alert("Please Enter Subject Name");
//   	                 
//   	                 check = false;
//   	          }
//   	    	 
//   	   if(this.getView().byId("Select").getSelectedKey() == "" || this.getView().byId("Select").getSelectedKey() == null)
//	    		 
//	         {
//	        		// this.getView().byId("Sel").setValueState("Error");
//	        		 
//	                 alert("Please Enter Subject Code");
//	                 
//	                 check = false;
//	          }
//	    	 
//   	 	 
//        
//          if(check)
          { 
        	  
       	   var Dep = this.getView().byId("SelectId").getSelectedKey();   
           var EmpName = this.getView().byId("Select").getSelectedKey();
           var Course = this.getView().byId("Sele").getSelectedKey();
           var Batch = this.getView().byId("Sel").getSelectedKey();
           var Subject = this.getView().byId("S").getSelectedKey();
       	   
       	   
       	   var oModel = this.getView().byId("idProductsTable").getModel();
          var oModelData = oModel.getProperty("/ProductCollection");
          console.log("oModelData"+oModelData);
       	 
       	 
       	 
          var finalData ={
                  "SNo": oModelData.length+1,
                  "Course": Course,
                  "Batch": Batch,
                  "Subject": Subject,
                  "EmployeeName": EmpName,
                  "Department":Dep
          };    

          oModelData.push(finalData);
          oModel.setProperty("/ProductCollection", oModelData);
       	 
           
       	   
       	   
       	   
       	  
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
    
		
	
		
		
		
	}
});