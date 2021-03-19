const testData = require('../../TestData');

/** URL looks like: `{baseUrl}/login` */
class LoginPage {

    /** The `input` for "Username". */
    get inputUsername() { return "#username" }
    /** The `input` for "Password". */
    get inputPassword() { return "#password" }
    /** The `button` to submit a form. */
    get buttonSubmit() { return "//button[@type='submit']" }

    /** Opens `this` page. */
    open() {
        return browser.url(testData.baseWebUrl + '/login');
    }

    /** Log in using the given username and password
     * @param username The username to submit
     * @param password The password to submit
     */
    login(username: string, password: string) {
        if (username === "valid") {
            username = testData.testUser;
        }
        if (password === "valid") {
            password = testData.testPass;
        }
        browser.$(this.inputUsername).waitForClickable({ timeout: testData.defaultTimeout });
        browser.$(this.inputUsername).setValue(username);
        browser.$(this.inputPassword).setValue(password);
        browser.$(this.buttonSubmit).click();
    }

}

export default new LoginPage();
