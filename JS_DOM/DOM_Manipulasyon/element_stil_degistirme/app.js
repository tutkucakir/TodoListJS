//const element = document.querySelector("#clear-todos");

//Element özellikleri
// console.log(element);
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


//Style ve Element Özelliklerini değiştirme

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft ="5px";
// element.href="https://www.google.com.tr";
// element.target = "_blank";
// element.textContent="Silin";
// //element.textContent="<i></i>"; // HTML yazılamaz
// element.innerHTML="<i class='fa fa-trash'></i> Silin"; // Html inner html ile yazlabilir


// const elements = document.querySelectorAll(".list-group-item"); // Node list
// elements.forEach(function(el){
//     el.style.color="red";
//     el.style.background = "#eee";
// });


let element2 = document.querySelector("li"); // ilk li
element2 = document.querySelector("li:first-child"); // ilk çocuk li
element2 = document.querySelector("li:last-child"); // son çocuk li
element2 = document.querySelector("li:nth-child(2)"); // 2.çocuk li 
element2 = document.querySelector("li:nth-child(4)"); // 4.çocuk li 
element2t = document.querySelectorAll("li:nth-child(odd)"); // Tekli çocuklar 1,3,5,7
element2c = document.querySelectorAll("li:nth-child(even)"); // Çift çocuklar 2,4,6,8
element2c.forEach(function(el){
    el.style.color ="red";
    el.style.background="#ccc";
});
element2t.forEach(function(el){
    el.style.color ="white";
    el.style.background="red";
});


console.log(element2);