const prodacts = document.querySelector('.products');

const prodact = prodacts.querySelectorAll('.product');

const cartProducts = document.querySelector('.cart__products');

for (let element of prodact) {
    const quantityControls = element.querySelector('.product__quantity-controls');
    const productAdd = element.querySelector('.product__add');
    const quantityControlDec = quantityControls.querySelector('.product__quantity-control_dec');
    const quantityControlInc = quantityControls.querySelector('.product__quantity-control_inc');
    const quantityValue = quantityControls.querySelector('.product__quantity-value');

    quantityControls.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === quantityControlDec) {
            if (Number(quantityValue.textContent) === 1) {
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
            const itemFind = Array.from(cartProducts.querySelectorAll('.cart__product')).find((item) => item.dataset.id === element.dataset.id);
            if (itemFind) {
                const cartProdactCount = itemFind.querySelector('.cart__product-count');
                cartProdactCount.textContent = Number(cartProdactCount.textContent) + Number(quantityValue.textContent);
                return;   
            } 
        }
        const cloneProdact = element.cloneNode();
        cloneProdact.className = 'cart__product';
        const cloneProdactImage = element.querySelector('img').cloneNode();
        cloneProdactImage.className = 'cart__product-image';
        
        const cartProdactAppend = cartProducts.appendChild(cloneProdact);
        cartProdactAppend.appendChild(cloneProdactImage);
        cartProdactAppend.insertAdjacentHTML('beforeEnd', `<div class="cart__product-count">${quantityValue.textContent}</div>`);
    });

}