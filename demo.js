// FOR LOOP
console.log("FOR LOOP");
for(let i = 1; i <= 10; i++) {
    console.log("2 * " + i + " = " + (2 * i));
}

// WHILE LOOP
console.log("WHILE LOOP");
let j = 1;
while(j <= 10) {
    console.log("2 * " + j + " = " + (2 * j));
    j++;
}

// DO WHILE LOOP
console.log("DO WHILE LOOP");
let k = 1;
do {
    console.log("2 * " + k + " = " + (2 * k));
    k++;
} while(k <= 10);

//DO WHILE LOOP

let count = 6
do
{
    console.log(count);
    count++;
}
while(count <= 5)
    console.log("outside do...while")
// let
let studentCount = 10;
studentCount = 11;
console.log("Student Count:", studentCount);

// const
const collegeName = "VETIAS";
console.log("College Name:", collegeName);

// template literals
let studentName = "Arun";
console.log(`Welcome ${studentName} to ${collegeName}`);

// object
const student = {
    name: "Arun",
    age: 18,
    department: "CSA"
};

// destructuring
const { name, age, department } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);

// arrow function
const displayStudent = () => {
    console.log("Arun");
    console.log("Priya");
    console.log("Deva");
};

displayStudent();