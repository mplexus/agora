describe('paymentList', function() {

  // Load the module that contains the `paymentList` component before each test
  beforeEach(module('paymentList'));

  // Test the controller
  describe('PaymentListController', function() {
    var ctrl;
    var scope = {};
    var $httpBackend;
    var url = 'http://admin.api.torawallet.gr/v1/payments';


    beforeEach(inject(function($componentController, _$httpBackend_) {
      var mock_respond = readJSON('mocks/payments.json');
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET(url)
                  .respond(mock_respond);
      ctrl = $componentController('paymentList', {$scope: scope});
    }));

    it('should generate a "payments" model with specific number of items as set in json response', function() {
      expect(scope.totalNumber).toEqual(0);
      $httpBackend.flush();
      expect(scope.totalNumber).toEqual(6);
      expect(scope.payments.length).toBe(6);
    });

    it('should set a default value for the order-by model', function() {
      expect(scope.orderProp).toBe('-created_at');
    });

  });

});
