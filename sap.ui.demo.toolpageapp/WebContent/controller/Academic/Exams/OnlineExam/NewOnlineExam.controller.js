sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.OnlineExam.NewOnlineExam", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.OnlineExam.NewOnlineExam
*/
	onInit: function() {
		
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
	  //  dropdown.setModel(model1);
	      
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
  model13.loadData("model/AllocatedSubjects.json");
    var prdtable = this.getView().byId("idProductsTable");
   
		prdtable.setModel(model13);
	
				
		
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Exams.OnlineExam.NewOnlineExam
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.OnlineExam.NewOnlineExam
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.OnlineExam.NewOnlineExam
*/
//	onExit: function() {
//
//	}
	
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Exams/UnitTest");
		//alert("Pressed");
		
		
	},
	
	onPress:function(oEvent){
		
		//var oTable = this.getView().byId("idProductsTable");
		var oSelectedItem = oEvent.getSource().getParent();
        var persnoVal = oSelectedItem.getBindingContext().getProperty("SNo");
        var firstnameVal = oSelectedItem.getBindingContext().getProperty("Course");
        var lastnameVal = oSelectedItem.getBindingContext().getProperty("Batch");
        var deptVal = oSelectedItem.getBindingContext().getProperty("Subject");   
        var maxMark = oSelectedItem.getBindingContext().getProperty("MaximumMark");
        var ExamName = oSelectedItem.getBindingContext().getProperty("ExamName");
		
        this._getDialog().open();
        
        sap.ui.getCore().byId("idFragment10--SNo").setValue(persnoVal);
        sap.ui.getCore().byId("idFragment10--Course").setValue(firstnameVal);
        sap.ui.getCore().byId("idFragment10--Batch").setValue(lastnameVal);
        sap.ui.getCore().byId("idFragment10--Subject").setValue(deptVal);               
        sap.ui.getCore().byId("idFragment10--MaximumMark").setValue(maxMark);
        sap.ui.getCore().byId("idFragment10--ExamName").setValue(ExamName);
        
        
        
		 var oSelectedItem = oEvent.getSource().getParent();
	      var oBindingContext = oSelectedItem.getBindingContext();

		  //alert(sItemName);
		 
		// console.log("oBindingContext"+oBindingContext.sPath);
		 

         
	       var sPath = oEvent.getSource().getBindingContext().sPath; 
	                index = sPath.substr(-1)
		 
	            //    console.log("index     "+index);
	},
	
	 _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment10","sap.ui.demo.toolpageapp.view.Academic.Exams.OnlineExam.UnitTest", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 closeDialog : function() {
         this._getDialog().close()
     },
     onSave : function(oEvent) {
         //debugger;
      
    	 
    	 var Sno= sap.ui.getCore().byId("idFragment10--SNo").getValue();
         var oPersonInfo = sap.ui.getCore().byId("idFragment10--Course").getValue();
         var oFirstName = sap.ui.getCore().byId("idFragment10--Batch").getValue();
         var oLastName = sap.ui.getCore().byId("idFragment10--Subject").getValue();
         var oDept =  sap.ui.getCore().byId("idFragment10--MaximumMark").getValue();
         var oEmail = sap.ui.getCore().byId("idFragment10--ExamName").getValue();
      

         
         
         var oTable = this.getView().byId("idProductsTable");
		 var oSelectedItem = oTable.getSelectedItem();
		 var aggregations = oTable.getAggregation("items");

		// var index = aggregations.indexOf(oSelectedItem);


		 console.log("oBindingContext   save"+index);
         console.log("data     "+oPersonInfo +" "+oFirstName+" "+oLastName+" "+oDept+" "+oEmail);
	   	 


			 
		// console.log("oBindingContext"+oBindingContext);
	   	 
	   	 
	   	 
	     var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
	    
	    console.log("oModelData"+oModelData);
	     oModelData[index].SNo = Sno;
	     oModelData[index].Course = oPersonInfo;
	     oModelData[index].Batch = oFirstName;
	     oModelData[index].Subject = oLastName;
	     oModelData[index].MaximumMark = oDept;
	     oModelData[index].ExamName = oEmail;
	     
	     oModel.setProperty("/ProductCollection", oModelData);
	   	 

         this._getDialog().close();
         
         
         
     },


	
	
	addTest:function(){
		

		
		
        
   	 
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
        	  
           var Course = this.getView().byId("Sele").getSelectedKey();
           var Batch = this.getView().byId("Sel").getSelectedKey();
           var Subject = this.getView().byId("S").getSelectedKey();
           
           var Exam = this.getView().byId("ExamName").getValue();
           var Mark = this.getView().byId("MaximumMark").getValue();
       	   
       	   
       	   var oModel = this.getView().byId("idProductsTable").getModel();
          var oModelData = oModel.getProperty("/ProductCollection");
          console.log("oModelData"+oModelData);
       	 
       	 
       	 
          var finalData ={
                  "SNo": oModelData.length+1,
                  "Course": Course,
                  "Batch": Batch,
                  "Subject": Subject,
                  "ExamName": Exam,
                  "MaximumMark":Mark
          };    

          oModelData.push(finalData);
          oModel.setProperty("/ProductCollection", oModelData);
       	 
           
       	   
       	   
       	   
       	  
          jQuery.sap.require("sap.m.MessageBox");
          sap.m.MessageBox.success(
              "Unit Test Has Been Added Successfully", {
                  icon: sap.m.MessageBox.Icon.INFORMATION,
                  title: "Success",
                  actions: [sap.m.MessageBox.Action.OK],
                //  onClose: function(oAction) { / * do something * / }
              }
            );
          
          } 
    
		
	},
	
	onDelete:function(){
		
	}
});