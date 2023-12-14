const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')


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

