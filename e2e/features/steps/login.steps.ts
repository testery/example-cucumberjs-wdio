import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/login.page';
const testData = require('../../TestData');

// Given I am an unauthenticated user viewing the login page
Given('I am an unauthenticated user viewing the login page', ()=> {
    LoginPage.open();
});

// When I log in using my email and password
When('I log in using my email and password', ()=> {
    LoginPage.loginAs(testData.testUser, testData.testPass);
});

// Then I am redirected the Account Dashboard
Then('I am redirected the Account Dashboard', ()=>{
    expect(browser).toHaveUrlContaining('secure');
});