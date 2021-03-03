# 35.1 - Introduction

On this module it's time to start seeing what's different and new on Python when compared to JS.

### Variable Declarations

There's no need to declare variables like in JS, you simply do

```python
variable = 10
```

### Operators

Apart from normal + - * / operators, we have the **//** operator that returns the max number of times a whole number fits into the other

```python
x = 10 // 3 # x = 3
```

- and: literal 'and' keyword
- or: literal 'or' keyword
- equality: == (we don't have === here!)

### Comments

Usage of **#**

```python
x = 10 # this is a comment
```

### Single Increment or Decrement

We don't have **++** or **--** like in JS, but we do have the shorthand **+=**

### Types

If we want the type of a variable, we simply do `type(var)` to get it.

We have all the below types:

* int
* float
* complex (eg `3 + 4j`)
* str (strings)
* bool (boolean - attention, here 'True' and 'False' are capitalized)
* list (arrays [1, 2, 3])
* tuple (lists that can be modified during execution. Denoted with parenthesis `(1, 2)`)
* set (set of **unique** and **unordered** elements)
* frozenset (a variation of sets, but *immutable*)
* dict (just like objects in js, key-value data)
* range (a way of generating a sequence of numbers. Final value NOT included, so range(1, 10) goes from 1 to 9!)

### If/Else Condition

Here we have a clean structure, with no curly brackets:

```python
if x == 2:
  do this
elif x == 3:
  do that
else:
  do the other thing
```

Pay close attention to the **:** and tabs used, we don't have curly brackets but still need to follow indentation!!

### Loops

Iterating over a list:

```python
oneList = [1, 2, 3]

for item in oneList:
  print(item) # 1 then 2 then 3!
```

> Note: since in this example we ran on a numeric sequence, we could've used `for item in range(n)` as well.

#### While

```python
n = 10
last = 0
while last < n:
  # do something
  last += 1
```

### Functions

Defined via the keyword **def**

```python
def multiplyBy2(n):
  return n * 2
```

Defining we can have multiple arguments:

```python
def sumAll(*nums):
  sum = 0

  for num in nums:
    sum += num

  return num
```

### Usage in Scripts

It's very common to import logic from other files. But in python, we have to be careful about which code is ran once we import it.

For instance, if we have a file that has

```python
# somewhere in the file

print('Hello')
```

If we import this file, this code will be automatically ran. To avoid this and make so this code will only be run once we purposely run that specifically script, we can wrap the login under a special condition:

```python
if __name__ == '__main__':
  print('Hello') # this will only run when the file is executed directly!
```

## Exercises

On this module we have [2] batches of exercises. You can check them out below:

[Exercise 1](./exercises/exercise1)
[Exercise 2](./exercises/exercise2)

----

#### Comments

Coming from an extensive knowledge on another programming language helps a lot to understand and start using another one. Obviously there are differences, but as long as the programming logic is up to date, you should have no major issues getting the basics done to, then, start earning proficiency.

Python has some awesome feature but also has downsides when compared to Javascript. It's up to the programmer to know when to use each of his tools once the need arises.

###### Feedback

As always, any feedback or suggestion is welcomed.

