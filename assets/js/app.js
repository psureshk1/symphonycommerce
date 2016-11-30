var myApp=angular.module("myApp",['ngRoute','controllers'])
	.config(function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl:"partials/home.html",
			controller:"MainController"
		}).when('/products',{
			templateUrl:"partials/products.html",
			controller:"MainController"
		}).otherwise({
			redirectTo:"/home"
		});

});
