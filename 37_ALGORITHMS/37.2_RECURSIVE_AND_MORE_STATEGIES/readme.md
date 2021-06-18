# 37.2 - Recursive & Other Problem Solving Strategies

A function is recursive is it call itself. It may sound crazy how you can define a function that, in the middle of that definition call it self again. If *infinite loop* didn't cross your mind the first time you heard about this, im impressed. The magic of a recursive function is in the fact that only code reachable code gets executed. If you have a stop somewhere before that recursive call, you are off the hook. Obviously if you just keep on calling the function before any stop is possible, you will go on for infinity. Let's take a look at a quick *recursive sum* function to see it in action:

```python
def sum(numbers, total=0):
  if len(numbers) == 0:
    return total

  updated_total = total + numbers[0]
  remaining_numbers = numbers[1:]

  new_total = sum(remaining_numbers, updated_total)

  return new_total
```

As you can see, we have a clear stop: once our numeric list is empty (and therefore our sum is done), we simply return what's on our sum variable to the next call of out *sum* function, and that goes on until the last call get it's result, so the function finally return our *new_total*.

This happens because of the [callstack](https://en.wikipedia.org/wiki/Call_stack).

But don't sweat too hard on it, it's execution cost is the same as a normal loop. Sometimes, however, it's syntax is cleaner to understand what's happening. Other times, tho, you may run into the famous [Stack Overflow](https://en.wikipedia.org/wiki/Stack_overflow_(disambiguation)).

## Recursive Fundamentals

1. You must have a stop case
2. Each new call should get us closer to our stop case
3. Obviously, we should call the function inside itself

## Exercises

On this module we have 1 exercise. You can check them out below:

- [Fibo's Sequence](./exercises/fiboSequence.py)

----

#### Comments

understand recursion for the first is not that easy. You may find yourself puzzled to get every execution and action right. It's normal to feel that way. Maybe its because of the huge confusion most people face when learning about it, that they seem to love 'finding a place to use it'.

Be aware! Most of the time, the good ol' *for loop* (or similars, like JS array iterators) is sufficient.

*Fun fact*: The [JS reduce/reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) array method uses a recursive strategy on it. And because of that, you may face lags/really slow running times if dealing with sufficiently large arrays and complex logic.

###### Feedback

As always, any feedback or suggestion is welcomed.

