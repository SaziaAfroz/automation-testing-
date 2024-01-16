//const { $ } = require('@wdio/globals')
import path from 'path';
import { fileURLToPath } from 'url';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class uploadProject extends Page {
    /**
     * define selectors using getter methods
     */
    get importButton () {
        return $('button=Import');
        
    }

    get uploaderBox () { 
        return $('//*[@id="root"]/div/div[2]/div[2]/div/div[1]/div/input');
        
    }

    get importProjectbutton () {
        return $('button=Import Project');
        
    }

    get successInfo(){
        return $('span=4_Measurements_200 project already exists')
    }

    get fileimport(){
        return $ ('input[aria-label="Project File Upload Input"]')

    }

    async fileUpload(url, locator) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, url);
    
        const upload_file_element = await locator;
        await upload_file_element.scrollIntoView({ block: 'end' });
        await browser.execute(async (e) => {
          e.style.display = 'block';
        }, upload_file_element);
    
        await upload_file_element.waitForDisplayed();
        await upload_file_element.setValue(filePath);
      }
      

    /** 
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
    */
}


export default new uploadProject();
