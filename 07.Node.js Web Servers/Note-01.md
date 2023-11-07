# Web Servers

`DNS Server:` Domain Name Server

## IP Address

An IP address (Internet Protocol address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. IP addresses serve two main functions: identifying the host or network interface, and providing the location of the host in the network.

There are two types of IP addresses:

`IPv4 Address:` IPv4 addresses are 32-bit numerical addresses written as four sets of numbers separated by periods (e.g., 192.168.0.1). Each set of numbers can range from 0 to 255, providing a total of approximately 4.3 billion unique addresses. However, due to the growth of the internet, IPv4 addresses are becoming scarce.

`IPv6 Address:` IPv6 addresses are 128-bit numerical addresses written in hexadecimal format and separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). IPv6 was introduced to address the limitations of IPv4 and provides an astronomically large number of unique addresses.

IP addresses are essential for devices to communicate over a network. They are used for tasks such as sending and receiving data packets, identifying the source and destination of network traffic, and routing data across the internet.

## HTTP Request

HTTP (Hypertext Transfer Protocol) requests are a fundamental part of web development. They are the means by which web browsers and other applications communicate with web servers. HTTP requests are used to request data from a specified resource and can also be used to send data to a server. There are several types of HTTP requests, each serving a different purpose:

`GET:` GET requests are used to retrieve data from the specified resource. When you type a URL into your browser and hit enter, a GET request is sent to the server, and the server responds by sending back the requested web page or resource.

Example using Node.js and the axios library:

```javascript
    const axios = require('axios');

    axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
```

`POST:` POST requests are used to submit data to be processed to a specified resource. This is often used when submitting form data or uploading a file.

Example using Node.js and axios:

```javascript
    const axios = require('axios');

    axios.post('https://api.example.com/data', {
    key: 'value',
    anotherKey: 'anotherValue'
    })
    .then(response => {
    console.log(response.data);
    })
    .catch(error => {
    console.error(error);
    });
```

`PUT:` PUT requests are used to update a resource or create a new resource if it does not exist at the specified URL.

`DELETE:` DELETE requests are used to request the removal of a resource.

Example using fetch API in a browser environment:

```javascript
    fetch('https://api.example.com/resource', {
    method: 'DELETE'
    })
    .then(response => {
    console.log('Resource deleted successfully');
    })
    .catch(error => {
    console.error('Error deleting resource:', error);
    });
```

`PATCH:` PATCH requests are used to apply partial modifications to a resource. This is useful when you want to update only specific fields of a resource without affecting the rest of it

## HTTP Response

HTTP responses are the counterpart to HTTP requests. When a client sends an HTTP request to a server, the server processes the request and sends back an HTTP response to the client. The response contains information about the request's status and may also include the requested data or additional information. Here's a breakdown of an HTTP response:

### Status Code

The status code indicates the result of the HTTP request. Status codes are three-digit numbers that fall into five classes:

`1xx (Informational):` Request received, continuing process.
`2xx (Successful):` The request was successfully received, understood, and accepted.
`3xx (Redirection):` Further action needs to be taken to complete the request.
`4xx (Client Errors):` The request contains bad syntax or cannot be fulfilled by the server.
`5xx (Server Errors):` The server failed to fulfill a valid request.

### Headers

Headers provide additional information about the server's response, such as content type, content length, and caching instructions.

### Message Body

The message body contains the data or resource requested by the client. Not all responses include a message body, especially for responses with status codes 1xx, 204 (No Content), or 304 (Not Modified).

Here's an example of an HTTP response:

```css
    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: 56

    {
    "status": "success",
    "message": "Resource retrieved successfully"
    }
```

In this example:

`Status Code:` 200 OK indicates that the request was successful.
`Content-Type:` application/json specifies that the content in the message body is in JSON format.
`Content-Length:` 56 indicates the length of the message body in bytes.
`Message Body:` Contains a JSON object with a status message.

When working with HTTP responses in programming, you typically handle the response status code and process the response body according to your application's logic. In JavaScript, when using the Fetch API to make an HTTP request, you can handle the response as follows:

```javascript
    fetch('https://api.example.com/data')
    .then(response => {
        if (response.ok) {
        return response.json(); // Parse the JSON-formatted response
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => console.log(data)) // Handle the parsed data
    .catch(error => console.error(error)); // Handle errors during the fetch
```
