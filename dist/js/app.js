// INIT
const projectDetails = new ProjectDetailsUI();


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