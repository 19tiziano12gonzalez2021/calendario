const productsContainer = document.querySelector('.products');
const cartTable = document.querySelector('.cart table');
const totalElement = document.querySelector('.total');
const buyBtns = document.querySelectorAll('.buy-btn');


const productos = [
  {
    nombre: "chupetin simple",
    descripcion: "chupetin sin chicle (manzana, naranja, frutilla, cereza)",
    precio: 15.00
  },
  {
    nombre: "chupetin con chicle",
    descripcion: "chupetin con chicle (cereza, strewberry)",
    precio: 30.00
  },
  {
    nombre: "turron",
    descripcion: "turron con galleta (arcor)",
    precio: 40.00
  },
  {
    nombre: "alfajor tatin simple",
    descripcion: "alfajor pequeño de chocolate (blanco y negro)",
    precio: 50.00
  },
  {
    nombre: "alfajor guaymallen",
    descripcion: "algajor triple (blanco, negro, membrillo)",
    precio: 80.00
  },
  {
    nombre: "chocolate block",
    descripcion: "chocolate block chico (25gr)",
    precio: 120.00
  }
];

const contenedorProductos = document.querySelector('.products');

productos.forEach(producto => {
  const divProducto = document.createElement('div');
  divProducto.classList.add('product');
  divProducto.innerHTML = `
    <h2>${producto.nombre}</h2>
    <p>${producto.descripcion}</p>
    <p>Precio: $${producto.precio.toFixed(2)}</p>
    <button class="buy-btn" data-name="${producto.nombre}" data-price="${producto.precio}">Comprar</button>
  `;
  contenedorProductos.appendChild(divProducto);
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {

  const index = cart.findIndex(item => item.name === product.name);

  if (index !== -1) {

    cart[index].quantity++;
  } else {

    cart.push({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1
    });
  }


  localStorage.setItem('cart', JSON.stringify(cart));
}


function updateCart() {
  // Limpiar la tabla de carrito de compras
  cartTable.innerHTML = '<tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Total</th></tr>';


  let total = 0;

  cart.forEach(item => {
    const price = parseFloat(item.price);
    const quantity = item.quantity;
    const subTotal = price * quantity;
    total += subTotal;

    cartTable.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${quantity}</td>
        <td>$${price.toFixed(2)}</td>
        <td>$${subTotal.toFixed(2)}</td>
      </tr>
    `;
  });


  totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
}


buyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const product = {
      name: btn.dataset.name,
      description: btn.dataset.description,
      price: btn.dataset.price
    };

    addToCart(product);
    updateCart();
  });
});


function clearCart() {

  cart = [];


  localStorage.setItem('cart', JSON.stringify(cart));


  updateCart();
  updateCartTotal();
}


const clearCartButton = document.getElementById('clear-cart-button');

clearCartButton.addEventListener('click', clearCart)

updateCart();

