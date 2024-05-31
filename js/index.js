let userForm = localStorage.getItem('userForm')


if(!userForm){
  (async () => {
    const { value: formValues } = await Swal.fire({
    title: "Multiple inputs",
    html: `
      <input id="swal-input1" class="swal2-input" placeholder='ingrese su usuario' type="text">
      <input id="swal-input2" class="swal2-input" placeholder='ingrese su contraseña' type="password">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value
      ];
    }
  });
  if (formValues[0] == '' && formValues[1] == '') {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese su usuario y contraseña porfavor",
      footer: '<a href="http://127.0.0.1:5500/index.html" style="color=red;">Volver a intentar</a>'
    });
  } else{
    //Swal.fire(JSON.stringify(formValues));
    localStorage.setItem("userForm",JSON.stringify(formValues))
    location.reload()
  }
}) 
()
}

function cerrarSession() {
  localStorage.removeItem('userForm')
  location.reload()
}

let NU = document.getElementById('NU')

// let list = document.getElementsByTagName('h2')
// let clase = document.getElementsByClassName('card')

// let algo = document.querySelector('.card')
// let algos = document.querySelectorAll('.card')

let nombre = JSON.parse(userForm)
NU.innerText = nombre[0]