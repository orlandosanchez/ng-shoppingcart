shoppingCart.service('itemsService', function() {
	this.getItems = function() {
		return [
			{ name : 'Salad', category : 'Vegetarian', qty : 0 },
			{ name : 'Steak', category : 'Paleo', qty : 0 },
			{ name : 'Nuts', category : 'Vegetarian', qty : 0 },
			{ name : 'Cereal', category : 'Vegetarian', qty : 0 },
			{ name : 'Pork', category : 'Paleo', qty : 0 },
			{ name : 'Beans', category : 'Vegetarian', qty : 0 },
			{ name : 'Chicken', category : 'South Beach', qty : 0 },
		];	
	};
	this.getItem = function(index) {
		return this.getItems()[index];		

	}
});
