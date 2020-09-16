var Sudoku = function(data) {
  return {
    isValid: function() {
      let sudokuLength = data[0].length
      let square1 = [];
      let square2 = [];
      let square3 = [];
      let square4 = [];
      let square5 = [];
      let square6 = [];
      let square7 = [];
      let square8 = [];
      let square9 = [];

      // check lines (rows) & columns
      for (i = 0; i < data.length; i += 1) {
        if (sudokuLength !== data[i].length) {
          return false
        }

        let possibleNumbersRow = [...Array(sudokuLength+1).keys()];
        let possibleNumbersColumn = [...Array(sudokuLength+1).keys()];
        possibleNumbersRow.shift() //gets zero out
        possibleNumbersColumn.shift() //gets zero out

        for (j = 0; j < sudokuLength; j += 1) {
          if(sudokuLength === 9) {
            let testSquares = addSquares(i, j);

            if (testSquares) {
              return false
            }
          }


          let currentRowNumber = data[i][j];
          let numberRowCheck = possibleNumbersRow.indexOf(currentRowNumber);
          let currentColumnNumber = data[j][i];
          let numberColumnCheck = possibleNumbersColumn.indexOf(currentColumnNumber);

          if (numberRowCheck != -1) {
            possibleNumbersRow[numberRowCheck] = 'ok'
          } else {
            return false
          }

          if (numberColumnCheck != -1) {
            possibleNumbersColumn[numberColumnCheck] = 'ok'
          } else {
            return false
          }
        }

      }

      return true

      function addSquares(columnIndex, rowIndex) {
        if (columnIndex < 3) {
          if (rowIndex < 3) {
            let num = data[columnIndex][rowIndex];
            if (square1.includes(num)){
              return true
            }
            square1.push(num);
          } else if (rowIndex > 2 && rowIndex < 6) {
            let num = data[columnIndex][rowIndex];
            if (square2.includes(num)){
              return true
            }
            square2.push(num);
          } else {
            let num = data[columnIndex][rowIndex];
            if (square3.includes(num)){
              return true
            }
            square3.push(num);
          }
        } else if (columnIndex > 2 && columnIndex < 6) {
          if (rowIndex < 3) {
            let num = data[columnIndex][rowIndex];
            if (square4.includes(num)){
              return true
            }
            square4.push(num);
          } else if (rowIndex > 2 && rowIndex < 6) {
            let num = data[columnIndex][rowIndex];
            if (square5.includes(num)){
              return true
            }
            square5.push(num);
          } else {
            let num = data[columnIndex][rowIndex];
            if (square6.includes(num)){
              return true
            }
            square6.push(num);
          }
        } else {
          if (rowIndex < 3) {
            let num = data[columnIndex][rowIndex];
            if (square7.includes(num)){
              return true
            }
            square7.push(num);
          } else if (rowIndex > 2 && rowIndex < 6) {
            let num = data[columnIndex][rowIndex];
            if (square8.includes(num)){
              return true
            }
            square8.push(num);
          } else {
            let num = data[columnIndex][rowIndex];
            if (square9.includes(num)){
              return true
            }
            square9.push(num);
          }
        }
      }
    }
  };
};

var goodSudoku2 = new Sudoku([
  [1,4, 2,3],
  [3,2, 4,1],

  [4,1, 3,2],
  [2,3, 1,4]
]);

console.log(goodSudoku2.isValid())

