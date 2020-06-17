# 3.6.1 - Promises
---
## Review

---

### Purpose of Node.JS

- Node is most often used to write web server code.
- Before Node, this used to be implemented in other _general purpose_ languages. (Python, Ruby, PHP, C++, etc)

---

- Node was designed to be able to process many requests (ex: browser requesting a page)
- This is done by running code in a single thread.
- It creates a separate thread for anything I/O. (I/O means Input / Output)
    - read/write to disk
    - send/receive from the network (get/post requests in express terminology)
    - get user input from the keyboard

---

_The separate threads are completely inaccessible to JavaScript._

- It allows JS to process requests, and offload much of the data processing to other servers/databases.
- To do all of this, Node makes use of **the call stack**.

---

### the Call Stack

- When calling a function, JS suspends the currently running code and "jumps" to the code of the function.
- When a `return` statement is encountered, JS needs to know where to _return_ to.
- JS keeps track of this in the call stack.

---

A stack is a data structure on which you can push items, and popping the stack will retrieve the last pushed item (LIFO, Last In, First Out) 

---

```js
function firstFunction() { throw new Error('Stack Trace Error'); }
function secondFunction() { firstFunction(); }
function thirdFunction() { secondFunction(); }

thirdFunction();
```

---

JavaScript only has **one** call stack.

- Since the call stack uses up memory, you can sometimes get an error: `RangeError: Maximum call stack size exceeded`.
- This is expecially prevalent with recurcive functions.

```js
// Example
function callingMyself()  {
    callingMyself();
}
callMyself();
```

---

### Blocking the call stack

Here is a typical request/response flow:

1. Receive an HTTP request from a client
2. Parse the HTTP request to understand it
3. Find out that the request is asking about the last 10 blog posts in our database
4. Make a request to the database (over the network)
5. **Wait** for the database response to come back
6. Parse the data and make it into an acceptable web format (HTML, JSON, XML)
7. Send the response to the client

_Where is there a potential problem?_

---

#### The Node solution

- Node has a solution that is similar to how we deal with event handlers
- This pattern is called a callback
- When a function goes and gets information, we attach a function to it 
- node takes this function and knows it will execute it later when the information is back
- This leads to a pattern that most developers don't like... Callback hell...

---


### Call backs

- By convention, all async functions will accept a callback as their **last argument**
- Async functions will call the provided callback _only once_
- By convention, callbacks to async functions will always take an error parameter in the **first position**
- Any "result" or "success" parameters will go afterwards
- Callbacks to async functions must check if the error parameter is "set". Usually it will be an `Error` object, but anything truthy should be treated as an error
- Effectively this means that asynchronous code using callbacks has to manually bubble errors up the asynchronous call "stack".

---

This creates code such as the following:

```js
fs.readFile("file.json", function (err, val) {
    if (err) {
        console.error("unable to read file");
    }
    else {
        try {
            val = JSON.parse(val);
            console.log(val.success);
        }
        catch (e) {
            console.error("invalid json in file");
        }
    }
});
```

<!-- 
The previous code contains a mix of synchronous (`JSON.parse`) and asynchronous (`fs.readFile`) code, showing the two modes of operation:
`JSON.parse` `return`s its value synchronously. It can cause a `SyntaxError` when parsing its input, so we have to use `try`/`catch` to handle the error
`fs.readFile` does not `return` anything! Instead, it accepts a callback function. When the disk access is done, Node calls the callback function and passes it the data. But because an error could have happened, and `throw` can't be used (no more call stack to catch it), the callback accepts an `err` as its first parameter. The callback handles the error by printing "unable to read file"
-->

---

Callback hell:

- It is confusing because we can't easily know if a function is sync or async
- The code quickly becomes spaghetti. Code should be a lasagna...
- It forces us to create awkward functions that have parameters that are not theirs -- `callback` for the async functions, and `err` for the callback

---

## `Promise`s: a solution to some of Node-style callbacks problems

- `Promise`s are an attempt at making our lives easier as developers
- Under the hood Node will execute your code the same way but Promises give us a easier time at understanding what will happen
- Cooking time example...

---

## Promises

- In order to receive the value from a promise, we have to call its `then` method, and pass a callback function to `then`.
- The `then` method makes the distinction between two callbacks: `successCallback` to which it passes a value in case of success, and `errorCallback` to which it passes an `Error` object.

---

- Initially the Promise is **Pending**.
- Eventually it will **settle** by either being 
    - **fulfilled** (success)
    - **rejected** (error)

---

- _Only one_ of `successCallback` or `errorCallback` will ever be called depending on the way the Promise settled.
- The`errorCallback` is optional
    - but without it, we need to handle the error ourselves somewhere down the `.then` chain

---

### `Promise` chaining:

- The `.then` method of a Promise returns a **new Promise**.
- The new Promise returned by calling `.then` will settle in the following way, depending on the return value of the `successCallback`:
    - is not a Promise, then the new Promise will be fulfilled with the return value of the `successCallback`.
    - is a Promise, the new Promise will settle in the same way as the Promise returned from the `successCallback`

_Since `.then` returns a new Promise, this means we can "chain" `.then` calls to create a waterfall of asynchronous operations._

---

- If an error is not handled in a certain `.then`, it will propagate to the new Promise created by `then`
- This means that we can write a chain of multiple `then`s with only `successCallback`s, and tack on a last `then` at the end with a `null` for `successCallback`, and a generic `errorCallback`.

_This pattern is so common that a shortcut method called `catch` exists which only takes an `errorCallback`_

---

The callback-based code above becomes:

```js
fs.readFile("file.json")
    .then(JSON.parse)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        if (error instanceof SyntaxError) {
            console.error("invalid json file");
        }
        else {
            console.error("unable to read file");
        }
    });
```

---

- chaining takes care of nested callbacks.
- By separating the success and error callbacks, we can more easily reuse functions like `JSON.parse`
- We don't have to bubble up errors manually anymore

---

