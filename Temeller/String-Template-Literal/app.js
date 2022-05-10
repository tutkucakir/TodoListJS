const name ="Tutku ÇAKIR";
const department = "Bilişim";
const salary = 4000;

//const a = "İsim: "+name+"\n"+"Departman: "+department+"\n"+"Maaş: "+salary;



const a = `İsim: ${name}\nDepartman:${department}\nMaaş:${salary}`;
// ALTGR+,, => altgr tuşu ve iki kez virgül tuşuna basıyoruz

console.log(a);


// const html = "<ul>"+
//              "<li>"+name+"</li>"+
//              "<li>"+department+"</li>"+
//              "<li>"+salary+"</li>"+
//              "</ul>";

function fonkA(){
    return "Merhaba";
}

const html = `
            <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${10/4}</li>
                <li>${fonkA()}</li>
            </ul>
            `;

document.body.innerHTML = html;


