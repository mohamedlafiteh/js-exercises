

function mentor(name) {
    return name.toUpperCase();
}
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting(word) {
    return word.toUpperCase();
}

var greetingToMentors =greeting("Hello ");

console.log(greetingToMentors  +  mentor( mentor1));
console.log(greetingToMentors + mentor(mentor2));
console.log(greetingToMentors + mentor(mentor3));
console.log(greetingToMentors+ mentor(mentor4));
console.log(greetingToMentors + mentor(mentor5));

