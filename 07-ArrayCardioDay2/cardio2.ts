type Person = {
  name: string;
  year: number;
};

type Comments = {
  text: string;
  id: number;
};

const people2: Person[] = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments: Comments[] = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// Array.prototype.some()
console.log(
  `Is at least one person 19 or older? ${people2.some(
    (person) => 2021 - person.year >= 19
  )}`
);
// Array.prototype.every()
console.log(
  `Is everyone 19 or older? ${people2.every(
    (person) => 2021 - person.year >= 19
  )}`
);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const ID = 823423;
const commentToRead = comments.find((comment) => comment.id === ID);
console.log(`Comment with ID ${ID}: "${commentToRead.text}"`);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const idxToDelete = comments.findIndex((comment) => comment.id === ID);
// comments.splice(idxToDelete, 1);
const newComments = [
  ...comments.slice(0, idxToDelete),
  ...comments.slice(idxToDelete + 1)
];
console.log("New comments:", newComments);
