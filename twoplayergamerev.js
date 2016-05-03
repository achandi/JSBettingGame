$(document).ready(function() {

  var bankRoll = 100;

  $("#bet").on('click', function() {
  var bet = $("#Gamebet").val();
  var guess = $("#playerGuess").val();
  game(guess, computerGuess(), bet);
  });

  var computerGuess = function() {
  var cpuGuess = Math.floor((Math.random() * 10)+ 1);
  return cpuGuess;
  };

  var game = function(guess, answer, currentBet)  {
    if (currentBet > 10 || currentBet < 5) {
      $('.validator1').text("Wrong bet. Place a bet between 5 and 10");
  } else if (bankRoll < currentBet) {
      $('.validator2').text("You do not have enough money left to bet this amount." + "Your balance is $" + bankRoll);
  } else if (guess > 10 || guess < 1) {
      $('.validator3').text("Error, guess a number between 1 and 10");
  } else {
      $(".answer").text("The computer answered " + answer);
        if (guess == answer) {
          bankRoll += parseInt(currentBet);
          $('.gameresult').text("you win $ " + currentBet + " and now have $" + bankRoll);
      } else {
        bankRoll -= currentBet;
        $('.gameresult').text("you lose $ " + currentBet + " and now have $" + bankRoll);
      }
    }
  };
});

