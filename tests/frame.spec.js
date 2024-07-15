 

 const test = require('@playwright/test')

 test("to check api",async({request})=>{

const response = await request.get('')
await response.json()
await response.status()

 })
 test("to check api",async({request})=>{

    const response = await request.post('baseurl',{
        data:{ },header:{ }
    })
    await response.json()
    await response.status()
    
     })
     test("to check api",async({request})=>{

        const response = await request.put ('baseurl',{
            data:{name : " mayuri", job : "trainer "},header:{ }
        })
        await response.json()
        expect(await response.status()).tobe(201)
        
         })

    await page.frame()


    await page.screenshot({path:""})

    await page.loca ().screenshot({path:'asdfgbh'})


    npm 