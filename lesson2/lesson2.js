function maxMinSum(arr) {
  let arrLength = arr.length;
  let max;
  let min;
  let sum = 0;
  let result = "";


  for(let i = 0; i < arrLength - 1; i++) {
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

  result += `MAX => ${max}; \n`;

  for(let i = 0; i < arrLength - 1; i++) {
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

  result += `MIN => ${min}; \n`;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i]) {
      sum += arr[i]
    }
  }

  result += `SUM => ${sum}; \n\n`;

  return result
}

console.log(maxMinSum([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]));
console.log(maxMinSum([-1,-8,-2]));
console.log(maxMinSum([1,7,3]));
console.log(maxMinSum([1,undefined,3,5,-3]));
console.log(maxMinSum([1,NaN,3,5,-3]));
