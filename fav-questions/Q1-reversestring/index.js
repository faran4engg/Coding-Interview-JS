// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

console.clear();

// solution 3 - Pro solution

function reverse(str) {
  let rev = '';
  return str.split('').reduce((rev, char)=>{
    return rev=char+rev;
  },'')
}

/*
// solution 2 - slightly better
function reverse(str) {
  let rev = '';
  for(const char of str) {
    rev = char + rev; // appending each char in reverse manner
  }
  return rev;
}
*/

/*
// solution 1 - beginner 
function reverse(str) {
  return str.split('').reverse().join('');
}
*/
console.log(reverse('apple') === 'leppa'); // false - it should be elppa
console.log(reverse('hello') === 'olleh'); // true
console.log(reverse('Greetings!') === '!sgniteerG'); // true