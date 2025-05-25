let button = document.querySelector("button");
let image = document.getElementById("image"); 
let numero = document.getElementById("numero"); 
let name = document.getElementById("name");

let changeUsers = async () => {
    let number = Math.ceil(Math.random() * 45) +1;
    
    let urlAPI = `https://api.github.com/users/${number}`

    let data = await fetch(urlAPI);
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.avatar_url;
    numero.textContent = response.id;
    name.textContent = response.name;

};

changeUsers();

button.addEventListener('click', changeUsers);