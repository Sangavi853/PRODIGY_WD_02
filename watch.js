let timer = 0;
let interval = null;
let isRunning = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const milliseconds = String(ms % 1000).padStart(3, "0").slice(0, 2);
  return `${minutes}:${seconds}:${milliseconds}`;
}

function start() {
    if (!isRunning) {
      interval = setInterval(() => {
        timer += 10;
        document.getElementById("display").textContent = formatTime(timer);
      }, 10);
      isRunning = true;
      document.getElementById("start-btn").disabled = true;
      document.getElementById("pause-btn").disabled = false;
    }
  }
  
function pause() {
    clearInterval(interval);
    isRunning = false;
    document.getElementById("start-btn").disabled = false;
    document.getElementById("pause-btn").disabled = true;
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  timer = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (!isRunning) return;
  const lapTime = formatTime(timer);
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  document.getElementById("laps").appendChild(lapItem);
}
