# 24.2 - MONGODB: COMPLEX UPDATES PART II

Let's check out even more operators!

## Updating Arrays

### $all

Operator used to find documents with arrays that have ALL the elements passed in

Basic syntax:

```javascript
db.movies.find(
  { category: { $all: ["TERROR", "FICTION"] }}
);
```

### $elemMatch

Operator used to find documents with arrays that have AT LEAST ONE element that matches ALL the specifications.

Basic syntax:

```javascript
db.movies.find(
  { ratings: { $elemMatch: { $gt: 2, $lt: 5 } }}
);
```

This query will return any document that has a rating in it's rating array that is bigger than 2 and smaller than 5.

### $size

Operator used to find documents with arrays with that specific length.

Basic syntax:

```javascript
db.movies.find(
  { ratings: { $size: 3 }}
);
```

### $expr

Operator used to evaluate expressions (and more!)

Basic syntax:

```javascript
db.monthlyBudget.find({
  $expr: { $gt: [ "$spent", "$budget" ] }
});
```

This will return documents that have the "spent" value higher than the "budget" one.

### $text

Operator used to do searches on text fields. It normally uses *white spaces* to separate words that are being used. If you want to search for a phrase, escape the quotation marks

The field needs to be indexed before, doing so:

```javascript
db.articles.createIndex({ subject: "text" });
```

Basic syntax:

```javascript
db.movies.find({
  $text: { $search: "deadly" }
});
```

```javascript
db.movies.find({
  $text: { $search: "\"This is a phrase to be searched\"" }
});
```

Be aware! $text is a top-level operador.

### $regex

Operator used to match strings to an *regex* object

Basic syntax:

```javascript
db.movies.find({
  "title": { $regex: /batman/i }
});
```

## Exercises

On this module we have 1 batch exercises. You can check them out below:

[Exercises](./exercises/exercises.md)

----

#### Comments

Documents with complex arrays are common on a lot of MongoDBs databases. Understanding how to properly manage the data is vital to maintain your applications in a working state.

###### Feedback

As always, any feedback or suggestion is welcomed.

