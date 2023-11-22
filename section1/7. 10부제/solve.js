// 10부제
// 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면
// 해당 자동차의 운행을 금지
// 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다.

// 첫번째 파라미터에는 날짜의 일의 자리 숫자가 주어지고
// 두번째 파라미터에는 7대의 자동차 번호의 끝 두자리 숫자가 주어진다.
// 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력

function solution(n, cars) {
  let result = 0;

  for (i = 0; i < cars.length; i++) {
    String(cars[i])[1] === String(n) && result++;
  }

  console.log(result);
}

solution(3, [25, 23, 11, 47, 53, 17, 33]);
