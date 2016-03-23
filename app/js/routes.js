angular.module('guilhermeApp')
.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: '/templates/home/index.html'
	})
	.when('/site', {
		templateUrl: '/templates/site/index.html'
	})
	.when('/', {
		templateUrl: '/templates/home/index.html'
	})
	.otherwise({redirectTo: '/'});
});