

const { test, expect, request } = require('@playwright/test');

const payload = process.env.PAYLOAD; // Get payload value from environment variable

console.log(payload)

test.only('API Testing', async () => { 
  // Create a new API context for making requests
  const apiContext = await request.newContext();

  // Send a POST request to the login endpoint
  const loginResponse = await apiContext.post('https://hubtelappproxy.hubtel.com/api/v1/account/getprofile', { 
    data: `${payload}`,
    headers : {
      'Authorization': `token ${process.env.AUTH_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  // console.log('the payload'+ ': ' + payload) 
  // console.log('the auth token'+ ': ' + process.env.AUTH_TOKEN) 
  // console.log(loginResponse)

  // Check if the login response was successful
  // expect(loginResponse.ok()).toBeTruthy();

  // Extract the access token from the login response JSON
console.log(await loginResponse.json())

expect (loginResponse.status()).toBe(200);
expect (loginResponse.ok()).toBeTruthy();
 

  // Log the access token and payload value to the console
  // console.log(token);
  // console.log(payloadValue);
});

test('hubtel API testing', async ({ page, context }) => {
  // Set the access token in local storage
  page.addInitScript((value) => {
    window.localStorage.setItem('token', value);
  },token);

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
});
