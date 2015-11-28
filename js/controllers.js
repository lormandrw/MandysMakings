var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.PageTitle="Mandy's Makings";
	$scope.Products= Products;
    $http.get("http://www.w3schools.com/angular/customers.php")
     .success(function (response) {$scope.names = response.records;});
}
);
app.directive('ngProductImage', function() {
	return {
		restrict: 'A',
		template: '<img width="200px" ng-src="images/{{x.Image}}" alt="" />'
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