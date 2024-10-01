//object binding implecity obj.fu()   //explictiy binding call apply bind 
//this implit binding ->fruits keept in bucket this is ref bucket 


//this.a = 5
// console.log(this.a)

// //
// function getParam() {
//     console.log(this.a)    //this is target to its parent object   //parent is window object 
// }
// console.log(getParam()) //

// const getParam_ = () => {   //it take this from its outer normal function 
//     console.log(this.a)
// }

// console.log(getParam_()) //  normal function and arrow function work same 

////////////////////////////////////////////////////////////////
// let user = {
//     name: "piyush",
//     age: 24,
//     // getDetails() {
//     //     console.log(this.name)   //we are inside object this is point to this object or user object 
//     // },
//     // childObj: {
//     //     newName: "Roadside coder",
//     //     getDetails_() {
//     //         console.log(`${this.newName} and ${this.name}` )  //normal function will point to immediate parent object
//     //     }
//     // }
//     //
//     // getDetails: () => {
//     //     console.log(this.name)   //undefined
//     // },
//     getDetails() {
//         const nestedArrow = () => console.log(this.name)
//         nestedArrow()
//     }
// }
// user.getDetails()
//user.childObj.getDetails_()


//////////////////////////////////////////////// this keyword inside a class 
// class user {
//     constructor(n) {
//         this.name = n
//     }

//     getName(){
//         console.log(this.name)
//     }
// }
// const User=new user("piyush")   //inside a class this is ref to its constructor 
// console.log(User.getName())

//////////////////////////////////////////////// Q:1
// const user = {
//     firstname: "Piyush",
//     getName() {
//         const firstname = "Piyush |"
//         return this.firstname
//     }
// }

// console.log(user.getName())   //Piyush

//////////////////////////////////////////////// Q:2
// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     }
// }
// let user = makeUser()
// console.log(user.ref.name)   //undefined


// function makeUser() {
//     return {
//         name: "John",
//         ref(){
//             //return this
//             console.log(this.name)
//         }
//     }
// }
// let user = makeUser()
// console.log(user.ref())   //undefined

//////////////////////////////////////////////// Q:3
// const user = {
//     name: "Piyush Aggrawal",
//     logMessage() {
//         console.log(this.name)      //
//     }

// }

// //setTimeout(user.logMessage, 1000)  //undefined  //coz this method go to the webapi and only {console.log(this.name)} is copy and when it executed then this is in the window object
// setTimeout(function () {
//     user.logMessage()
// }, 1000) 

//////////////////////////////////////////////// Q:4
// const user = {
//     name: "Piyush",
//     greet() {
//         return `Hello ${this.name}`
//     },
//     farewell: () => {
//         return `Good ${this.name}`
//     }
// }

// console.log(user.greet())          //      Hello Piyush    
// console.log(user.farewell())       //      undefined

//////////////////////////////////////////////// Q:5
// let calculator = {
//     read() {
//         this.a = 5
//         this.b = 10
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())

//////////////////////////////////////////////// Q:6
// var length = 4
// function callback() {
//     //console.log("A")
//     console.log(this.length)
// }

// // const object = {
// //     length: 5,
// //     method(fn) {
// //         fn()
// //     }
// // }
// // object.method(callback)   // 4 

// const object = {
//     length: 5,
//     method() {         // argument = [callback,2,3] this is point to this array and length is 3 
//         arguments[0]()
//     }
// }
// object.method(callback, 2, 3)  

//////////////////////////////////////////////// Q:7
const calc = {
    total: 0,
    add(a) {
        this.total = this.total + a
        return this
    },
    multiply(a) {
        this.total = this.total * a
        return this
    },
    subtract(a) {
        this.total = this.total - a
        return this
    },
    
}

const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result)