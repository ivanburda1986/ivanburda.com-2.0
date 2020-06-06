class ProjectDetailsUI {
  constructor() {
    this.project1Overlay = document.getElementById('project1-overlay-container');
  }

  showProjectOverlay() {
    this.project1Overlay.classList.add('show');
    this.project1Overlay.classList.remove('hide');
  }

  hideProjectOverlay() {
    this.project1Overlay.classList.remove('show');
    this.project1Overlay.classList.add('hide');
  }
}