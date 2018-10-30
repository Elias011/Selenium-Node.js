let assert = require('assert');
let selenium = require('selenium-webdriver');
const { Builder, By, Key, until, thread, actions } = require('selenium-webdriver');

let driver = new selenium.Builder().
  withCapabilities(selenium.Capabilities.chrome()).
  build();

driver.get('http://library-app.firebaseapp.com')

//get the text of the element
// driver.findElement({css: '.btn-lg'}).getText().then(function(txt){
//   console.log('button text is ' + txt);
// })

//get the text of multiple elements
driver.findElements({css: 'nav li'}).then(function(el){
  el.map(i => {
    i.getText().then(txt => {
      console.log("the texts is " + txt);
    })
  })
})

driver.findElement({css : 'input'}).sendKeys('user');
const submit = driver.findElement({css: '.btn-lg'})
//wait until the button become enable and click on it
driver.wait(until.elementIsEnabled(submit), 50000).then(_ =>{
  submit.click();
});
//wait until the alert located enable and click on it
driver.wait(until.elementLocated({css: '.alert-success'}), 50000).getText().then(txt => {
  console.log(txt)
})
.then(_=>driver.quit());
//driver.close();