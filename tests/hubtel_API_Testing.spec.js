

const { test, expect, request } = require('@playwright/test');

const payloadValue = process.env.PAYLOAD; // Get payload value from environment variable
let token; // Declare variable to store access token

test.beforeAll(async () => {
  // Create a new API context for making requests
  const apiContext = await request.newContext();

  // Send a POST request to the login endpoint
  const loginResponse = await apiContext.post('https://hubtelappproxy.hubtel.com/api/v1/account/getprofile', {
    data: payloadValue, // Send payload value in the request body
  });

  // Check if the login response was successful
  expect(loginResponse.ok()).toBeTruthy();

  // Extract the access token from the login response JSON
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.authToken;

  // Log the access token and payload value to the console
  console.log(token);
  console.log(payloadValue);
});

test('hubtel API testing', async ({ page, context }) => {
  // Set the access token in local storage
  page.addInitScript(() => {
    window.localStorage.setItem('token', token);
  });

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
