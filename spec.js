// spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    browser.sleep(2000);

    element(by.id('gobutton')).click();
    browser.sleep(2000);
    expect(element(by.binding('latest')).getText()).
        toEqual('5'); // This is wrong!
        browser.sleep(4000);
  });
});
