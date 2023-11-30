

const { test, expect, request } = require('@playwright/test');

const payloadValue = process.env.PAYLOAD; // Get payload value from environment variable
let token; // Declare variable to store access token

test.beforeAll(async () => {
  // Create a new API context for making requests
  const apiContext = await request.newContext();

  // Send a POST request to the login endpoint
  const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
    data: {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"}
  });

  // Check if the login response was successful
  expect(loginResponse.ok()).toBeTruthy();

  // Extract the access token from the login response JSON
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;

  // Log the access token and payload value to the console
  console.log(token);
 
});

test('Rahul API testing', async ({ page}) => {
  // Set the access token in local storage
  page.addInitScript((value) => {
    window.localStorage.setItem('token', value);
  },token);

  let email;
  const productName = 'zara coat 3';
  await page.goto(" https://rahulshettyacademy.com/client")
   const products = page.locator(".card-body");

   
   await page.waitForLoadState('networkidle');
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
   await page.locator("[placeholder*='Country']").type("ind");
 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   //expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 

});
