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
