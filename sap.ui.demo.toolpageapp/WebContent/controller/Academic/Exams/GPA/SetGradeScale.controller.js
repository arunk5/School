sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.GPA.SetGradeScale", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.GPA.SetGradeScale
*/
	onInit: function() {

		 var model13 = new sap.ui.model.json.JSONModel();
         var prdtable = this.getView().byId("idProductsTable");
		     
	      $.ajax({
	    	   type: "GET",
	           url : "http://php.my-e-school.com/school.php?type=1&table_name=school_GPA_setgradescale",
	           crossDomain: true,
	           dataType: "json",
	          // data:finalData,
	           success: function(data) {
	         	   console.log("Success"+JSON.stringify(data));
	         	   model13.setData(data);
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
* @memberOf controller.Academic.Exams.GPA.SetGradeScale
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.GPA.SetGradeScale
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.GPA.SetGradeScale
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
        var firstnameVal = oSelectedItem.getBindingContext().getProperty("Grade");
        var lastnameVal = oSelectedItem.getBindingContext().getProperty("GradeScale");
        var deptVal = oSelectedItem.getBindingContext().getProperty("LowerMark");   
        var eMail = oSelectedItem.getBindingContext().getProperty("UpperMark");
		
        this._getDialog().open();
        
        sap.ui.getCore().byId("idFragment12--SNo").setValue(persnoVal);
        sap.ui.getCore().byId("idFragment12--Grade").setValue(firstnameVal);
        sap.ui.getCore().byId("idFragment12--GradeScale").setValue(lastnameVal);
        sap.ui.getCore().byId("idFragment12--LowerMark").setValue(deptVal);               
        sap.ui.getCore().byId("idFragment12--UpperMark").setValue(eMail);
        
        
        
		 var oSelectedItem = oEvent.getSource().getParent();
	      var oBindingContext = oSelectedItem.getBindingContext();

		  //alert(sItemName);
		 
		 console.log("oBindingContext"+oBindingContext.sPath);
		 

         
	       var sPath = oEvent.getSource().getBindingContext().sPath; 
	                index = sPath.substr(-1)
		 
	                console.log("index     "+index);
	},
	
	 _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment12","sap.ui.demo.toolpageapp.view.Academic.Exams.GPA.SetGradeScale", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 closeDialog : function() {
         this._getDialog().close()
     },
     onSave : function(oEvent) {
         //debugger;
      
         var oPersonInfo = sap.ui.getCore().byId("idFragment12--SNo").getValue();
         var oFirstName = sap.ui.getCore().byId("idFragment12--Grade").getValue();
         var oLastName = sap.ui.getCore().byId("idFragment12--GradeScale").getValue();
         var oDept = sap.ui.getCore().byId("idFragment12--LowerMark").getValue();
         var oEmail = sap.ui.getCore().byId("idFragment12--UpperMark").getValue();
      

//       console.log("oBindingContext   save"+index);
//         console.log("data     "+oPersonInfo +" "+oFirstName+" "+oLastName+" "+oDept+" "+oEmail);
//	   	 


			 
		// console.log("oBindingContext"+oBindingContext);
	   	 
	   	 
	   	 
	     var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
	    
	   // console.log("oModelData"+oModelData);
	     oModelData[index].SNo = oPersonInfo;
	     oModelData[index].Grade = oFirstName;
	     oModelData[index].GradeScale = oLastName;
	     oModelData[index].LowerMark = oDept;
	     oModelData[index].UpperMark = oEmail;
	     
	     oModel.setProperty("/ProductCollection", oModelData);
	   	 

         this._getDialog().close();
         
         
         
     },
     
     
     CreateGrade: function(oEvent) {
    	 
     	 var GradValue = this.getView().byId("GradeValue").getValue();
		 var ScaleValue = this.getView().byId("GradeScaleValue").getValue();
		 var Lower = this.getView().byId("LowerValue").getValue();
		 var Upper = this.getView().byId("UpperValue").getValue();
		 var PValue = this.getView().byId("PrincipalValue").getValue();
		 console.log(GradValue+" "+ScaleValue+" "+Lower+" "+Upper+" "+PValue);
		
		   var finalData ={
		               "Grade": GradValue,
		               "GradeScaleValue": ScaleValue,
		               "LowerMarkRange": Lower,
		               "UpperMarkRange": Upper,
		               "PrincipalComment":PValue
		       };    

		       
		       $.ajax({

		           type: "POST",
		           url : "http://php.my-e-school.com/school.php?type=2&table_name=school_GPA_setgradescale",
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
		              "GradeScale Has Been Added Successfully", {
		               icon: sap.m.MessageBox.Icon.INFORMATION,
		               title: "Success",
		               actions: [sap.m.MessageBox.Action.OK],
		             
		           }
		      );
		   }
		  	 
     }
});