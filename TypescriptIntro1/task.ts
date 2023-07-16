//Person

type Person = {
  name: string;
  age: number;
};

function printPerson(x: Person) {
  console.log(x.name + " " + x.age);
}

printPerson({ name: "wasim", age: 32 });

