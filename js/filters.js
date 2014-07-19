shoppingCart.filter('addedItemsFilter', function() {
	return function(items) {
		return items.filter(function(item) {
			return item.qty > 0;
		});
	};
});
