
let hourRef = document.getElementById("hour");
let minuteRef = document.getElementById("minute");
let secondRef = document.getElementById("second");

let second = 0;
let minute = 0;
let hour = 0;
let timer = 0;

function startTimer() {
    second++;
    if (second <= 9) {
        secondRef.innerText = "0" + second
    }
    if (second > 9) {
        secondRef.innerText = second
    }
    if (second > 59) {
        minute++;
        second = 0;
        if (minute < 10) {
            minuteRef.innerText = "0" + minute
        }
        if (minute > 10) {
            minuteRef.innerText = minute
        }
        if(minute > 59) {
            hour++;
            minute = 0;
        }
    }
    console.log(second);
    
};

function watchStart() {
    timer = setInterval(startTimer, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    hourRef = "00";
    minuteRef = "00";
    secondRef = "00";
}
