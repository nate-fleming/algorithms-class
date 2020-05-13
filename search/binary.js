function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== num && start < end) {
    if (num < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));

function hasDuplicates(arr) {
  let lookUp = {};
  for (let val of arr) {
    lookUp[val] = (lookUp[val] || 0) + 1;
  }
  for (let key in lookUp) {
    if (lookUp[key] > 1) return true;
  }
  return false;
}

console.log(hasDuplicates([1, 2, 3, 4, 5, 2]));

function hasDuplicates(arr) {
  let lookUp = {};
  for (let val of arr) {
    if (lookUp[val]) return true;
    lookUp[val] = true;
  }
  return false;
}

function romanValue2(str) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let previousLetterValue;
  for (let letter of str) {
    if (values[letter] <= previousLetterValue || result === 0) {
      result += values[letter];
    } else {
      result += values[letter] - previousLetterValue * 2;
    }
    previousLetterValue = values[letter];
  }
  return result;
}
