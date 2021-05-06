const testData = require('../../TestData');

/** URL like: {baseUrl}/login */
class LoginPage {

    /** The `input` for "Username" */
    get inputUsername() { return "#username" };
    /** The `input` for "Password" */
    get inputPassword() { return "#password" };
    /** The `button` for "Login" */
    get buttonLogin() { return "//button[@type='submit']" };

    /** Opens the "Login" page. */
    open() {
        return browser.url(testData.baseWebUrl + "/login");
    };

    /** Logs in using the given credentials. */
    loginAs(username: string, password: string ){
        this.open();
        browser.$(this.inputUsername).waitForClickable({timeout: testData.defaultTimeout});
        browser.$(this.inputUsername).setValue(username);
        browser.$(this.inputPassword).setValue(password);
        browser.$(this.buttonLogin).click();
    }
}

/** URL like: {baseUrl}/login */
export default new LoginPage();