'use strict'

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const breaktime = document.getElementById('breaktime');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;
  let resetTime = 0;
  let flag=1;

  function countDown() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(resetTime - d.getMinutes()).padStart(2, '0');
    const s = String(59 - d.getSeconds()).padStart(2, '0');
    timer.textContent = `${m}:${s}`;

    timeoutId = setTimeout(() => {
      countDown();
    }, 10);

    if(s<0){
      setButtonStateStopped();
      clearTimeout(timeoutId);
      elapsedTime += Date.now() - startTime;
      timer.textContent = '00:00';
    }
  }

  function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
    breaktime.classList.remove('inactive');
  }

  function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
    breaktime.classList.add('inactive');
  }

  function setButtonStateStopped() {
    if(flag===1){
      start.classList.remove('inactive');
      breaktime.classList.add('inactive');
    }else{
      start.classList.add('inactive');
      breaktime.classList.remove('inactive');
    }
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  function setButtonStateBreakTime(){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
    breaktime.classList.add('inactive');
  }

  setButtonStateInitial();

  start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateRunning();
    flag=1;
    startTime = Date.now();
    resetTime = 24;
    countDown();
  });

  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateInitial();
    if(flag==1){
      timer.textContent = '25:00';
    }else{
      timer.textContent = '05:00';
    }
    elapsedTime = 0;
  });

  breaktime.addEventListener('click', () =>{
    if(breaktime.classList.contains('inactive')== true){
      return;
    }
    setButtonStateBreakTime();
    flag=0;
    resetTime = 4;
    startTime = Date.now();
    countDown();
  });

}