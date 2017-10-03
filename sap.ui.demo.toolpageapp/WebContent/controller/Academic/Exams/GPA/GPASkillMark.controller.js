sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.GPA.GPASkillMark", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.GPA.GPASkillMark
*/
	onInit: function() {
		
		    var model13 = new sap.ui.model.json.JSONModel();
		   // model13.loadData("model/ElectiveSubject.json");
		    
		    var dropdown1 = this.getView().byId("Select");   
		    var dropdown2 = this.getView().byId("Sele");   
		    var dropdown3 = this.getView().byId("input");   
		    var dropdown4 = this.getView().byId("Sel");   
		    var dropdown5 = this.getView().byId("S");   
		    var dropdown6 = this.getView().byId("Sle");   
		    var dropdown7 = this.getView().byId("input12");   
		    var dropdown8 = this.getView().byId("Sel12");   
		    var prdtable1 = this.getView().byId("idProductsTable");
     		var prdtable2 = this.getView().byId("idProductsTabless");
		     
     		   $.ajax({
   	    	   type: "GET",
   	           url : "http://php.my-e-school.com/school.php?type=1&table_name=school_GPA_setmarklist",
   	           crossDomain: true,
   	           dataType: "json",
   	          // data:finalData,
   	           success: function(data) {
   	         	   console.log("Success"+JSON.stringify(data));
   	               model13.setData(data);
   	         	   dropdown1.setModel(model13);
   	         	   dropdown2.setModel(model13);
   	               dropdown3.setModel(model13);
   	               dropdown4.setModel(model13);
   	               dropdown5.setModel(model13);
   	               dropdown6.setModel(model13);
   	               dropdown7.setModel(model13);
   	               dropdown8.setModel(model13);
   	               prdtable1.setModel(model13);
   	               prdtable2.setModel(model13);
   	         	   
   	         	   
   	           },
   	       error: function (data) {
   	      	 console.log("Failed"+JSON.stringify(data));
   		   }
   		});
		    
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Exams.GPA.GPASkillMark
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.GPA.GPASkillMark
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.GPA.GPASkillMark
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
	
	
	FilterSkill:function(){
		
		var aFilter = [];
		var oTable = this.getView().byId("idProductsTabless");
		//console.log(oTable);
		var oBinding = oTable.getBinding("items");
		
		
		//var oFilter = new Filter(sPath, sOperator, sValue1, sValue2);
		
		var Term = this.getView().byId("Select").getSelectedItem().getText();
		var Skills = this.getView().byId("Sele").getSelectedItem().getText();
		var course = this.getView().byId("Sel").getSelectedItem().getText();
		var batch = this.getView().byId("input").getSelectedItem().getText();
		
		aFilter.push(new sap.ui.model.Filter("Course",sap.ui.model.FilterOperator.Contains,course));
		aFilter.push(new sap.ui.model.Filter("Batch",sap.ui.model.FilterOperator.Contains,batch));
		aFilter.push(new sap.ui.model.Filter("SkillName",sap.ui.model.FilterOperator.Contains,Skills));
		aFilter.push(new sap.ui.model.Filter("Term",sap.ui.model.FilterOperator.Contains,Term));
		
		oBinding.filter(new sap.ui.model.Filter({
			filters: aFilter,
			and: true
			}));
		
		
	}
	
});