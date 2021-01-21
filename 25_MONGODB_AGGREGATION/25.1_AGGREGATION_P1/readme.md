# 25.1 - MONGODB: AGGREGATION PT. 1

After understanding how to manipulate single documents, it's time to learn how to combine them and perform a lot of operations to create reports and interpret our dataset!

## Aggregation Types

We have 3 different types of aggregations on mongodb:

* Aggregation pipeline
* map-reduce function
* single purpose aggregation

This module will focus on the **Aggregation pipeline**.

## Usage

To be able to perform multiple operations on documents of a collection, instead of using **find**, we will use the **aggregate** method. This method, instead of an *object* containing the info required to find documents, receives an *array* of objects, each having the desired operator. The operations happen one after another (which is why we call it a pipeline)

Simple usage:

```javascript
db.collection.aggregate([ // Array! Not an object!
  { ... },
  { ... },
  { ... },
])
```

## Operators

* $match
* $limit
* $lookup
* $group
* $unwind
* $project

### $match

Works exactly like use are used to when using it in the **find** method.

Example:

```javascript
db.orders.aggregate([
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
]);
```

### $limit

The **aggregate** method does not support using **.limit(_n_)** on it. To limit the amount of documents you want to continue down the pipeline, use the **$limit** operator.

Example:

```javascript
db.orders.aggregate([
  { $match: { status: "A" } },
  { $limit: 10 },
]);
```

### $lookup

Similar to a JOIN we can make on SQL. This operator takes 4 arguments:

- **from**: The collection you want to join
- **localField**: The name of the attribute you want to use to match and join in the present collection you are working with
- **foreingField**: THe matching attribute from the collection cited in the *from* argument
- **as**: The name of the attribute that will receive the info of the matching documents

It's important to freeze that the field created will **be an array, even if there's only one matching document to be inserted**.

Example:

```javascript
// orders
{ _id: 1, item: "almonds", price: 12, quantity: 2 },
{ _id: 2, item: "pecans", price: 20, quantity: 1 },
{ _id: 3 }

// inventory
{ _id: 1, sku: "almonds", description: "product 1", instock: 120 },
{ _id: 2, sku: "bread", description: "product 2", instock: 80 },
{ _id: 3, sku: "cashews", description: "product 3", instock: 60 },
{ _id: 4, sku: "pecans", description: "product 4", instock: 70 },
{ _id: 5, sku: null, description: "Incomplete" },
{ _id: 6 }

db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);

// results in:

{
  "_id" : 1,
  "item" : "almonds",
  "price" : 12,
  "quantity" : 2,
  "inventory_docs" : [
    {
      "_id" : 1,
      "sku" : "almonds",
      "description" : "product 1",
      "instock" : 120
    }
  ]
}

// ... more documents
```

Since the aggregation with another collection creates an **array** with the data on the matching document, we can perform operations (and even an entire pipeline) on that array! Using:

* **let**: used to define the variables that will be used inside the $lookup pipeline
* **pipeline**: the operations you want to perform.

Let's take a look at this example:

```javascript
// collection 1 - orders
{ _id: 1, item: "almonds", price: 12, ordered: 2 },
{ _id: 2, item: "pecans", price: 20, ordered: 1 },
{ _id: 3, item: "cookies", price: 10, ordered: 60 }

// collection 2 - warehouses
{ _id: 1, stock_item: "almonds", warehouse: "A", instock: 120 },
{ _id: 2, stock_item: "pecans", warehouse: "A", instock: 80 },
{ _id: 3, stock_item: "almonds", warehouse: "B", instock: 60 },
{ _id: 4, stock_item: "cookies", warehouse: "B", instock: 40 },
{ _id: 5, stock_item: "cookies", warehouse: "A", instock: 80 }

// operation:
db.orders.aggregate([
  {
    $lookup: {
      from: "warehouses",
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: [ "$stock_item",  "$$order_item" ] },
                { $gte: [ "$instock", "$$order_qty" ] }
              ]
            }
          }
        },
        { $project: { stock_item: 0, _id: 0 } }
      ],
      as: "stockdata"
    }
  }
]);

// results in:

{
  "_id" : 1,
  "item" : "almonds",
  "price" : 12,
  "ordered" : 2,
  "stockdata" : [
    {
      "warehouse" : "A",
      "instock" : 120
    },
    {
      "warehouse" : "B",
      "instock" : 60
    }
  ]
}
{
  "_id" : 2,
  "item" : "pecans",
  "price" : 20,
  "ordered" : 1,
  "stockdata" : [
    {
      "warehouse" : "A",
      "instock" : 80
    }
  ]
}
{
  "_id" : 3,
  "item" : "cookies",
  "price" : 10,
  "ordered" : 60,
  "stockdata" : [
    {
      "warehouse" : "A",
      "instock" : 80
    }
  ]
}
```

Note that warehouse B was not included into the *stockdata* field of "cookies", as it doesn't have enough units in stock, as per our requirement.

### $group

Just like the GROUP BY in SQL. This operator receives 1 argument, **_id** to receive any grouping attribute from a document, and the all other arguments must be resulted of aggregations.

#### Aggregation Operators

- **$addToSet**: returns an array with unique values for the group
- **$avg**
- **$first**: return a value of the first document of the group
- **$last**: return a value of the last document of the group
- **$max**: return the max value of each group
- **$sum**: return the sum of numeric values. Non-numeric are ignored

Example:

```javascript
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);
```

Note: if you want to group ALL documents, pass in `null` to the `_id` field.

### $unwind

An operator that splits a document's array into equal documents, each different only on the value of the array that was split:

```javascript
db.inventory.insertOne({ _id: 7, item: "ABC1", sizes: ["S", "M", "L"] });
// |
// V
db.inventory.aggregate([{ $unwind : "$sizes" }]);
// |
// V
{ "_id" : 7, "item" : "ABC1", "sizes" : "S" }
{ "_id" : 7, "item" : "ABC1", "sizes" : "M" }
{ "_id" : 7, "item" : "ABC1", "sizes" : "L" }
```

### $project

Operator used to **add** or **remove** fields to the document in the pipeline;

```javascript
db.books.aggregate(
  [
    {
      $project : {
        title : 1,
        author : 1,
        _id: 0
      }
    }
  ]
);
```

## Exercises

On this module we have 3 batches of exercises. You can check them out below:

* [$lookup Practice](./exercises/lookupPractice.md)
* [$group Practice](./exercises/groupPractice.md)
* [Complete Exercises](./exercises/exercises.md)

----

#### Comments

Aggregation is commonly used to get info of the data we have in our databases. As such, knowing how to properly build pipelines should be on the radar to every developer that will used mongoDB.

As a direct comparison to SQL, the pipeline way of transforming documents seems easier, as it's more straight forward.

###### Feedback

As always, any feedback or suggestion is welcomed.

