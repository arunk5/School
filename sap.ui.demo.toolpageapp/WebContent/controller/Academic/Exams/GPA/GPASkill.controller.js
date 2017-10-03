sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.GPA.GPASkill", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.GPA.GPASkill
*/
	onInit: function() {

	    var model13 = new sap.ui.model.json.JSONModel();
	   // model13.loadData("model/ElectiveSubject.json");
	    
	    var course = this.getView().byId("Select20"); 
	    var batch = this.getView().byId("Select21");
	    var term = this.getView().byId("Select");
	  //  dropdown.setModel(model13);
	   var prdtable = this.getView().byId("idProductsTable");
        //  prdtable.setModel(model13);
	   
	   var model4 = new sap.ui.model.json.JSONModel({});
	      $.ajax({
	    	   type: "GET",
	           url : "http://php.my-e-school.com/school.php?type=1&table_name=school_GPA_setexam",
	           crossDomain: true,
	           dataType: "json",
	          // data:finalData,
	           success: function(data) {
	         	   console.log("Success"+JSON.stringify(data));
	         	   model4.setData(data);
	         	   course.setModel(model4);
	         	   batch.setModel(model4);
	         	   term.setModel(model4);
	         	  // dropdown5.setModel(model4);
	         	  //  dropdown6.setModel(model4);
	         	  // prdtable1.setModel(model4);
	         	   prdtable.setModel(model4);
	         	       	   
	         	   
	         	   
	           },
	       error: function (data) {
	      	 console.log("Failed"+JSON.stringify(data));
		   }
		});
     
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Exams.GPA.GPASkill
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.GPA.GPASkill
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.GPA.GPASkill
*/
//	onExit: function() {
//
//	}
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Exams/GPAOverView");
		//alert("Pressed");
	},
	
	
onPress:function(oEvent){
		
		//var oTable = this.getView().byId("idProductsTable");
		var oSelectedItem = oEvent.getSource().getParent();
        var persnoVal = oSelectedItem.getBindingContext().getProperty("SNo");
        var firstnameVal = oSelectedItem.getBindingContext().getProperty("Skill");
        var lastnameVal = oSelectedItem.getBindingContext().getProperty("SubSkill");
//        var deptVal = oSelectedItem.getBindingContext().getProperty("MinimumAttendance");   
//        var eMail = oSelectedItem.getBindingContext().getProperty("TotalWorkingDays");
//		
        this._getDialog().open();
        
        sap.ui.getCore().byId("idFragment11--SNo").setValue(persnoVal);
        sap.ui.getCore().byId("idFragment11--Skill").setValue(firstnameVal);
        sap.ui.getCore().byId("idFragment11--SubSkill").setValue(lastnameVal);
//        sap.ui.getCore().byId("idFragment11--idDepartment").setValue(deptVal);               
//        sap.ui.getCore().byId("idFragment11--idEMail").setValue(eMail);
        
        
        
//		 var oSelectedItem = oEvent.getSource().getParent();
//	      var oBindingContext = oSelectedItem.getBindingContext();

		  //alert(sItemName);
		 
		// console.log("oBindingContext"+oBindingContext.sPath);
		 

         
	       var sPath = oEvent.getSource().getBindingContext().sPath; 
	                index = sPath.substr(-1)
		 
	                console.log("index     "+index);
	},
	
	 _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment11","sap.ui.demo.toolpageapp.view.Academic.Exams.GPA.GPASkill", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 closeDialog : function() {
         this._getDialog().close()
     },
     onSave : function(oEvent) {
         //debugger;
      
         var oPersonInfo = sap.ui.getCore().byId("idFragment11--SNo").getValue();
         var oFirstName = sap.ui.getCore().byId("idFragment11--Skill").getValue();
         var oLastName = sap.ui.getCore().byId("idFragment11--SubSkill").getValue();
//         var oDept = sap.ui.getCore().byId("idFragment11--idDepartment").getValue();

         
         
         var oTable = this.getView().byId("idProductsTable");
		 var oSelectedItem = oTable.getSelectedItem();
		 var aggregations = oTable.getAggregation("items");

		// var index = aggregations.indexOf(oSelectedItem);

//
//		 console.log("oBindingContext   save"+index);
//         console.log("data     "+oPersonInfo +" "+oFirstName+" "+oLastName+" "+oDept+" "+oEmail);
//	   	 


			 
		// console.log("oBindingContext"+oBindingContext);
	   	 
	   	 
	   	 
	     var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
	    
	    console.log("oModelData"+oModelData);
	     oModelData[index].SNo = oPersonInfo;
	     oModelData[index].Skill = oFirstName;
	     oModelData[index].SubSkill = oLastName;
//	     oModelData[index].MinimumAttendance = oDept;
//	     oModelData[index].TotalWorkingDays = oEmail;
	     
	     oModel.setProperty("/ProductCollection", oModelData);
	   	 

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
               "SNo": oModelData.length+1,
               "Course": Course,
               "AttendanceType": AttendanceType,
               "MinimumAttendance": AttendancePrecentage,
               "TotalWorkingDays": TotalDays
       };    

       oModelData.push(finalData);
       oModel.setProperty("/ProductCollection", oModelData);
    	 
        
       if(check=="true")
    	   {
       jQuery.sap.require("sap.m.MessageBox");
       sap.m.MessageBox.success(
           "Course Has Been Added Successfully", {
               icon: sap.m.MessageBox.Icon.INFORMATION,
               title: "Success",
               actions: [sap.m.MessageBox.Action.OK],
             //  onClose: function(oAction) { / * do something * / }
           }
         );
       
       } 
    	 
     },
     
    onDelete:function(oEvent)
    {
    	
    	 var sPath = oEvent.getSource().getBindingContext().sPath; 
         var init = sPath.substr(-1)

         console.log("Init"+init);
        var oModel = this.getView().byId("idProductsTable").getModel();
    	//var oModel = sap.ui.getCore().getModel();
        var oModelData = oModel.getProperty("/ProductCollection");
        oModelData.splice(init,1);
        oModel.setProperty("/ProductCollection", oModelData);
    	
    	

    	
    	
    } 
	
	
});