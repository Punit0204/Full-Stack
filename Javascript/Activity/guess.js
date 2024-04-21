const user = prompt("Enter The Maximum Number");
console.log("Number Plays Between range of ", user );
const corr_num = Math.floor(Math.random() * user) + 1;
 let guess = prompt("Guess the number");
while( (guess != corr_num) && (guess != "quit")){
    
    if(guess == "quit"){
        console.log("Game Quit By User!");
        break;
    }
    if(guess < corr_num){
        guess = prompt("Hint: Guess is too small, Try Again!");
    }else{
        guess = prompt("Hint: Guess is too big, Try Again!");
    }
}

console.log("Congrats! You Guessed Correct, Random number was", corr_num);