describe('selenium hq - regression suite', function() {
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.get('https://www.seleniumhq.org/');
    });
    it('should display selenium hq home page', function() {      
      expect(browser.getTitle()).toEqual('Selenium - Web Browser Automation');     
    });

    it('should display menu page', function() { 
        browser.driver.findElement(by.id('menu_about')).click();
        expect(browser.getTitle()).toEqual('About Selenium');     
      });

      
    it('should display project page', function() {      
        browser.driver.findElement(by.id('menu_projects')).click();
        expect(browser.getTitle()).toEqual('Selenium Projects');     
      });

      
    it('should display download page', function() {      
        browser.driver.findElement(by.id('menu_download')).click();
        expect(browser.getTitle()).toEqual('Downloads');     
      });
  });