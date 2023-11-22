function solution(a, b, c) {
  let answer;
  // a가 b보다 작으면 answer = a
  if (a < b) answer = a;
  // 아니면 answer = b
  else answer = b;

  // c 가 answer보다 작으면 answer는 c
  if (c < answer) answer = c;
  console.log(answer);
}

solution(6, 5, 11);
