sap.ui.controller("sap.ui.demo.toolpageapp.controller.loginview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.loginview
*/
	onInit: function() {
		
		var table1 = this.getView().byId("SelectId1");
		table1.setVisible(false);
		var table2 = this.getView().byId("SelectId2");
		table2.setVisible(false);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.loginview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.loginview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.loginview
*/
//	onExit: function() {
//
//	},
	
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/CourseBatch/Course");
		//alert("Pressed");
	},
	
	
	onLoginTap:function(){
		
		
		  var uid = this.getView().byId("uid").getValue();
		  var pasw = this.getView().byId("pasw").getValue();
		  
		 // sap.m.MessageToast.show("Login Successfull");
		  
		  var onJsonModel = this.myown(uid,pasw);
		 // console.log(" onJsonModel "+onJsonModel);
		  
		    var json = {};
		    
//			var fname = this.getView().byId("SelectId1")
//			fname.getSelectedKey();
			var lname = this.getView().byId("SelectId1").getModel();
			var model = sap.ui.getCore().getModel("MODEL");
			console.log("MODEL"+ model);
			console.log("MODEL Value"+ model.getProperty("MODEL>/login"));
			var login = model.getProperty("/login");
		//	console.log("Value"+login[0].username)
			//console.log(" fname "+ lname.getProperty("login/0/username"));
			//console.log(uid+" "+fname+" "+pasw+" "+lname);
			var lname = 2;
			
			if(lname.length == 0)
				{
			sap.m.MessageToast.show("Login Failed");
				}
			else
				{
			var model = new sap.ui.model.json.JSONModel();
			model.setData("Arun");
			sap.ui.getCore().setModel(model,"UAuth");
			sap.m.MessageToast.show("Login Successfull");
		    this.getRouter().navTo("mainContent");
				}
	},
	
	myown : function (uid,pasw){
		var oModelll = new sap.ui.model.json.JSONModel();
		var table1 = this.getView().byId("SelectId1");
		var table2 = this.getView().byId("SelectId2");
//		 var uid = this.getView().byId("uid").getValue();
//		 var pasw = this.getView().byId("pasw").getValue();
		var usercreds = [];
		        $.ajax({
		            type: "GET",
		            url : "http://php.my-e-school.com/login.php",
		           	//"http://my-e-school.com/school.php?table_name=school_course",
		            crossDomain: true,
		            dataType: "json",
		            data: {
		           	username:uid,
		           	password:pasw
		            },
		            success: function(data,textStatus,jqXHR) {
		           	    console.log("Success");
                       
                        //this.getRouter().navTo("mainContent");
		                            oModelll.setData(data);
		                            console.log(oModelll);
		                            table1.setModel(oModelll);
		                            table2.setModel(oModelll);
		                          
		            },
		        error: function () {
		             	console.log("Failed");
		}
		                    
		})
		sap.ui.getCore().setModel(oModelll,"MODEL");
		return;     
	}
});