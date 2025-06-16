let minutes = 0;
let seconds = 0;
let tense = 0;
const appendMinute = document.getElementById('minutes');
const appendSecond = document.getElementById('seconds');
const appendtense = document.getElementById('tense');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let interval;

const startTimer = ()=>{
    tense++;
    if(tense<=9){
        appendtense.textContent = '0'+tense;
    };
    if(tense>9){
        appendtense.textContent = tense
    };
    if(tense>99){
        seconds++;
        appendSecond.textContent = '0' + seconds;
        tense = 0;
        appendtense.textContent ="0"+tense
    }

    if(seconds<=9){
        appendSecond.textContent = seconds
    }
    if(seconds>59){
        minutes++;
        appendMinute.textContent = "0"+minutes;
        seconds = 0;
        appendSecond.textContent = "0"+seconds
    }

}

startBtn.addEventListener('click',() =>{
    clearInterval(interval);
    interval = setInterval(startTimer,1);
})
stopBtn.addEventListener('click',() =>{
    clearInterval(interval);

})
resetBtn.addEventListener('click',() =>{
    clearInterval(interval);
    tense = 0;
    seconds = 0;
    minutes = 0;
    appendtense.textContent = '00';
    appendSecond.textContent = '00';
    appendMinute.textContent = minutes;
})
        