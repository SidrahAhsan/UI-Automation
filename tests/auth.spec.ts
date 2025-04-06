import {test, expect, Page, Locator, Browser, chromium} from '@playwright/test'

// test('auth test', async()=>{

//     const browser:Browser =await chromium.launch();
//     const browser_context = await browser.newContext();
//     const page: Page = await browser_context.newPage();

// const username = 'admin';
// const password = 'admin';
// const authHeader = await btoa('Basic' + username + ':'+ password);
// page.setExtraHTTPHeaders({Authorization : authHeader});
//     await page.goto('https://the-internet.herokuapp.com/basic_auth');
//     await new Promise (()=> {} );
// })

test('auth test', async () => {
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext({
      httpCredentials: {
        username: 'admin',
        password: 'admin'
      }
    });
    const page: Page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    //await expect(page).toContainText('Congratulations'); // Optional assertion to verify success
    await browser.close();
  });