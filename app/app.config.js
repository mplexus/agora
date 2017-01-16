'use strict';

angular.
  module('agoraApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      //$locationProvider.hashPrefix('!');

      $routeProvider.
        when('/payments', {
          template: '<payment-list></payment-list>'
        }).
        when('/payments/:paymentToken', {
          template: '<payment-detail></payment-detail>'
        }).
        otherwise('/payments');
    }
  ]);
