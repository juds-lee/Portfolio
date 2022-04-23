const app = {};
app.closeButton = document.querySelector(".close");
app.learnMore = document.querySelector(".learnMore");
app.modal = document.querySelector(".modalBG");
app.typed = document.querySelector('.typed');
app.stickyHeader = document.querySelector("header");
app.sections = document.querySelectorAll("header, section, footer");
app.navItem = document.querySelectorAll(".navItem");

window.addEventListener("scroll", () => {
 let currentSection = ""; 
 app.sections.forEach( section => {
   const sectionTop = section.offsetTop
   const sectionHeight = section.clientHeight;
   if (pageYOffset >= sectionTop/3) {
     currentSection = section.getAttribute("id"); 
   }
   console.log(currentSection)
 })
 app.navItem.forEach(li => {
  li.classList.remove("scrollActive");
  if (li.classList.contains(currentSection)){
    li.classList.add("scrollActive");
  }
 })
})



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

window.addEventListener("scroll",function() {
  app.stickyHeader.classList.toggle("sticky", window.scrollY > 0);
})

