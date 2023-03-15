const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const elapsed = document.querySelector(".elapsedTimeDisplay");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;

        secs = Math.floor((elapsedTime / 1000) % 60); 
        mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 12);

        secs = secs.toString().padStart(2 , "0");
        mins = mins.toString().padStart(2 , "0");
        hrs = hrs.toString().padStart(2 , "0");

        elapsed.textContent = `${hrs}:${mins}:${secs}`;

        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);   // the difference btw the dates is in miliseconds, so divide by 1000 to get seconds
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);    // Divide by (1000 * 60) to get the number of minutes and use modulo function to get the remainder after dividing by 60, which when exceeds 60, will return 0
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 12);    // divide by (1000 * 60 *60) to get the number of hours, and use the modulo function to get the remainder after dividing by 12, which when exceeds 12, will return 0

    secs = padTo2Digits(secs);
    mins = padTo2Digits(mins);
    hrs = padTo2Digits(hrs);

    // let formattedSecs = secs.padStart(secs);
    // let formattedMins = mins.padStart(mins);
    // let formattedHrs = hrs.padStart(hrs);

    // timeDisplay.textContent = `${formattedHrs}:${formattedMins}:${formattedSecs}`;

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    // function pad(unit){
    //     return (("0") + unit).length > 2 ? unit : "0" + unit;
    // }

    function padTo2Digits(num){
        return num.toString().padStart(2, "0");
    }
}