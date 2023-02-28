const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let ispaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer(){
    interval = setInterval (() => {
        if (!ispaused){
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }


            minutesEl.innerHTML = formatTime(minutes);
            secondsEl.innerHTML = formatTime(seconds);
            milissecondsEl.innerHTML = formatMilliseconds(milisseconds);
        }
        }, 10);

        startBtn.style.display = "none";
        pauseBtn.style.display = "inline-block";

        }
        function pauseTimer() {
            ispaused = true;
            pauseBtn.style.display = "none";
            resumeBtn.requestFullscreen.display = "block";
        }

        function resumeTimer() {
            ispaused = false;
            pauseBtn.style.display = "inline-block";
            resumeBtn.style.display = "none";
        }

        function resetTimer(){
            clearInterval(interval);
            minutes = 0;
            seconds = 0;
            milliseconds = 0;
            ispaused = false;
            minutesEl.innerHTML = "00";
            secondsEl.innerHTML = "00";
            millisecondsEl.innerHTML = "000";
            startBtn.style.display = "inline-block";
            pauseBtn.style.display = "none";
            resumeBtn.style.display = "none";

        }    
        

        function formatTime(time) {
            return time < 10? `0${time}`: time;
        }

        function formatMilliseconds(time) {
            return time < 100? `0${time}`.padStart(3, "0") : time;
        }
  
