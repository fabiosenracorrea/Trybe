# 36.2 - OOP In Practice

Before jumping straight to the exercises, there's two concepts of the **SOLID** architecture we need to cover, because they should be applied when practicing and using OOP. If you want to know more about SOLID, check out [this module](https://github.com/fabiosenracorrea/Trybe/tree/master/31_SOLID_ARCHITECTURE_AND_ORM/31.1_SOLID_ARCHITECTURE)

## LISKOV SUBSTITUTION PRINCIPLE

Considered one of the hardest to grasp, this principle can be easily summarized as 'Derived classes should be able to use EVERYTHING from the parent class without breaking any constraint'.

Example: If we have a base class of a bank account with 2 methods: *deposit* and *invest* and create two child classes from it, *online* and *traditional*, BOTH of the classes should fully utilized what our parent class has to offer. In this case, imagine if the *invest* method is only applicable to the *online* class. This means it **should not** be in our parent class!

## INTERFACE SEGREGATION PRINCIPLE

Similar to Liskov's principle, this one states that classes should not be defined by interfaces in which methods that are not used by it are defined. Instead of using a big interface to define a parent class, segregate your interfaces to sub classes!

Typescript example:

```typescript
interface DbRepository {
  find(id: string) => Promise<User | undefined>;
  // ... more common methods ...
  rawQuery(query: string) => Promise<any>; // SQL BASED
}

class MongoDBRepo implements DbRepository {} // WRONG! Raw queries is SQL based in this example


// CORRECT APPROACH //

interface BaseDbRepository {
  find(id: string) => Promise<User | undefined>;
  // ... more common methods ...
}

interface SqlRepository extends BaseDbRepository {
  rawQuery(query: string) => Promise<any>; // SQL BASED
}

class MongoDBRepo implements BaseDbRepository {};

class MySQLRepo implements SqlRepository {};
```

## Private methods/attributes

Python's private implementation differs from others languages as it's not *completely* private.

To define a private attribute, one would do:

```python
class User:
  def __init__(self, name):
    self.__name = name

user = User('Fabio')

user.name # ERROR
user.__name # ERROR
```

But in reality, python only masks this property, in a way that if you do:

```python
user._User__name # 'Fabio'

user._User__name = 'David' # works!
```

So be aware of this!

## Exercises

On this module we have 1 batch of exercises. You can check them out below:

----

#### Comments

OOP is something that you develop overtime. I guarantee you the first project you develop using this paradigm there will be implementation flaws or, at least, not ideal ones. It's completely normal, as a shift from standard JS programming (which, for the most part, doesn't involve classes and OOP) is not as easy to perform as it may seem in theory.

###### Feedback

As always, any feedback or suggestion is welcomed.

