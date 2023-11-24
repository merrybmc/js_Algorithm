// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 펠린드롬이라고 합니다.
// 문자열이 입력되고 해당 문자열이 펠린드롬이면 "YES"
// 아니면 "NO"를 출력하는 프로그램을 작성
// 검사할 때 알파벳만 가지고 검사
// 알파벳 이외의 문자들은 무시

function solution(str) {
  str = Array.from(str.toLowerCase().replace(/[^a-z]/g, ''));
  let reverse = [...str].reverse();
  let result = 'YES';

  for (i = 0; i < str.length; i++) {
    if (str[i] !== reverse[i]) {
      result = 'NO';
    }
  }

  return console.log(result);
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';

solution(str);
