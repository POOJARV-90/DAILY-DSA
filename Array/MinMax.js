// find minimum and maximum in an arrat

let arr = [4, 3, 0, 8, 10, 1];

function MinMax(arr) {
  let min = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }
  return [min, max];
}
const result = MinMax(arr);
console.log(result);
