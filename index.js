const webdriver = require('selenium-webdriver');
const model = require ('./services/index');
//const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

(async function example() {
  try {
   await model.autocompletesTest ();
   await model.buutonsTest ();
  } finally {
   // await driver.quit();
  }
})();
