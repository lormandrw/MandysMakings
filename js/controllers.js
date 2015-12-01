var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.PageTitle="Mandy's Makings";
	$scope.pageUrl="pages/products.html";
	$scope.Products= Products;                
	$scope.ModelProduct;
    $scope.UpdateModalProduct = function (Product)
    {
		$scope.ModelProduct = Product;
    } 
}
);
app.directive('ngProductImage', function() {
	return {
		restrict: 'A',
		template: '<img width="75px" ng-src="images/{{x.Image}}" alt="" />'
    }
  }
);
app.directive('ngPaypalButton', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/PayPalButton.html'
    }
  }
);
app.directive('ngPaypalCart', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/PayPalCart.html'
    }
  }
);