import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import CreateProject from '../pageobjects/create.project.js'
//import uploadProject from '../pageobjects/upload.project.js'
import projectTree from '../pageobjects/project.tree.js'
import deleteProject from '../pageobjects/delete.project.js'
import generic from '../pageobjects/generic.js'




describe('delete linesection', () => {
    //it('should login with valid credentials', async () => {
        //await LoginPage.open()
        //await NewProject.open()

        //await LoginPage.login('inspector', 'RMS!Go22')

    //})


    it('should be able to select a project', async () => {
        await projectTree.selectProject.click()
        //await browser.pause(10000)
        await projectTree.addLinesection.click()
        await browser.pause(1000)
        await projectTree.lineName.setValue('Test line Section')
        await projectTree.addLinebutton.click()
        await browser.pause(1000)
        await projectTree.selectLinesection.click()
        await browser.pause(10000)
    })

    it('should be able to delete a project', async () => {
        await deleteProject.deleteLine.click()

        await generic.genericWaitUntil(await deleteProject.deleteLineConfirm)
        await deleteProject.deleteLineConfirm.click()
        await browser.pause(5000)










       


 
    })




    })
