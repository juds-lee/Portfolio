const app = {};
app.closeButton = document.querySelector(".close");
app.learnMore = document.querySelector(".learnMore");
app.modal = document.querySelector(".modalBG");
app.typed = document.querySelector('.typed');

app.typewriter = new Typewriter(app.typed, {
  loop: true,
  delay: 75,
  strings: ["Developer"],
  autoStart: true,
  pauseFor: 2000
});

app.learnMore.addEventListener("click", () => {
  app.modal.classList.add("modalActive")
});

app.closeButton.addEventListener("click", () => {
  app.modal.classList.remove("modalActive")
});

