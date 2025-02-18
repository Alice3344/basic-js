const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    if (!Array.isArray(matrix) ) {
        return false;
    }
    if (matrix.length == 0) {
        return false;
    }
    let count = 0;
    matrix = matrix.flat();
    for (let i = 0; i< matrix.length; i++) {
      if (matrix[i] == '^^')  {
        count = count + 1;
      }
    }

    return count;
  }

module.exports = {
  countCats
};
