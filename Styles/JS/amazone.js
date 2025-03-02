const products = [
  {
    image: 'Pics/Products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks',
    rating: {
      star: 'Pics/Ratings/rating-35.png',
      count: 87
    },
    price: 2095,
    id : 'de305d54-75b4-431b-adb2-eb6b9e546014'
  },
  {
    image: 'Pics/Products/6-piece-non-stick-baking-set.webp',
    name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 175
    },
    price: 3499,
    id: 'e83a4e4a-87fc-4a1d-9b5e-0667f8a2c83c'
  },
  {
    image: 'Pics/Products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 56
    },
    price: 799,
    id:'67b01c8d-1c8c-4627-9d0b-f1d587383c27'
  },
  {
    image: 'Pics/Products/black-2-slot-toaster.jpg',
    name: '2 Slot Toaster - Black',
    rating: {
      star: 'Pics/Ratings/rating-50.png',
      count: 2197
    },
    price: 1899,
    id : 'ecadf788-bd4d-4897-a53f-4a30f8b7168d'
  },
  {
    image: 'Pics/Products/6-piece-white-dinner-plate-set.jpg',
    name: '6 Piece White Dinner Plate Set',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 37
    },
    price: 2067,
    id : '8e2f9d8b-c3f0-451d-8f6e-2e8b1c328689'
  },
  {
    image: 'Pics/Products/backpack.jpg',
    name: '1 Piece backpack - Black',
    rating: {
      star: 'Pics/Ratings/rating-35.png',
      count: 67
    },
    price: 3047,
    id : '42c5e56d-4d2c-4391-9f28-0f7bb4e2fef5'
  },
  {
    image: 'Pics/Products/bathroom-rug.jpg',
    name: 'Bathroom Bath Rug Mat 20 x 31 Inch - Grey',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 119
    },
    price: 1250,
    id : 'bc1c26d0-1af4-4b57-b6d1-5ae7ae3e052d'
  },
  {
    image: 'Pics/Products/blackout-curtains-black.jpg',
    name: 'Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 363
    },
    price: 3099,
    id : 'f019f2cb-65f3-4fa1-8b58-0b565ff0e26c'
  },
  {
    image: 'Pics/Products/coffeemaker-with-glass-carafe-black.jpg',
    name: 'Coffeemaker with Glass Carafe and Reusable Filter -',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 1211
    },
    price: 2250,
    id: '53c8a7d8-679c-4df0-8e3c-cd8de3a5e874'
  },
  {
    image: 'Pics/Products/double-elongated-twist-french-wire-earrings.webp',
    name: 'Double Oval Twist French Wire Earrings - Gold',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 117
    },
    price: 2400,
    id: 'ed73341f-1232-4e64-bd5c-58c8f0037f2a'
  },
  {
    image: 'Pics/Products/countertop-blender-64-oz.jpg',
    name: 'Countertop Blender - 64oz, 1400 Watts',
    rating: {
      star: 'Pics/Ratings/rating-30.png',
      count: 7
    },
    price: 10747,
    id:'5b2a4c28-cf56-4a8a-aaf6-8a827d5b3d85'
  },
  {
    image: 'Pics/Products/non-stick-cooking-set-15-pieces.webp',
    name: 'Coffeemaker with Glass Carafe and Reusable Filter -',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 1211
    },
    price: 2250,
    id : '2b4d9cb3-0b51-4b38-b8c2-df64a8cbbf94'
  },
  {
    image: 'Pics/Products/round-airtight-food-storage-containers.jpg',
    name: 'Round Airtight Food Storage Containers - 5 Piece',
    rating: {
      star: 'Pics/Ratings/rating-25.png',
      count: 126
    },
    price: 2899,
    id : '24d6b59b-65d4-4f6d-a53b-682e446f787b'
  },
  {
    image: 'Pics/Products/vanity-mirror-silver.jpg',
    name: 'Vanity Mirror with Heavy Base - Chrome',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 130
    },
    price: 1649,
    id : '05ea9c3e-4ff0-45b3-8ff9-3ae0891b0c56'
  },
  {
    image: 'Pics/Products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
      star: 'Pics/Ratings/rating-20.png',
      count: 17
    },
    price: 2095,
    id : '15b5e1b4-f07e-4c4e-80b7-d26e09a3d434'
  },
  {
    image: 'Pics/Products/floral-mixing-bowl-set.jpg',
    name: '10-Piece Mixing Bowl Set with Lids - Floral',
    rating: {
      star: 'Pics/Ratings/rating-50.png',
      count: 679
    },
    price: 3899,
    id : '27b4e1e5-7a86-464e-b05e-8e568b79a98f'
  },
  {
    image: 'Pics/Products/men-cozy-fleece-zip-up-hoodie-red.jpg',
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 3157
    },
    price: 2400,
    id : 'c53d6b24-8c43-466e-b2b6-5c339fbf64b4'
  },
  {
    image: 'Pics/Products/men-slim-fit-summer-shorts-gray.jpg',
    name: 'Men\'s Slim-Fit Summer Shorts',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 160
    },
    price: 1699,
    id : 'ae5e67a2-8a6b-426a-9d55-4f4bb9a9f186'
  },
  {
    image: 'Pics/Products/round-sunglasses-black.jpg',
    name: 'Round Sunglasses',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 30
    },
    price: 1560,
    id : '9e5b98c4-65b4-4f9f-9cf0-035a4b2e9d34'
  },
  {
    image: 'Pics/Products/women-chiffon-beachwear-coverup-black.jpg',
    name: 'Women\'s Chiffon Beachwear Cover Up - Black',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 325
    },
    price: 2070,
    id : 'e8d27e7a-7e63-4290-b1af-16f55f69d62f'
  },
  {
    image: 'Pics/Products/women-knit-ballet-flat-black.jpg',
    name: 'Women\'s Knit Ballet Flat',
    rating: {
      star: 'Pics/Ratings/rating-35.png',
      count: 326
    },
    price: 2640,
    id : 'd0c89407-4f4b-482c-b5a5-161c423507c4'
  },
  {
    image: 'Pics/Products/women-chunky-beanie-gray.webp',
    name: 'Women\'s Chunky Cable Beanie - Gray',
    rating: {
      star: 'Pics/Ratings/rating-50.png',
      count: 83
    },
    price: 1250, 
    id : 'a5d639d7-1e44-4c8f-9e8b-9f3a0c8d7b56'
  },
  {
    image: 'Pics/Products/men-chino-pants-beige.jpg',
    name: 'Men\'s Classic-fit Pleated Chino Pants',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 9017
    },
    price: 2290,
    id : '80f8c7ec-926f-48d0-9eaf-3403d3b3a1d1'
  },
  {
    image: 'Pics/Products/duvet-cover-set-blue-twin.jpg',
    name: 'Duvet Cover Set with Zipper Closure',
    rating: {
      star: 'Pics/Ratings/rating-20.png',
      count: 456
    },
    price: 2399,
    id : 'a67b4827-1b1e-43f0-b053-3d3ac798bc34',
  },
  {
    image: 'Pics/Products/cotton-bath-towels-teal.webp',
    name: '100% Cotton Bath Towels - 2 Pack, Light Teal',
    rating: {
      star: 'Pics/Ratings/rating-45.png',
      count: 93
    },
    price: 2110,
    id : '1d49e2a2-4f9f-4631-81d3-29a4b776ea2b'
  },
  {
    image: 'Pics/Products/electric-glass-and-steel-hot-water-kettle.webp',
    name: 'Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter',
    rating: {
      star: 'Pics/Ratings/rating-50.png',
      count: 846
    },
    price: 3074,
     id : 'ea7393d8-4b8d-4c5e-a19b-6933c4411c5d'
  },
  {
    image: 'Pics/Products/straw-sunhat.webp',
    name: 'Straw Lifeguard Sun Hat',
    rating: {
      star: 'Pics/Ratings/rating-15.png',
      count: 11
    },
    price: 2200,
     id : '9a9b3b0a-7d4d-409e-9f5b-67b7620f4c94'
  },
  {
    image: 'Pics/Products/straw-sunhat.webp',
    name: 'Straw Lifeguard Sun Hat',
    rating: {
      star: 'Pics/Ratings/rating-15.png',
      count: 11
    },
    price: 2200,
     id : '9a9b3b0a-7d4d-409e-9f5b-67b7620f4c94'
  },
  {
    image: 'Pics/Products/straw-sunhat.webp',
    name: 'Straw Lifeguard Sun Hat',
    rating: {
      star: 'Pics/Ratings/rating-15.png',
      count: 11
    },
    price: 2200,
     id : '9a9b3b0a-7d4d-409e-9f5b-67b7620f4c94'
  }

  
];


//Getting Data from Local Storage

// cart = JSON.parse(localStorage.getItem('cart'));
//     if(cart === null) 
//     {
//       cart.push({
//         productId : 'ea7393d8-4b8d-4c5e-a19b-6933c4411c5d',
//         quantity: 1,
//         delieverOptionId : '1',
//         tax: 0
//       });
    
//       cart.push({
//         productId : '9a9b3b0a-7d4d-409e-9f5b-67b7620f4c94',
//         quantity: 1,
//         deleiveryOptionId : '2',
//         tax:0
//       });
//     }


    totalQuantity = JSON.parse(localStorage.getItem('totalQuantity'));
    if(!totalQuantity)
    {
      totalQuantity=0;
    }

//---------------------Executing Array-----------------

let htmlOutput = '';

products.forEach((product) => {
  htmlOutput += `
    <div class="Product-block">
      <div>
        <img class="product-image" src="${product.image}" alt="">
      </div>
      <div class="product-Description">
        <p class="product-name">${product.name}</p>
      </div>
      <div class="rating-details">
        <div class="rating-div">
          <img class="rating-stars" src="${product.rating.star}" alt="">
        </div>
        <div>
          <p class="rating-number">${product.rating.count}</p>
        </div>
      </div>
      <div class="price">
        <p class="product-price">$${(product.price / 100).toFixed(2)}</p>
      </div>
      <div class="quantity-list">
        <select class="quantity-list-box" name="quantity-number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
        <div class="success-div">
         
        </div>
      <div class="cart-button">
        <button class="add-to-cart-button" data-product-id = "${product.id}">
          Add to Cart
        </button>
      </div>
    </div>`;
});

document.querySelector('.main-grid').innerHTML = htmlOutput;

//-------------------- ADD TO CART BUTTON------------------

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {

    const productId = button.dataset.productId;
    let matchinItem;

//Adding Items To the Cart

    cart.forEach((item) => {
      if(productId === item.productId)
      {
        matchinItem = item;
      }
    });

    if(matchinItem)
    {
      matchinItem.quantity += 1;
      totalQuantity += 1;
      document.querySelector('.cart-quantity').innerHTML = totalQuantity;
    }
    else
    {
      cart.push({
        productId : productId,
        quantity: 1,
        delieverOptionId : '1',
        tax: 0
      })

      totalQuantity += 1;
      document.querySelector('.cart-quantity').innerHTML = totalQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
    
  });
});

document.querySelector('.image').addEventListener('click', ()=>{
  window.scrollTo({
    top : 0,
    behavior: 'smooth'
  });
});