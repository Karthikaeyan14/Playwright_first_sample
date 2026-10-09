import {test,expect} from '@playwright/test';


test("first test",async({page})=>{
    await page.goto('https://www.saucedemo.com',{ waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle("Swag Labs");
    //await page.locator("#user-name").fill("standard_user");
    //await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    const error=await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username is required");
    //console.log(error.toHaveText)
});