let value;

const firstName ="Tutku";
const lastName = "ÇAKIR";

const langs = "Java, Python, C++";

value = firstName + lastName;

value = firstName+" "+lastName;

value = "Tutku ÇAKIR ";

value = value + 2023;

value +=2023;

value = firstName.length;

value = lastName.length;

value = firstName.concat(" ", lastName, " ", ".com.tr"); // ekleme yapar

value = firstName.toLowerCase();

value = firstName.toUpperCase();

value = firstName[0];
value = firstName[1];
value = firstName[2];
value = firstName[3];
value = firstName[firstName.length-1]; // stringin son elemanını bulur

// Index of

value = firstName.indexOf("u"); // bulduğu karakterin kaçıncı indiste olduğunu bulur tutku => u -> 1. indis
value = firstName.indexOf("k"); // 3

//CharAt

value = firstName.charAt(0); // 0.indisindeki karakteri döndrür
value = firstName.charAt(firstName.length-1); // son karakter

// Split
value = langs.split(","); // virgüllerden ayırır ve dizi elde ederiz

// Replace
value = langs.replace("Python", "CSS"); // Pythonu bulur CSS ile değiştirir

// Includes => Dizide bir şeyi bulursa true, bulamazsa false
value = langs.includes("Java");
value = langs.includes("asdasd");

//Ezberleme ihtiyaca göre bak

console.log(value);