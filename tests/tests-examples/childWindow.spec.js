

import {test,expect} from "@playwright/test"

test("checking for the existence of hubtel app on App store", async({browser}) =>{  

// creating new browser context



const context = await browser.newContext();

const page = await context.newPage();

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//const documentLink = page.locator('[class="blinkingText"]')

const documentLink = page.locator("[class='blinkingText']")

const [newPage] = await Promise.all([

  context.waitForEvent('page'),
  documentLink.click(),
])

 text = await newPage.locator('[class="im-para red"]').textContent();
   console.log(text)
// await newPage.pause();
})



 