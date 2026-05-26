//explicit binding in js 
///////////////////////////////////////////////////////////////////////////call
// var obj = { name: "Piyush" }


// function sayHello(age) {
//     return "hello  " + this.name + " age " + age
// }
// console.log(sayHello())
// console.log(sayHello.call(obj,25))



//////////////////////////////////////////////////////////////////////////apply 
// var obj = { name: "Piyush" }


// function sayHello(age,Profession) {
//     return "hello  " + this.name + " age " + age + " Profession: " + Profession

// }
// console.log(sayHello.apply(obj, [25, "Developer"]))


// ////////////////////////////////////////////////////////////////////////Bind
// var obj = { name: "Piyush" }


// function sayHello(age, Profession) {
//     return "hello  " + this.name + " age " + age + " Profession: " + Profession

// }

// const bindFunc = sayHello.bind(obj)
// console.log(bindFunc(25,"developer"))    //call this function like call and apply it provide a new function which later call it 
// console.log(bindFunc(25,"software engineer"))    //reusable funcfion 


//input output question 
// ////////////////////////////////////////////////////////////////////////Q:1
// const person = { name: "Piyush" }

// function sayHi(age) {
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person, 24))   //Piyush is 24

// console.log(sayHi.bind(person, 24))   ////[Function: bound sayHi]  //bind return a funcfion which call later





//////////////////////////////////////////////////////////////////////////Q:2
// const age = 10;

// var person = {
//     name: "Piyush",
//     age: 10,
//     getAge: function () {
//         return this.age
//     }

// }

// var person2 = { age: 24 }
// console.log(person.getAge.call(person2))   //24
// console.log(person.getAge.apply(person2))   //24
// console.log(person.getAge.bind(person2)())   //24    


//////////////////////////////////////////////////////////////////////////Q:3
// var status = "st"

// setTimeout(() => {
//     const status = "set timout status"

//     const data = {
//         status: "object status",
//         getStatus() {
//             return this.status
//         }
//     }

//     console.log(data.getStatus()) //object status            
//     console.log(data.getStatus.call(this))      //here this is point to its immedaite function  so this status is st


// },0)


//////////////////////////////////////////////////////////////////////////Q:4
//print all anumal in the ary
// const animals = [
//     { species: "Lion", name: "king" },
//     { species: "Whale", name: "Queen" },
// ]

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ":" + this.name)
//     }
//     this.print()
// }
// for (let i = 0; i <= animals.length - 1; i++) {
//     printAnimals.call(animals[i], i)
// }

//////////////////////////////////////////////////////////////////////////Q:5
//Append an array into another array 
//concat for loop 
// const array = ["a", "b"]
// const elements = [0, 1, 2]

// array.push.apply(array,elements)   //it will brak down this array and seperate its argurment and merge it 
// console.log(array)

//////////////////////////////////////////////////////////////////////////Q:6
//find min max number in an array 
// const numbers = [5, 6, 2, 3, 7]
// console.log(Math.max(3,5,7,12))

// //by using loop 
// console.log(Math.max.apply(null,numbers))


//////////////////////////////////////////////////////////////////////////Q:7

// function f() {
//     console.log(this)     //the context of this function is window object 
// }

// let user = {
//     g: f.bind(null)
// }

// user.g()

//////////////////////////////////////////////////////////////////////////Q:8
//bind chaingin 
// function f() {
//     console.log(this.name)
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" })     //once a function bind to particular objet it will always bound to particular object
// f()

//////////////////////////////////////////////////////////////////////////Q:9
// function checkPassword(success, failed) {
//     let password = ""
//     if (password === 'Roadside coder') success()
//     else failed()
// }


// let user = {
//     name: "Piyush",

//     loginSuccessful() {
//         console.log(`${this.name} logged in`)
//     },

//     loginFailed() {
//         console.log(`${this.name}  failed in log in`)
//     }
// }

// checkPassword(user.loginSuccessful, user.loginFailed)

//////////////////////////////////////////////////////////////////////////Q:10
const age = 10

var person = {
    name: "piyush",
    age: 20,
    getAgeArrow: () => console.log(this.age),
    getAge: function () {
        console.log(this.age)
    }
}
var person2={age:24}

person.getAge.call(person2)         //it was not depend we apply call apply bind -> function works same as earlier undefined if age is not in const or it is in var then it will 24 
person.getAgeArrow.call(person2)   //24