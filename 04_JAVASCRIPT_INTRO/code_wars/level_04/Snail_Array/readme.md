Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

```javascript
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
// result:
snail(array) #=> [1,2,3,6,9,8,7,4,5]
```

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

## Comments

This one i decided to try 3 different solutions as i thought of new ways of approaching the problem.