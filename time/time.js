const pomoBtn = document.querySelector(".btn");

let pomoInterval;
let restInterval;
let pomoTime = 1500;
let restTime = 300;

function pomoStart() {
  pomodoroTimer();
  pomoInterval = setInterval(pomodoroTimer, 1000);
}

function pomodoroTimer() {
  const minutes = String(Math.floor(pomoTime / 60)).padStart(2, "0");
  const seconds = String(pomoTime % 60).padStart(2, "0");
  pomoTime -= 1;
  pomoBtn.innerHTML = `${minutes} : ${seconds}`;

  if (pomoTime < 0) {
    clearInterval(pomoInterval);
    restStart();
    restInterval = setInterval(restStart, 1000);
    beep();
  }
}

function restStart() {
  const restMinutes = String(Math.floor(restTime / 60)).padStart(2, "0");
  const restSeconds = String(restTime % 60).padStart(2, "0");
  restTime -= 1;
  pomoBtn.innerHTML = `${restMinutes} : ${restSeconds}`;
  if (restTime < 5 && restTime >= 0) {
    beep();
  } else if (restTime < 0) {
    clearInterval(restInterval);
    window.location.reload(true);
  }
}

function beep() {
  var snd = new Audio(
    "https://t1.daumcdn.net/cfile/tistory/99412B355CF6B93806?original"
  );
  snd.play();
}
