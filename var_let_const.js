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