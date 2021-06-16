'use strict'

function create_row(id, title, dev, pub, date, cost) {
    let new_row = `<tr>
        <td><a href="/${user_id}/see_product/${id}" class="text-decoration-none">${title}</a></td>
        <td>${dev}</td>
        <td>${pub}</td>
        <td>${date}</td>
        <td>
            <span class="text-primary me-1">${cost}</span>
            <i class="bi-star text-warning" style="font-size: 1rem;"></i>
        </td>
    </tr>`;
    return new_row;
}

var sent_data = `<juego action="getall">
<id></id>
<titulo></titulo>
<desarrollador></desarrollador>
<distribuidor></distribuidor>
<fechalanzamiento></fechalanzamiento>
<descripcion></descripcion>
<precio min="" max=""></precio>
</juego>`

postData('https://steam-simulator-service.herokuapp.com/juegos', sent_data)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

var games_list = document.getElementById('games_list');

for (let i = 0; i < Math.floor(Math.random()*81) + 20; i++) {
    games_list.innerHTML += create_row(i+1, `Game ${i+1}`, 'Dev', 'Pub', `${Math.floor(Math.random()*31) + 1} ENE 2020`, (Math.floor(Math.random()*10) + 1)*1000);
}