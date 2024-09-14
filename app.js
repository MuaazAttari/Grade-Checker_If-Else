let grade = +prompt("Please enter your percentage");

if (grade < 0 || grade > 100) {
  console.log("Please enter a number between 0 and 100");
} 
else if (grade >= 80) {
  console.log("A1!");
}
 else if (grade >= 70) {
  console.log("A");
}
 else if (grade >= 60) {
  console.log("B");
}
 else if (grade >= 50) {
  console.log("C");
}
 else {
  console.log("Fail!!!");
}
