const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let arr = [...array];
  arr.map((item, index) => {
    if (item === '--discard-next') {
      if (arr[index + 2] === '--double-prev' || arr[index + 2] === '--discard-prev') {
        arr.splice(index + 1, 1)
        arr.splice(index + 1, 1)
        arr.splice(index, 1)
      } else {

        arr.splice(index + 1, 1)
        arr.splice(index, 1)
      }
    }
    if (item === '--discard-prev') {
      if (arr[index - 1] === undefined) {
        arr.splice(index, 1)
      } else {
        arr.splice(index - 1, 1)
        arr.splice(index - 1, 1)
      }
    }
    if (item === '--double-next') {
      if (arr[index + 1] === undefined) {
        arr.splice(index, 1)
      } else {
        arr.splice(index + 1, 0, arr[index + 1])
        arr.splice(index, 1)
      }
    }
    if (item === '--double-prev') {
      if (arr[index - 1] === undefined) {
        arr.splice(index, 1)
      } else {
        arr.splice(index - 1, 0, arr[index - 1])
        arr.splice(index + 1, 1)
      }
    }
  })
  return arr;
}

module.exports = {
  transform
};
