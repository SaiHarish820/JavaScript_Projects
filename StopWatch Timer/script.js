const minutesLable = document.getElementById('minutes');
const secondsLable = document.getElementById('seconds');
const millisecondsLable = document.getElementById('millesoconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pausetBtn');
const resetButton = document.getElementById('resetBtn');

const lapList = document.getElementById('laplist');

/// stopwatch variables

let minutes = 0; 
let seconds = 0;
let millesoconds = 0;
let interval;


startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);


function startTimer() {
    interval = setInterval(updateTimer,10);
    startButton.disabled = true;
    resetButton.disabled = false;
    pauseButton.disabled = false;
}


function stopTimer(){

    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;


}


function pauseTimer(){
        clearInterval(interval);
        pauseButton.disabled = true;
        startButton.disabled = false;
        resetButton.disabled = false;
        stopButton.disabled = false;
}

function resetTimer(){

    clearInterval(interval);
    resetTimerData();
    resetButton.disabled = true;
    startButton.disabled = false;
}


function updateTimer(){
    millesoconds++;
    if(millesoconds === 100){
        millesoconds = 0;

        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }
    displayTimer();
}

function displayTimer(){
    millisecondsLable.textContent = padTime(millesoconds);
    secondsLable.textContent = padTime(seconds);
    minutesLable.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}


function resetTimerData(){
    millesoconds = 0; 
    seconds = 0;
    minutes = 0;
    displayTimer();
}

function addToLapList(){
    const lapTime = `${padTime(minutes)}: ${padTime(seconds)} : ${padTime(millesoconds)}`;

    const listItem = document.createElement('li');

    listItem.innerHTML =`<span>Lap ${lapList.childElementCount + 1} : </span>${lapTime}`;
    lapList.appendChild(listItem);
}



