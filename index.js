let button = document.querySelector("button");
let image = document.getElementById("image"); 
let numero = document.getElementById("numero"); 
let name = document.getElementById("name");

const changeUsers = async () => {
    // Nombre aleatoire pour nos id qui nous aiderons pour notre url
    let numberAl = Math.ceil(Math.random() * 45) + 1; //De 0 a 46 

    // mise en place de notre url assosier a notre nombre aleatoire
    let request = `https://api.github.com/users/${numberAl}`;

    // execution de notre requete et stockage des informations dans notre variable data
    let data = await fetch(request)
    // console.log(data);

    // trasformation de notre resultat de donnes en format Json
    let response = await data.json();
    // console.log(response);

    // recuperation de donnees pour affichage
    image.src = response.avatar_url;
    numero.textContent = response.id;
    name.textContent = response.name;
};

changeUsers();

button.addEventListener('click', changeUsers);