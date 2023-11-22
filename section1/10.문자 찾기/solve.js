// 한 개의 문자열을 입력받고, 특정 문자열을 입력받아
// 해당특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내기

function solution(strArr, str) {
  let count = 0;

  for (i = 0; i < strArr.length; i++) {
    strArr[i] === str && count++;
  }

  console.log(count);
}

solution('COMPUTERPROGRAMMING', 'R');
