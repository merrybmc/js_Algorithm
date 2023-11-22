// 삼각형 판별
// 제일 큰 길이를 가진 변이 나머지 변 2개의 합보다 커야함

{
  function solution(a, b, c) {
    if (a > 100) return console.log('100보다 수가 큽니다.');
    if (b > 100) return console.log('100보다 수가 큽니다.');
    if (c > 100) return console.log('100보다 수가 큽니다.');

    inspection(a, b, c);
  }

  function inspection(a, b, c) {
    if (c < a) return console.log('NO');
    if (c < b) return console.log('NO');
    return console.log('YES');
  }

  // solution(6, 7, 11);
  // solution(13, 33, 17);
  //   solution(101, 99, 89);
}

{
  function solution(a, b, c) {
    if (a > 100) return console.log('100보다 수가 큽니다.');
    if (b > 100) return console.log('100보다 수가 큽니다.');
    if (c > 100) return console.log('100보다 수가 큽니다.');

    inspection(a, b, c);
  }

  function inspection(a, b, c) {
    let answer = 'YES';
    let max = a;
    // 1변 + 2변 + 3변
    let sum = a + b + c;

    // b가 max보다 크면
    if (b > max) max = b;
    // c가 max보다 크면
    if (c > max) max = c;

    // 3변의 합 - max = 1 + 2변의 합
    // 1 + 2변의 합이 3변의 길이보다 작거나 같으면 NO
    if (sum - max <= max) answer = 'NO';

    console.log(answer);
  }

  solution(6, 7, 11);
  solution(13, 33, 17);
  solution(101, 99, 98);
}
