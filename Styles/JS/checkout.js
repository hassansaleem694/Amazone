import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let totalPrice =0;

//Getting Data From Local Storage
cart = JSON.parse(localStorage.getItem('cart'));
if(!cart)
{
  cart.push({
    productId : 'ea7393d8-4b8d-4c5e-a19b-6933c4411c5d',
    quantity: 1,
    delieverOptionId : '1',
    tax: 0
  });

  cart.push({
    productId : '9a9b3b0a-7d4d-409e-9f5b-67b7620f4c94',
    quantity: 1,
    deleiveryOptionId : '2',
    tax:0
  });
}

totalQuantity = JSON.parse(localStorage.getItem('totalQuantity'));
if(!totalQuantity)
{
  totalQuantity=0;
}

document.querySelector('.checkout-inner-text').innerHTML = `${totalQuantity} items`;

//--------------------------------- Generating HTML on Webpage -----------------------

let checkoutPageHTML = '';

console.log(cart);

  if(cart.length === 0)
  {
    document.querySelector('.checkout-products-container').innerHTML = `Your Cart is Empty. First Add Products To You Cart.`;
  }

  cart.forEach((cartItem) => {
    products.forEach((product) => {
      if(product.id === cartItem.productId)
      {
        totalPrice = totalPrice + (product.price*cartItem.quantity);     
        checkoutPageHTML += 
         `
         <div class="one-prduct-container">
          <div class="date-day" id = '${product.id}'>
           Delivery date: ${dayjs().add(7, 'day').format('dddd-MMMM-D')}
          </div>
          <div class="Image-and-details">
            <div class="image-container">
              <img class="product-image" src="${product.image}" alt="">
            </div>
              <div class="image-details">
                <div style="margin-left: 10px;">
                <p class="cart-item-name">${product.name}</p>
                <p class="cart-item-price">$${((product.price)/100).toFixed(2)}</p>
                <p class="cart-item-quantity">Quantity: <span class = "item-numbers">${cartItem.quantity}</span> <span class="cart-item-update">Update</span> <span class="cart-item-delete" data-product-id = '${product.id}'>Delete</span></p>
              </div>
              <div>
                <div class="radio-buttons">
                  <p class="delivery-option">Choose a delivery option:</p>
                  ${generateRadioButtons(product, cartItem)}
                </div>
              </div>
            </div>
          </div>
        </div>
         `;
      }
    });
  
  });


document.querySelector('.all-products-container').innerHTML = checkoutPageHTML;
document.querySelector('.order-summary-items').innerHTML = `${totalQuantity}`;

let totalTax = 0 ;
for(let i=0 ; i<cart.length ; i++)
{
  totalTax += cart[i].tax;
}

document.querySelector('.shipping-and-handling').innerHTML = `$${(totalTax/100).toFixed(2)}`;

//Update The Whole WebPage Payment Summary

document.querySelector('.item-price').innerHTML = `$${((totalPrice)/100).toFixed(2)}`;
document.querySelector('.item-tax-price').innerHTML = `$${((totalPrice+totalTax)/100).toFixed(2)}`;
document.querySelector('.estimate-tax-item-price').innerHTML = `$${((((totalPrice + totalTax)/10))/100).toFixed(2)}`;
document.querySelector('.items-total-price').innerHTML = `$${((totalPrice + totalTax + ((totalPrice + totalTax)/10))/100).toFixed(2)}`;
//Function To Generate the RadioButtons

function generateRadioButtons(product)
{
  let html='';

  delieverOptions.forEach((delieverOption, cartItme) => {

    const day = dayjs();
    const delieveryDate = day.add(delieverOption.days, 'day');
    const dateString = delieveryDate.format('dddd, MMMM D');

    if(delieverOption.taxPrice === 0)
   {
      html += `<div class="each-radio-button">
                 <div style="display: flex;">
                    <div class="button-input">
                     <input class="radio radio-${product.id} js-radio-button" type="radio" name="${product.id}" data-date-day = ${delieveryDate.format('dddd-MMMM-D')} data-product-id = ${product.id} checked>
                    </div>
                    <div class="shipping-details">
                      <p class="day">${dateString}</p>
                      <p class="shipping">FREE Shipping</p>
                    </div>
                    </div> 
                 </div>`;
    }
    else
    {
      html +=  `<div class="each-radio-button">
                  <div style="display: flex;">
                    <div class="button-input">
                    <input class="radio radio-${product.id} js-radio-button" type="radio" name="${product.id}" data-date-day = ${delieveryDate.format('dddd-MMMM-D')} data-product-id = ${product.id}>
                    </div>
                    <div class="shipping-details">
                      <p class="day">${dateString}</p>
                      <p class="shipping">$${(delieverOption.taxPrice)/100} - Shipping</p>
                     </div>
                  </div> 
                </div>`;
   }

  });

  return html;
} 



//Delete Item From Cart clicking on Delete

let deleteItemProductId = '';
let deleteItemProductQuantity = 0;

document.querySelectorAll('.cart-item-delete').forEach((span) => {
  span.addEventListener('click', ()=>{
    const productID = span.dataset.productId;

//updating Order Summary

    let price = 0;
    let productTax = 0;

   for(let i=0 ; i<products.length ; i++)
   {
    if(productID === products[i].id)
    {
      price = products[i].price;
    }
   }

   let num=0;

   for(let i=0 ; i<cart.length ; i++)
   {
    if(productID === cart[i].productId)
    {
      price = price*cart[i].quantity
      num = cart[i].quantity;
      cart[i].tax = 0;            //Set tHe Tax Zero to the Deleted Product
    }
   }


//Deleting Item From Cart
for (let i = cart.length - 1; i >= 0; i--) {               
  if (productID === cart[i].productId) {
    cart.splice(i, 1);
  }
}

//Updating the HTML Of the Page

location.reload();

//Updating the Order Summary 

if(cart.length === 0)
  {
    document.querySelector('.order-summary-items').innerHTML = `0.00`;
    document.querySelector('.order-summary-items').innerHTML = `0.00`;
    document.querySelector('.item-price').innerHTML = `$0.00`;
    document.querySelector('.item-tax-price').innerHTML = `$0.00`;
    document.querySelector('.estimate-tax-item-price').innerHTML = `$0.00`;
    document.querySelector('.items-total-price').innerHTML = `$0.00`;
  }


//Deleting From WebPage
totalQuantity -= num;
document.querySelector('.checkout-inner-text').innerHTML = `${totalQuantity} items`;
const element = document.querySelector('.one-prduct-container').remove();
localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));    //Updating Total Quantity Local Storage


//Calculating the Tax

let totalTax = 0 ;
for(let i=0 ; i<cart.length ; i++)
{
  totalTax += cart[i].tax;
}

//Updating the Order Summary On WebPage

document.querySelector('.shipping-and-handling').innerHTML = `$${(totalTax/100).toFixed(2)}`;
document.querySelector('.order-summary-items').innerHTML = `${totalQuantity}`;
document.querySelector('.item-price').innerHTML = `$${((totalPrice - price)/100).toFixed(2)}`;
document.querySelector('.item-tax-price').innerHTML = `$${((totalPrice - price)/100).toFixed(2)}`;
document.querySelector('.estimate-tax-item-price').innerHTML = `$${((((totalPrice + totalTax)/10))/100).toFixed(2)}`;
document.querySelector('.items-total-price').innerHTML = `$${(((totalPrice - price) + (totalPrice - price)/100)/100).toFixed(2)}`;

//Updating the Cart in local Storage

localStorage.setItem('cart', JSON.stringify(cart));

  });
});

//------------------- Changinging the Date When Click On Radio Button --------------------------------

document.querySelectorAll('.js-radio-button').forEach((input) => {
  let tax =0;
  input.addEventListener('click', () => {

      const element = input.dataset.productId;
      
      document.getElementById(element).innerHTML = `Delivery date: ${input.dataset.dateDay}`;

//For Tax Calculation Storing the Tax As An Element of the Cart Array 

      if(document.getElementById(element).innerHTML === `Delivery date: ${dayjs().add(3, 'day').format('dddd-MMMM-D')}`)
      {
        tax = 499;        
        for(let i =0 ; i<cart.length ; i++)
        {
          if(cart[i].productId === element)
          {
            cart[i].delieverOptionId = '2';
            cart[i].tax = 499;
          }
        }

      }
      else if(document.getElementById(element).innerHTML === `Delivery date: ${dayjs().add(1, 'day').format('dddd-MMMM-D')}`)
      {
        tax =999;
        for(let i =0 ; i<cart.length ; i++)
          {
            if(cart[i].productId === element)
            {
              cart[i].delieverOptionId = '3';
              cart[i].tax = 999;
            }
          }
      }
      else
      {
        tax = 0;
        for(let i =0 ; i<cart.length ; i++)
          {
            if(cart[i].productId === element)
            {
              cart[i].delieverOptionId = '1';
              cart[i].tax = 0;
            }
          }
      }

//Update the Tax On WebPage

      let totalTax = 0 ;
      for(let i=0 ; i<cart.length ; i++)
      {
        totalTax += cart[i].tax;
      }
    
      document.querySelector('.shipping-and-handling').innerHTML = `$${(totalTax/100).toFixed(2)}`;

//Update The Whole WebPage Payment Summary

      document.querySelector('.item-price').innerHTML = `$${((totalPrice)/100).toFixed(2)}`;
      document.querySelector('.item-tax-price').innerHTML = `$${((totalPrice+totalTax)/100).toFixed(2)}`;
      document.querySelector('.estimate-tax-item-price').innerHTML = `$${((((totalPrice + totalTax)/10))/100).toFixed(2)}`;
      document.querySelector('.items-total-price').innerHTML = `$${((totalPrice + totalTax + ((totalPrice + totalTax)/10))/100).toFixed(2)}`;

  });

});

//Confirming the Order

document.querySelector('.place-order').addEventListener ('click', () => {

  if(cart.length===0)
  {
    alert('Your Cart is Empty, Kindly First Add Products In Your Cart.');
    window.history.back();
  }
  else if(cart.length >= 0)
    {
      alert('Your Order has been Confirmed');
    }
 
});
