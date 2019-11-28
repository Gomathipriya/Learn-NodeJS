# Learn-NodeJS

Learn basics of node js from https://www.w3schools.com/nodejs/default.asp

## Promises

* Enhancement for callbacks in node js
* A Promise is a value returned by an asynchronous function to indicate the completion of the process
* To take care of callback hell (nested callbacks)
```
var promise = doSomethingAync()
promise.then(onFulfilled, onRejected)
```
* Key aspect of promise is return value ( No concept of return value in call backs) - Return value gives more control over how the call back should be defined

#### Nested Promise

* Then method itelf returns a promise - helps in nested promise or chaining (linking execution of methods to one another) 

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
