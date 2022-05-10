const todoInput = document.getElementById("todo");

let element;

element = todoInput;
element = todoInput.classList;
element = todoInput.classList.length;

//todoInput.className = "form-conrol newClass"; // bu şekilde yada aşağıdaki gibi
//todoInput.classList.add("newClass"); // yeni sınıf eklendi
//todoInput.classList.add("newClass2"); // yeni sınıf eklendi
//todoInput.classList.remove("form-control"); // sınıf kaldırmak için
//element = todoInput.classList;

element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naber"); // placeholder bilgisini değiştirdik
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name"); // attribute silme


element = todoInput;
//element = todoInput.hasAttribute("name"); // name attribute var mı yok mu true - false sonucu

console.log(element);