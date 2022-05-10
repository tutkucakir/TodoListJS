let value;

const now = new Date(); // Şuanki zaman
//console.log(now);

const date1 = new Date("9-19-1993 06:15:00");
//console.log(date1);

const date2 =new Date("September 19 1993");

const date3 =new Date("9/19/1993");

value = date1;

value = date1.getMonth(); // Ocak 0'dır Ağustos 7, Eylül 8
value = date1.getDate(); // Yazılan gün => 19
value = date1.getDay();  // İlk gün Pazar günüdür ona göre hesap eder

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

// Güncelleme işlemleri
date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1991);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);
value = date1;

console.log(value);