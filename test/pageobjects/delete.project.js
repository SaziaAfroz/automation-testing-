import path from 'path';
//import { fileURLToPath } from 'url';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class deleteProject extends Page {
    /**
     * define selectors using getter methods
     */
    

    get trackName () {
        return $('input[aria-label="NameInput"]');
    }


    get deleteLine () {
        return $('button[aria-label="Property Window Delete Button"]');
    }

    get deleteLineConfirm () {
        return $('button=Confirm');
    }
    
}


export default new deleteProject();