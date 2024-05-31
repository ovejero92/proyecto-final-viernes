let logUser = localStorage.getItem('userForm')
let nomUser = JSON.parse(logUser)


console.log(nomUser[0])

function platillaOK(){
    let plantilla = document.write(`
    <nav>
    
    <h1><i class="fa-solid fa-shop"></i> ${nomUser[0]} </h1>
<ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Contacto</a></li>
    <li><button  onclick="cerrarSession()">LogOut</button></li>
</ul>
</nav>

<div class="card">
<h2>Card 1</h2>
<p>Contenido de la tarjeta 1...</p>
</div>

<div class="card">
<h2>Card 2</h2>
<p>Contenido de la tarjeta 2...</p>
</div>

<div class="card">
<h2>Card 3</h2>
<p>Contenido de la tarjeta 3...</p>
</div>
    `)
return plantilla
} 
platillaOK()

console.log(document.body)