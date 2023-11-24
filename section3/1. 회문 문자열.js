// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열이면 회문 문자열 이라고 함
// 문자열이 입력되고 해당 문자열이 회문 문자열이면 "YES"
// 회문 문자열이 아니면 "NO" 를 출력하는 프로그램을 작성
// 단 회문을 검사할 때 대소문자를 구분하지 않는다.

// case 1. for문
// case 2. split
// case 3. reverse

function solution(string) {
  let toLowerString = string.toLowerCase();
  let length = toLowerString.length;
  let result = 'YES';

  // for 문
  let divide = Math.floor(length / 2);

  for (i = 0; i < divide; i++) {
    if (toLowerString[i] !== toLowerString[length - 1 - i]) {
      result = 'NO';
      break;
    }
  }

  // split / reverse

  let reverse = [...split].reverse();
  console.log(split, reverse);
  for (i = 0; i < length; i++) {
    if (split[i] !== reverse[i]) {
      result = 'NO';
    }
  }

  return console.log(result);
}

solution('gooG');
solution('goooG');
solution('gooaG');
