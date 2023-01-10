/* Imports */

/* Get DOM Elements */
const brownBtn = document.getElementById('brown-button');
const whiteBtn = document.getElementById('white-button');
const snailBtn = document.getElementById('snail-button');

const brownContainer = document.getElementById('brown-container');
const whiteContainer = document.getElementById('white-container');
const snailContainer = document.getElementById('snail-container');

const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');

/* State */
let winGuesses = 0;
let totalGuesses = 0;

/* Events */
brownBtn.addEventListener ('click', () => {
    const correctSpot = getRandomShell();
    guessOutcome('brown', correctSpot);
});

whiteBtn.addEventListener ('click', () => {
    
});

snailBtn.addEventListener ('click', () => {
    
});

/* Display Functions */
function getRandomShell() {
    const randomShells = [
        'brown',
        'white',
        'snail'
    ];

    const index = Math.floor(Math.random() * randomShells.length);
    const correctSpot = randomShells[index];

    return correctSpot;
}

function guessOutcome(userGuess, correctSpot) {
    const correctContainer = document.getElementById(`${correctSpot}-container`);
    
    brownContainer.classList.remove('check');
    whiteContainer.classList.remove('check');
    snailContainer.classList.remove('check');
    correctContainer.classList.add('check');

    totalGuesses++;
    if (userGuess === correctSpot) {
        winGuesses++;
    }


    winsEl.textContent = winGuesses;
    totalEl.textContent = totalGuesses;
}
// (don't forget to call any display functions you want to run on page load!)
