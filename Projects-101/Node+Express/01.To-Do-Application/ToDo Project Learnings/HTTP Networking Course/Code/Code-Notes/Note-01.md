# JS URL Object

In JavaScript, the URL object is used for working with URLs (Uniform Resource Locators). It provides a convenient way to parse, construct, and manipulate URLs. The URL object is part of the Web Platform API and is supported in modern web browsers.

`Creating a URL Object:`
You can create a URL object by using the URL constructor:

```javascript
Copy code
    // Creating a URL object from a string
    const urlString = "https://www.example.com/path?query=value";
    const url = new URL(urlString);

    // Creating a URL object from another URL object
    const anotherURL = new URL(url);
```

**Properties of the URL Object:**
The URL object has several properties that allow you to access different components of the URL:

`url.href:` Returns the complete URL as a string.
`url.protocol:` Returns the protocol of the URL (e.g., "https:").
`url.host:` Returns the hostname and port of the URL.
`url.hostname:` Returns the hostname of the URL.
`url.port:` Returns the port number of the URL.
`url.pathname:` Returns the path of the URL.
`url.search:` Returns the query string of the URL (including the "?" character).
`url.hash:` Returns the fragment identifier of the URL (including the "#" character).
`url.origin:` Returns the origin of the URL (protocol, host, and port).

**Methods of the URL Object:**
The URL object also provides methods for modifying and working with URLs:

`url.searchParams:` Returns a URLSearchParams object that allows manipulation of the query parameters.
`url.searchParams.get(name):` Returns the value of the specified query parameter.
`url.searchParams.set(name, value):` Sets the value of a query parameter.
`url.searchParams.append(name, value):` Appends a new value to a query parameter.
`url.searchParams.delete(name):` Removes a query parameter.

`Example:`

```javascript
    const urlString = "https://www.example.com/path?query=value";
    const url = new URL(urlString);

    console.log(url.href);      // "https://www.example.com/path?query=value"
    console.log(url.hostname);  // "www.example.com"
    console.log(url.pathname);  // "/path"
    console.log(url.search);    // "?query=value"

    url.searchParams.set("newParam", "123");
    console.log(url.href);      // "https://www.example.com/path?query=value&newParam=123"
```

The URL object is useful when you need to work with URLs in a programmatic way, such as extracting or modifying specific components of a URL. Keep in mind that the URL object is not available in all JavaScript environments (e.g., Node.js), as it is primarily designed for web browsers.
