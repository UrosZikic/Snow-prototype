var progressBarOne = document.querySelector(".inner-percentage-bar-one");
var progressBarTwo = document.querySelector(".inner-percentage-bar-two");
var progressBarThree = document.querySelector(".inner-percentage-bar-three");
var percentage = document.querySelector(".percentage-one");
var percentageTwo = document.querySelector(".percentage-two");
var percentageThree = document.querySelector(".percentage-three");
// agenda variables
var agendaOne = document.querySelector(".agenda-one-js");
var agendaTwo = document.querySelector(".agenda-two-js");
var agendaThree = document.querySelector(".agenda-three-js");
var agendaText = document.querySelector(".agenda-text");

// code
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    progressBarOne.style.width = "75%";
    setInterval(count, 40);
    var counter = 0;
    function count() {
      if (counter <= 75) {
        percentage.innerHTML = counter++ + "%";
      }
    }

    progressBarTwo.style.width = "90%";
    setInterval(countTwo, 40);
    var counter = 0;
    function countTwo() {
      if (counter <= 90) {
        percentageTwo.innerHTML = counter++ + "%";
      }
    }

    progressBarThree.style.width = "65%";
    setInterval(countThree, 40);
    var counter = 0;
    function countThree() {
      if (counter <= 65) {
        percentageThree.innerHTML = counter++ + "%";
      }
    }

    observer.unobserve(progressBarOne);
  }
});
observer.observe(progressBarOne);

// code agenda
agendaOne.onclick = () => {
  agendaOne.style.borderBottom = "1px solid black";
  agendaTwo.style.borderBottom = "none";
  agendaThree.style.borderBottom = "none";
  agendaText.style.opacity = "0";
  setTimeout(appear, 500);
  function appear() {
    agendaText.style.opacity = "1";
  }
};

agendaTwo.onclick = () => {
  agendaOne.style.borderBottom = "none";
  agendaTwo.style.borderBottom = "1px solid black";
  agendaThree.style.borderBottom = "none";
  agendaText.style.opacity = "0";
  setTimeout(appear, 500);
  function appear() {
    agendaText.style.opacity = "1";
  }
};

agendaThree.onclick = () => {
  agendaOne.style.borderBottom = "none";
  agendaTwo.style.borderBottom = "none";
  agendaThree.style.borderBottom = "1px solid black";
  agendaText.style.opacity = "0";
  setTimeout(appear, 500);
  function appear() {
    agendaText.style.opacity = "1";
  }
};
