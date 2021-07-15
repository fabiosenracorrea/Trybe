# 37.1 - ALGORITHM COMPLEXITY

If you have been writing code for a while, you probably are aware that simply creating code that works does not suffice in the modern world. We need **efficient** code.

And while this sounds like less lines of code, we are talking about both the *time* and *resources* used by an algorithm during it's execution.

Each and every task you want to perform can be measured by what we call [The Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation), a mathematical way of representing how fast (mainly) an algorithm can be.

For example, if we have a list of numbers, ordered randomly and want to find a specific number in it, there's no other way than iterating one by one until we find it. In the worst case scenario, the number is the last one, in which case we run our check *n times*, *n* being the size of our list. We can define that as **O(n)**, *Linear* time.

There are several types of algorithms, each performing differently on this scale. The main and most known Big Os are:

- O(1) - constant time, it will always take a fixed amount of time, no matter the size of the input
- O(log n) - example: Binary Search
- O(n) - Linear Search
- O(n²) - 1 level Nested Lists Search
- O(2^n)
- O(n!)

It's important to note that in an algorithm, the **worst** part of it defines it's Big O notation. So if we have a function that runs linearly through a list at the top, but iterates over a nested list at the bottom, the Big O of it will be (n + n²) => n². The bigger scenario takes so much more than the other inferior ones that we can discard them when defining our time. If the operations happening in parallel are all of the same time, then we simply use it. (n + n) => O(n)

## The Best Case - Omega

There are some algorithms that can vary it's time. In our list example, if the number we are seeking for is the very first item, we would have a time of (n). In the case, we call it Omega(n)

## Theta

If both the Worst and the Best can (O x Omega) are the same, we can say the algorithm have a Theta(n)

## Examples

1. Sequencial array operations - all of them have an O(n), so the algorithm is also O(n). Take this **Javascript** code for example:

```javascript
const numbers = [0,1,2,3,4,5,6,7,8,9]

numbers.map(n => n*n)
       .filter(n => n%2 === 0)
       .reduce((acc, n) => acc + n)
```

The algorithm is as O(n) as this simple one:

```javascript
const numbers = [0,1,2,3,4,5,6,7,8,9]
numbers.map(n => n*n)
```

2. Nesting operations - Take the first example above. If we modify it to been

```javascript
numbers.map(n => numbers.reduce((acc, next) => acc * next), n)
       .filter(n => n%2 === 0)
       .reduce((acc, n) => acc + n)
```

We will have an O(n²). That is because for each item in our array, we go through the entire list again.

## Time Difference

While it may sound curious to discard the parallel operations that have inferior times, take a look at the graph below. It shows the execution time of the main Big Os. That difference only gets higher and higher as our input values get bigger.

![big o comparison](./complexity.png)

Picturing with numbers: If we have a n of **20** to be applied to an *exponential* and a *factorial* algorithm, we would have *one million* operations performed. On the other hand, the factorial algorithm would perform 24 **quatrillion** operations = **2432902008176640000**.

## Exercises

Since this is an introduction lecture, no concrete exercise was done.

----

#### Comments

Measuring algorithm's time to execute is crucial to some applications, especially those that rely on user interaction - your users are more and more impatient as time goes by. The power of our computers go up as well, but we also need to refine as much as possible every implementation we code.

###### Feedback

As always, any feedback or suggestion is welcomed.
