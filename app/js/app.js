angular.module('guilhermeApp', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: '/templates/home/index.html'
	})
	.when('/site', {
		templateUrl: '/templates/site/index.html'
	})
	.when('/loja', {
		templateUrl: '/templates/loja/index.html'
	})
	.when('/outros', {
		templateUrl: '/templates/outros/index.html'
	})
	.when('/naosei', {
		templateUrl: '/templates/naosei/index.html'
	})
	.when('/', {
		templateUrl: '/templates/home/index.html'
	})
	.otherwise({redirectTo: '/'});
})
.directive('myFace', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/home/myface.html'
	}
});