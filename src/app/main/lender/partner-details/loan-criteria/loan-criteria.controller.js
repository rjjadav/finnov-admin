(function(){
	'use strict';

	angular.module('app.main.lender.partner-details')
	.controller('LoanCriteriaController',LoanCriteriaController);

	LoanCriteriaController.$inject = ['$stateParams','toastr','data','api'];

	function LoanCriteriaController($stateParams, toastr, data, api){
		var criteria = this;

		criteria.getFilter = getFilter;
		criteria.addFilter = addFilter;

		criteria.criteriaList = {
			noOfMonthHistroy : 0,
			perDebitCard : 0,
			minimumCardSwipePerMonth: 0,
			minimumUniqueCardSwipePerMonth: 0,
			minimumLoanAmount: 0 
		}
		criteria.loading = false;

		criteria.getFilter();
		function addFilter(criteriaList){
			criteria.loading = true;
			criteriaList.partnerId = $stateParams.partnerId;
			console.log(criteriaList);
			data.post(api.addFilter, criteriaList, false)
			.then(function(response){
				// console.log(response);
				if(response.status == 201){
					toastr.success('Filter Added', 'Success');
				}
				criteria.loading = false;
			})
			.catch();
		}

		function getFilter(){
			data.get(api.getFilter,{partnerId: $stateParams.partnerId},false)
			.then(function(response){
				if(response.data.partnerFilters){
					criteria.criteriaList.noOfMonthHistroy = response.data.partnerFilters.noOfMonthHistroy;
					criteria.criteriaList.perDebitCard = response.data.partnerFilters.perDebitCard
					criteria.criteriaList.minimumCardSwipePerMonth = response.data.partnerFilters.minimumCardSwipePerMonth;
					criteria.criteriaList.minimumUniqueCardSwipePerMonth= response.data.partnerFilters.minimumUniqueCardSwipePerMonth;
					criteria.criteriaList.minimumLoanAmount= response.data.partnerFilters.minimumLoanAmount;
				}
			})
			.catch();
		}
	}
})();