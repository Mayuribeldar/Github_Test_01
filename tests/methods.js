//push > add last elenment
//shift> remove 1st 

//unshift > add 1st element
//pop >> remove last elemment

//includes()>> check given elemenet present or not
//indexof()>> gives index of elemenet
//falt() >  convert 2 dim array in single array



//falt >  2 dim array convert 1 array
//map
//perform action with each element
//return > new array



//map


let score  = [1,2,3,4,5,6,7]
let plus5 = score.map(function(ele,index,array){
    return ele+5
})

console.log(plus5)

let score1 = ["mayuriaaaa"]
let xyz = score1.filter((function(ele,index,array){
return ele == "a"
}))
console.log(xyz)

//its array methods:
//map
//filter
//foreach

let score2 = ["a","asdf","asdfgh"]

score2.forEach(function(el,index,array){
    console.log(el-"a")
})

console.log(score2)

let firstname1 = "MayuriaaaaaBeladarGovindaraoM"

let x = firstname1.split("a")

let new_string = []

for (i = 0; i< firstname1.length ; i++){
if(!new_string.includes(firstname1[i])){
    new_string.push(firstname1[i])
}
}
console.log(x)
console.log(new_string)
console.log(new_string.join(""))


let y = ["qwertyuihgfddfghuytgfrd"]

console.log(y.join())


if (new_string.includes(firstname1[i])){
    new_string.push()
}

function greeting(greet){

    return greet
}let x1 = greeting("hello word")

console.log(x1)

function greeting(mayuri){
    return "hellow word i am master of playwright"
}let c1 = greeting()

let a1 = ["!23","123","12343","12345678765"]
let y1 = a1.toString()
console.log(y1)
// continue
 console.log(y1.split())
let p  = y1.includes("123")

console.log(p)
 

a1.forEach(element => {
    console.log(element)
});

console.log(Math.round(5.6))

for (i= 10; i<=400; i++){

    console.log(i)
}

let k = 0
let arra = [1,2,3,4,5,"a","d"]
for(k = 0; k <=arra.length;k++){
    console.log(k)
}

let mayu = "apple, banana, kiwi"
console.log(mayu.slice(13))

//slice

let text = "MAYURIbeldar"
console.log(text.split("M"))
//console.log(text.toLowerCase())

//console.log(text.replace("MAYURIbeldar","beldarMAYURI"))

//push:
//pop :
//indexOf()
//includes
let a = mayu.includes("apple")
console.log(a)

let array12 = [[22],[33],[80],[900],[67],[4567]]
console.log(array12.flat())


//map ,filter ,reduce is array method

//1.array methods
//push,pop,shift,unshift,indexOf,includes(),flat()

//2.string methods

//replace //touppercase //tolowercase //trim //trimstart  //trimend //


array12.forEach(function(el,index,array){
    console.log("welcome" + el)
})

 array12.map(function(el,index,arra){

    return  el + 2
 })

 console.log(array12)

 //map 
 //foreach
 //

 //let array12 = [[22],[33],[80],[900],[67],[4567]]

let t1 = array12.toString()

let xy =  array12.filter(function(el,index,array){

    el >10
 })
 console.log(xy)

 let suma = array12.reduce(function(acc,el,index,arra){

    return acc+el
 },0)

 console.log(suma)

