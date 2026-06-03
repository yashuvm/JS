Q: 1
const a = 1 < 2 < 3
const b = 1 > 2 > 3
//0 -> false -> 1 < 2 true -> 1 < 3 -> true
//1 -> true -> 1 > 2 false -> 0 > 3 -> false
console.log(a, b)
//

Q: 2
let str = 'jscafe'
str[0] = 'c'
console.log(str)
//in js string is immutable we can not change the character of strign in js. 

Q: 3
console.log(5 > '15' < 5) //type coresion convert 15 into number 5 > 15 -> false -> 0 < 5 -> true 
console.log(7 < '15' < 7) // 15 convert into number -> 7 < 15 -> true -> 1 < 7 -> true 
console.log(7 < '85' > 5) // 7 < 85 -> true -> 1 >5 -> false 

Q: 4
numb = 6
console.log(numb)
let numb
//it gives reference error temporal dead zone 

Q: 5
console.log(typeof typeof 1) //typeof 1 -> 'number' -> typeof 'number' -> string

Q: 6
const numbers = [1, 2, 3, 4, 5]
const [y] = numbers
console.log(y) //1 it is destructing 
//const [a,b]=[1,2]
//console.log(a,b) 1,2

Q: 7
let a = 3
let b = new Number(3)

console.log(a == b) //true 
console.log(a === b) //false typeof new number it object 

Q: 8
console.log(num) //undefined concept of hoisting
var num
num = 6
console.log(num) //6 

Q: 9
let number = 0
console.log(number++) // first console then increment -> 0 postfix operator return value then increment 
console.log(++number) //first increment then console -> 2 prefix operator increment then return 

Q: 10
console.log(3 + 4 + '5') 
//in js addition is left to right 
// 3 + 4 -> 7 and 7 convert into number due to type coresion 7+5 -> 75
//17