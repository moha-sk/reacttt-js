//Base types

let x: number = 20;
let MyName: string;
MyName = "Wasim";

let CheckOrNot: boolean;

CheckOrNot = false;

// Arrays

let Numbers: number[];

// Object
let person: {
  name: string;
  age: number;
};

person = {
  name: "Wasim",
  age: 12,
};

console.log(person);

// Array

type Student = {
  name: string;
  age: number;
};

let student: Student;
student = {
  name: "Wasim",
  age: 12,
};

let students: Student[];

students = [
  {
    name: "ahmad",
    age: 12,
  },
  {
    name: "rami",
    age: 13,
  },
];

//Functions

function add(a: number, b: number): number {
  return a + b;
}

add(1, 3);

// Union Types

let result: number | string;

result = 2;
result = "2";
