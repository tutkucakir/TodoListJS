//Replace

const cardbody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id="taks-title";
newElement.textContent="Yeni Todolar";

//Eski element
const oldElement = document.querySelector("#tasks-title");

//Replace
cardbody.replaceChild(newElement,oldElement);


console.log(newElement);