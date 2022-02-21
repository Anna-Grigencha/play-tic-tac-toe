const area = document.querySelector(".area");
let stepCount = 0; //ход
let result = "";
let player1 = 0;
let player2 = 0;
const boxis = document.getElementsByClassName("box"); //коллекция
const contentWrapper = document.querySelector(".content");
const winnerWrapper = document.querySelector(".winner");
const stepCountWrapper = document.querySelector(".step-count");
const playerScore1 = document.querySelector(".player1");
const playerScore2 = document.querySelector(".player2");
const modalResilt = document.querySelector(".modal-result-wrapper");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btm-close");
const reset = document.querySelector(".reset");

area.addEventListener("click", (e) => {
  if ((e.target.classNamen = "box")) {
    if (stepCount % 2 === 0 && !this.textContent) {
      e.target.innerHTML = "X";
    } else if (stepCount % 2 !== 0) {
      e.target.innerHTML = "O";
    }
    stepCount++;
    check();
  }
  if (stepCount === 9) {
    result = "Ничья!";
    prepareNoWinner(result);
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
      soundClick();
    } else if (
      boxis[arr[i][0]].innerHTML === "O" &&
      boxis[arr[i][1]].innerHTML === "O" &&
      boxis[arr[i][2]].innerHTML === "O"
    ) {
      result = "нолики";
      player2++;
      prepareResult(result);
      resultPlayer2(player2);
      soundClick();
    }
  }
};

const prepareResult = (winner) => {
  winnerWrapper.innerHTML = `Победили ${winner} !`;
  stepCountWrapper.innerHTML = `Количество ходов: ${stepCount}`;
  modalResilt.style.display = "block";
};

const prepareNoWinner = (message) => {
  winnerWrapper.innerHTML = message;
  stepCountWrapper.innerHTML = `Количество ходов: ${stepCount}`;
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

function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = "./music/victory.mp3"; // Указываем путь к звуку
  audio.autoplay = true; // Автоматически запускаем
}

const clear = () => {
  const board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (i = 0; i < 3; i++) {
    boxis[board[i][0]].innerHTML = "";
    boxis[board[i][1]].innerHTML = "";
    boxis[board[i][2]].innerHTML = "";
  }
};

btnClose.addEventListener("click", (e) => {
  if ((e.target.classNamen = "box")) {
    closeModal();
    clear();
    stepCount = 0;
  }
});

overlay.addEventListener("click", (e) => {
  if ((e.target.classNamen = "box")) {
    closeModal();
  }
});

reset.addEventListener("click", (e) => {
  if ((e.target.classNamen = "box")) {
    clear();
    stepCount = 0;
  }
});
