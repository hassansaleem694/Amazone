import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

//---------------- Displaying HTML ON Webpage ------------------

  let trackingPageHTML = '';

    cart.forEach((cartItem) => {

      products.forEach((product) => {
        if(localStorage.getItem('ID') === product.id && localStorage.getItem('ID') === cartItem.productId)
        {
          trackingPageHTML = 
          `
          <div>
            <p class="Arriving-date">Arriving on ${dayjs().add(7, 'day').format('dddd, MMMM D')}</p>
            <p class="Product-name">${product.name}</p>
            <p class="Quantity">Quantity: ${cartItem.quantity}</p>
          </div>
          <div>
            <img class="product-image" src="${product.image}" alt="">
          </div>
          `;
        }
      });
    });

    document.querySelector('.one-product-detail').innerHTML = trackingPageHTML;



