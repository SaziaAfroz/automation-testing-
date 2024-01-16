import path from 'path';
//import { fileURLToPath } from 'url';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class exportProject extends Page {
    /**
     * define selectors using getter methods
     */

    get selectProject (){
        return $('span=4_Measurements_200')
    }

    get export(){
        return $('button=Export Project')
    }

    get selectExporttype () {
        return $('input[value="exportProjectWithSelection"]');
    }

    get selectChekbox () {
        return $('input[type="checkbox"]');
        
    }

    get exportButton () {
        return $('button=Export Project');

    }

    
}


export default new exportProject();