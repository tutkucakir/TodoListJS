let value;

const programmer = {
    name : "Tutku ÇAKIR",
    age  : 30,
    email: "tutkucakir.dev@gmail.com",
    langs: ["Python","Java","Javascript"],
    address: {
        city:"Ankara",
        street:"Bahçelievler"
    },
    work: function(){
        console.log("Programcı çalışıyor...");
    }
}

value = programmer;

value = programmer.email; // Genel kullanım
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

value = programmer.work();

const programmers = [
    {name:"Mustafa Murat", age: 25},
    {name:"Oğuz", age:26}
]

value = programmers[0];


value = programmers[0].name;


console.log(value);