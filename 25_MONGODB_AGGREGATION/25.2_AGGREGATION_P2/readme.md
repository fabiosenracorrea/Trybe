# 25.2 - MONGODB: AGGREGATION PT. 2

## Operators

* $add
* $subtract
* $multiply
* $divide
* $ceil
* $floor
* $abs
* $addFields

### $add, subtract, multiply & divide

Operators that should be used when you want to add/subtract/multiply/divide numeric or date values.

Key considerations:

* When using $subtract, the second value will be subtracted from the first
* When using $divide, the first value will be divided from the second

*Important*: If one of the values is a date field, the other will be converted to milliseconds before the operation is executed.

Simple example:

```javascript
// collection
{ _id: 1, item: "abc", price: 10, fee: 2, date: ISODate("2014-03-01T08:00:00Z") },
{ _id: 2, item: "jkl", price: 20, fee: 1, date: ISODate("2014-03-01T09:00:00Z") },
{ _id: 3, item: "xyz", price: 5,  fee: 0, date: ISODate("2014-03-15T09:00:00Z") }

// query
db.sales.aggregate([
  { $project: { item: 1, total: { $add: ["$price", "$fee"] } } }
]);

// resulting in:
{ "_id" : 1, "item" : "abc", "total" : 12 }
{ "_id" : 2, "item" : "jkl", "total" : 21 }
{ "_id" : 3, "item" : "xyz", "total" : 5 }
```

### $ceil

Operator used to **round up** numbers to it's nearest integer.

### $floor

Operator used to **round down** numbers to it's nearest integer.

Since both $ceil and $floor have similar usage, one example of one of them suffices:

```javascript
db.clients.aggregate([
  { $addFields: {
    age: {
      $floor: { $divide: [{ $subtract: ["$$NOW", "$birthDate"] }, 365.25 * 86400000] }
    }
  }}
]).pretty();
```

This operation is used to, given the day a person was born, calculate it's current (full) age.

### $abs

Operator used to get the absolute value of a number/expression

```javascript
db.users.aggregate([
  { $addFields: {
    remainingExp: {
      $floor: { $subtract: ["$currentXp", "$neededXp"] },
    }
  }}
]).pretty();
```

### $addFields

Operator used to specifically **add** fields to existing documents.

Example: (same as the $floor example)

```javascript
db.clients.aggregate([
  { $addFields: {
    age: {
      $floor: { $divide: [{ $subtract: ["$$NOW", "$birthDate"] }, 365.25 * 86400000] }
    }
  }}
]).pretty();
```
This will preserve every single field of every document inside the clients collection, while still adding the "age" field to it.

## Exercises

On this module we have 1 batch of exercises. You can check them out below:

[Module Exercises](./exercises/exercises.md)

----

#### Comments

Following the most important aggregation operators, Part II brings some operators that may be useful while manipulating your data. As the aggregation pipeline is so powerful, mastering as much operators as you can is strongly advised.

###### Feedback

As always, any feedback or suggestion is welcomed.

