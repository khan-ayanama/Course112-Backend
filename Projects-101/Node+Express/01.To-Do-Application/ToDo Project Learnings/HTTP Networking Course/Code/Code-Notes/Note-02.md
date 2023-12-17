# Error Handling in JS

Error handling in JavaScript is crucial for building robust and reliable applications. JavaScript provides a set of mechanisms to handle errors and exceptions. Proper error handling helps developers identify and address issues, improving the overall stability of the code. Here are key concepts and techniques for error handling in JavaScript:

1. `Try...Catch Statement:`
The try...catch statement is used to catch and handle exceptions in JavaScript.

    ```javascript
        try {
        // Code that might throw an exception
        throw new Error("This is a custom error");
        } catch (error) {
        // Code to handle the exception
        console.error(error.message);
        } finally {
        // Code that will be executed regardless of whether an exception occurred
        }
    ```

2. `Throwing Custom Errors:`
Developers can throw custom errors using the throw statement.

    ```javascript
        function divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
        }
    ```

3. `Error Object:`
The Error object contains information about runtime errors. It has properties like name and message.

    ```javascript
        try {
        // Code that might throw an exception
        throw new Error("Custom error message");
        } catch (error) {
        console.error(error.name);     // Output: Error
        console.error(error.message);  // Output: Custom error message
        }
    ```

4. `Catch Multiple Errors:`
You can catch multiple types of errors in the same catch block.

    ```javascript
        try {
        // Code that might throw an exception
        } catch (error) {
        if (error instanceof TypeError) {
            console.error("Type error occurred");
        } else if (error instanceof RangeError) {
            console.error("Range error occurred");
        } else {
            console.error("An unexpected error occurred");
        }
        }
    ```

5. `Async/Await Error Handling:`
With asynchronous code, try...catch can be used with async/await.

    ```javascript
        async function fetchData() {
        try {
            let response = await fetch("https://api.example.com/data");
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        }
    ```

6. `Window.onerror:`
The window.onerror event handler can be used to catch unhandled errors globally.

    ```javascript
        window.onerror = function(message, source, lineno, colno, error) {
        console.error("Error occurred:", message, source, lineno, colno, error);
        return true; // Prevent default browser error handling
        };
    ```

7. `Promise Error Handling:`
With Promises, use the catch method to handle errors.

    ```javascript
        fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error fetching data:", error));
    ```

8. `Logging and Monitoring:`
Logging errors to the console or a server helps in debugging and monitoring application health.

    ```javascript
        try {
        // Code that might throw an exception
        } catch (error) {
        console.error("Error occurred:", error);
        // Log the error to a server or analytics platform
        }
    ```

Proper error handling involves a combination of try...catch blocks, custom error messages, and global error handling. Additionally, logging and monitoring play a crucial role in identifying and fixing errors in production environments. Tailoring error messages to provide meaningful information to developers aids in debugging and maintaining the codbase.
