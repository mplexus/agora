'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('agoraApp', function() {

  describe('paymentList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the payment list as a user types into the search box', function() {
      var paymentList = element.all(by.repeater('payment in payments'));
      var query = element(by.model('query'));

      expect(paymentList.count()).toBe(5);

      query.sendKeys('pmt_Eok');
      expect(paymentList.count()).toBe(1);

      query.clear();
      query.sendKeys('bV');
      expect(paymentList.count()).toBe(2);
     });

  });

});
