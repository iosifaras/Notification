angular.module('notificationService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Notifications', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/notifications');
			},
			getArchived : function() {
				return $http.get('/api/archive');
			},
			getInbox : function() {
				return $http.get('/api/inbox');
			},
			updateRead : function(id) {
				return $http.put('/api/notifications/' + id);
			},
			updateArchive : function(id) {
				return $http.put('/api/getarchived/' + id);
			}
		}
	}]);