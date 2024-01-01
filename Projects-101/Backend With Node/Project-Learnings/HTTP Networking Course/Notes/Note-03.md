# URI & URLs

URI (Uniform Resource Identifier) is a string of characters that identifies a particular resource. The term "URI" encompasses both URLs (Uniform Resource Locators) and URNs (Uniform Resource Names). URIs provide a standardized way to uniquely identify and locate resources on the internet or within other contexts.

**Components of a URI:**

`Scheme:`
The scheme indicates the protocol or method used to access the resource. Common schemes include "http," "https," "ftp," "mailto," and others.

`Authority:`
For URLs, the authority typically includes the hostname and, optionally, the port number. In the URI `"https://www.example.com:8080/path,"` "www.example.com:8080" is the authority.

`Path:`
The path specifies the location of the resource on the server. It may include a hierarchical structure representing directories or segments of the resource.

`Query:`
The query component provides additional parameters or data to be sent to the server. It starts with a "?" character and consists of key-value pairs.

`Fragment:`
The fragment identifier, often preceded by a "#", specifies a specific section within the resource. It is commonly used in web pages to navigate to a specific section.

**Examples of URIs:**

`URL (Uniform Resource Locator):`

`Example:` `https://www.example.com/path?query=value`
Here, "https" is the scheme, "www.example.com" is the authority, "/path" is the path, and "query=value" is the query.
URN (Uniform Resource Name):

`Example:` urn:isbn:0451450523
URNs are used to identify resources by name in a specific namespace. In this example, the URN identifies a book by its ISBN.

## URI vs. URL vs. URN

`URI (Uniform Resource Identifier):`
The generic term encompassing both URLs and URNs.

`URL (Uniform Resource Locator):`
A type of URI that specifies how to access a resource, including the protocol, authority, path, query, and fragment.

`URN (Uniform Resource Name):`
A type of URI that identifies a resource by name in a specific namespace. URNs are intended to be persistent and location-independent.

**URI Usage:**

`Web Addresses (URLs):`
Most commonly, URIs are used as URLs to locate and access resources on the World Wide Web.

`Identifiers (URNs):`
URNs are used for persistent identification, often in namespaces that guarantee uniqueness.
URIs play a fundamental role in enabling the identification and access of resources on the internet, providing a standardized way for systems and applications to reference and interact with various types of resources.

```js
    URI: `http://example.com/book/#da43d45`
    URL: `http://example.com/book`
    URN: `#da43d45`
```

## Query Parameter

Query parameters are components of a URL that provide additional information about a request. They are commonly used to pass data to a web server or to modify the behavior of a web page. Query parameters are appended to the end of a URL and are separated from the base URL by a question mark (?). Multiple parameters are separated by ampersands (&).

Here's a breakdown of the components of a URL with query parameters:

`https://example.com/path?name=value&color=blue`

`https://example.com:` The base URL.
`/path:` The path that specifies the location of the resource on the server.
`?:` Indicates the start of the query parameters.
`name=value:` The first query parameter, where name is the parameter name and value is its value.
`&:` Separates multiple query parameters.
`color=blue:` The second query parameter, specifying the color as blue.

**Use Cases and Examples:**

`Passing Data to a Server:`

`https://api.example.com/data?category=books&format=json`
`Explanation:`
The query parameters category=books and format=json are used to specify the category of data (books) and the desired format (JSON) for the server to process.
Filtering or Sorting Results:

`https://example.com/products?category=electronics&sort=price`
`Explanation:`
The query parameters help filter products by category (electronics) and sort the results by price.
Pagination:

`https://blog.example.com/articles?page=2&limit=10`
`Explanation:`
The query parameters page=2 and limit=10 are used to request the second page of articles with a limit of 10 articles per page.

### JavaScript: Accessing Query Parameters

In JavaScript running on a web page, you can access and manipulate query parameters using the URLSearchParams API. Here's a simple example:

```javascript
    // Assuming the URL is https://example.com/page?name=John&age=25
    const urlParams = new URLSearchParams(window.location.search);

    const name = urlParams.get('name'); // Returns "John"
    const age = urlParams.get('age');   // Returns "25"
```

In this example, window.location.search represents the query string in the URL, and URLSearchParams is used to parse and access individual parameters.

Query parameters play a crucial role in web development by enabling dynamic and interactive interactions between clients (e.g., web browsers) and servers. They are widely used in web applications, APIs, and other online services to customize and personalize user experiences.

## PORT

* There can be almost 65,000 PORTS on a single computer.

* The use of ports in networking is essential for facilitating communication between different services and applications on a single device or across a network. Ports help distinguish and direct network traffic to the appropriate software or service running on a particular device. Each communication endpoint on a device is associated with a specific port number, allowing multiple services to operate concurrently.

The context of a URL (Uniform Resource Locator), the port number is an optional component that specifies the communication endpoint for a particular service on a server. The port number comes after the domain or IP address and is separated by a colon (:). If no port number is specified, the default port for the given protocol is used.

**Here's a breakdown of a URL with a port number:**

```bash
    protocol://domain:port/path?query
```

**HTTP with Default Port:**

`http://example.com/path`
In this example, the default HTTP port (port 80) is assumed if not explicitly specified.

**HTTP with Custom Port:**

`http://example.com:8080/path`
Here, the custom port number 8080 is specified for the HTTP communication.

**HTTPS with Default Port:**

`https://example.com/path`
The default HTTPS port (port 443) is assumed if not specified.

**FTP with Default Port:**

`ftp://ftp.example.com/path`
The default FTP port (port 21) is assumed if not specified.

**Common Port Numbers:**

```bash
    HTTP:
    Default Port: 80

    HTTPS:
    Default Port: 443

    FTP:
    Default Port: 21

    SSH (Secure Shell):
    Default Port: 22

    SMTP (Simple Mail Transfer Protocol):
    Default Port: 25

    MySQL Database:
    Default Port: 3306

    PostgreSQL Database:
    Default Port: 5432
```

**Specifying Custom Ports:**
When a server provides services on ports other than the default ones, the port number needs to be explicitly included in the URL. This is common when dealing with development servers, APIs, or services running on non-default ports.

**Example with Custom Port:**

`http://api.example.com:8080/data`
In this example, the API server is running on port 8080.

### Importance of Ports

`Networking:`

Ports allow multiple network services to operate on a single host, distinguishing between different types of services.
Firewall Configuration:

Ports are used in firewall configurations to control access to specific services on a server.

`Development and Testing:`

During development, specifying custom ports is common for running multiple services locally without conflicts.
Service Identification:

Port numbers help identify the type of service being accessed on a server.

Remember that if a port number is not specified in a URL, the default port for the specified protocol is assumed. Additionally, some protocols have well-known default ports, and users often omit the port when accessing resources on these default ports.
