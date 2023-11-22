function solution(str) {
  let toStr = [];

  for (i = 0; i < str.length; i++) {
    str[i].toUpperCase() === str[i]
      ? toStr.push(str[i].toLowerCase())
      : toStr.push(str[i].toUpperCase());
  }

  console.log(toStr.join(''));
}

solution('StuDY');
