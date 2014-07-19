shoppingCart.controller('ListCtrl', ['$scope', '$routeParams', 'itemsService', 
function($scope, $routeParams, itemsService) {
	
	$scope.items = itemsService.getItems();
	
	if (angular.isDefined($routeParams.id))
		$scope.item = items.filter(function(item) {
			return item.name = $routeParams.id;
		})[0];

}]);

shoppingCart.controller('ItemCtrl', ['$scope', '$routeParams', 'itemsService', 
function($scope, $routeParams, itemsService) {
	
	$scope.item = itemsService.getItem($routeParams.id);
}]);
