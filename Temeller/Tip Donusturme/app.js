let value;
//Veri tiplerini stringe çevirme

value=123;
value=String(value);
value=(10).toString();
value=String(function() {console.log(); });
//Her şey stringe döner

//Veri tiplerini sayılara çevirme
value=Number("123"); //123
value=Number(null);// 0
value=Number(undefined); // NaN
value=Number("Hello World"); // Nan
value=Number(function() { console.log(); });
value=Number([1,2,3,4]); //Nan


value = Number("3.14"); // Float olduğu için dönüşür! number
value = parseFloat("3.14"); // Döner 3.14 number
value = parseInt("3"); // 3 number

console.log(value);
console.log(typeof value);


const a = "Hello" +34;
console.log(a); // Hello34 yazdı sonuç string
console.log(typeof a); 

const b = "34"+53;
console.log(b); //3453 yazdı string toplamı
console.log(typeof b); // string

const c = Number("34")+53;
console.log(c); // 87 yazdı
console.log(typeof c); // 87=>> number


