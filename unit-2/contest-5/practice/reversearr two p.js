function reverseArr(arr, k, n) {
  var left = k;
  var right = n - 1;
  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }
  return arr;
}
function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
var arr = [1, 2, 3, 4]; //[3,4,1,2]
var n = arr.length;
var k = 6;
var k = k % n;
reverseArr(arr, 0, n);
reverseArr(arr, 0, k);
console.log(reverseArr(arr, k, n));
