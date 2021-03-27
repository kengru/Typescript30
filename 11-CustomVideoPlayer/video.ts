const player = document.querySelector<HTMLDivElement>(".player");
const video = player.querySelector<HTMLVideoElement>(".viewer");
const progress = player.querySelector<HTMLDivElement>(".progress");
const progressBar = player.querySelector<HTMLDivElement>(".progress__filled");
const toggle = player.querySelector<HTMLButtonElement>(".toggle");
const skipButtons = player.querySelectorAll<HTMLButtonElement>("[data-skip]");
const ranges = player.querySelectorAll<HTMLInputElement>(".player__slider");

let isRangeHold = false;
let isProgressHold = false;

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(this: HTMLVideoElement) {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function skip(this: HTMLButtonElement) {
  video.currentTime += +this.dataset.skip;
}

function handleRangeUpdate(this: HTMLInputElement) {
  if (!isRangeHold) return;
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event: MouseEvent) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
video.currentTime = 0;

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));

// Making it work when mouse is holding the range.
ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
  range.addEventListener("mousedown", () => (isRangeHold = true));
  range.addEventListener("mouseup", () => (isRangeHold = false));
  range.addEventListener("mouseout", () => (isRangeHold = false));
});

progress.addEventListener("click", scrub);
progress.addEventListener(
  "mousemove",
  (event) => isProgressHold && scrub(event)
);
progress.addEventListener("mousedown", () => (isProgressHold = true));
progress.addEventListener("mouseup", () => (isProgressHold = false));
progress.addEventListener("mouseout", () => (isProgressHold = false));
