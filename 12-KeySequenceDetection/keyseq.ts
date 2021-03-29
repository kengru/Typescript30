const pressed = [];
const secret = "laura";

window.addEventListener("keyup", (event) => {
  pressed.push(event.key);
  pressed.splice(-secret.length - 1, pressed.length - secret.length);
  if (pressed.join("").includes(secret)) {
    console.log("Yes!");
    cornify_add();
  }
});
