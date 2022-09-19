import {Page, expect} from '@playwright/test';

export class LoginPage{
    readonly page: Page

    constructor(page: Page){
        this.page =page

    }
    async go(){
        await this.page.goto('https://login-app-qacademy.vercel.app/');
        const title = this.page.locator('.App-header p');
        await expect(title).toHaveText('Login');
    }

   async sigIn(user: string, password: string){
    await this.page.fill('input[placeholder$=usuário]', user)
    await this.page.fill('input[placeholder^=senha]', password)
    await this.page.click('button >> text=Entrar')

   }

   async userLoggedIn(){
    const modalMessage = this.page.locator('#swal2-title')
    await expect(modalMessage).toHaveText('Tudo certo!')

   }
   async toastMessage(target: string){
    const toosterMessage = this.page.locator('div[role=status]')
    await expect(toosterMessage).toHaveText(target)




   }
}