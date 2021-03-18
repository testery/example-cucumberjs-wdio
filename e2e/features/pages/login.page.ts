const testData = require('../../TestData');

/** URL looks like: "{baseUrl}/login" */
class LoginPage {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }

    open() {
        return browser.url(testData.baseWebUrl + '/login');
    }

    login(username: string, password: string) {
        if (username === "valid") {
            username = testData.testUser;
        }
        if (password === "valid") {
            password = testData.testPass;
        }
        browser.$(this.inputUsername).waitForClickable({ timeout: testData.defaultTimeout });
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

}

export default new LoginPage();
