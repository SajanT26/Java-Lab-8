let student = {
    name: "Sajan Thavarasa",
    age: 20,
    enrolled: true,
    courses: ["Javascript", "Web design", "Operating systems", "Database"],
    displayInfo: function () {
      return `Student: ${this.name}, Age: ${this.age}`;
    }
  };

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log(student.displayInfo());

let studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);
let StudentObject = JSON.parse(studentJSON);
console.log("Student Object:", StudentObject);
console.log("Are the objects equal?", JSON.stringify(student) === JSON.stringify(StudentObject));

let { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

let scores = [7, 65, 23, 76];
let [score1, score4] = scores;
console.log("First Score:", score1);
console.log("Second Score:", score4);