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
app.modalImg = document.querySelector(".modalImg")
app.closeMenuButton = document.querySelector(".closeMenuButton")
app.slideOutNav = document.querySelector(".slideOutNav")
app.hamburgerMenu = document.querySelector(".hamburger")

app.navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navBar");
  burger.addEventListener("click", () => {
    nav.classList.toggle("navActive");
  });
};

app.navSlide();

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
 })
})

app.typewriter = new Typewriter(app.typed, {
  loop: true,
  delay: 100,
  strings: ["Developer"],
  autoStart: true,
  pauseFor: 2000
});

// app.learnMore.forEach((button) => {
//    button.addEventListener("click", () => {
//     app.modal.classList.add("modalActive")
//     const paragraphHeader = document.createElement("h5")
//     paragraphHeader.innerHTML = "Project Info"
//     const paragraph = document.createElement("p")
//     app.projectInfo.innerHTML = " "
//     const image = document.createElement("img")
//     app.modalImg.innerHTML = " "
//     app.projectInfo.appendChild(paragraphHeader)
//     if (button === app.quiztionary) {
//       paragraph.innerHTML = "Quiztionary is a dictionary game where players must match the correct word to the definition. It relies on two different API's to generate random words and to procure a matching definition. This game was creating using Vanilla.Js, HTML5, and CSS+SASS. Made in collaboration with Stephen Korzenstien"
//       app.projectInfo.appendChild(paragraph)
//       app.viewDemo.setAttribute("href", "https://quiztionary.netlify.app/");
//       image.src = "../assets/asset1a.jpg"
//       app.modalImg.appendChild(image)

//     } else if (button === app.underthesea){
//       paragraph.innerHTML = "Under the Sea is a PSD conversion made with HTML5, CSS+SASS and Javascript. It is fully responsive and has a functioning image coursel, comments section, and menu."
//       app.projectInfo.appendChild(paragraph)
//        app.viewDemo.setAttribute("href", "https://quiztionary.netlify.app/");
//         image.src = "../assets/asset2a.jpg"
//         image.classList.add("fishImg");
//         app.modalImg.appendChild(image)
      
//     }
// })
// });

// app.closeButton.addEventListener("click", () => { 
//   app.modal.classList.remove("modalActive")
// });


// app.closeMenuButton.addEventListener("click", () => { 
//   app.slideOutNav.classList.add("closeMenu")
//    app.slideOutNav.classList.remove("openMenu")
// });

// app.hamburgerMenu.addEventListener("click", () => { 
//   app.slideOutNav.classList.add("openMenu")
//     app.slideOutNav.classList.remove("closeMenu")
// });

window.addEventListener("scroll",function() {
  app.stickyHeader.classList.toggle("sticky", window.scrollY > 0);
});

// taken from Alvaro Trigo
window.addEventListener("scroll", function() {
   const reveals = document.querySelectorAll(".reveal");
   for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});