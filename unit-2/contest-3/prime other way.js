//old
/*function isPrime(n) {
  var count = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
} */
function isPrime(n) {
  var check = true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
  return check == true ? true : false;
}
let n = 62;
console.log(isPrime(n));
