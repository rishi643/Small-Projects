let man = document.getElementById('man');
let all = document.getElementById('body');
let block = document.getElementById('boss');

const score = document.getElementById('score');
const highestscore = document.getElementById("highestscore");

const clicksound = new Audio('universfield-man-scream-08-352438.wav');
const loseSound = new Audio('universfield-male-death-scream-horror-352706.mp3');

// 🔥 Proper high score setup
let high = Number(localStorage.getItem("highestscore")) || 0;
highestscore.innerText = high;

let count = 0;

// Jump
all.addEventListener('click', () => {
    if (man.classList.contains('jump')) return;

    clicksound.currentTime = 0;
    clicksound.play();

    man.classList.add('jump');

    setTimeout(() => {
        man.classList.remove('jump');
    }, 1000);
});

// Score loop
setInterval(() => {
    count++;
    score.innerText = count;

    if (count > high) {
        high = count;
        highestscore.innerText = high;
    }

}, 180);

// Collision loop
setInterval(() => {
    let runner = parseInt(window.getComputedStyle(man).getPropertyValue('top'));
    let car = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (runner >= 300 && car > 0 && car < 50) {

        localStorage.setItem("highestscore", high);

        count = 0;
        score.innerText = count;

        loseSound.play();
        alert("Game Over");
    }

}, 20);