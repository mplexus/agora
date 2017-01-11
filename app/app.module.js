'use strict';

// Define the `agoraApp` module
var agoraApp = angular.module('agoraApp', [
  // ...which depends on the `paymentList` module
  'paymentList'
]);

agoraApp.component('greetUser', {
  template: '<div style="display:block;background-color:#ccc;padding:5px 5px 1px 10px;">' +
    'Hello, {{$ctrl.user}}!' +
    '</p>',
  controller: function GreetUserController() {
    this.user = 'Mike Plexousakis';
  }
});

agoraApp.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
});
