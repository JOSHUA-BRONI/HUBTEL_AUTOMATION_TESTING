
import {test,expect,request} from "@playwright/test"

test(async()=>{
//creating API context

const context = await request.newContext();

//getting the post request response so that it will be use to bypass the login

const Apiresponse = context.post("https://hubtelappproxy.hubtel.com/api/v1/account/getprofile",

{
    data: process.env.PAYLOAD ,
    Headers:{
        "Content-Type":"application/json",
        "Authorization":` Bearer ${ AUTH_TOKEN}`
    }
})
  expect((await Apiresponse).status()).toBe(201)


} )