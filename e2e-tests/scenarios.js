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

      expect(paymentList.count()).toBe(5); //test with mocks

      query.sendKeys('Eok');
      expect(paymentList.count()).toBe(1); //test with mocks

      query.clear();
      query.sendKeys('bV');
      expect(paymentList.count()).toBe(2); //test with mocks
    });

    it('should be possible to control payment list order via the drop-down menu', function() {
      var queryField = element(by.model('query'));
      var orderSelect = element(by.model('orderProp'));
      var orderByTokenOption = orderSelect.element(by.css('option[value="token"]'));
      var orderByDateOption = orderSelect.element(by.css('option[value="created_at"]'));
      var dateColumn = element.all(by.repeater('payment in payments').column('payment.created_at'));

      function getCompared() {
        return dateColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('bV'); //limit results

      orderByDateOption.click();

      var dates = getCompared();
      dates.then(function (result) {
        for (var i = 0; i < (result.length - 1); i++) {
          expect(result[i]).toBeGreaterThan($result[i+1]);
        }
      });

      orderByTokenOption.click(); //test with mocks
    });


  });

});
