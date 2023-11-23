// N(1<=N<=100)명의 학생의 국어점수가 입력되면
// 각 학생의 등수를 입력된 순서대로 출력하는 프로그램 작성

function solution(...num) {
  let answer = Array.from({ length: num.length }, () => 1);

  for (i = 0; i < num.length; i++) {
    for (k = 0; k < num.length; k++) {
      console.log(num[i], num[k]);
      if (num[i] < num[k]) {
        answer[i]++;
      }
    }
  }
  console.log(answer);
}

solution(87, 89, 92, 100, 76);
