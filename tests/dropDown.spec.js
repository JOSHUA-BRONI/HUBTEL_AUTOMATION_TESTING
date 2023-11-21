

import {test,expect} from "@playwright/test"


test('handling static select dropdown', async({page})=>
{
    await page.goto("https://hubtel.com/login");

    await page.waitForLoadState('networkidle');

    console.log(await page.locator("[role='button']").allTextContents());


    //a[normalize-space()='Grow Revenues'])[1]
}

)