//what is call
// var obj = { name: "piyush" };

// function sayHello(age) {
//   return "hello " + this.name + " " + age;
// }

// console.log(sayHello())    //hello undefined
// console.log(sayHello.call(obj,25))   //hello piyush

/////what is apply

// var obj = { name: "piyush" };

// function sayHello(age, profession) {
//   return "hello " + this.name + " " + age + " " + profession;
// }

// console.log(sayHello.apply(obj, [25, "Fashion"])); //apply is same as call but arguament is give in the array

//what is bind
//
// var obj = { name: "Piyush" };

// function sayHello(age,profession) {
//   return "hello " + this.name + " " + age + " " + profession;
// }

// console.log(sayHello);
// //bind is used
// //calling a function like call and apply it provide another function which can call later

// const bindFunc = sayHello.bind(obj);
// console.log(bindFunc(2,"fashion"));    //it provide a reusable function
// console.log(bindFunc(2,"new world"));

//Q:1
// const person = { name: "Piyush" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24));   //piyush is 24
// console.log(sayHi.bind(person, 24));   //it return a function

// //Q:2
// const age = 10;

// var person = {
//   name: "Piyush",
//   age: 20, 
//   getAge: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 24 };
// console.log(person.getAge); //20
// console.log(person.getAge.call(person2)); //24
// console.log(person.getAge.apply(person2));  //24
// console.log(person.getAge.bind(person2)());  //24

//Q:3
// var status = "status";

// setTimeout(() => {
//   const status = "status1";

//   const data = {
//     status: "status2",
//     getStatus() {
//       return this.status;
//     },

//   }

//   console.log(data.getStatus());       //status2
//   console.log(data.getStatus.call(this));   //status    //coz this is referer to the global status (this is from global scope)
// }, 0);

//Q:4
// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimal(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + " " + this.name);
//   };
//   this.print();
// }

// for(let i=0;i<=animals.length-1;i++){
//   printAnimal.call(animals[i],i)
// }

// //Q:5 append an array to another array
// const array = ["a", "b"];
// const elements = [0, 1, 2];

// // array.push(elements)
// // console.log(array)
// // //
// array.push.apply(array,elements)
// console.log(array)

//Q:6 Find min/max  number in array
// const numbers = [5, 6, 2, 3, 7];
// // console.log(Math.max(3,5,2,1,10));
// //console.log(Math.max(numbers)); //NaN

// console.log(Math.max.apply(null,numbers))

//Q:7
// function f() {
//   console.log(this)   //  this is objective to the windos object
// }

// let user = {
//   g: f.bind(null),
// };

// user.g()

//Q:8 Bind chaining
// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" });   //bind chaining does not exist

// f()  //john
//if a function is bind to particular object then it is bind to that object

//Q:9 fix the checkPassword line
// function checkPassword(success, failed) {
//   let password = 'Coders'
//   if (password === "Coder") success();
//   else failed();
// }

// let user = {
//   name: "Piyush",

//   loginSuccessful() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFailed() {
//     console.log(`${this.name} failed to login`);
//   },
// };

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

//Q:10
const age = 10;

var person = {
  name: "piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };
person.getAgeArrow.call(person2);   //undefined
person.getAge.call(person2); //24
