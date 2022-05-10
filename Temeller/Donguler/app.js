//While döngüleri

// let i =0;

// while(i<10)
// {
//     console.log(i++);
// }
//------------------------------

// let f = 0;

// while(f<10)
// {
//     console.log(f);
//     if(f==5)
//     {
//         break; //5'te kırıldı
//     }
//     f++;
// }

//-------------------------------
// f = 0;
// while(f<10)
// {
//     console.log(f);
//     if(f==5)
//     {
//         continue; //5'te artırmadığından sonsuz döngüye geçti
//     }
//     f++;
// }


//-------------------------
// Do While Döngüsü

// let i = 0; 

// do{
//     console.log(i++);
// }while(i<10);

//--------------------------

//--------------------------

// For döngüleri

const langs=["Python","Javascript","Java"];

// let index = 0;

// while(index<langs.length)
// {
//     console.log(langs[index]);
//     index++;
// }

//-------------------

// for(let index=0; index<langs.length; index++)
// {
//     console.log(langs[index]);
// }

//-------------------

//foreach Metodu

// langs.forEach(function(lang){
//     console.log(lang);
// });

//MAP fonksiyonu

// const users = [
//     {name:"Mustafa", age:25},
//     {name:"Zeynep", age:40},
//     {name:"Ali",age:12}
// ];

// const names = users.map(function(user){
//     return user.name;
// });

// const ages = users.map(function(user){
//     return user.age;
// });

// console.log(names);

// for in döngüsü

const  user ={
    name:"Mustafa",
    age:25
};

for(let key in user){
    console.log(key);
}