function solution(n, strArr) {
  let setObj = new Set(strArr);
  let setArr = Array.from(setObj);
  for (i = 0; i < setArr.length; i++) {
    console.log(setArr[i]);
  }
}

solution(5, ['good', 'time', 'good', 'time', 'student']);
