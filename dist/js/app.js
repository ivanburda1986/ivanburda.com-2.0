// INIT
const projectDetails = new ProjectDetailsUI();


// PORTFOLIO OVERLAYS
const project1showBtn = document.getElementById('project1-showBtn');
const project1hideBtn = document.getElementById('project1-hidebtn');

project1showBtn.addEventListener('click', () => {
  projectDetails.showProjectOverlay();
});

project1hideBtn.addEventListener('click', () => {
  projectDetails.hideProjectOverlay();
});



// FOOTER
// Get full year
const fullYear = new Date().getFullYear();
document.getElementById('footer-year').textContent = fullYear;