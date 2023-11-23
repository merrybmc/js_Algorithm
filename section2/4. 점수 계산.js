// OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다.
// 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는
// 가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다.

// 1번 문제가 맞는 경우에는 1점으로 계산한다.
// 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다.
// 연속으로 문제의 답이 맞는 경우 두 번째 문제에서는 2점, 세 번째 문제는 3점...
// 틀린 문제는 0점으로 계산한다.

function solution(...num) {
  let result = 0;
  let count = 0;
  for (i = 0; i < num.length; i++) {
    if (i === 0 && num[i] === 1) {
      count += 1;
      result += count;
    } else if (num[i] === 1) {
      count += 1;
      result += count;
    } else if (num[i] === 0) {
      count = 0;
    }
  }
  console.log(result);
}

solution(1, 0, 1, 1, 1, 0, 0, 1, 1, 0);
