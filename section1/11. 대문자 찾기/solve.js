// 한 개의 문자열을 입력받아
// 해당 문자열에 알파벳 대문자가 몇개 있는지 알아내는 프로그램

function solution(str) {
  let count = 0;

  for (i = 0; i < str.length; i++) {
    str[i].toUpperCase() === str[i] && count++;
  }

  console.log(count);
}

solution('KoreaTimeGood');
