(function(){
  var app = angular.module('my-app',['ngRoute']);

  app.config(function($routeProvider){
  	$routeProvider
  	.when('/',{
  		templateUrl: 'pages/home.html',
      controller: 'mainController'
  	})
  	.when('/add',{
  		templateUrl: 'pages/add.html',
  		controller: 'formController'
  	})
  	.when('/view',{
  		templateUrl: 'pages/view.html',
  		controller: 'storeController'
  	})
  	.when('/detail/:id',{
  		templateUrl: 'pages/detail.html',
  		controller: 'detailController'
  	});
  });

  app.controller('mainController', function($scope){
    $scope.message = "Sup bitches";
  });

  app.controller('storeController', function($scope, $http) {
     $http.get("connect.php")
     .then(function (response){
       $scope.products = response.data;
       console.log(response.data);
     },function(response){
       $scope.products = database;
     });
  });

  app.controller('detailController',function($scope, $routeParams, $http){
    $scope.name = 'detailController';
    $scope.params = $routeParams;

    $http({method: "post", url: "detail.php",
    data: {
      id: $scope.params.id
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    $http.get("detail.php")
    .then(function (response){
      $scope.products = response.data;
      console.log(response.data);
    },function(response){
      $scope.products = database;
    });

  });

  app.controller('formController',function($scope, $http){
    $scope.add = function(product){
      var data = $scope.new;
      var title = $scope.new.title;
      var text = $scope.new.text;

      $http({method: "post", url: "add.php",
      data: {
        title: $scope.new.title,
        text: $scope.new.text
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});


    };
  });


  var database = [
    {
      'title': 'hey',
      'text': 'hey there'
    },
    {
      'title': 'what is up',
      'text': 'what is up everyone'
    }
  ];

})();