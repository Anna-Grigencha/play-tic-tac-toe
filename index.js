const area = document.querySelector(".area");
let move = 0; //ход
let result = "";
let player1 = 0;
let player2 = 0;
const boxis = document.getElementsByClassName("box"); //коллекция
const contentWrapper = document.querySelector(".content");
const playerScore1 = document.querySelector(".player1");
const playerScore2 = document.querySelector(".player2");
const modalResilt = document.querySelector(".modal-result-wrapper");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btm-close");
const reset = document.querySelector(".reset");

area.addEventListener("click", (e) => {
  if ((e.target.classNamen = "box")) {
    if (move % 2 === 0) {
      e.target.innerHTML = "X";
      // e.target.innerHTML.style.color = #ffffff;
    } else if (move % 2 !== 0) {
      e.target.innerHTML = "O";
    }
    move++;
    check();
  }
});

const check = () => {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < arr.length; i++) {
    if (
      boxis[arr[i][0]].innerHTML === "X" &&
      boxis[arr[i][1]].innerHTML === "X" &&
      boxis[arr[i][2]].innerHTML === "X"
    ) {
      result = "крестики";
      player1++;
      prepareResult(result);
      resultPlayer1(player1);
    } else if (
      boxis[arr[i][0]].innerHTML === "O" &&
      boxis[arr[i][1]].innerHTML === "O" &&
      boxis[arr[i][2]].innerHTML === "O"
    ) {
      result = "нолики";
      player2++;
      prepareResult(result);
      resultPlayer2(player2);
    }
  }
};

const prepareResult = (winner) => {
  contentWrapper.innerHTML = `Победили ${winner} !`;
  modalResilt.style.display = "block";
};

const resultPlayer1 = (player1) => {
  playerScore1.innerHTML = player1;
};

const resultPlayer2 = (player2) => {
  playerScore2.innerHTML = player2;
};

const closeModal = () => {
  modalResilt.style.display = "none";
  //  location.reload(); //перезагрузка страницы
};

const clear = () => {
  const board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (i = 0; i < 3; i++) {
    boxis[board[i][0]].innerHTML = " ";
    boxis[board[i][1]].innerHTML = " ";
    boxis[board[i][2]].innerHTML = " ";
  }
};

btnClose.addEventListener("click", (e) => {
  if ((e.target.classNamen = "box")) {
    closeModal();
    clear();
    move = 0;
  }
});

overlay.addEventListener("click", (e) => {
  if ((e.target.classNamen = "box")) {
    closeModal();
    clear();
    move = 0;
  }
});

reset.addEventListener("click", (e) => {
  clear();
  move = 0;
});

//reset.addEventListener("click", clear);
