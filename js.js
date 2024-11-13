const input = document.querySelector(".guessInput");
const submit = document.querySelector(".submitGuess");
const msg = document.querySelector(".feedback");
const attemptes = document.querySelector(".attemptes");
const reset = document.querySelector(".rest");
let rndomnum = Math.floor(Math.random() * 10);
let attmpt = 0;
submit.addEventListener("click", () => {
  if (input.value !== "") {
    if (input.value == rndomnum) {
      msg.textContent = `correct ${rndomnum}`;
      submit.disabled = true;
      input.disabled = true;
      attemptes.textContent = `your attemtes was ${attmpt}`;
    } else if (input.value > rndomnum) {
      msg.textContent = "you are too big";
      attmpt++;
      attemptes.textContent = attmpt;
    } else if (input.value < rndomnum) {
      msg.textContent = "tooo smll";
      attmpt++;
      attemptes.textContent = attmpt;
    }
    input.value = "";
    console.log(rndomnum);
  }
});

reset.addEventListener("click", () => {
  attmpt = 0;
  submit.disabled = false;
  input.disabled = false;
  rndomnum = Math.floor(Math.random() * 10);
  attemptes.textContent = attmpt;
  msg.textContent = "";
});
