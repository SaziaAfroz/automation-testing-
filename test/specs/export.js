import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
//import CreateProject from '../pageobjects/create.project.js'
import uploadProject from '../pageobjects/upload.project.js'
import projectTree from '../pageobjects/project.tree.js'
import exportProject from '../pageobjects/export.project.js'




describe('My Login application', () => {
    // it('should login with valid credentials', async () => {
    //     await LoginPage.open()
    //     //await NewProject.open()

    //     await LoginPage.login('inspector', 'RMS!Go22')

    // })

    it('should be able to export a project', async () => {
        await exportProject.selectProject.click()
        await exportProject.export.click()
        await browser.pause(3000)
        await exportProject.selectExporttype.click()
        await browser.pause(3000)
        await exportProject.selectChekbox.click()
        await browser.pause(3000)
        await exportProject.exportButton.click()
        await browser.pause(10000)
        

    })

    

    })
