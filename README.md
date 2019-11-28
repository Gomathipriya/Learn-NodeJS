# Learn-NodeJS

Learn basics of node js from https://www.w3schools.com/nodejs/default.asp

## Promises

* Enhancement for callbacks in node js
* A Promise is a value returned by an asynchronous function to indicate the completion of the process
* To take care of callback hell (nested callbacks)
* Incase of action fullfilled promise gets resolved, incase of denial promise gets rejected.
```
var promise = doSomethingAync()
promise.then(onFulfilled, onRejected)

p.then(undefined, logError);
p.catch(logError);
//above both are identical
```
* Key aspect of promise is return value ( No concept of return value in call backs) - Return value gives more control over how the call back should be defined
* Promise will be in pening state when trying to access before it is resolved or rejected.
```
var myPromise = new Promise(function(resolve, reject){
   ....
})

var userDetails;
function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'https://api.github.com/users/narenaryan',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}
```
* Promise.all function which takes a list of promises in the given order and returns another promise which we can use a then method to conclude the logic

```
var message = "";

promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += "my";
        resolve(message);
    }, 2000)
})

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " first";
        resolve(message);
    }, 2000)
})

var printResult = (results) => {console.log("Results = ", results, "message = ", message)}

function main() {
    // See the order of promises. Final result will be according to it
    Promise.all([promise1, promise2]).then(printResult);
    Promise.all([promise2, promise1]).then(printResult);
    console.log("\"\"" + message);
}

main();

""
Results = ["my" , "my first"];
Results = ["my first", "my]
```
* Promise.all fails if any one of the Promise got rejected. It is an and operation between promise fulfillments

#### Nested Promise

* Then method itelf returns a promise - helps in nested promise or chaining (linking execution of methods to one another) 

```
var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        console.log(userDetails)
        //nested promise best to use
         var anotherPromise = getData(userDetails.followers_url).then(JSON.parse);
         return anotherPromise;
    }, function(err) {
        console.log(err);
    }).then(function(result) {
        // nested promise ( Not a best practise)
        console.log(result.public_gists + result.public_repos);
    })
```

#### Custom Promise

* Created by using node module 'q'
* "denodeify" method - will cause any function to become a function that returns promise
```
var Q = require('q');

function Add() {
  return "test";
}

var add_Promise = Q.denodeify(Add);

var promise = add_Promise();
promise.then(
  function(data){
    console.log(data);
  },
  function(err){
    console.log(err);
  }
)
```

### 3 state of promise

1. <strong> Pending </strong>- When the final value is not availabe yet
2. <strong> Fulfilled </strong> - When and if the final value becomes available
3. <strong> Rejected </strong> - if an error prevents final value from being determined


