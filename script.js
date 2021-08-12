var factList = [
  "771 million people don’t have clean water close to home.",
  "Every minute a newborn dies from infection caused by lack of safe water and an unclean environment.",
  "Around the world up to 443 million school days are lost every year because of water-related illnesses",
  "1.7 billion people don't have a decent toilet of their own.",
  "Diarrhoea caused by dirty water and poor toilets kills one child under the age of five every two minutes.",
  "Every $1 invested in water and toilets returns an average of $4 in increased productivity."
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if(myButton){
  myButton.addEventListener("click", displayFact);
}


function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if(count == factList.length){
    count = 0;
  }
}
