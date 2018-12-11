$(document).ready(function() {
  // Global Variables
  var wins = 0;
  var losses = 0;
  var counter = 0;
  var targetNumber = 0;

  // Random Number Function
  function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Start Of Game Random Variables
  var targetNumber = randomNum(19, 120);
  $("#targetNumber").html(targetNumber);
  var crystalRed = randomNum(1, 12);
  var crystalBlue = randomNum(1, 12);
  var crystalYellow = randomNum(1, 12);
  var crystalGreen = randomNum(1, 12);
  console.log(targetNumber);
  console.log(crystalRed);
  console.log(crystalBlue);
  console.log(crystalYellow);
  console.log(crystalGreen);

  // Reset Function After Win Loss Condition
  function reset() {
    counter = 0;
    targetNumber = randomNum(19, 120);
    $("#targetNumber").html(targetNumber);
    $("#counter").text(counter);
    crystalRed = randomNum(1, 12);
    crystalBlue = randomNum(1, 12);
    crystalYellow = randomNum(1, 12);
    crystalGreen = randomNum(1, 12);
    console.log(targetNumber);
    console.log(crystalRed);
    console.log(crystalBlue);
    console.log(crystalYellow);
    console.log(crystalGreen);
  }

  // Total Score Added From Clicking Red
  $("#red-crystal").on("click", function() {
    counter += crystalRed;
    winLoss();
    $("#counter").text(counter);
  });

  // Total Score Added From Clicking Blue
  $("#blue-crystal").on("click", function() {
    counter += crystalBlue;
    winLoss();
    $("#counter").text(counter);
  });

  // Total Score Added From Clicking Yellow
  $("#yellow-crystal").on("click", function() {
    counter += crystalYellow;
    winLoss();
    $("#counter").text(counter);
  });

  // Total Score Added From Clicking Green
  $("#green-crystal").on("click", function() {
    counter += crystalGreen;
    winLoss();
    $("#counter").text(counter);
  });

  // Win Loss Condition
  function winLoss() {
    if (counter === targetNumber) {
      wins += 1;
      alert("You are a Winner!");
      $("#wins").text(wins);
      reset();
    } else if (counter > targetNumber) {
      losses += 1;
      alert("You Lost!");
      $("#losses").text(losses);
      reset();
    }
  }
});
