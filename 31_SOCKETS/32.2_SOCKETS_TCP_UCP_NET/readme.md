# 32.2 - SOCKETS: TCP/UDP & NET

Socket is a mechanism of communication used to implement a client/server system. It's two main "types" are used to implement two of the most famous transmission protocols nowadays: **TCP** and **UDP**.

## TCP

The *Transmission Control Protocol* is a secure connection that happens with a *3-way-handshake*:

1. A client manifests it wants to connect
2. The server acknowledges and answers it's possible to connect
3. The client acknowledges the received msg and a connection is established

A couple of characteristics of a TCP connection:

* Trustworthy: every message is checked to verify its integrity
* Full Duplex: both the client and the server can send messages (at the same time, even)
* Ordered Delivery: each *packet* is numbered and has a order to be assembled
* Flow control (should the server send a packet that got lost? yes!)

## UDP

The *User Datagram Protocol* is a protocol that doesn't require a connection and does **not** check for data sent/received. It's ideal to use when not every bit of information is important to get the message delivered correctly. One example would be transmission of audio or video.

## Sockets TCP

Even wondered what happens when a server connects to a client on, say, port 443 (https port)?

While the connection is initiated on that port, once the request is received and the connection happens, the server creates a *socket* on an available port and let that be the port the client will communicate with. This happens so the "outside world" port, which is 443, can continue to receive connection requests and serving every client that wants to get in!

## Creating a simple TCP server/client Flow

You can check the [examples](./examples) folder to see a way of creating a server/client connection using Node's [net](https://nodejs.org/api/net.html) core module.

## Exercises

On this module there is just 1 batch of examples. You can check them out below:

* [Examples](./exercises)

----

#### Comments

Understanding how data is exchanged on the internet is crucial when designing applications with multiple features.

###### Feedback

As always, any feedback or suggestion is welcomed.

