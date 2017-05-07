(function(){
	'use strict';

	angular.module('app.main.lender.partner-details')
	.controller('BatchJobController',BatchJobController);

	BatchJobController.$inject = ['$stateParams','toastr','data', 'api'];


	function BatchJobController($stateParams, toastr, data, api){
		var batchJob = this;


		batchJob.getAllBatchJob = getAllBatchJob;
		batchJob.startBatchJob = startBatchJob;


		batchJob.jobsList = undefined;

		batchJob.getAllBatchJob();
		function getAllBatchJob(){
			data.get(api.getAllBatchJob,{partnerId: $stateParams.partnerId}, true)
			.then(function(response){
				console.log(response);
				if(response.data.batchJobs){
					batchJob.jobsList = response.data.batchJobs;
				}
			})
			.catch()
		}


		function startBatchJob(jobId){
			console.log(jobId);
			data.post(api.startBatchJob+'?jobId='+jobId,{jobId : jobId}, false)
			.then(function(response){
				console.log(response);
				if(response.data.jobStarted){
					toastr.success('Job Started', 'Success');
				}
			})
		}
	}
})();