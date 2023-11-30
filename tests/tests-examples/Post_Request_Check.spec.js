
import {test,expect,request} from "@playwright/test";
import { ok } from "assert";

//API LOGIN TESTING USING HUBTEL 

test("hubtel API login",async()=>{

// to perform the login, we need to extract the token from the POST request

const Apicontext = await request.newContext()

const Apiresponse = await Apicontext.post('https://hubtelappproxy.hubtel.com/api/v1/account/getprofile',

{
    
    data:process.env.PAYLOAD, 
    
    Headers:{
    "Content-Type":"application/json; charset=utf-8",
    "Authorization":process.env.AUTH_TOKEN,
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "Request-Context": "appId=cid-v1:6625fbe1-2f8c-4461-9268-769a35958991"
}}
)
const responsejson = await Apiresponse.json()
console.log("the response is "+":"+ responsejson);
 expect(await responsejson.status()).toBe(201);


})


