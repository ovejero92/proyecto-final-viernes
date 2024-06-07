let contenedor = document.getElementById('contendor')

productos.forEach((prod)=>{
    let card = document.createElement('div')
    card.classList.add('card')

    let img = document.createElement('img')
    img.setAttribute('src',prod.img)
    img.style.width = '150px'
    img.style.borderRadius = '15px'

    let h2 = document.createElement('h2')
    h2.textContent = `${prod.nombre} (stock:${prod.stock})`

    let p = document.createElement('p')
    p.textContent = `$${prod.precio}`

    let div_btn = document.createElement('div')
    div_btn.innerHTML = `<button class='botonCart'>Agregar al carrito </button>`



    if(prod.stock == 0){
        let imgST = document.createElement('img')
        imgST.setAttribute('src','https://www.gakcreations.com.ar/productos/sold2.png')
        imgST.style.width = '190px'
        imgST.style.position = 'absolute'
        imgST.style.top = '0'
        imgST.style.right = '0'
        
        card.appendChild(imgST)
        card.style.background = '#9a9494'
    }


    contenedor.append(card)
    card.appendChild(img)
    card.appendChild(h2)
    card.appendChild(p)
    card.appendChild(div_btn)

})

document.getElementById('carritoBoton').addEventListener('click',()=>{
    document.getElementById('carrito').style.display = 'block'
})

document.getElementById('cerrarCarrito').addEventListener('click',()=>{
    document.getElementById('carrito').style.display = 'none'
})