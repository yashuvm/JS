//function in js
//Q:1 Function declaration  (function defination and function statement)
// function square(num) {
//   return num * num;
// }

//Q:2 Function Expression
//when you store a function inside a variable is called a function expression
// const square = function (num) {
//   return num * num;
// };
// console.log(square(5))
// function (num) {               //this is called anonymous function
//     return num * num;          // a function without name
//   };

//Q:3 First class function
// a function treated like a variable is called first class function
//when we pass a function as an argument to a function than it is called first class function
// function square(num) {
//   return num * num;
// }

// function displaySquare(fn) {
//   console.log("square is :" + fn(5));
// }
// displaySquare(square)

//Q:4 What is IIFE    //immediate invoked function
// (function square(num) {
//   console.log(num * num);
// })(5)

//Q5 IIFE op/question

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

//Q:6 Function Scope
// The following variables are defined in the global scope
// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   const num1 = 2;    //these shadow the globale variable
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"

//Q:7 Funtion scope -o/p based question
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// //every time when for loop run it create block scope 0,1,2,3,4

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//var does not have block scope 5,5,5,5,5

//Q:8  Function Hoisting
//   functionName()          //in the case of function whole function is placed in the window object //hoisting differently in case of function
//   function functionName(){
//     console.log('Coder')
//   }

//   console.log(x)   //undefined coz of hoisting
//   var x=5

// functionName(); //in the case of function whole function is placed in the window object //hoisting differently in case of function
// function functionName() {
//   console.log(x); //undefined coz of hoisting
//   var x = 5;
//   console.log("Coder");
//}

//Q:9
// var x = 21
// var fun=function(){
//     console.log(x)   //undefined
//     var x=20
// }
// fun()
// //inside the global scope x is 21 but inside local scope x is undefined

// //Q: 10 params vs argument
// function square(num){   //params
//     console.log(num)
// }
// square(5)   //these value are called arguments

// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }
// var arr = [5, 6];
// multiply(...arr);

//
// function multiply(...nums) {   //rest operator
//     console.log(nums);     //[5,6]
//   }
//   var arr = [5, 6];
//   multiply(...arr);   //this is called spread operator

//Q:11
// const fn=(a,...numbers,x,y){   //it is wrong it is always in the last

// }
// const fn = (a, x, y, ...numbers) => {
//   console.log(x, y);
//   console.log(numbers)
// };
// fn(5, 6, 7, 8,1,2);

//Q:12 callback function
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//example settimout map

//Q: 13 Arrow function //it is introduced in es6
// const add = (firstNum, secondNum) => {
//   return firstNum + secondNum;
// };

//difference between arrow and normal function
//1 syntax
// function square(num) {
//   return num * num;
// }

// const square = (num) => {
//   return num * num;
// };

// //2 implicit return keyword
// const square = (num) => num * num;

//3 argument
// function fn(){
//     console.log(arguments)
// }
//fn(1,2)

// const fn=()=>{
//     console.log(arguments)
// }
// fn(1,2)

//4 this keyword
let user = {
  username: "coder",
  rc1: () => {
    console.log("subscribe" + this.username);   //arrow function this refers to globel object 
  },
  rc2() {
    console.log("subscribe" + this.username)   //normal function this refers this object
  },
};

user.rc1()
user.rc2()