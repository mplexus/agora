'use strict';

angular.
  module('paymentList').
  component('paymentList', {
    templateUrl: 'payment-list/payment-list.template.html',
    controller: function PaymentListController($scope, $http) {
      $scope.payments = [];
      $scope.totalNumber = 0;
      $http.get('http://admin.api.torawallet.local/v1/payments', {
      })
      .then(function(res){
        $scope.payments = res.data.items;
        $scope.totalNumber = res.data.total;
      });
    }
  });
