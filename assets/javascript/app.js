var questions = {
        q1: ["The Words of House Stark are 'Winter is Coming.'", "t"],
        q2: ["Maegor Targaryen united and conquered Westeros.", "f"],
        q3: ["Qarth is one of the Free Cities.", "f"],
        q4: ["Prince Rhaegar died at the Trident.", "t"],
        q5: ["House Templeton's sigil features a moose.", "f"]
};

// We start the game with a score of 0.
      var score = 0;
      // Variable to hold the index of current question.
      var questionIndex = 0;
      // Array of questions.
      var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

function renderQuestion() {
        if (questionIndex <= (questionsArray.length - 1)) {
          $("#question").html(questionsArray[questionIndex][0]);
        }
     else {
          $("#question").html("Game Over!");
          $("#score").html("Final Score: " + score + " out of " + questionsArray.length);
        }
      }

function updateScore() {
      $("#score").html("Score: " + score);
      }



$(document).ready(function() {
  $("#start").click(function() {
  	renderQuestion();
 	updateScore();
    var time = 30;
    var timer = setInterval(function() {
      time--;
      $('#time').html(time);
      if (time === 0) {
        clearInterval(timer);
        alert("Time's up!");
      }
    }, 1000);
  });

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {
        // If there are no more questions, stop the function.
        if (questionIndex === questionsArray.length) {
          return;
        }
        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();
        // Only run this code if "t" or "f" were pressed.
        if (userInput === "t" || userInput === "f") {
          // If they guess the correct answer, increase and update score, alert them they got it right.
          if (userInput === questionsArray[questionIndex][1]) {
            alert("Correct!");
            score++;
            updateScore();
          }
          // If wrong, alert them they are wrong.
          else {
            alert("Wrong!");
          }
          // Increment the questionIndex variable and call the renderQuestion function.
          questionIndex++;
          renderQuestion();
        }
      };

});

