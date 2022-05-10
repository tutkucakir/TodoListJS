// Yeni element oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

//TextContent
//newLink.textContent="Farklı sayfaya git";

// Dikkat
// cardbody.textContent = "sadasdas"; // tüm card body içeriğini silip text ekler

// Text Node
//const text = document.createTextNode("Naber");
//cardbody.appendChild(text);

newLink.appendChild(document.createTextNode("Farklı sayfaya git"));

cardbody.appendChild(newLink);









console.log(newLink);