const secHand = document.querySelector<HTMLDivElement>(".second-hand");
const minHand = document.querySelector<HTMLDivElement>(".min-hand");
const hourHand = document.querySelector<HTMLDivElement>(".hour-hand");

function getIndiv(d: Date) {
  return { secs: d.getSeconds(), mins: d.getMinutes(), hours: d.getHours() };
}

function setDate() {
  const now = new Date();
  const { secs, mins, hours } = getIndiv(now);
  const secondsDegree = (secs / 60) * 360 + 90;
  const minutesDegree = (mins / 60) * 360 + 90;
  const hoursDegree = (hours / 12) * 360 + 90;
  secHand.style.transform = `rotate(${secondsDegree}deg)`;
  minHand.style.transform = `rotate(${minutesDegree}deg) scaleX(0.76)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg) scaleX(0.6)`;
}

setInterval(setDate, 1000);
