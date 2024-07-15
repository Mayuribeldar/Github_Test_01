const {test} = require('@playwright/test')
const data = require("../tests/testdata/contactus.json")

data.forEach(element =>{

test (`to check json data ${element.firstname}`,async({page})=>{
await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
await page.locator('input[name="first_name"]').fill(element.firstname)
await page.locator('input[name="last_name"]').fill(element.lastname)

})
})
