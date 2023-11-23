function solution(n, ...string) {
  let numList = [];

  for (let i = 0; i < n; i++) {
    numList.push(string[i].length);
  }

  console.log(typeof numList[1]);
}

solution(5, 'teacher', 'time', 'student', 'beautiful', 'good');
