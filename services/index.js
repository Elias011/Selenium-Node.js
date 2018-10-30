const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until, thread, actions } = require('selenium-webdriver');
const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

module.exports = {
  autocompletesTest: async () => {
    await driver.get('https://formy-project.herokuapp.com/');
    try {
      await driver.findElement(By.linkText("Autocomplete")).click() //linkText is just for a tag
      const autocomplete = driver.wait(
        until.elementLocated(By.id('autocomplete')), // in this case you tille webDriver to wait the element maximum 20000 seconde but if it find the element before that contniue
        20000
      );
      await autocomplete.sendKeys('Panneroodstraat 60');
      await driver.findElement(By.id('locality')).sendKeys('Zaandam');
      await driver.findElement(By.id('administrative_area_level_1')).sendKeys('Zaanstad');
      await driver.findElement(By.id('postal_code')).sendKeys('1503 XB');
      await driver.findElement(By.id('country')).sendKeys('Netherlands');
    }
    catch (error) {
      console.error(error);
    }
  },

  buutonsTest: async () => {
    try {
      await driver.navigate().back()
      await driver.findElement(By.linkText("Buttons")).click()
      const btnPrimary = driver.wait(

        until.elementLocated(By.className('btn-primary')), // in this case you tille webDriver to wait the element maximum 20000 seconde but if it find the element before that contniue
        20000
      );
      await btnPrimary.click();
      await driver.manage().window().setSize(1280, 1000)
      await driver.findElement(By.className('btn-success')).click();
      await driver.findElement(By.className('btn-info')).click();
      await driver.findElement(By.className('btn-warning')).click();
      await driver.findElement(By.className('btn-danger')).click();
      await driver.findElement(By.className('btn-danger')).click();
      await driver.findElement(By.xpath("//button[contains(.,'Left')]")).click(); // to click on a button has specific text
      await driver.findElement(By.xpath("//button[contains(.,'Middle')]")).click();
      await driver.findElement(By.xpath("//button[contains(.,'Right')]")).click();
      await driver.findElement(By.xpath("//button[contains(.,'1')]")).click();
      await driver.findElement(By.xpath("//button[contains(.,'2')]")).click();
      await driver.findElement(By.xpath("//button[contains(.,'Dropdown')]")).click();

      const element = driver.findElement(By.className('dropdown-item'));

      await driver.actions.mouseMove(element).perform();

    }
    catch (error) {
      console.error(error);
    }
  }
}