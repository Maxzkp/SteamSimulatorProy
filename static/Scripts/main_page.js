'use strict'

var games_list = document.getElementById('games_list');
var but = document.getElementById("find");
var req = new XMLHttpRequest();

req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let json_resp = JSON.parse(xml2json(this.responseXML, ''));
        games_list.innerHTML = '';
        if (json_resp.juegos != null){
            json_resp.juegos.juego.forEach(juego => {
                games_list.innerHTML += create_row(juego.id, `${juego.titulo}`, `${juego.desarrollador}`, `${juego.distribuidor}`, `${juego.fechalanzamiento}`, juego.precio['#text']);
            });
        }
    }
};

function do_request(type, where, data){
    req.open(type, where, true);
    req.setRequestHeader("Content-type", "application/xml");
    console.log(data);
    req.send(data);
    console.log(req)
}


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


