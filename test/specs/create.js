
import LoginPage from '../pageobjects/login.page.js'
import CreateProject from '../pageobjects/create.project.js'



describe('My Login application', () => {
    //it('should login with valid credentials', async () => {
       // await LoginPage.open()
        //await NewProject.open()

       // await LoginPage.login('inspector', 'RMS!Go22')

    //})

    it('Project Creation', async () => {
        await CreateProject.createProjectbutton.click()
        await CreateProject.projectName.setValue('hululu')
        await CreateProject.projectNumber.setValue('1234')
        await browser.pause(5000)
        await CreateProject.dropdownIcon.scrollIntoView()
        await CreateProject.dropdownIcon.parentElement().click();
        await CreateProject.selectCountry.click()
        //await CreateProject.dropdownIcon.click()
        await browser.pause(10000)



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