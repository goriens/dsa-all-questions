function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;
  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (var j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }
  var index = 0;
  var first = 0;
  var second = 0;
  while (first < n1 && second < n2) {
    if (L[first] <= R[second]) {
      arr[index] = L[first];
      first++;
    } else {
      arr[index] = R[second];
      second++;
    }
    index++;
  }
  while (first < n1) {
    arr[index] = L[first];
    first++;
    index++;
  }
  while (second < n2) {
    arr[index] = R[second];
    second++;
    index++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}
function printArray(arr, n) {
  console.log(arr);
}

var arr = [3, 5, 0, 9, 8];
var n = arr.length;

printArray(arr, n);
mergeSort(arr, 0, n - 1);
printArray(arr, n);
