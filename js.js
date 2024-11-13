const input = document.querySelector(".guessInput");
const submit = document.querySelector(".submitGuess");
const msg = document.querySelector(".feedback");
const attemptes = document.querySelector(".attemptes");
const reset = document.querySelector(".rest");
const pss = document.querySelector(".pss");
const startt = document.querySelector(".startt");
const h4 = document.querySelector("h4");
const ul = document.querySelector("ul");
li = document.querySelector("li");

const container = document.querySelector(".container");
let timerr = 45;
let rndomnum = Math.floor(Math.random() * 100);
let attmpt = 0;
let settimer;
let highscore = 9999999999;

function startfunction() {
  intumer();

  startt.disabled = "true";

  submit.addEventListener("click", () => {
    if (input.value !== "") {
      if (input.value == rndomnum) {
        attmpt++;
        clearInterval(settimer);
        container.style.backgroundColor = "green";
        msg.textContent = `correct ${rndomnum}`;
        submit.disabled = true;
        input.disabled = true;

        if (attmpt < highscore) {
          li.textContent = `your high score is ${attmpt}`;
          highscore = attmpt;
        } else li.textContent = ` High score  ${highscore}`;
      } else if (input.value > rndomnum) {
        msg.textContent = "you are too big";
        container.style.backgroundColor = "red";

        attmpt++;
        attemptes.textContent = attmpt;
      } else if (input.value < rndomnum) {
        msg.textContent = "tooo smll";
        attmpt++;
        attemptes.textContent = attmpt;
        container.style.backgroundColor = "red";
      }
      input.value = "";
      console.log(rndomnum);
    }
  });
}
function intumer() {
  clearInterval(settimer);
  settimer = setInterval(function () {
    timerr--;
    h4.textContent = timerr;
    if (attmpt >= 10 || timerr == 0) {
      clearInterval(settimer);

      submit.disabled = true;
      input.disabled = true;
      container.style.backgroundColor = "red";
      pss.textContent = `you lose my friend the number was ${rndomnum}`;
      msg.textContent = "";
      input.value = "";
      attemptes.textContent = "";
    }
  }, 1000);
}

function resetgame() {
  pss.textContent = "Guess the number between 1 and 100!";
  clearInterval(settimer);
  container.style.backgroundColor = "white";

  attmpt = 0;
  timerr = 45;
  submit.disabled = false;
  input.disabled = false;
  rndomnum = Math.floor(Math.random() * 100);
  attemptes.textContent = attmpt;
  msg.textContent = "";
  input.value = "";
  intumer();
}
reset.addEventListener("click", resetgame);
startt.addEventListener("click", startfunction);
