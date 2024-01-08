function spiralOrder(matrix: number[][]): number[] {
  let rowStart = 0, rowEnd = matrix.length - 1;
  let colStart = 0, colEnd = matrix[0].length - 1;
  let result: number[] = [];

  while (rowStart <= rowEnd && colStart <= colEnd) {

    for (let i = colStart; i <= colEnd; i++)
      result.push(matrix[rowStart][i]);

    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i++)
      result.push(matrix[i][colEnd]);

    colEnd -= 1;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--)
        result.push(matrix[rowEnd][i]);

      rowEnd -= 1;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--)
        result.push(matrix[i][colStart]);

      colStart += 1;
    }
  }

  return result;
};