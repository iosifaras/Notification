angular.module('notificationService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Notifications', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/notifications');
			}
		}
	}]);