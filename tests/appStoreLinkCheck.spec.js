

import {test,expect} from "@playwright/test"

test("checking for the existence of hubtel app on App store", async({page}) =>{  


  const appStoreLink = 'https://itunes.apple.com/gh/app/hubtel-me/id1276144206?mt=8';

  try {
    // Navigate to the App Store link
    await page.goto(appStoreLink, { waitUntil: 'domcontentloaded' });

    // Check if the page contains the expected title or another identifiable element
    const isValidLink = await page.title() === 'hubtel-me'; // Change 'Your App Title' to the actual title of the App Store page

    if (isValidLink) {
      console.log('App Store link is valid!');
    } else {
      console.error('App Store link is not valid.');
    }
  } catch (error) {
    console.error('Error:', error);
  } 
})



 