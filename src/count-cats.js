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
let Number;
function countCats(matrix) {
  Number = 0
  matrix.map((item) => {

    {
      item.map((item) => {
        if (item === '^^') {
          Number++
        }
      })
    }
  })
  return Number
}
module.exports = {
  countCats
};
