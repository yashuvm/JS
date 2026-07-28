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


Q: 16
function sum(a=5,b=7){
  console.log(a+b)
}
sum(null,20) //20
sum(undefined,20)//25
//if no value or undefined value -> then a=5 
//we are giving null so in js type coresion null -> 0 -> 0+20 => 20

Q: 17
const arr1=[1,2,3]
const arr2=arr1.slice() //return new array not modify cuurent array //splice modify the ary
arr2[0]=0
console.log(arr1) //[1,2,3]

Q: 18
let obj={name:"Shyam"} //object have value 
const newNum=[obj] //newNum have reference of obj
obj=null //variable obj assign null but newNum still obj reference original
console.log(obj) //null
console.log(newNum) //{name:"Shyam"}


Q: 19
const box={
  x:5,y:10
}
Object.freeze(box)
box.x=10
console.log(box)
//value is box object is not changed

Q: 20
new Promise(()=>{
  console.log("d") //not using resolve or reject js code run sync code there is no resolve reject so sync code run
})
console.log("s")
//ds

Q: 21
const arr1=[1,2,[3,4]]
const arr2=[...arr1] //shallow copy copy the privitve value but for non premitve copy ref so when we use arr1[2][0] referce is change so value is also changed
//shallow copy copy the first layer 
arr1[0]=12
arr1[2][0]=100
console.log(arr2) //[1, 2, [100, 4]]

Q: 22
let st='sai'
st.length=0 
console.log(st) //sai 
//string are immutable not able to change also properties is also not able to changed

Q: 23
x++
console.log(x) //NaN
var x=10

Q: 24
function hello() {
  let a = (b = 10) //in js if not var let const then js assign var in global object
}
hello()
console.log(b) //10

Q: 25
const data={
  "a":1
}
data.a=2 //modify the properties of object but not reassign 
console.log(data.a) //2

Q: 26
const x=[1,2,3]
delete x[0] //it will delete the ary element and assign empty value so length is same
console.log(x.length)
console.log(x)

Q: 27
(function sum(num){
  console.log(num*num) //0
})(false)

Q: 28
let learn='Learn'
console.log(learn.substring(5,1))
//in js substring start index and end index and give that value
//but if start index > last index then value is swap so start is 1 and end is 5 
//earn

Q: 29
let ary=[]
let value=false 
console.log(ary==value) //loose type operator convert two different data type into  into common value [ ] -> 0 and false -> 0 
///true
[].toString() → ""  -> 0 -> 0==0 -> true


Q: 30
const data = {
  a: ' sai',
  a:'krishna'
}
console.log(data.a)

Q: 31
let a =[1]
let b=[2]
console.log(a+b) //use + in ary js use ary.toString() -> "1" + "2" -> 12

Q: 32
let time=setTimeout(()=>{
  console.log("value")
},0)

clearInterval(time) //not log anything

Q: 33
var a = 1
let b = 2
{
  var a = 10
  let b = 12
}
console.log(a, b)
//init -> a is globale and b is block 
//in block a is function scope and ovverride the value a but in b let is block scope 


Q: 34
let arr1=[1,2]
let arr2=arr1.reverse()
console.log(arr1,arr2) //[2,1] [1,2]
//reverse() modifies the original array and also returns the same array reference

Q: 35
let x=1
let y=2
console.log(x++ + ++y) //4 postfix return 1 then ++ -> 1+ (++2) -> 1+3 -> 4


Q: 36
//let x
//
let x = {
  flag: 1,
  toString: function () {
    return this.flag++
  },
}

//
if (x == 1 && x == 2 && x == 3) {
  console.log('hello')
}
//== operator js convert the non pretive type to .toString() 
//intitally if x==1 it return this.flag -> 1 which increment later 
//x ==2 this.flag -> 2 
// if x =2 this.flag -> 3 
//x is object -> we comapre object to number -> it try to convert object to primitve like toString() -> it increment the flag

Q: 37
let name={name:"hello"}
let value=["name"]
name[value]="world" //in key js use .toString() -> name[["name"].toString()] -> name["name"]
console.log(name.name) //world

Q: 38
console.log([]==[])//false -> in js == ary created by reference == comapre reference but in the memeory locaton value is different 

Q: 39
let x=[]
x[4]=1
console.log(x)
x.forEach((i)=>{
  console.log("hello")
})
//it print only once 
//x [undefined,undefined,undefined,undefined,4]
//but forEach run only or iterate only defined value so print only hello once 
//in this undeined is not assing on 0,1,2,3 index its have empty value


const a=[undefined,undefined,1]
a.forEach((i)=>{
  console.log("a") //run becuase undefined is exit on index
})
//a,a,a


Q: 40
x++ 
console.log(x) //NaN
var x=20



Q: 41
const name="hello"
age=15
console.log(delete name) //delete gives false
console.log(delete age) //age is globale object so it gives true
//delete operator in js delete property in object 
console.log(age) //age is not defined

Q: 42
let a =[1]
let b=[2]
console.log(a+b)
//+ ->js convert array -> arry.toString() 1+2 -> 12
Interview Rule to Remember

When + is used with objects or arrays:

Convert the object to a primitive (valueOf() → toString()).
If either operand becomes a string, + performs string concatenation.
Otherwise, it performs numeric addition.

This is why:

[1] + [2]      // "12"
[1] + 2        // "12"
1 + [2]        // "12"
[1,2] + [3,4]  // "1,23,4"



Q: 43
console.log([1,2] + ![]) //1,2false
//[]=> true 
//![] -> !true -> false

Q: 44
let x=1
let y=2
console.log(x++ + ++y) 
//x++ -> postfile return value then increment
//++ -> increment then return 

Q: 45
let st='hello'
st.length=0
console.log(st.length) //string are immutable in js

Q: 46
let obj={hello:"one"}
let obj_=obj
obj_={}
console.log(obj) 
//in js object reference is passed but when we assign empty object {} -> it take new memeory in the system if we reassign then it is not assign new memeory system


Q: 47
const st = 'abc' + +"def"
//+def + is uniary convert into number -> try convert string to number is is not right => NaN
console.log(st) //abcNaN

Q: 48
let st="Change"
let value=st.replace("C","R") //replace give new value copy preious and return new
console.log(value) //Rhange
console.log(st) //Change

Q: 49
let a = true
let b = true
let c = false
console.log(a && b || c)
//in js && operator is more preciency a && b -> true 
//true || false -> true

Q: 50
console.log(2 + '3' + 4)
//in js + operator use -> it convert string value to numeric value -> "23" -> 4 -> 234 

Q: 51
let {length}="hello"
console.log(length)
//in js {length} -> of string hello -> it converted into object -> and in the object 
//property object length it 5 

In JavaScript, when you use object destructuring on a primitive like a string:
let { length } = "hello";
JavaScript automatically wraps the string in a temporary String object (called autoboxing).
Internally, it's similar to:
let temp = new String("hello");
let { length } = temp;
console.log(length); // 5
Since String objects have a length property, destructuring extracts that property.
Another example
let { toUpperCase } = "hello";
console.log(toUpperCase()); // HELLO
Here, toUpperCase is a method of the temporary String object.




Q: 52
x=1 
console.log(x)
var x
console.log(x)
//hosting x is hosted 
// x : udnefined 
//when. code run it assign x => 1 
//after pointer move line 3 value still 1 so in the console it gives 1

Q:53
const a ={}
const b={x:1}
const c ={y:2}
a[b]='hello'
a[c]='world'
console.log(a[b])

Q:54
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => {
    console.log(3);
    return Promise.resolve(4);
}).then(console.log);
queueMicrotask(() => console.log(5));
console.log(6);
1
6
3
5
4
2

//112


