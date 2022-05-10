let value;

const value1=10;
const value2=4;

// Aritmetik Operatörler
// value = value1+value2;
// value = value1-value2;
// value = value1*value2;
// value = value1/value2;
// value = value1 % value2;

value = Math.PI;
value = Math.E;
value = Math.round(3.6); // .5 ve üstü yukarı yuvarlama
value = Math.round(3.5); // .5 ve üstü yukarı yuvarlama
value = Math.round(3.2); // .5 altı aşağı yuvarlama
value = Math.ceil(3.2); // Yukarı yuvarlama
value = Math.ceil(3.7); // Yukarı yuvarlama
value = Math.floor(3.2); // Aşağı yuvarlama
value = Math.floor(3.7); // Aşağı yuvarlama
value = Math.sqrt(16); //Karakök
value = Math.sqrt(31); //Karakök
value = Math.abs(-10); // Mutlak değer
value = Math.pow(8,3);//Üs alma 8'in 3. kuvveti
value = Math.pow(4,2);//4 üssü 2 => 16

value = Math.max(10,-1,100,32); // En yüksek değeri döndürür
value = Math.min(10,-1,100,32); // En düşük değeri döndürür

value = Math.random(); //0-1 arası ondalıklı değer döndürür - her seferinde

value = Math.random()*20; // 0-20 arası => 0 dahil 20 dahil değil
value = Math.floor(Math.random()*20+1); // 1-20'ye kadar



console.log(value);