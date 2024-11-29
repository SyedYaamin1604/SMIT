let hours = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");

let startInterval;
let seconds = 0;
let minutes = 0;
let Hours = 0;

function startBtn() {
    startInterval = setInterval(function () {
        seconds += 1;
        secs.innerHTML = seconds % 60;
        if (seconds % 60 === 0) {
            mins.innerHTML = minutes+=1;
            seconds = 0
            if (mins.innerHTML === 60) {
                hours.innerHTML = Hours+=1;
                minutes = 0
            }
        }
    }, 1000);
};
function stopBtn() {
    clearInterval(startInterval);
}
function resetBtn() {
    clearInterval(startInterval);
    seconds = 0;
    minutes = 0;
    Hours = 0;
    hours.innerHTML = 0;
    mins.innerHTML = 0;
    secs.innerHTML = 0;
}