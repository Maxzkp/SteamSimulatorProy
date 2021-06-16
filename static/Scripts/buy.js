'use strict'

function create_count(user_stars, prod_stars) {

    let total_c = ''

    if (user_stars < prod_stars) {
        total_c = `<p>
            <span class="text-danger">${user_stars-prod_stars}</span>
            <i class="bi-star text-warning" style="font-size: 1rem;"></i>
        </p>`
    } else {
        total_c = `<p>
            <span class="text-primary">${user_stars-prod_stars}</span>
            <i class="bi-star text-warning" style="font-size: 1rem;"></i>
        </p>`
    }

    let new_row = `<div class="col-4"></div>
        <div class="border col-4 text-end mb-3 pt-3">
            <p>
                <span class="text-primary">${user_stars}</span>
                <i class="bi-star text-warning" style="font-size: 1rem;"></i>
            </p>
            <p>
                <span class="text-primary">-${prod_stars}</span>
                <i class="bi-star text-warning" style="font-size: 1rem;"></i>
            </p>
            <hr>` + total_c + `</div>
        <div class="col-4"></div>`;
    return new_row;
}

var count = document.getElementById('count');
var buy_confirm = document.getElementById('buy_confirm');
var u_stars = (Math.floor(Math.random()*10) + 1)*1000;
var p_stars = (Math.floor(Math.random()*10) + 1)*1000;

if (u_stars < p_stars) {
    buy_confirm.className += ' btn-outline-secondary disabled';
    buy_confirm.innerHTML = 'Estrellas insuficientes'
} else {
    buy_confirm.className += ' btn-success'
}

count.innerHTML = create_count(u_stars, p_stars);
