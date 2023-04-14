const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aaabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = "";
  let i = 0;
  while (i < str.length) {
    let count = 1;
    let z = i + 1;
    while (z < str.length && str[i] === str[z]) {
      z = z + 1;
      count = count + 1;
    }
    result += `${count > 1 ? count : ""}${str[i]}`;

    i = z;
  }

  return result;
}

module.exports = {
  encodeLine,
};
