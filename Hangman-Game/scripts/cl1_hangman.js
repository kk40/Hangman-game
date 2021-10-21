//styling Hangman Game
class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('') 
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = [] 
        this.status = 'playing'
    } 
    //store value onto status
    calculateStatus = function(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ') //adjusting calculateStatus() to account for space between two word in the puzzle
        
        if(this.remainingGuesses === 0){
            this.status = 'failed'
        }else if(finished){
            this.status = 'finished'
        }else{
            this.status = 'playing'
        }
    } 
    //word puzzle
    get statusMessage(){ //Convert to custom getter
        if(this.status === 'playing'){
            return `Guesses left: ${this.remainingGuesses}`
        }else if(this.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}"`  
        }else{
            return 'Great work! You guessed the word.'
        }
    }
//word puzzle
    get puzzle(){ //Convert to custom getter
        let puzzle = ''

        this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle = puzzle + letter
            }else{
                puzzle = puzzle + '*'
            }
        })
        return puzzle
    }

//user making guesses
    makeGuess = function(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)  
        const isBadGuess = !this.word.includes(guess)

        if(isUnique){ 
            this.guessedLetters.push(guess)
        }
        if(isUnique && isBadGuess){        
            this.remainingGuesses--
        }

        this.calculateStatus() 
    }
}

