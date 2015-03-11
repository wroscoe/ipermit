'use strict';

angular.module('aih.IPermit', [])

  .constant('version', 'v0.1.0')

  .config(function($locationProvider) {

    $locationProvider.html5Mode(false);

  });