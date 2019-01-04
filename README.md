![CF](http://i.imgur.com/7v5ASc8.png) LAB 9
=================================================

## Socket.io Namespaces and Rooms

### Author: Fletcher LaRue

### Links and Resources
[![Build Status](https://www.travis-ci.com/asdFletcher/09-socket.io-ns.svg?branch=master)](https://www.travis-ci.com/asdFletcher/09-socket.io-ns)

* [repo](https://github.com/asdFletcher/09-socket.io-ns)
* [travis](https://www.travis-ci.com/asdFletcher/09-socket.io-ns)
<!-- * [back-end](http://xyz.com)
* [front-end](http://xyz.com) -->

--- 
---
### Description:
Develops a server that accepts connections to 2 namespaces: `numbers` and `letters`, each with a room (`negative` and `lowercase`) that can be optionally joined by a client.

There is an `app.js` file that runs an interval and emits specific events to the server periodically, for testing.

There is an existing front-end application (not made as part of this project that is meant to test the functionality of `server.js`. 

It is located [here](https://pmww0ww42q.codesandbox.io/). 

It is written in React and connects to a `socket.io` server running at `http://localhost:3000` and to the namespaces and rooms specified below. The existing application will automatically connect and respond to events and display the data published by your server.

The `server.js` is the main portion of the project and handles events emitted periodically by `app.js`. This simulates some sort of user interaction. There is also a `client.js` file that is for testing the events emitted by `server.js`. The purpose of this is to test the output without being tied to the 'un-changeable' React app. It is not strictly necessary but is handy. 

#### `server.js` description
- the socket.io server
- uses port 3000
- defines global variables to be sent to subscribers
    - `number` starts at `0`
    - `letter` is on a loop: `A --> Z --> a --> z --> a ...`
- The server has 2 namespaces: `numbers` and `letters`
    - `numbers` has 1 room: `negative`
    - `letters` has 1 room: `lowercase`
- listens for event `next-number`
    - when this happens:
        - emits an event `number`, and `number` to the namespace `numbers`
        - emits an event `_number`, and negative `number` to the room `negative` (in `numbers`)
        - increments `number` by 1
- listens for event `next-letter`
    - when this happens:   
        - emits an event `letter`, and `letter` to the namespace `letters`
        - emits an event `_letter`, and lowercase `letter` to the room `lowercase` (in `letters`)
        - increments `letter` by 1
- allows clients to connect to the namespaces, or rooms

#### `app.js` description
- connects to the server
- emits event 'next-number' every so often
- emits event 'next-letter' every so often
- does not specify the actual letter or number, just the event

#### `client.js` description
- connects to the server
- connects to the namespace `numbers`
- connects to the namespace `letters`
- connects to the room `negative`
- connects to the room `lowercase`
- logs all incoming events


---
### Files
#### `server.js`
#### `app.js`
#### `client.js`

#### Test files
#### `server.test.js`

---

### Modules
##### Exported Values and Methods for the following files:
#### `server.js`
- ###### `getLowerCase()`
- ###### `incrementLetter()`
- ###### `incrementNumber()`

#### `app.js`
- none, since this file is primarily used for testing `server.js`

#### `client.js`
- none, since this file is primarily used for testing `server.js`

--- 

#### `server.js`
- ###### `getLowerCase()`
    * requires 0 parameters
    * logs the parameters to the console.
- ###### `incrementLetter()`
    * requires 0 parameters
    * increments the global letter by 1 through its loop
- ###### `incrementNumber()`
    * requires the global number by 1


### Testing
Tests can be found in the `__tests__` directory:
`__tests__/<file to be tested>.test.js`

Where `<file to be tested>` is the name of the file that the test file applies to.

All testing for this class was done with Jest: 
* [Jest docs](https://jestjs.io/docs/en/getting-started)

Instructions for replicating the tests for this project are as follows:

* Clone the repo.
* Create a node runtime environment

    ```JavaScript
    npm init
    ```
    This will create a `package.json` file, a `package-lock.json` file.

* Install Jest

    ```JavaScript
    npm i jest
    ```

* Run jest

    ```JavaScript
    npm jest --verbose --coverage
    ```
    It is useful to bind this to the command:
    ```JavaScript
    npm test
    ```
    To do this, manually edit your package.json to include the following under the "scripts" attribute:
    ```Javascript
    "scripts": {
        "test": "jest --verbose --coverage",
        "test-watch": "jest --watchAll --verbose --coverage"
    }
    ```
    `test-watch` will re-run tests when the file is saved


---

### Dependencies

* Jest: `npm i jest` 
    * [Jest docs](https://jestjs.io/docs/en/getting-started)
    * testing
* JSDoc: `npm i jsdoc`
    * [JSDoc docs](http://usejsdoc.org/)
    * documentation
* socket.io: `npm i socket.io`
    * [socket.io docs](https://socket.io/docs/)
    * [socket.io server API](https://socket.io/docs/server-api/)
    * server communications via WebSocket
* socket.io-client: `npm i socket.io-client`
    * [socket.io docs](https://socket.io/docs/)
    * [socket.io client API](https://socket.io/docs/client-api/)
    * client communications via WebSocket



### Setup
#### `.env` requirements
* n/a

### Usage

Initialization routine:
- start `server.js`:
    ```JavaScript
    node server.js
    ```
- connect `app.js`:
    ```JavaScript
    node app.js
    ```
- connect `client.js`:
    ```JavaScript
    node client.js
    ```
- Alternatively: refresh the react app [here](https://pmww0ww42q.codesandbox.io/)

--- 

TODO: add tests
TODO: add JSDoc notation

