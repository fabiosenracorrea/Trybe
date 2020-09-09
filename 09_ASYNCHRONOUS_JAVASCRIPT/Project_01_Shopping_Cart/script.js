function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.alt = 'Product_img';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function calculateCartTotalPrice() {
  const productsSaved = JSON.parse(localStorage.getItem('products'));
  let priceElement = document.querySelector('.total-price');

  if (!priceElement) {
    const createdPriceElement = document.createElement('p');
    createdPriceElement.className = 'total-price';
    document.querySelector('.cart-content').appendChild(createdPriceElement);
    priceElement = document.querySelector('.total-price');
  }

  if (productsSaved && productsSaved[0]) {
    const totalPrice = productsSaved.reduce((start, next) => start + next.salePrice, 0);
    const priceFormated = totalPrice.toFixed(2);
    priceElement.innerText = `${priceFormated}`;
  } else {
    priceElement.remove();
  }
}

function addClickedItemToCart(element) {
  document
    .querySelector('.cart__items')
    .appendChild(element);
}

function getCartElementSKU(element) {
  const elementDescription = element.innerText;
  return elementDescription.match(/MLB[0-9]+/)[0];
}

function clearCarfOffScreenIfEmpty() {
  const productsSaved = JSON.parse(localStorage.getItem('products')) || [];
  const cartContainer = document.querySelector('.cart');
  const itemContainer = document.querySelector('.items');

  if (!productsSaved[0] || !productsSaved) {
    cartContainer.style.display = 'none';
    itemContainer.style.flexBasis = '100%';
    return;
  }

  cartContainer.style.display = 'flex';
  itemContainer.style.flexBasis = '70%';
}

function cartItemClickListener(event) {
  const cartProducts = JSON.parse(localStorage.getItem('products'));

  const elementSKU = getCartElementSKU(event.target);

  const productIndex = cartProducts.findIndex(item => item.sku === elementSKU);

  cartProducts.splice(productIndex, 1);
  localStorage.setItem('products', JSON.stringify(cartProducts));

  event.target.remove();
  calculateCartTotalPrice();
  clearCarfOffScreenIfEmpty();
}

function createCartItemElement({ sku, name, salePrice, image }) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const img = createProductImageElement(image);

  const container = document.createElement('div');
  container.className = 'cart-item-container';

  p.className = 'cart__item';
  p.innerText = `Produto: ${name} \n\n Código: ${sku} \n\n Preço: $${salePrice}`;

  container.appendChild(img);
  container.appendChild(p);

  li.appendChild(container);

  li.addEventListener('click', cartItemClickListener);
  return li;
}

function loadCartItems() {
  document.querySelector('.cart__items').innerHTML = '';
  clearCarfOffScreenIfEmpty();

  const productsSaved = JSON.parse(localStorage.getItem('products'));

  if (productsSaved) {
    productsSaved.forEach((product) => {
      const cartItem = createCartItemElement(product);
      addClickedItemToCart(cartItem);
    });
    calculateCartTotalPrice();
  }
}

function saveToLocalStorage({ id: sku, title: name, price: salePrice, thumbnail: image }) {
  const productsSaved = JSON.parse(localStorage.getItem('products')) || [];

  const itemSaved = productsSaved.find(item => item.sku === sku);

  if (!itemSaved) {
    productsSaved.push({ sku, name, salePrice, image });
    localStorage.setItem('products', JSON.stringify(productsSaved));
  }
}

function enableEmptyCartButton() {
  const emptyBtn = document.querySelector('.empty-cart');

  emptyBtn.onclick = () => {
    localStorage.removeItem('products');
    calculateCartTotalPrice();
    loadCartItems();
  };
}

async function getAPIdata() {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

  let products;

  await fetch(url)
    .then(res => res.json())
    .then((resJson) => {
      products = resJson.results;
    })
    .catch(() => {
      products = [];
    });

  return products;
}

function buildAvailableProducts(products) {
  const container = document.querySelector('.items');

  products.forEach((product) => {
    const productElement = createProductItemElement(product);

    productElement
      .querySelector('.item__add')
      .addEventListener('click', () => {
        saveToLocalStorage(product);
        loadCartItems();
        calculateCartTotalPrice();
      });

    container.appendChild(productElement);
  });
}

function loading(load = true) {
  const container = document.querySelector('.items');
  container.innerHTML = '';

  if (load) {
    const loaderContainer = document.createElement('div');
    loaderContainer.style.display = 'flex';
    loaderContainer.style.alignItems = 'center';

    const loader = document.createElement('div');
    loader.className = 'loader';

    const loaderText = document.createElement('p');
    loaderText.appendChild(document.createTextNode('loading...'));
    loaderText.className = 'loading';

    loaderContainer.appendChild(loader);
    loaderContainer.appendChild(loaderText);

    container.appendChild(loaderContainer);
  }
}

async function buildProductsOnScreen() {
  loading();
  const products = await getAPIdata();
  loading(false);

  buildAvailableProducts(products);
  updateCartValues();
}

async function updateCartProducts(product) {
  try {
    const productNow = await fetch(`https://api.mercadolibre.com/items/${product.sku}`);
    const productInfo = await productNow.json();
    const { title: name, price: salePrice, thumbnail: image } = productInfo;

    const updatedProduct = {
      ...product,
      name,
      salePrice,
      image,
    }

    return updatedProduct;
  } catch (err) {
    return null;
  }
}

async function updateCartValues() {
  const productsSaved = JSON.parse(localStorage.getItem('products'));

  if (productsSaved && productsSaved[0]) {
    const updatedProducts = await productsSaved.reduce(async (start, item) => {
      const updatedItem = await updateCartProducts(item);

      if (updatedItem) {
        return [...start, updatedItem];
      }

      return start;
    }, []);

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    loadCartItems();
  }
}

window.onload = function onload() {
  buildProductsOnScreen();
  enableEmptyCartButton();
  updateCartValues();
  clearCarfOffScreenIfEmpty();
};
