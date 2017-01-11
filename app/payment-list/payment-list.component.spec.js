describe('paymentList', function() {

  // Load the module that contains the `paymentList` component before each test
  beforeEach(module('agoraApp'));

  // Test the controller
  describe('PaymentListController', function() {

    it('should generate a "payments" model with "that" number of items as set in json response', inject(function($componentController) {
      var scope = {};
      var ctrl = $componentController('paymentList', {$scope: scope});

      expect(scope.payments.length).toBe(scope.totalNumber);
    }));

  });

});
