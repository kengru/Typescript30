function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(event: TransitionEvent) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
});
