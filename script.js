const cartItemsContainer = document.getElementById('cart-items');
const addToCartButtons = document.getElementsByClassName('add-to-cart');

for(let i = 0; i < addToCartButtons.length; i++){
    const button  = addToCartButtons[i];
    button.addEventListener('click', addToCart);
}

function addToCart(event){
    const product = event.target.parentElement;
    const productName = product.querySelector('h5').innerText;

    const cartItem = document.createElement('div');
    const nameSpan = document.createElement('span');
    nameSpan.innerText = `${productName} `;
    cartItem.appendChild(nameSpan);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('btn');
    removeButton.classList.add('btn-outline-danger');
    removeButton.classList.add('btn-sm');
    removeButton.classList.add('remove-from-cart');
    removeButton.addEventListener('click', removeFromCart);

    cartItem.appendChild(removeButton);
    cartItemsContainer.appendChild(cartItem);
}

function removeFromCart(event) {
      const cartItem = event.target.parentElement;
      cartItemsContainer.removeChild(cartItem);
    }