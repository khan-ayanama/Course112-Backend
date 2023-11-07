# Notes- 03

## CommonJS vs Ecmascript Modules

* When we use relative file path for js file "./index.js" you need to specify the extension.
* When you want to import file in js you need to define it's type:module in package.json or set the extensions of file as ".mjs"

## Module Caching

NodeJS Caches the module first time it is imported in the file if you try to import second time the functions from the same module it will not import from that module but from the cache created by the node when first time the functions from same module was imported.

## index.js

It is special case in node if index.js file in folder that folder will be treated as module after adding we can use require function

## Should we use index.js

Generally we should not use index.js

## Node Package Manager(npm)

It serves several essential purposes:

### Package Management

NPM is primarily used for managing packages (libraries and modules) in Node.js. It allows you to easily install, update, and remove packages that your project depends on. You can define these dependencies in a package.json file.

### Dependency Resolution

NPM resolves and manages the dependencies of your project, ensuring that the correct versions of packages are installed and that there are no conflicts between them. This helps maintain consistency and stability in your project.

### Script Execution

NPM lets you define and run custom scripts in your project. These scripts can automate various tasks such as testing, building, deployment, and more. You can configure these scripts in your package.json file.

### Version Control Integration

Many developers use NPM to manage their project's dependencies and scripts. NPM makes it easy to share your project with others by including a package.json file in your version control system (e.g., Git). This allows others to recreate the same development environment with a simple npm install command.

### Global Packages

NPM also allows you to install packages globally on your system. These global packages can provide command-line tools or utilities that you can use across multiple projects.  

Here are some commonly used NPM commands:

* npm init
  * Initializes a new Node.js project and creates a package.json file interactively.
* npm install `<package-name>`
  * Installs a package and adds it as a dependency in your package.json.
* npm install -g `<package-name>`
  * Installs a package globally.
* npm install --save-dev `<package-name>`
  * Installs a package as a development dependency.
* npm update `<package-name>`
  * Updates a package to the latest version.
* npm uninstall `<package-name>`
  * Removes a package from your project.
* npm run`<script-name>`
  * Executes a custom script defined in your package.json.
* NPM is a critical tool for Node.js development, and it plays a central role in managing dependencies and automating various aspects of the development * workflow. It's an essential part of building and maintaining Node.js applications and modules.

## module vs package

* A module in Node.js refers to a single JavaScript file. It can contain functions, objects, or other code that you can reuse in your application.
* A package in Node.js is a directory that contains a special file called package.json along with one or more modules.

## Third pary library

Third-party libraries in Node.js are external packages or modules created by developers or organizations other than the core Node.js maintainers. These libraries extend the functionality of Node.js by providing pre-built solutions for various tasks, such as handling HTTP requests, working with databases, managing authentication, and much more. Here's how you can use third-party libraries in Node.js:

1. Installing Third-Party Libraries:

    * To use a third-party library in your Node.js project, you first need to install it using npm (Node Package Manager) or yarn (another package manager for Node.js).
    * Use the npm install `<package-name>` or yarn add `<package-name>` command to install the library. Replace `<package-name>` with the actual name of the library you want to install.

2. Importing and Using Third-Party Libraries:

    * After installing the library, you can import and use it in your Node.js code.
    * Use the require function to import the library, just like you would with built-in Node.js modules.
    * Then, you can use the functions, classes, or objects provided by the library in your code.

    * Here's a simple example of how to install and use a third-party library like axios, which is commonly used for making HTTP requests:

        ```js
            // 1. Install axios
            // npm install axios

            // 2. Import axios
            const axios = require('axios');

            // 3. Use axios to make an HTTP request
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        ```

3. Managing Dependencies:

    * When you install a third-party library, it's added as a dependency to your project's package.json file.
    * It's essential to keep track of your project's dependencies, as this helps ensure that other developers working on your project or deploying it to different environments can install the required dependencies easily.

4. Documentation:

    * Most third-party libraries come with documentation that explains how to use them, including examples and usage guidelines. Be sure to refer to the library's documentation to understand its features and capabilities.

5. Version Control:

    * When working on a Node.js project that uses third-party libraries, it's common practice to include the node_modules directory (where the dependencies are stored) in your .gitignore file. This prevents you from accidentally committing a large number of library files to your version control system.
    * Using third-party libraries in Node.js can significantly speed up development by providing ready-made solutions for common tasks. However, it's essential to choose reputable and well-maintained libraries, keep them updated, and be aware of any licensing considerations when using external code in your projects.

## Vulneribilities in Dependencies

* We should always keep updated our dependency
* `<npm audit fix>`  to fix the vulnerbilities basically updating the dependency

## Nodemon

* It is used to automatically run file in real time like HMR

    ```js
        nodemon file.js
    ```
