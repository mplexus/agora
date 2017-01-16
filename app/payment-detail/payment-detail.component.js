'use strict';

angular.
  module('paymentDetail').
  component('paymentDetail', {
    template: 'Detail view for <span>{{$ctrl.paymentToken}}</span>',
    controller: ['$routeParams',
      function PaymentDetailController($routeParams) {
        this.paymentToken = $routeParams.paymentToken;
      }
    ]
  });
