// {
//   let a = [10, 13, 10, 12, 15];
//   let b = [12, 39, 30, 23, 11];
//   let c = [11, 25, 50, 53, 15];
//   let d = [19, 27, 29, 37, 27];
//   let e = [19, 13, 30, 13, 19];

//   function solution(n, a, b, c, d, e) {
//     let sum = [];

//     sum.push(a.reduce((a, b) => a + b));
//     sum.push(b.reduce((a, b) => a + b));
//     sum.push(c.reduce((a, b) => a + b));
//     sum.push(d.reduce((a, b) => a + b));
//     sum.push(e.reduce((a, b) => a + b));

//     for (i = 0; i < n; i++) {
//       sum.push(a[i] + b[i] + c[i] + d[i] + e[i]);
//     }

//     sum.push();
//     console.log(sum);
//   }

//   solution(5, a, b, c, d, e);
// }
{
  function solution(arr) {
    let length = arr.length;
    let result = [];

    let sum1 = 0;
    let sum2 = 0;

    for (i = 0; i < length; i++) {
      for (k = 0; k < length; k++) {
        // 행의 합
        sum1 += arr[i][k];

        // 열의 합
        sum2 += arr[k][i];
      }
      result.push(sum1, sum2);
      sum1 = 0;
      sum2 = 0;
    }

    // 대각선
    for (i = 0; i < length; i++) {
      sum1 += arr[i][i];
      sum2 += arr[i][length - 1 - i];
      result.push(sum1, sum2);
    }

    return console.log(Math.max(...result));
  }

  let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ];

  solution(arr);
}
