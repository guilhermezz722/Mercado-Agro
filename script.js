// Função para criar e adicionar um card de produto ao contêiner
function createProductCard(product, isFromCart = false) {
    const productContainer = document.querySelector('.product-container');
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.dataset.name = product.name; // Adiciona o nome como um atributo data

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Preço: R$${product.price.toFixed(2)}</p>
        <p>Quantidade: ${product.quantity} ${product.unit}</p>
        <button class="btn-add-to-cart">Adicionar ao Carrinho</button>
        ${!isFromCart ? '<button class="btn-delete-product" style="display:none;">Excluir</button>' : ''}
    `;

    productContainer.appendChild(productCard);
}

// Dados iniciais dos produtos (exemplo)
const products = [
    { name: 'Alface', image: 'imagens/alface.jpg', price: 3.50, quantity: 1, unit: 'kg' },
    { name: 'Banana', image: 'imagens/banana.jpg', price: 2.00, quantity: 1, unit: 'kg' },
    { name: 'Laranja', image: 'imagens/laranja.jpg', price: 3.00, quantity: 1, unit: 'kg' },
    { name: 'Uva', image: 'imagens/uva.jpg', price: 4.50, quantity: 1, unit: 'kg' },
    { name: 'Pera', image: 'imagens/fruits-1534494_1280.jpg', price: 3.20, quantity: 1, unit: 'kg' },
    { name: 'Manga', image: 'imagens/manga.jpg', price: 5.00, quantity: 1, unit: 'kg' },
    { name: 'Melancia', image: 'imagens/melancia.jpg', price: 7.00, quantity: 1, unit: 'kg' },
    { name: 'Kiwi', image: 'imagens/kiwi.jpg', price: 6.00, quantity: 1, unit: 'kg' },
    { name: 'Morango', image: 'imagens/morango.jpg', price: 8.00, quantity: 1, unit: 'kg' },
    { name: 'Cenoura', image: 'imagens/cenoura.jpg', price: 2.50, quantity: 1, unit: 'kg' },
    { name: 'Batata', image: 'imagens/batata.jpg', price: 1.80, quantity: 1, unit: 'kg' },
    { name: 'Tomate', image: 'imagens/tomate.jpg', price: 3.00, quantity: 1, unit: 'kg' },
    { name: 'Pepino', image: 'imagens/pepino.jpg', price: 2.20, quantity: 1, unit: 'kg' },
    { name: 'Brócolis', image: 'imagens/brocolis.jpg', price: 4.00, quantity: 1, unit: 'kg' },
    { name: 'Espinafre', image: 'imagens/espinafre.jpg', price: 3.50, quantity: 1, unit: 'kg' },
    { name: 'Repolho', image: 'imagens/repolho.jpg', price: 2.70, quantity: 1, unit: 'kg' },
    { name: 'Abobrinha', image: 'imagens/abobrinha.jpg', price: 3.00, quantity: 1, unit: 'kg' },
    { name: 'Berinjela', image: 'imagens/berinjela.jpg', price: 3.80, quantity: 1, unit: 'kg' },
    { name: 'Pimentão', image: 'imagens/Pimentão.jpg', price: 4.00, quantity: 1, unit: 'kg' },
    { name: 'Cebola', image: 'imagens/cebola.jpg', price: 2.00, quantity: 1, unit: 'kg' },
    { name: 'Alho', image: 'imagens/alho.jpg', price: 6.00, quantity: 1, unit: 'kg' },
    { name: 'Batata-doce', image: 'imagens/batata doce.jpg', price: 3.00, quantity: 1, unit: 'kg' },
    { name: 'Couve', image: 'imagens/couve.jpg', price: 3.20, quantity: 1, unit: 'kg' },
    { name: 'Abóbora', image: 'imagens/abóbora.jpg', price: 4.50, quantity: 1, unit: 'kg' },
    { name: 'Rúcula', image: 'imagens/rucula.jpg', price: 5.00, quantity: 1, unit: 'kg' },
    { name: 'Abacate', image: 'imagens/abacate.jpg', price: 8.00, quantity: 1, unit: 'kg' },
    { name: 'Ameixa', image: 'imagens/ameixa.jpg', price: 7.50, quantity: 1, unit: 'kg' },
    { name: 'Pêssego', image: 'imagens/pessego.jpg', price: 4.50, quantity: 1, unit: 'kg' },
    { name: 'Damasco', image: 'imagens/damasco.jpg', price: 5.50, quantity: 1, unit: 'kg' },
     { name: 'Maça', image: 'imagens/maçã.jpg', price: 9.50, quantity: 1, unit: 'kg' },

];

// Função para criar e adicionar um card de produto ao contêiner
function createProductCard(product, isFromCart = false) {
    const productContainer = document.querySelector('.product-container');
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.dataset.name = product.name; // Adiciona o nome como um atributo data

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Preço: R$${product.price.toFixed(2)}</p>
        <p>Quantidade: ${product.quantity} ${product.unit}</p>
        <button class="btn-add-to-cart">Adicionar ao Carrinho</button>
        ${!isFromCart ? '<button class="btn-delete-product" style="display:none;">Excluir</button>' : ''}
    `;

    productContainer.appendChild(productCard);
}

// Adiciona produtos ao carregar a página
window.addEventListener('load', () => {
    products.forEach(product => createProductCard(product));
    updateCartBadge();
});

// Função para adicionar um novo produto ao array e atualizar a página
function addProduct(name, image, price, quantity, unit) {
    const newProduct = {
        name,
        image,
        price,
        quantity,
        unit
    };

    // Adiciona o novo produto ao array (só para testes locais)
    products.push(newProduct);

    // Cria um card para o novo produto e adiciona ao contêiner
    createProductCard(newProduct);
}

// Função para tratar o envio do formulário de adicionar produto
function handleAddProductForm(event) {
    event.preventDefault();

    const name = document.querySelector('#product-name').value;
    const image = document.querySelector('#product-image').files[0] ? URL.createObjectURL(document.querySelector('#product-image').files[0]) : '';
    const price = parseFloat(document.querySelector('#product-price').value);
    const quantity = parseFloat(document.querySelector('#product-quantity').value);
    const unit = document.querySelector('#product-unit').value;

    if (name && !isNaN(price) && !isNaN(quantity) && unit) {
        addProduct(name, image, price, quantity, unit);

        // Limpar o formulário após adicionar o produto
        document.querySelector('#add-product-form').reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

// Função para remover um produto do array e atualizar a página
function removeProduct(name) {
    const productIndex = products.findIndex(product => product.name === name);
    if (productIndex > -1) {
        products.splice(productIndex, 1);
        document.querySelector(`.product-card[data-name="${name}"]`).remove();
        updateCartBadge();
    }
}

// Função para adicionar um produto ao carrinho
function addToCart(name) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = products.findIndex(product => product.name === name);
    if (productIndex > -1) {
        cart.push(products[productIndex]);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();
    }
}

// Função para atualizar a badge do carrinho
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartBadge = document.querySelector('#cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cart.length;
    }
}

// Função para mostrar o conteúdo do carrinho
function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    cart.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('cart-item');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Preço: R$${product.price.toFixed(2)}</p>
            <p>Quantidade: ${product.quantity} ${product.unit}</p>
        `;

        cartContainer.appendChild(productCard);
    });

    const clearCartButton = document.createElement('button');
    clearCartButton.textContent = 'Limpar Carrinho';
    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        showCart();
    });
    cartContainer.appendChild(clearCartButton);
}

// Função para tratar o clique no botão de adicionar ao carrinho
function handleAddToCartClick(event) {
    if (event.target.classList.contains('btn-add-to-cart')) {
        const productName = event.target.closest('.product-card').dataset.name;
        addToCart(productName);
    }
}

// Função para tratar o clique no botão de excluir
function handleDeleteProductClick(event) {
    if (event.target.classList.contains('btn-delete-product')) {
        const productName = event.target.closest('.product-card').dataset.name;
        removeProduct(productName);
    }
}

// Adiciona os listeners de eventos
document.addEventListener('click', handleAddToCartClick);
document.addEventListener('click', handleDeleteProductClick);

// Adiciona o listener ao formulário de adicionar produto
const addProductForm = document.querySelector('#add-product-form');
if (addProductForm) {
    addProductForm.addEventListener('submit', handleAddProductForm);
}

// Exemplo de inicialização da página de carrinho
if (document.querySelector('.cart-container')) {
    showCart();
}
