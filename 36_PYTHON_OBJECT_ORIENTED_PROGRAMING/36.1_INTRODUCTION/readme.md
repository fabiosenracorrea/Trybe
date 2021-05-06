# 36.1 - OOP INTRODUCTION

Object Oriented Programming is a *programming paradigm*, that advocates for the use of **objects (classes)** as main drivers of our code.

### Paradigms

- **Structured**: achieved with just basic features of the language: variables, functions, modules, conditionals and loops.
- **OO**: usage of objects as a way of encapsulating any similar logic (eg a Calculator object instead of separate sum, subt etc functions)
- **Functional**: based around evaluating mathematical functions
- **Logical**: based around patterns of conditionals checks.

## Basic OOP Concepts

- Class: the mold of our objects.
- Object/Instance: a representation of our class (with actual data)
- Attribute: an information/value of our Instance
- Method: a function of our Instance
- Constructor: a special method used to initialize an Instance
- Interface: An abstract representation of our Instance/Class
- Abstract Class: a mold to define a structured to sub-classes
- Polymorphism: when there are different implementations of the same method defined in an interface.

Polymorphism example:

Imagine that you have a 'Repository' interface that defines which methods a database class should have. You use that interface to define both a SQLRepository and a MongoDBRepository. They will both have the same method by name, but the actual implementation will vary - obviously - since a MYSQL driver provides different methods and logics to access data when compared to MongoDB's driver.

Typescript example: (obviously the connection part and etc was left out to focus on the concept)

```typescript
interface Repository {
  create: (user: UserDTO) => Promise<User>;
  delete: (id: string) => Promise<void>;
}

class MYSQLRepo implements Repository {
  constructor({ driver, database }) {
    this.driver = driver;
    this.database = database;
  }

  async create(user: UserDTO): Promise<void> {
    await this.driver.sql(`INSERT ...`)
  }

  async delete(id: string): Promise<void>{
    await this.driver.sql(`DELETE FROM ...`)
  }
}

class MongoDBRepo implements Repository {
  constructor({ driver, collection }) {
    this.driver = driver;
    this.collection = collection;
  }

  async create(user: UserDTO): Promise<void> {
    await this.driver.insertOne({
      id: uuid(),
      ...user,
    })
  }

  async delete(id: string): Promise<void>{
    await this.driver.deleteOne({
      id,
    })
  }
}
```

## Exercises

Since this is an introduction lecture, no concrete exercise was done. More on this on later lessons.

----

#### Comments

While POO is not as strong as some people would like in Javascript (our main focus for most of this course), when it comes to Python, it's what you will see the most. Learning how to not only understand POO projects and code, but also to write your own will vastly improve your professional skills.

###### Feedback

As always, any feedback or suggestion is welcomed.

