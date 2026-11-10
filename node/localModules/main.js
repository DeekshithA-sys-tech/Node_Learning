


// local modules 

/*
-In node_js local module is a module(file / folder ) that created by oursel in our project and reusing in other file while importing
using import keyword or using require method
-local modules are not installed by npm,they are created inside the project





*/
// IMPORTING  (bacic ways)


// 1st way
//console.log("hello");
//let program = require('./arithmetic')



// let res = program.addition(500,300)
// console.log(res)
// let res1 = program.subtraction(500,300)
// console.log(res1)

// 2nd way


// let res = program.add(500,300)
// console.log(res)
// let res1 = program.sub(500,300)
// console.log(res1)


// 3rd way (desturcturing)

// let {add,sub}= program

// let res = add(500,300)
// console.log(res)
// let res1 = sub(500,300)
// console.log(res1)



// 4th way (advanced way)

let {division,mul,addmuliti,onlyeven,onlyodd,onlyevensum,onlyoddsum,largestNUM,smallNUM
    ,checkPalindrome,checkValueContains,removeELE
}= require('./arithmetic')
// console.log(addmuliti(1,2,3,4));
// console.log(division(500,2))
// console.log(mul(500,30))
console.log(...onlyeven(1,2,3,4));
console.log(...onlyodd(1,2,3,4));
console.log(onlyevensum(1,2,3,4));
console.log(onlyoddsum(1,2,3,4));
let num = largestNUM(8,2,3,9,1,5,10)
console.log(num[0])
console.log( smallNUM(8,2,3,9,1,5,10))

console.log(checkPalindrome("madam"))

console.log(checkPalindrome("madm"))
console.log(checkValueContains(1,2,3,4,5,6,7,78))
// console.log(removeELE(1,2,3,4,5,6,7,78))