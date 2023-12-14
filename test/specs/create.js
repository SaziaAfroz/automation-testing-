const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const CreateProject = require('../pageobjects/create.project')
const createProject = require('../pageobjects/create.project')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        //await NewProject.open()

        await LoginPage.login('inspector', 'RMS!Go22')

    })

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






    })

})