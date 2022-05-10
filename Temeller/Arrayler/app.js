let value;

const numbers = [43,56,33,23,44,35,5];
const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];

//UZUNLUK
value = numbers.length; // 7 dizi boyutu

//INDEXLENME
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];

//Herhangi bir indeksteki değeri değiştirme
numbers[2]=1000; //2.indisin içeriği değiştirildi
value = numbers;

// Index Of
value = numbers.indexOf(1000);

// Arrayin sonuna değer ekleme - push
numbers.push(2000);
value=numbers;

// Arrayin başına değer ekleme
numbers.unshift(3000);
value=numbers;

//Arrayin sonundaki değeri atmak -> pop
numbers.pop();
value=numbers;

//Arrarin başındaki değeri atmak -> shift
numbers.shift();
value=numbers;

//Belirli indis aralığını atmak
numbers.splice(0,3); // indisi 0'dan 3'e kadar at. 3 dahil değil
value = numbers;


//Arrayi ders çevirme -> reverse
numbers.reverse();
value=numbers;

// Arrayi sıralama -> sort! Tuhaf! İlk rakama göre sıralar
value = numbers.sort();

value = numbers.sort(function(x,y){
    //Küçükten büyüğe sıralamak
    return x-y;
});

value = numbers.sort(function(x,y){
    //Büyükten küçüğe sıralamak
    return y-x;
});

console.log(value);