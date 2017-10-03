sap.ui.controller("sap.ui.demo.toolpageapp.controller.Academic.CourseBatch.Batch", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf controller.Academic.CourseBatch.Batch
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

         "VALUE": " MBA ",

         "KEY": " MBA "

    },
    {

        "VALUE": " Pre-Primary ",

        "KEY": " Pre-Primary "

   }
         
			    
			  ]
			 // selectedTrip: ''
			});
		
		this.getView().setModel(model);
		
        var model1 = new sap.ui.model.json.JSONModel();
        model1.loadData("model/BatchView.json");
//        var prdtable = this.getView().byId("idProducts");
//        console.log("table"+prdtable);
//		prdtable.setModel(model1);
		
		  var table = this.getView().byId("idProducts");
	      var model = new sap.ui.model.json.JSONModel();
	         
	         $.ajax({

	             type: "GET",

	             url : "http://php.my-e-school.com/school.php?type=6&table_name=batch_course",
	             crossDomain: true,
	             dataType: "json",

	             success: function(data,textStatus,jqXHR) {
	            	     console.log("Success");
	             	//     console.log(data);
	                             data12 = data;
	                             //doSomething(data12);
	                         //   var oVizFrame1 =  this.getView().byId("idProductsTable");
	                             model.setData(data);
	                //             console.log(model);
	                             table.setModel(model);
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
* @memberOf controller.Academic.CourseBatch.Batch
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf controller.Academic.CourseBatch.Batch
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf controller.Academic.CourseBatch.Batch
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
	
	onSave:function(){
		
		
		
        
   //     console.log("Values"+ SrtDate +" "+EndDate+" "+max+""+oModelData.length);
		
      var check = true;
//   	 
//        if(this.getView().byId("SelectId").getValue() == "" || this.getView().byId("SelectId").getValue() == null)
//         		 
//              {
//             		// this.getView().byId("input-a").setValueState("Error");
//             		 
//                      alert("Please Enter Course");
//                      
//                      check = false;
//               }
//        
        if(this.getView().byId("input-a").getValue() == "" || this.getView().byId("input-a").getValue() == null)
    		 
        {
       		 this.getView().byId("input-a").setValueState("Error");
       		 
               // alert("Please Enter Batch");
                
                check = false;
         }
        
        if(this.getView().byId("input-b").getValue() == "" || this.getView().byId("input-b").getValue() == null)
    		 
        {
       		 this.getView().byId("input-b").setValueState("Error");
       		 
              //  alert("Please Enter Start Date");
                
                check = false;
         }
        
        if(this.getView().byId("input-c").getValue() == "" || this.getView().byId("input-c").getValue() == null)
    		 
        {
       		 this.getView().byId("input-c").setValueState("Error");
       		 
              //  alert("Please Enter End Date");
                
                check = false;
         }
        
        if(this.getView().byId("input-d").getValue() == "" || this.getView().byId("input-d").getValue() == null)
    		 
        {
       		 this.getView().byId("input-d").setValueState("Error");
       		 
                //alert("Please Enter Max No Of Students");
                
                check = false;
         }
        
        
        
        
				
        

//Create
//var oModel = this.getView().byId("idProductsTable").getModel();
////
//var oModelData = oModel.getProperty("/ProductCollection");

        console.log("check"+check);
//if(check)
{
	
	var Course = this.getView().byId("SelectId").getSelectedKey();
    var Batch = this.getView().byId("input-a").getValue();
    var SrtDate = this.getView().byId("input-b").getValue();
    var EndDate = this.getView().byId("input-c").getValue();
    var max=this.getView().byId("input-d").getValue();
	
    var oModel = this.getView().byId("idProducts").getModel();
  //  var oModelData = oModel.getProperty("/ProductCollection");

	
	 var finalData ={
		    // "course_id":oModelData.length+1,		  
		     "Course": Course,
		     "Batch": Batch,
		     "StartDate": SrtDate,
		     "EndDate":EndDate,
		     "MaxNoOfStudents":max
		     
		    };       
	
	 $.ajax({

         type: "POST",

         url : "http://php.my-e-school.com/school.php?type=2&table_name=Batch",
         crossDomain: true,
         dataType: "json",
         data:finalData,
         success: function(data) {
       	     console.log("Success"+JSON.stringify(data));
//         	     console.log(data);
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
	 
	 
	 
	 
	
//	console.log("oModelData"+oModelData);
//	oModelData.push(finalData);
//	oModel.setProperty("/ProductCollection", oModelData);		
	 
	 oModel.refresh(true);
	 
   jQuery.sap.require("sap.m.MessageBox");
     sap.m.MessageBox.success(
"Batch Has Been Added Successfully", {
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
	       //  var init = sPath.substr(-1)

	         //console.log("Init"+init);
	        var oModel = this.getView().byId("idProducts").getModel();
	    	//var oModel = sap.ui.getCore().getModel();
	        var oModelData = oModel.getProperty("/ProductCollection");
//	        oModelData.splice(init,1);
//	        oModel.setProperty("/ProductCollection", oModelData);
//	    	
	        var oSelectedItem = oEvent.getSource().getParent();
	        var persnoVal = oSelectedItem.getBindingContext().getProperty("id");
	        var firstnameVal = oSelectedItem.getBindingContext().getProperty("Course");
	        var lastnameVal = oSelectedItem.getBindingContext().getProperty("Batch");
	        var deptVal = oSelectedItem.getBindingContext().getProperty("StartDate");   
	        var eMail = oSelectedItem.getBindingContext().getProperty("EndDate");  
	        var Students = oSelectedItem.getBindingContext().getProperty("MaxNoOfStudents");
	               
	        
	    	
	        var finalData ={
	                "id": persnoVal,   			 
	                "Course": firstnameVal,
	             
	   		     "Batch": lastnameVal,
	   		     "StartDate": deptVal,
	   		     "EndDate":eMail,
	   		     "MaxNoOfStudents":Students
	        };  



	        $.ajax({

	            type: "POST",

	            url : "http://php.my-e-school.com/school.php?type=4&table_name=batch",
	            crossDomain: true,
	            dataType: "json",
	            data:finalData,
	            success: function(data) {
	          	     console.log("Success"+JSON.stringify(data));
//	            	     console.log(data);
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
	        
	    } ,
	    
	    _getDialog : function() {
	         // create a fragment with dialog, and pass the selected data
	         if (!this.dialog) {
	             // This fragment can be instantiated from a controller as follows:
	             this.dialog = sap.ui.xmlfragment("idFragment","sap.ui.demo.toolpageapp.view.Academic.CourseBatch.BatchView", this);
	             //debugger;
	         }	
	         
	         return this.dialog;
		 },
		 
		 closeDialog : function() {
	         this._getDialog().close()
	     },	    
	    
	    onEditPress:function(oEvent){
	    	
	    	this._getDialog().open(); 	
	    	
	    	
	    	var oSelectedItem = oEvent.getSource().getParent();
	       // var MaxStudents = oSelectedItem.getBindingContext().getProperty("MaxNoOfStudents");
	        var course = oSelectedItem.getBindingContext().getProperty("Course");
	        var courseid = oSelectedItem.getBindingContext().getProperty("course_id");
	        var batch = oSelectedItem.getBindingContext().getProperty("Batch");
	    	
	        console.log(course+"  "+batch+" "+courseid);
	    	
	        var coursesel=sap.ui.getCore().byId("idFragment--CourseSelect");
	        var batchsel=sap.ui.getCore().byId("idFragment--BatchSelect");
	        
//	        console.log(coursesel+"  "+batchsel);
	        
	        this.getView().byId("idFragment--CourseSelect");
	        this.getView().byId("BatchSelect");
	        
	    //    console.log(this.getView().byId("BatchSelect")+"  "+this.getView().byId("idFragment--CourseSelect"));
	        
	    //    sap.ui.getCore().byId("idFragment--NoOfStudents").setValue(MaxStudents);
	    //    sap.ui.getCore().byId("idFragment--StartDate").setValue(StartDate);               
	    //    sap.ui.getCore().byId("idFragment--EndDate").setValue(EndDate);
	        
	    //    this._getDialog().open();
	    	
	    	//var coursearray = new coursearray(15)
	        var model = new sap.ui.model.json.JSONModel();
	        var CourseModelData ;
	        var BatchModelData ;
	         $.ajax({

	             type: "GET",

	             url : "http://php.my-e-school.com/school.php?type=6&table_name=Unique_courses",
	             crossDomain: true,
	             dataType: "json",

	             success: function(data,textStatus,jqXHR) {
	            	     console.log("Success");
//	             	     console.log(data);
	                             data12 = data;
	                         //    console.log(data);
	                             //doSomething(data12);
	                         //   var oVizFrame1 =  this.getView().byId("idProductsTable");
	                             model.setData(data);
	                            // console.log(model);
	                             coursesel.setModel(model);
	                             coursesel.setSelectedItemId(course).setSelectedKey(4);
	                             selectedItemId
	                             CourseModelData = model.getProperty("/ProductCollection");
	                             
	                   	         console.log(" Data "+ CourseModelData);
	                   	       
	                   	      // oModelData.filter
	                   	        
	                   	        
//	                   	        var x = new Array(oModelData.length);
//	                   	        var n=parseInt(oModelData.length);
//	                   	        var i=parseInt("0");
//	                   	        var obj = {};
//
//	                   	  
//	                   	        for(i;i<n;i++)
//	                   	       //while(j<=oModelData[j].length)
//	                   	          {
//	                   	           obj['course_id'] = oModelData[i].course_id;
//	                   	           x.push(obj);
//	                   	          // x.push(oModelData[i].Course);
//	                   	          // console.log("Array i"+oModelData[i].Course);  
//	                   	          }
//	                             
//	                   	        console.log("Array"+x[0]);
//	                             
	                             
	                             
	                            // batchsel.setModel(model);
	                            
	                         //   this.setModel(data,"idProductsTable");

	             },
	         error: function () {
	        	 console.log("Failed");
				}
				});
	    	   	
	         
	         var model1 = new sap.ui.model.json.JSONModel();
	         
	         $.ajax({

	             type: "GET",

	             url : "http://php.my-e-school.com/school.php?type=6&table_name=Unique_Batch",
	             crossDomain: true,
	             dataType: "json",

	             success: function(data,textStatus,jqXHR) {
	            	     console.log("Success");
	             	     console.log(data);
	                             data12 = data;
	                             //doSomething(data12);
	                         //   var oVizFrame1 =  this.getView().byId("idProductsTable");
	                             model1.setData(data);
	                          //   console.log(model);
	                          //   coursesel.setModel(model1);
	                            batchsel.setModel(model1);
	                            BatchModelData=model1.getProperty("/ProductCollection");
	                         //   this.setModel(data,"idProductsTable");

	             },
	         error: function () {
	        	 console.log("Failed");
				}
				});
	    	   	
	         
	         
	         
	         
	    }    
});