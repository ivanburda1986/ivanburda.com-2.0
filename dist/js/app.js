// INIT
const projectDetails = new ProjectDetailsUI();

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


// PORTFOLIO OVERLAYS
const project1showBtn = document.getElementById('project1-showBtn');
const project1hideBtn = document.getElementById('project1-hidebtn');
const project2showBtn = document.getElementById('project2-showBtn');
const project2hideBtn = document.getElementById('project2-hidebtn');
const project3showBtn = document.getElementById('project3-showBtn');
const project3hideBtn = document.getElementById('project3-hidebtn');
const project4showBtn = document.getElementById('project4-showBtn');
const project4hideBtn = document.getElementById('project4-hidebtn');

project1showBtn.addEventListener('click', () => {
  projectDetails.showProjectOverlay(1);
});

project1hideBtn.addEventListener('click', () => {
  projectDetails.hideProjectOverlay(1);
});

project2showBtn.addEventListener('click', () => {
  projectDetails.showProjectOverlay(2);
});

project2hideBtn.addEventListener('click', () => {
  projectDetails.hideProjectOverlay(2);
});

project3showBtn.addEventListener('click', () => {
  projectDetails.showProjectOverlay(3);
});

project3hideBtn.addEventListener('click', () => {
  projectDetails.hideProjectOverlay(3);
});

project4showBtn.addEventListener('click', () => {
  projectDetails.showProjectOverlay(4);
});

project4hideBtn.addEventListener('click', () => {
  projectDetails.hideProjectOverlay(4);
});



// FOOTER
// Get full year
const fullYear = new Date().getFullYear();
document.getElementById('footer-year').textContent = fullYear;