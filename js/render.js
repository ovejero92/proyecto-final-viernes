let contenedor = document.getElementById('contendor')

const productos = [
    {nombre:'Remera',precio:7526,stock:20,img:'remera-negra.jpeg',categoria:'Ropa'},
    {nombre:'Pantalon',precio:14155,stock:20,img:'pantalon-shens.png',categoria:'Ropa'},
    {nombre:'Cartera',precio:62910,stock:0,img:'cartera-marron.png',categoria:'Accesorios'},
    {nombre:'Zapatillas',precio:35992,stock:20,img:'zapatilla-negra.jpg',categoria:'Ropa'},
    {nombre:'Freidora',precio:224999,stock:20,img:'airFrier.png',categoria:'Electrodomesticos'},
    {nombre:'Microondas',precio:234999,stock:0,img:'micro.jpeg',categoria:'Electrodomesticos'},
    {nombre:'Camisa',precio:17607,stock:10,img:'remera-azul.jpeg',categoria:'Ropa'},
    {nombre:'Lavarropas',precio:1099999,stock:10,img:'lavarropa.jpeg',categoria:'Electrodomesticos'},
    {nombre:'Lujo',precio:24192,stock:0,img:'perfume-lujo.avif',categoria:'Perfumes'},
    {nombre:'Pink',precio:31450,stock:20,img:'perfume-pink.png',categoria:'Perfumes'},
    {nombre:'Belle',precio:104396,stock:110,img:'perfume-belle.jpeg',categoria:'Perfumes'},
    {nombre:'Aislad',precio:43390,stock:20,img:'perfume-aislada.avif',categoria:'Perfumes'},
];

let carrito = []
let selector = document.getElementById('selectorProductos')

function mostrarProductos(){
    let contenedor = document.getElementById('CP')
    contenedor.innerHTML = ''
    productos.forEach(prod => {
        let CC = document.createElement('div');
        CC.classList.add('card')
        CC.innerHTML = `
        <div style='text-align:center;'><img src="./assets/img/${prod.img}" alt="${prod.nombre}" style='width:150px;border-radius:15px'></div>
        <h2>${prod.nombre}</h2>
        <p>Precio: $${prod.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
        <p>Stock: ${prod.stock}<p>
        <div><button onclick="agregarProductoAlCarrito('${prod.nombre}')" class='botonCart'>Agregar al carrito</button></div>
        `
        contenedor.appendChild(CC)
        if(prod.stock == 0){
            CC.innerHTML = `
            <div style='text-align:center;'><img src="./assets/img/${prod.img}" alt="${prod.nombre}" style='width:150px;border-radius:15px'></div>
            <h2>${prod.nombre}</h2>
            <p>Precio: $${prod.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
            <p>Stock: ${prod.stock}<p>
            <div><button onclick="alertaError('No hay mas ${prod.nombre} disponible')" class='botonCartError'>Agregar al carrito</button></div>
            `
            let img = document.createElement('img')
            img.setAttribute('src','./assets/img/sinStock.png')
            img.style.width = '190px'
            img.style.position = 'absolute'
            img.style.top = '0'
            img.style.right = '0'
            CC.appendChild(img)
            CC.style.background = '#9a9494'
        }
        const CU = obtenerCategoriasUnicas();
        selector.innerHTML = ''
        const optdis = document.createElement('option');
        optdis.text = 'Categorias'
        optdis.setAttribute('selected','')
        optdis.setAttribute('disabled','')
        CU.forEach(categoria => {
        const opt = document.createElement('option');
        opt.text = categoria;
        opt.value = categoria;
        selector.appendChild(opt)
        })
        selector.appendChild(optdis)

    })
}

function buscarProducto(nombre){
    let productosFiltrados = productos.filter( (p) => {return p.nombre.toLowerCase().includes(nombre.toLowerCase())} )
    mostrarProductosFiltrados(productosFiltrados)
}
function buscarCategoria(categoria){
    let productosCategoria = productos.filter( (p) => {return p.categoria.toLowerCase().includes(categoria.toLowerCase())})
    mostrarProductosFiltrados(productosCategoria)
}

function mostrarProductosFiltrados(productosFiltrados){
    let contenedor = document.getElementById('CP')
    contenedor.innerHTML = ''
    productosFiltrados.forEach(prod => {
        let CC = document.createElement('div');
        CC.classList.add('card')
        CC.innerHTML = `
        <div style='text-align:center;'><img src="./assets/img/${prod.img}" alt="${prod.nombre}" style='width:150px;border-radius:15px'></div>
        <h2>${prod.nombre}</h2>
        <p>Precio: $${prod.precio}</p>
        <p>Stock: ${prod.stock}<p>
        <div><button class='botonCart' onclick="agregarProductoAlCarrito('${prod.nombre}')">addCard</button></div>
        `
        contenedor.appendChild(CC)
        if(prod.stock == 0){
            let img = document.createElement('img')
            img.setAttribute('src','./assets/img/sinStock.png')
            img.style.width = '190px'
            img.style.position = 'absolute'
            img.style.top = '0'
            img.style.right = '0'
            CC.appendChild(img)
            CC.style.background = '#9a9494'
        }
    })
}

document.getElementById('carritoBoton').addEventListener('click',()=>{
    document.getElementById('carrito').style.display = 'block'
})

document.getElementById('cerrarCarrito').addEventListener('click',()=>{
    document.getElementById('carrito').style.display = 'none'
})


function agregarProductoAlCarrito(nombre) {
    const producto = productos.find(p => p.nombre === nombre);
    const itemEnCarrito = carrito.find(i => i.producto.nombre === nombre);

    if (itemEnCarrito) {
        if (itemEnCarrito.cantidad < producto.stock) {
            itemEnCarrito.cantidad++;
            } else {
            alert('No hay suficiente stock');
            itemEnCarrito.cantidad
        }
    } else {
        carrito.push({ producto, cantidad: 1 });
    }

    actualizarCarrito();
    }

    function actualizarCarrito() {
        const cartItemsContainer = document.getElementById('cartItems');
        cartItemsContainer.innerHTML = '';
        carrito.forEach(item => {
            const cartItemElement = document.createElement('div');
            const contadorCarrito = document.getElementById('contadorCarrito')
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <span>${item.producto.nombre}</span>
                <span>${item.producto.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} $</span>
                <input type="number" value="${item.cantidad}" min="0" onchange="actualizarCantidad('${item.producto.nombre}', this.value)">
                <button onclick="eliminarProducto('${item.producto.nombre}')" class='eliminarProducto' ><i class="fa-solid fa-trash"></i></button>
            `;
            contadorCarrito.textContent = carrito.length
            cartItemsContainer.appendChild(cartItemElement);
        });
        document.getElementById('cartTotal').innerText = obtenerTotal();
        document.getElementById('cartCount').innerText = carrito.reduce((count, item) => count + item.cantidad, 0);
        }

function eliminarProducto(nombre) {
    carrito = carrito.filter(i => i.producto.nombre !== nombre)
    actualizarCarrito()
}

function obtenerTotal() {
    return carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0)
    }

function obtenerCategoriasUnicas(){
      // Crear un objeto Set para almacenar categorías únicas
      const categoriasUnicas = new Set();
    
      // Iterar sobre los productos y agregar cada categoría al Set
      productos.forEach(prod => {
          categoriasUnicas.add(prod.categoria);
      });
  
      // Convertir el Set a un array
      return Array.from(categoriasUnicas);
}

mostrarProductos()