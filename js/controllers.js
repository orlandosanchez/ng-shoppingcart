shoppingCart.controller('OrderCtrl', ['$scope', '$routeParams', 'OrdersService', 
function($scope, $routeParams, itemsService) {
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
