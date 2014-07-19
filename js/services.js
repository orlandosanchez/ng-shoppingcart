shoppingCart.service('itemsService', function($http) {
	this.getItems = function(callback) {
		$http.get('../data/items.json').success(callback);
	}
	this.getItem = function(index) {
		return this.getItems()[index];		

	}
});

shoppingCart.service('ordersService', function($http) {
	this.getOrders = function(callback) {
		$http.get('../data/orders.json').success(callback);
	};
	this.getOrder = function(index) {
		return this.getOrders()[index];		

	}
});
