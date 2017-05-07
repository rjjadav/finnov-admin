/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
	'use strict';

	angular.module('app.core')
		.constant('api',(api)());

	api.$inject = [];

	function api(){
		var env = 'uat';

		var url={
			dev:{
				backend: 'http://192.168.1.8:8080/Finnov'
			},
			uat:{
				backend: 'http://45.56.97.181:8080/Finnov'
			}
		}

		var config={
			login 				: url[env].backend + '/oauth/token',

			createLenderUser	: url[env].backend + '/admin/createLenderUser',
			getAllLenders 		: url[env].backend + '/admin/getAllLenders',
			addLender 			: url[env].backend + '/admin/addLender',
			getUserType      	: url[env].backend + '/admin/getUserType',
			createPartner 		: url[env].backend + '/admin/createPartner',
			getAllPartner 		: url[env].backend + '/admin/getAllPartner',
			attachPartner 		: url[env].backend + '/admin/attachPartner',
			getPartnerByLender 	: url[env].backend + '/admin/getPartnerByLender',
			getLenderUsers 		: url[env].backend + '/admin/getLenderUsers',
			createPartnerLogin 	: url[env].backend + '/admin/createPartnerUser',

			// createPartner 		: url[env].backend + '/lender/createPartner',
			// getAllPartner 		: url[env].backend + '/lender/getAllPartner',
			makePartnerActive 	: url[env].backend + '/lender/makePartnerActive',
			bulkUpload 			: url[env].backend + '/lender/bulkUpload',
			getNewLoanRequest 	: url[env].backend + '/lender/getNewLoanRequests',
			updateLoanRequest 	: url[env].backend + '/lender/updateLoanRequest',
			// createPartnerLogin 	: url[env].backend + '/lender/createPartnerLogin',
			getLoanApplications	: url[env].backend + '/lender/getLoanApplications',
			createLoans 		: url[env].backend + '/lender/createLoans',
			getActiveLoans 		: url[env].backend + '/lender/getActiveLoans',
			getDashBoardDetails	: url[env].backend + '/lender/getDashBoardDetail',
			bulkRepayment 		: url[env].backend + '/lender/bulkRepayment',
			getAllBatchJob 		: url[env].backend + '/lender/getAllBatchJob',
			startBatchJob 		: url[env].backend + '/lender/startBatchJob',
			getPartnerDetail 	: url[env].backend + '/lender/getPartnerDetail',
			getKycDetail 		: url[env].backend + '/lender/getKycDetail',
			editKycDetail 		: url[env].backend + '/lender/editKycDetail',

			getApprovedRequest 	: url[env].backend + '/partner/getApprovedRequest',
			getRejectedRequest 	: url[env].backend + '/partner/getRejectedRequest',
			getApplicantByCustCode: url[env].backend + '/partner/getApplicantByCustCode',
			getBorroweByCustCode:   url[env].backend + '/partner/getBorroweByCustCode',
			uploadKyc:              url[env].backend + '/partner/uploadKyc',
			createLoanApplication:  url[env].backend + '/partner/createLoanApplication',
		}
		return config;
	}
})();
