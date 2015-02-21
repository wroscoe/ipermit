'use strict';

angular.module('aih.IPermit')

  .controller('MainCtrl', function($scope, $http, $location, version) {

    $scope.page='main'; // has the search button been pressed
    $scope.searched = false;
    $scope.address="672 Alcatraz Ave., Oakland, CA 94609";
    $scope.zone='RM-4';

    $scope.$path = $location.path.bind($location);
    $scope.version = version;


    console.log('this is the MainCtrl');

    //load the zone data file
    $http.get('zones.json')
         .then(function(res){
            $scope.zoneProperties = res.data;                
          });



  })
