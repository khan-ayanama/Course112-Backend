# Node Fundamentals

## Node Release Cycle

The Node.js release cycle consists of different stages, allowing developers to access new features, improvements, and bug fixes. Here's a general overview of the Node.js release process:

`Long-Term Support (LTS) Versions:`

* Node.js has LTS versions that are supported for an extended period, usually for 30 months. These versions are ideal for production environments where stability and security are crucial.
* LTS versions receive regular updates, including bug fixes, security patches, and performance improvements.
* Major LTS versions are typically released every two years.

`Current Versions:`

* Current versions of Node.js include the latest features and experimental technologies. These versions are released more frequently, approximately every six months.
* Developers can use current versions to experiment with cutting-edge features, but they might not be as stable as LTS versions.

`Release Process:`

* The Node.js project follows a predictable release schedule. New features and changes are introduced in the current branch.
* After a period of testing and stabilization, a new LTS version is cut from the current branch. This LTS version undergoes rigorous testing before being officially released.

`Release Schedule:`

* Node.js follows a time-based release schedule, meaning that new releases occur on a fixed timeline rather than when specific features are ready.
* The exact dates for releases can be found on the official Node.js website or GitHub repository.

`Semventic Versioning:`

* Node.js follows Semantic Versioning (Semver), which means that each release is assigned a version number in the format of MAJOR.MINOR.PATCH.
* MAJOR version changes indicate incompatible API changes.
* MINOR version changes add new features in a backward-compatible manner.
* PATCH version changes include backward-compatible bug fixes.

## REPL (Read Eval Print Loop)

In Node.js, the REPL stands for Read-Eval-Print Loop. It's an interactive programming environment that allows you to execute JavaScript code and see the results immediately. Here's how you can use the Node.js REPL:

`Accessing the REPL:`

You can start the Node.js REPL by opening a terminal or command prompt and typing node without any arguments. Press Enter, and you'll enter the REPL mode.

```git
     node
```

`Basic Usage:`

Once you're in the REPL, you can type JavaScript expressions, statements, and declarations directly.
For example, you can perform basic arithmetic operations:

```git
    > 2 + 2
    4
```

You can declare variables and use them in subsequent expressions:

```javascript
    > let name = "Boss"
    undefined
    > "Hello, " + name
    'Hello, Boss'
```

`Multiline Commands:`

You can input multiline commands in the REPL. For multiline input, if the expression is not yet complete, the REPL will show ... to indicate that it's waiting for more input.

```javascript
    > function greet() {
    ... console.log("Hello, Boss!");
    ... }
    undefined
    > greet()
    Hello, Boss!
    undefined
```

`Special Commands:`

The REPL provides special commands prefixed with a dot (.) to perform various tasks. For example, you can use .help to see the list of special commands available.

```git
    > .help
    .break    Sometimes you get stuck, this gets you out
    .clear    Alias for .break
    .editor   Enter editor mode
    .exit     Exit the repl
    .help     Print this help message
    .load     Load JS from a file into the REPL session
    .save     Save all evaluated commands in this REPL session to a file
```

## Node Process object

In Node.js, the process object is a global object that provides information and control over the current Node.js process. It allows you to interact with the operating system, manage environment variables, and control the flow of the program. Here are some common properties and methods provided by the process object:

### Properties

`process.argv:`

An array containing the command-line arguments passed to the Node.js process. The first element is the `path` to the Node.js executable, and the second element is the `path to the script file` being executed.

```javascript
    Copy code
    console.log(process.argv);
    // Output: [ 'path/to/node', 'path/to/yourscript.js', arg1, arg2, ... ]
```

`process.env:`

An object containing the user environment. You can access environment variables using this property.

```javascript
    console.log(process.env.HOME);
    // Output: /Users/boss (example value)
```

`process.pid:`

The process ID of the current Node.js process.

```javascript
    console.log(process.pid);
    // Output: Process ID, e.g., 12345
```

`process.platform:`

A string indicating the operating system platform on which the Node.js process is running (e.g., 'darwin', 'win32', 'linux').

```javascript
    console.log(process.platform);
    // Output: darwin (on macOS, for example)
```

### Methods

`process.exit([code]):`

Exits the process with an optional exit code. If no exit code is provided, the process exits with code 0 indicating success.

```javascript
    process.exit(1); // Exits with code 1 indicating an error
```

`process.cwd():`

Returns the current working directory of the Node.js process.

```javascript
    console.log(process.cwd());
    // Output: Current working directory path
```

`process.chdir(directory):`

Changes the current working directory of the Node.js process to the specified directory.

```javascript
    process.chdir('/path/to/new/directory');
```

`process.on(event, callback):`

Allows you to register event handlers for various process events. For example, you can handle 'exit', 'SIGINT', and 'uncaughtException' events.

```javascript
    process.on('exit', (code) => {
        console.log(`Process exited with code: ${code}`);
    });
```

## First Program of Node

```js
    // WITHOUT USER INPUT
    // const mission = 'learn';

    // if(mission=='learn'){
    //     console.log('Time to write some code')
    // }else{
    //     console.log(`Is ${mission} really a fun`)
    // }

    // WITH USER INPUT
    // Taking input by user at 2nd index
    const mission = process.argv[2];

    if(mission=='learn'){
        console.log('Time to write some code')
    }else{
        console.log(`Is ${mission} really a fun`)
    }
```

## Node vs Browser

Node.js is ideal for server-side development, providing access to the operating system and enabling tasks like networking and file I/O, while web browsers use JavaScript to enhance user interfaces and create interactive web applications within a secure, sandboxed environment. Both environments complement each other in modern web development, allowing developers to create powerful and interactive web applications

## Global Object of Node

In Node.js, the global object is a global scope object that provides variables and functions that are available in all modules without the need to require them explicitly. It is similar to the window object in web browsers but is specific to the Node.js environment.

Here are a few key points about the global object in Node.js:

`Global Variables:`

Variables declared without the var, let, or const keyword are automatically added to the global object and are accessible throughout the application.

```javascript
    global.myVariable = 'This is a global variable';
    console.log(myVariable); // Output: This is a global variable
```

`Global Functions:`

Functions declared without a specific scope become properties of the global object and can be accessed globally.

```javascript
    global.myFunction = function() {
        console.log('This is a global function');
    };

    myFunction(); // Output: This is a global function
```

`Not Recommended for Storing Application State:`

While the global object can be convenient, it's generally not recommended to use it to store application state. Global variables can make code harder to maintain and debug, especially in large applications.

`Node.js Modules:`

In Node.js, each module has its own scope, and variables declared within a module are not added to the global object automatically. They are scoped to the module.

```javascript
    // module.js
    let moduleVariable = 'This is a module variable';
    console.log(global.moduleVariable); // Output: undefined
```

To make variables or functions available across modules, you should use module exports and require statements rather than relying on the global object.

```javascript
    // module1.js
    module.exports = {
        myVariable: 'This is exported from module1'
    };
```

```javascript
    // module2.js
    const module1 = require('./module1');
    console.log(module1.myVariable); // Output: This is exported from module1
```
