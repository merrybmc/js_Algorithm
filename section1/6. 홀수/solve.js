// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수를 골라 그 합을 구하고
// 홀수들 중에 최소값을 구하는 프로그램 작성
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
// 이들 중 홀수는 77, 41, 53, 85가 되고 합은 256, 최소값은 41이 된다.

function solution(...args) {
  let odd = [];

  for (i = 0; i < args.length; i++) {
    args[i] % 2 !== 0 && odd.push(args[i]);
  }

  let sum = odd.reduce((a, b) => a + b);
  let min = Math.min(...odd);

  console.log(sum, min);
}

solution(12, 77, 38, 41, 53, 92, 85);
