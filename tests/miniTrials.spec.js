
const { test, expect} = require('@playwright/test');

test('get user details',async({request})=>{

  // https://firebase.googleapis.com/v1alpha/projects/-/apps/1:834128235938:web:8358c4f8f2916ffa43b6fb/webConfig
const response = await request.get( 'https://firebase.googleapis.com/v1alpha/projects/-/apps/1:834128235938:web:8358c4f8f2916ffa43b6fb/webConfig');
console.log(await response.status())
expect(response.status()).toBe(200)

})