'use strict';

angular.
  module('agoraApp').
  component('paymentList', {
    template:
        '<ul>' +
          '<li ng-repeat="payment in this.payments">' +
            '<span>{{payment.token}}</span>' +
            '<p>{{payment.status}}</p>' +
            '<p>{{payment.created_at}}</p>' +
            '<p>{{ (payment.money_amount / 100) | currency : "€" : 2}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PaymentListController($scope, $http) {
      $http.get('http://admin.api.torawallet.local/v1/payments', {
      })
      .then(function(res){
        $scope.payments = res.data.items;
      });
    }
  });
