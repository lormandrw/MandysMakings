<!doctype html>
<html lang="en"  ng-app="myApp" ng-controller="myCtrl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>{{PageTitle}}</title>
  
 	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />
 	<link rel="stylesheet" href="css/main.css" />
  
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script src="bower_components/angular/angular.min.js"></script>
	<script src="bower_components/angular-route/angular-route.min.js"></script>
	<script src="js/products.js"></script>
	<script src="js/controllers.js"></script>
	<script src="js/app.js?v=1"></script>
</head>
<body>

  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#about" >MM</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <div class="container">
          <ul class="nav navbar-nav">
			<li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><br><div ng-paypal-cart></div></li>
          </ul>
        </div>
      </div>
  </nav>
  
  <div id="modalProduct" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">{{ ModelProduct.Name }}</h4>
        </div>
        <div class="modal-body">                                  
          <div class="row">
            <div class="col-xs-5">
              <img width="200px" ng-src="images/{{ModelProduct.Image}}" alt="" /> 
            </div>
            <div class="col-xs-7">
              Description: {{ ModelProduct.Description }}<br>
              Size: {{ ModelProduct.Size }}<br>
              Cost: {{ ModelProduct.Cost }}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>    
    </div>
  </div>
  
  <div ng-view></div>
  

</body> 
</html>
