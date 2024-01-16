import path from 'path';
//import { fileURLToPath } from 'url';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class projectTree extends Page {
    /**
     * define selectors using getter methods
     */

    get selectProject (){
        return $('span=Vystaviste SRT')
    }

    get addLinesection (){
        return $('span=Add Line Section')
    }

    get lineName () {
        return $('input[aria-label="NameInput"]');
    }

    get addLinebutton () {
        return $('button[type="submit"]');
        
    }

    get selectLinesection (){
        return $('span=Test line Section')
    }

    get addTrack () {
        return $('div=Add Track');
        
    }

    get trackName () {
        return $('input[aria-label="NameInput"]');
    }

    get addTrackbutton () {
        return $('button[type="submit"]');
        
    }

    get selectTrack (){
        return $('div=Test Track');
    }

    get addDesign () {
        return $('span=Add Design');
        
    }

    get designName () {
        return $('input[aria-label="NameInput"]');
    }

    get addDesignbutton () {
        return $('button[type="submit"]');
        
    }

    get selectDesign (){
        return $('div=Test Design');
    }

    get addJob () {
        return $('button[aria-label="Add Job"]');
        
    }

    get jobName () {
        return $('input[aria-label="job name"]');
    }

    get addJobbutton () {
        return $('button[type="submit"]');
        
    }

    
}


export default new projectTree();