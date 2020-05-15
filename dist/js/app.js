"use strict";var rollBtn=document.querySelector(".btn-roll"),holdBtn=document.querySelector(".btn-hold"),newBtn=document.querySelector(".btn-new"),PIG_NUMBER=1,currentRoundScore=0,currentPlayer=0,player1Total=0,player2Total=0;function getRandomInt(e,t){return Math.floor(Math.random()*(t+1-e))+e}function reset(){currentRoundScore=player2Total=player1Total=currentPlayer=0;var e=document.querySelector(".player-0-panel"),t=document.querySelector(".player-1-panel");e.classList.add("active"),t.classList.remove("active"),document.querySelector(".active .player-score").textContent=player1Total,document.querySelector(".active .player-score").textContent=player2Total}function swapPlayer(){var e=document.getElementById("current-".concat(currentPlayer));currentRoundScore=0,e.textContent=currentRoundScore;var t=document.querySelector(".player-0-panel"),r=document.querySelector(".player-1-panel");t.classList.toggle("active"),r.classList.toggle("active"),currentPlayer=0===currentPlayer?1:0}newBtn.addEventListener("click",reset),holdBtn.addEventListener("click",function(){0===currentPlayer?(player1Total+=currentRoundScore,document.querySelector(".active .player-score").textContent=player1Total):(player2Total+=currentRoundScore,document.querySelector(".active .player-score").textContent=player2Total),swapPlayer(),100<=player1Total?(alert("Player 1 Wins!"),reset()):100<=player2Total&&(alert("Player 2 Wins!"),reset())}),rollBtn.addEventListener("click",function(){var e=document.getElementById("dice1"),t=document.getElementById("dice2"),r=document.getElementById("current-".concat(currentPlayer)),n=getRandomInt(1,6),c=getRandomInt(1,6);n===PIG_NUMBER||c===PIG_NUMBER?(alert("You rolled a 1!"),swapPlayer()):currentRoundScore+=n+c,e.src="images/dice-".concat(n,".png"),t.src="images/dice-".concat(c,".png"),r.textContent=currentRoundScore});