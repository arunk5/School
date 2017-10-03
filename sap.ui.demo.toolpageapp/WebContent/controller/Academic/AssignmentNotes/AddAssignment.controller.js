sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.AssignmentNotes.AddAssignment", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.AssignmentNotes.AddAssignment
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
* @memberOf controller.Academic.AssignmentNotes.AddAssignment
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.AssignmentNotes.AddAssignment
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.AssignmentNotes.AddAssignment
*/
//	onExit: function() {
//
//	}
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/AssignmentNotes/AddNotes");
		//alert("Pressed");
	},
	
	 closeDialog : function() {
         this._getDialog().close()
     },
     
     _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment6","sap.ui.demo.toolpageapp.view.Academic.AssignmentNotes.AddNotes", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 onPress:function(oEvent){
			
			
			//var oTable = this.getView().byId("idProductsTable");
			var oSelectedItem = oEvent.getSource().getParent();
	        var Sno = oSelectedItem.getBindingContext().getProperty("SNo");
	        var Title = oSelectedItem.getBindingContext().getProperty("LectureCode");
	        var Course = oSelectedItem.getBindingContext().getProperty("Course");
	        var Batch = oSelectedItem.getBindingContext().getProperty("Batch");
	        var Student = oSelectedItem.getBindingContext().getProperty("Student");
	        var Subject = oSelectedItem.getBindingContext().getProperty("Subject");   
	        
			
	        this._getDialog().open();
	        
	        sap.ui.getCore().byId("idFragment6--SNo").setValue(Sno);
	        sap.ui.getCore().byId("idFragment6--Title").setValue(Title);
	        sap.ui.getCore().byId("idFragment6--Course").setValue(Course);
	        sap.ui.getCore().byId("idFragment6--Batch").setValue(Batch);
	        sap.ui.getCore().byId("idFragment6--SubmittedBy").setValue(Student);
	        sap.ui.getCore().byId("idFragment6--Subject").setValue(Subject);               
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
		

		
		  var Sno = sap.ui.getCore().byId("idFragment6--SNo").getValue();
		  var Title = sap.ui.getCore().byId("idFragment6--Title").getValue();
	      var Course = sap.ui.getCore().byId("idFragment6--Course").getValue();
	      var Batch = sap.ui.getCore().byId("idFragment6--Batch").getValue();
	      var SubmittedBy = sap.ui.getCore().byId("idFragment6--SubmittedBy").getValue();
	      var Subject = sap.ui.getCore().byId("idFragment6--Subject").getValue();
	      
	  

     var oModel = this.getView().byId("idProductsTable").getModel();
     var oModelData = oModel.getProperty("/ProductCollection");
    
   // console.log("oModelData"+oModelData);
 	
     
     
     oModelData[index].SNo = Sno;
 	 oModelData[index].LectureCode = Title;
     oModelData[index].Course = Course;
     
     oModelData[index].Batch = Batch;
     oModelData[index].Student = SubmittedBy;
     oModelData[index].Subject = Subject;
     
     
     oModel.setProperty("/ProductCollection", oModelData);
   	 

     this._getDialog().close();

	
		
	},
	
	addNotes:function(){
		

		
		
        
   	 
   	 var check = true;
   	 
   	   if(this.getView().byId("input-a").getValue() == "" || this.getView().byId("input-a").getValue() == null)
   	    		 
   	         {
   	        		 this.getView().byId("input-a").setValueState("Error");
   	        		 
   	               //  alert("Please Enter Course Name");
   	                 
   	                 check = false;
   	          }
   	    	 
   	 
        
          if(check)
          {   
       	   
        	  
        	  var Title = this.getView().byId("input-a").getValue();  
       	     var Course = this.getView().byId("Select").getSelectedKey();   
         	 var Batch = this.getView().byId("Selec").getSelectedKey(); 
         	 var Subject = this.getView().byId("Sele").getSelectedItem().getText();
           	//var Student = this.getView().byId("Student").getValue();
       	   
       	   var oModel = this.getView().byId("idProductsTable").getModel();
          var oModelData = oModel.getProperty("/ProductCollection");
          console.log("Subject"+Subject);
       	 
       	 
       	 
          var finalData ={
                  "SNo": oModelData.length+1,
                  "LectureCode": Title,
                  "Course": Course,
                  "Batch": Batch,
                  "Subject": Subject,
                  "Student": "Admin"
          };    

          oModelData.push(finalData);
          oModel.setProperty("/ProductCollection", oModelData);
       	 
           
       	   
       	   
       	   
       	  
          jQuery.sap.require("sap.m.MessageBox");
          sap.m.MessageBox.success(
              "Notes Has Been Added Successfully", {
                  icon: sap.m.MessageBox.Icon.INFORMATION,
                  title: "Success",
                  actions: [sap.m.MessageBox.Action.OK],
                //  onClose: function(oAction) { / * do something * / }
              }
            );
          
          } 
    
	}

});