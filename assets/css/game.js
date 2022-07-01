var wins = 0;
        var losses = 0;
        var num = 10;
        var entry = "";

        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var numText = document.getElementById("guesses-num")
        var entryText = document.getElementById("guesses-entry")
        var computerChoices = document.getElementById("comp-entry")
        var game = document.getElementById("game")

    var computerSelection = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    
    function refresh() {
     window.location.reload();
    }
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        var computerGuess = computerSelection[Math.floor(Math.random() * computerSelection.length)];
        console.log(userGuess);
        console.log(computerGuess);
        
        if( userGuess === "a"|| userGuess === "b"){
            if(userGuess === computerGuess){
                wins++
            }
            else{
                losses++
                num--
            }
            
            if(num === 0){
                game.style.backgroundColor = "red"
                game.style.color = "white"
                game.textContent = "<h1>GAME OVER</h1>"
                const myTimeout = setTimeout(refresh, 2000);
            }

            entryText.textContent = "You chose: " + userGuess;
            document.getElementById("comp-entry").textContent = "My guesses: " + computerGuess;
            document.getElementById("wins-text").textContent = "wins: " + wins;
            document.getElementById("losses-text").textContent = "losses: " + losses;
            document.getElementById("guesses-num").textContent = "remaining guesses: " + num;
        }else{
            alert("it must be a trough z, like amazon")
        }
    } 

