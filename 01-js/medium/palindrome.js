/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase()
  let l=0
  let r=str.length-1
  while(l<r){
    if(s[l]!==s[r]){
      return false
    }
    l+=1
    r-=1
  }
  return true;
}

module.exports = isPalindrome;
