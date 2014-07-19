shoppingCart.controller('ListCtrl', 
	['$scope', '$routeParams', function($scope, $routeParams) {
	var items = [
		{ name : 'Salad', category : 'Vegetarian', qty : 0 },
		{ name : 'Steak', category : 'Paleo', qty : 0 },
		{ name : 'Nuts', category : 'Vegetarian', qty : 0 },
		{ name : 'Cereal', category : 'Vegetarian', qty : 0 },
		{ name : 'Pork', category : 'Paleo', qty : 0 },
		{ name : 'Beans', category : 'Vegetarian', qty : 0 },
		{ name : 'Chicken', category : 'South Beach', qty : 0 },
	];	
	$scope.items = items;
	
	if (angular.isDefined($routeParams.id))
		$scope.item = items.filter(function(item) {
			return item.name = $routeParams.id;
		})[0];

	console.log($routeParams);
}]);
