const {test, expect} = require("@playwright/test")
const exp = require("constants")

test("to test page1",async({page})=>{

await page.goto("https://shopnewage.com/")

 const xyz= await page.locator('img[class="menu-icons"]') 

 await expect(xyz).toHaveClass('menu-icons')
 
})