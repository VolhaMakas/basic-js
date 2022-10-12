const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats(
 *
 * [
 *
 *  [0, 1, '^^'],
 *
 *  [0, '^^', 2],
 *
 *  ['^^', 1, 2]
 *
 * ]
 *
 * ) => 3`
 *
 */
// [1, 2, 3,].foreach((value) => { 1-1, 2-2, 3-3})
// [[1, 2, 3], [2, 3, 4], [4, 5, 6]].foreach((value) => {1. [1, 2, 3], 2})
function countCats(matrix) {
let sum = 0;
matrix.forEach((arr) => {
  arr.forEach((arr2) => {
   if (arr2 === "^^") {
     sum++
   }

  })

})
return sum;

}

module.exports = {
  countCats
};
