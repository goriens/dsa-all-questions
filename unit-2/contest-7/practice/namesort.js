function swapOrNot(str1, str2) {
  let len = Math.min(str1.length, str2.length);
  for (var i = 0; i < len; i++) {
    if (str1[i].charCodeAt() !== str2[i].charCodeAt()) {
      if (str1[i] > str2[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}

function sort(names, marks) {
  var n = names.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (swapOrNot(names[j], names[j + 1]) === true) {
        swap(names, j, j + 1);
      }
    }
  }
  return [names, marks];
}
function swap(names, j, min) {
  let temp = names[min];
  names[min] = names[j];
  names[j] = temp;
}

var names = [
  { name: "rancho", marks: 45 },
  { name: "chatur", marks: 32 },
  { name: "raju", marks: 30 },
  { name: "farhan", marks: 28 },
  { name: "virus", marks: 32 },
  { name: "joy", marks: 45 },
];
var marks = [45, 32, 30, 28, 32, 45];
console.log(sort(names, marks));
