const sushiContainer = document.querySelector(".sushi-container");
const saladsContainer = document.querySelector('.salads-container');
const soupsContainer = document.querySelector('.soups-container');
const hotterContainer = document.querySelector('.hotter-container');
const dietaryContainer = document.querySelector('.dietary-container');
const menuBar = document.querySelector(".menu-bar");
const xsNavMenu = document.querySelector(".remove-xs-menu");
const xsExitBtn = document.querySelector(".xs-exit-btn");
const numberOfProducts = document.querySelector(".numberOfProducts");
const quantityNum = document.querySelectorAll(".quantity-num");

menuBar.addEventListener("click", () => {
    // xsNavMenu.classList.remove("remove-xs-menu")
    xsNavMenu.style.transform = "translateX(0%)"

})
xsExitBtn.addEventListener("click", () => {
    xsNavMenu.style.transform = "translateX(-500%)"
})

function renderProducts() {
    products.map(product => {
        if (product.category === "sushi") {
            sushiContainer.innerHTML += `
                <div class="product">
                    <div class="image-container">
                        <img src="${product.image}" alt="sushi">
                    </div>
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p class="product-desc">${product.desc}</p>
                        <div class="price-and-quantity">
                            <div class="price">
                                <span class="price-num">${product.price}</span>
                                <div class="currency">UZS</div>
                            </div>
                            <div class="quantity">
                                <button class="substract" onclick='removeItem(${product.id})'>
                                <i class='bx bx-minus'></i>
                            </button>&nbsp; &nbsp;
                            <span class="quantity-num">0</span>&nbsp; &nbsp;
                                <button class="addition" onclick='addToCart(${product.id})'>
                                <i class='bx bx-plus'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        } else if (product.category === "salads") {
            saladsContainer.innerHTML += `
                <div class="product">
                    <div class="image-container">
        <img src="${product.image}" alt="sushi">
                    </div>
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p class="product-desc">${product.desc}</p>
                        <div class="price-and-quantity">
                            <div class="price"><span class="price-num">${product.price}</span> <div class="currency">UZS</div></div>
                            <div class="quantity"><button class="substract"><i class='bx bx-minus'></i></button>&nbsp; &nbsp;<span class="quantity-num">${product.numberOfItems}</span>&nbsp; &nbsp;<button class="addition"><i class='bx bx-plus'></i></button></div>
                        </div>
                    </div>
                </div>
            `
        } else if (product.category === "soups") {
            soupsContainer.innerHTML += `
                <div class="product">
                    <div class="image-container">
                        <img src="${product.image}" alt="sushi">
                    </div>
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p class="product-desc">${product.desc}</p>
                        <div class="price-and-quantity">
                            <div class="price"><span class="price-num">${product.price}</span> <div class="currency">UZS</div></div>
                            <div class="quantity"><button class="substract"><i class='bx bx-minus'></i></button>&nbsp; &nbsp;<span class="quantity-num">${product.numberOfItems}</span>&nbsp; &nbsp;<button class="addition"><i class='bx bx-plus'></i></button></div>
                        </div>
                    </div>
                </div>
            `
        } else if (product.category === "hotter") {
            hotterContainer.innerHTML += `
                <div class="product">
                    <div class="image-container">
                        <img src="${product.image}" alt="sushi">
                    </div>
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p class="product-desc">${product.desc}</p>
                        <div class="price-and-quantity">
                            <div class="price"><span class="price-num">${product.price}</span> <div class="currency">UZS</div></div>
                            <div class="quantity"><button class="substract"><i class='bx bx-minus'></i></button>&nbsp; &nbsp;<span class="quantity-num">${product.numberOfItems}</span>&nbsp; &nbsp;<button class="addition"><i class='bx bx-plus'></i></button></div>
                        </div>
                    </div>
                </div>
            `
        } else if (product.category === "dietary") {
            dietaryContainer.innerHTML += `
                <div class="product">
                    <div class="image-container">
                        <img src="${product.image}" alt="sushi">
                    </div>
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p class="product-desc">${product.desc}</p>
                        <div class="price-and-quantity">
                            <div class="price"><span class="price-num">${product.price}</span> <div class="currency">UZS</div> </div>
                            <div class="quantity"><button class="substract"><i class='bx bx-minus'></i></button>&nbsp; &nbsp;<span class="quantity-num">${product.numberOfItems}</span>&nbsp; &nbsp;<button class="addition"><i class='bx bx-plus'></i></button></div>
                        </div>
                    </div>
                </div>
            `
        }
    })
}

function updateProducts() {
    renderProducts();
}


let cart = [];

function addToCart(id) {

    let test = cart.find(item => item.id == id)
    if (!test) {
        cart.push({
            id: id,
            q: 1,
        })
        console.log(cart)
        numberOfProducts.innerHTML = `${cart.length > 0 ? cart.length : 0}`
        // quantityNum.innerHTML = `${cart.length > 0 ? cart.length : 0}`
        return 0;
    }
    cart = cart.map(item => {
        if (item.id == id) {
            item.q++
        }
        return item;
    })
    updateProducts();
}

function removeItem(id) {
    item = cart.find(x => x.id == id)
    cart = cart.filter(x => {
        return x.q != 1
    })
    numberOfProducts.innerHTML = `${cart.length > 0 ? cart.length : 0}`
    // quantityNum.innerHTML = `${cart.length > 0 ? cart.length : 0}`
    if (item) {
        item.q--
        console.log(cart)
        return item;
    }
    updateProducts();
}


// const addToCart2 = (id) => {
//     let cart = [
//         {
//             id: "2111-222-555-666",
//             q: 1
//         },
//         {
//             id: '9999-999-9999',
//             q: 2
//         }
//     ]


//     let item = cart.find(item => item.id == id)

//     if(!item){
//         cart.push({
//             id:id,
//             q: 1
//         })

//         return
//     }


// }

updateProducts()
console.log(quantityNum)