shoppingCart.directive('item', function() {
	return {
		restrict 		: 'E',
		transclude	: true,
		scope 			: {
			item : '=details'
		},
		templateUrl : '../tpls/directive.item.html', 
		link 				: function(scope,element) {

		}
	}
});
