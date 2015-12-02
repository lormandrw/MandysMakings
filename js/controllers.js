var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'pages/about.html',
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
		})

		// route for the about page
		.when('/products', {
			templateUrl : 'pages/products.html',
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
		})
		.otherwise({
			templateUrl : 'pages/about.html',
		});
		
});

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