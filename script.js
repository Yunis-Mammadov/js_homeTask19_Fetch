let productContainer = document.querySelector(".container .row");
let productRow = document.querySelector("#product-row");
let searchInput = document.querySelector("#searchInput");
let btn = document.querySelector("#Btn")

function getProductInfo(){
    fetch("https://fakestoreapi.com/products")
    .then(data => data.json())
    .then(res => displayProductInfo(res));
}


function displayProductInfo(info) {
    productInfo = ""
    info.forEach(product => {
    productInfo += `
           <div class="col-3 mt-3">
            <img style="width:220px;height:270px" class="card-img-top" src="${product.image}" alt="${product.title}">
            <div class="card-body">
              <h6 class="card-title"><span></span> <span id="name" ><a href="details.html?id=${product.id}">${product.title}</a></span></h6>
              <p class="card-text"><span>Price: </span> <span id="price">${product.price}</span> <span class="fw-bold">$</span></p>
              <p class="card-text"><span>Category: </span> <span id="desc">${product.category}</span></p>
              <p class="card-text"><span>Rating Rate: </span> <span id="desc">${product.rating.rate}</span></p>
              <p class="card-text"><span>Raiting Count: </span> <span id="desc">${product.rating.count}</span></p>
            </div>
          </div>
        </div>
      `             
    productContainer.innerHTML = productInfo
    });   
}

searchInput.addEventListener("keyup", (e) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        productContainer.innerHTML = "";
        const searchedProducts = data.filter((product) => product.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
        searchedProducts.forEach((product) => {
          productContainer.innerHTML += `
             
           <div class="col-3 mt-3">
           <img style="width:220px;height:270px" class="card-img-top" src="${product.image}" alt="${product.title}">
           <div class="card-body">
             <h6 class="card-title"><span></span> <span id="name" ><a href="details.html?id=${product.id}"></span></h6>
             <p class="card-text"><span>Price: </span> <span id="price">${product.price}</span> <span class="fw-bold">$</span></p>
             <p class="card-text"><span>Category: </span> <span id="desc">${product.category}</span></p>
             <p class="card-text"><span>Rating Rate: </span> <span id="desc">${product.rating.rate}</span></p>
             <p class="card-text"><span>Raiting Count: </span> <span id="desc">${product.rating.count}</span></p>
           </div>
         </div>
       </div>`;
        });
      });
  });
  
btn.addEventListener("click", (e) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.price - b.price);
        productContainer.innerHTML = "";
        data.forEach((a) => {
          productContainer.innerHTML += `
            <div class="col-3 mt-3">
              <img style="width:220px;height:270px" class="card-img-top" src="${a.image}" alt="${a.title}">
              <div class="card-body">
                <h6 class="card-title"><span></span> <span id="name" ><a href="details.html?id=${product.id}"></span></h6>
                <p class="card-text"><span>Price: </span> <span id="price">${a.price}</span> <span class="fw-bold">$</span></p>
                <p class="card-text"><span>Category: </span> <span id="desc">${a.category}</span></p>
                <p class="card-text"><span>Rating Rate: </span> <span id="desc">${a.rating.rate}</span></p>
                <p class="card-text"><span>Rating Count: </span> <span id="desc">${a.rating.count}</span></p>
              </div>
            </div>
          </div>`;
        });
      });
  });
  
getProductInfo()
