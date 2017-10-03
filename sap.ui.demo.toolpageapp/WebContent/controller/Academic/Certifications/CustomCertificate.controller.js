sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Certifications.CustomCertificate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Certifications.CustomCertificate
*/
	onInit: function() {
		
		
		var model1 = new sap.ui.model.json.JSONModel();
		model1.loadData("model/Certificates.json");
		  var prdtable = this.getView().byId("idProductsTable");
		  console.log("table"+prdtable);
				prdtable.setModel(model1);


	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Certifications.CustomCertificate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Certifications.CustomCertificate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Certifications.CustomCertificate
*/
//	onExit: function() {
//
//	}

	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Certifications/GenerateCertificate");
		//alert("Pressed");
	},
	addCertificate:function(){
		

   	   var check = true;
   	 
   	   if(this.getView().byId("input-a").getValue() == "" || this.getView().byId("input-a").getValue() == null)
   	    		 
   	         {
   	        		 this.getView().byId("input-a").setValueState("Error");
   	        		 
   	                 //alert("Please Enter Subject Name");
   	                 
   	                 check = false;
   	          }
   	    	 
   	   if(this.getView().byId("input-b").getValue() == "" || this.getView().byId("input-b").getValue() == null)
	    		 
	         {
	        		 this.getView().byId("input-b").setValueState("Error");
	        		 
	                 //alert("Please Enter Subject Code");
	                 
	                 check = false;
	          }   
	    	 
	          if(this.getView().byId("input-e").getValue() == "" || this.getView().byId("input-e").getValue() == null)
		    		 
		         {
		        		 this.getView().byId("input-e").setValueState("Error");
		        		 
		                // alert("Please Enter Subject Code");
		                 
		                 check = false;
		          }
        
          if(check)
          {   
       	   var CertificateType = this.getView().byId("input-a").getValue();   
       	   var CertificateSubType = this.getView().byId("input-b").getValue(); 
           var CerHeading = this.getView().byId("input-e").getValue(); 
       	   
       	   
       	   var oModel = this.getView().byId("idProductsTable").getModel();
          var oModelData = oModel.getProperty("/ProductCollection");
          console.log("oModelData"+oModelData);
       	 
          
//          <Text text="{CertificateType}" />
//				<Text text="{CertificateSubType}" />
//				<Text text="{CertificateHeading}" />
       	 
       	 
          var finalData ={
                  "SNo": oModelData.length+1,
                  "CertificateType": CertificateType,
                  "CertificateSubType": CertificateSubType,
                  "CertificateHeading": CerHeading
//                  "TotalWorkingDays": TotalDays
          };    

          oModelData.push(finalData);
          oModel.setProperty("/ProductCollection", oModelData);
       	 
           
       	   
       	   
       	   
       	  
          jQuery.sap.require("sap.m.MessageBox");
          sap.m.MessageBox.success(
              "Certificate Has Been Added Successfully", {
                  icon: sap.m.MessageBox.Icon.INFORMATION,
                  title: "Success",
                  actions: [sap.m.MessageBox.Action.OK],
                //  onClose: function(oAction) { / * do something * / }
              }
            );
          
          } 
    
	}
});