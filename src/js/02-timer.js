// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const textEl = document.querySelector('input#datetime-picker');
const startEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startEl.disabled = true;
startEl.addEventListener('click', onTimeStart);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) {
            alert("Please choose a date in the future")
        } else
          selectedDate = selectedDates[0].getTime();
            startEl.disabled = false;
  },
};


flatpickr(textEl, options);

function onTimeStart() {
  timer.start();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


const timer = {
  
   start() {
    intervalId = setInterval(() => {
      currentTime = Date.now();
      const deltaTime = selectedDate - currentTime;
      updateTimerface(convertMs(deltaTime));
      startEl.disabled = true;
      textEl.disabled = true;

      if (deltaTime <= 1000) {
        this.stop();
      }
    }, 1000);
  },
    stop() {
    startEl.disabled = true;
    textEl.disabled = false;
    clearInterval(intervalId);
    return;
  },
}

function updateTimerface({ days, hours, minutes, seconds }) {
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEl.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}