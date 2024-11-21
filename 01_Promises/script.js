// Promises.

/*
Explanation: Object in js that represents the eventual completion of the asynchronous operation. Promises are used to handle async tasks such as API calls, file system operations, and network requests.

States of a Promise:

1. Pending
2. Fulfilled
3. Rejected

Why Use Promises?
1. Promises improve readability and structure for asynchronous code.
2. They avoid nested callbacks.
3. They make error handling more consistent.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 100);
  });
  

// Promise.all

/*
Promise.all is a method that takes an array of promises and returns a single promise. 
This returned promise resolves when all the input promises are resolved or rejects if any one of the input promises is rejected.

Syntax
Promise.all(iterable)

How It Works
1. It waits for all promises in the array to either resolve or reject.
2. If all promises resolve, Promise.all resolves with an array of their values, in the same order as the input array.
3. If any promise rejects, Promise.all immediately rejects with the reason of the first promise that failed.


Important Notes

1. Order Matters: Even if promises resolve at different times, Promise.all preserves the order of the input promises in its resolved values.
2. Short-Circuit on Rejection: If any promise rejects, Promise.all immediately rejects, and the remaining promises are not waited for.
3. Empty Array: If Promise.all([]) is called with an empty array, it resolves immediately with an empty array.
*/


// Resolveing all promises
const promise1 = Promise.resolve(1) // new keyword will not be used here
const promise2 = Promise.resolve(2)
const promise3 = Promise.resolve(3)

const promisesArr = [promise1, promise2, promise3]

const promiseAll = Promise.all(promisesArr)
                    .then(console.log)
                    .catch(console.log);


// Handling rejections
const p1 = new Promise.resolve(1)                    
const p2 = new Promise.reject(2)                    
const p3 = new Promise.resolve(3)                    

const allPromises = Promise.all([p1,p2,p3]).then(console.log).catch(console.log)

// Fetching multiple APIs
const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1");
const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
const fetchComments = fetch("https://jsonplaceholder.typicode.com/comments");

Promise.all([fetchUser, fetchPosts, fetchComments])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
        console.log("User:", data[0]);
        console.log("Posts:", data[1]);
        console.log("Comments:", data[2]);
    })
    .catch(error => console.log(error))


// TODO - Promise.AllSettled