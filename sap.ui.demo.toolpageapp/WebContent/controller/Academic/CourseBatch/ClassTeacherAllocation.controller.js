sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.CourseBatch.ClassTeacherAllocation", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.CourseBatch.ClassTeacherAllocation
*/
	onInit: function() {

		
		var model = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": " Please Select  ",

			                "KEY": " Please Select  "

			               },     
			     {

                "VALUE": " STD-I ",

                "KEY": " STD-I "

               },
               {

                   "VALUE": " STD-II ",

                   "KEY": " STD-II "

              },
              
              {

                  "VALUE": " STD-III ",

                  "KEY": " STD-III "

             },
             
             {

                 "VALUE": " STD-IV ",

                 "KEY": " STD-IV "

            },
            {

                "VALUE": " STD-V ",

                "KEY": " STD-V "

           },
           {

               "VALUE": " MBA ",

               "KEY": " MBA "

          },
           {

               "VALUE": " STD-VI ",

               "KEY": " STD-VI "

          },
          {

              "VALUE": " STD-VII ",

              "KEY": " STD-VII "

         },
         {

             "VALUE": " STD-VIII ",

             "KEY": " STD-VIII "

        },
        {

            "VALUE": " STD-IX ",

            "KEY": " STD-IX "

       },
       
       {

           "VALUE": " STD-X ",

           "KEY": " STD-X "

      },
      {

          "VALUE": " Inter ",

          "KEY": " Inter "

     },
     
    {

        "VALUE": " Pre-Primary ",

        "KEY": " Pre-Primary "

   }
         
			    
			  ]
			 // selectedTrip: ''
			});
		//sap.ui.getCore().byId("SelectId");
		var selectid = this.getView().byId("SelectId");
		selectid.setModel(model);
		//this.getView().setModel(model);
		
		
		
		var model1 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          {

			                "VALUE": " A  ",

			                "KEY": " A  "

			               },     
			     {

              "VALUE": " Eveng ",

              "KEY": " Eveng "

             },
             {

                 "VALUE": " Mrng ",

                 "KEY": " Mrng "

            },
            
            {

                "VALUE": " Normal ",

                "KEY": " Normal "

           },
           
           {

               "VALUE": " B ",

               "KEY": " B "

          },
          {

              "VALUE": " Sample ",

              "KEY": " Sample "

         },
         {

             "VALUE": " Batch C ",

             "KEY": " Batch C "

        },
         {

             "VALUE": " Batch E ",

             "KEY": " Batch E "

        },
        {

            "VALUE": " 1A ",

            "KEY": " 1A "

       },
       {

           "VALUE": " MBA Finance Eveng ",

           "KEY": " MBA Finance Eveng "

      },
      {

          "VALUE": " MBA HR Eveng ",

          "KEY": " MBA HR Eveng "

     },
     
     {

         "VALUE": " MCom Normal ",

         "KEY": " MCom Normal "

    }
    

       
			    
			  ]
			 // selectedTrip: ''
			});
		
		
		
		var selectid = this.getView().byId("input-a");
		selectid.setModel(model1);
		
		
		var model2 = new sap.ui.model.json.JSONModel({
			  trips: [
			          
			          
{

    "VALUE": " Please Select ",

    "KEY": " Please Select "

},
			          
			          {

			                "VALUE": " Aristocle  ",

			                "KEY": " A  "

			               },     
			     {

            "VALUE": " Leo ",

            "KEY": " Leo "

           },
           {

               "VALUE": " Avinash ",

               "KEY": " Avinash "

          },
          
          {

              "VALUE": " Krithi ",

              "KEY": " Krithi "

         },
         
         {

             "VALUE": " Vasuda ",

             "KEY": " Vasuda "

        },
        {

            "VALUE": " Ramesh ",

            "KEY": " Ramesh "

       },
       {

           "VALUE": " Maramraju ",

           "KEY": " Maramraju "

      },
       {

           "VALUE": " Nikhil ",

           "KEY": " Nikhil "

      }
          
		 
			  ]
			
			});
		
		
		
		var selectid = this.getView().byId("input-b");
		selectid.setModel(model2);
		
		
		
		
		
		
		
		
		
		
    var model12 = new sap.ui.model.json.JSONModel();
 //   model12.loadData("model/TeacherView.json");
      var prdtable = this.getView().byId("idProductsTable");
//      console.log("table"+prdtable);
//		prdtable.setModel(model12);
//		
		
		  $.ajax({

	             type: "GET",
	             
	             url :"http://php.my-e-school.com/school.php?type=1&table_name=Batch",
	             crossDomain: true,
	             dataType: "json",

	             success: function(data,textStatus,jqXHR) {
	            	     console.log("Success");
	             	     console.log(data);
	                             data12 = data;
	                             //doSomething(data12);
	                         //   var oVizFrame1 =  this.getView().byId("idProductsTable");
	                             model12.setData(data);
	                             console.log(model12);
	                             prdtable.setModel(model12);
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
* @memberOf controller.Academic.CourseBatch.ClassTeacherAllocation
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.CourseBatch.ClassTeacherAllocation
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.CourseBatch.ClassTeacherAllocation
*/
//	onExit: function() {
//
//	}

	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
		},

	
	BackButtonPress:function(){
		
		this.getRouter().navTo("Academic/CourseBatch/Course");
		//alert("Pressed");
	},
	
	save:function(){
		
		 var Course = this.getView().byId("SelectId").getSelectedKey();
         var Batch = this.getView().byId("input-a").getSelectedKey();
         var Teaher = this.getView().byId("input-b").getSelectedKey();
        // var model=this.getView().byId("idProductsTable").getModel();
		
         var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
         
         console.log("Values"+ oModelData.length);
		
		
				
      var finalData ={
      //"SNo":oModelData.length+1,		  
      "Course": Course,
      "Batch": Batch,
      "ClassTeacher": Teaher,
     };           

//Create
var oModel = this.getView().byId("idProductsTable").getModel();
//
//var oModelData = oModel.getProperty("/ProductCollection");
//console.log("oModelData"+oModelData);
//oModelData.push(finalData);
//oModel.setProperty("/ProductCollection", oModelData);
//		

$.ajax({

    type: "POST",

    url : "http://php.my-e-school.com/school.php?type=2&table_name=Batch",
    crossDomain: true,
    dataType: "json",
    data:finalData,
    success: function(data) {
  	     console.log("Success"+JSON.stringify(data));
//    	     console.log(data);
                //    data12 = data;
                    //doSomething(data12);
                //   var oVizFrame1 =  this.getView().byId("idProductsTable");
                  //  coursemodel.setData(data);
             //       console.log(coursemodel);
                  //  table.setModel(coursemodel);
                //   this.setModel(data,"idProductsTable");

    },
error: function (data) {
	 console.log("Failed"+JSON.stringify(data));
		}
		});





jQuery.sap.require("sap.m.MessageBox");
sap.m.MessageBox.success(
    "Teacher has Been Allocated Successfully", {
        icon: sap.m.MessageBox.Icon.INFORMATION,
        title: "Success",
        actions: [sap.m.MessageBox.Action.OK],
      //  onClose: function(oAction) { / * do something * / }
    }
  );


	},
	
	
	 _getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment2","sap.ui.demo.toolpageapp.view.Academic.CourseBatch.ClassTeacher", this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 closeDialog : function() {
         this._getDialog().close()
     },
	
	onPress:function(oEvent){
		
		
		//var oTable = this.getView().byId("idProductsTable");
		var oSelectedItem = oEvent.getSource().getParent();
        var Sno = oSelectedItem.getBindingContext().getProperty("BatchID");
        var Course = oSelectedItem.getBindingContext().getProperty("Course");
        var Batch = oSelectedItem.getBindingContext().getProperty("Batch");
        var ClassTeacher = oSelectedItem.getBindingContext().getProperty("ClassTeacher");   
        
		
        this._getDialog().open();
        
        sap.ui.getCore().byId("idFragment2--SNo").setValue(Sno);
        sap.ui.getCore().byId("idFragment2--Course").setValue(Course);
        sap.ui.getCore().byId("idFragment2--Batch").setValue(Batch);
        sap.ui.getCore().byId("idFragment2--ClassTeacher").setValue(ClassTeacher);               
      //  sap.ui.getCore().byId("idFragment--idEMail").setValue(eMail);
        
        
        
		 var oSelectedItem = oEvent.getSource().getParent();
	      var oBindingContext = oSelectedItem.getBindingContext();

		  //alert(sItemName);
		 
		 console.log("oBindingContext"+oBindingContext.sPath);
		 

         
	       var sPath = oEvent.getSource().getBindingContext().sPath; 
	                index = sPath.substr(-1)
		 
	                console.log("index     "+index);
		
	},
	
	 closeDialog : function() {
         this._getDialog().close()
     },
     
     
     onSave : function(oEvent) {
       
      
         var Sno = sap.ui.getCore().byId("idFragment2--SNo").getValue();
         var Course = sap.ui.getCore().byId("idFragment2--Course").getValue();
         var Batch = sap.ui.getCore().byId("idFragment2--Batch").getValue();
         var ClassTeacher = sap.ui.getCore().byId("idFragment2--ClassTeacher").getValue();
      

         
         var oTable = this.getView().byId("idProductsTable");
		 var oSelectedItem = oTable.getSelectedItem();
		 var aggregations = oTable.getAggregation("items");

		// var index = aggregations.indexOf(oSelectedItem);


//		 console.log("oBindingContext   save"+index);
//         console.log("data     "+oPersonInfo +" "+oFirstName+" "+oLastName+" "+oDept+" "+oEmail);
	   	 


			 
		// console.log("oBindingContext"+oBindingContext);
	   	 
	   	 
	   	 
	     var oModel = this.getView().byId("idProductsTable").getModel();
         var oModelData = oModel.getProperty("/ProductCollection");
	    
	    console.log("oModelData"+oModelData);
	     oModelData[index].SNo = Sno;
	     oModelData[index].Course = Course;
	     oModelData[index].Batch = Batch;
	     oModelData[index].ClassTeacher = ClassTeacher;
	     //oModelData[index].TotalWorkingDays = oEmail;
	     
	     var finalData ={
	             "BatchID": Sno,   			 
	             "Course": Course,
	          
	 		     "Batch": Batch,
	 		     "ClassTeacher": ClassTeacher,
//	 		     "EndDate":eMail,
//	 		     "MaxNoOfStudents":Students
	     };  
	     
	     
	     
	     
	     $.ajax({

	           type: "POST",

	           url : "http://php.my-e-school.com/school.php?type=3&table_name=Batch",
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
	     
	     
	     
	     
	     
	  //   oModel.setProperty("/ProductCollection", oModelData);
	   	 

         this._getDialog().close();
         
         
         
     },
     
 onDelete:function(oEvent){
	 
	 var sPath = oEvent.getSource().getBindingContext().sPath; 
     var init = sPath.substr(-1)

     //console.log("Init"+init);
    var oModel = this.getView().byId("idProductsTable").getModel();
	//var oModel = sap.ui.getCore().getModel();
    var oModelData = oModel.getProperty("/ProductCollection");
//    oModelData.splice(init,1);
//    oModel.setProperty("/ProductCollection", oModelData);
    
    var oSelectedItem = oEvent.getSource().getParent();
    var persnoVal = oSelectedItem.getBindingContext().getProperty("BatchID");
    var firstnameVal = oSelectedItem.getBindingContext().getProperty("Course");
    var lastnameVal = oSelectedItem.getBindingContext().getProperty("Batch");
    var deptVal = oSelectedItem.getBindingContext().getProperty("ClassTeacher");   
//    var eMail = oSelectedItem.getBindingContext().getProperty("EndDate");  
//    var Students = oSelectedItem.getBindingContext().getProperty("MaxNoOfStudents");
           
    
	
    var finalData ={
            "BatchID": persnoVal,   			 
            "Course": firstnameVal,
         
		     "Batch": lastnameVal,
		     "ClassTeacher": deptVal,
//		     "EndDate":eMail,
//		     "MaxNoOfStudents":Students
    };  
    
    
    
    
	
    $.ajax({

        type: "POST",

        url : "http://php.my-e-school.com/school.php?type=4&table_name=Batch",
        crossDomain: true,
        dataType: "json",
        data:finalData,
        success: function(data) {
      	     console.log("Success"+JSON.stringify(data));
//        	     console.log(data);
                    //    data12 = data;
                        //doSomething(data12);
                    //   var oVizFrame1 =  this.getView().byId("idProductsTable");
                      //  coursemodel.setData(data);
                 //       console.log(coursemodel);
                      //  table.setModel(coursemodel);
                    //   this.setModel(data,"idProductsTable");

        },
    error: function (data) {
   	 console.log("Failed"+JSON.stringify(data));
			}
			});


 }    
     
	
});