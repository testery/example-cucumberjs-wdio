import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/login.page';
import { findByPartialText } from '../helpers/elements';

// Given I open the login page
Given('I open the login page', () => {
    LoginPage.open();
});

// When I login with <username> and <password>
When(/^I login with ([^"]*)? and ([^"]*)?$/, (username: string, password: string) => {
    LoginPage.login(username, password);
});

// Then I should see a message saying <message>
Then(/^I should see a message saying ([^"]*)?$/, (message: string) => {
    let elem = findByPartialText(message);
    expect(elem).toBeDisplayed();
});