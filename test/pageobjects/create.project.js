const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreatePage extends Page {
    /**
     * define selectors using getter methods
     */
    get createProjectbutton () {
        //return $('#username');
        return $('button=New Project');
        
    }

    get projectName () {
        return $('input[aria-label="NameInput"]');
    }

    get projectNumber () {
        return $('input[name="ProjectInfo.Number"]');
    }


    get btnSubmit () {
        //return $('button[type="submit"]');
        return $('button=Create Project');

    }

    get successToast(){
        return $('span=Project created successfully')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     
    async create (projectname) {
        await this.inputprojectname.setValue(projectname);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    
}

module.exports = new CreatePage();
