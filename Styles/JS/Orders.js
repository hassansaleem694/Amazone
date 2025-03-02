import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let productID ='';

let OrderHTML = '';
let totalPrice = 0;

cart.forEach((cartItem) => {
    products.forEach( (product) => {
      if(product.id === cartItem.productId)
      {
        totalPrice = totalPrice + product.price;

        OrderHTML += 
        `
          <div class="Image-and-details"> 
            <div class="image-container">
              <img class="product-image" src="${product.image}">
            </div>
            <div class="image-details">
              <div style="margin-left: 10px;">
                <p class="cart-item-name">${product.name}</p>
                <p class="cart-item-arriving-date">Arriving On: ${dayjs().add(7, 'day').format('MMMM D')}</p>
                <p class="quantity">Quantity: <span>${cartItem.quantity}</span></p>
                <div>
                  <button class="Buy-it-again">
                    <img style="width: 17px; margin-right: 5px;" src="Pics/Icons/buy-again.png" alt="">
                    Buy it again
                  </button>
                </div>   
              </div>
              <div>
                <a href="Tracking.html">
                  <button class="tracking-button js-tracking-button" data-product-id = ${product.id}>Track Product</button>
                </a>
              </div>
            </div>
          </div>`;
      }
    }); 

});

const estimateTax = totalPrice/10;


let html =
    `
     <div class="name-price">
        <div>
          <p style="font-weight: 500;">Order Placed</p>
          <p>${dayjs().format('dddd, MMMM D')}</p>
        </div>

        <div>
          <p style="font-weight: 500;">Total</p>
          <p>$${((totalPrice + estimateTax)/100).toFixed(2)}</p>
        </div>
      </div>
      <div>
        <p style="font-weight: 500;">Order ID</p>
        <p>b3b422f9-44a1-9cf5-9b03-421f112eaf87</p>
      </div>
    `;

  document.querySelector('.name-price-id-details').innerHTML = html;
  document.querySelector('.one-product-container').innerHTML = OrderHTML; 


  //------------------- TRACKING PRODUCT ONCLICK --------------------------

  document.querySelectorAll('.js-tracking-button').forEach((button) => {
    button.addEventListener('click', () => {
      productID = button.dataset.productId;
      console.log(productID);

      localStorage.setItem('ID', productID);
    });
   });
