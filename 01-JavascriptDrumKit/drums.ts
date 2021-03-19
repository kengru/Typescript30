function playSound(ev: KeyboardEvent) {
  const audio: HTMLAudioElement = document.querySelector(
    `audio[data-key="${ev.key}"]`
  );
  const key: HTMLDivElement = document.querySelector(
    `.key[data-key="${ev.key}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(ev: TransitionEvent) {
  if (ev.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(`.key`);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
