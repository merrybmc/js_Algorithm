function solution(strArr, str) {
  let answer = [];

  let number = 0;

  for (i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'e') {
      number = 0;
      answer.push(number);
    } else if (strArr[i] !== 'e') {
      //   number += 1;
      number++;
      answer.push(number);
    }
  }

  console.log(answer);
  number = 0;

  for (i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] === 'e') {
      number = 0;
    } else if (strArr[i] !== 'e') {
      //   number += 1;
      number++;
      if (answer[i] > number) {
        answer[i] = number;
      }
    }
  }

  return console.log(answer);
}

solution('teachermode', 'e');
