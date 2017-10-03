sap.ui.define([
	'jquery.sap.global',
	'../model//Formatter',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/Popover',
	'sap/m/Button',
	"sap/ui/core/format/DateFormat"
	
], function (jQuery, Formatter, Fragment, Controller, JSONModel, Popover, Button, DateFormat) {
	"use strict";
 
	var CController = Controller.extend("sap.ui.demo.nav.controller.Root1", {
		model : new sap.ui.model.json.JSONModel(),
		
		data : {
			navigation: [{
				title: 'Dashboard',
				icon: 'sap-icon://employee',
				expanded: true,
				key: 'root1',
				items: [{
					title: 'Dashboard',
					key: 'root1'
				}, {
					title: 'Child Item 2',
					key: 'page2'
				}]
			}, {
				title: 'Academic',
				icon: 'sap-icon://card',
				expanded: true,
				items: [{
					title: 'Course',
					key: 'course',
					expanded: true,
					items:[{
						title: 'Course',
						key: 'course',
					}]
				}, {
					title: 'Subjects'
				}, {
					title: 'Lesson Planning'
				},
				{
					title: 'Time Table'
				},
				{
					title: 'Exams'
				},
				{
					title: 'Assignments & Notes'
				},
				{
					title: 'Certifications'
				},
				{
					title: 'Placements'
				},
				{
					title: 'Promotion & Alumini'
				},
				{
					title: 'Occurence '
				},
				{
					title: 'Circular'
				}]
			}, {
				title: 'HR/Payroll',
				icon: 'sap-icon://action',
				expanded: false,
				items: [{
					title: 'Employee Management'
				}, {
					title: 'Payroll'
				}, {
					title: 'Leave Management '
				}, {
					title: 'Attendance '
				}]
			}, {
				title: 'Student',
				icon: 'sap-icon://action-settings',
				expanded: false,
				items: [{
					title: 'Student Category'
				}, {
					title: 'Student Admission'
				}, {
					title: 'Student List'
				}, {
					title: 'Attendance '
				},
				 {
					title: 'Print List'
				}, {
					title: 'Guardian List '
				},
				 {
					title: 'Roll Number'
				}, {
					title: 'Student Attendance Report '
				}]
			}, {
				title: 'Finance',
				icon: 'sap-icon://activate',
				expanded: false,
				items: [{
					title: 'Fess '
				}, {
					title: 'Accounting'
				}]
			}, {
				title: 'Library',
				icon: 'sap-icon://activities',
				expanded: false,
				items: [{
					title: 'Add Category'
				}, {
					title: 'Add Books'
				}, {
					title: 'Issue Book'
				},{
					title: 'Request Details'
				},,{
					title: 'Book Return'
				},{
					title: 'Reports'
				},{
					title: 'Import'
				}]
			}, {
				title: 'Transport',
				icon: 'sap-icon://add',
				expanded: false,
				items: [{
					title: 'Add Vehicle'
				}, {
					title: 'Add Driver'
				}, {
					title: 'Add Route'
				},
				{
					title: 'Add Destination'
				},{
					title: 'Transport Allocation'
				},
				{
					title: 'Fee Collection'
				},
				{
					title: 'Import'
				},{
					title: 'SMS Alert'
				}]
			}, {
				title: 'Hostel',
				icon: 'sap-icon://arobase',
				expanded: false,
				items: [{
					title: 'Child Item 1'
				}, {
					title: 'Child Item 2'
				}, {
					title: 'Child Item 3'
				}]
			}, {
				title: 'Messages/SMS',
				icon: 'sap-icon://attachment',
				expanded: false,
				items: [{
					title: 'Child Item 1'
				}, {
					title: 'Child Item 2'
				}, {
					title: 'Child Item 3'
				}]
			}, {
				title: 'Root Item',
				icon: 'sap-icon://badge',
				expanded: false,
				items: [{
					title: 'Child Item 1'
				}, {
					title: 'Child Item 2'
				}, {
					title: 'Child Item 3'
				}]
			}, {
				title: 'Root Item',
				icon: 'sap-icon://basket',
				expanded: false,
				items: [{
					title: 'Child Item 1'
				}, {
					title: 'Child Item 2'
				}, {
					title: 'Child Item 3'
				}]
			}, {
				title: 'Root Item',
				icon: 'sap-icon://bed',
				expanded: false,
				items: [{
					title: 'Child Item 1'
				}, {
					title: 'Child Item 2'
				}, {
					title: 'Child Item 3'
				}]
			}, {
				title: 'Root Item',
				icon: 'sap-icon://bookmark',
				expanded: false,
				items: [{
					title: 'Child Item 1'
				}, {
					title: 'Child Item 2'
				}, {
					title: 'Child Item 3'
				}]
			}
			],
			fixedNavigation: [{
				title: 'Fixed Item 1',
				icon: 'sap-icon://employee'
			}, {
				title: 'Fixed Item 2',
				icon: 'sap-icon://building'
			}, {
				title: 'Fixed Item 3',
				icon: 'sap-icon://card'
			}],
			headerItems: [
			{
				text: "File"
			}, {
				text: "Edit"
			}, {
				text: "View"
			}, {
				text: "Settings"
			}, {
				text: "Help"
			}]
		},
		oVizFrame : null,
		initSampleDataModel : function() {
			var oModel = new JSONModel();
 
			var oDateFormat = DateFormat.getDateInstance({source: {pattern: "timestamp"}, pattern: "dd/MM/yyyy"});
 
			jQuery.ajax(jQuery.sap.getModulePath("sap.ui.demo.nav", "/products.json"), {
				dataType: "json",
				success: function (oData) {
					var aTemp1 = [];
					var aTemp2 = [];
					var aSuppliersData = [];
					var aCategoryData = [];
					for (var i=0; i<oData.ProductCollection.length; i++) {
						var oProduct = oData.ProductCollection[i];
						if (oProduct.SupplierName && jQuery.inArray(oProduct.SupplierName, aTemp1) < 0) {
							aTemp1.push(oProduct.SupplierName);
							aSuppliersData.push({Name: oProduct.SupplierName});
						}
						if (oProduct.Category && jQuery.inArray(oProduct.Category, aTemp2) < 0) {
							aTemp2.push(oProduct.Category);
							aCategoryData.push({Name: oProduct.Category});
						}
						oProduct.DeliveryDate = (new Date()).getTime() - (i%10 * 4 * 24 * 60 * 60 * 1000);
						oProduct.DeliveryDateStr = oDateFormat.format(new Date(oProduct.DeliveryDate));
						oProduct.Heavy = oProduct.WeightMeasure > 1000 ? "true" : "false";
						oProduct.Available = oProduct.Status == "Available" ? true : false;
					}
 
					oData.Suppliers = aSuppliersData;
					oData.Categories = aCategoryData;
 
					oModel.setData(oData);
				}.bind(this),
				error: function () {
					jQuery.sap.log.error("failed to load json");
				}
			});
 
			return oModel;
		},
 
		selectedItem: function(oEvent){
		//	console.log(oEvent.getSource().data("mydata"));
			
			var data = {};

			  data.context = oEvent.getSource().getBindingContext();

			  //console.log(oEvent.getSource().getBindingContext());
			  
			  //var sPath = oEvent.getParameter("items").getPath();
			  
			var contexts =  oEvent.getSource().getBindingContext("navigation");
			//contexts.getProperty("text");
			  var selectedIndex = data.context.sPath.split("/")[2];

			  //console.log(oEvent.getSource().getBindingContext());
			
		},
		
		
		
		
		
		formatAvailableToObjectState : function (bAvailable) {
			return bAvailable ? "Success" : "Error";
		},
 
		formatAvailableToIcon : function(bAvailable) {
			return bAvailable ? "sap-icon://accept" : "sap-icon://decline";
		},
 
		handleDetailsPress : function(oEvent) {
			MessageToast.show("Details for product with id " + this.getView().getModel().getProperty("ProductId", oEvent.getSource().getBindingContext()));
		},
		settingsModel : {
            dataset : {
                name: "Dataset",
                defaultSelected : 1,
                values : [{
                    name : "Small",
                    value : "/betterSmall.json"
                },{
                    name : "Medium",
                    value : "/betterMedium.json"
                },{
                    name : "Large",
                    value : "/betterLarge.json"
                }]
            },
            series : {
                name : "Series",
                defaultSelected : 1,
                enabled : false,
                values : [{
                    name : "1 Series"
                }, {
                    name : '2 Series'
                }]
            },
            dataLabel : {
                name : "Value Label",
                defaultState : true
            },
            axisTitle : {
                name : "Axis Title",
                defaultState : false
            },
            type : {
                name : "Stacked Type",
                defaultSelected : 0,
                values : [{
                    name : "Regular",
                    vizType : "stacked_column",
                    vizProperties : {
                        plotArea: {
                            dataLabel: {
                                //formatString:CustomerFormat.FIORI_LABEL_SHORTFORMAT_2
                            }
                        }
                    }
                },{
                    name : "100%",
                    vizType : "100_stacked_column",
                    vizProperties : {
                        plotArea: {
                            mode: "percentage",
                            dataLabel: {
                                type: "percentage",
                                //formatString:CustomerFormat.FIORI_PERCENTAGE_FORMAT_2
                            }
                        }
                    }
                }]
            },
            dimensions: {
                Small: [{
                    name: 'Seasons',
                    value: "{Seasons}",
                }],
                Medium: [{
                    name: 'Week',
                    value: "{Week}",
                }],
                Large: [{
                    name: 'Week',
                    value: "{Week}",
                }]
            },
            measures: [{
               name: 'Cost1',
               value: '{Cost1}'
            },{
               name: 'Cost2',
               value: '{Cost2}'
            }]
        },
		onInit : function() {
			
			
			this.model.setData(this.data);
			this.getView().setModel(this.model);
			
			var oModel = new sap.ui.model.json.JSONModel({
		        book: [{
		            "City": "New York ",
		            "Cost": 295584.81,
		            "Item Category": "Monday",
		            "Profit": 173793.31,
		            "NoOfDays": 10,
		            "Unit Price": 1240.79,
		            "Units Available": 17336,
		            "Units Sold": 57571
		        }, {
		            "City": "New York ",
		            "Cost": 215065.45,
		            "Item Category": "Tuesday",
		            "Profit": 140874.87,
		            "NoOfDays": 14,
		            "Unit Price": 1319.07,
		            "Units Available": 11270,
		            "Units Sold": 48552
		        }, {
		            "City": "New York ",
		            "Cost": 115132.04,
		            "Item Category": "Wednesday",
		            "Profit": 56994.34,
		            "NoOfDays": 5,
		            "Unit Price": 763.21,
		            "Units Available": 11248,
		            "Units Sold": 37303
		        }, {
		            "City": "New York ",
		            "Cost": 171742.42,
		            "Item Category": "Thursday",
		            "Profit": 81093.4,
		            "NoOfDays": 10,
		            "Unit Price": 1143.57,
		            "Units Available": 14917,
		            "Units Sold": 51664
		        }, {
		            "City": "New York ",
		            "Cost": 331033.94,
		            "Item Category": "Friday",
		            "Profit": 150465.23,
		            "NoOfDays": 15,
		            "Unit Price": 2268.02,
		            "Units Available": 22449,
		            "Units Sold": 69005
		        }, {
		            "City": "New York ",
		            "Cost": 207854.46,
		            "Item Category": "Saturday",
		            "Profit": 115242.56,
		            "NoOfDays": 20,
		            "Unit Price": 1456.91,
		            "Units Available": 17996,
		            " Units Sold": 45346
		        }]
		    });
		
			var oModel = new JSONModel(this.settingsModel);
            oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            //this.getView().byId("idVizFrame").setModel(oModel);
			var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
			oVizFrame.setVizProperties({
                plotArea: {
                    dataLabel: {
                        //formatString:CustomerFormat.FIORI_LABEL_SHORTFORMAT_2,
                        visible: true
                    }
                },
                valueAxis: {
                    label: {
                        formatString: "Label1"
                    },
                    title: {
                        visible: false
                    }
                },
                valueAxis2: {
                    label: {
                        formatString: "Label2"
                    },
                    title: {
                        visible: false
                    }
                },
                categoryAxis: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false,
                    text: ' Attendance Tracker '
                }
            });
			
			var dataModel = new sap.ui.model.json.JSONModel();
			
			var oVizFrame1 = this.oVizFrame1 = this.getView().byId("idVizFrame1");
			//oVizFrame1.setProperty(oVizFrame);
            //dataModel.loadData("sap.ui.demo.nav","model/betterMedium.json");
			//oVizFrame.setModel(dataModel);
			//oVizFrame.setModel(oModel);
			
			
			////////////////////
		//	Calender Model Start
			var oCalender = new JSONModel();
			oCalender.setData({
				startDate: new Date("2015", "11", "15", "8", "0"),
				people: [{
									pic: "sap-icon://employee",
									name: "Max Mustermann",
									role: "team member",
									appointments: [
									               {
									              	 start: new Date("2015", "11", "15", "10", "0"),
									              	 end: new Date("2015", "11", "15", "12", "0"),
									              	 title: "Team meeting",
									              	 info: "room 1",
									              	 type: "Type01",
									              	 pic: "sap-icon://sap-ui5",
									              	 tentative: false
									               },
									               {
									              	 start: new Date("2015", "11", "16", "0", "0"),
									              	 end: new Date("2015", "11", "16", "23", "59"),
									              	 title: "Vacation",
									              	 info: "out of office",
									              	 type: "Type04",
									              	 tentative: false
									               }
									               ],
									headers: [
									          {
									          	start: new Date("2015", "11", "16", "0", "0"),
									          	end: new Date("2015", "11", "16", "23", "59"),
									          	title: "Private",
									          	type: "Type05"
									          },
									          ]
								},
								{
									pic: "test-resources/sap/ui/demokit/explored/img/johnDoe.png",
									name: "John Doe",
									role: "team member",
									appointments: [
									               {
									              	 start: new Date("2015", "11", "15", "08", "30"),
									              	 end: new Date("2015", "11", "15", "09", "30"),
									              	 title: "Meeting",
									              	 type: "Type02",
									              	 tentative: false
									               },
									               {
									              	 start: new Date("2015", "11", "15", "10", "0"),
									              	 end: new Date("2015", "11", "15", "12", "0"),
									              	 title: "Team meeting",
									              	 info: "room 1",
									              	 type: "Type01",
									              	 pic: "sap-icon://sap-ui5",
									              	 tentative: false
									               },
									               {
									              	 start: new Date("2015", "11", "15", "11", "30"),
									              	 end: new Date("2015", "11", "15", "13", "30"),
									              	 title: "Lunch",
									              	 type: "Type03",
									              	 tentative: true
									               }
									               ],
									headers: [
									          {
									          	start: new Date("2015", "11", "15", "8", "0"),
									          	end: new Date("2015", "11", "15", "10", "0"),
									          	title: "Reminder",
									          	type: "Type06"
									          }
									          ]
								}
				]
			});
			this.getView().byId("PC1").setModel(oCalender);
			
			
			
			
			
			
			var data12 = null;
			$.ajax({

                type: "GET",

                url : "http://localhost/dashboard/products2.php",
                crossDomain: true,
                dataType: "json",

                success: function(data,textStatus,jqXHR) {

                	//console.log(data);
                                data12 = data;
                                //doSomething(data12);
                                //var oVizFrame1 =  this.getView().byId("idProductsTable");
                               //this.setModel(data,"idProductsTable");

                }
			
			});
			
			// set explored app's demo model on this sample
			var oJSONModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.nav", "/products.json"));
			var omJSONModel = this.myown();
			this.getView().byId("idProductsTable").setModel(omJSONModel);
			
			
			
			
			console.log(omJSONModel); 
//			this.getView().byId("table").setModel(oJSONModel);
			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
		},
		
		myown : function (){
			var oModelll = new JSONModel();
			 
			var oDateFormat = DateFormat.getDateInstance({source: {pattern: "timestamp"}, pattern: "dd/MM/yyyy"});
 
			jQuery.ajax({
				type: "GET",
                url : "http://localhost/dashboard/products2.php",
                crossDomain: true,				
				dataType: "json",
				success: function (oData) {
					var aTemp1 = [];
					var aTemp2 = [];
					var aSuppliersData = [];
					var aCategoryData = [];
					for (var i=0; i<oData.ProductCollection.length; i++) {
						var oProduct = oData.ProductCollection[i];
						if (oProduct.SupplierName && jQuery.inArray(oProduct.SupplierName, aTemp1) < 0) {
							aTemp1.push(oProduct.SupplierName);
							aSuppliersData.push({Name: oProduct.SupplierName});
						}
						if (oProduct.Category && jQuery.inArray(oProduct.Category, aTemp2) < 0) {
							aTemp2.push(oProduct.Category);
							aCategoryData.push({Name: oProduct.Category});
						}
						oProduct.DeliveryDate = (new Date()).getTime() - (i%10 * 4 * 24 * 60 * 60 * 1000);
						oProduct.DeliveryDateStr = oDateFormat.format(new Date(oProduct.DeliveryDate));
						oProduct.Heavy = oProduct.WeightMeasure > 1000 ? "true" : "false";
						oProduct.Available = oProduct.Status == "Available" ? true : false;
					}
//					oData.Suppliers = aSuppliersData;
//					oData.Categories = aCategoryData;
 
					oModelll.setData(oData);
				}.bind(this),
				error: function () {
					jQuery.sap.log.error("failed to load json");
				}
			});
			return oModelll;
		},
		
		onItemSelect : function(oEvent) {
			var item = oEvent.getParameter('item');
			var viewId = this.getView().getId();
			sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + item.getKey());
			console.log(sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + item.getKey()));
		},
 
		handleUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
 
			popover.openBy(event.getSource());
		},
 
		onSideNavButtonPress : function() {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			var sideExpanded = toolPage.getSideExpanded();
 
			this._setToggleButtonTooltip(sideExpanded);
 
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},
 
		_setToggleButtonTooltip : function(bLarge) {
			var toggleButton = this.getView().byId('sideNavigationToggleButton');
			if (bLarge) {
				toggleButton.setTooltip('Large Size Navigation');
			} else {
				toggleButton.setTooltip('Small Size Navigation');
			}
		}
 
	});
 
 
	return CController;
 
});