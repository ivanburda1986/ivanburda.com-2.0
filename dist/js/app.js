//UI Selectors
const mobileNavigation = document.getElementById("main-nav-mobile-menu-options");
const burgerToggler = document.getElementById("burger-toggler");
const burger = document.getElementById("burger");

//NAVIGATION - mobile
burgerToggler.addEventListener("click", (e) => {
  if (e.srcElement.checked) {
    mobileNavigation.classList.add("anim-slideToScreen-endState");
    burger.classList.add("burger-animate-endState");

  } else {
    mobileNavigation.classList.remove("anim-slideToScreen-endState");
    burger.classList.remove("burger-animate-endState");
  }
})

//Closing the mobile nav if the user clicks outside of it
let windowInnerWidth = window.innerWidth;
if (windowInnerWidth <= 600) {
  document.addEventListener("click", (e) => {
    let mobileNavigationBottomValueYAxis = mobileNavigation.getBoundingClientRect().bottom;
    if (mobileNavigationBottomValueYAxis > 0 && e.clientY > mobileNavigationBottomValueYAxis) {
      mobileNavigation.classList.remove("anim-slideToScreen-endState");
      burger.classList.remove("burger-animate-endState");
      burgerToggler.checked = false;
    }
  })
}

function closeMobileNavigation() {
  document.getElementById("main-nav-mobile-menu-options").classList.remove("anim-slideToScreen-endState");
  document.getElementById("burger").classList.remove("burger-animate-endState");
  document.getElementById("burger-toggler").checked = false;
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