# Node Module

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

## CommonJS vs Ecmascript Modules

* When we use relative file path for js file "./index.js" you need to specify the extension.
* When you want to import file in js you need to define it's type:module in package.json or set the extensions of file as ".mjs"

## Module Caching

NodeJS Caches the module first time it is imported in the file if you try to import second time the functions from the same module it will not import from that module but from the cache created by the node when first time the functions from same module was imported.

## index.js

It is special case in node if index.js file in folder that folder will be treated as module after adding we can use require function

## Should we use index.js

Generally we should not use index.js

