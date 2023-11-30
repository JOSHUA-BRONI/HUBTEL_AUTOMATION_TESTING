

import {test,expect,request} from "@playwright/test"


//API testing, creating new API context

test('capturing cookies',async(browser)=>{

  const context = await browser.newContext();
  const page = await context.newPage()

 await context.storageState({path:'state.json'})



})