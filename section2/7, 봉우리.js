// let arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ];

function solution(arr) {
  let length = arr.length;
  let answer = 0;
  // let map = [];

  // for (i = 0; i < length + 2; i++) {
  //   map.push(Array.from({ length: length + 2 }, () => 0));
  // }

  // for (i = 0; i < length; i++) {
  //   for (k = 0; k < length; k++) {
  //     map[i + 1][k + 1] = arr[i][k];
  //   }
  // }

  // 12시 방향, 6시 방향, 3시 방향, 9시 방향
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  // 0 1 2 3 4
  for (i = 0; i < length; i++) {
    // 0 1 2 3 4
    for (j = 0; j < length; j++) {
      let flag = 1;
      // 0 1 2 3
      for (k = 0; k < 4; k++) {
        // -1 좌(벽) 상 우 하(벽)
        // nx = 0 + -1, 0, 1, 0 // -1 0 1 0
        // nx = 1 + -1, 0, 1, 0 // 0 1 2 1
        // nx = 2 + -1, 0, 1, 0 // 1 2 3 2
        // nx = 3 + -1, 0, 1, 0 // 2 3 4 3

        //
        // ny = 0 + 0, 1, 0, -1 // 0 1 0 -1
        // ny = 1 + 0, 1, 0, -1 // 1 2 1 0
        // ny = 2 + 0, 1, 0, -1 // 2 3 2 1
        // ny = 3 + 0, 1, 0, -1 // 3 4 3 2
        let nx = i + dx[k];
        let ny = j + dy[k];
        // nx >= 0 &&
        // nx < length(5) &&
        // ny >= 0 &&
        // ny < length(5) &&
        // arr[nx][ny] >= arr[i][j]

        // let arr = [
        //   [5, 3, 7, 2, 3],
        //   [3, 7, 1, 6, 1],
        //   [7, 2, 5, 3, 4],
        //   [4, 3, 6, 4, 1],
        //   [8, 7, 3, 5, 2],
        // ];

        // i 0    1    2    3    4
        // j 0(5) 0(3) 0(7) 0(4) 0(8)
        //   1(3) 1(7) 1(2) 1(3) 1(7)
        //   2(7) 2(1) 2(5) 2(6) 2(3)
        //   3(2) 3(6) 3(3) 3(4) 3(5)
        //   4(3) 4(1) 4($) 4(1) 4(2)

        // arr x -1 0 1 0
        //     y 0 1 0 -1

        //     x 0 1 2 1
        //     y 1 2 1 0

        //     x 1 2 3 2
        //     y 2 3 2 1

        //     x 2 3 4 3
        //     y 3 4 3 2
        if (nx >= 0 && nx < length && ny >= 0 && ny < length && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  console.log(answer);
}

solution(arr);
