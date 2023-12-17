# HTTP Headers

HTTP headers are key-value pairs of information sent between the client (typically a web browser) and the server during an HTTP request or response. They provide additional details about the request or response and help in controlling various aspects of the communication between the client and server. Here are some common HTTP headers and their purposes:

## Request Headers

**Host:**

Specifies the domain name of the server.
`Example:` Host: `www.example.com`

**User-Agent:**

Provides information about the user agent (browser or client) making the request.
`Example:` User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36

**Accept:**

Informs the server about the types of media that the client can process.
`Example:` Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8

**Accept-Language:**

Specifies the preferred language for the response.
`Example:` Accept-Language: en-US,en;q=0.9

**Authorization:**

Contains credentials for authenticating the client with the server.
`Example:` Authorization: Bearer `<token>`

**Referer:**

Indicates the address of the previous web page from which the current request was initiated.
`Example:` Referer: `https://www.example.com/page1`

## Response Headers

**Content-Type:**

Specifies the media type of the resource sent to the client.
`Example:` Content-Type: text/html; charset=utf-8

**Content-Length:**

Indicates the size of the response body in octets (8-bit bytes).
`Example:` Content-Length: 1234

**Server:**

Provides information about the software used by the origin server.
`Example:` Server: Apache/2.4.41 (Ubuntu)

**Cache-Control:**

Directs caches on how to behave in order to optimize the serving of content.
`Example:` Cache-Control: no-cache, no-store, must-revalidate

**Date:**

Represents the date and time at which the message was sent.
`Example:` Date: Tue, 06 Dec 2022 15:30:45 GMT

**Set-Cookie:**

Sets a cookie on the client's machine.
`Example:` Set-Cookie: sessionid=123; Path=/; Expires=Wed, 07 Dec 2022 15:30:45 GMT

## General Headers (Present in Both Request and Response)

**Connection:**

Controls whether the network connection stays open after the current transaction finishes.
`Example:` Connection: keep-alive

**Content-Encoding:**

Specifies the encoding transformations applied to the resource.
`Example:` Content-Encoding: gzip

**Upgrade:**

Allows the client to request an upgrade to a different protocol.
`Example:` Upgrade: websocket

**Via:**

Informs the client of the intermediate protocols and recipients between the user agent and the server.
`Example:` Via: 1.1 example.com

These headers serve various purposes, from indicating preferences and capabilities to controlling caching behavior and providing information about the server. Understanding and properly configuring these headers is crucial for web developers and server administrators to optimize performance, security, and functionality in web applications.
