// A, B 두 사람이 가위바위보 게임을 합니다.

// 총 N번의 게임을 하여 A가 이기면 A를 출력하고
// B가 이기면 B를 출력합니다.
// 비길 경우엔 D를 출력합니다.

// 가위, 바위, 보의 정보는
// 1 : 가위
// 2 : 바위
// 3 : 보

function solution(n, ...number) {
  let player1 = [];
  let player2 = [];

  for (i = 0; i < number.length; i++) {
    i < n && player1.push(number[i]);
    i >= n && player2.push(number[i]);
  }

  for (i = 0; i < n; i++) {
    // case 1
    if (player1[i] === player2[i]) console.log('D');
    else if (player1[i] === 1 && player2[i] === 3) console.log('A');
    else if (player1[i] === 2 && player2[i] === 1) console.log('A');
    else if (player1[i] === 3 && player2[i] === 2) console.log('A');
    else console.log('B');

    // case 2
    // if (player1[i] === 1 && player2[i] === 2) console.log('B');
    // if (player1[i] === 1 && player2[i] === 3) console.log('A');
    // if (player1[i] === 2 && player2[i] === 1) console.log('A');
    // if (player1[i] === 2 && player2[i] === 3) console.log('B');
    // if (player1[i] === 3 && player2[i] === 1) console.log('B');
    // if (player1[i] === 3 && player2[i] === 2) console.log('A');
  }
}

solution(5, 2, 3, 3, 1, 3, 1, 1, 2, 2, 3);
