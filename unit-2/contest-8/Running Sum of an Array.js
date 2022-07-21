function runProgram(input) {
  var data = input.trim().split("\n");
  var t = +data[0];
  var test = 1;
  for (var i = 0; i < t; i++) {
    var n = +data[test++];
    var arr = data[test++].trim().split(" ").map(Number);
    runsum(n, arr);
  }
}
function runsum(n, arr) {
  var sum = 0;
  var ans = [];
  for (var i = 0; i < n; i++) {
    sum = sum + arr[i];
    ans.push(sum);
  }
  console.log(ans.join(" "));
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
