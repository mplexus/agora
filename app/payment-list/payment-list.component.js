'use strict';

angular.
  module('paymentList').
  component('paymentList', {
    template:
        'Total number of payments: ' + '{{totalNumber}}' +
        '<ul>' +
          '<li ng-repeat="payment in this.payments">' +
            '<span>{{payment.token}}</span>' +
            '<p>{{payment.status}}</p>' +
            '<p>{{payment.created_at}}</p>' +
            '<p>{{ (payment.money_amount / 100) | currency : "€" : 2}}</p>' +
          '</li>' +
        '</ul>',
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
