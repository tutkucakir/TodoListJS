let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)"); //ikinci çocuk // .textContent ile todo2'yi görebiliriz.
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo; //.textContent ile todo2'yi görebiliriz.
value = cardrow;

//Child Nodes // satır boşluğnu bile text olarak görür
value = todoList.childNodes;
value = todoList.childNodes[0]; 

//Children -Element
value = todoList.children;
value = todoList.children[0]; // İlk çocuk geldi
value = todoList.children[todoList.children.length-1]; // son çocuk
value = todoList.children[2].textContent="Değişti";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent="Burası da değişti."; // cardrowun torununun text içeriğini değiştirdik

value =todoList;
value = todoList.children[0];
value = todoList.firstElementChild; //ilk çocuk
value = todoList.lastElementChild; //son çocuk
value = todoList.children.length; // çocuk sayısı
value = todoList.childElementCount; // çocuk sayısı

value = cardrow;
value = cardrow.parentElement; // ebeveynini bulduk -> container
value = cardrow.parentElement.parentElement; // Aha dedeyi bulduk -> body

// Element kardeşleri, ebeveynden çıkan diğer bireyler
value =todo;
value = todo.previousElementSibling;//bir önceki kardeş
value = todo.nextElementSibling; // sonraki kardeş
value = todo.nextElementSibling.nextElementSibling; // sonrakinden sonraki kardeş
value = todo.previousElementSibling.previousElementSibling; // Başka önceki kardeşi olmadığından null geldi

console.log(value);