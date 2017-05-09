'use strict';

angular.
  module('paymentList').
  component('paymentList', {
    templateUrl: 'payment-list/payment-list.template.html',
    controller: function PaymentListController($scope, $http) {
      var login_url = 'http://admin.api.torawallet.gr/v1/login';
      var jwt = '';
      $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
      this.transformRequest = function (obj) {
        var str = [];
        for (var p in obj) {
          if (typeof obj[p] === 'object') {
            for (var pi in obj[p]) {
              str.push(encodeURIComponent(p + "[" + pi) + "]=" + encodeURIComponent(obj[p][pi]));
            }
          } else {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        }
        return str.join("&");
      };
      $http.defaults.transformRequest = this.transformRequest;
      $http.post(login_url,
        {"email": "test@example.com", "password": "password"}
      ).then(function(response) {
        if (!!response.data.token) {
          var url = 'http://admin.api.torawallet.gr/v1/payments';
          $http.get(url, {
            headers: {'Authorization': 'Bearer '+response.data.token}
          })
          .then(function(paymentsResponse){ //resolve promise
            $scope.payments = paymentsResponse.data.items;
            $scope.totalNumber = parseInt(paymentsResponse.data.total);
          }, function(reason){ //reject promise
            var msg = 'unknown';
            if (reason.data.hasOwnProperty('code') && reason.data.hasOwnProperty('message')) {
              msg = reason.data.code + " " + reason.data.message;
            } else {
              msg = JSON.stringify(reason.data);
            }
            console.log(msg);
          });
        } //if response has token
        else {console.log(response);}
      }, function(error) {
        console.log(error);
      });
      $scope.payments = [];
      $scope.totalNumber = 0;
      $scope.query = "pmt_";
      $scope.orderProp = "-created_at";
    }
  });
