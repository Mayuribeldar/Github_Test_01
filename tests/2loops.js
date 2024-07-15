
//object > property

let marks1 = [11,12,13,14,15]
let i =0
for (i=0;i<=marks1.length ;i++){ 
}

 let b4 = marks1.push(16)
console.log(b4)
console.log(marks1)
console.log(marks1)
//push method returns length of new array
let k = marks1.pop()
console.log(k)
console.log(marks1)

let k1 = marks1.unshift(16)

let k2 = marks1.shift()

console.log(k2)

console.log(marks1)

 let v = marks1.toString()
console.log(v)

 

//array methods 

let array2 = [11,12,13,14,15,16,17,18]
 let b3 =  array2.filter(function(el,index,array){
   return el>17

  })
  console.log(b3)
 



 array2.forEach(function(el,index,array){
    console.log( 1+ el)  

    
  })
    
  
