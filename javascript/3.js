 let ne = "chandrapur"
 let org = ne.split('')
 let org1 = []


for(i=0;i<org.length;i++){

    if(!org1.includes(org[i])){
        org1.push(org[i])
    }
}
console.log(org1)

console.log(org1.join(' '))



















let main = "Bangalore"

let main2 = [ ]

let org3 = main.split(' ')
console.log(org3)

let b = org3.join()
console.log(b)
//join method returns array as a string
 
for(i=0;i<main.length;i++){

if( !main2.includes(main[i]) ) 
main2.push(main[i])  
}

console.log(main2)

console.log(main2.join(''))
let i10 = 5
 for(i10 = 5; i10 >=1;i10--){
    console.log(i10)
 
 }

let i11 = 5 

 while(i11 >= 1){
    if(i11 ==1){
        break
    }
    console.log(i11)
i11--
 }



 let city = pune

/*
 switch (variable name){
    case "varname"{
        console.log()
    }
 }
*/

switch ('Pune')
{
    case "pune": 
    console.log("MH")
    break
    case "nagpur": 
    console.log("MH")
    break
    default:
        console.log()
}

 

