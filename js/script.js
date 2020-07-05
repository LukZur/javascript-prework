// let computerMove = "kamień";
// let playerMover = "papier";

// printMessage(
//   "Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to wygrywasz!"
// );

// let randomFraction = Math.random();

// printMessage("Wylosowany ułamek to: " + randomFraction);

// let calculation = randomFraction * 3 + 1;

// printMessage("Ułamek pomnożony przez 3 i powiększony o 1: " + calculation);

// let roundNumber = Math.floor(calculation);

// printMessage("Liczba po zaokrągleniu w dół to: " + roundNumber);

// -----
// let randomNumber = Math.floor(Math.random() * 3 + 1);

// console.log("Wylosowana liczba to: " + randomNumber);

// let computerMove = "nieznany ruch";

// if (randomNumber == 1) {
//   computerMove = "Kamień";
// }

// printMessage("Mój ruch to: " + computerMove);

// let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

// console.log("Gracz wpisał: " + playerInput);

// let playerMove = "nieznany ruch";

// if (playerInput == 1) {
//   playerMove = "kamień";
// }

// printMessage("Twój ruch to: " + playerMove);

// function getMoveName(argMoveId) {
//   if (argMoveId == 1) {
//     return "kamień";
//   } else if (argMoveId == 2) {
//     return "papier";
//   } else if (argMoveId == 3) {
//     return "nożyce";
//   }

//   printMessage("Nie znam ruchu o id " + argMoveId + ".");
//   return "nieznany ruch";
// }

// let randomNumber = Math.floor(Math.random() * 3 + 1);

// console.log("Wylosowana liczba to: " + randomNumber);

// // let computerMove = "nieznany ruch";
// let computerMove = getMoveName(randomNumber);

// // if (randomNumber == 1) {
// //   computerMove = "kamień";
// // } else if (randomNumber == 2) {
// //   computerMove = "papier";
// // } else if (randomNumber == 3) {
// //   computerMove = "nożyce";
// // }

// printMessage("Mój ruch to: " + computerMove);

// let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

// console.log("Gracz wpisał: " + playerInput);

// // let playerMove = "nieznany ruch";
// let playerMove = getMoveName(playerInput);

// // if (playerInput == "1") {
// //   playerMove = "kamień";
// // } else if (playerInput == "2") {
// //   playerMove = "papier";
// // } else if (playerInput == "3") {
// //   playerMove = "nożyce";
// // }

// printMessage("Twój ruch to: " + playerMove);

// // function displayResult(argComputerMove, argPlayerMove) {
// //   if (argComputerMove == "kamień" && argPlayerMove == "papier") {
// //     printMessage("Ty wygrywasz!");
// //   } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
// //     printMessage("Ty wygrywasz!");
// //   } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
// //     printMessage("Ty wygrywasz!");
// //   } else if (argComputerMove == argPlayerMove) {
// //     printMessage("Jest remis!");
// //   } else if (playerMove == "nieznany ruch") {
// //     printMessage("Niedozwolony ruch gracza!");
// //   } else {
// //     printMessage("Komputer wygrywa!");
// //   }
// // }
// function displayResult(argComputerMove, argPlayerMove) {
//   if (
//     (argComputerMove == "kamień" && argPlayerMove == "papier") ||
//     (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
//     (argComputerMove == "nożyce" && argPlayerMove == "kamień")
//   ) {
//     printMessage("Ty wygrywasz!");
//   } else if (argComputerMove == argPlayerMove) {
//     printMessage("Jest remis!");
//   } else if (playerMove == "nieznany ruch") {
//     printMessage("Niedozwolony ruch gracza!");
//   } else {
//     printMessage("Komputer wygrywa!");
//   }
// }

// displayResult(computerMove, playerMove);

// // if (computerMove == "kamień" && playerMove == "papier") {
// //   printMessage("Ty wygrywasz!");
// // } else if (computerMove == "papier" && playerMove == "nożyce") {
// //   printMessage("Ty wygrywasz!");
// // } else if (computerMove == "nożyce" && playerMove == "kamień") {
// //   printMessage("Ty wygrywasz!");
// // } else if (computerMove == playerMove) {
// //   printMessage("Jest remis!");
// // } else if (playerMove == "nieznany ruch") {
// //   printMessage("Niedozwolony ruch gracza!");
// // } else {
// //   printMessage("Komputer wygrywa!");
// // }

//===============================================================================================================================
function playGame(argPlayerInput) {
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if (
      (argComputerMove == "kamień" && argPlayerMove == "papier") ||
      (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
      (argComputerMove == "nożyce" && argPlayerMove == "kamień")
    ) {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == argPlayerMove) {
      printMessage("Jest remis!");
    } else if (playerMove == "nieznany ruch") {
      printMessage("Niedozwolony ruch gracza!");
    } else {
      printMessage("Komputer wygrywa!");
    }

    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }

  clearMessages();

  let playerInput = argPlayerInput;

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage("Mój ruch to: " + computerMove);

  //   let playerInput = prompt(
  //     "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  //   );

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage("Twój ruch to: " + playerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
  //   printMessage("guzik 1 klikniety");
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
  //   printMessage("guzik 2 klikniety");
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
  //   printMessage("guzik 3 klikniety");
});
