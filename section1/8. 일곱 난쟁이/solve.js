function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b);
  let fakeNum = sum - 100;

  for (i = 0; i < answer.length; i++) {
    for (j = i + 1; j < answer.length; j++) {
      if (answer[i] + answer[j] === 40) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        break;
      }
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
