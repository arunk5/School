sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Occurrence.OccurrenceRegi", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Occurrence.OccurrenceRegi
*/
	onInit: function() {

		
  var model1 = new sap.ui.model.json.JSONModel();
  model1.loadData("model/ElectiveSubject.json");
    var prdtable = this.getView().byId("idProductsTable");
    console.log("table"+prdtable);
		prdtable.setModel(model1);


		var dropdown = this.getView().byId("Select");   
			      dropdown.setModel(model1);
				
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Occurrence.OccurrenceRegi
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Occurrence.OccurrenceRegi
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Occurrence.OccurrenceRegi
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
	        this.dialog = sap.ui.xmlfragment("idFragment8","sap.ui.demo.toolpageapp.view.Academic.Occurrence.Occurrence", this);
	        //debugger;
	    }	
	    
	    return this.dialog;
	},

	onPress:function(oEvent){
			
			
			//var oTable = this.getView().byId("idProductsTable");
			var oSelectedItem = oEvent.getSource().getParent();
	       var Sno = oSelectedItem.getBindingContext().getProperty("SNo");
	       var Name = oSelectedItem.getBindingContext().getProperty("Student");
	       var Remarks = oSelectedItem.getBindingContext().getProperty("TimeTableName");
	       var Date = oSelectedItem.getBindingContext().getProperty("StartDate");
//	       var Student = oSelectedItem.getBindingContext().getProperty("Student");
//	       var Subject = oSelectedItem.getBindingContext().getProperty("Subject");   
	       
			
	       this._getDialog().open();
	       
	       sap.ui.getCore().byId("idFragment8--SNo").setValue(Sno);
	       sap.ui.getCore().byId("idFragment8--EmployeeName").setValue(Name);
	       sap.ui.getCore().byId("idFragment8--OccurenceDate").setValue(Date);
	       sap.ui.getCore().byId("idFragment8--Remarks").setValue(Remarks);
//	       sap.ui.getCore().byId("idFragment8--SubmittedBy").setValue(Student);
//	       sap.ui.getCore().byId("idFragment8--Subject").setValue(Subject);               
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
		

		
		 var Sno = sap.ui.getCore().byId("idFragment8--SNo").getValue();
		 var Name = sap.ui.getCore().byId("idFragment8--EmployeeName").getValue();
	     var Date = sap.ui.getCore().byId("idFragment8--OccurenceDate").getValue();
	     var Remarks = sap.ui.getCore().byId("idFragment8--Remarks").getValue();
//	     var SubmittedBy = sap.ui.getCore().byId("idFragment8--SubmittedBy").getValue();
//	     var Subject = sap.ui.getCore().byId("idFragment8--Subject").getValue();
	     
	 

	var oModel = this.getView().byId("idProductsTable").getModel();
	var oModelData = oModel.getProperty("/ProductCollection");



	oModelData[index].SNo = Sno;
	oModelData[index].Student = Name;
	oModelData[index].StartDate = Date;
	oModelData[index].TimeTableName = Remarks;



	oModel.setProperty("/ProductCollection", oModelData);
		 

	this._getDialog().close();


		
	},

	onCircularAdd:function(oEvent){
		
		 var check = true;
		 
		      	 
		   if(this.getView().byId("Select").getSelectedKey() == "" || this.getView().byId("Select").getSelectedKey() == null)
	   		 
	        {
	       		// this.getView().byId("Sel").setValueState("Error");
	       		 
	              //  alert("Please Enter Batch Code");
	                
	                check = false;
	         }
	   	 
		   if(this.getView().byId("txtID").getValue() == "" || this.getView().byId("txtID").getValue() == null)
	   		 
	        {
	       		 this.getView().byId("txtID").setValueState("Error");
	       		 
	               // alert("Please Enter Subject Code");
	                
	                check = false;
	         }
		   
		   if(this.getView().byId("DP2").getValue() == "" || this.getView().byId("DP2").getValue() == null)
	   		 
	        {
	       		 this.getView().byId("DP2").setValueState("Error");
	       		 
	                //alert("Please Enter Student Name");
	                
	                check = false;
	        }
	    
	      if(check)
	      {   
	   	   
	   	   
	   	     var Name = this.getView().byId("Select").getSelectedKey();   
//	     	 var Batch = this.getView().byId("Select").getSelectedKey(); 
//	     	 var Subject = this.getView().byId("Subject").getSelectedItem().getText(); 
	       	var Remarks = this.getView().byId("txtID").getValue();
	       	var Date = this.getView().byId("DP2").getValue();
	   	   
	   	   var oModel = this.getView().byId("idProductsTable").getModel();
	      var oModelData = oModel.getProperty("/ProductCollection");
	     // console.log("Subject"+Subject);
	   	 
	     
	   	 
	      var finalData ={
	              "SNo": oModelData.length+1,
	              "Student": Name,
	              "TimeTableName": Remarks,
	              "StartDate": Date
	             // "Student": Student
	      };    

	      oModelData.push(finalData);
	      oModel.setProperty("/ProductCollection", oModelData);
	   	 
	       
	   	   
	   	   
	   	   
	   	  
	      jQuery.sap.require("sap.m.MessageBox");
	      sap.m.MessageBox.success(
	          "Occurence Has Been Added Successfully", {
	              icon: sap.m.MessageBox.Icon.INFORMATION,
	              title: "Success",
	              actions: [sap.m.MessageBox.Action.OK],
	            //  onClose: function(oAction) { / * do something * / }
	          }
	        );
	      
	      } 

	}
	
	
});