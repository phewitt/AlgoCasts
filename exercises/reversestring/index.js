// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reverse().join('');
}

reverse('asdf');

function reverse2(str) {
  let reversed = '';

  for (let c of str) {
    console.log("this is c: " + c);
    console.log("this is reversed: " + reversed);
    reversed = c + reversed;
  }

  return reversed
}

function reversed3(str) {
  str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
