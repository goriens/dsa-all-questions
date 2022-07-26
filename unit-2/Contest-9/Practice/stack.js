var array = [];
var top = -1;

function push(data) {
  array[++top] = data;
}

function pop() {
  if (top == -1) return "Empty Stack";
  ans = array[top];
  top--;
  return ans;
}

function peek() {
  if (top == -1) return "Empty Stack";
  return array[top];
}
