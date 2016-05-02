var bankRoll = 100;

var playerBet = function() { 
   var bet = prompt("Place a bet between 5 and 10 dollars");
   if (playerBet > 10 || playerBet < 5) {
    console.log("Wrong number. Place a bet between 5 and 10");
    return bet = prompt("Place a bet between 5 and 10 dollars");
 } else {
    console.log("you placed a bet of $" + bet);
    return bet;
 }

};

var playerGuess = function () {
    var guess = prompt("Now, guess a number between 1 and 10");
  if (guess > 10 || guess < 1) {
    console.log("Error, guess a number between 1 and 10");
    return guess = prompt("Guess a number between 1 and 10");
} else { 
    console.log("your guess is " + guess); 
    return guess;
}
};

var computerGuess = function() {
  var cpuGuess = Math.floor((Math.random() * 10)+ 1);
  console.log("the computer guessed " + cpuGuess);
  return cpuGuess;
};

var game = function(choice1, choice2)  { 
  if (choice1 == choice2) {
     bankRoll += parseInt(currentBet);
     return ("you win $ " + currentBet + " and now have $" + bankRoll);
  } else {
     bankRoll -= currentBet;
     return ("you lose $ " + currentBet + " and now have $" + bankRoll);
  }

};

var currentBet = playerBet();

while (bankRoll >= currentBet) {
  var guess = playerGuess();
  var computer = computerGuess();
  console.log(game(guess,computer));
  currentBet = playerBet();
  var playAgain = prompt("do you want to quit? (type q)");
  console.log(playAgain);
  if (playAgain == "q"){
      break;
  }
}