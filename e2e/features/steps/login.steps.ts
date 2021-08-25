import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/login.page';

// Given I open the login page
Given('I open the login page', async () => {
    await LoginPage.open();
});

// When I login with <username> and <password>
When(/^I login with ([^"]*)? and ([^"]*)?$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});

// Then I should see a message saying <message>
Then(/^I should see a message saying ([^"]*)?$/, async (message: string) => {
    let elem = $('//*[contains(text(),"' + message + '")]');
    expect(elem).toBeDisplayed();
});