function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

let arr = [1, 2, 3, 4, 5];
let i = 1;
let j = 4;
console.log(swap(arr, i, j));
