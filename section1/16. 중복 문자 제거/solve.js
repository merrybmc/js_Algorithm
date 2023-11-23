function solution(string) {
  let split = string.split('');
  let setObj = new Set(split);
  let setArr = Array.from(setObj);

  return console.log(setArr.join(''));
}

solution('ksekkset');
