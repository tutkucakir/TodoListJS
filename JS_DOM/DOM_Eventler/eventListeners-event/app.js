const filterInput = document.getElementById("filter");


// Input için focus olayı
// filterInput.onfocus = function(){
//     console.log("Naber");
// }

// filterInput.addEventListener("focus",function(e){
//     // // parametre olarak "event" de yazabiliriz "e" de yazabiliriz başka şeyler de...
//     // console.log(e);
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.placeholder);
//     // console.log(e.target.className);

//     //console.log("Naber");
// });


const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e)
{
    console.log("Submit eventi");

    //Aşağıda sayfa yenilenmesi önlenmiş olacak.
    e.preventDefault();
}



console.log(filterInput)