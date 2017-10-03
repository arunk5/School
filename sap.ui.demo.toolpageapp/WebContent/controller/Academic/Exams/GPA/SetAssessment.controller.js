sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.GPA.SetAssessment", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.GPA.SetAssessment
*/
	onInit: function() {

		 var model13 = new sap.ui.model.json.JSONModel();
		   // model13.loadData("model/ElectiveSubject.json");
		 
		    var dropdown = this.getView().byId("Select");   
		    var dropdown1 = this.getView().byId("Select11");   
		    var dropdown2 = this.getView().byId("Select12");   
		    var dropdown3 = this.getView().byId("Select13");   
		    var dropdown4 = this.getView().byId("Select14");   
		    var dropdown5 = this.getView().byId("Select15");  
		    var dropdown12 = this.getView().byId("Select20");
		    var dropdown13 = this.getView().byId("Select21");
		    var dropdown14 = this.getView().byId("Select22");
		    //var dropdown6 = this.getView().byId("Select1");   
		    var dropdown7 = this.getView().byId("Sele2");   
		    var dropdown8 = this.getView().byId("Sel3");   
		    var dropdown9 = this.getView().byId("Sel4");   
		    var dropdown10 = this.getView().byId("Sel5");   
		    var dropdown11 = this.getView().byId("Sel6");   
		    var prdtable = this.getView().byId("idProductsTable");
		    var prdtable1 = this.getView().byId("idProductsTable1");
			    	
				
		    
		    $.ajax({
	   	    	   type: "GET",
	   	           url : "http://php.my-e-school.com/school.php?type=1&table_name=school_GPA_setmarklist",
	   	           crossDomain: true,
	   	           dataType: "json",
	   	          // data:finalData,
	   	           success: function(data) {
	   	         	   console.log("Success"+JSON.stringify(data));
	   	               model13.setData(data);
	   	               dropdown.setModel(model13);
	   	         	   dropdown1.setModel(model13);
	   	         	   dropdown2.setModel(model13);
	   	               dropdown3.setModel(model13);
	   	               dropdown4.setModel(model13);
	   	               dropdown5.setModel(model13);
	   	            //  dropdown6.setModel(model13);
	   	               dropdown7.setModel(model13);
	   	               dropdown8.setModel(model13);
	   	               dropdown9.setModel(model13);
	   	               dropdown10.setModel(model13);
	   	               dropdown11.setModel(model13);
	   	               dropdown12.setModel(model13);
	   	               dropdown13.setModel(model13);
	   	               dropdown14.setModel(model13);
	   	              // prdtable1.setModel(model13);
	   	               prdtable.setModel(model13);
	   	         	   
	   	         	   
	   	           },
	   	       error: function (data) {
	   	      	 console.log("Failed"+JSON.stringify(data));
	   		   }
	   		});
			      
		
	},
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Exams.GPA.SetAssessment
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.GPA.SetAssessment
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.GPA.SetAssessment
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
	
	AddAss:function(){
		
		 var Course = this.getView().byId("Select20").getSelectedKey();
		 var Batch = this.getView().byId("Select21").getSelectedKey();
		 var Subject = this.getView().byId("Select22").getSelectedKey();
      	 var AType = this.getView().byId("Select").getSelectedKey();
		 var AName = this.getView().byId("AssName").getValue();
		 var MaxMark = this.getView().byId("MaxMark").getValue();
		
		 console.log(AType+" "+AName+" "+MaxMark);
		
		   var finalData ={
		            //   "SNo": oModelData.length+1,
				       "Course":Course,
				       "Batch":Batch,
				       "Subject":Subject,
		               "AssessmentType": AType,
		               "AssessmentName": AName,
		               "AssessmentMaxMarks": MaxMark
			       };    

		       
		       $.ajax({

		           type: "POST",

		           url : "http://php.my-e-school.com/school.php?type=2&table_name=school_GPA_setmarklist",
		           crossDomain: true,
		           dataType: "json",
		           data:finalData,
		           success: function(data) {
		         	     console.log("Success");
		           },
		       error: function (data) {
		      	 console.log("Failed"+JSON.stringify(data));
					}
			});
    // if(check=="true")
		    	   {
		               jQuery.sap.require("sap.m.MessageBox");
		               sap.m.MessageBox.success(
		              "Assessment Has Been Added Successfully", {
		               icon: sap.m.MessageBox.Icon.INFORMATION,
		               title: "Success",
		               actions: [sap.m.MessageBox.Action.OK],
		             
		           }
		      );
		   }
			
	},
	
	AddMarks:function(){
				
		 var Course = this.getView().byId("Select13").getSelectedKey();
		 var Batch = this.getView().byId("Select14").getSelectedKey();
		 var Subject = this.getView().byId("Select15").getSelectedKey();
     	 var Term = this.getView().byId("Select12").getSelectedKey();
		 var AName = this.getView().byId("Select11").getSelectedKey();
		 var MaxMark = this.getView().byId("MaxMark1").getValue();
		
		 //console.log(AType+" "+AName+" "+MaxMark);
		
		   var finalData ={
		            //   "SNo": oModelData.length+1,
				       "Course":Course,
				       "Batch":Batch,
				       "Subject":Subject,
		               "AssessmentName": AName,
		               "AssessmentMarks": MaxMark
			       };    

		       
		       $.ajax({

		           type: "POST",

		           url : "http://php.my-e-school.com/school.php?type=2&table_name=school_GPA_setmarklist",
		           crossDomain: true,
		           dataType: "json",
		           data:finalData,
		           success: function(data) {
		         	     console.log("Success");
		           },
		       error: function (data) {
		      	 console.log("Failed"+JSON.stringify(data));
					}
			});
   // if(check=="true")
		    	   {
		               jQuery.sap.require("sap.m.MessageBox");
		               sap.m.MessageBox.success(
		              "Marks Have Been Added Successfully", {
		               icon: sap.m.MessageBox.Icon.INFORMATION,
		               title: "Success",
		               actions: [sap.m.MessageBox.Action.OK],
		             
		           }
		      );
		   }
				
	},
	onPress:function(){
		
		var aFilter = [];
		var oTable = this.getView().byId("idProductsTable");
		//console.log(oTable);
		var oBinding = oTable.getBinding("items");
		
		
		 var Course = this.getView().byId("Sel4").getSelectedKey();
		 var Batch = this.getView().byId("Sel5").getSelectedKey();
		 var Subject = this.getView().byId("Sel6").getSelectedKey();
    	 var Term = this.getView().byId("Sel3").getSelectedKey();
		 var AName = this.getView().byId("Sele2").getSelectedKey();
		// var MaxMark = this.getView().byId("MaxMark1").getValue();
	
		    aFilter.push(new sap.ui.model.Filter("Course",sap.ui.model.FilterOperator.Contains,Course));
			aFilter.push(new sap.ui.model.Filter("Batch",sap.ui.model.FilterOperator.Contains,Batch));
			aFilter.push(new sap.ui.model.Filter("Subject",sap.ui.model.FilterOperator.Contains,Subject));
			aFilter.push(new sap.ui.model.Filter("Term",sap.ui.model.FilterOperator.Contains,Term));
			aFilter.push(new sap.ui.model.Filter("AssessmentName",sap.ui.model.FilterOperator.Contains,AName));
			
			    oBinding.filter(new sap.ui.model.Filter({
				filters: aFilter,
				and: true
				}));
				
	}

});