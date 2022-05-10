const filter = document.getElementById("filter");


// // Sayfa yüklenince çalışır -> kullanacağız
// document.addEventListener("DOMContentLoaded", load);
// function load(e)
// {
//     console.log("Sayfa yüklendi");
// }

//Focus
// filter.addEventListener("focus",run); //input inside clicked
// filter.addEventListener("blur",run); // input outside, clicked

// // Paste
// filter.addEventListener("paste",run); // her türlü yapıştırma işleminde çalışır. -> ctrl+v dahil

// // Copy
// filter.addEventListener("copy",run); // kopyalama işleminde alır -> ctrl+c dahil

// //Cut
// filter.addEventListener("cut",run); // kesme işlemi -> ctrl+x dahil


// //Select
// filter.addEventListener("select", run); // seçme işleminde





function run(e)
{
    console.log(e.type);
}