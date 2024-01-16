//const { expect } = require('@wdio/globals')
import LoginPage from '../pageobjects/login.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        //await NewProject.open()

        await LoginPage.login('inspector', 'RMS!Go22')
        await expect(LoginPage.loginTitle).toBeExisting()
        await expect(LoginPage.loginTitle).toHaveTextContaining(
            'Projects')

    })

})

