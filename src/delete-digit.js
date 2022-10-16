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
  let array = [...n.toString()];
  let maxNum = 0;
  for ( let i = 0; i < array.length; i++) {
    const newArray = [...array]
    newArray.splice(i, 1)
    const num = Number(newArray.join(''));

    if ( maxNum < num) {
      maxNum = num;

    }
  }
  return maxNum;

}



module.exports = {
  deleteDigit
};
