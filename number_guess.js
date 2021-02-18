let max = parseInt(prompt("Enter maximum number:"));
while(!max){
    max = parseInt(prompt('Enter valid no.'));
}
const target = Math.floor(Math.random() * max) + 1;
console.log(target);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while(guess !== target){
    if(guess === 'q') 
    {break;}
    attempts++;
    if(guess > target){
        guess = parseInt(prompt("Too high! Try again"));
    }
    else{
        guess = parseInt(prompt("Too low! Try again"));
    }
}
console.log(` ${guess} is right guess, it took ${attempts} guesses`)