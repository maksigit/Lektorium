function max(arr) {
  let max;

  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i + 1]) {
      if(max > arr[i]) {
        continue
      } else {
        max = arr[i]
      }

    } else {
      if(max > arr[i + 1]) {
        continue
      } else {
        max = arr[i + 1]
      }
    }
  }

  return max
}

function min(arr) {
  let min;
  
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < arr[i + 1]) {
      if(min < arr[i]) {
        continue
      } else {
        min = arr[i]
      }

    } else {
      if(min < arr[i + 1]) {
        continue
      } else {
        min = arr[i + 1]
      }
    }
  }
  
  return min
}

function sum (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      sum += arr[i]
    }
  }

  return sum
}


function maxMinSum(arr, func) {
  let result;

  if (func === max) {
    result = max(arr);
  } else if (func === min) {
    result = min(arr);
  } else {
    result = sum(arr);
  }

  return result
}

let currentArr = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];

console.log(currentArr);

console.log('MAX =>', maxMinSum(currentArr, max));
console.log('MIN =>', maxMinSum(currentArr, min));
console.log('SUM =>', maxMinSum(currentArr, sum));

currentArr = [-1,-8,-2];
console.log(currentArr);

console.log('MAX =>', maxMinSum(currentArr, max));
console.log('MIN =>', maxMinSum(currentArr, min));
console.log('SUM =>', maxMinSum(currentArr, sum));

currentArr = [1,7,3];
console.log(currentArr);

console.log('MAX =>', maxMinSum(currentArr, max));
console.log('MIN =>', maxMinSum(currentArr, min));
console.log('SUM =>', maxMinSum(currentArr, sum));

currentArr = [1,undefined,3,5,-3];
console.log(currentArr);

console.log('MAX =>', maxMinSum(currentArr, max));
console.log('MIN =>', maxMinSum(currentArr, min));
console.log('SUM =>', maxMinSum(currentArr, sum));

currentArr = [1,NaN,3,5,-3];
console.log(currentArr);

console.log('MAX =>', maxMinSum(currentArr, max));
console.log('MIN =>', maxMinSum(currentArr, min));
console.log('SUM =>', maxMinSum(currentArr, sum));
