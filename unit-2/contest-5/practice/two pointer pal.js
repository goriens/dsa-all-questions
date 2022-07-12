function isPal(str, n) {
  var start = 0;
  var end = n - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
var str = "rabebar";
var n = str.length;
console.log(isPal(str, n));
