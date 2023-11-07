# Tutorial-03

## Observer Design pattern

The Observer design pattern is a behavioral design pattern used in software engineering. It defines a one-to-many dependency between objects so that when one object (the subject) changes its state, all its dependents (observers) are notified and updated automatically. This pattern is also known as the Publish-Subscribe pattern.

* Here's an explanation of the key components and how the Observer pattern works:

### Components

`Subject:` This is the object that is being observed. It maintains a list of observers and provides methods to attach, detach, and notify observers when its state changes.

`Observer:` Observers are objects that want to be notified when the state of the subject changes. They typically implement an update method that is called by the subject when a change occurs.

### How it Work

1. The subject maintains a collection (usually a list or set) of observers.

2. Observers register themselves with the subject by attaching to it. They can also detach from the subject if they no longer want to be notified.

3. When the subject's state changes, it iterates through its list of observers and calls the update method on each observer.

4. The observers, upon receiving the update notification, can take appropriate action based on the changes in the subject's state.

### Benefits

* `Loose coupling`
    The Observer pattern promotes loose coupling between subjects and observers. Subjects don't need to know the specific classes of their observers, and vice versa.

* `Extensibility`
    It allows for easy addition of new observers without modifying the subject. You can introduce new observer classes without changing the existing code.

### Use Cases

The Observer pattern is commonly used in scenarios where changes in one object need to trigger actions in other objects, such as:

* `GUI frameworks`
    Updating UI components when underlying data changes.
* `Event handling`
    Notifying event listeners when events occur.
* `Distributed systems`
    Propagating changes across distributed components.

## Node Event Emitter

The Node.js EventEmitter is a core module that provides an implementation of the Observer design pattern. It allows you to create custom events and register listeners (observers) for those events. When an event occurs, all registered listeners are notified and called asynchronously. This mechanism is widely used in Node.js for handling asynchronous operations, such as handling HTTP requests, file I/O, and more.

```js
    const EventEmitter = require("events");

    // Creating an instance of Event Emitter
    const celebrity = new EventEmitter();


    // Regestring a listener for celebrity With one argument in emit
    celebrity.on("race win", () => {
    console.log("Congratulations! You are GOAT");
    });

    celebrity.on("race win", () => {
    console.log("Boo I could have done better than that");
    });

    // Emit the celebrity event
    celebrity.emit("race win");
    celebrity.emit("race lost");

    // Regestring a listener for celebrity With Two Arguments
    celebrity.on("race", (data) => {
    if (data == "win") {
        console.log("Congratulations! You are GOAT");
    }
    });
    celebrity.on("race", (data) => {
    if (data == "win") {
        console.log("Boo I could have done better than that");
    }
    });
    
    // Emit the celebrity event
    celebrity.emit("race", "win");
```

## Remove Listener in Event emitter

You can use the removeListener method to remove a specific event listener from an EventEmitter instance. Here's the syntax:

```js
    emitter.removeListener(eventName, listenerFunction);
```

`eventName`: This is a string that specifies the name of the event from which you want to remove the listener.

`listenerFunction`: This is the function that you want to remove as the event listener for the specified event.

```js
    const EventEmitter = require('events');

    const myEmitter = new EventEmitter();

    // Define an event listener
    function greetingListener(name) {
    console.log(`Hello, ${name}!`);
    }

    // Register the event listener
    myEmitter.on('greet', greetingListener);

    // Emit the event, which triggers the listener
    myEmitter.emit('greet', 'Boss'); // Output: Hello, Boss!

    // Remove the event listener
    myEmitter.removeListener('greet', greetingListener);

    // Emit the event again, but the listener has been removed
    myEmitter.emit('greet', 'Another Boss'); // No output
```

In this example, we first register an event listener greetingListener for the 'greet' event using myEmitter.on(). When we emit the 'greet' event, it triggers the listener and logs a greeting message.

Afterward, we use removeListener to remove the greetingListener from the 'greet' event. When we emit the 'greet' event again, it no longer triggers the removed listener, so there is no output.

It's important to note the following:

You need to pass the exact same function reference that was originally registered to remove the listener correctly. If you pass a different function with the same name, it won't work.

If you have multiple listeners for the same event and you want to remove all of them, you may need to call removeListener multiple times, once for each listener you want to remove.

If you want to remove all listeners for a specific event, you can use the removeAllListeners(eventName) method without specifying a particular listener function.

```js
    myEmitter.removeAllListeners('greet');
    That will remove all listeners for the 'greet' event.
```

## Require Function

In Node.js, the require() function is a core part of the CommonJS module system, which is used for including and importing external modules or libraries into your Node.js application. It's the primary way to access and use external code in your Node.js programs.

* Here's how the require() function works in Node.js:

* Module Loading
    When you call require('module-name'), Node.js searches for the specified module in the following order:

* Core modules
    These are built-in modules provided by Node.js itself.

* File or folder modules
    You can specify a local module by providing the path to a JavaScript file or a folder containing an index.js file.

* External modules
    Modules installed via npm (Node Package Manager) or Yarn.

* Caching
    Once a module is loaded, Node.js caches it. Subsequent calls to require('module-name') for the same module will return the cached module object. This caching improves performance and ensures that a module is only loaded once, even if it's required in multiple places.

## Making HTTP Request

```js
    // Importing http module
    const http = require("http");

    // Requesting google by requestmethod you can also use https
    const req = http.request("http://www.google.com", (res) => {
        // When data response received
        res.on("data", (response) => {
            console.log(`data from server: ${response}`);
        });
        
        // When end response recievied
        res.on("end", () => {
            console.log("Request ends here");
        });
    });

    // Everytime you make request call you need to call end() function and when you call function by http.get you don't need it.
    req.end();
```

## Why Use Modules

1. Reuse existing code
2. Organize your code
3. Abstraction of code

## Creating our own modules

Creating your own module in Node.js is a fundamental aspect of building modular and maintainable Node.js applications. Modules allow you to encapsulate and organize your code into reusable components. Here's how you can create and use your own module in Node.js:

### Step 1: Create a JavaScript File

First, create a JavaScript file that will serve as your module. This file can contain functions, objects, or variables that you want to make available to other parts of your application. Here's an example of a simple module called myModule.js:

```js
    // myModule.js

    function greet(name) {
    return `Hello, ${name}!`;
    }

    module.exports = greet;
```

In this example, the myModule.js file exports a single function called greet using module.exports.

### Step 2: Use Your Module

Next, create another JavaScript file in the same directory (or another directory, if you specify the path) where you want to use your module. You can use the require() function to load and use your custom module. Here's an example of using the myModule module in another file, app.js:

```js
    // app.js

    const greet = require('./myModule');

    console.log(greet('Alice')); // Outputs: Hello, Alice!
```

## Here's an example of a module that exports multiple functions and an object

```js
    // myModule.js

    function greet(name) {
    return `Hello, ${name}!`;
    }

    function farewell(name) {
    return `Goodbye, ${name}!`;
    }

    const constants = {
    PI: 3.14159265359,
    E: 2.71828,
    };

    module.exports = {
    greet,
    farewell,
    constants,
    };
```

You can then use these functions and the constants object in your application by importing them with require().
