
import LoginPage from '../pageobjects/login.page.js'
import CreateProject from '../pageobjects/create.project.js'
import generic from '../pageobjects/generic.js'



describe('Create project', () => {
    //it('should login with valid credentials', async () => {
       // await LoginPage.open()
        //await NewProject.open()

       // await LoginPage.login('inspector', 'RMS!Go22')

    //})

    it('Project Creation', async () => {
        await CreateProject.createProjectbutton.click()
        await CreateProject.projectName.setValue('Automation test project')
        await CreateProject.projectNumber.setValue('1234')
        //await browser.pause(5000)
        await CreateProject.dropdownIcon.scrollIntoView()
        await CreateProject.dropdownIcon.parentElement().click();
        await CreateProject.selectCountry.click()
        //await CreateProject.dropdownIcon.click()
        //await browser.pause(10000)



        await CreateProject.btnSubmit.click()
        //await browser.pause(10000)
        await generic.genericWaitUntil(await CreateProject.successToast)
        await expect(await CreateProject.successToast).toHaveTextContaining('Project created successfully')






    })

})