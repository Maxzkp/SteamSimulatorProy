'use strict'

function create_prod(id, title, desc, dev, pub, date, cost) {
    let new_row = `<center><h1>${title}</h1></center>
        <div class="row mt-4 mb-4">
            <div class="col-3"></div>
            <div class="border col-4 p-3 text-justify">
                <h5>Descripcion</h5>
                <p>${desc}</p>
            </div>
            <div class="border col-2 p-3 text-end">
                <p>${dev}</p>
                <p>${pub}</p>
                <p>${date}</p>
                <p><span class="text-primary">${cost}</span><i class="bi-star text-warning" style="font-size: 1rem;"></i></p>
            </div>
            <div class="col-3"></div>
        </div>
        <center><a href="/${user_id}/buy/${id}" class="btn btn-success">Comprar</a> <a href="/${user_id}" class="btn btn-outline-danger">Volver</a></center>`;
    return new_row;
}

var long_desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus commodi cupiditate fuga sint. Quia porro ea nam amet, suscipit facere sapiente. Quibusdam eum, non sequi reiciendis excepturi repudiandae facere nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus at blanditiis recusandae odit assumenda nostrum voluptate nesciunt, inventore ipsum fugit provident voluptatibus qui laborum quos eaque odio. A, aliquid similique?';

var product = document.getElementById('product');
product.innerHTML = create_prod(prod_id, `Game ${prod_id}`, long_desc,'Dev', 'Pub', `${Math.floor(Math.random()*31) + 1} ENE 2020`, (Math.floor(Math.random()*10) + 1)*1000);