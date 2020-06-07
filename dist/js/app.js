//UI Selectors
const mobileNavigation = document.getElementById("main-nav-mobile-menu-options");
const burgerToggler = document.getElementById("burger-toggler");
const burgerLine1 = document.getElementById("burger-line1");
const burgerLine2 = document.getElementById("burger-line2");
const burgerLine3 = document.getElementById("burger-line3");

//SCROLLING
function setScrolling(desiredState) {
  const body = document.getElementsByTagName("body");
  body[0].style = `overflow: ${desiredState}`;
  body[0].style = "position: fixed";
}


//NAVIGATION - mobile
burgerToggler.addEventListener("click", (e) => {
  if (e.srcElement.checked) {
    setScrolling('hidden');
    mobileNavigation.classList.add("anim-slideToScreen-endState");
    burgerLine1.classList.add("line1-move", "line1-animate-endState");
    burgerLine2.classList.add("line2-animate-endState");
    burgerLine3.classList.add("line3-move", "line3-animate-endState");

  } else {
    setScrolling('visible');
    mobileNavigation.classList.remove("anim-slideToScreen-endState");
    burgerLine1.classList.remove("line1-move", "line1-animate-endState");
    burgerLine2.classList.remove("line2-animate-endState");
    burgerLine3.classList.remove("line3-move", "line3-animate-endState");
  }
})

function closeMobileNavigation() {
  setScrolling('visible');
  document.getElementById("main-nav-mobile-menu-options").classList.remove("anim-slideToScreen-endState");
  document.getElementById("burger-toggler").checked = false;
  burgerLine1.classList.remove("line1-move", "line1-animate-endState");
  burgerLine2.classList.remove("line2-animate-endState");
  burgerLine3.classList.remove("line3-move", "line3-animate-endState");
}

document.getElementById("nav-mobile-profile").addEventListener("click", (e) => {
  closeMobileNavigation();
})
document.getElementById("nav-mobile-experience").addEventListener("click", (e) => {
  closeMobileNavigation();
})
document.getElementById("nav-mobile-portfolio").addEventListener("click", (e) => {
  closeMobileNavigation();
})
document.getElementById("nav-mobile-contact").addEventListener("click", (e) => {
  closeMobileNavigation();
})




// FOOTER
// Get full year
const fullYear = new Date().getFullYear();
document.getElementById('footer-year').textContent = fullYear;