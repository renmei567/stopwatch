'use strict';
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const stopwatch=document.getElementById('stopwatch');
 
 let timerId;
 let elapsedMs=0;
 
start.addEventListener('click', () => {
 let startMs=Date.now();
startMs -=elapsedMs;
 
 timerId = setInterval(()=>{
     const nowMs=Date.now();
     elapsedMs=nowMs-startMs;
     const ms =(elapsedMs % 1000);
     
     const s =Math.floor( elapsedMs/1000)%60 ;
     const m = Math.floor(elapsedMs /1000 /60) %60 ;
     
     const formattedMs = ms.toString().padStart(3 ,'0');
     const formattedS = s.toString().padStart(2 ,'0');
     const formattedM = m.toString().padStart(2 ,'0');
   //  stopwatch.textContent= formattedM + ':' + formattedS + ':'+ formattedMs;
      stopwatch.textContent=` ${formattedM}:${formattedS}:${formattedMs}`;
     
 },10 ) ;
 
});
stop.addEventListener('click' ,()=> {
    
 clearInterval(timerId);
}
);

reset.addEventListener('click' ,()=>{
    elapsedMs=0;
    stopwatch.textContent='00:00:000';
});
 