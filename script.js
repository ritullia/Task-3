/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

let data

fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        data = result;
        getUser(result);
    })
    .catch((error) => console.error(error));

function getUser(usersArr) {
    let outputDiv = document.getElementById('output');

    usersArr.forEach((data) => {

        let userCard = document.createElement("div");
        userCard.classList.add("user-card");

        let login = document.createElement('p');
        login.textContent = data.login;

        let avatarUrl = document.createElement('p');
        avatarUrl.textContent = data.avatar_url;


        userCard.append(login, avatarUrl)
        outputDiv.append(userCard)


    });



}

document.getElementById('btn').addEventListener("click", getUser)