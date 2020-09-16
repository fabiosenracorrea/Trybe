Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array, i.e:

```javascript
[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
```

Rules for validation

1. Data structure dimension: NxN where N > 0 and √N == integer
2. Rows may only contain integers: 1..N (N included)
3. Columns may only contain integers: 1..N (N included)
4. 'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)

# Comments

RELEVANT INFO: The function on code wars was structured like this. Since tests resolved around having the isValid() call, i used only this function to code to make it a little more readable to my colegues that may get confused with private use.
