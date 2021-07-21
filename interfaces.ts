interface Person {
  height: number;
  weight: number;
  name?: string;
}

let newperson = { height: 2, weight: 120 };

function showPerson(person: Person): string {
  let mediaweight: number = person.height / person.weight;
  if (person.name) {
    return `${person.name} is ${mediaweight} weight.`;
  } else {
    return `I don't know who you are, but your weight is ${mediaweight}`;
  }
}

console.log(showPerson(newperson));
