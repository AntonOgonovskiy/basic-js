const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0
  }
  let one = s1.split('');
  let two = s2.split('');
  let count = 0;
  one.map((i) => {
    if (two.includes(i)) {
      let n = two.indexOf(i)
      two.splice(n, 1)
      count++
    }
  })
  return count
}

module.exports = {
  getCommonCharacterCount
};
