type Dog = {
  name: string;
  age: number;
};

const dogs: Dog[] = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 }
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Regular hello.");
// Interpolated
console.log("Interpolated %s.", "hello");
console.log(`Interpolated backsticks ${"hello"}.`);
// Styled
console.log("%c I am a huge text.", "font-size:30px;");
// warning!
console.warn("WarninG");
// Error :|
console.error("Nooo");
// Info
console.info("Some kind of information");
// Testing
console.assert(1 === 1, "Is this wrong?");
// clearing
console.clear();
// Viewing DOM Elements
const p = document.querySelector<HTMLParagraphElement>("p");
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dogs years old.`);
  console.groupEnd();
});
// counting
console.count("John");
console.count("John");
console.count("May");
console.count("May");
console.count("May");
// timing
console.time(`Fetching data.`);
fetch("https://api.github.com/users/kengru")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd(`Fetching data.`);
    console.dir(data);
  });
// table
console.table(dogs);
