//styling Hangman Game

const puzzleEl = document.querySelector('#puzzle') 
const guessesEl = document.querySelector('#guesses') 
// const game = new Hangman('the cat', 3)
let game

//co 
const render =() =>{
    // puzzleEl.textContent = game.puzzle //use custom getter
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game.statusMessage //use custom getter

    //Challange area
    //1. for each character in the string add a span into into #puzzle
    //2. the spns text should contain
    game.puzzle.split('').forEach((letter)=>{
        const letterE1 = document.createElement('span')
        letterE1.textContent = letter
        puzzleEl.appendChild(letterE1)
    })   
}


window.addEventListener('keypress', function(e){  
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)    
    render()  
})

const startGame = async ()=>{
    const puzzle = await getPulzzle('2')
    game = new Hangman(puzzle, 5)
    render(); //it will display or render initial puzzle
}

document.querySelector('#reset').addEventListener('click',startGame)

startGame()

