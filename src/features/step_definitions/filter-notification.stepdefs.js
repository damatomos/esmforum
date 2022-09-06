const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function filterNotification(wantsChoose, type)
{
  if (wantsChoose) return type + " type";
}

Given('Adm has several reports', () =>
{
  this.wantsChooseAType = true;
});

When('the Adm chooses a report of {string} type', (type) =>
{
  this.filterBy = filterNotification(this.wantsChooseAType, type);
});

Then('the Adm receive only reports of {string}', (result) => 
{
  assert.strictEqual(this.filterBy, result);
});