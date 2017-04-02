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
     $http.get("php/connect.php")
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

    var url = 'http://localhost/appz/php/detail.php?id='+$scope.params.id;
    //console.log(url);
    $http.get(url)
    .then(function (detail){
      $scope.items = detail.data;
      console.log(detail.data);
    },function(detail){
      $scope.items = database;
    });

    $scope.toggle = false;

    //edit function
    $scope.edit = function(){

      document.getElementById("main").style.display = "none";

      document.getElementById("edit").style.display = "visible";
    };

    $scope.cancel = function(){
      document.getElementById("main").style.display = "visible";
      document.getElementById("edit").innerHTML = "";
      console.log('yo');
    };

    $scope.done = function(product){
      var data = $scope.edit;
      var id = $scope.params.id;
      var title = $scope.edit.title;
      var text = $scope.edit.text;
      $http({method: "post", url: "php/edit.php",
      data: {
        id: $scope.params.id,
        title: $scope.edit.title,
        text: $scope.edit.text
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(response){
      console.log(response);
    },function(response){
      console.log(response);
    });
    };

    $scope.delete = function(){
      $http({method: "post", url: "php/delete.php",
      data: {
        id: $scope.params.id
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(response){
      window.location.replace('#/view');
    },function(response){
      console.log(response);
    });
    };

  });

  app.controller('formController',function($scope, $http){
    $scope.add = function(product){
      var data = $scope.new;
      var title = $scope.new.title;
      var text = $scope.new.text;

      $http({method: "post", url: "php/add.php",
      data: {
        title: $scope.new.title,
        text: $scope.new.text
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(response){
      window.location.replace('#/view');
    }, function(response){
      console.log(response);
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
