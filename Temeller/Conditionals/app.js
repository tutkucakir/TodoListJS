/*
Karşılaştırma Operatörü

== İki değer birbirine eşirse true değilse false
=== İki değer ve tipler kıyaslanır
> büyüktür
< küçüktür
!= eşit değildir
!== tipi ile birlikte eşit değildir
>=
<=
*/


// console.log(2==2);
// console.log("js"=="java");
// console.log(2=="2"); // True sonucu döner, inti de stringe çevirir çünkü

// console.log(2==="2"); // Bu yöntem ile veri tipi ve içeriği birlikte kıyaslanır.
// console.log(4>2);
// console.log(4<2);

// console.log(2!=4); // iki değer eşit değilse true döner

// Mantıksal Bağlaçlar
//Not Operatörü

// console.log(!(2==2));
// console.log(!(2!=2));

// //AND OPERATÖRÜ => HEPSİ TRUE İSE TRUE
// console.log((2==2) && ("AHMET"=="AHMET")); //true
// console.log((4==2) && ("AHMET"=="AHMET")); // false

// // or => BİRİ TRUE SONUÇ TRUE
// console.log((4==2) || ("AHMET"=="AHMET")); // true

// const error = true;

// if(error==true)
// {
//     console.log("Hata oluştu");
// }else{
//     console.log("Hata oluşmadı");
// }
//----------------------------------------------------
// const process="1";

// if(process==="1")
// {
//     console.log("İşlem 1");
// }else if(process==="2")
// {
//     console.log("İşlem 2");
// }else if(process==="3")
// {
//     console.log("İşlem 3");
// }else{
//     console.log("Geçersiz İşlem");
// }

//----------------------------------------------------

//Ternary Operatörü
const number=100;
//console.log(number===100?"Sayı 100":"Sayı 100 değil");

if(number===100) console.log("Sayı 100"); /// tek satırda
