function notK(arr, k, n) {
  let left = -1;
  let right = -1;
  let sum = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] % k !== 0) {
      sum += arr[i];
      if (left === -1) {
        left = i;
      }
      right = i;
    }
  }
  let window_size = 0;

  if (sum % k !== 0) {
    window_size = arr.length;
  }
  if (left === -1) {
    window_size = 0;
  }
  let left_window_size = arr.length - (left + 1);
  let no_of_remove_element = arr.length - right;
  let right_window_size = arr.length - no_of_remove_element;
  //   if (left_window_size > right_window_size) {
  //     return left_window_size;
  //   } else {
  //     right_window_size;
  //   }
  return Math.max(left_window_size, right_window_size);
}

var arr = [2, 3, 4, 6];
var k = 3;
var n = arr.length;
console.log(notK(arr, k, n));
