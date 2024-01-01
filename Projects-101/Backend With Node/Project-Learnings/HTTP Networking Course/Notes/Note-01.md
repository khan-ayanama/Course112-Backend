# HTTP NETWORKING

## HTTP

HTTP stands for Hypertext Transfer Protocol. It is the foundation of data communication on the World Wide Web. HTTP is an application layer protocol that facilitates the transfer of hypertext, which typically includes HTML files, between a web browser and a web server.

When you enter a web address (URL) in your browser and press Enter, your browser uses HTTP to request the web page from the server where the website is hosted. The server then responds with the requested page, and your browser renders it for you to view.

HTTP operates over the Internet or other networks and is a stateless protocol, meaning each request from a client to a server is independent and not related to any previous requests. This simplicity makes it a widely used protocol for various types of communication on the web.

### Usage of HTTP

`Communication between Clients and Servers:` HTTP is the foundation of communication on the World Wide Web. It enables the exchange of information between web browsers (clients) and web servers.

`Data Transfer:` HTTP is designed to facilitate the transfer of hypertext, which includes HTML files, images, videos, and other resources, between clients and servers. It allows users to access and view web content.

`Stateless Protocol:` HTTP is a stateless protocol, meaning each request from a client to a server is independent and not reliant on previous requests. This simplicity makes it scalable and suitable for the distributed nature of the internet.

`Platform-Independent:` HTTP is platform-independent, meaning it can be used on any device or operating system. This universality contributes to the interoperability of different systems and devices.

`Simple and Lightweight:` HTTP is designed to be a simple and lightweight protocol, making it easy to implement and understand. This simplicity contributes to its widespread adoption and use.

`Text-Based:` HTTP messages are human-readable and are typically in plain text. This makes it easy for developers to troubleshoot and debug, enhancing the protocol's accessibility.

### Protocols

HTTP (Hypertext Transfer Protocol), a protocol refers to a set of rules and conventions that define how communication should occur between different entities. In this case, the entities are the client (such as a web browser) and the server (where a website is hosted). These rules and conventions ensure that both the client and server can understand each other and exchange information effectively.

HTTP is a protocol that specifies how messages are formatted and transmitted, and how web browsers and servers should respond to various commands. It defines the structure of messages, the types of messages that can be exchanged, and the actions that should be taken under different circumstances.

The communication between a client and a server in HTTP typically involves the client sending a request to the server, and the server responding with the requested information. The messages exchanged between them follow a specific format and adhere to the rules defined by the HTTP protocol.

There are different versions of the HTTP protocol, with HTTP/1.1 being one of the most widely used. Each version may introduce improvements, optimizations, and new features, but they all adhere to the fundamental principles of the HTTP protocol.

### Who Made these Protocols

The HTTP (Hypertext Transfer Protocol) protocol was developed by Tim Berners-Lee and his team at CERN (European Organization for Nuclear Research) in 1989-1991. Tim Berners-Lee is often credited as the inventor of the World Wide Web. The first version of HTTP, known as HTTP/0.9, was a simple protocol designed for transferring hypertext documents.

Over time, the protocol evolved, and subsequent versions were introduced to address the growing complexity and demands of the evolving World Wide Web. The development and standardization of HTTP are carried out by the Internet Engineering Task Force (IETF) through the HTTP working group.

Here is a brief overview of major HTTP versions:

`HTTP/0.9:` The initial version, a simple protocol used for transferring plain hypertext documents.

`HTTP/1.0:` Introduced in 1996, this version added features like headers for metadata, allowing for the transfer of non-HTML documents and improved communication.

`HTTP/1.1:` Released in 1997, it brought several improvements, including persistent connections to reduce latency, pipelining for multiple requests on the same connection, and more efficient use of network resources.

`HTTP/2:` Introduced in 2015, HTTP/2 aimed to address the performance limitations of HTTP/1.1. It introduced features like multiplexing, header compression, and other optimizations to improve speed and efficiency.

`HTTP/3:` The latest major version, introduced in 2020, is designed to further improve performance and security. It uses the QUIC transport protocol, which is built on top of UDP (User Datagram Protocol) instead of TCP (Transmission Control Protocol) used by previous versions.

These protocols have played a crucial role in shaping the way information is exchanged on the World Wide Web. The continuous evolution of HTTP reflects the dynamic nature of the internet and the need for efficient and secure communication protocols.

### Who deployed these protocols on the Internet

The deployment of HTTP protocols on the internet involves several steps and considerations. Here's a high-level overview of how these protocols are deployed:

`Server Implementation:`

Web servers, such as Apache, Nginx, Microsoft IIS, and others, implement the HTTP protocol. These servers handle incoming requests from clients (web browsers) and send back the requested resources.

`Client Implementation:`

Web browsers, like Chrome, Firefox, Safari, and others, implement the HTTP protocol to communicate with web servers. They send requests for web pages and resources and process the responses received from servers.

`TCP/IP Stack:`

HTTP operates over the TCP/IP (Transmission Control Protocol/Internet Protocol) suite, which provides the underlying communication infrastructure for the internet. TCP/IP ensures reliable and orderly delivery of data between devices.

`Ports:`

HTTP typically uses port 80 for communication. When a client makes a request to a web server, it connects to the server's port 80 by default. For secure communication using HTTPS, port 443 is commonly used.

`URLs and URIs:`

Uniform Resource Locators (URLs) or Uniform Resource Identifiers (URIs) are used to identify and locate resources on the web. They contain information about the protocol (e.g., HTTP or HTTPS), the server address, and the resource path.

`Request-Response Cycle:`

Clients send HTTP requests to servers, specifying the type of request (e.g., GET, POST) and the resource they want. Servers process the requests and send back HTTP responses containing the requested data or indicating an error.

`HTTP Versions and Features:`

Both the client and server must support a specific version of the HTTP protocol. Modern web servers and browsers often support the latest versions (e.g., HTTP/1.1, HTTP/2, HTTP/3) with their respective features.

## Can we Make our own Protocol

Designing and implementing your own network protocol is a challenging but rewarding task. Here's a high-level overview of the process:

Steps to Create Your Own Network Protocol:

`Define Objectives and Requirements:`
Clearly define the purpose of your protocol. Understand what kind of data needs to be transmitted, the characteristics of the network, and the requirements for reliability, security, and efficiency.

`Research Existing Protocols:`
Study existing network protocols to understand their strengths and weaknesses. This can provide valuable insights into best practices and common design patterns.

`Define Message Format:`
Specify the format of messages exchanged between clients and servers. This includes headers, data structures, and any other necessary components. Consider using a human-readable format like JSON or a binary format depending on your needs.

`Choose a Transport Protocol:`
Decide whether to build your protocol on top of existing transport protocols like TCP or UDP. TCP offers reliable, connection-oriented communication, while UDP is more lightweight and suitable for scenarios where speed is critical.

`Implement Message Handling:`
Develop the logic for encoding and decoding messages. Define how information will be packaged and transmitted over the network. Consider issues like message length, error handling, and message acknowledgment.

`Addressing and Routing:`
Decide how devices will be identified and addressed on the network. Define routing mechanisms if your protocol involves communication between multiple devices.

`Error Handling and Recovery:`
Implement mechanisms for error detection and recovery. Determine how your protocol will handle lost or corrupted data, ensuring the reliability of communication.

`Security Considerations:`
If security is a concern, implement encryption and authentication mechanisms. This might involve building on top of existing security protocols or developing your own secure layer.

`Testing and Validation:`
Test your protocol in different scenarios and environments. Verify that it performs well under various conditions and that it meets the objectives you defined at the beginning.

`Documentation:`
Thoroughly document your protocol, including the message format, encoding/decoding procedures, error handling, and any other relevant information. This documentation is crucial for anyone looking to implement or understand your protocol.

`Implementation and Deployment:`

Develop reference implementations for clients and servers. Consider open-sourcing your protocol or providing libraries to facilitate adoption.

`Iterate and Improve:`

Gather feedback from users and the community. Be open to making improvements and addressing issues as they arise.
Remember that creating a new network protocol should be approached with care, especially for critical applications. Before deploying it in a production environment, ensure thorough testing and consider seeking input from experienced network protocol designers and security experts.

## Existing Protocols Example

There are numerous network protocols that serve different purposes in computer networking. Here are some examples of commonly used protocols:

`Transmission Control Protocol (TCP):`
A connection-oriented protocol that provides reliable, ordered, and error-checked delivery of data. It is widely used for applications like web browsing, email, and file transfer.

`User Datagram Protocol (UDP):`
A connectionless protocol that provides faster but less reliable data transmission. It is often used in real-time applications such as online gaming, streaming, and VoIP.

`Internet Protocol (IP):`
The fundamental protocol for addressing and routing packets of data so that they can travel across networks and arrive at the correct destination.

`Hypertext Transfer Protocol Secure (HTTPS):`
An extension of HTTP that adds a layer of security through SSL/TLS protocols, ensuring encrypted communication between clients and servers. It is commonly used for secure web browsing.

`File Transfer Protocol (FTP):`
A protocol used for transferring files between a client and a server on a network. It supports both interactive and batch operations.

`Simple Mail Transfer Protocol (SMTP):`
A protocol for sending emails between servers. It is used for sending, relaying, and delivering email messages.

`Post Office Protocol version 3 (POP3):`
A protocol used by email clients to retrieve emails from a server. It allows the client to download messages but typically removes them from the server.

`Internet Message Access Protocol (IMAP):`
Another email retrieval protocol that allows multiple devices to access and manage the same mailbox. Unlike POP3, it usually leaves emails on the server.

`Domain Name System (DNS):`
Resolves human-readable domain names to IP addresses, enabling users to access websites using domain names instead of numerical IP addresses.

`Dynamic Host Configuration Protocol (DHCP):`
A protocol that automatically assigns IP addresses and other network configuration information to devices on a network.

`Border Gateway Protocol (BGP):`
A protocol used to exchange routing and reachability information between autonomous systems on the internet.

`Secure Shell (SSH):`
A protocol that provides secure remote access to a system over an unsecured network. It encrypts the communication between the client and the server.

`Network Time Protocol (NTP):`
A protocol for synchronizing the clocks of computers on a network. It ensures accurate timekeeping for various applications.

These are just a few examples, and there are many more protocols serving different purposes in the realm of computer networking. Each protocol is designed to address specific communication needs and challenges.
