//currying in js
//example f(a,b) into f(a)(b)
//a function take one argument at a time return a new function excepted a new argument
// function f(a, b) {
//   console.log(a, b);
// }

// function f(a) {
//   return function (b) {
//     console.log(a, b);
//   };
// }
// console.log(f(5)(6))

//Q:1 implement sum(2)(6)(1)
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }
// sum(2)(6)(1)

//Q:2
//evaluate(sum)(4)(2)=>6
//evaluate(multiple)(4)(2)=>8
//evaluate(divide)(4)(2)=>2
//evaluate(subtract)(4)(2)=>2

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") {
//         return a + b;
//       } else if (operation === "multiple") {
//         return a * b;
//       } else if (operation === "divide") {
//         return a / b;
//       } else if (operation === "subtract") {
//         return a - b;
//       }
//     };
//   };
// }

// // console.log(evaluate("sum")(4)(2))
// // console.log(evaluate("multiple")(4)(2))
// // console.log(evaluate("divide")(4)(2))
// // console.log(evaluate("subtract")(4)(2))

// const mul=evaluate("multiple")
// console.log(mul(3)(5))   //15
// console.log(mul(2)(6))   //12

//Q:3 infinite currying ->sum(1)(2)(3)......(n)
// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a
//   };
// }
// console.log(add(5)(2)(3)(5)())

//Q:4 currying vs partial application
// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const x = sum(10);
// console.log(x(5,6))
// console.log(x(3,2))

//or
//console.log(sum(20)(1, 4));

//////curryiing
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(20)(1)(4));

//Q:5 curry() implementation
//converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    //ary of all the argument
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3));
