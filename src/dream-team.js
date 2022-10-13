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
//  (arr.slice(0).members.forEach[0]);
if (!Array.isArray(members)) {
  return false;
}
let dreamTeamName = '';
members.forEach((member) => {
  if (typeof member === 'string') {
    const firstChar = member.split(' ').join('')[0];
  if(typeof firstChar === 'string') {
    dreamTeamName += firstChar;
  }

  }

})
if (dreamTeamName.length > 0) {
  return dreamTeamName.toUpperCase().split('').sort().join('');
}
return false;

}

module.exports = {
  createDreamTeam
};
