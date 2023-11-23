// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수 보다 큰 수만 출력

function solution(n, ...num) {
  for (i = 0; i < num.length; i++) {
    n <= num[i] && console.log(num[i]);
  }
}

solution(6, 7, 3, 9, 5, 6, 12);
