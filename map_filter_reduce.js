//map filter and reduce
///////----------------------------------------------------------------map
//what is map
//creating a new ary from the existing one
// const nums=[1,2,3,4]
// const multile3=nums.map((num,i,ary)=>{
//     return num*3
// })
// console.log(multile3)
///////----------------------------------------------------------------filter
//filter returns those element from the ary which fulfill the provided creteria
// const nums = [1, 2, 3, 4];
// const filterAry = nums.filter((num) => {
//   return num > 2;
// });
// console.log(filterAry)

///////----------------------------------------------------------------reduce
//reduce method reduce the array of value in the one value
// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((acc, curr, i, ary) => {
//   return acc + curr;
// }, 0);
// console.log(sum)

///////----------------------------------------------------------------polyfil for map
//Array.map((num, i, ary) => {});

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i <= this.length-1; i++) {
//     //ary.map   ->this is the reference of the parent array
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const nums=[1,2,3,4]
// const multile3=nums.myMap((num,i,ary)=>{
//     return num*3
// })
// console.log(multile3)

///////----------------------------------------------------------------polyfil for filter
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i <= this.length - 1; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4];
// const filterAry = nums.myFilter((num) => {
//   return num > 2;
// });
// console.log(filterAry);

///////---------------------------------------------------------------- 
//arr.reduce((acc,curr,i,ary)=>{},initialvalue)
// Array.prototype.myReduce = function (cb, initialValue) {
//   var accumulator = initialValue;
//   for (let i = 0; i <= this.length - 1; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }
//   return accumulator
// };

// const nums = [1, 2, 3, 4];

// const sum = nums.myReduce((acc, curr, i, ary) => {
//   return acc + curr;
// }, 0);
// console.log(sum)

///////----------------------------------------------------------------
//question1  map vs foreach
const arr = [2, 5, 3, 4, 7];
const mapresult = arr.map((ar) => {
  return ar + 3;
}).filter() //we can do in map 

//it doen not modify the original array
console.log(mapresult);

const foreachResult = arr.forEach((ar, i) => {
  ar[i] = ar + 3;
}); //it doen not give new ary  //but in foreach we can not use filter 
console.log(foreachResult);
console.log(arr);
