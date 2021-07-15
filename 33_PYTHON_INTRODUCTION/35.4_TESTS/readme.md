# 35.4 - PYTHON TESTING

At this point of the course, the importance of unitary tests is no surprise. In python, much like in any other language, it wouldn't be different.

## Library

There are a lot of libraries to test in Python, but we will use **pytest**.

## Assertion

Python is a language that has built in capabilities of tests, such as *mocks* and *assertions*.

For example, one can simply do:

```python
def sum(a, b):
  return a + b

def test_sum():
  assert sum(1, 2) == 3
```

And verify the condition wanted.

## Errors

Sometimes our code will raise intentional errors. It's important to test those as well. Pytest has a feature for that:

```python
import pytest

def test_some_test():
  with pytest.raises(ZeroDivisionError, match="division by zero"):
    divide(2, 0)
```

## Helpers

It's important to have help when testing. You will always want your unitary tests to be independent of each other and external logic (e.g. an API response). For that, one can use:

- fakes
- mocks
- stubs
- spies

## Exercises

On this module we have 1 batch of exercises. You can check them out below:

[Exercises](./exercises)

----

###### Feedback

As always, any feedback or suggestion is welcomed.

