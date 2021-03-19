function playSound(ev: KeyboardEvent) {
  const audio = document.querySelector<HTMLAudioElement>(
    `audio[data-key="${ev.key}"]`
  );
  const key = document.querySelector<HTMLDivElement>(
    `.key[data-key="${ev.key}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.remove("playing");
  key.classList.add("playing");
}

function removeTransition(ev: TransitionEvent) {
  if (ev.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function changePack(ev: Event) {
  const selected = ev.target as HTMLSelectElement;
  switch (selected.value) {
    case "punches":
      changeSrc("punches");
      break;
    case "perc":
      changeSrc("perc");
    default:
      break;
  }
}

function changeSrc(folder: string) {
  const audios = document.querySelectorAll<HTMLAudioElement>(`audio`);
  audios.forEach(
    (audio, key) => (audio.src = `sounds/${folder}/${key + 1}.wav`)
  );
}

const select = document.querySelector<HTMLSelectElement>("select");
select.addEventListener("change", changePack);

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll<HTMLDivElement>(`.key`);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
