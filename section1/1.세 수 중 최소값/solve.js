function solution(a, b, c) {
  if (a > 100) console.log('100보다 수가 큽니다.');
  if (b > 100) console.log('100보다 수가 큽니다.');
  if (c > 100) console.log('100보다 수가 큽니다.');

  inspection(a, b, c);
}

function inspection(a, b, c) {
  let min = a;
  if (a > b) min = b;
  if (min > c) min = c;
  console.log(min);
}

solution(4, 2, 11);
