sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.AssignmentNotes.AddAssignmentView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Academic.AssignmentNotes.AddAssignmentView
*/
	onInit: function() {

		var model13 = new sap.ui.model.json.JSONModel();
	    model13.loadData("model/ElectiveSubject.json");
	    
	    var dropdown = this.getView().byId("Select");   
	    dropdown.setModel(model13);
	      
	    var dropdown = this.getView().byId("Selec");   
	    dropdown.setModel(model13);
	      
	    var dropdown = this.getView().byId("Sele");   
	    dropdown.setModel(model13);
	    
        var prdtable = this.getView().byId("idProductsTable");
   		prdtable.setModel(model13);

		
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Academic.AssignmentNotes.AddAssignmentView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Academic.AssignmentNotes.AddAssignmentView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Academic.AssignmentNotes.AddAssignmentView
*/
//	onExit: function() {
//
//	} Academic/AssignmentNotes/AddNotes
	
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/AssignmentNotes/AddNotes");
		//alert("Pressed");
	},
	
	onSave:function(){
		

		
		
        
   	 
   	 var check = true;
   	 
   	   if(this.getView().byId("input-a").getValue() == "" || this.getView().byId("input-a").getValue() == null)
   	    		 
   	         {
   	        		 this.getView().byId("input-a").setValueState("Error");
   	        		 
   	                // alert("Please Enter Course Name");
   	                 
   	                 check = false;
   	          }
   	    	 
//   	   if(this.getView().byId("Select").getSelectedKey() == "" || this.getView().byId("Select").getSelectedKey() == null)
//	    		 
//	         {
//	        		// this.getView().byId("Sel").setValueState("Error");
//	        		 
//	                 alert("Please Enter Batch Code");
//	                 
//	                 check = false;
//	          }
//	    	 
//   	   if(this.getView().byId("Subject").getSelectedKey() == "" || this.getView().byId("Subject").getSelectedKey() == null)
//	    		 
//	         {
//	        		// this.getView().byId("Sel").setValueState("Error");
//	        		 
//	                 alert("Please Enter Subject Code");
//	                 
//	                 check = false;
//	          }
//   	   
//   	   if(this.getView().byId("Student").getValue() == "" || this.getView().byId("Student").getValue() == null)
//	    		 
//	         {
//	        		 this.getView().byId("Student").setValueState("Error");
//	        		 
//	                 alert("Please Enter Student Name");
//	                 
//	                 check = false;
//	         }
        
         // if(check)
          {   
       	   
        	  
         	     var Course = this.getView().byId("Select").getSelectedKey();   
         	     var Batch = this.getView().byId("Selec").getSelectedKey(); 
            	 var Subject = this.getView().byId("Sele").getSelectedItem().getText();
            	 var Title = this.getView().byId("input-a").getValue();
            	 var DP = this.getView().byId("DP1").getValue();
       	   
       	   var oModel = this.getView().byId("idProductsTable").getModel();
           var oModelData = oModel.getProperty("/ProductCollection");
           //console.log("Subject"+Subject);
       	 
       	 
       	 
          var finalData ={
                  "SNo": oModelData.length+1,
                  "Course": Course,
                  "Batch": Batch,
                  "Subject": Subject,
                  "StartDate": DP,
                  "LectureCode":Title
          };    

          oModelData.push(finalData);
          oModel.setProperty("/ProductCollection", oModelData);
       	 
           
       	   
       	   
       	   
       	  
          jQuery.sap.require("sap.m.MessageBox");
          sap.m.MessageBox.success(
              "Assignment Has Been Added Successfully", {
                  icon: sap.m.MessageBox.Icon.INFORMATION,
                  title: "Success",
                  actions: [sap.m.MessageBox.Action.OK],
                //  onClose: function(oAction) { / * do something * / }
              }
            );
          
          } 
  
	}
});