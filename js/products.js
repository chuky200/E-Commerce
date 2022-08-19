const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const cards =  document.querySelector('#cards');
const categoria = document.querySelector('#lead');
fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.products);
        
        let productos = data.products;
       
        let i = 0;
       
          for(let product of productos){
            i++;
        
            cards.innerHTML +=`<div class="card " style="width: 17rem;">
            <img id="imagen${i}" src="${product.image}"class="card-img-top" alt="Card image cap">
            <div class="card-body">
              <h5 id="titulo${i}"class="card-title">${product.name} - ${product.cost}</h5>
              <p id="descripcion${i}"class="card-text">${product.description}</p>
              <p class="card-text"><small id="small${i}" >${product.soldCount} unidades disponibles</small></p>
            </div>  
          </div>`
          }
  
        categoria.innerHTML = "Verás aquí todos los productos de la categoría " + data.catName;
    });

   
       
  /*`<div class="col-md-4">
                    <img id="imagen${i}" src="${product.image}" class="img-fluid rounded-start" style="max-width: 250px;" alt="Imagen de ${product.name}">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 id="titulo${i}" class="card-title mb-1">${product.name} - ${product.cost}</h5>
                      <p id="descripcion${i}" class="card-text mb-1">${product.description}</p>
                      <p class="card-text"><small id="small${i}" class="text-muted">${product.soldCount}</small></p>
                    </div>
                  </div>`;
          }*/