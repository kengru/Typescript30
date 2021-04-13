const pressed = [];
const secret = "laura";

function cornify_add() {
  throw new Error("Function not implemented.");
}

window.addEventListener("keyup", (event) => {
  pressed.push(event.key);
  console.log(event.key);
  pressed.splice(-secret.length - 1, pressed.length - secret.length);
  if (pressed.join("").includes(secret)) {
    console.log("Yes!");
    cornify_add();
  }
});
