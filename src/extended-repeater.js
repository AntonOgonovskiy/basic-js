const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let add = ''

  if (options?.addition !== undefined) {
    if (options?.additionRepeatTimes !== undefined) {
      if (options?.additionSeparator !== undefined) {
        add = ((String(options.addition) + options.additionSeparator).repeat((options.additionRepeatTimes) - 1)) + (String(options.addition))
      } else {
        add = ((String(options.addition) + '|').repeat((options.additionRepeatTimes) - 1)) + (String(options.addition))
      }
    } else {
      add = String(options.addition)
    }
  }

  if (options?.repeatTimes === 1 && options?.addition === undefined) {
    return String(str)
  } else if (options?.repeatTimes === 1 && options?.addition !== undefined) {
    return String(str) + add
  }


  if (options?.repeatTimes !== undefined) {
    if (options?.separator !== undefined) {
      if (options?.addition !== undefined) {
        str = ((String(str) + add + options.separator).repeat((options.repeatTimes) - 1)) + (String(str) + add)
      } else {
        str = ((String(str) + options.separator).repeat((options.repeatTimes) - 1)) + String(str)
      }
    } else {
      if (options?.addition !== undefined) {
        str = ((String(str) + add + '+').repeat((options.repeatTimes) - 1)) + (String(str) + add)
      } else {
        str = ((String(str) + '+').repeat((options.repeatTimes) - 1)) + String(str)
      }
    }
  } else {
    str = String(str) + add
  }
  return str
}

module.exports = {
  repeater
};
