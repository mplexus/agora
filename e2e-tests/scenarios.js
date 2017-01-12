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

      expect(paymentList.count()).toBe(6); //test with mocks

      query.sendKeys('Eok');
      expect(paymentList.count()).toBe(1); //test with mocks

      query.clear();
      query.sendKeys('bV');
      expect(paymentList.count()).toBe(2); //test with mocks
    });

    it('should be possible to control payment list order via the drop-down menu', function() {
      var orderSelect = element(by.model('orderProp'));
      var orderByNewestOption = orderSelect.element(by.css('option[value="-created_at"]'));
      var orderByOldestOption = orderSelect.element(by.css('option[value="created_at"]'));
      var dateColumn = element.all(by.repeater('payment in payments').column('payment.created_at'));

      function getCompared() {
        return dateColumn.map(function(elem) {
          return elem.getText();
        });
      }

      orderByNewestOption.click();
      var dates = getCompared();
      dates.then(function (result) {
        for (var i = 0; i < (result.length - 1); i++) {
          expect(result[i]).not.toBeLessThan(result[i+1]);
        }
      });

      orderByOldestOption.click();
      var dates = getCompared();
      dates.then(function (result) {
        for (var i = 0; i < (result.length - 1); i++) {
          expect(result[i]).not.toBeGreaterThan(result[i+1]);
        }
      });

    });


  });

});
