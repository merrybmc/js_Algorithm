function InputNumber(a, b, c) {
  if (a > 100) return;
  if (b > 100) return;
  if (c > 100) return;

  MinNum(a, b, c);
}

function MinNum(a, b, c) {
  let result = a;
  if (a > b) result = b;
  if (result > c) result = c;
  console.log(result);
}

InputNumber(4, 2, 11);
