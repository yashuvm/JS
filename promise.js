//promises in js
//synchromises and asynchronously
//promises are asynchronous code

//synchromises

// console.log("Start")
// console.log("coder")
// console.log("finish")
//code is executed line by line

//async code
// console.log('start')
// setTimeout(()=>{
//     console.log("coder")
// },1000)

// console.log("finish")
//js is single threaded language it first executes synchronous code first then it executes asynchronous code.

// console.log("start");

// function importantAction(username) {
//   setTimeout(() => {
//     return `subscribe to ${username}`;
//   }, 1000);
// }

// const message = importantAction('coder');

// console.log(message)

// console.log("stop")
///start,undefined,stop

/////////////////////////////////////////////////////
// console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`subscribe to ${username}`);
//   }, 1000);
// }

// const message = importantAction("coder", function name(message) {
//   console.log(message);
// });

// console.log("stop");

///////////---------
//console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`subscribe to ${username}`);
//   }, 1000);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 1000);
// }

// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`share the video ${video}`);
//   }, 1000);
// }

// const message = importantAction("coder", function name(message) {
//   console.log(message);
//   likeTheVideo("js question", (action) => {
//     console.log(action);
//     shareTheVideo("share", (action) => {
//       console.log(action);     //this is called callback hell pyramid like structure
//     });
//   });
// });
// importantAction("coder", function name(message) {
//   console.log(message);
// });

// likeTheVideo("js question", (action) => {
//   console.log(action);
// });

//console.log("stop");

/////////////////////---------------------------Promise (The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.)
// console.log("start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("subscribe to coder");
//     else reject(new Error("why are you not subscribed to coder"));
//   }, 2000);
// });
// console.log(sub)   //promise pending it will be resolve after 2 sec
// sub
//   .then((res) => {
//     //if the promise if fulfilled the result is coming in then
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err); //if the promise is not fulfilled the result is coming to err
//   });

// console.log("end");

////////////////////////////////////////////////////////////////
// console.log("start");
// console.log(Promise.resolve("subscribe to coder"));   //it gives fulfilled promise

// console.log("end");

// /
// console.log("start");
// const sub = Promise.resolve("subscribe to coder");
// console.log(sub)
// console.log("end");

////////----------------------------------------------------------------
//promise->state(pending,resovle,reject)
//console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 100);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`share the video ${video}`);
    }, 1000);
  });
}

// importantAction("coder")
//   .then((res) => {
//     console.log(res);
//     likeTheVideo("like the vide").then((res_) => {
//       console.log(res_);
//       shareTheVideo("share the video").then((res__) => {
//         console.log(res__);                     //this is the same a callback hell
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//////another way to write a promise

//////so now we are used promise chaining
// importantAction("coder")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("like the video");
//   })
//   .then((res_) => {
//     console.log(res_);
//     return shareTheVideo("share the video");
//   })
//   .then((res__) => {
//     console.log(res__);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

////promise combinator (it helps us run more than once promise at a time than return a result according)
// Promise.all([
//   importantAction("coder"),
//   likeTheVideo("like the video"),
//   shareTheVideo("share the video"),
// ]).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err+ "   ERROR")
// })
//if any of the promise is failed then all the promise is failed
//it return a all fulfilled promise (all promise which is resolve)

///////////////////Promise race
//it return promise which is first fulfilled or rejecte it means the promise which resolve or reject fitst
// Promise.race([
//   importantAction("coder"),
//   likeTheVideo("like the video"),
//   shareTheVideo("share the video"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err+"  ERROR");
//   });

///////////Promise allsettled
//it return a array which is resolve and reject with the status  fulfilled and failed
//but is case of promise all it returns promise which is fulfilled if any promise is rejeected then it gives error
// Promise.allSettled([
//   importantAction("coder"),
//   likeTheVideo("like the video"),
//   shareTheVideo("share the video"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err + "  ERROR");
//   });

///////////////Promise any
//it only return a promise which is first fulfilled it not count rejected promise
//if all promise failed then it will be show rejected promise
//Promise.any([
//   importantAction("coder"),
//   likeTheVideo("like the video"),
//   shareTheVideo("share the video"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err + "  ERROR");
//   });

////////////--------------------async await
const result = async () => {
  try {
    const message1 = await importantAction("coder"); //it will wait untill promise gives state fulfilled or failed
    console.log(message1);
    const message2 = await likeTheVideo("like the video");
    console.log(message2);
    const message3 = await shareTheVideo("share the video");
    console.log(message3);
    //console.log({ message1, message2, message3 });
  } catch (err) {
    console.log(err + " ERROR ");
  }
};

//result();

//console.log("finish");
//////////--------------------------------
//Q:1
// console.log("start");   //js engine fitst execute synchronous code first then asyn code

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");    //start,1,end,2

//Q:2
// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(4)
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

//start,1,4,end,2

//Q:3
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(4)
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");    //start,1,4,end the code not gone in the then block coz promise have not resolve startement

//Q;4
// console.log("start");

// function call() {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// }

// console.log("middle");

// call().then((res) => {
//   console.log(res);
// });
// console.log("end");
//start,middle,1,end,sucess

//Q:5
// function job() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }

//  let promise = job();

// promise
//   .then(function () {
//     console.log("success 1");
//   })
//   .then(function () {
//     console.log("success 2");
//   })
//   .then(function () {
//     console.log("success 3");
//   })
//   .catch(function () {
//     console.log("ERROR 1");
//   })
//   .then(function () {
//     console.log("success 4");
//   });
//error 1 and success 4

//Q:6

function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (err) {
    console.log(err);
    return "Error";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (err) {
    console.log(err);
  });
//success, error ,Error

//Q:7
// function job(state) {
//   return new Promise((resolve, reject) => {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {           //1 (success)
//     console.log(data);
//     return job(true);
//   })
//   .then(function (data) {
//     if (data !== "victory") {    //2 data is success so if will throw and reject code not gone on return job true
//       throw "Defeat";
//     }
//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {       //3 (Defeat)
//     console.log(err);
//     return job(false);          
//   })
//   .then(function (data) {
//     console.log(data);          //
//     return job(true);
//   })
//   .catch(function (err) {       //4  ("error")
//     console.log(err);
//     return "Error";             //resolved promise 
//   })
//   .then(function (data) {
//     console.log(data);           //5 (Error)
//     return new Error("test");    //it is not rejected promise                       ///not returning promise
//   })
//   .then(function (data) {
//     console.log("Success", data.message);       //6 (success test)
//   })
//   .catch(function (err) {                   
//     console.log("Error", data.message);
//   });


//Q:8 
const firstPromise=new Promise((resolve,reject)=>{
    resolve("first")
})

const secondPromise=new Promise((resolve,reject)=>{
    resolve(firstPromise)
})

secondPromise.then(res=>{
    return res
}).then((res)=>{
    console.log(res)
})