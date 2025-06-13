// Set the game
let gameName = 'Guess the word';
document.title = gameName;
document.querySelector('h1').innerHTML = gameName;
document.querySelector('footer').innerHTML = `${gameName} Created by Ather Since: ${new Date().getFullYear()}`;

// set the inputs
let numberOfTries = 6;
let numberOfletters = 6;
let currentTry = 1;

let wordToGuess = "";
const words = [
  "planet",
  "castle",
  "danger",
  "butter",
  "jungle",
  "golden",
  "singer",
  "silver",
  "friend",
  "hunter",
  "rabbit",
  "animal",
  "forest",
  "flight",
  "school",
  "wonder",
  "stream",
  "basket",
  "stripe",
  "charge"
];

wordToGuess = words[Math.floor(Math.random()*words.length)].toLocaleLowerCase();


function generateInputs() {
    const inputsContainer = document.querySelector('.inputs');

    for (let i = 1; i <= numberOfTries; i++) {
        let tryDiv = document.createElement('div');
        tryDiv.classList.add(`try-${i}`);    
        tryDiv.innerHTML = `<span>Try ${i}</span>`;

        if (i !== 1) tryDiv.classList.add("disabled-inputs");

        for (let j = 1; j <= numberOfletters; j++) {
            const input = document.createElement("input");
            input.id = `try-${i}-letter-${j}`;
            input.type = 'text';
            input.setAttribute("maxlength", "1");
            tryDiv.appendChild(input);
        }

        inputsContainer.appendChild(tryDiv);
    }

  
    const allDisabled = document.querySelectorAll('.disabled-inputs input');
    allDisabled.forEach((input) => input.disabled = true);

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            this.value = this.value.toUpperCase();
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        });
    });
}
console.log(wordToGuess)
const guessBtn = document.querySelector('.check');
guessBtn.addEventListener('click',() =>{
    let sucessGuess = true;
    for(i=1;i<=numberOfletters;i++){
        const inputField = document.querySelector(`#try-${currentTry}-letter-${i}`);
        const letter = inputField.value.toLocaleLowerCase();
        const acutalLetter = wordToGuess[i-1];

        if(letter !==""){
            if(letter === acutalLetter){
                inputField.classList.add("yes-in-place")
            }else if(wordToGuess.includes(letter)){
                inputField.classList.add("not-inplace");
                sucessGuess = false;
            }else{
                inputField.classList.add("wrong");
                sucessGuess = false;
            }
        }
       
    }
    const message = document.querySelector('.message');
    
    if(sucessGuess){
        message.innerHTML = `You win After <span>${currentTry}</span> and the Word is <span>${wordToGuess}</span>`;

        const allTries = document.querySelectorAll('.inputs > div');
        allTries.forEach((tryDiv) =>tryDiv.classList.add("disabled-inputs"));

        guessBtn.disabled = true;
    }else{

    }
})
window.onload = () => {
    generateInputs();
};
