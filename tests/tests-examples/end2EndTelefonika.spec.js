
import { test, expect } from "@playwright/test";

test.describe.configure({
  mode: "parallel",
  timeout: 60000,
});

test("testing on Telefonika store", async ({ page }) => {
  // Navigate to the Telefonika store
  await page.goto("https://telefonika.com/");

  // Click the Login/Register link
  await page
    .getByRole("link", { name: "Login / Register", exact: true })
    .click();

    const pass= process.env.TELEFONIKA_PASS;

  // Fill in login credentials
  await page.locator("[id=username]").fill("bronydot55@gmail.com");
  await page.locator("#password").fill(pass);
  await page.locator("[name=login]").click();

  // Verify login and navigate to homepage
 await page.waitForURL("https://telefonika.com/");

  // Search for products with title "Samsung Galaxy S23 Ultra"
  const productTitles = await page.locator(".wd-entities-title").allTextContents();
  for (let i = 0; i < productTitles.length; i++) {
    if (productTitles[i].includes("Samsung Galaxy S23 Ultra")) {
        console.log(`Found product: ${productTitles[i]}`);

      await page.locator(".wd-entities-title").nth(i).click();
  
      break;
    }
  }
  // selecting the capacity
await page.locator('[id="capacity"]').selectOption("256GB");

  // click on add to cart
  await page.getByText('Add to cart').nth(0).click();

  // Pause the execution for manual interaction
  await page.pause();
});
