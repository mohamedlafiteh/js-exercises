var numberOfStudents = 15;
var numberOfMentors = 8;

var totalNumber = numberOfStudents + numberOfMentors;

var studentPercent = (numberOfStudents / totalNumber) * 100;
var roundPercent = Math.round(studentPercent);


var mentorsPercent = (numberOfMentors / totalNumber) * 100;
var roundPercent2 = Math.round(mentorsPercent);
console.log("Percentage students: " + roundPercent + "%");

console.log("Percentage mentors: " + roundPercent2 + "%");
