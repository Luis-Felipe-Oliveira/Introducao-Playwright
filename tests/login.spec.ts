import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/login-pages'

let loginPage: LoginPage 

//estanciar fora dos testes
test.beforeEach(async ({page})=>{

    loginPage = new LoginPage(page)
})


test ('Deve logar com sucesso', async ({ page }) => {

   await loginPage.go()
   await loginPage.sigIn('qa', 'cademy')
   await loginPage.userLoggedIn()
})

test('senha incorreta', async({page})=>{

    await loginPage.go()
    await loginPage.sigIn('qa', 'ccademy')
    await loginPage.toastMessage('Oops! Credenciais inválidas :(')

})

test('Nome Obrigatório', async({page})=>{

    await loginPage.go()
    await loginPage.sigIn('', 'ccademy')
    await loginPage.toastMessage('Informe o seu nome de usuário!')

})

test('Senha Obrigatório', async({page})=>{

    await loginPage.go()
    await loginPage.sigIn('qa', '')
    await loginPage.toastMessage('Informe a sua senha secreta!')

})
