function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) i;
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 10));
