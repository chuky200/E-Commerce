let producto = {}
let precioUni = 0
fetch(CART_INFO_URL + "25801" + EXT_TYPE)
.then(resp => resp.json())
.then(data => {
producto = data;
console.log(producto)
  showArticulo(producto)

})

function showArticulo(){

  let precioUni = producto.articles[0].unitCost;
  listaDesplegable = `
  <td><img class="img-thumbnail" src="${producto.articles[0].image}" style="width:100px"</td>
  <td>${producto.articles[0].name}</td>
  <td>${producto.articles[0].currency} ${producto.articles[0].unitCost}</td>
  <td> <input type="number" id="articleCount" value=1 onchange="subTotal()" min="1" style="width:50px;"></td>
  <td id="subtotalCost"><strong>${producto.articles[0].currency} ${precioUni}</strong></td>
  `

  document.getElementById('tableInfo').innerHTML = listaDesplegable;
}


function subTotal(){

  document.getElementById('subtotalCost').innerHTML =    `<strong>${producto.articles[0].currency} ${producto.articles[0].unitCost * document.getElementById('articleCount').value}</strong>  ` ;
  console.log(precioUni)
}
  

  
  
  
  
  
  
  
  
  
  
  
  
  // MOSTRAR PERFIL // BOTON INICIO DE SESION
  sesionOn();
  function showUser(){
    document.getElementById('showUser').innerHTML = 
    
    ` <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${localStorage.getItem('user') || sessionStorage.getItem('user')}
    </a>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="./cart.html">Carrito</a></li>
    <li><a class="dropdown-item" href="./my-profile.html">Mi perfil</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>
    </ul>`
    
    }
  function sesionOn(){
    if(localStorage.getItem('user') || sessionStorage.getItem('user'))
        showUser();
    else{
        document.getElementById('showUser').innerHTML = 
        `<button type="button" class="button-15" id="indexBtn" role="button">Iniciar Sesion</button>`
        document.querySelector('#indexBtn').addEventListener('click', function(){
            window.location.href = './login.html';
        })
}}
function cerrarSesion(){
    localStorage.removeItem('user'), sessionStorage.removeItem('user');
    location.reload();
    };     

