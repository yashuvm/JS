//var let const
//scope (a certain region of program where a define variable is exist and can be recongied and beyond that it can not be reconized)
//globale , functional , block

function hello() {
  //function scope
}

{
  //block scope
}

// var a = 5; //var have functional scope
// console.log(a);

// //let and const have block scope

// {
//   var b = 6;
// }
// console.log(b); //it can be access outside block

// {
//     const c=5
// }
// console.log(c)  //it give error

//////////----------------------------------------------------------------shadowing
//in es6 along with block scope is allowed shadowing
// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hi"; //this  is shadowing the a variable
//     console.log(a);
//   }
//   console.log(a);
// }

// test();
//if we shadow var variables with let it is right but if we shadow let variables with var it is called illegial shadowing.

// function test() {
//   var a = "Hello";
//   let b = "Bye";

//   if (true) {
//     let a = "Hi";
//     var b = "Good";
//     console.log(a);
//     console.log(b);  //illegal shadowing
//   }
// }
//error b is already declared

//////////----------------------------------------------------------------declaration
// var a;
// var a

// let a
// let a    //it givers error a has been already declared

// const a
// const a
//so let and const can not redeclare in the same scope and var can be redclare in the same scope

let a;
{
  let a; //it is fine
}

//////////----------------------------------------------------------------declation without initailization
// var a;  //fine
// let a;  //fine
// const a//it giver error when we declare const we have to define some value

//////////----------------------------------------------------------------re-initailization
// var a =5
// a=6

// let a=6
// a=7

// const a =6
// a=7  ///error assignment to a constant variable

//////////----------------------------------------------------------------Hoisting
//js execution context
//it have two phase one is creation phase and   
//in creation phase ->gobal execution context is created
//             -> it take all var and function in window object
//             -> it initialization var and function with undefined  (for var declaration it will store undefined and for function it will store whole function)

//execution phase ->js engine run the code line by line assign the value to var and execute the function call
// for every function it will create a new execution context

//during the creation phase js engine moves your variable function  declaration top of your code this is called hoisting

// console.log(count)   //undefined
// var count=1     //it is hoisted in the globale scope

// console.log(countlet)   //can not access let var before intialization
// let countlet=1          //let and const are hoisted in temporal dead zone (it is the time between initailzation and declaration) it is hoisted in the script

// function abc() {
//   console.log(a); //undefined
//   var a = 10;

// }

// abc();


function abc() {
    console.log(a,b,c);   //it givers error  //b and c are hoisted in the temporal dead zone(they are in the same scope but not declared)
    const c = 10;
    let b = 10;
    var a = 10;
  
  }
  
  abc();

  //a

//////////////////Q-1
{
 x = 1;
 console.log('inside block', x)
}
console.log('outside block', x)
console.log('accessing window', window.x)
//
inside block, 1
outside block, 1
accessing window, 1


//////////////////Q-2
function z() {
 x = 1;
 console.log('inside function',x)
}

z();

console.log('outside function', x)
console.log('accessing window', window.x)

inside function, 1
outside function, 1
accessing window, 1

//////////////////Q-3
a = 1;
console.log(a)
console.log(window.a)

1
1

//////////////////Q-4
const a = 1;
const a = 2;

Invalid

Reason: we cannot assign a const variable after it is assigned.

//////////////////Q-5
const a;
Invalid
Reason: we cannot declare a const variable without assigning a value.

//////////////////Q-6
let a;
a++;
console.log(a)

NaN
Reason: The variable a has just been declared, but not assigned any value yet. So the value is undefined, and undefined + 1 is equal to NaN.


//////////////////Q-7
// FIRST
var a;
var a;

// SECOND
var a = 1;
var a;

// THIRD
var a = 1;
var a = 2;

Valid

Reason: The variable declared with var can be declared or assigned earlier or after. No Error in the console.

//////////////////Q-8
// FIRST
 let a ;
 var a ;

 // SECOND
 let a = 1;
 var a;
 
 // THIRD
 let a = 1;
 var a = 1;

Invalid
Error: Identifier 'a' has already been declared

Reason: The variable declared with let must not be declared or assigned after with var or const. Therefore, all the above three sets of pieces of code are invalid. In the console, you will see the error

//////////////////Q-9
// FIRST 
let a;
let a;

// SECOND
let a = 1;
let a;

// THIRD
 let a = 1;
 let a = 1;

Invalid

Reason: The variable declared with let must not be declared or assigned after or earlier. Therefore, all the above three sets of pieces of code are invalid. In the console, you will see the error


Error: Identifier 'a' has already been declared

//////////////////Q-10
// FIRST 
var a;
let a;


// SECOND
var a = 1;
let a;


// THIRD
 var a = 1;
 let a = 1;


// Error: Identifier 'a' has already been declared
Invalid
Reason: The variable declared with let must not be declared or assigned earlier. Therefore, all the above three sets of pieces of code are invalid. In the console, you will see the error


//////////////////Q-11
var a = 1;
var b = 2
a = b;
console.log(a);   
console.log(b);

2
2



























