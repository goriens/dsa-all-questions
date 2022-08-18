function modify(x) {
  if (x % 2 === 0) {
    return 1;
  }
  x = x + 3;
  x = x * 4;
  return x;
}

var a = 4;
var b = 9;
console.log(modify(a));
console.log(modify(b));
