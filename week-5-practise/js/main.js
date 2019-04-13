var blueButton = document.getElementById("blueBtn");

var jumbotron = document.querySelector(".jumbotron");
var donateBike = document.getElementById("donates_all");
var volunteeringButton = document.getElementById("volunteer_button");
blueButton.addEventListener("click", function () {
  donateBike.style.backgroundColor = "#ffa500"
  jumbotron.style.backgroundColor = "#588fbd"
  volunteeringButton.style.background = "black"
// // - ** Jumbotron ** background color to`#588fbd`
//     - ** Donate a bike ** button background color to`#ffa500`
//       - ** Volunteer ** button background color to`black` and text color to`white`
})

