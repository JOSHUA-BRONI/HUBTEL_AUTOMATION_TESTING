
import {test,expect} from "@playwright/test"

test.describe.configure({
    mode: "parallel",
    timeout: 60000,
  });

test("Hubtel cloudflare bypass and making order",async({browser})=>{

    //injecting the browser with the content in the file auth.json
    const context = await browser.newContext({
        storageState: "./auth.json"

    })
    const page = await context.newPage()
    await page.goto("https://hubtel.com ");
   // await page.waitForTimeout(5000);

   //ordering drink


   await page.getByRole('link', { name: 'Everyday Essentials' }).click();
   await page.locator('a').filter({ hasText: 'See all' }).first().click();

await page.pause();
})