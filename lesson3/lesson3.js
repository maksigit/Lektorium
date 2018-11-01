function getWaterAmount(arr) {
  let arrLength = arr.length;
  let current = 0;
  let total = 0;
  let boo = false;
  let maxCurrent2 = [];

  function maxCurrent(cur, arr) {
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] > cur) {
        boo = false;
        break
      } else {
        boo = true
      }
    }
    return boo
  }

  for (let i = 0; i < arrLength; i++) {
    if (current < arr[i] && arr[i] > arr[i + 1]) {
      current = arr[i];
      if (current > arr[i + 1] && arr[i + 1] < arr[i + 2] && maxCurrent(current, arr)) {
        maxCurrent2 = arr.slice(i + 1);
        maxCurrent2 = Math.max.apply(null, maxCurrent2);
        if (current > maxCurrent2) {
          total += (maxCurrent2 - arr[i + 1]);
        } else {
          total += (current - arr[i + 1])
        }
      } else if (i !== arrLength - 2) {

        total += (current - arr[i + 1])
      }
    } else if (arr[i + 1] < current) {
      maxCurrent2 = arr.slice(i + 1);
      maxCurrent2 = Math.max.apply(null, maxCurrent2);
      if (current > maxCurrent2) {
        total += (maxCurrent2 - arr[i + 1]);
      } else {
        total += (current - arr[i + 1])
      }
    }
  }

  return total
}

console.log(getWaterAmount([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); // 17
console.log(getWaterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); //10
console.log(getWaterAmount([7, 0, 1, 3, 4, 1, 2, 1])); // 9
console.log(getWaterAmount([2, 2, 1, 2, 2, 3, 0, 1, 2])); // 4
console.log(getWaterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])); // 24
console.log(getWaterAmount([2, 2, 2, 2, 2])); // 0