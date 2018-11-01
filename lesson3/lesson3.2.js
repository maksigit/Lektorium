
function arrToObj(arr) {
  let totalObj = {};

  for (let i = 0; i < arr.length; i++) {
    totalObj[i + ' => ' + arr[i]] = i;
  }

  return totalObj
}


console.log (arrToObj([1, 0, 'asd', 3, undefined, 8]));