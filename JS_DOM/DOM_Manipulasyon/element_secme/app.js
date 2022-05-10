// Elementi ID'ye göre seçmek

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//Element CLass'a göre seçim ... Class bir çok şeye verilebildiğinden dizi söz konusudur.
element = document.getElementsByClassName("list-group-item")[0]; // ilk element
element = document.getElementsByClassName("card-header");

//Element Tag'e göre seçme
element = document.getElementsByTagName("div");

//Query Selector - CSS Selector - Tek bir element
element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item"); // ilk list-group-item
element = document.querySelector("li"); // ilk li
element = document.querySelector("div"); // ilk div

//QuerySelectorAll -Tüm elementleri seç
element = document.querySelectorAll(".list-group-item");
element.forEach(function(el){
    console.log(el);
});



console.log(element);