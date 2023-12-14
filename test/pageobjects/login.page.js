const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        //return $('#username');
        return $('//*[@id="userId"]');
    }

    get inputPassword () {
        //return $('#password');
        return $('//*[@id="password"]');
    }

    get btnSubmit () {
        //return $('button[type="submit"]');
        return $('//*[@id="root"]/main/div[2]/div[2]/form/button');

    }

    get loginTitle () {
        return $('h2=Projects')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        //await this.inputUsername.setValue(inspector);
        await this.inputPassword.setValue(password);
        //await this.inputPassword.setValue(123);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
