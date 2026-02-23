function isPalindrome(str) {
  let reversed = reverseString(str);
  return str === reversed;
}