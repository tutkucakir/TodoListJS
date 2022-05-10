//Klavye Eventleri


//keypress
//>Sadece harfler ve sayılar, semboller de var aslında....
// document.addEventListener("keypress",run);

// function run(e)
// {
//     //console.log(e.which); // basılan karakterin ascii karşılığı
//     console.log(e.key); // basılan karakter direkt görünür
    
// }

//keydown
//>Karfler, sayılar, her tuş görüntülenir (tab, ok tuşları, backspace, capslock vs.)

// document.addEventListener("keydown",run);

// function run(e)
// {
//     //console.log(e.which); // basılan karakterin ascii karşılığı
//     console.log(e.key); // basılan karakter direkt görünür    
// }


//keyup
//>Tuşu bırakınca çalışan event

// document.addEventListener("keyup",run);

// function run(e)
// {
//     //console.log(e.which); // basılan tuş bırakınca çalışır ascii karşılığı
//     console.log(e.key); // basılan tuş bırakınca çalışır karakter direkt görünür
    
// }



////////////-----------------------------------
/// For Example
///////

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e)
{
    //console.log(e.key); // tek karakter
    //console.log(e.target.value);
    header.textContent = e.target.value;
}


