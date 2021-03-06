function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.forEach((num) => {
    const squaredValue = num * num;
    if (arr2.includes(squaredValue)) {
      arr2.splice(arr2.indexOf(squaredValue), 1);
    }
  });
  if (arr2.length) false;
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.length !== arr2.length) false;
  let arr1Frequency = {};
  let arr2Frequency = {};

  for (let num of arr1) {
    arr1Frequency[num] = (arr1Frequency[num] || 0) + 1;
  }
  for (let num of arr2) {
    arr2Frequency[num] = (arr2Frequency[num] || 0) + 1;
  }

  console.log(arr1Frequency, arr2Frequency);

  for (let key in arr1Frequency) {
    const squaredValue = key ** 2;
    if (!(squaredValue in arr2Frequency)) {
      return false;
    }
    if (arr2Frequency[squaredValue] !== arr1Frequency[key]) {
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3], [4, 4, 9]));

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str1Counter = {};
  let str2Counter = {};

  for (let val of str1) {
    str1Counter[val] = (str1Counter[val] || 0) + 1;
  }

  for (let val of str2) {
    str2Counter[val] = (str2Counter[val] || 0) + 1;
  }
  console.log(str1Counter, str2Counter);
  for (let key in str1Counter) {
    if (!(key in str2Counter)) {
      return false;
    }
    if (str1Counter[key] !== str2Counter[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagram("aaz", "zaa"));

function sumZero(arr) {
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], arr[j]);
    if (arr[i] < 0 && arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    }
    j--;
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 4]));

function uniqueNumbers(arr) {
  if (!arr.length) {
    return 0;
  }
  let uniqueValues = 1;
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    if (arr[i] !== arr[j]) {
      uniqueValues++;
    }
  }
  return uniqueValues;
}

console.log(uniqueNumbers([1, 1, 1, 1, 1, 1, 2]));

function maxSum(arr, n) {
  let maxSum = 0;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let subArray = arr.slice(i, i + n);
    let sum = subArray.reduce((a, b) => a + b, 0);
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 2));

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 4));

function product(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * product(arr.slice(1));
}

console.log(product([1, 2, 3, 10]));

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(10));

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log("fib", fib(4));

// Given two arrays of equal or varying length
// return an array of the merged values, preserving order.

// Example input: [1,2,3], [3,7,8]
// Example output: [1,2,3,3,7,8]

// Example input: [3,4,5,5], [0,10]
// Example output: [0,3,4,5,5,10]

function mergeTwoSortedArrays(arrOne, arrTwo) {
  // your code here
  let mergedArr = [];

  let i = 0;
  let j = 0;

  while (i < arrOne.length || j < arrTwo.length) {
    if (i >= arrOne.length) {
      mergedArr.push(arrTwo[j]);
      j++;
    } else if (j >= arrTwo.length) {
      mergedArr.push(arrOne[i]);
      i++;
    } else {
      if (arrOne[i] < arrTwo[j]) {
        mergedArr.push(arrOne[i]);
        i++;
      } else {
        mergedArr.push(arrTwo[j]);
        j++;
      }
    }
  }
  return mergedArr;
}

console.log(mergeTwoSortedArrays([4, 5, 6], [2, 3, 5, 6]));

// Given an array, flatten it so that it contains no sub-arrays.

// Do so without using Array#flatten.

// Example input: [1,2,3,[4,5,[6]]]
// Example output: [1,2,3,4,5,6]

function flatten(arr, res = []) {
  // [1,2,3,4,5,]
  // Your solution here
  for (let item of arr) {
    if (Array.isArray(item)) return flatten(item, res);
    res.push(item);
  }
  return res;
}
