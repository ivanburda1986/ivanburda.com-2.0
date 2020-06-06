class ProjectDetailsUI {
  constructor() {
    this.project1Overlay = document.getElementById('project1-overlay-container');
    this.project2Overlay = document.getElementById('project2-overlay-container');
    this.project3Overlay = document.getElementById('project3-overlay-container');
    this.project4Overlay = document.getElementById('project4-overlay-container');
  }

  showProjectOverlay(number) {
    this[`project${number}Overlay`].classList.add('show');
    this[`project${number}Overlay`].classList.remove('hide');
    console.log("hello");
  }

  hideProjectOverlay(number) {
    this[`project${number}Overlay`].classList.remove('show');
    this[`project${number}Overlay`].classList.add('hide');
    console.log("goodbye");
  }
}