sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.Timetable.ViewBatchTimeTable", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.Timetable.ViewBatchTimeTable
*/
	onInit: function() {
		
  
	      
	    var model13 = new sap.ui.model.json.JSONModel();
	    model13.loadData("model/ElectiveSubject.json");
	    
	    var dropdown = this.getView().byId("Select");   
	    //dropdown.setModel(model13);
	    
	    
		var dropdown1 = this.getView().byId("Sele");   
	    //dropdown.setModel(model13);
	    
	    var dropdown2 = this.getView().byId("Sel");   
	   // dropdown.setModel(model13);
	    
	    var prdtable = this.getView().byId("idProductsTable");
	   // prdtable.setModel(model13);
			
var coursemodel = new sap.ui.model.json.JSONModel();
	    
        $.ajax({

            type: "GET",

            url : "http://php.my-e-school.com/school.php?type=1&table_name=school_subject",
           	 //"http://my-e-school.com/school.php?table_name=school_course",
            crossDomain: true,
            dataType: "json",
       /*     contentType:"application/json; charset=utf-8",
            headers:{
           	 
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true"
           	 
            },*/
            success: function(data,textStatus,jqXHR) {
           	     console.log("Success");
            	   //  console.log(data);
                            data12 = data;
                            //doSomething(data12);
                        //   var oVizFrame1 =  this.getView().byId("idProductsTable");
                           coursemodel.setData(data12);
                       //     console.log(coursemodel);
                           dropdown1.setModel(coursemodel);
                           dropdown.setModel(coursemodel);
                           prdtable.setModel(coursemodel);
                           dropdown2.setModel(coursemodel);
                          // dropdown4.setModel(coursemodel);
                           
                        //   this.setModel(data,"idProductsTable");

            },
        error: function () {
       	 console.log("Failed");
			}
		});
	    
	    
	    
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf controller.Academic.Timetable.ViewBatchTimeTable
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.Timetable.ViewBatchTimeTable
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.Timetable.ViewBatchTimeTable
*/
//	onExit: function() {
//
//	}
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/Timetable/SetTimeTable");
		//alert("Pressed");
	},
	
	onPres:function(){
		
		var aFilter = [];
		var oTable = this.getView().byId("idProductsTable");
		var oBinding = oTable.getBinding("items");
		
		
		//var oFilter = new Filter(sPath, sOperator, sValue1, sValue2);

		var batch = this.getView().byId("Sele").getSelectedItem().getText();
		var course = this.getView().byId("Select").getSelectedItem().getText(); 
		var TT = this.getView().byId("Sel").getSelectedItem().getText(); 
		
		aFilter.push(new sap.ui.model.Filter("Course",sap.ui.model.FilterOperator.Contains,course));
		aFilter.push(new sap.ui.model.Filter("Batch",sap.ui.model.FilterOperator.Contains,batch));
		aFilter.push(new sap.ui.model.Filter("TimeTableCode",sap.ui.model.FilterOperator.Contains,TT));
		
		oBinding.filter(new sap.ui.model.Filter({
			filters: aFilter,
			and: true
			}));
	},
	
	
	 closeDialog : function() {
         this._getDialog().close()
     },
     
     _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment5","sap.ui.demo.toolpageapp.view.Academic.Timetable.BatchTimeTable", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 onPress:function(oEvent){
			
			
			//var oTable = this.getView().byId("idProductsTable");
			var oSelectedItem = oEvent.getSource().getParent();
	        Sno = oSelectedItem.getBindingContext().getProperty("SubjectID");
	        var Course = oSelectedItem.getBindingContext().getProperty("Course");
	        var Batch = oSelectedItem.getBindingContext().getProperty("Batch");
	        var Student = oSelectedItem.getBindingContext().getProperty("TimeTableCode");
	       // var Subject = oSelectedItem.getBindingContext().getProperty("Subject");   
	        
			
	        this._getDialog().open();
	        
	       // sap.ui.getCore().byId("idFragment5--SNo").setValue(Sno);
	        sap.ui.getCore().byId("idFragment5--Course").setValue(Course);
	        sap.ui.getCore().byId("idFragment5--Batch").setValue(Batch);
	        sap.ui.getCore().byId("idFragment5--TimeTableName").setValue(Student);
	     //   sap.ui.getCore().byId("idFragment5--Subject").setValue(Subject);               
	      //  sap.ui.getCore().byId("idFragment--idEMail").setValue(eMail);
	        
	        
	        
			 var oSelectedItem = oEvent.getSource().getParent();
		      var oBindingContext = oSelectedItem.getBindingContext();

			  //alert(sItemName);
			 
			 //console.log("oBindingContext"+oBindingContext.sPath);
			 

	         
		       var sPath = oEvent.getSource().getBindingContext().sPath; 
		                index = sPath.substr(-1)
			 
		                console.log("index     "+index + " "+Sno);
			
		},
		
	onSave:function(oEvent){
		
		var oSelectedItem = oEvent.getSource().getParent();
		
       // var Sno = oEvent.getBindingContext().getProperty("SubjectID");
		 console.log("oSelectedItem"+oSelectedItem);
		  //var Sno = sap.ui.getCore().byId("idFragment5--SNo").getValue();
	      var Course = sap.ui.getCore().byId("idFragment5--Course").getValue();
	      var Batch = sap.ui.getCore().byId("idFragment5--Batch").getValue();
	      var Student = sap.ui.getCore().byId("idFragment5--TimeTableName").getValue();
	      //var Subject = sap.ui.getCore().byId("idFragment5--Subject").getValue();
	      
	  

     var oModel = this.getView().byId("idProductsTable").getModel();
//     var oModelData = oModel.getProperty("/ProductCollection");
//    
 //console.log("oEvent"+JSON.stringify(oEvent));
//     oModelData[index].SNo = Sno;
//     oModelData[index].Course = Course;
//     oModelData[index].Batch = Batch;
//     oModelData[index].TimeTableName = Student;
//    // oModelData[index].Subject = Subject;
//     
//     
//     oModel.setProperty("/ProductCollection", oModelData);
     
     var finalData = {
             "SubjectID": Sno,
             "Course": Course,
             "Batch": Batch,
             "TimeTableCode": Student
            
     }; 
     
     
     
     $.ajax({

         type: "POST",

         url : "http://php.my-e-school.com/school.php?type=3&table_name=school_subject",
         crossDomain: true,
         dataType: "json",
         data:finalData,
         success: function(data) {
       	     console.log("Success");


         },
     error: function () {
    	 console.log("Failed");
			}
			});
   
     oModel.refresh(true);
   

     this._getDialog().close();

	
		
	}	
	
//	}
});