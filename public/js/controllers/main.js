angular.module('notificationController', [])

	// inject the Notification service factory into our controller
	.controller('mainController', ['$scope','$http','Notifications', function($scope, $http, Notifications) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all notifications and show them
		// use the service to get all the notifications
		Notifications.get()
			.success(function(data) {
				$scope.notifications = data;
				$scope.loading = false;
			});

	}]);