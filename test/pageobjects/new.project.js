
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewProject extends Page {


    get btnSubmit () {
      
        return $('//*[@id="root"]/div/div[2]/div[1]/div/button[2]');

    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async project () {
        //await this.inputUsername.setValue(username);
        //await this.inputUsername.setValue(inspector);
        //await this.inputPassword.setValue(password);
        //await this.inputPassword.setValue(123);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('project');
    }
}

export default new NewProject();
