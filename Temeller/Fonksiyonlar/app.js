// Fonksiyon tanımlama

// function merhaba(name,age)
// {
//     if(typeof name==="undefined") name= "Bilgi Yok";
//     if(typeof age==="undefined") age= "Bilgi Yok";

//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Tutku",30);
// merhaba();

//-----------------

// function merhaba(name="Bilgi Yok",age="Bilgi Yok")
// {
//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Tutku",30);
// merhaba();
// merhaba("Ahmet");

// //------------------

// function square(x)
// {
//     return x*x;
// }

// function cube(x)
// {
//     return x*x*x;
// }

// let a = square(12);

// a = cube(a);

// // Yada
// a = cube(square(12));

// console.log(a);

// // return aynı zamanda fonksiyonu sonlandıran anahtardır.

// Function expression

// const merhaba = function(){
//     console.log("Merhaba");
// }

// merhaba();

//

// const merhaba = function(name){
//     console.log("Merhaba "+name);
// }

// merhaba("Tutku");

//-----------------------------
// Immediately Invoked Function Expression(IIFE)
//
//Tanımlandığı yerde direkt çalışır

// (function(name){
//     console.log("Merhaba: "+name);
// })("Murat");

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde edildi");
    },
    update: function(id)
    {
        console.log(`Id: ${id} güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} silindi`);
    }
}

console.log(database.host);
database.add();
database.delete(10);