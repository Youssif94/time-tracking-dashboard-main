const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const workTime = document.querySelector(".work-time");
const workTimePrev = document.querySelector(".work-time-prev");

const playTime = document.querySelector(".play-time");
const playTimePrev = document.querySelector(".play-time-prev");

const studyTime = document.querySelector(".study-time");
const studyTimePrev = document.querySelector(".study-time-prev");

const exerciseTime = document.querySelector(".exercise-time");
const exerciseTimePrev = document.querySelector(".exercise-time-prev");

const socialTime = document.querySelector(".social-time");
const socialTimePrev = document.querySelector(".social-time-prev");

const selfCareTime = document.querySelector(".self-care-time");
const selfCareTimePrev = document.querySelector(".self-care-time-prev");

daily.addEventListener("click", () => {
  workTime.innerHTML = "5 hrs";
  workTimePrev.innerHTML = "Yesterday: 7";

  playTime.innerHTML = "1 hrs";
  playTimePrev.innerHTML = "Yesterday: 2";

  studyTime.innerHTML = "0 hrs";
  studyTimePrev.innerHTML = "Yesterday: 1";

  exerciseTime.innerHTML = "1 hrs";
  exerciseTimePrev.innerHTML = "Yesterday: 1";

  socialTime.innerHTML = "1 hrs";
  socialTimePrev.innerHTML = "Yeterday: 3";

  selfCareTime.innerHTML = "0 hrs";
  selfCareTimePrev.innerHTML = "Yesterday: 1";
});
weekly.addEventListener("click", () => {
  workTime.innerHTML = "32 hrs";
  workTimePrev.innerHTML = "Last Week: 36";

  playTime.innerHTML = "10 hrs";
  playTimePrev.innerHTML = "Last Week: 8";

  studyTime.innerHTML = "4 hrs";
  studyTimePrev.innerHTML = "Last Week: 7";

  exerciseTime.innerHTML = "4 hrs";
  exerciseTimePrev.innerHTML = "Last Week: 5";

  socialTime.innerHTML = "5 hrs";
  socialTimePrev.innerHTML = "Last Week: 10";

  selfCareTime.innerHTML = "2 hrs";
  selfCareTimePrev.innerHTML = "Last Week: 2";
});
monthly.addEventListener("click", () => {
  workTime.innerHTML = "103 hrs";
  workTimePrev.innerHTML = "Last month: 128";

  playTime.innerHTML = "23 hrs";
  playTimePrev.innerHTML = "Last month: 29";

  studyTime.innerHTML = "13 hrs";
  studyTimePrev.innerHTML = "Last month: 19";

  exerciseTime.innerHTML = "11 hrs";
  exerciseTimePrev.innerHTML = "Last month: 18";

  socialTime.innerHTML = "21 hrs";
  socialTimePrev.innerHTML = "Last month: 23";

  selfCareTime.innerHTML = "7 hrs";
  selfCareTimePrev.innerHTML = "Last month: 11";
});
