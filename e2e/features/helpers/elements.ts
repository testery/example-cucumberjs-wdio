const testData = require('../../TestData');

export function clickIfExists(selector: string) {
    browser.pause(500);
    let element = $(selector);
    try { browser.$(element).click(); } catch { /**/ }
    element.waitForExist({ timeout: testData.defaultTimeout, reverse: true });
}
export function findByPartialText(elementText: string) {
    let selector = '//*[contains(text(),"' + elementText + '")]';
    return $(selector);
}

export function findByText(elementText: string) {
    let selector = '//*[text()="' + elementText + '"]';
    return $(selector);
}