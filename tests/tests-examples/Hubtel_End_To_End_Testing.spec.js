

import {test,expect} from "@playwright/test"

test.describe.configure({
    mode: "parallel",
    timeout: 60000,
  });


test('hubtel food end to end testing', async({page,context})=> {

  //$env:ENV="local"
    

    const addressName = "page.locator('[placeholder='Enter name' ]')"
    const newEnv= process.env.AUTH_TOKEN
//console.log(newEnv);


    // using cookies to bypass login
 await context.addCookies([{
    name:"consumerAuth",
    //value: "newEnv", 
    value: newEnv,
   url: "https://hubtel.com/",
   
}])

// Granting hubtel location permission 

await context.grantPermissions(['geolocation'], { origin: 'https://hubtel.com' });


await page.goto(" https://hubtel.com/food")

await page.waitForLoadState('networkidle');

//checking for the title of the page to ensure we're at the right place
await expect(page).toHaveTitle(" Hubtel - Find and pay for everyday essentials");

//setting location on google map for the delivery 
await page.locator('[class="fw-bold text-primary small d-table ps-2"]').click();
 await page.locator('[class="fw-bold text-primary"]').click();
 await page.locator('[ placeholder="Search for places"]').fill("Circle VIP Station, Ring Road West, Accra, Ghana");


 await page.locator('[ placeholder="Enter name" ]').fill('Circle VIP Station');

  await page.locator('[class="btn flex-fill d-block fw-bold btn-primary text-white"]').click();

  await page.locator('[class="btn text-white btn-outline-primary text-primary"]').click(); 

 await page.pause();

})