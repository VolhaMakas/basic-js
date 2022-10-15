
/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const WINTER = 'winter';
const SPRING = 'spring';
const SUMMER = 'summer';
const AUTUMN = 'autumn';
const seasonMathes = {
  0: WINTER,
  1: WINTER,
  2: SPRING,
  3: SPRING,
  4: SPRING,
  5: SUMMER,
  6: SUMMER,
  7: SUMMER,
  8: AUTUMN,
  9: AUTUMN,
  10: AUTUMN,
  11: WINTER,
}
function getSeason(date) {
  if ( date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch {
    throw new Error('Invalid date!');
  }
  return seasonMathes[date.getMonth()]
  // if ( date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11 ) {
  //   return 'winter';
  // };
  // if ( date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
  //   return 'spring';
  // };
  // if ( date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
  //   return 'summer';
  // }
  //   if ( date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
  //     return 'fall';
  // }


  return 'false';
}

module.exports = {
  getSeason
};
