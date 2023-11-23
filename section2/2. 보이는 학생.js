// N(1<=N<=1000)명의 학생을 일렬로 세웠습니다.
// 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때
// 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램 작성

function solution(...num) {
  let max = num[0];
  let count = 1;

  for (i = 1; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i];

      count++;
    }
  }
  return console.log(count);
}

solution(130, 135, 148, 140, 145, 150, 150, 153);
