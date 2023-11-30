const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const nextYear = document.getElementById("nextYear");
const laoding = document.getElementById("loading");

const current_year = new Date().getFullYear();

const new_year_time = new Date(`january 01 ${current_year + 1} 00:00:00`);

// Display next Year
nextYear.innerText = new_year_time.getFullYear();

//

const update_countdown = function () {
  const current_time = new Date();
  const diff = new_year_time - current_time;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerText = d < 10 ? "0" + d : d;
  hours.innerText = h < 10 ? "0" + h : h;
  minutes.innerText = m < 10 ? "0" + m : m;
  seconds.innerText = s < 10 ? "0" + s : s;
  // console.log(m);
};

// Sowing Spinner before countdown
setInterval(() => {
  laoding.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(update_countdown, 1000);
