const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ''
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if ((str[i] !== str[i + 1]) && i * 1 === 0) {
      result = result + str[i]
    }
    else if ((str[i] === str[i + 1]) && i * 1 === 0) {
      count++
    }
    else if (str[i - 1] !== undefined && str[i] === str[i + 1]) {
      count++
    }
    else if (str[i] !== str[i + 1] && str[i] === str[i - 1] && count > 0) {
      count++
      result = result + count + str[i]
      count = 0
    }
    else if ((str[i] !== str[i + 1]) && count === 0 && str[i - 1] !== undefined) {
      result = result + str[i]
    }
  }
  return (result)
}


module.exports = {
  encodeLine
};
