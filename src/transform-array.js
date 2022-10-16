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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  // const newArr = arr.slice(0);
  // newArr.forEach((element, index, currentArr) => {
  //   if (element === DOUBLE_NEXT) {
  //     element = newArr[index++]
  //   } else if (element === DOUBLE_PREV) {
  //     element = newArr[index--]
  //   } else if (element === DISCARD_NEXT) {
  //     let deleteIndex = 1;

  //     if (newArr[index + 2] === DISCARD_PREV || newArr[index + 2] === DOUBLE_PREV) {
  //       deleteIndex = 3;
  //     }
  //     currentArr.splice(index, deleteIndex)
  //   }
  // });
  // throw new Error(newArray)2

  const newArr = arr.slice(0).reduce((acc, element, index, currentArr) => {
    if (element === DOUBLE_NEXT) {
      if (index + 1 <= currentArr.length - 1) {
        return [...acc, currentArr[index+1]];
      } else {
        return acc
      }
    } else if (element === DOUBLE_PREV) {
      const elementIndex = index - 1;

      if (elementIndex >= 0) {
        return [...acc, currentArr[elementIndex]];
      } else {
        return acc
      }
    } else if (element === DISCARD_NEXT) {
      if (index + 1 <= currentArr.length) {
        if (currentArr[index + 2] === DISCARD_PREV || currentArr[index + 2] === DOUBLE_PREV) {
          currentArr.splice(index, 2)
        } else {
          currentArr.splice(index + 1, index + 2)
        }
        return acc;
      } else {
        return acc
      }
    } else if (element === DISCARD_PREV) {
      return [ ...acc.slice(acc.length - 1)]
    } else {
      return [...acc, element]
    }
  }, [])

  return newArr;

}

module.exports = {
  transform
};
