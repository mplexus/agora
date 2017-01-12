describe('paymentList', function() {

  // Load the module that contains the `paymentList` component before each test
  beforeEach(module('paymentList'));

  // Test the controller
  describe('PaymentListController', function() {
    var ctrl;
    var scope = {};

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('paymentList', {$scope: scope});
    }));

    it('should generate a "payments" model with "that" number of items as set in json response', function() {
      expect(scope.payments.length).toBe(scope.totalNumber);
    });

    it('should set a default value for the `orderProp` model', function() {
      expect(scope.orderProp).toBe('created_at');
    });

  });

});
