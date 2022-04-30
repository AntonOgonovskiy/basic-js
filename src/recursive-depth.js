const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;

  }
  calculateDepth(arr) {
    this.array = arr;
    if (!Array.isArray(this.array)) {
      return this.depth
    } else {
      this.depth++
      for (let i in this.array) {
        if (Array.isArray(this.array[i])) {
          this.array = this.array.flat()
          return this.depth += this.calculateDepth(this.array)
        }
      }

    }
    console.log(this.depth)
  }
}
const depthCalc = new DepthCalculator();
depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])
module.exports = {
  DepthCalculator
};
