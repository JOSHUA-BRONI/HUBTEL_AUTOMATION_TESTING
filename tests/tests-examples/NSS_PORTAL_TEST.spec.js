// using NSS PORTAL

import {test,expect} from "@playwright/test"

test("entering NSS page and ticking remember my logins and clicking on dashboard", async({page})=>{
  const pass= process.env.NSS_PASS
  const email = process.env.NSS_EMAIL

    await page.goto(" https://portal.nss.gov.gh/sign-in");

    await page.locator( " [placeholder='Username']").fill(email);


    await page.locator( " [ placeholder*='Password']").fill(pass);

    await page.locator( " [ for='RememberMe'] ").check();

    await page.locator( " [ for='RememberMe'] ").isChecked();

    await page.locator("[class='btn btn-primary hidden-xs'] ").click();
    
  await page.waitForLoadState('networkidle');

    await page.locator("[href='general-dashboard']").click();

    await expect(page.locator("[href='general-dashboard']")).toBeTruthy();

    await page.pause();

})

