'use strict'

function create_card(id, title, dev, pub, date, cost) {
    let new_div = `<div class="col-4 p-2">
        <div class="card">
            <div class="card-body">
            <center><h5 class="card-title">${title}</h5></center>
            <div class="row">
                <h6 class="card-subtitle col-6 mb-2 text-muted">${dev}</h6>
                <h6 class="card-subtitle col-6 mb-2 text-muted text-end">${date}</h6>
            </div>
            <div class="row">
                <h6 class="card-subtitle col-6 mb-2 text-muted">${pub}</h6>
                <h6 class="card-subtitle col-6 mb-2 text-muted text-end"><span class="text-primary me-1">${cost}</span><i class="bi-star text-warning" style="font-size: 1rem;"></i></h6>
            </div>
            <center><a href="/${usr}/refund/${id}" class="btn btn-outline-danger">Devolver</a></center>
            </div>
        </div>   
    </div>`;
    return new_div;
}

var user_games = document.getElementById('user_games');

for (let i = 0; i < 10; i++) {
    user_games.innerHTML += create_card(i, `Game ${i}`, 'Dev', 'Pub', `${10-i} ENE 2020`, (i+1)*1000);
}