// Declare player1 object
var player1 = {
  playerName: "",
  playerWins: 0,
  playerLosses: 0,
  playerSelected: false,
}

console.log("Player 1 selected is " + player1.playerSelected);
// Declare player2 object
var player2 = {
  playerName: "",
  playerWins: 0,
  playerLosses: 0,
  playerSelected: false
}

//Initialize Firebase
  var config = {
    apiKey: "AIzaSyDVpEc6Skfj1Q9qoqpUbFhptWNOM0j__oo",
    authDomain: "rpsgame-9aed3.firebaseapp.com",
    databaseURL: "https://rpsgame-9aed3.firebaseio.com",
    projectId: "rpsgame-9aed3",
    storageBucket: "rpsgame-9aed3.appspot.com",
    messagingSenderId: "105917966385"
  };

  firebase.initializeApp(config);

  var database = firebase.database();
//End Initialize Firebase



database.ref().on("value", function(snapshot) {

  // player1Name = snapshot.val().player1Name;
  // player2Name = snapshot.val().player2Name;

}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// Player Submits Name
$(document).ready(function() {
  $("#rock").on("click", function() {
    alert("Rock");
  });

  $("#paper").on("click", function() {
    alert("paper");
  });

  $("#scissors").on("click", function() {
    alert("scissors");
  });

  $("#submit").on("click", function() {

    if (player1.playerSelected == false) {
      player1.playerName = $("#enterName").val();
      player1.playerSelected = true;
      database.ref().update({
        player1Name: player1.playerName,
        player1Selected: player1.playerSelected,
      });
      
    } else if (player2.playerSelected == false) {
      player2.playerName = $("#enterName").val();
      player2.playerSelected = true;
      database.ref().update({
        player2Name: player2.playerName,
        player2Selected: player2.playerSelected,
      });
      
    }
  });  
});


