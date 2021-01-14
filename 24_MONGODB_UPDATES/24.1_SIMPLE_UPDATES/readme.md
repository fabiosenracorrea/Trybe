# 24.1 - MONGODB: SIMPLE UPDATES

The first content on MongoDB updates covers the basic operations we can perform to, well, update our data. Some of them are:

* Value change
* Attribute addition/modification
* Conditional change

To do these operations, we can use both:

* updateOne()
* updateMany()

These methods receive **2 parameters**. The first is the matcher to identify which document should be updated. The second is the object containing the configuration of that update.

## Basic update operators

### $set

Sets the value of the specified field. If there's no attribute with the name in the document, it creates one and assign the value to it

```javascript
  db.movies.updateOne(
    { "name": "Batman" },
    { $set: { "rating": 9.0 } }
  );
```

### $mul

Numeric operator. Multiplies the specified attribute value to the value passed and saves it.

Example: multiplying the rating of a movie by 2:

```javascript
  db.movies.updateOne(
    { "name": "Batman" },
    { $mul: { "rating": 2 } }
  );
```

### $inc

Numeric operator. Adds to the specified attribute value the value passed and saves it.

Example: decreasing the rating of a movie by 2:

```javascript
  db.movies.updateOne(
    { "name": "Batman" },
    { $inc: { "rating": -2 } }
  );
```

### $min

Numeric operator. Sets the value of the field to the passed value **if the current value is bigger than it**

Example: setting the rating of a movie to 5 **only if it's current rating is higher than 5**:

```javascript
  db.movies.updateOne(
    { "name": "Batman" },
    { $min: { "rating": 5 } }
  );
```

if the rating was 9: new value: 5
if the rating was 2: it continues to be 2.

### $max

Numeric operator. Sets the value of the field to the passed value **if the current value is smaller than it**

Example: setting the rating of a movie to 5 **only if it's current rating is lower than 5**:

```javascript
  db.movies.updateOne(
    { "name": "Batman" },
    { $min: { "rating": 5 } }
  );
```

if the rating was 9: it continues to be 9;
if the rating was 2: new value: 5;

### $currentDate

Sets the value of the specified field to the current date. Can be formatted to type date or timestamp. The default value is **date**.

```javascript
  db.movies.updateOne(
    { "name": "Batman" },
    { $currentDate: { "lastUpdated": true } }
  );
```

This will update the `lastUpdated` attribute to the current time - formatted as date.

```javascript
  db.movies.updateOne(
    { "name": "Batman" },
    { $currentDate: { "lastUpdated": { $type: "timestamp" } }
  );
```

This will update the `lastUpdated` attribute to the current time - formatted as timestamp.

### $currentDate

Renames the attribute to the new desired value

```javascript
  db.movies.updateMany(
    {},
    { $rename: { "name": "title" } }
  );
```

### $unset

Removes the specified attribute from the document

*Important note: pay attention to the syntax.*

```javascript
  db.movies.updateMany(
    { "title": "Batman" },
    { $unset: { "rating": "" } }
  );
```

## Exercises

On this module we have 1 batch of normal exercises and one bonus. You can check them out below:

[Exercise 1](./exercises/exercises.md)
[Bonus](./exercises/bonus.md)

----

#### Comments

Updating data of our database if something that happens quite often. MongoDB offers high level ways of produce queries to match specifically what we need.

###### Feedback

As always, any feedback or suggestion is welcomed.

