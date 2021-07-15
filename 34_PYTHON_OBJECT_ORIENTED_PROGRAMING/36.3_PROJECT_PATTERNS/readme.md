# 36.3 - Project Patterns

This lesson covers about what some of the best practices for organizing and structuring your projects.

The first thing to remember is the [SOLID](https://en.wikipedia.org/wiki/SOLID) patten. Always try to stay as close as possible to it.

## Common Patterns and use cases

1. **Iterator**: A structure implemented in most programing languages to allow us to go through a sequence of items (normal list, map, nodelist, anything *iterable*), one at a time. It's used a lot behind the scenes when we do a *for in* something, but it can also be implemented as a class. Example:

```python
class DatabaseIterator():
    def __init__(self, sql_connector):
        self.db = sql_connector

    def __iter__(self, query_template):
        self.current_page = 0
        self.query_template = query_template

        return self

    def __next__(self):
        data = self.db.get(
            query = self.query_template,
            page = self.current_page
        )

        self.current_page += 1

        return data
```

2. **Adapter**: A structure used to *decorate* an existing entity with extra/changed functionality. Imagine we have a class in our system that returns data from our database in a format, but we want to change how we send that data to our frontend. Due to some complications, we are unable to change the original class. We then **Adapt** it, or better it, **decorate** it, creating a class that initializes with an instance of that class and re-writes the *return data* method to properly give the new format wanted.

Example

```python
class G3000LoaderAdapter:
    def __init__(self, loader): # we initialize with the original loader
        self.loader = loader

    def load_data(self):
        # zip(['nome', 'idade'], ['Capi', 34]) => {'nome': 'Capi', 'idade': 34}

        return [zip(loader.headers, row) for row in loader.rows]
```

Now we simply pass in the adapted instance down the pipeline, with the new data format!

3. **Strategy**: A way to have multiple instances that do slightly the same thing, but with different implementations. Example: if you want your system to be able to compact files into .zip *and* .gz, you can have a *Compactor* class that initializes with a compactor instance, a *ZipCompactor* or a *GzCompactor*, and calls the same method down the pipe line. Only the use case would alter what is passed in.

## CODE SMELLS

It does not help to know all the patterns and best practices our there if down the lines the code that is written is bad. There are several ways of finding *bad code*, in which we can enum:

* **Long Method**: probably indicates the Single Responsibility principle has been broken
* **Large Class**: same as above.
* **Duplicated Code**: if there are way too similar codes in your system, its probable that a level of abstraction is needed to unify those logics
* **Dead code**: We have code versioning. You do not need that old code commented out. Get rid of it.
* **Speculative Generality**: don't try to launch a rocket just to handle some user registrations. *Future-proofing* way too hard your code can lead to a complexity that was not at all needed.
* **Data Clumps**: If you see a group of variables being used together everywhere, its probable that they need to be abstracted to their own entity. Example: pieces of an address.
* **Middle Man**: If there's a class that the sole purpose of it is to call a method from another one, remove it. It does not add anything to our logic.

## Exercises

On this module we have 1 batch of exercises. You can check them out below:

- [Exercises](./exercises)

----

#### Comments

A well structured and applied project pattern is awesome when you are setting everything in place. But it shines ever more when you are the you that needs to give old code maintenance. A poorly organized project gives you 100x more issues to deal with, starting with the simple 'understanding the basics of whats going on' with each code piece.

###### Feedback

As always, any feedback or suggestion is welcomed.

