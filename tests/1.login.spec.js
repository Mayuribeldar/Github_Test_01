let score = [30,43,44,67,7899,887]

let d2 = score.filter(function(el,index,array){

  return el >30
})
console.log(d2)

let d3= score.map(function(el,index,array){

  return el +30
})
console.log(d3)

score.reduce(function(acc,el,index,array){

  return acc +el
},0)

score.forEach(function(el,index,arra){

  console.log("welcone" + el)

})
//reduce method gives single value by performing on each element

//some :boolean
//filter out and array
//map : perfoms action on each element of array and written new array



