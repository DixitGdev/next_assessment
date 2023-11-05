# NEXT Assessment
Assessment Solution by Dixit Ghodadara

### 1. Websocket
    - Install packages (ws and wscat)
    - Run server
    - Open another CMD and connect to server
    - Type message
    - Can see output in attached Screenshot

### 1. REST
    - Install packages (express, morgan)
    - Run server
    - Open Postman and execute requests
    - To create resources, send a POST request to /resource with a JSON body containing id and data.
    - To read resources, send a GET request to /resource/:id where :id is the ID of the resource.
    - To delete resources, send a DELETE request to /resource/:id


### Answers
1. 
- The WebSocket server and RESTful API server are structured to handle real-time communication and standard web requests, respectively
<br> </br>
   - ### **WebSocket Server Architecture**
     -   The WebSocket server is structured around the WebSocket protocol, which provides full-duplex communication channels over a single TCP connection. The ws library in Node.js is used to create and manage WebSocket connections.
     -   The architecture is designed for efficiency by handling each connected client in a non-blocking manner. The server can handle multiple clients simultaneously, and messages are asynchronously received and broadcasted to all clients.


   - ### **RESTful API Server Architecture**
     -   The RESTful API server uses Express.js, a minimalist web framework for Node.js, and follows REST principles to handle HTTP requests. The architecture consists of:
     -   This server is designed for RESTful principles, ensuring that each endpoint corresponds to a specific type of resource manipulation. Error handling is centralized, and logging provides visibility into the server's operations.

<br> </br>

2. 
- Let's delve into the design decisions, libraries, frameworks used, and the extensibility of the WebSocket and RESTful API servers implemented in Node.js.

   - ### **WebSocket Server Design**
     -   ***Libraries used:***
            - ws : A simple and widely-used WebSocket library for Node.js.

     -   ***Design decision:***
            - Node.js inherently operates on a single-threaded event loop, which is suitable for handling I/O-bound tasks like WebSocket communication.
            - The server iterates over each client connected to the WebSocket server to broadcast messages. This ensures that messages are distributed in real-time to all active clients.

     -   ***Request Handling:***
            - The server listens for an "upgrade" request from a standard HTTP connection to a WebSocket connection.
            - Once a WebSocket connection is established, messages sent by clients trigger the message event, which the server listens for and acts upon.

     -   ***Extensibility:***
            - To scale the WebSocket server for handling more connections, we could implement a pub/sub system with Redis or similar to manage messages across multiple server instances.
            - We could extend the WebSocket server to handle authentication by verifying tokens passed during the connection handshake.

   - ### **RESTful API Server Design**
     -   ***Libraries used:***
            - **Express** : A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
            - **Morgan** : An HTTP request logger middleware for Node.js, helping in the logging of requests for debugging and monitoring purposes.

     -   ***Design decision:***
            - The server is designed to be stateless, which fits well with the REST architectural style, allowing each HTTP request to be independent and contain all necessary information.
            - The use of middleware for logging (Morgan) and JSON body parsing provides modularity and reusability, ensuring that common functionalities are abstracted and can be easily modified or replaced.

     -   ***Request Handling:***
            -  The endpoints defined (POST /resource, GET /resource/:id, DELETE /resource/:id) correspond to create, read, and delete operations, respectively, which are fundamental to RESTful design.
            - The server is set up to handle JSON content types, which is the most common data format used in modern web APIs.

     -   ***Extensibility:***
            - **Database Integration**: The in-memory store could be replaced with a database like MongoDB or MySQL for persistent storage.
            - **Authentication**: Middleware could be added to secure endpoints using JWTs or OAuth.
            - **Validation**: Request validation can be incorporated using libraries like Joi, express-validator, or celebrate to ensure that incoming data adheres to the expected format.