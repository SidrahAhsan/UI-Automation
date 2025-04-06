import {test, expect, Page, Locator, Browser, chromium} from '@playwright/test'

test('login using different accounts in different windows' , async ({}) => {
const browser:Browser = await chromium.launch();
//browserContext
const browser_context_1 = await browser.newContext();
const page1: Page = await browser_context_1.newPage();

//browserContext2
const browser_context_2 = await browser.newContext();
const page2: Page = await browser_context_2.newPage();

//login in first browser
await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
const userName1:Locator= await page1.getByPlaceholder('E-Mail Address');
const password1: Locator = await page1.getByPlaceholder('Password');
const loginButton1:Locator =await page1.getByRole('button', {name:  'Login'});

await userName1.fill('test+11@gmail.com');
await password1.fill('test@123');
await loginButton1.click();

//login in second browser
await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
const userName2:Locator= await page2.getByPlaceholder('E-Mail Address');
const password2: Locator = await page2.getByPlaceholder('Password');
const loginButton2:Locator =await page2.getByRole('button', {name:  'Login'});

await userName2.fill('test+12@gmail.com');
await password2.fill('test@123');
await loginButton2.click();

await browser_context_1.close();
await browser_context_2.close();
await browser.close();

//await new Promise (()=> {} ); 
})