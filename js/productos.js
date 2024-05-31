let contenedor = document.getElementById('contendor')

const productos = [
    {titulo:"perfume1",img:'./img/perfume1.jpg',precio:150000,stock:20},
    {titulo:"perfume2",img:'./img/perfume2.jpg',precio:150000,stock:10},
    {titulo:"perfume3",img:'./img/perfume3.avif',precio:150000,stock:0}
]

productos.forEach((prod)=>{
    let card = document.createElement('div')
    card.classList.add('card')

    let img = document.createElement('img')
    img.setAttribute('src',prod.img)

    let h2 = document.createElement('h2')
    h2.textContent = `${prod.titulo} (stock:${prod.stock})`

    let p = document.createElement('p')
    p.textContent = `$${prod.precio}`


    if(prod.stock == 0){
        img.setAttribute('src','./img/img2-1.jpg')
        card.style.background = 'red'
        p.innerHTML=`<s>${prod.precio}</s>` 

    }


    contenedor.append(card)
    card.appendChild(img)
    card.appendChild(h2)
    card.appendChild(p)

})