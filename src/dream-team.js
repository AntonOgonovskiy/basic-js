const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let crew = ''
  members.forEach((item) => {
    if (typeof item === 'string') {
      for (let i = 0; i < item.length; i++) {
        if (item[i] === ' ') {
          continue
        } else {
          crew = crew + item[i].toUpperCase()
          break
        }
      }
    }
  })
  let result = crew.split('').sort().join('')
  return result
}

module.exports = {
  createDreamTeam
};
