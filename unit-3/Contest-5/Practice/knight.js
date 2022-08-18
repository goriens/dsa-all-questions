function runProgram(input) {
  var [row, col, n] = input.trim().split(" ").map(Number);
  var ans = Knight(row, col, n, 0);
  var mat = {};
  var count = 0;
  for (var i = 0; i < ans.length; i++) {
    if (!(ans[i] in mat)) {
      count++;
      mat[ans[i]] = 1;
    }
  }
  console.log(count);
}
function Knight(row, col, n, curr) {
  if (curr > n) {
    return [];
  }
  if (row < 1 || col < 1 || row > 10 || col > 10) {
    return [];
  }
  if (curr == n) {
    return [[row, col]];
  }
  var ans = [];
  ans = ans.concat(Knight(row + 1, col + 2, n, curr + 1));
  ans = ans.concat(Knight(row + 1, col - 2, n, curr + 1));
  ans = ans.concat(Knight(row - 1, col + 2, n, curr + 1));
  ans = ans.concat(Knight(row - 1, col - 2, n, curr + 1));
  ans = ans.concat(Knight(row + 2, col + 1, n, curr + 1));
  ans = ans.concat(Knight(row + 2, col - 1, n, curr + 1));
  ans = ans.concat(Knight(row - 2, col + 1, n, curr + 1));
  ans = ans.concat(Knight(row - 2, col - 1, n, curr + 1));
  return ans;
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
runProgram(`3 3 1`);
