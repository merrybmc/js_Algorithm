// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여
// 그 순서대로 자연수를 만든다.

function solution(str) {
  let answer = '';

  for (let x of str) {
    // console.log(typeof x);
    // console.log(!isNaN(x));
    // if (!isNaN(x)) answer += x;
  }

  for (i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) answer += str[i];
  }

  return console.log(parseInt(answer));
}

let str = 'g0e00n2T0s8eSoft';

solution(str);
