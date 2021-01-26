# 27.3 - WEB ARCHITECTURE - REST & RESTFUL

A RESTful api is just an api that follows **every single one of REST's 6 constraints**.

They are:

1. UNIFORM INTERFACE
2. CLIENT-SERVER MODEL
3. STATELESS
4. CACHEABLE
5. LAYERED SYSTEM
6. CODE ON DEMAND

## 1. UNIFORM INTERFACE

Your api needs to have uniform resources and responses across it's routes.

For exemple, if you are using the prefix route `/users`, no route should use `user`, and vice-versa.

If you are using PUT & DELETE to update/delete something, no route can use PUT and do those things.

## 2. CLIENT-SERVER MODEL

Here your application must have client and server independent of each other. Here it's important the separation of concerns:

While the client worries about displaying the data, providing user experience (and so on), the server should worry about data storage, access, cache, logs...

## 3. STATELESS

Your api should not hold on to any information of a previous request to use on the next one.

This means that a request **should contain every info necessary to get the response it wants**.

## 4. CACHEABLE

Your api should respond to the client informing if the data provided can be cached and, if true, for how long. Example of a response header of such:

> Cache-Control: max-age=120

This would mean 120 seconds of cache-time

## 5. LAYERED SYSTEM

Your client should not know which database the api uses, which router, if you use cache or not... It should only worry about which information is needed to get a piece of data.

## 6. CODE ON DEMAND

Your api should support for sending in code to be executed by the client if need be.

## Exercises

On this module we have 1 batches of exercises. You can check them out below:

* [Express Exercise](./exercises)

----

#### Comments

RESTful apis are increasingly better over the years, as more and more different devices appear to consume it's information. As of today, if you want to integrate the data your user sees on it's web/mobile access, designing a RESTful api will make your job a lot easier to connect those different clients.

The best pattern, i'd say, is creating an api that returns JSON, which is understood by any programming language and can be easily transformed into on-screen elements by whichever client receives it.

It's also worth mentioning you can still follow most of the constraints and have a great api developed.

###### Feedback

As always, any feedback or suggestion is welcomed.

