shoppingCart.controller('OrderCtrl', ['$scope', '$routeParams', 'ordersService', 
function($scope, $routeParams, ordersService) {
	ordersService.getOrders(function(data) {
		$scope.orders = data;
	});
}]);

shoppingCart.controller('ListCtrl', ['$scope', '$routeParams', 'itemsService', 
function($scope, $routeParams, itemsService) {
	itemsService.getItems(function(data) {
		$scope.items = data;
	});;
}]);

shoppingCart.controller('ItemCtrl', ['$scope', '$routeParams', 'itemsService', 
function($scope, $routeParams, itemsService) {
	$scope.item = itemsService.getItem($routeParams.id);
}]);
