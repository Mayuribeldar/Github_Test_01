const {test, expect} = require("@playwright/test")
var userid 
test("to check GET METHOD OF API",async({request})=>{

const response = await request.get("https://reqres.in/api/users?page=2")
 console.log(await response.json())

 expect( response.status()).tobe('200')

})
test("to check post METHOD OF API",async({request}) => { const response1 = await request.post("https://reqres.in/api/users",+user,
{ 
    data : {"name":"mayuri","job":"engineer"}
})
})
const res = await console.log(await response1.json())
 expect(response1.status()).toBe(201)
userid = res.id 


test("to check put METHOD OF API",async({request}) => { 
    
    const response2 = await request.put("https://reqres.in/api/users"+userid,
{ 
    data : {"name":"mayuri","job":"trainer"}
})
})
 console.log(await response2.json())

  expect(response2.status()).toBe(200)
 

test("to check delete METHOD OF API",async({request}) => { 
    await request.delete("https://reqres.in/api/users/"+ userid)
})

await pageXOffset.waitf







