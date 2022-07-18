function selectionSort(arr, n) {
  for (var i = 0; i < n - 1; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }
  return arr;
}
function swap(arr, min, i) {
  var temp = arr[min];
  arr[min] = arr[i];
  arr[i] = temp;
}

let arr = [6, 5, 2, 4, 1];
let n = arr.length;
console.log(selectionSort(arr, n));
