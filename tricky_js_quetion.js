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


Q: 11
let newList=[1].push(2) //when we use .push method in ary it will not return a new array it will return lenght of new array -> 2 
console.log(newList.push(3)) //-> 2.push(3) it gives an type error (not use .push on numeric value)

Q: 12
var employeeId='abc'

function foo(){
    employeeId='123'
    return 
    function employeeid(){}
}
foo()
console.log(employeeId) //employeeId is chanages the value of employee id from the global scope //123


Q: 13
const arr1=[1,2,3]
const str='1,2,3'
console.log(arr1==str)
//in js loss equality operator are used value of two differnt type -> js convert (common type) -> to make comparison -> 
//lossy operator between array and string js internally uses array.prototype.toString() -> convert array into string 
//'1,2,3' == '1,2,3'-> true

Q: 14
let a = 5 
let b = a++ //value of a return to b and then increment then it is 6 
console.log(a+b) //11

Q: 15
var x=1 
console.log(x)

function x(){
    console.log("2")
}
x() 
//type error due to hoisting 
// in hoisting function declartion more prioriry then var declation 
//initally function x is hoisting -> then var declarition will be hoisting -> now it override function declartion -> which is hoisted 
//line x is hosting and value is 1 
//but when x is call then x is not function it is numeric value due to this it gives type error x is not a function 
//366666