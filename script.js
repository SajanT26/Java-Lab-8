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