const allInputs = document.querySelectorAll<HTMLInputElement>(
  `input[type="checkbox"]`
);

let lastChecked: HTMLInputElement;

function clickShift(this: HTMLInputElement, event: MouseEvent) {
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    allInputs.forEach((input) => {
      if (input === this || input === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        input.checked = true;
      }
    });
  }
  lastChecked = this;
}

allInputs.forEach((item) => item.addEventListener("click", clickShift));
