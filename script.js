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