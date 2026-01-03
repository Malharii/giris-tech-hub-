function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > largest) {
      secondLargestNum = largest;
      largest = num;
    } else if (num > secondLargestNum && num < largest) {
      secondLargestNum = num;
    }
  }

  return secondLargestNum === -Infinity ? null : secondLargestNum;
}

console.log(secondLargest([10, 5, 8, 20, 15]));
