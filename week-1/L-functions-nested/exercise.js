
//exercise 1

function Percentage(students, mentors) {
  return Math.round((students / (students + mentors)) * 100);
}
function createMessage(students, mentors, num) {
  var message = "percnetage" + num + ":" + Percentage(students, mentors) + "%";
  return message;
}
console.log(createMessage(15, 8, "students"));
console.log(createMessage(8, 15, "mentors"));

//exercise 2
