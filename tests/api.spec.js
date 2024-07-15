const {test, expect} =  require("@playwright/test");

var user_id;
test("get method",async({request})=>{

    const response = await request.get("https://reqres.in/api/users")
 console.log(response.json())

 await expect(response.status()).toBe(200)
})
 
test("to test post method",async({request})=>{
const response1 = await request.post("https://reqres.in/api/users",{

data : {"name": "mayuri","job" :"trainer"}, headers : { }

})

var res = console.log(response1.json())
user_id= res.id
await expect(response1.status()).toBe(201)

})

//200 ok
test("to check put method",async({request})=>{
const response3 = await request.put("https://reqres.in/api/users"+user_id,{
    data:{"name":"mayuri","job":"engineer" }, header:{   }
})
console.log(response3.json())

await expect(response3.status()).toBe(200)

})
