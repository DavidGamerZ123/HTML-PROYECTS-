/** @format */

//selecionar etiquetas

//hacemos la peticion
const res = fetch('https://api.lanyard.rest/v1/users/339778067918749697')
    .then((res) => res.json())
    .then((json) => {
        var avatar = document.getElementById('avatar');
        var nombre = document.getElementById('nombre');
        var estado = document.getElementById('estado');
        avatar.src = `https://cdn.discordapp.com/avatars/${json.data.discord_user.id}/${json.data.discord_user.avatar}.png?size=512`;
        nombre.innerHTML = json.data.discord_user.username;
        estado.innerHTML = json.data.discord_status;
    });
