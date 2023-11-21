const { test, expect } = require('@playwright/test');
 

test('accessing hubtel login page', async ({ page }) => {

   const contact = "0542410123";

   await page.goto("https://hubtel.com/login");

   await page.locator("[id='phoneNumber']").fill(contact);
   await page.waitForLoadState('networkidle');

   //await page.locator("[id='content']").click();
  
   await page.locator(" [id='nav-profile-tab']").click();

await page.pause();
 
})