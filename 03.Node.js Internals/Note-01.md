## NodeJS Release Cycle

The release cycle of Node.js consists of several different types of releases, including Long-Term Support (LTS) and Current releases. here's an overview of the Node.js release cycle:

### Long-Term Support (LTS) Releases

* LTS releases are stable and receive long-term support from the Node.js project. They are intended for production use in applications that require stability and reliability. Key points about LTS releases:

* LTS releases have a predictable release schedule, with a new LTS version typically being released every 30 months.
* LTS versions are supported for a total of 30 months, which includes 18 months of active support and 12 months of maintenance support.
During the active support phase, LTS versions receive regular updates, including bug fixes and security patches.
* The LTS release schedule typically designates one version as the "Active LTS" and another as the "Maintenance LTS," with the latter receiving only critical bug fixes and security updates.

### Current Releases

* Current releases are more cutting-edge and are intended for developers who want to experiment with new features, improvements, and changes. Key points about Current releases:

* Current releases are typically updated more frequently than LTS releases, with new versions every few months.

### Maintenance and Security Updates

Even after the active support phase of an LTS release ends, it enters a 12-month maintenance phase during which it continues to receive security updates and critical bug fixes. This ensures that users have time to upgrade to a newer LTS version.

## Node.js is considered cross-platform for several reasons

### JavaScript Language

Node.js is built on the JavaScript programming language, which is inherently cross-platform. JavaScript can run in web browsers on various operating systems and devices, making it a universal language for client-side and server-side development.

### Runtime Environment

Node.js provides a runtime environment for executing JavaScript code on the server-side, outside of web browsers. This environment is designed to be cross-platform, and Node.js itself is available for multiple operating systems, including Windows, macOS, and various Linux distributions.

### NPM (Node Package Manager)

NPM is a package manager that comes with Node.js. It allows developers to easily install, manage, and share libraries and modules written in JavaScript. Many of these packages are also designed to be cross-platform, so they can be used in Node.js applications on different operating systems without modification.

### Libuv Library

Node.js uses the Libuv library, which is responsible for handling I/O operations and providing an event-driven, non-blocking, and cross-platform API. This library abstracts the underlying operating system differences, allowing Node.js to work consistently across various platforms.

### Cross-Platform Development

Developers can write Node.js applications on one platform (e.g., Windows) and run them on other platforms (e.g., Linux or macOS) without major modifications. This is possible because Node.js abstracts many of the platform-specific details.

### Community and Ecosystem

* Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more.
* Node.js was built on top of Google's V8 JavaScript engine since it was open-sourced under the BSD (Berkeley Software Distribution) license.  
* Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.  
* The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Feathers.js, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others
* Node.js is supported across a number of cloud-hosting platforms like Jelastic, Google Cloud Platform, AWS Elastic Beanstalk, Joyent and others.

## Javascript Runtime

JavaScript runtime provides the infrastructure and environment for executing JavaScript code, whether it's in a web browser or on a server. Different runtimes have different capabilities and APIs, tailored to the specific needs of their respective domains (front-end or back-end development).

### Browser Runtime

Used for client-side web development to create dynamic and interactive web pages. It is responsible for rendering web content, handling user interactions, and making web applications responsive.

### Node.js Runtime

Used for server-side development, allowing you to build web servers, APIs, command-line tools, and other server-based applications. It's particularly well-suited for building scalable and high-performance applications.

## Libuv

Libuv is a library in computer programming that provides a platform-independent abstraction layer for asynchronous I/O (input/output) operations. It serves as a critical component of various software projects, most notably Node.js, and plays a crucial role in enabling the asynchronous, non-blocking I/O operations that are characteristic of many modern applications. Let me explain further, Boss:

### Asynchronous I/O

One of the primary purposes of libuv is to enable asynchronous I/O operations in software applications. Asynchronous I/O allows a program to continue executing other tasks while waiting for potentially time-consuming I/O operations, such as file read/write or network communication, to complete. This improves the efficiency and responsiveness of applications, especially in scenarios where multiple I/O operations need to be managed concurrently.

### Cross-Platform Compatibility

Libuv is designed to be platform-independent, meaning it abstracts the differences in I/O handling across various operating systems (e.g., Windows, macOS, Linux). This makes it easier for developers to write code that works consistently across different platforms without having to write platform-specific code.

### Event Loop

Libuv includes an event loop, which is a fundamental component of many asynchronous applications. The event loop manages and schedules asynchronous tasks, handling events like I/O completions, timers, and signals. This event-driven model is at the heart of many modern applications and is a key feature of Node.js.

### Networking

Libuv also provides networking capabilities, making it possible to create network servers and clients that can handle multiple connections concurrently. This is particularly important for building scalable networked applications.

### Used in Node.js

Perhaps the most well-known use of libuv is in Node.js. Node.js is a JavaScript runtime environment that is renowned for its asynchronous, non-blocking I/O capabilities, and libuv is the underlying library that makes this possible. Node.js leverages libuv's event loop and I/O abstractions to enable efficient, high-performance server-side JavaScript programming.

* Node.js uses libuv under the hood to handle asynchronous events. Libuv is an abstraction layer for network and file system functionality on both Windows and POSIX-based systems such as Linux, macOS, OSS on NonStop, and Unix.
* Node.js relies on nghttp2 for HTTP support. As of version 20, Node.js uses the ada library which provides up-to-date WHATWG URL compliance. As of version 19.5, Node.js uses the simdutf library for fast Unicode validation and transcoding.

## Package Management

* npm is the pre-installed package manager for the Node.js server platform. It installs Node.js programs from the npm registry, organizing the installation and management of third-party Node.js programs. Packages in the npm registry can range from simple helper libraries such as Lodash to task runners such as Grunt.

## Is web Browser Javascript runtime

Web browser run with V8 engine and also provides some extra functions.

* Node comes with own API which provides it's own exclusive properties.
* NodeJS have global object like windows object present in browser but both of them are very different.

## REPL

REPL stands for Read Evaluate Print Loop, and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. The REPL session provides a convenient way to quickly test simple JavaScript code.

## Process object of node

* The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
* The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed.
* The second element will be the path to the JavaScript file being executed.
* The remaining elements will be any additional command-line arguments.

```js
    // user input in node
    const mission = process.argv[2];

    if (mission === "learn") {
    console.log("Time to write some Node Code!");
    } else {
    console.log(`Is ${mission} really more fun?`);
    }

    // Terminal to run index.js file with argument
        node <file_name> <argument>
        
        node index.js learn 
```

## Node vs Javascript

NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language.

## NodeJS Modules

These core modules provide essential functionality for working with JavaScript on the server-side. Some of the core modules that are installed automatically with Node.js include:

`fs (File System)`: This module allows you to work with the file system, including reading and writing files, creating directories, and more. (For more info refer to the special tutorial)

`http`: The HTTP module is essential for building web servers and making HTTP requests. It provides the tools needed to handle HTTP requests and responses.

`url`: This module helps in parsing and formatting URLs, making it easier to work with URLs in your applications.

`path`: The path module provides utilities for working with file and directory paths. It's helpful for manipulating file paths in a cross-platform way.

`os (Operating System)`: This module provides information about the host operating system, such as CPU architecture and memory usage.

`util`: The util module contains various utility functions that can be helpful for different tasks in your applications.

`events`: Node.js is event-driven, and the events module provides an event emitter that allows you to create and handle custom events.

`stream`: The stream module is used for working with streams of data, which is crucial for handling I/O operations efficiently.

`querystring`: This module is useful for parsing and formatting query strings, often used in web applications.

`crypto`: The crypto module provides cryptographic functionality, including encryption, decryption, hashing, and more.
