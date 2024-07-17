const showNavbar = () => {
    const cardContainer = document.getElementById('main-container')
    const div = document.createElement('div')
    div.className = 'navbar'
    div.id = "navbar"
    div.innerHTML += `
            <a href="">
                Categories
            </a>
            <a href="">
                Contact
            </a>
            <a href="">
                Login 
            </a>
        `
    cardContainer.appendChild(div);
};

showNavbar();

const showProducts = () => {
    const cardContainer = document.getElementById('main-container')

    products.forEach(product => {
        const div = document.createElement('div')
        div.className = 'card'
        div.innerHTML += `
            <div id="card-img" class="card-img">
                <img src="${product.img}" alt="imagen de un buzo" width="400">
            </div>
            <div id="card-title">
                <h3 class="card-title">${product.title}</h3>
            </div>
            <div class="card-content">
                <h4 class="card-price">$${product.price}</h4>
                <p class="card-desc">${product.desc}</p>
                <p>Size: ${product.size}</p>
            </div>
        `
        cardContainer.appendChild(div);
    })
};

showProducts();