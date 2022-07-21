function runProgram(input) {
  var data = input.trim().split("\n");
  var t = +data[0];
  var test = 1;
  for (var i = 0; i < t; i++) {
    var n = +data[test++];
    var mat = [];
    for (var j = 0; j < n; j++) {
      mat.push(data[test++].trim().split(" ").map(Number));
    }
    nTravelsal(n, mat);
  }
}
function nTravelsal(n, mat) {
  var ans = [];
  for (var i = 0; i < n; i++) {
    ans.push(mat[i][0]);
  }
  var test = 1;
  for (var i = n - 2; i >= 0; i--) {
    ans.push(mat[i][test++]);
  }
  for (var i = 1; i < n; i++) {
    ans.push(mat[i][n - 1]);
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
