const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(mes, k) {
    if (mes === undefined || k === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let prob = [];
    let acc = 0;
    for (let i = 0; i < mes.length; i++) {
      if (mes[i] === ' ') {
        prob.push(i + acc)
        acc--
      }
    }
    let m = mes.toUpperCase().split(' ').join('');
    k = k.toUpperCase();
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let r = "";
    for (let i = 0; i < m.length; i++) {
      let mi = a.indexOf(m[i >= m.length ? i % m.length : i]);
      if (mi >= 0) {
        let ki_s = k[i >= k.length ? i % k.length : i];
        let ki = a.indexOf(ki_s);
        let c = a[(a.length + (mi + ki)) % a.length];
        r += c;
      } else {
        let c = m[((i >= m.length) ? i % m.length : i)];
        r += c;
      }
    }
    let result = ''
    for (let i = 0; i < r.length; i++) {
      if (prob.includes(i)) {
        result += ' ' + r[i];
      } else {
        result += r[i]
      }
    }
    if (this.type === false) {
      result = result.split('').reverse().join('')
    }
    return (result);
  }


  decrypt(mes, k) {
    if (mes === undefined || k === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let prob = [];
    let acc = 0;
    for (let i = 0; i < mes.length; i++) {
      if (mes[i] === ' ') {
        prob.push(i + acc)
        acc--
      }
    }
    let m = mes.toUpperCase().split(' ').join('');
    k = k.toUpperCase();
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let r = "";
    for (let i = 0; i < m.length; i++) {
      let mi = a.indexOf(m[i >= m.length ? i % m.length : i]);
      if (mi >= 0) {
        let ki_s = k[i >= k.length ? i % k.length : i];
        let ki = -(a.indexOf(ki_s));
        let c = a[(a.length + (mi + ki)) % a.length];
        r += c;
      } else {
        let c = m[((i >= m.length) ? i % m.length : i)];
        r += c;
      }
    }
    let result = ''
    for (let i = 0; i < r.length; i++) {
      if (prob.includes(i)) {
        result += ' ' + r[i];
      } else {
        result += r[i]
      }
    }
    if (this.type === false) {
      result = result.split('').reverse().join('')
    }
    return (result);
  }
}

module.exports = {
  VigenereCipheringMachine
};
