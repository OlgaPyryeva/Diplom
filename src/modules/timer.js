let timeRemaining;
let getTime;

const timer = (deadline) => {
  const form1 = document.getElementById("order_1");
  const form2 = document.getElementById("order_2");
  const timer1Days = form1.querySelector("div.count_1>span");
  const timer1Hours = form1.querySelector("div.count_2>span");
  const timer1Minutes = form1.querySelector("div.count_3>span");
  const timer1Seconds = form1.querySelector("div.count_4>span");

  const timer2Days = form2.querySelector("div.count_1>span");
  const timer2Hours = form2.querySelector("div.count_2>span");
  const timer2Minutes = form2.querySelector("div.count_3>span");
  const timer2Seconds = form2.querySelector("div.count_4>span");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    if (days >= 0 && days < 10) {
      days = "0" + days;
    }

    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    if (hours >= 0 && hours < 10) {
      hours = "0" + hours;
    }
    let minutes = Math.floor((timeRemaining / 60) % 60);
    if (minutes >= 0 && minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = Math.floor(timeRemaining % 60);
    if (seconds >= 0 && seconds < 10) {
      seconds = "0" + seconds;
    }

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    getTime = getTimeRemaining();

    timer1Days.textContent = getTime.days;
    timer1Hours.textContent = getTime.hours;
    timer1Minutes.textContent = getTime.minutes;
    timer1Seconds.textContent = getTime.seconds;

    timer2Days.textContent = getTime.days;
    timer2Hours.textContent = getTime.hours;
    timer2Minutes.textContent = getTime.minutes;
    timer2Seconds.textContent = getTime.seconds;
  };

  updateClock();

  if (getTime.timeRemaining > 0) {
    setInterval(updateClock, 1000);
  } else if (getTime.timeRemaining <= 0) {
    timer1Days.textContent = "00";
    timer1Hours.textContent = "00";
    timer1Minutes.textContent = "00";
    timer1Seconds.textContent = "00";

    timer2Days.textContent = "00";
    timer2Hours.textContent = "00";
    timer2Minutes.textContent = "00";
    timer2Seconds.textContent = "00";
  }
};

export default timer;
