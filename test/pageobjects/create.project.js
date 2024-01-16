
import Page from './page.js';

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

    get dropdownIcon (){
        return $$("svg[data-testid='ArrowDropDownIcon']")[1];
    }

    get selectCountry (){
        return $("li=Algeria")
    }

    
}

export default new CreatePage();
