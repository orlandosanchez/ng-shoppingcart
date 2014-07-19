var shoppingCart = angular.module('ShoppingCart',['ngRoute']);

shoppingCart.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/orders', {
		templateUrl	: '../tpls/order.list.html',
		controller 	: 'OrderCtrl'
	})
	.when('/list', {
		templateUrl	: '../tpls/list.html',
		controller 	: 'ListCtrl'
	})
	.when('/item/:id', {
		templateUrl	: '../tpls/item.html',
		controller 	: 'ItemCtrl'
	})

	$routeProvider.otherwise({ redirectTo : '/list'});
}]);
