'use strict';

angular.module('aih.IPermit')

  .controller('MainCtrl', function($scope, $http, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;


    console.log('this is the MainCtrl');

  $http.get('zones.json')
       .then(function(res){
          $scope.zoneProperties = res.data;                
        });

  $scope.searched=true;

  })



.controller('TodoCtrl', function($scope, $http) {
  $http.get('todos.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});
