sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/Popover',
	'sap/m/Button'
], function (jQuery, Fragment, Controller, JSONModel, Popover, Button) {
	"use strict";

	var CController = Controller.extend("sap.ui.demo.toolpageapp.controller.rootApp", {
		model: new sap.ui.model.json.JSONModel(),
		data: {
			navigation: [{
				title: 'Dashboard',
				icon: 'sap-icon://employee',
				expanded: true,
				key: 'dashboard'
				
			}, {
				title: 'Settings',
				icon: 'sap-icon://building',
				key: 'settings',
				items: [{
					title: 'Institution Details',
					key: 'settings/InstitutionDetails'
				}, {
					title: 'Academic Details',
					key: 'settings/AcademicDetails'
				},
				{
					title: 'Student Import',
					key: 'settings/studentImport'
				},
				{
					title: 'Employee Import',
					key: 'settings/EmployeeImport'
				},
				{
					title: 'Previleges',
					key: 'settings/Previleges'
				},
				{
					title: 'Assign Courses',
					key: 'settings/AssignCourse'
				},
				{
					title: 'Applicant List',
					key: 'settings/ApplicantList'
				},
				{
					title: 'Fee Allocation Import',
					key: 'settings/FeesAllocationImport'
				},
				{
					title: 'Cast & Religion',
					key: 'settings/CasteReligion'
				},{
					title: 'Visitors List',
					key: 'settings/visitorsList'
				}]
			}, {
				title: 'Academic',
				icon: 'sap-icon://card',
				expanded: true,
				items: [{
					title: 'Course',
					key: 'Academic/CourseBatch/Course',
					expanded: true,
					subitems:[{
						title: 'Course',
						key: 'Academic/CourseBatch/Course',
					}]
				}, {
					title: 'Subjects',
					key:'Academic/Subjects/Subjects'
				}, {
					title: 'Lesson Planning',
					key:'Academic/LessonPlanning/LessonPlanning'
				},
				{
					title: 'Time Table',
					key:'Academic/Timetable/SetTimeTable'
				},
				{
					title: 'Exams',
					key: 'Academic/Exams/UnitTest'
				},
				{
					title: 'Assignments & Notes',
					key: 'Academic/AssignmentNotes/AddNotes'
				},
				{
					title: 'Certifications',
					key: 'Academic/Certifications/GenerateCertificate'
				},
				
				{
					title:'Promotion & Alumini',
					key:'Academic/PromotionsAlumni/PromotionAlumni'
				},
				{
					title: 'Circular',
					key:'Academic/Circular/Circular'
				}]
			}, {
				title: 'HR/Payroll',
				icon: 'sap-icon://action',
				expanded: false,
				items: [{
					title: 'Employee Management',
					key:'HRPayroll/EmployeeMgmt/EmployeeList'
				}, {
					title:'Payroll',
					key:'HRPayroll/Payroll/PayHead'	
				}, {
					title: 'Leave Management ',
					key:'HRPayroll/LeaveMgmt/LeaveDetails'
				}, {
					title: 'Attendance ' ,
					key:'HRPayroll/Attendance'
				}]
			}, {
				title: 'Student',
				icon: 'sap-icon://action-settings',
				expanded: false,
				items: [{
					title: 'Student Category',
					key:  'student/StudentCategory'
				}, {
					title: 'Student Admission',
					key:  'student/StudentAdmission'
				}, {
					title: 'Student List',
					key:  'student/StudentList'
				}, {
					title: 'Attendance',
					key:  'student/Attendance'
				},
				{
					title: 'Guardian List',
					key:  'student/GuardianList'
				},
				  {
					title: 'Student Attendance Report ',
					key:  'student/StudentAttendanceReport'
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
			}, {title: 'Library',
				icon: 'sap-icon://activities',
				expanded: false,
				items: [{
					title: 'Add Category',
					key: 'Library/AddCategory'
				}, {
					title: 'Add Books',
					key: 'Library/AddBook'
				}, {
					title: 'Issue Book',
					key: 'Library/IssueBook'
				},{
					title: 'Request Details',
					key: 'Library/RequestDetails'
				},{
					title: 'Book Return',
					key: 'Library/BookReturn'
				},{
					title: 'Reports',
					key: 'Library/Reports'
				},{
					title: 'Import',
					key: 'Library/Import'
				}]}, 
				
				{title: 'Transport',
					icon: 'sap-icon://add',
					expanded: false,
					items: [{
						title: 'Add Vehicle',
						key: 'Transport/AddVehicle'
					}, {
						title: 'Add Driver',
						key: 'Transport/AddDriver'
					}, {
						title: 'Add Route',
						key: 'Transport/AddRoute'
					},
					{
						title: 'Add Destination',
						key: 'Transport/AddDestination'
					},{
						title: 'Transport Allocation',
						key: 'Transport/TransportAllocation'
					},
					{
						title: 'Fee Collection',
						key: 'Transport/FeeCollection'
					},
					{
						title: 'Import',
						key: 'Transport/Import'
					},{
						title: 'SMS Alert',
						key: 'Transport/SmsAlert'
					}]},
			
			{title: 'Hostel',
						icon: 'sap-icon://arobase',
						expanded: false,
						items: [{
							title: 'Hostel Details',
							key: 'Hostel/HostelDetails'
						}, {
							title: 'Hostel Room',
							key: 'Hostel/HostelRoom'
						}, {
							title: 'Hostel Allocation',
							key: 'Hostel/HostelAllocation'
						}, {
							title: 'Request Details',
							key: 'Hostel/RequestDetails'
						}, {
							title: 'Hostel Transfer',
							key: 'Hostel/HostelTransVacate'
						}, {
							title: 'Hostel Register',
							key: 'Hostel/HostelRegister'
						}, {
							title: 'Hostel Visitors',
							key: 'Hostel/HostelVisitors'
						}, {
							title: 'Hostel Fee Collection',
							key: 'Hostel/HostelFeeCollection'
						}, {
							title: 'Reports',
							key: 'Hostel/Reports'
						}]}, {
				title: 'Messages/SMS',
				icon: 'sap-icon://attachment',
				expanded: false,
				items: [{
					title: 'Mailbox'
				}, {
					title: 'SMS Settings'
				}, {
					title: 'Visitor SMS Settings'
				},
				{
					title: 'Visitor SMS Settings'
				}
				
				]
			},
			
			//Start
			
			{
				title: 'Store Management',
				icon: 'sap-icon://attachment',
				expanded: false,
				items: [{
					title: 'Vendors',
					key: 'StoreMgmt/Vendors'
				}, {
					title: 'Inventory Category',
					key: 'StoreMgmt/InventoryCategory'
				}, {
					title: 'Inventory Item',
					key: 'StoreMgmt/InventoryItem'
				},
				{
					title: 'Inventory Issue',
					key: 'StoreMgmt/InventoryIssue'
				},
				{
					title: 'Stock Register',
					key: 'StoreMgmt/StockRegistry'
				},
				{
					title: 'Issued Report',
					key: 'StoreMgmt/IssuedReport'
				},

				
				]
			 },{
				 

					title: 'Performance',
					icon: 'sap-icon://attachment',
					expanded: false,
					items: [{
						title: 'Student Performance',
						key: 'Performance/CCE/StudentPerformance'
					}, {
						title: 'Course Performance',
						key: 'Performance/CCE/CoursePerformance'
					}]
				
			 },
			 
			 {
				title: 'Events',
				icon: 'sap-icon://attachment',
				expanded: false,
				items: [{
					title: 'Event Types',
					key: 'Events/EventTypes'
				}, {
					title: 'Add Events',
					key: 'Events/AddEvent'
				}]
			
			 },
			 
			 {
				    title: 'Task Manager',
					icon: 'sap-icon://attachment',
					expanded: false,
					items: [{
						title: 'Assign Task',
						key: 'TaskManager/AssignTask'
					}, {
						title: 'Task Details',
						key: 'TaskManager/TaskDetails'
					}]
				
			 },
			 
			 {
				 title: 'Reports',
					icon: 'sap-icon://attachment',
					expanded: false,
					items: [{
						title: 'Student Reports'
					}, {
						title: 'Student Details'
					},{
						title: 'Elective Reports'				
					},{
						title: 'Fee Due Reports'				
					},{	title: 'Fee Paid Reports'				
					
					},{	title: 'Absentee Reports'				
					
					},{	title: 'Class Reports'				
					
					},{	title: 'Fees Consolidated Reports'				
					
					}
					
					]
				 
			 },
			 
			 {
				 title: 'Data Export',
					icon: 'sap-icon://attachment',
					expanded: false,
					items: [{
						title: 'Export',
						key: 'DataExport/Export'
					}]
				 
			 }
			 
			 
			 
			 ]
			
			
			
//			headerItems: [
//				{
//					text: "File"
//				}, {
//					text: "Edit"
//				}, {
//					text: "View"
//				}, {
//					text: "Settings"
//				}, {
//					text: "Help"
//				}]
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
		onInit: function() {
			this.model.setData(this.data);
			this.getView().setModel(this.model);
			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
			
			
			var oModels= sap.ui.getCore().getModel("UAuth");
			var loginNames=oModels.getProperty("/")
			console.log(loginNames.fname +" "+loginNames.lname);
			
			var itm = this.getView().byId("btn1");
			console.log("{/lname}");
			
			itm.setText("                          "+ loginNames.fname);
			
			 
			//console.log(items.getItems());
			
			
			var item = this.getView().byId("list");
			var List = item.getItems()
//			console.log(item.getItems());
//			console.log(sap.ui.getCore().byId("uid"));
			//item.removeItem(0);
		},

		/**
		 * Convenience method for accessing the router.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onItemSelect: function(oEvent) {
			var oItem = oEvent.getParameter('item');
			var sKey = oItem.getKey();
			this.getRouter().navTo(sKey);
		},

		handleUserNamePress: function(oEvent) {
			var oPopover = new Popover({
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

			oPopover.openBy(oEvent.getSource());
		},

		onSideNavButtonPress: function() {
			var sViewId = this.getView().getId();
			var oToolPage = sap.ui.getCore().byId(sViewId + "--rootApp");
			var bSideExpanded = oToolPage.getSideExpanded();
			this._setToggleButtonTooltip(bSideExpanded);
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},

		_setToggleButtonTooltip : function(bLarge) {
			var oToggleButton = this.getView().byId('sideNavigationToggleButton');
			if (bLarge) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		},  
		
			
		
		
	});
	return CController;
});
