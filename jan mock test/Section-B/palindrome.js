function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  let start = 0;
  let end = cleanStr.length - 1;

  while (start < end) {
    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

console.log(isPalindrome("racecar"));
