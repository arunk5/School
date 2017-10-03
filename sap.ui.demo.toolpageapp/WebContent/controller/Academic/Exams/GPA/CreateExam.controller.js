sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Exams.GPA.CreateExam", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Exams.GPA.CreateExam
*/
	onInit: function() {


   	    var model13 = new sap.ui.model.json.JSONModel();
        model13.loadData("model/ElectiveSubject.json");

        var dropdown4 = this.getView().byId("Select");   
        //dropdown.setModel(model13);
  
        var dropdown5 = this.getView().byId("SelectId1");   
        //dropdown.setModel(model13);
 
        var dropdown6 = this.getView().byId("Select1");   
        //dropdown.setModel(model13);
  

        var prdtable = this.getView().byId("idProductsTable");
       // prdtable.setModel(model13);
		
        var prdtable1 = this.getView().byId("idProductsTable1");
        //prdtable.setModel(model13);
		
        var dropdown1 = this.getView().byId("Select20");   
	    //dropdown.setModel(model13);
	    var dropdown2 = this.getView().byId("Select21");   
	    //dropdown.setModel(model13);
	   
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
	         	   dropdown1.setModel(model4);
	         	   dropdown2.setModel(model4);
	         	   dropdown4.setModel(model4);
	         	  // dropdown5.setModel(model4);
	         	  //  dropdown6.setModel(model4);
	         	  // prdtable1.setModel(model4);
	         	   prdtable.setModel(model4);
	         	   //int j=0;   	   
	         	 // var oSelect = this.getView().byId("Select21");
	         	  dropdown2.ontap = function(oEvent) {
                      if (!dropdown2.isOpen()) {
                    	//  dropdown2.setBusy(true);
                        //var oModel = this.dropdown2.getModel();
              			var oModelData = model4.getProperty("/ProductCollection");
              	        console.log(" Data "+oModelData+" "+oModelData.length+" "+oModelData[0].Batch);
              	        var x = new Array(oModelData.length);
              	         var n=parseInt(oModelData.length);
              	         var i=parseInt("0");
              	         for(i;i<n;i++)
              	       //while(j<=oModelData[j].length)
              	          {
              	            x.push(oModelData[i].Batch);
              	            
              	          }
                        
              	        console.log("Array"+x);
              	        
                      }
                      sap.m.Select.prototype.ontap.apply(this, arguments);
                  };
	         	   
	         	   
	         	   
	         	   
	         	   
	         	   
	           },
	       error: function (data) {
	      	 console.log("Failed"+JSON.stringify(data));
		   }
		});
          
	      
	      var dd12 = this.getView().byId("Select21").getFirstItem(); 
	      this.getView().byId("Select21").setSelectedItem(dd12);
        
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Exams.GPA.CreateExam
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Exams.GPA.CreateExam
*/
	onAfterRendering: function() {
		
			

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Exams.GPA.CreateExam
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
	
	
	Delete:function(oEvent){
		
		 var sPath = oEvent.getSource().getBindingContext().sPath; 
	     var init = sPath.substr(-1)

	  //   console.log("Init"+init);
	    var oModel = this.getView().byId("idProductsTable1").getModel();
		//var oModel = sap.ui.getCore().getModel();
	    var oModelData = oModel.getProperty("/ProductCollection");
	    oModelData.splice(init,1);
	    oModel.setProperty("/ProductCollection", oModelData);
		
		
	},
	
	
	Create:function(){
		
		
		 var Course = this.getView().byId("Select20").getSelectedKey();
		 var Batch = this.getView().byId("Select21").getSelectedKey();
		 var Term = this.getView().byId("Select").getSelectedKey();
		 var EndDate = this.getView().byId("ExamName").getValue();
		 console.log(Course+" "+Term+" "+EndDate);
		
		   var finalData ={
		            //   "SNo": oModelData.length+1,
		               "Course": Course,
		               "Term": Term,
		               "Batch": Batch,
		               "ExamName": EndDate
		       };    

		       
		       $.ajax({

		           type: "POST",

		           url : "http://php.my-e-school.com/school.php?type=2&table_name=school_GPA_setexam",
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
		              "Exam Has Been Added Successfully", {
		               icon: sap.m.MessageBox.Icon.INFORMATION,
		               title: "Success",
		               actions: [sap.m.MessageBox.Action.OK],
		             
		           }
		      );
		   }
		},
		
		BatchFilter:function(){
			
			var oModel = this.getView().byId("Select21").getModel();
			var oModelData = oModel.getProperty("/ProductCollection");
	        console.log(" Data "+oModelData);
	        console.log(" Data1 "+oModelData[0].Batch); " "+oModelData.length
	        console.log(" Data2 "+oModelData[1].Batch);
			
		}
	
		
});