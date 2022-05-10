// Değişkenler
/*
Var anahtar kelimesi ile değişkenler
*/

// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a,b,c);

// Primitive - İlkel Veri Tipleri
// var a = 10; // Number veri tipi - ilkel
// console.log(a);
// console.log(typeof a);
// var b = 3.14; // Number
// console.log(typeof b);

//String
// var name = "Tutku";
// console.log(name);
// console.log(typeof name);

//Boolean
// var a = true;
// console.log(typeof a);

// //NULL
// var a = null;
// console.log(a);
// console.log(typeof a); // JS'deki bug...

//undefined - tanımsız
// var a;
// console.log(a); // değer bile verilmemiş // undefined
// a = 20;
// console.log(a);



// Reference Veri Tipleri
//Referans türlerin hepsi bir objecttir.
// var numbers = [1,2,3,4,5];
// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers[0]);

// var person = {
//     name:"Tutku ÇAKIR",
//     age:25
// }
// console.log(person);
// console.log(typeof persone);

// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var merhaba = function(){
//     console.log("Merhaba");
// }

// console.log(merhaba);
// console.log(typeof merhaba);

/*
Primitive sadece o değişkenin tuttuğu değeri taşır.

Referans ise işaret eder.
*/

//Referans örnek

var a= [1,2,3];
var b = a;
a.push(4);
console.log(b); // Görüldüğü üzere a'yı işaretlediğinden sanki b 'ye 4 eklenmiş gibi görünmektedir.

