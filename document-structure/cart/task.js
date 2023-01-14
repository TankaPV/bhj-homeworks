const prodacts = document.querySelector('.products');

const prodact = prodacts.querySelectorAll('.product');
console.log(prodact);

const cartProducts = document.querySelector('.cart__products');

for (let element of prodact) {
    console.log(element);
    const quantityControls = element.querySelector('.product__quantity-controls');
    const productAdd = element.querySelector('.product__add');
    const quantityControlDec = quantityControls.querySelector('.product__quantity-control_dec');
    const quantityControlInc = quantityControls.querySelector('.product__quantity-control_inc');
    const quantityValue = quantityControls.querySelector('.product__quantity-value');

    quantityControls.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === quantityControlDec) {
            if (Number(quantityValue.textContent) === 0) {
                return;
            }
            quantityValue.textContent = Number(quantityValue.textContent) - 1;
        }
        if (e.target === quantityControlInc) {
            quantityValue.textContent = Number(quantityValue.textContent) + 1;
        }
    });

    productAdd.addEventListener('click', (e) => {
        e.preventDefault();
        if (cartProducts.querySelector('.cart__product')) {
            for (let item of cartProducts.querySelectorAll('.cart__product')) {
                // console.log(item.dataset.id);
                // console.log(element.dataset.id);
                if (item.dataset.id === element.dataset.id) {
                    const cartProdactCount = item.querySelector('.cart__product-count');
                    cartProdactCount.textContent = Number(cartProdactCount.textContent) + Number(quantityValue.textContent);
                    return;
                }            
            }
        }
        const cloneProdact = element.cloneNode();
        cloneProdact.className = 'cart__product';
        console.log(cloneProdact);
        const cloneProdactImage = element.querySelector('img').cloneNode();
        cloneProdactImage.className = 'cart__product-image';
        console.log(cloneProdactImage);
        
        const cartProdactAppend = cartProducts.appendChild(cloneProdact);
        cartProdactAppend.appendChild(cloneProdactImage);
        cartProdactAppend.insertAdjacentHTML('beforeEnd', `<div class="cart__product-count">${quantityValue.textContent}</div>`);


    });

}