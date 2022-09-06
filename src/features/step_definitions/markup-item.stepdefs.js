const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function markupItem(question, about)
{
  if (question == "json") return about;
}

Given('the User ask a question about json', () =>
{
  this.question = "json";
});

When('the User link with another question about {string}', (about) =>
{
  this.content = markupItem(this.question, about);
});

Then('the your question references the question about {string}', (about) => 
{
  assert.strictEqual(this.content, about);
});