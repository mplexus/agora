'use strict';

// Define the `agoraApp` module
var agoraApp = angular.module('agoraApp', []);

// Define the `PaymentListController` controller on the `agoraApp` module
agoraApp.controller('PaymentListController', function($scope, $http) {
  $http.get('payments.json')
  .then(function(res){
    $scope.payments = res.data;
  });
});
