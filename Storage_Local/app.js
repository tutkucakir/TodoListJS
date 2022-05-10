// Local Storage

// SetItem
// localStorage.setItem("hareket", "Burqee");
// localStorage.setItem("tekrar", 50); //integer da yazsak string olarak kaydedilir.


//GetItem
// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

//Clear Local Storage
//localStorage.clear();




// //console.log(localStorage.getItem("sport"));

// if(localStorage.getItem("spor")===null)
// {
//     console.log("Sorguladığınız veri bulunmuyor")
// }else{
//     console.log(localStorage.getItem("spor"));
// }

//Local Storage -> Array Yazma.
//const todos = ["Todo 1", "Todo 2", "Todo 3"]; // string olarak yazılır ancak...
//localStorage.setItem("todos",todos);
//console.log(localStorage.getItem("todos"));

// JSON ile yazarsak;
//localStorage.setItem("todos",JSON.stringify(todos));
//const value = localStorage.getItem("todos"); -> string

//const value = JSON.parse(localStorage.getItem("todos")); // Array olarak görüntülenecek
 
//console.log(value);



const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;
    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }


    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));


    e.preventDefault();//submit yenileme olayını engelleme
}

