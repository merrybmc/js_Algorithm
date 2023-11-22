// 1부터 N까지 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력

function solution(n) {
  if (n > 20) return console.log('n이 20보다 큽니다.');

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    console.log(sum);
    sum += i;
  }
  console.log(sum);
}

solution(6);

// function inspection(n) {
//   console.log(sum);
// }

// solution(10);
