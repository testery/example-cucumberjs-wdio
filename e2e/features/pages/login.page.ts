import testData = require('../../TestData');

/** URL looks like: `{baseUrl}/login` */
class LoginPage {

    /** The `input` for "Username". */
    get inputUsername() { return $("#username") };
    /** The `input` for "Password". */
    get inputPassword() { return $("#password") };
    /** The `button` to submit a form. */
    get buttonSubmit() { return $("//button[@type='submit']") };

    /** Opens `this` page. */
    async open () {
        return browser.url(testData.baseWebUrl + '/login');
    };

    /** Log in using the given username and password
     * @param username The username to submit
     * @param password The password to submit
     */
    async login (username: string, password: string) {
        if (username === "valid") {
            username = testData.testUser;
        }
        if (password === "valid") {
            password = testData.testPass;
        }
        await this.inputUsername.waitForClickable();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    };

}

export default new LoginPage();