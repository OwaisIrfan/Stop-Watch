var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

var Interval;

function timer(){
        msec++;
        msecHeading.innerHTML = msec;
        if (msec >= 100){
            sec++
            secHeading.innerHTML = sec
            msec = 0
        }else if (sec >= 60){
            min++
            minHeading.innerHTML = min
            sec = 0
        }
}

function start() {
    if(!Interval){
        Interval = setInterval(timer,10)
    }
    
}

function stop() {
    clearInterval(Interval)
    Interval = false;
}

function reset() {
    min = "00";
    sec = "00";
    msec = "00";
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
    Interval = false;
}














