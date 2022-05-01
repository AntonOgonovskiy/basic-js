const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this
  },
  removeLink(position) {
    if (position <= 0 || isNaN(position) || position > this.chain.length) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.chain.length; i++) {
      if (i === 0 && this.chain.length === 1) {
        this.chain[i] = '( ' + this.chain[i] + ' )'
        result += this.chain[i]
      } else if (i === 0) {
        this.chain[i] = '( ' + this.chain[i] + ' )~'
        result += this.chain[i]
      }
      else if (i === this.chain.length - 1) {
        this.chain[i] = '~( ' + this.chain[i] + ' )'
        result += this.chain[i]
      } else {
        this.chain[i] = '~( ' + this.chain[i] + ' )~'
        result += this.chain[i]
      }
    }
    this.chain.length = 0
    return result
  }
};

module.exports = {
  chainMaker
};
