const redLight = document.querySelector('#red')
const greenLight = document.querySelector('#green')
const orangeLight = document.querySelector('#orange')
const score = document.querySelector('.result')
const bestScore = document.querySelector('.best-time')

let endTime
let startTime
let bestTime

let startTimeout;

const startGame = () => {
    score.innerHTML = 'Focus!';
    redLight.classList.add('hidden')
    orangeLight.classList.remove('hidden')

    const delay = 2000 + 1000 * Math.floor(Math.random() * 4);

    startTimeout = setTimeout(() => {
            orangeLight.classList.add('hidden')
            greenLight.classList.remove('hidden')
            startTime = new Date();
    }, delay);
};

const jumpStart = () => {
     if (startTimeout) {
        clearTimeout(startTimeout);
    }
    redLight.classList.remove('hidden')
    orangeLight.classList.add('hidden')
    score.innerHTML = 'Restart!';
};


const stopGame = () => {
    redLight.classList.remove('hidden')
    greenLight.classList.add('hidden')
    endTime = new Date();
    const result = (endTime - startTime) / 1000
    score.innerHTML = result + ' Seconds'

    if (!bestTime || result < bestTime) {
        bestTime = result;
    }
    bestScore.innerHTML = 'Your best score is: ' + bestTime + ' Seconds';
    

}
