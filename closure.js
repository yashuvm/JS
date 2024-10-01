//lexical scope (a scope reference to the current context of your code)

// var username='coder'
// //////--lexical scope is a variable define outside of function have access inside of the function but vice versa is not true

// //global scope
// function local(){
//     //local scope
//     console.log(username)
// }

// local()
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
///----------------------------------------------------------------
//global scope
// function subscribe() {
//   var name = "coder";
//   //inner scope 2
//   function displayName() {                  //this thing is called a closure (a function with its lexical envirment is called closure)
//     //inner scope
//     console.log(name);
//   }
//   displayName();
// }
// subscribe();

//
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
//   //makeFunc()()
//   const myFunc = makeFunc();
//   myFunc();    ///this function call after but displayName function have its parent or its lexical environment

//clousre is used to function have with private variables
// a clousure have acess its local scope and outer scope or parents scope globel scope

// var username = "hello";

// function makeFunc() {
//   var name = "Mozilla";
//   function displayName(num) {
//     console.log(name, num, username);    //this is called clousre scope chain
//   }
//   return displayName;
// }
// makeFunc()(5);

// //scope chain
// // global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20

///
//Q:1
// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;    //shadowing
//     console.log(count); //1
//   }
//   console.log(count);  //0
// })()

//Q:2 Write a function that would allow you to this
// function createBase(a) {
//     return function (b) {
//       console.log(a + b);
//     };
//   }

// var addSix = createBase(6);
// addSix(10); //return 16
// addSix(21); //return 27

//Q:3 Time optimization
// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i
//     }
//     console.log(a[index])
// }

// console.time("6")
// find(6)
// console.timeEnd("6")
// console.time("12")
// find(50)
// console.timeEnd("12")
// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   } 
//   return function (index) {
//     console.log(a[index]);
//   };
// }
// const closure=find()
// //
// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");

//Q:4 Block scope and setTimout
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();
//3,3,3
//we have reference of var i in the memory
//intial i=0,1,2,   ->after synchronized asyn code run and the value of i is 3
//in let case {i=0}  {i=1} {i=2}

// //create closure
// function a() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(function log() {
//         console.log(i);
//       }, i * 1000);
//     }
//     inner(i);       //it will take whole differnt memory space
//   }
// }
// a();

//Q:5 how would you use a clousre to create a private counter
// function counter() {
//   var _counter = 0;
//   function add(increment) {
//     _counter += increment;
//   }
//   function retrive() {
//     return "counter is " + _counter;
//   }
//   return { add, retrive };
// }

// const c=counter()
// c.add(5)
// c.add(10)
// console.log(c.retrive())

//Q:6 to make this run only once
let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already subscibed");
    } else {
      view = "code";
      console.log("subscribe", view);
      called++;
    }
  };
}

let isSubscribed=likeTheVideo()
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();
