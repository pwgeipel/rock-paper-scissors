var keepPlaying = true
var choices = ['r', 'p', 's']
var wins = 0
var losses = 0
var ties = 0
while(keepPlaying) {
    // prompt humanChoice
    // define var for computerChoice
    var humanChoice = prompt("Choose r, p, s")
    console.log("human choice:", humanChoice)

    var random = Math.floor(Math.random() * choices.length)
    var computerChoice = choices[random]
    console.log('computer choice:', computerChoice)
    // randomly choose computerChoice

    var result
    if (humanChoice === computerChoice) {
        ties++
        result = "tied!"
    } else if (
        humanChoice === 'r' && computerChoice === 's' ||
        humanChoice === 'p' && computerChoice === 'r' ||
        humanChoice === 's' && computerChoice === 'p' 
    ) {
        wins++
        result = "won!"
    } else {
        losses++
        result = "lost!"
    }



// display (alert) results (won, tied, lost round)
    alert("You " + result)
// show stats (number of wins, losses, ties)
    alert("Stats:\nWins: " + wins + "\nLosses " + losses + "\nTies: " + ties)

    keepPlaying = confirm("Want to play again?")



// play again?
    // restart game
// end game
}