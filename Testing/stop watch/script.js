let seconds = 0;
let interval = null;

function updateDisplay() {
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
     let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');

     let secs = String(seconds % 60).padStart(2, '0');


     document.getElementById("display").textContent = `${hrs}:${mins}:${secs}`;

     }

function startTimer() {

    if (interval) return;