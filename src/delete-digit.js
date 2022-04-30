const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0
  let str = n.toString().split('');
  for (let i = 0; i < str.length; i++) {
    let vr = str.splice(i, 1)
    if (+(str.join('')) > result) {
      result = +str.join('')
    }
    str.splice(i, 0, vr)
  }
  return (result)
}

module.exports = {
  deleteDigit
};
