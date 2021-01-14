# 23.2 - MONGODB OPERATORS

After successfully managing the initial steps on MongoDB, it's time to cover all the basic operators/conditions in order to query our documents as we wish.

## Math Operators

* $lt: less than (<)
* $lte: less or equal than (<=)
* $gt: greater than (>)
* $gte: greater or equal than (>=)
* $eq: equal (==)
* $ne: not equal (!=)
* $in: value in a collection of data
* $nin: value not in a collection of data

#### Simple examples

```javascript
db.inventory.find({ qty: { $lt: 20 } })
```

```javascript
db.inventory.find({ qty: { $gte: 20 } })
```

```javascript
db.inventory.find({ qty: { $gin: [10, 12, 14, 16, 18, 20] } })
```

## LOGIC OPERATORS

* $not
* $or
* $nor
* $and

#### Simple examples

##### not

```javascript
db.inventory.find({ price: { $not: { $gt: 1.99 } } })
```

Important: this operation will return all the documents that have it's **price** equal or lower than 1.99, but will also return documents that **don't have** the price attribute.

##### or

```javascript
db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })
```

##### nor

```javascript
db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })
```

Important: this operation will return documents that:

- Have a value different than 1.99 on it's price attribute **and** a value that's not `true` on it's sale attribute
- Have a value different than 1.99 **and** don't have the attribute sale
- Don't have the attribute price **and** have a value that's not `true` on it's sale attribute
- Don't have both the price and sale attributes

##### and

```javascript
db.inventory.find({
  $and: [
    { price: { $ne: 1.99 } },
    { price: { $exists: true } }
  ]
})
```

## Exists Operator

Used to return documents that have an attribute

```javascript
  db.movies.find({ rating: { $exists: true } })
```

## Sort Method

Sorts the returned documents based on criteria passed

```javascript
  db.movies.find().sort({ "rating": 1 })
```

- 1: sorts in ASC order
- -1: sorts in DESC order

## Removal Methods

Just like inserting, we can delete one or more documents at once. Options:

* deleteOne()
* deleteMany()

In which you pass in the match to the method, e.g.:

```javascript
  db.movies.deleteMany({ "length": { $lt: 40 } });
```

This would delete every document that has less than 40 as it's length attribute value.

## Adicional info

You can check [MongoDB](https://docs.mongodb.com/manual/)'s manual for more matchers and methods:

* [Matchers](https://docs.mongodb.com/manual/reference/operator/query/)
* [Methods](https://docs.mongodb.com/manual/reference/method/js-collection/)

## Exercises

On this module we have 1 batch of 19 exercises.

You can find them below:

- [Exercises](./exercises)

----

#### Comments

Knowledge on these basic operations are mandatory to excel on mongodb.

###### Feedback

As always, any feedback or suggestion is welcomed.

