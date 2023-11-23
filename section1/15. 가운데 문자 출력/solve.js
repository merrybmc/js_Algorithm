function solution(string) {
  if (string.length > 100) return console.log('문자열의 길이가 100을 넘습니다.');

  string.length % 2 !== 0 && console.log(string[Math.floor(string.length / 2)]);

  if (string.length % 2 === 0) {
    let middle = string.length / 2;
    console.log(string[middle - 1] + string[middle]);
  }
}

solution('study');
solution('good');
solution('backend');
solution('helloworld');
// solution(
//   'studystudystudystudystudystudystudystudystudystudystudystudystudystudystudystudystudystudystudystudystudystudy'
// );
