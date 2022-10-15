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
 * * `--discard-next` excludes the next element of the array from the transformed array.
* `--discard-prev` excludes the previous element of the array from the transformed array.
* `--double-next` duplicates the next element of the array in the transformed array.
* `--double-prev` duplicates the previous element of the array in the transformed array.
 */
const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';
function transform(arr) {
  const newArray = arr.slice(0);
  newArray.forEach((element, index) => {
 if (element === DOUBLE_NEXT) {

 }

  });

}

module.exports = {
  transform
};
