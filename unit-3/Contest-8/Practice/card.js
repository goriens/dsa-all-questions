let printArray = (arr, n) => {
  ans = "";
  for (let i = 0; i < n; i++) {
    ans += arr[i] + " ";
  }
  console.log(ans);
};

let randomize = (arr, n) => {
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;

randomize(arr, n);
printArray(arr, n);
