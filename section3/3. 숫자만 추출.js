// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여
// 그 순서대로 자연수를 만든다.

function solution(str) {
  let answer = '';

  //   for (let x of str) {
  // console.log(typeof x);
  // if (!isNaN(x)) answer += x;
  //   }

  for (i = 0; i < str.length; i++) {
    // console.log(typeof str[i]);
    // console.log(str[i] === isNaN);

    if (str[i] === isNaN) answer += str[i];
  }

  return console.log(answer);
}

let str = 'g0e00n2T0s8eSoft';

solution(str);
