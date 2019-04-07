/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var page = document.querySelector("body");
page.style.backgroundColor = "red";
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
// function alertChange(){
//   alert("Thanks for visiting Bikes for Refugees!")
// }
var alertButton = document.querySelector("#alertBtn");
//alertButton.addEventListener("click", alertChange);
alertButton.addEventListener("click", () => alert("Thanks for visiting Bikes for Refugees!"));


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

function addText (x){
  var addParagraph = document.querySelector(".article");
  var paragraph = document.createElement("p");
  addParagraph.appendChild(paragraph);
  paragraph.innerText = "Hello world, I added this paragraph, I Mohamed Ali";
 
};
var buttonAdd = document.querySelector("#addTextBtn");
buttonAdd.addEventListener("click", addText);
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
function changeFontSize(){
  var linksChange = document.querySelectorAll("a");
  linksChange.forEach((x) => {
    x.style.fontSize = "15px";
  })
}

var linksAdd = document.querySelector("#largerLinksBtn");
linksAdd.addEventListener("click",changeFontSize);