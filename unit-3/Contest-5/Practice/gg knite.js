function runProgram(input) {
  var [i, j, n] = input.split(" ").map(Number);
  var ans = array(i, j, n, 0);
  var mat = {};
  var a = 0;
  for (var k = 0; k < ans.length; k++) {
    if (!(ans[k] in mat)) {
      a++;
      mat[ans[k]] = 1;
    }
  }
  console.log(a);
}
function array(i, j, n, cur) {
  if (cur > n) {
    return [];
  }
  if (i < 1 || j < 1 || i > 10 || j > 10) {
    return [];
  }
  if (cur == n) {
    return [[i, j]];
  }
  var ans = [];
  ans = ans.concat(array(i + 1, j + 2, n, cur + 1));
  ans = ans.concat(array(i + 1, j - 2, n, cur + 1));
  ans = ans.concat(array(i - 1, j + 2, n, cur + 1));
  ans = ans.concat(array(i - 1, j - 2, n, cur + 1));
  ans = ans.concat(array(i + 2, j + 1, n, cur + 1));
  ans = ans.concat(array(i + 2, j - 1, n, cur + 1));
  ans = ans.concat(array(i - 2, j + 1, n, cur + 1));
  ans = ans.concat(array(i - 2, j - 1, n, cur + 1));
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
