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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = "nieznany ruch";

if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else if (randomNumber == 3) {
  computerMove = "nożyce";
}

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = "nieznany ruch";

if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
}

printMessage("Twój ruch to: " + playerMove);

if (computerMove == "kamień" && playerMove == "papier") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "papier" && playerMove == "nożyce") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "nożyce" && playerMove == "kamień") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == playerMove) {
  printMessage("Jest remis!");
} else if (computerMove == playerMove) {
  printMessage("Jest remis!");
} else if (playerMove == "nieznany ruch") {
  printMessage("Niedozwolony ruch gracza!");
} else {
  printMessage("Komputer wygrywa!");
}
