// O(n)^2
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr1) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// anagram checker
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const bothStrings = str1 + str2;
  let counter = {};
  for (let val of bothStrings) {
    counter[val] = (counter[val] || 0) + 1;
  }
  console.log(bothStrings);
  console.log(counter);
  for (let key in counter) {
    if (counter[key] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("carcar", "greens"));
