function runProgram(input) {
  var data = input.trim().split("\n");
  var n = +data[0];
  var arr = data[1].trim().split(" ").map(Number);
  var indexs = [];
  for (var i = 0; i < n; i++) {
    indexs.push(i);
  }
  console.log(sort(n, arr, indexs));
}
function sort(n, arr, indexs) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1, indexs);
      }
    }
  }
  return indexs.join(" ");
}
function swap(arr, j, min, index) {
  var temp = arr[j];
  arr[j] = arr[min];
  arr[min] = temp;
  temp = index[j];
  index[j] = index[min];
  index[min] = temp;
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
