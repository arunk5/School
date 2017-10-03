sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/table/SortOrder",
	"sap/ui/model/Sorter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	'sap/ui/core/Fragment',
], function(Controller, SortOrder, Sorter, JSONModel, DateFormat, Fragment) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.toolpageapp.controller.settings.AcademicDetails", {
 
		onInit : function () {
			
			var model = new sap.ui.model.json.JSONModel({
				  trips: [
				          
				          {

				                "VALUE": " 2017  ",

				                "KEY": " 2017  "

				               },     
				     {

	                "VALUE": " 2016 ",

	                "KEY": " 2016 "

	               },
	               {

	                   "VALUE": " 2015 ",

	                   "KEY": " 2015 "

	              },
	              
	              {

	                  "VALUE": " 2014 ",

	                  "KEY": " 2014 "

	             },
	             
	             {

	                 "VALUE": " 2013 ",

	                 "KEY": " 2013 "

	            },
	            {

	                "VALUE": " 2012 ",

	                "KEY": " 2012 "

	           },
	           {

	               "VALUE": " 2011 ",

	               "KEY": " 2011 "

	          },
	           {

	               "VALUE": " 2010 ",

	               "KEY": " 2010 "

	          },
	          {

	              "VALUE": " 2009 ",

	              "KEY": " 2009 "

	         }
	      ]
				 // selectedTrip: ''
				});
			//sap.ui.getCore().byId("SelectId");
			
			
			var model1 = new sap.ui.model.json.JSONModel({
				  trip: [
				          
				          {

				                "VALUE": " JAN  ",

				                "KEY": " JAN  "

				               },     
				     {

	                "VALUE": " FEB ",

	                "KEY": " FEB "

	               },
	               {

	                   "VALUE": " MARCH ",

	                   "KEY": " MARCH "

	              },
	              
	              {

	                  "VALUE": " APRIL ",

	                  "KEY": " APRIL "

	             },
	             
	             {

	                 "VALUE": " MAY ",

	                 "KEY": " MAY "

	            },
	            {

	                "VALUE": " JUNE ",

	                "KEY": " JUNE "

	           },
	           {

	               "VALUE": " JULY ",

	               "KEY": " JULY "

	          },
	           {

	               "VALUE": " AUG ",

	               "KEY": " AUG "

	          },
	          {

	              "VALUE": " SEPT ",

	              "KEY": " SEPT "

	         },
	         {

	              "VALUE": " OCT ",

	              "KEY": " OCT "

	         },
	         {

	              "VALUE": " NOV ",

	              "KEY": " NOV "

	         },
	         {

	              "VALUE": " DEC ",

	              "KEY": " DEC "

	         }
	      ]
				 // selectedTrip: ''
				});
			
			
			
			var selectid = this.getView().byId("Select1");
			selectid.setModel(model);
			
			var selectid = this.getView().byId("Select2");
			selectid.setModel(model1);
			
			var selectid = this.getView().byId("Select3");
			selectid.setModel(model);
			
			var selectid = this.getView().byId("Select4");
			selectid.setModel(model1);
			
			
			var model2 = new sap.ui.model.json.JSONModel({
				  trip: [
				          
				          {

				                "VALUE": " ACTIVE  ",

				                "KEY": " DEACTIVE  "

				            }   ,
				            
				            {

				                "VALUE": " DEACTIVE  ",

				                "KEY": " DEACTIVE  "

				            }   
				 ]
			});
			
			var selectid = this.getView().byId("Select5");
			selectid.setModel(model2);
			
			
		}
 
	});
 
});