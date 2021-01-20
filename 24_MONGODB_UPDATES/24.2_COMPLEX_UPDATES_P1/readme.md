# 24.2 - MONGODB: COMPLEX UPDATES - PART I

After learning more about the usual updates we can do on attributes, it's time to dig deeper!

## Updating Arrays

### $push

[Documentation](https://docs.mongodb.com/manual/reference/operator/update/push/)

Operator used to add a value (whatever it may be - a number, an array, a document....) to a matching array.

Basic syntax:

```javascript
db.movies.updateOne(
  { "title": "Batman" },
  { $push: {
    "sequels": "Batman 2"
  }}
);
```

This operations adds "Batman 2" to the "sequels" array. If the array doesn't exist, it's created before receiving the addition.

It's possible to add more than one element at once, and even sort the array after addition:

```javascript
db.movies.updateOne(
  { "title": "Batman" },
  { $push: {
    "sequels": {
      $each: ["Batman 2", "Batman 3"],
      $sort : 1
    }
  }}
);
```

Just like normal sorting on Mongo, 1 means ASC and -1 means DESC.

There's also the possibility of using **$slice**, which receives the desired max size of the array after the addition and sorting.

### $pop

Can be used to remove either the first or last element of an array

```javascript
db.movies.updateOne(
  { "title": "Batman" },
  { $pop: { "cast": 1 } }
);
```

This operation will remove the LAST item of the 'cast' array. If you want to remove the first one, just pass in -1 instead.

### $pull

Operator that removes from the array **all elements** that meet one or more conditions.

```javascript
db.movies.updateOne(
  { "title": "Batman" },
  { $pull: {
    "sequels": "Batman 2"
  }}
);
```

This query removes "Batman 2" from the sequels array.

### $addToSet

This operation adds to the array only non-duplicate information. It also supports the $each operator.

```javascript
db.movies.updateOne(
  { "title": "Batman" },
  { $push: {
    "sequels": "Batman 2"
  }}
);

db.movies.updateOne(
  { "title": "Batman" },
  { $addToSet: {
    "sequels": {
      $each: ["Batman 2", "Batman 3"],
    }
  }}
);
```

The second operation will only add "Batman 3" to the sequels array!

### Array Filters

It is possible to dynamically access document arrays passing in a **third** argument to the update method. This argument, an object of configuration, must have the `arrayFilters` property.

Here's an example:

Let's say we have this collection:

```javascript
db.recipes.insertMany([{
  "title": "Panqueca Simples",
  "ingredients": [
    { name: "Farinha", quantity: 2},
    { name: "Oleo", quantity: 4 },
    { name: "Leite", quantity: 1 }
  ]
  },
  {
  "title": "Bolo de Cenoura",
  "ingredients": [
    { name: "Farinha", quantity: 2},
    { name: "Oleo", quantity: 1, unit: "xícara" },
    { name: "Ovo", quantity: 3},
    { name: "Cenoura", quantity: 3},
    { name: "Fermento", quantity: 1},
  ]
  }
]);
```

And now we want to update "Farinha" to "Farinha Integral" on every recipe. We can do:

```javascript
db.recipes.updateMany(
  {},
  { $set : {
    "ingredients.$[document].name": "Farinha Integral"
    }
  },
  { arrayFilters: [ { "document.name": "Farinha" } ]} <-- 3rd param
)
```

The use of the **$** operator like that creates a dynamic way of accessing and changing documents inside arrays. Be aware the the word `document` there can be anything you want, just make sure it's the same on both places.

## Exercises

On this module we have 1 batch exercises. You can check them out below:

[Exercises](./exercises/exercises.md)

----

#### Comments

Documents with complex arrays are common on a lot of MongoDBs databases. Understanding how to properly manage the data is vital to maintain your applications in a working state.

###### Feedback

As always, any feedback or suggestion is welcomed.

