const app = {};
app.closeButton = document.querySelector(".close");
app.learnMore = document.querySelectorAll(".learnMore");
app.modal = document.querySelector(".modalBG");
app.typed = document.querySelector('.typed');
app.stickyHeader = document.querySelector("header");
app.sections = document.querySelectorAll("header, section, footer");
app.navLink = document.querySelectorAll(".navLink");
app.projectInfo = document.querySelector(".projectInfo");
app.quiztionary = document.querySelector("#quiztionary")
app.underthesea = document.querySelector("#underthesea")
app.viewDemo = document.querySelector(".demoButton")



window.addEventListener("scroll", () => {
 let currentSection = ""; 
 app.sections.forEach( section => {
   const sectionTop = section.offsetTop
   const sectionHeight = section.clientHeight;
   if (pageYOffset >= sectionTop - sectionHeight / 3) {
     currentSection = section.getAttribute("id"); 
   }
 })
 app.navLink.forEach(link => {
  link.classList.remove("scrollActive");
  if (link.classList.contains(currentSection)){
    link.classList.add("scrollActive");
  }
  console.log(currentSection)
 })
})

app.typewriter = new Typewriter(app.typed, {
  loop: true,
  delay: 75,
  strings: ["Developer"],
  autoStart: true,
  pauseFor: 2000
});


app.learnMore.forEach((button) => {
   button.addEventListener("click", () => {
    app.modal.classList.add("modalActive")
    const paragraph = document.createElement("p")
    app.projectInfo.innerHTML = " "
    if (button === app.quiztionary) {
      paragraph.innerHTML = "Quiztionary is a dictionary game where players must match the correct word to the definition. It relies on two different API's to generate random words and to procure a matching definition. This game was creating using Vanilla.Js, HTML5, and CSS+SASS. Made in collaboration with Stephen Korzenstien"
      app.projectInfo.appendChild(paragraph)
      app.viewDemo.setAttribute("href", "https://quiztionary.netlify.app/");

    } else if (button === app.underthesea){
      paragraph.innerHTML = "Under the Sea is a PSD conversion made with HTML5, CSS+SASS and Javascript. It is fully responsive and has a functioning image coursel, comments section, and menu."
      app.projectInfo.appendChild(paragraph)
       app.viewDemo.setAttribute("href", "https://quiztionary.netlify.app/");

      
    }
})
});


app.closeButton.addEventListener("click", () => { 
  app.modal.classList.remove("modalActive")
});

window.addEventListener("scroll",function() {
  app.stickyHeader.classList.toggle("sticky", window.scrollY > 0);
});

