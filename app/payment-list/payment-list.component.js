'use strict';

angular.
  module('paymentList').
  component('paymentList', {
    templateUrl: 'payment-list/payment-list.template.html',
    controller: function PaymentListController($scope, $http) {
      var url = 'http://admin.api.torawallet.local/v1/payments';
      $scope.payments = [];
      $scope.totalNumber = 0;
      $http.get(url)
      .then(function(respond){ //resolve promise
        $scope.payments = respond.data.items;
        $scope.totalNumber = parseInt(respond.data.total);
      }, function(reason){ //reject promise
        var msg = 'unknown';
        if (reason.data.hasOwnProperty('code') && reason.data.hasOwnProperty('message')) {
          msg = reason.data.code + " " + reason.data.message;
        } else {
          msg = JSON.stringify(reason.data);
        }
        alert(msg);
      });
      $scope.query = "pmt_";
      $scope.orderProp = "-created_at";
    }
  });
