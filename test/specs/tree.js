import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
//import CreateProject from '../pageobjects/create.project.js'
import uploadProject from '../pageobjects/upload.project.js'
import projectTree from '../pageobjects/project.tree.js'




describe('project tree', () => {
    // it('should login with valid credentials', async () => {
    //     await LoginPage.open()
    //     //await NewProject.open()

    //     await LoginPage.login('inspector', 'RMS!Go22')

    // })

    it('should be able to select a project', async () => {
        await projectTree.selectProject.click()
        //await browser.pause(10000)
        await projectTree.addLinesection.click()
        await projectTree.lineName.setValue('Test line Section')
        await projectTree.addLinebutton.click()
        await projectTree.selectLinesection.click()
        await browser.pause(3000)
        await projectTree.addTrack.click()
        await projectTree.trackName.setValue('Test Track')
        await projectTree.addTrackbutton.click()
        await projectTree.selectTrack.click()
        await browser.pause(3000)
        await projectTree.addDesign.click()
        await projectTree.designName.setValue('Test Design')
        await projectTree.addDesignbutton.click()
        await projectTree.selectDesign.click()
        await browser.pause(3000)
        await projectTree.addJob.click()
        await projectTree.jobName.setValue('Test Job')
        await projectTree.addJobbutton.click()
        await browser.pause(3000)
        

        






        //await uploadProject.fileUpload('../data/4_Measurements_200_2023-03-27_085712_API_231004.rmsproj', await uploadProject.fileimport)
        //await browser.pause(30000)
        //await browser.waitUntil(async function () {
        //    return (await uploadProject.successInfo).isExisting()
        //},{
        //    timeout: 30000,

        //})
        //await expect(await uploadProject.successInfo).toHaveTextContaining('4_Measurements_200 project already exists')
        //await uploadProject.importProjectbutton.click()
        /*
        await uploadProject.uploaderBox.click()
        await uploadProject.uploaderBox.setValue('C:\\Users\\User2\\Downloads\\testautomation.rmsproj')
        await browser.waitUntil(async function () {
            return (await uploadProject.successInfo).isExisting()
        },{
            timeout: 10000,

        })
        await expect(await uploadProject.successInfo).toHaveTextContaining('Vystaviste 4meas project already exists')

        await uploadProject.importProjectbutton.click()

 **/
    })

    /** 
    it('Project Creation', async () => {
        await CreateProject.createProjectbutton.click()
        await CreateProject.projectName.setValue('hululu')
        await CreateProject.projectNumber.setValue('1234')

        await CreateProject.btnSubmit.click()
        //await browser.pause(10000)
        await browser.waitUntil(async function () {
            return (await CreateProject.successToast).isExisting()
        },{
            timeout: 10000,

        })
        await expect(await CreateProject.successToast).toHaveTextContaining('Project created successfully')
        */






    })
