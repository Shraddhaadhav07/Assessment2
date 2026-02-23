function countNumber(arr, target) {
  let count = 0;

  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }

  return count;
}