const {test} = require("@playwright/test")

test("multidropdown",async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/')

await page.selectOption('#colors',['Red','Blue'])

const count = await page.$$('#colors option')
console.log(await count.length)
})
