angular.module('notificationController', [])

	// inject the Notification service factory into our controller
	.controller('mainController', ['$scope','$http','Notifications', function($scope, $http, Notifications) {
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
				$scope.totalnotifications = data;
				$scope.loading = false;
				$scope.getTheInbox();
			});

		Notifications.getInbox()
			.success(function(data) {
				$scope.inbox = data;
				$scope.loading = false;
			});

		Notifications.getArchived()
			.success(function(data) {
				$scope.archived = data;
				$scope.loading = false;
			});


		$scope.getTheInbox = function() {

				// call the create function from our service (returns a promise object)
				Notifications.getInbox()

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.notifications = data; // assign our new list of todos
					});
			};

		$scope.getTheArchived = function() {

				// call the create function from our service (returns a promise object)
				Notifications.getArchived()

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.notifications = data; // assign our new list of todos
					});
			};

		$scope.makeRead = function(id) {

				// call the create function from our service (returns a promise object)
				Notifications.updateRead(id)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.notifications = data; // assign our new list of todos
					});
			};

		$scope.setDate = function() {

				var myDate = new Date(Notifications.notification.date);
				$scope.date = mydate;
			};

	}]);