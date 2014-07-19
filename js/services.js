shoppingCart.service('itemsService', function($http, $q) {
	this.getItems = function(callback) {
		$http.get('../data/items.json').success(callback);
	}
	this.getItem = function(index) {
		return this.getItems()[index];		

	}
});

shoppingCart.service('ordersService', function() {
	this.getOrders = function() {
		return [];
	};
	this.getOrder = function(index) {
		return this.getOrders()[index];		

	}
});
