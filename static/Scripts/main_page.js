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

var req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json_resp = JSON.parse(xml2json(this.responseXML, ''));
        var games_list = document.getElementById('games_list');
        json_resp.juegos.juego.forEach(juego => {
            console.log(juego);
            games_list.innerHTML += create_row(juego.id, `${juego.titulo}`, `${juego.desarrollador}`, `${juego.distribuidor}`, `${juego.fechalanzamiento}`, juego.precio['#text']);
        });
    }
  };

req.open('POST', 'https://steam-simulator-service.herokuapp.com/juegos', true);
req.setRequestHeader("Content-type", "application/xml");
req.send(sent_data);