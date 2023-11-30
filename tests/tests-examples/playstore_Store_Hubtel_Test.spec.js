



import {test,expect} from "@playwright/test"

test("checking for the existence of hubtel app on playstore", async({page}) =>{  


  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.hubtel.hcb&amp;hl=en';

  try {
    // Navigate to the App Store link
    await page.goto(playStoreLink, { waitUntil: 'domcontentloaded' });
    
    const isValidLink = await expect(page.locator("[id*='com.hubtel']")).toBeTruthy();

    if (isValidLink) {
      console.log('playstore link is valid!');
    } else {
      console.error('playstore link is not valid.');
    }
  } catch (error) {
    console.error('Error:', error);
  } 
})



 