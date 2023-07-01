let target = document.getElementById("target");
let scoreDisplay = document.getElementById("score");
let speedDisplay = document.getElementById("speed");
let score = 0;
let speed = 0;

target.addEventListener("click", function () {
    //target.addEventListener("click", function () {
    score++;
    increaseSpeed();
    //Primero lo incrementa, luego lo muestra
    scoreDisplay.innerHTML = score;
    speedDisplay.innerHTML = speed
    moveTarget();
});

function increaseSpeed() {
    //Si el score es igual a 5 en total la velocidad incrementa '2'
    if (score % 5 === 0) {
        speed++;
    }
    speed++;
}

function moveTarget() {
    // Un porcentaje va del 0% al 100%
    let randomX = randInteger(0, 100);
    let randomY = randInteger(0, 100);
    //El 'size' del 'target' puede variar de por Ej: 80 al 120
    let randomSize = randInteger(40, 100);
    // 'position' del target
    target.style.left = randomX + "%";
    target.style.top = randomY + "%";
    // 'Size' del target
    target.style.width = randomSize + "px";
    target.style.height = randomSize + "px";
    setTimeout(moveTarget, 2000 / speed);
}

//Calcula un numero al azar entre 2 valores
function randInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}