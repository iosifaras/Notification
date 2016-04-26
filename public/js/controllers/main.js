angular.module('notificationController', [])

	// inject the Notification service factory into our controller
	.controller('mainController', ['$scope','$http','Notifications', function($scope, $http, Notifications) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.orderByField = 'date';
		$scope.reverseSort = true;

		$scope.selectedRow = null;  // initialize our variable to null
		$scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
			$scope.selectedRow = index;
		}
		// GET =====================================================================
		// when landing on the page, get all notifications and show them
		// use the service to get all the notifications
		Notifications.get()
			.success(function(data) {
				$scope.notifications = data;
				$scope.loading = false;
			});

	}]);