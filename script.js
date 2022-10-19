const sushiContainer = document.querySelector(".sushi-container");
const saladsContainer = document.querySelector('.salads-container');
const soupsContainer = document.querySelector('.soups-container');
const hotterContainer = document.querySelector('.hotter-container');
const dietaryContainer = document.querySelector('.dietary-container');

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
                        <div class="price"><span class="price-num">${product.price}</span> <div class="currency">UZS</div></div>
                        <div class="quantity"><button class="substract"><i class='bx bx-minus'></i></button>&nbsp; &nbsp;<span class="quantity-num">1</span>&nbsp; &nbsp;<button class="addition"><i class='bx bx-plus'></i></button></div>
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
                        <div class="quantity"><button class="substract"><i class='bx bx-minus'></i></button>&nbsp; &nbsp;<span class="quantity-num">1</span>&nbsp; &nbsp;<button class="addition"><i class='bx bx-plus'></i></button></div>
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
                        <div class="quantity"><button class="substract"><i class='bx bx-minus'></i></button>&nbsp; &nbsp;<span class="quantity-num">1</span>&nbsp; &nbsp;<button class="addition"><i class='bx bx-plus'></i></button></div>
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
                        <div class="quantity"><button class="substract"><i class='bx bx-minus'></i></button>&nbsp; &nbsp;<span class="quantity-num">1</span>&nbsp; &nbsp;<button class="addition"><i class='bx bx-plus'></i></button></div>
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
