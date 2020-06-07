const targetElement1 = document.querySelector('#project-overlay-description1');
const targetElement2 = document.querySelector('#project-overlay-description2');
const targetElement3 = document.querySelector('#project-overlay-description3');
const targetElement4 = document.querySelector('#project-overlay-description4');

class ProjectDetailsUI {
  constructor() {
    this.project1Overlay = document.getElementById(
      "project1-overlay-container"
    );
    this.project2Overlay = document.getElementById(
      "project2-overlay-container"
    );
    this.project3Overlay = document.getElementById(
      "project3-overlay-container"
    );
    this.project4Overlay = document.getElementById(
      "project4-overlay-container"
    );
  }

  showProjectOverlay(number) {
    this[`project${number}Overlay`].classList.add("show");
    this[`project${number}Overlay`].classList.remove("hide");
    //setScrolling("hidden");
    if (number === 1) {
      bodyScrollLock.disableBodyScroll(targetElement1);
    };
    if (number === 2) {
      bodyScrollLock.disableBodyScroll(targetElement2);
    };
    if (number === 3) {
      bodyScrollLock.disableBodyScroll(targetElement3);
    };
    if (number === 4) {
      bodyScrollLock.disableBodyScroll(targetElement4);
    };
    console.log(number);
  }

  hideProjectOverlay(number) {
    this[`project${number}Overlay`].classList.remove("show");
    this[`project${number}Overlay`].classList.add("hide");
    //setScrolling("visible");
    if (number === 1) {
      bodyScrollLock.enableBodyScroll(targetElement1);
    };
    if (number === 2) {
      bodyScrollLock.enableBodyScroll(targetElement2);
    };
    if (number === 3) {
      bodyScrollLock.enableBodyScroll(targetElement3);
    };
    if (number === 4) {
      bodyScrollLock.enableBodyScroll(targetElement4);
    };

    console.log(number);
  }
}

// INIT
const projectDetails = new ProjectDetailsUI();

// PORTFOLIO OVERLAYS
const project1showBtn = document.getElementById("project1-showBtn");
const project1hideBtn = document.getElementById("project1-hidebtn");
const project2showBtn = document.getElementById("project2-showBtn");
const project2hideBtn = document.getElementById("project2-hidebtn");
const project3showBtn = document.getElementById("project3-showBtn");
const project3hideBtn = document.getElementById("project3-hidebtn");
const project4showBtn = document.getElementById("project4-showBtn");
const project4hideBtn = document.getElementById("project4-hidebtn");

project1showBtn.addEventListener("click", () => {
  projectDetails.showProjectOverlay(1);
});

project1hideBtn.addEventListener("click", () => {
  projectDetails.hideProjectOverlay(1);
});

project2showBtn.addEventListener("click", () => {
  projectDetails.showProjectOverlay(2);
});

project2hideBtn.addEventListener("click", () => {
  projectDetails.hideProjectOverlay(2);
});

project3showBtn.addEventListener("click", () => {
  projectDetails.showProjectOverlay(3);
});

project3hideBtn.addEventListener("click", () => {
  projectDetails.hideProjectOverlay(3);
});

project4showBtn.addEventListener("click", () => {
  projectDetails.showProjectOverlay(4);
});

project4hideBtn.addEventListener("click", () => {
  projectDetails.hideProjectOverlay(4);
});