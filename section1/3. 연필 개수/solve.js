// 연필 1 다스는 12자루
// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
// N명의 학생 수를 입력하면 필요한 연필의 다스 수를 계산
// 입력 25 => 출력 3

function solution(n) {
  if (n > 1000) return console.log('값이 1000보다 큽니다.');

  inspection(n);
}

function inspection(n) {
  console.log(Math.ceil(n / 12));
}

solution(25);
solution(178);
solution(1001);
